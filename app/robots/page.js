import { getBaseUrl } from '@/lib/config';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import V3Chrome from '@/components/robots/v3/V3Chrome';
import V3Hero from '@/components/robots/v3/V3Hero';
import UnitDossier from '@/components/robots/v3/UnitDossier';
import FieldFeeds from '@/components/robots/v3/FieldFeeds';
import SystemsMatrix from '@/components/robots/v3/SystemsMatrix';
import TelemetryCompare from '@/components/robots/v3/TelemetryCompare';
import PlatformTimeline from '@/components/robots/v3/PlatformTimeline';
import V3CTA from '@/components/robots/v3/V3CTA';
import { G2_DOSSIER, X2_DOSSIER } from '@/components/robots/v3/v3Data';
import { G2, X2 } from '@/components/robots/robotsData';

export const metadata = {
  title: 'AGIBOT G2 & X2 Humanoid Robot Specifications | HRS',
  description:
    'Full specifications for AGIBOT G2 and X2 — the industrial and interactive humanoid robots HRS deploys across UK manufacturing. Degrees of freedom, payload, speed, battery, compute and live footage.',
  keywords: [
    'AGIBOT G2',
    'AGIBOT X2',
    'humanoid robot specifications',
    'industrial humanoid robot',
    'bipedal humanoid robot',
    'humanoid robots UK',
    'humanoid robot integrator',
    'physical AI',
    'embodied AI',
    'vision-language-action models',
  ],
  alternates: { canonical: '/robots' },
  openGraph: {
    type: 'website',
    title: 'AGIBOT G2 & X2 Humanoid Robot Specifications | HRS',
    description:
      'AGIBOT G2 for industrial work, AGIBOT X2 for live demonstration — full specs, subsystems and footage for the humanoid platforms HRS deploys across the UK.',
    url: '/robots',
    siteName: 'HRS — Humanoid Robot Solutions',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AGIBOT G2 & X2 Humanoid Robot Specifications | HRS',
    description: 'Full specs for AGIBOT G2 (industrial) and X2 (interactive demonstration).',
  },
};

// Technical specs surfaced as Product.additionalProperty — each one is also
// shown verbatim in the on-page dossier/telemetry panels below, so schema
// stays matched to visible content.
const G2_PROPERTIES = [
  { name: 'Height', value: '180', unitText: 'CMT' },
  { name: 'Weight', value: '185', unitText: 'KGM' },
  { name: 'Degrees of freedom', value: '26' },
  { name: 'Arm payload', value: '5 kg per arm (10 kg dual-arm lift)' },
  { name: 'Force control precision', value: '±0.5 N' },
  { name: 'Top speed', value: '1.5', unitText: 'm/s' },
  { name: 'Battery runtime', value: '4 hours per hot-swap' },
  { name: 'Protection rating', value: 'IP42' },
];

const X2_PROPERTIES = [
  { name: 'Height', value: '131', unitText: 'CMT' },
  { name: 'Weight', value: '35', unitText: 'KGM' },
  { name: 'Degrees of freedom', value: '25' },
  { name: 'Peak payload', value: '3', unitText: 'KGM' },
  { name: 'Top walking speed', value: '1.8', unitText: 'm/s' },
  { name: 'Battery capacity', value: '500', unitText: 'Wh' },
  { name: 'Battery runtime', value: '~2 hours' },
  { name: 'Facial expressions', value: '30+' },
];

const toAdditionalProperty = (properties) =>
  properties.map((p) => ({ '@type': 'PropertyValue', ...p }));

export default function RobotsPage() {
  const siteUrl = getBaseUrl();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/robots#webpage`,
        url: `${siteUrl}/robots`,
        name: 'Our Robots — AGIBOT G2 & X2 | HRS',
        description:
          'The humanoid robots HRS deploys: AGIBOT G2 for industrial work and AGIBOT X2 for live demonstration.',
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#organization` },
        inLanguage: 'en-GB',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/robots#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Robots', item: `${siteUrl}/robots` },
        ],
      },
      {
        '@type': 'ItemList',
        '@id': `${siteUrl}/robots#robots`,
        name: 'Humanoid robots deployed by HRS',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@type': 'Product',
              '@id': `${siteUrl}/robots#agibot-g2`,
              name: G2.name,
              brand: { '@type': 'Brand', name: G2.brand },
              category: 'Industrial humanoid robot',
              description: G2.blurb,
              image: `${siteUrl}${G2.images.hero}`,
              additionalProperty: toAdditionalProperty(G2_PROPERTIES),
            },
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@type': 'Product',
              '@id': `${siteUrl}/robots#agibot-x2`,
              name: X2.name,
              brand: { '@type': 'Brand', name: X2.brand },
              category: 'Interactive demonstration humanoid robot',
              description: X2.blurb,
              image: `${siteUrl}${X2.images.hero}`,
              additionalProperty: toAdditionalProperty(X2_PROPERTIES),
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar showFlag />
      <V3Chrome />
      <main>
        <V3Hero />
        <FieldFeeds />
        <UnitDossier dossier={G2_DOSSIER} index="02" />
        <UnitDossier dossier={X2_DOSSIER} index="03" background="bg-gray-50" />
        <SystemsMatrix />
        <TelemetryCompare />
        <PlatformTimeline />
        <V3CTA />
      </main>
      <Footer />
    </>
  );
}
