"use client";

import Link from "next/link";
import TestimonialCard from "@/components/testimonials/TestimonialCard";

const testimonials = [
  {
    quote:
      "Dereje has completely transformed how I manage my business finances. His monthly reports are clear, timely, and incredibly helpful for decision-making.",
    name: "Amanuel T.",
    label: "Small Business Owner, Addis Ababa",
  },
  {
    quote:
      "I've worked with several accountants before, but Dereje stands out for his professionalism and attention to detail. Highly recommended.",
    name: "Selam G.",
    label: "Independent Consultant, Addis Ababa",
  },
  {
    quote:
      "Thanks to Dereje, I finally understand my business numbers. He explains everything clearly and is always available when I have questions.",
    name: "Biruk M.",
    label: "Retail Shop Owner, Addis Ababa",
  },
  {
    quote:
      "Our annual financial reports have never been this clean and well-organized. Dereje is reliable, sharp, and a true professional.",
    name: "Tigist A.",
    label: "NGO Administrator, Addis Ababa",
  },
  {
    quote:
      "I hired Dereje for my startup's bookkeeping and it was one of the best decisions I made. He keeps everything in perfect order.",
    name: "Yonas K.",
    label: "Startup Founder, Addis Ababa",
  },
  {
    quote:
      "Dereje's attention to Ethiopian tax regulations saved us from potential compliance issues. We trust him completely with our finances.",
    name: "Mekdes H.",
    label: "Private Clinic Manager, Addis Ababa",
  },
];

export default function TestimonialsGrid() {
  return (
    <section className="bg-[#F8F7F4] py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} index={index} {...testimonial} />
          ))}
        </div>

        <div className="mt-16 rounded-xl bg-[#0A1628] py-12 px-8 text-center">
          <p className="text-2xl font-bold text-white">
            Ready to experience the same results?
          </p>
          <p className="mt-3 text-[#6B7280]">
            Get in touch today and let&apos;s discuss how I can help your
            finances.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-md bg-[#C9A84C] px-8 py-3 font-semibold text-[#0A1628] transition-colors hover:bg-[#E8C97A]"
          >
            Contact Me Now
          </Link>
        </div>
      </div>
    </section>
  );
}
