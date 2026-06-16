import HeroSection from '@/components/home/HeroSection';
import ServicesSnapshot from '@/components/home/ServicesSnapshot';
import WhyChooseMe from '@/components/home/WhyChooseMe';
import TestimonialsPreview from '@/components/home/TestimonialsPreview';
import CTABanner from '@/components/home/CTABanner';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSnapshot />
      <WhyChooseMe />
      <TestimonialsPreview />
      <CTABanner />
    </>
  );
}
