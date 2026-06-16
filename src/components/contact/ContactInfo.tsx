"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const infoRows = [
  {
    icon: Phone,
    label: "Phone",
    value: "+251911688681",
    href: "tel:+251911688681",
  },
  {
    icon: MapPin,
    label: "Office",
    value:
      "4 Kilo, Holy Trinity Theological College Building, 1st Floor, Addis Ababa",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Monday – Friday, 8:00 AM – 5:00 PM",
  },
  {
    icon: Mail,
    label: "Email",
    value: "Available upon request",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactInfo() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      transition={{ duration: 0.6 }}
      className="h-full rounded-2xl bg-[#0A1628] p-10"
    >
      <h3 className="text-2xl font-bold text-white">Contact Information</h3>
      <p className="mt-2 text-[#6B7280]">
        Reach out through any of the channels below.
      </p>

      <div className="mt-6 h-px bg-[#C9A84C] opacity-30" />

      <div className="mt-8 flex flex-col gap-6">
        {infoRows.map(({ icon: Icon, label, value, href }) => (
          <div key={label} className="flex items-start gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1B3A6B] flex-shrink-0">
              <Icon size={18} className="text-[#C9A84C]" />
            </div>
            <div>
              <p className="font-bold text-white">{label}</p>
              {href ? (
                <a
                  href={href}
                  className="text-[#C9A84C] transition-colors hover:text-[#E8C97A]"
                >
                  {value}
                </a>
              ) : (
                <p className="text-[#6B7280]">{value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <a
        href="https://maps.app.goo.gl/eC7N2qRrxY3GRCkn8"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 block w-full rounded-md bg-[#C9A84C] px-6 py-3 text-center font-semibold text-[#0A1628] transition-colors hover:bg-[#E8C97A]"
      >
        View on Google Maps
      </a>
    </motion.div>
  );
}
