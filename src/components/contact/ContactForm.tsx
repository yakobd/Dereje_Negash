"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const inputClasses =
  "w-full rounded-md border border-gray-200 px-4 py-3 text-[#0A1628] transition focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      transition={{ duration: 0.6 }}
      className="h-full rounded-2xl bg-white p-10 shadow-md"
    >
      {submitted ? (
        <div className="flex flex-col items-center justify-center h-full text-center py-12">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
            <span className="text-3xl text-green-600">✓</span>
          </div>
          <p className="mt-6 text-lg font-semibold text-[#0A1628]">
            Message sent! I&apos;ll be in touch soon.
          </p>
        </div>
      ) : (
        <>
          <h3 className="text-2xl font-bold text-[#0A1628]">
            Send a Message
          </h3>
          <p className="mt-2 text-[#6B7280]">
            Fill in the form below and I&apos;ll get back to you shortly.
          </p>

          <div className="mt-6 h-px bg-[#C9A84C] opacity-30" />

          <div className="mt-8 flex flex-col gap-6">
            <div>
              <label className="font-medium text-[#0A1628]">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`mt-2 ${inputClasses}`}
              />
            </div>

            <div>
              <label className="font-medium text-[#0A1628]">
                Email Address
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`mt-2 ${inputClasses}`}
              />
            </div>

            <div>
              <label className="font-medium text-[#0A1628]">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+251 9xx xxx xxx"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`mt-2 ${inputClasses}`}
              />
            </div>

            <div>
              <label className="font-medium text-[#0A1628]">Message</label>
              <textarea
                rows={5}
                placeholder="Tell me about your accounting needs..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`mt-2 ${inputClasses}`}
              />
            </div>

            <button
              type="button"
              onClick={() => setSubmitted(true)}
              className="w-full rounded-md bg-[#C9A84C] py-3 font-semibold text-[#0A1628] transition-colors hover:bg-[#E8C97A]"
            >
              Send Message
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
}
