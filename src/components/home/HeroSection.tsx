'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { BadgeCheck, Clock, MapPin } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

const stats = [
  { icon: BadgeCheck, label: 'Licensed' },
  { icon: Clock, label: '5+ Years Experience' },
  { icon: MapPin, label: 'Based in Addis Ababa' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A1628]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#1B3A6B,_#0A1628_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.15 }}
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="h-px w-10 bg-[#C9A84C]" />
              <span className="text-sm font-medium text-[#C9A84C]">
                Certified Accountant · Addis Ababa, Ethiopia
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold text-white leading-tight"
            >
              Your Finances, Handled with Precision and Care
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-6 text-lg text-[#6B7280]"
            >
              Providing reliable monthly bookkeeping, annual financial reporting,
              and expert accounting services to individuals and businesses in Ethiopia.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row items-start gap-4"
            >
              <Link
                href="/services"
                className="rounded-md bg-[#C9A84C] px-8 py-3 font-semibold text-[#0A1628] transition-colors hover:bg-[#E8C97A]"
              >
                View Services
              </Link>
              <Link
                href="/contact"
                className="rounded-md border border-[#C9A84C] px-8 py-3 font-semibold text-[#C9A84C] transition-colors hover:bg-[#C9A84C] hover:text-[#0A1628]"
              >
                Get In Touch
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-14 flex flex-wrap items-center gap-8"
            >
              {stats.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-sm text-[#6B7280]"
                >
                  <Icon size={18} className="text-[#C9A84C]" />
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Profile Photo */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeRight}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Gold accent ring */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-[#C9A84C] to-[#1B3A6B] opacity-60 blur-sm" />
              {/* Photo */}
              <div className="relative rounded-2xl overflow-hidden w-80 h-96 lg:w-96 lg:h-[480px]">
                <Image
                  src="/profile.jpg"
                  alt="Dereje Negash - Certified Accountant"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Floating name card */}
              <div className="absolute -bottom-5 -left-5 bg-[#C9A84C] rounded-xl px-5 py-3 shadow-lg">
                <p className="text-[#0A1628] font-bold text-sm">Dereje Negash</p>
                <p className="text-[#0A1628]/70 text-xs">Certified Accountant</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
