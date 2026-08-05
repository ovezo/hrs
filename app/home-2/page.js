import Navbar from '@/components/Navbar';
import HeroSectionHome2 from '@/components/home2/HeroSection';
import WhyNow from '@/components/WhyNow';
import TheGap from '@/components/TheGap';
import Team from '@/components/Team';
import Demonstrations from '@/components/Demonstrations';
import TechApproach from '@/components/TechApproach';
import FirstTargets from '@/components/FirstTargets';
import VisionCTA from '@/components/VisionCTA';

// Alternative homepage — identical to `/` apart from the hero treatment
// (panel-over-video instead of the left-hand wash). Kept out of the index:
// it duplicates the homepage's content, and it isn't in app/sitemap.js
// either. `robots` overwrites the value inherited from app/layout.js rather
// than merging with it.
export const metadata = {
  title: 'HRS — Homepage variant 2',
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function Home2() {
  return (
    <main>
      <Navbar showFlag />
      <HeroSectionHome2 />
      <WhyNow />          {/* 01 — Our Robots (G2 + X2)               → bg-white   */}
      <TheGap />          {/* 02 — End-to-End Adoption (#solutions)   → bg-gray-50 */}
      <Team />            {/* 03 — Founder (Lel + Reeco)              → bg-white   */}
      <Demonstrations />  {/* 04 — Live Demonstrations                → bg-white   */}
      <TechApproach />    {/* 05 — Bringing AI to Life (#how-it-works) → bg-gray-50 */}
      <FirstTargets />    {/* 06 — Use Cases                          → bg-white   */}
      <VisionCTA />       {/* 07 — Vision + CTA                       → bg-white   */}
    </main>
  );
}
