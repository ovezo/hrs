import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';

export const metadata = {
  title: 'HRS — Humanoid Robot Solutions | Intelligent Robots for Real-World Work',
  description:
    'HRS builds reliable, adaptive humanoid robots pre-integrated for real-world deployment. Book a demo to see autonomous robots built for demanding industrial environments.',
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
    </main>
  );
}
