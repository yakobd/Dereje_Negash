import ContactHero from '@/components/contact/ContactHero';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';

export const metadata = {
  title: 'Contact | Dereje Negash - Certified Accountant',
  description: 'Get in touch with Dereje Negash, a certified accountant based in Addis Ababa, Ethiopia.',
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="bg-[#F8F7F4] py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
