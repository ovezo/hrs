import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhyNow from '@/components/WhyNow';
import TheGap from '@/components/TheGap';
import Team from '@/components/Team';
import WhatWeDo from '@/components/WhatWeDo';
import FirstTargets from '@/components/FirstTargets';
import TechApproach from '@/components/TechApproach';
import VisionCTA from '@/components/VisionCTA';

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
