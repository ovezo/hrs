import { getBaseUrl } from '@/lib/config';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RobotIntro from '@/components/robots/RobotIntro';
import FeatureScrub from '@/components/robots/FeatureScrub';
import RotationShift from '@/components/robots/RotationShift';
import Anatomy from '@/components/robots/Anatomy';
import Handover from '@/components/robots/Handover';
import CompareCTA from '@/components/robots/CompareCTA';
import { G2, X2 } from '@/components/robots/robotsData';

export const metadata = {
  title: 'Our Robots: AGIBOT G2 & X2 Humanoids | HRS',
  description:
    'Meet the HRS humanoid fleet — AGIBOT G2, the industrial dual-arm humanoid for factory work, and AGIBOT X2, the bipedal demonstration humanoid. Deployed in the UK.',
  alternates: { canonical: '/robots' },
  openGraph: {
    type: 'website',
    title: 'Our Robots: AGIBOT G2 & X2 Humanoids | HRS',
    description:
      'AGIBOT G2 for industrial work, AGIBOT X2 for live demonstration — the humanoid platforms HRS deploys across the UK.',
    url: '/robots',
    siteName: 'HRS — Humanoid Robot Solutions',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Robots: AGIBOT G2 & X2 Humanoids | HRS',
    description: 'AGIBOT G2 for industrial work, AGIBOT X2 for live demonstration.',
  },
};

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
              description: G2.blurb,
              image: `${siteUrl}${G2.images.hero}`,
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
              description: X2.blurb,
              image: `${siteUrl}${X2.images.hero}`,
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
