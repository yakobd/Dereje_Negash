"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Briefcase, FileText, Users } from "lucide-react";

const credentials = [
  {
    icon: BadgeCheck,
    title: "Licensed",
    description:
      "Holds a valid Ethiopian business license for professional accounting services.",
  },
  {
    icon: Briefcase,
    title: "5+ Years Experience",
    description:
      "Over five years delivering accurate, timely accounting services to diverse clients.",
  },
  {
    icon: FileText,
    title: "Financial Reporting",
    description:
      "Specialized in preparing compliant annual financial statements and reports.",
  },
  {
    icon: Users,
    title: "50+ Clients Served",
    description:
      "A growing roster of satisfied individuals and businesses across Addis Ababa.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Credentials() {
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
            Credentials & Experience
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
            Built on Trust and Expertise
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {credentials.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-xl bg-[#1B3A6B] p-8 text-center border-b-2 border-transparent transition-colors hover:border-[#C9A84C]"
            >
              <div className="mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-[#0A1628]">
                <Icon size={22} className="text-[#C9A84C]" />
              </div>
              <h3 className="mt-6 font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm text-[#6B7280]">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
