import AboutHero from '@/components/about/AboutHero';
import Credentials from '@/components/about/Credentials';
import LocationInfo from '@/components/about/LocationInfo';

export const metadata = {
  title: 'About | Dereje Negash - Certified Accountant',
  description: 'Learn more about Dereje Negash, a licensed certified accountant based in Addis Ababa, Ethiopia.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Credentials />
      <LocationInfo />
    </>
  );
}
