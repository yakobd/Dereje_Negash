'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BookOpen, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: BookOpen,
    title: 'Monthly Accounting & Bookkeeping',
    description:
      'Stay on top of your finances every month. I handle your records, reconciliations, and reports so you can focus on growing your business.',
  },
  {
    icon: BarChart3,
    title: 'Annual Financial Reporting',
    description:
      'Accurate, compliant annual financial statements prepared to give you a clear picture of your business performance.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesSnapshot() {
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
            What I Offer
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0A1628]">
            Services
          </h2>
          <p className="mt-4 text-[#6B7280] max-w-xl mx-auto">
            Tailored accounting solutions for individuals and businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group rounded-xl bg-white p-8 shadow-md border-b-2 border-transparent transition-colors hover:border-[#C9A84C]"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0A1628]">
                <Icon size={22} className="text-[#C9A84C]" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#0A1628]">
                {title}
              </h3>
              <p className="mt-3 text-[#6B7280]">{description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="font-semibold text-[#C9A84C] transition-colors hover:text-[#E8C97A]"
          >
            See All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
