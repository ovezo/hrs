import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhyNow from '@/components/WhyNow';
import TheGap from '@/components/TheGap';
import Team from '@/components/Team';
import Demonstrations from '@/components/Demonstrations';
import TechApproach from '@/components/TechApproach';
import FirstTargets from '@/components/FirstTargets';
import LearnPreview from '@/components/LearnPreview';
import VisionCTA from '@/components/VisionCTA';
import Footer from '@/components/Footer';

// Metadata for this route lives in app/layout.js (single source of truth).

export default function Home() {
  return (
    <main>
      <Navbar showFlag />
      <HeroSection />
      {/*
        The bg column below is verified against what each component actually
        renders, not what it was assumed to render — 04/05/06 were previously
        recorded inverted here, which is how the Learn section came to be
        dropped in as gray directly after a gray Use Cases.
      */}
      <WhyNow />          {/* 01 — Our Robots (G2 + X2)                → bg-white   */}
      <TheGap />          {/* 02 — End-to-End Adoption (#solutions)    → bg-gray-50 */}
      <Team />            {/* 03 — Founder (Lel + Reeco)               → bg-white   */}
      <Demonstrations />  {/* 04 — Live Demonstrations                 → bg-gray-50 */}
      <TechApproach />    {/* 05 — Bringing AI to Life (#how-it-works) → bg-white   */}
      <FirstTargets />    {/* 06 — Use Cases                           → bg-gray-50 */}
      <LearnPreview />    {/* 07 — Learn hub entry point (#learn)      → bg-white   */}
      <VisionCTA />       {/* 08 — Vision + CTA                        → bg-gray-50 */}
      <Footer />
    </main>
  );
}
