import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhyNow from '@/components/WhyNow';
import TheGap from '@/components/TheGap';
import Team from '@/components/Team';
import Demonstrations from '@/components/Demonstrations';
import TechApproach from '@/components/TechApproach';
import FirstTargets from '@/components/FirstTargets';
import VisionCTA from '@/components/VisionCTA';
import Footer from '@/components/Footer';

// Metadata for this route lives in app/layout.js (single source of truth).

export default function Home() {
  return (
    <main>
      <Navbar showFlag />
      <HeroSection />
      <WhyNow />          {/* 01 — Our Robots (G2 + X2)         → bg-white   */}
      <TheGap />          {/* 02 — End-to-End Adoption (#solutions) → bg-gray-50 */}
      <Team />            {/* 03 — Founder (Lel + Reeco)         → bg-white   */}
      <Demonstrations />  {/* 04 — Live Demonstrations           → bg-white   */}
      <TechApproach />    {/* 05 — Bringing AI to Life (#how-it-works) → bg-gray-50 */}
      <FirstTargets />    {/* 06 — Use Cases                     → bg-white   */}
      <VisionCTA />       {/* 07 — Vision + CTA                  → bg-white   */}
    </main>
  );
}
