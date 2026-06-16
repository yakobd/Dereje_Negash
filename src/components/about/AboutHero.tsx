"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

export default function AboutHero() {
  return (
    <section className="bg-[#F8F7F4] min-h-[90vh] flex items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
          >
            <motion.span
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-sm font-semibold text-[#C9A84C]"
            >
              About Me
            </motion.span>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-2 text-4xl sm:text-5xl font-bold text-[#0A1628]"
            >
              Dereje Negash
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-2 text-lg font-medium text-[#C9A84C]"
            >
              Certified Accountant &amp; Financial Advisor
            </motion.p>

            <motion.span
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-6 block h-px w-16 bg-[#C9A84C]"
            />

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-6 text-[#6B7280]"
            >
              With over 5 years of experience in accounting and financial
              management, I have built a reputation for precision, reliability,
              and client-focused service. Based in Addis Ababa, I work closely
              with individuals, small businesses, and organizations to bring
              clarity and order to their finances.
            </motion.p>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-4 text-[#6B7280]"
            >
              I hold a valid business license and operate in full compliance
              with Ethiopian financial regulations. My goal is simple: to give
              every client the financial confidence they deserve.
            </motion.p>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-[#C9A84C] to-[#1B3A6B] opacity-60 blur-sm" />
              <div className="relative rounded-2xl overflow-hidden w-80 h-96 lg:w-96 lg:h-[480px]">
                <Image
                  src="/profile2.jpg"
                  alt="Dereje Negash - Certified Accountant"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
