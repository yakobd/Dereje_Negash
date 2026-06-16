'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      "Dereje has completely transformed how I manage my business finances. His monthly reports are clear, timely, and incredibly helpful for decision-making.",
    name: 'Amanuel T.',
    label: 'Small Business Owner, Addis Ababa',
  },
  {
    quote:
      "I've worked with several accountants before, but Dereje stands out for his professionalism and attention to detail. Highly recommended.",
    name: 'Selam G.',
    label: 'Independent Consultant, Addis Ababa',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function TestimonialsPreview() {
  return (
    <section className="bg-[#F8F7F4] py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-[#C9A84C]">
            Client Testimonials
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0A1628]">
            What Clients Say
          </h2>
          <p className="mt-4 text-[#6B7280] max-w-xl mx-auto">
            Trusted by individuals and businesses across Addis Ababa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map(({ quote, name, label }, index) => (
            <motion.div
              key={name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="rounded-xl bg-white p-8 shadow-md border-l-4 border-[#C9A84C]"
            >
              <Quote size={32} className="text-[#C9A84C]" />
              <p className="mt-4 italic text-[#0A1628]">{quote}</p>
              <p className="mt-6 font-bold text-[#0A1628]">{name}</p>
              <p className="text-sm text-[#6B7280]">{label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/testimonials"
            className="font-semibold text-[#C9A84C] transition-colors hover:text-[#E8C97A]"
          >
            Read All Testimonials →
          </Link>
        </div>
      </div>
    </section>
  );
}
