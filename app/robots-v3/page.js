import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import V3Chrome from '@/components/robots/v3/V3Chrome';
import V3Hero from '@/components/robots/v3/V3Hero';
import UnitDossier from '@/components/robots/v3/UnitDossier';
import SystemsMatrix from '@/components/robots/v3/SystemsMatrix';
import TelemetryCompare from '@/components/robots/v3/TelemetryCompare';
import FieldFeeds from '@/components/robots/v3/FieldFeeds';
import PlatformTimeline from '@/components/robots/v3/PlatformTimeline';
import V3CTA from '@/components/robots/v3/V3CTA';
import { G2_DOSSIER, X2_DOSSIER } from '@/components/robots/v3/v3Data';

// Concept page for internal comparison — kept out of the index and sitemap
// until one version is chosen.
export const metadata = {
  title: 'Our Robots — Concept V3 | HRS',
  description:
    'High-tech fleet dossier concept: AGIBOT G2 and X2 documented subsystem by subsystem.',
  robots: { index: false, follow: true },
};

export default function RobotsV3Page() {
  return (
    <>
      <Navbar showFlag />
      <V3Chrome />
      <main>
        <V3Hero />
        <FieldFeeds />
        <UnitDossier dossier={G2_DOSSIER} index="01" background="bg-gray-50" />
        <UnitDossier dossier={X2_DOSSIER} index="02" />
        <SystemsMatrix />
        <TelemetryCompare />
        <PlatformTimeline />
        <V3CTA />
      </main>
      <Footer />
    </>
  );
}
