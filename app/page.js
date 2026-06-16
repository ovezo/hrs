import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhyNow from '@/components/WhyNow';
import TheGap from '@/components/TheGap';
import Team from '@/components/Team';
import WhatWeDo from '@/components/WhatWeDo';
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
      <WhyNow />          {/* 01 — Our Robots (G2 + X2)   → bg-white   */}
      <TheGap />          {/* 02 — Adoption Gap            → bg-gray-50 */}
      <Team />            {/* 03 — Founder (Lel + Reeco)   → bg-white   */}
      <WhatWeDo />        {/* 04 — Deployment Route        → bg-gray-50 */}
      <Demonstrations />  {/* 05 — Live Demonstrations     → bg-white   */}
      <TechApproach />    {/* 06 — Bringing AI to Life     → bg-gray-50 */}
      <FirstTargets />    {/* 07 — Use Cases               → bg-white   */}
      <VisionCTA />       {/* 08 — Vision + CTA            → bg-white   */}
    </main>
  );
}
