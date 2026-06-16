"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[#0A1628] py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#1B3A6B,_#0A1628_70%)]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
        className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <span className="h-px w-10 bg-[#C9A84C]" />
          <span className="text-sm font-medium text-[#C9A84C]">
            What I Offer
          </span>
          <span className="h-px w-10 bg-[#C9A84C]" />
        </motion.div>

        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-white"
        >
          Professional Accounting Services
        </motion.h1>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mt-6 text-lg text-[#6B7280]"
        >
          Reliable, accurate, and tailored financial services for
          individuals and businesses in Addis Ababa, Ethiopia.
        </motion.p>
      </motion.div>
    </section>
  );
}
