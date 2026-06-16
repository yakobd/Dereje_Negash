"use client";

import ServiceCard from "@/components/services/ServiceCard";
import { BookOpen, BarChart3, Plus } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Monthly Accounting & Bookkeeping",
    description:
      "Stay on top of your finances every month with organized, accurate records.",
    details: [
      "Monthly transaction recording and categorization",
      "Bank and account reconciliations",
      "Monthly profit & loss summaries",
      "Expense tracking and analysis",
      "Payroll recording support",
    ],
  },
  {
    icon: BarChart3,
    title: "Annual Financial Reporting",
    description:
      "Get a complete, compliant picture of your business performance every year.",
    details: [
      "Preparation of annual financial statements",
      "Balance sheet and income statement",
      "Cash flow statement",
      "Compliance with Ethiopian financial regulations",
      "Year-end review and summary",
    ],
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-[#F8F7F4] py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>

        <div className="mt-8 rounded-xl border-2 border-dashed border-[#C9A84C] border-opacity-40 bg-[#F8F7F4] p-8 text-center">
          <div className="flex items-center justify-center w-12 h-12 mx-auto rounded-full bg-white">
            <Plus size={22} className="text-[#C9A84C]" />
          </div>
          <p className="mt-6 font-bold text-[#0A1628]">
            More Services Coming Soon
          </p>
          <p className="mt-2 text-[#6B7280]">
            Additional accounting services will be added shortly.
          </p>
        </div>
      </div>
    </section>
  );
}
