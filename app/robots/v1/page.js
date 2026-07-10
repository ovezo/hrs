import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RobotIntro from '@/components/robots/RobotIntro';
import FeatureScrub from '@/components/robots/FeatureScrub';
import RotationShift from '@/components/robots/RotationShift';
import Anatomy from '@/components/robots/Anatomy';
import Handover from '@/components/robots/Handover';
import CompareCTA from '@/components/robots/CompareCTA';
import { G2, X2 } from '@/components/robots/robotsData';

// Concept variant kept for comparison against /robots. Not indexed and not in
// the sitemap.
export const metadata = {
  title: 'Our Robots — Concept V1 | HRS',
  description:
    'Cinematic scroll-showcase concept for the HRS robots page — AGIBOT G2 and X2.',
  robots: { index: false, follow: true },
};

export default function RobotsV1Page() {
  return (
    <>
      <Navbar showFlag />
      <main>
        <RobotIntro robot={G2} />
        <FeatureScrub
          robot={G2}
          image={G2.images.left}
          imageAlt="AGIBOT G2 humanoid robot with both arms extended forward"
        />
        <RotationShift robot={G2} />
        <Anatomy robot={G2} />
        <Handover from={G2} to={X2} />
        <FeatureScrub robot={X2} image={X2.images.hero} imageAlt={X2.heroAlt} />
        <CompareCTA />
      </main>
      <Footer />
    </>
  );
}
