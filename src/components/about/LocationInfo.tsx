"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

const infoRows = [
  {
    icon: MapPin,
    label: "Office Address",
    value:
      "4 Kilo, Holy Trinity Theological College Building, 1st Floor, Addis Ababa, Ethiopia",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+251911688681",
    href: "tel:+251911688681",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Monday – Friday, 8:00 AM – 5:00 PM",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function LocationInfo() {
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
            Find Me
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0A1628]">
            Office Location
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col gap-6">
              {infoRows.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0A1628] flex-shrink-0">
                    <Icon size={18} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0A1628]">{label}</p>
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
              className="mt-8 inline-block rounded-md bg-[#C9A84C] px-6 py-3 font-semibold text-[#0A1628] transition-colors hover:bg-[#E8C97A]"
            >
              View on Google Maps
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <iframe
              src="https://maps.google.com/maps?q=4+Kilo+Holy+Trinity+Theological+College+Addis+Ababa&output=embed"
              width="100%"
              height="380"
              style={{ border: 0 }}
              loading="lazy"
              className="rounded-xl shadow-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
