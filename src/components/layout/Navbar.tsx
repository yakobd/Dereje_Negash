'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Testimonials', href: '/testimonials' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0A1628] border-b border-[#1B3A6B]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex flex-col leading-tight">
            <span className="text-xl font-semibold text-[#C9A84C]">
              Dereje Negash
            </span>
            <span className="text-xs text-[#6B7280]">Certified Accountant</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white transition-colors hover:text-[#C9A84C]"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-md border border-[#C9A84C] px-4 py-2 text-[#C9A84C] transition-colors hover:bg-[#C9A84C] hover:text-[#0A1628]"
            >
              Contact
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 pb-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white transition-colors hover:text-[#C9A84C]"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="rounded-md border border-[#C9A84C] px-4 py-2 text-center text-[#C9A84C] transition-colors hover:bg-[#C9A84C] hover:text-[#0A1628]"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
