import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import V2Hero from '@/components/robots/v2/V2Hero';
import WorkStory from '@/components/robots/v2/WorkStory';
import IndustryRail from '@/components/robots/v2/IndustryRail';
import X2Spotlight from '@/components/robots/v2/X2Spotlight';
import SpecSheet from '@/components/robots/v2/SpecSheet';
import CompareCTA from '@/components/robots/CompareCTA';

// Concept variant kept for comparison against /robots. Not indexed and not in
// the sitemap until one version is chosen.
export const metadata = {
  title: 'Our Robots — Concept V2 | HRS',
  description:
    'Alternative showcase of the HRS humanoid fleet — AGIBOT G2 and X2 shown at work across manufacturing, visitor experience and front-of-house settings.',
  robots: { index: false, follow: true },
};

export default function RobotsV2Page() {
  return (
    <>
      <Navbar showFlag />
      <main>
        <V2Hero />
        <WorkStory />
        <IndustryRail />
        <X2Spotlight />
        <SpecSheet />
        <CompareCTA />
      </main>
      <Footer />
    </>
  );
}
