import Link from 'next/link';
import { MapPin, Phone } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] border-t border-[#1B3A6B]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <span className="text-xl font-bold text-[#C9A84C]">
              Dereje Negash
            </span>
            <p className="mt-1 text-sm text-[#6B7280]">Certified Accountant</p>
            <p className="mt-4 text-sm text-[#6B7280]">
              Professional accounting services in Addis Ababa, Ethiopia.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#C9A84C]">
              Quick Links
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white transition-colors hover:text-[#C9A84C]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#C9A84C]">
              Get In Touch
            </h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[#6B7280]">
              <a
                href="tel:+251911688681"
                className="flex items-start gap-2 transition-colors hover:text-[#C9A84C]"
              >
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <span>+251911688681</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>
                  4 Kilo, Holy Trinity Theological College Building, 1st
                  Floor, Addis Ababa
                </span>
              </div>
              <a
                href="https://maps.app.goo.gl/eC7N2qRrxY3GRCkn8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9A84C] underline transition-colors hover:text-[#E8C97A]"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1B3A6B] py-6">
        <p className="text-center text-sm text-[#6B7280]">
          © 2025 Dereje Negash. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
