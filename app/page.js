import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhyNow from '@/components/WhyNow';
import TheGap from '@/components/TheGap';
import Team from '@/components/Team';
import WhatWeDo from '@/components/WhatWeDo';
import FirstTargets from '@/components/FirstTargets';
import TechApproach from '@/components/TechApproach';
import VisionCTA from '@/components/VisionCTA';
import Footer from '@/components/Footer';

// Metadata for this route lives in app/layout.js (single source of truth).

export default function Home() {
  return (
    <main>
      <Navbar showFlag />
      <HeroSection />
      <WhyNow />        {/* 01 — Market Timing      → bg-white   */}
      <TheGap />        {/* 02 — Adoption Gap        → bg-gray-50 */}
      <Team />          {/* 03 — Founding Capability → bg-white   */}
      <WhatWeDo />      {/* 04 — Deployment Route    → bg-gray-50 */}
      <FirstTargets />  {/* 05 — Use Cases           → bg-white   */}
      <TechApproach />  {/* 06 — Tech Approach       → bg-gray-50 */}
      <VisionCTA />     {/* 07 — Vision + CTA        → bg-white   */}
    </main>
  );
}
