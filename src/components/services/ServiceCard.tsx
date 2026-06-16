import { motion } from "framer-motion";
import { CheckCircle2, type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  details: string[];
  index: number;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  details,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="h-full rounded-xl bg-white p-8 shadow-md border-l-4 border-[#C9A84C] transition-shadow hover:shadow-xl"
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0A1628]">
        <Icon size={22} className="text-[#C9A84C]" />
      </div>
      <h3 className="mt-6 text-xl font-bold text-[#0A1628]">{title}</h3>
      <p className="mt-3 text-[#6B7280]">{description}</p>

      <div className="my-6 h-px bg-[#C9A84C] opacity-30" />

      <ul className="flex flex-col gap-3">
        {details.map((detail) => (
          <li key={detail} className="flex items-start gap-2">
            <CheckCircle2
              size={16}
              className="mt-0.5 flex-shrink-0 text-[#C9A84C]"
            />
            <span className="text-sm text-[#6B7280]">{detail}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
