"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  label: string;
  index: number;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function TestimonialCard({
  quote,
  name,
  label,
  index,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="h-full rounded-xl bg-white p-8 shadow-md border-l-4 border-[#C9A84C] transition-shadow hover:shadow-xl"
    >
      <Quote size={32} className="text-[#C9A84C]" />
      <p className="mt-4 italic text-[#0A1628]">{quote}</p>

      <div className="mt-4 h-px bg-[#C9A84C] opacity-30" />

      <p className="mt-4 font-bold text-[#0A1628]">{name}</p>
      <p className="text-sm text-[#6B7280]">{label}</p>
    </motion.div>
  );
}
