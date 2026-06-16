import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Dereje Negash | Certified Accountant',
    template: '%s | Dereje Negash',
  },
  description: 'Professional accounting and bookkeeping services in Addis Ababa, Ethiopia. Monthly bookkeeping, annual financial reporting, and more.',
  keywords: ['accountant', 'bookkeeping', 'financial reporting', 'Addis Ababa', 'Ethiopia', 'Dereje Negash'],
  authors: [{ name: 'Dereje Negash' }],
  openGraph: {
    title: 'Dereje Negash | Certified Accountant',
    description: 'Professional accounting and bookkeeping services in Addis Ababa, Ethiopia.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
