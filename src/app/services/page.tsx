import ServicesHero from '@/components/services/ServicesHero';
import ServicesGrid from '@/components/services/ServicesGrid';

export const metadata = {
  title: 'Services | Dereje Negash - Certified Accountant',
  description: 'Explore professional accounting and bookkeeping services offered by Dereje Negash in Addis Ababa, Ethiopia.',
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
    </>
  );
}
