import TestimonialsHero from '@/components/testimonials/TestimonialsHero';
import TestimonialsGrid from '@/components/testimonials/TestimonialsGrid';

export const metadata = {
  title: 'Testimonials | Dereje Negash - Certified Accountant',
  description: 'Read what clients say about Dereje Negash, a trusted certified accountant based in Addis Ababa, Ethiopia.',
};

export default function TestimonialsPage() {
  return (
    <>
      <TestimonialsHero />
      <TestimonialsGrid />
    </>
  );
}
