'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function CTABanner() {
  return (
    <section className="bg-[#C9A84C] py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628]">
          Ready to Get Your Finances in Order?
        </h2>
        <p className="mt-4 text-[#0A1628]/80">
          Let&apos;s work together. Reach out today and take the first step
          toward financial clarity.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-md bg-[#0A1628] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#0A1628]/80"
          >
            Contact Me Now
          </Link>
          <Link
            href="/services"
            className="rounded-md border border-[#0A1628] px-8 py-3 font-semibold text-[#0A1628] transition-colors hover:bg-[#0A1628] hover:text-white"
          >
            View Services
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
