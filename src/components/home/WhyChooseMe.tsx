'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, Clock, Handshake } from 'lucide-react';

const points = [
  {
    icon: ShieldCheck,
    title: 'Licensed Professional',
    description:
      'Fully licensed and compliant with Ethiopian financial regulations.',
  },
  {
    icon: UserCheck,
    title: 'Client-Focused',
    description:
      'Every client gets personalized attention and tailored financial solutions.',
  },
  {
    icon: Clock,
    title: 'Always On Time',
    description:
      'Deadlines matter. Reports and filings are always delivered on schedule.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Partnership',
    description: 'I build lasting relationships, not one-time transactions.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function WhyChooseMe() {
  return (
    <section className="bg-[#0A1628] py-24">
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
            Why Work With Me
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
            Trusted. Accurate. Local.
          </h2>
          <p className="mt-4 text-[#6B7280] max-w-xl mx-auto">
            Here&apos;s what sets my accounting practice apart.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-xl bg-[#1B3A6B] p-8 text-center transition-transform duration-300 hover:scale-105"
            >
              <div className="mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-[#0A1628]">
                <Icon size={22} className="text-[#C9A84C]" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm text-[#6B7280]">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
