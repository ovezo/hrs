import { Inter } from 'next/font/google';
import { getBaseUrl, getClarityId, getContactEmail, getGaId } from '@/lib/config';
import Analytics from '@/components/analytics/Analytics';
import ConsentBanner from '@/components/analytics/ConsentBanner';
import ConversionTracking from '@/components/analytics/ConversionTracking';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const siteUrl = getBaseUrl();
const contactEmail = getContactEmail();

export const metadata = {
  metadataBase: new URL(siteUrl),
  // Title leads with the target query ("humanoid robots UK") rather than the
  // brand, but keeps the exact brand string "Humanoid Robot Solutions" — that
  // phrase is the company name and is what the site already ranks for, so it
  // has to survive any retitling.
  title: 'Humanoid Robots UK | HRS — Humanoid Robot Solutions',
  description:
    'HRS is a UK humanoid robot integrator, deploying humanoid robots across manufacturing, warehousing and logistics — proven on your floor, then fully integrated.',
  applicationName: 'HRS — Humanoid Robot Solutions',
  keywords: [
    'humanoid robots UK',
    'humanoid robot integration',
    'physical AI',
    'vision-language-action models',
    'embodied AI',
    'factory automation humanoid',
    'humanoid manufacturing',
    'cobot solutions',
    'AGIBOT',
    'Unitree humanoid',
    'Figure AI',
    'HRS',
    'Humanoid Robot Solutions',
  ],
  authors: [{ name: 'HRS — Humanoid Robot Solutions' }],
  creator: 'HRS — Humanoid Robot Solutions',
  publisher: 'HRS — Humanoid Robot Solutions',
  // og:image / twitter:image are supplied by app/opengraph-image.js and
  // app/twitter-image.js (the file-based Metadata API), so they are not
  // listed here — the file convention takes precedence and stays in sync.
  openGraph: {
    title: 'HRS — Humanoid Robot Solutions | Intelligent Robots for Real-World Work',
    description:
      'HRS helps UK manufacturers deploy humanoid robots — the right task, real factory trials, proven ROI, plus full integration and long-term support.',
    url: '/',
    siteName: 'HRS — Humanoid Robot Solutions',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HRS — Humanoid Robot Solutions',
    description:
      'Intelligent humanoid robots for real-world work — deployed for UK manufacturing.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
};

// Structured data is kept in sync with what is actually visible on the page:
// the named founder (Team section — Llewelyn Rees, Founder & CEO), the contact email
// (CTAs), the UK focus (throughout), and the real positioning. No FAQ markup — those Q&As
// are not shown on the page, and Google requires FAQ structured data to match
// visible content.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'HRS — Humanoid Robot Solutions',
      alternateName: 'HRS',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        '@id': `${siteUrl}/#logo`,
        url: `${siteUrl}/images/logo.png`,
        contentUrl: `${siteUrl}/images/logo.png`,
        width: 851,
        height: 284,
        caption: 'HRS — Humanoid Robot Solutions',
      },
      image: { '@id': `${siteUrl}/#logo` },
      description:
        'HRS helps UK manufacturers deploy humanoid robots — selecting high-fit tasks, proving ROI through real factory trials, and delivering integration, safety and long-term support.',
      email: contactEmail,
      areaServed: {
        '@type': 'Country',
        name: 'United Kingdom',
      },
      knowsAbout: [
        'Humanoid robots',
        'Physical AI',
        'Embodied AI',
        'Vision-language-action models',
        'Humanoid robot integration',
        'Factory automation',
        'Cobot solutions',
        'Manufacturing',
      ],
      founder: [
        { '@type': 'Person', name: 'Llewelyn Rees', jobTitle: 'Founder & CEO' },
      ],
      // Address and phone are repeated site-wide (not only on /contact) so every
      // page reinforces the same located entity. Values are identical to the
      // /contact node, which shares this @id, and to what /contact renders on
      // screen — a located, consistent NAP is what the Google Business Profile
      // work leans on.
      legalName: 'Humanoid Robot Solutions Ltd',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Unit 45, Mochdre Industrial Estate',
        addressLocality: 'Newtown',
        addressRegion: 'Powys',
        postalCode: 'SY16 4LE',
        addressCountry: 'GB',
      },
      telephone: ['+441686621138', '+447852355187'],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: contactEmail,
        telephone: '+441686621138',
        areaServed: 'GB',
        availableLanguage: 'English',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'HRS — Humanoid Robot Solutions',
      description: 'Intelligent robots for real-world work.',
      publisher: { '@id': `${siteUrl}/#organization` },
      inLanguage: 'en-GB',
    },
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/#webpage`,
      url: siteUrl,
      name: 'Humanoid Robots UK | HRS — Humanoid Robot Solutions',
      description:
        'HRS is a UK humanoid robot integrator, deploying humanoid robots across manufacturing, warehousing and logistics — proven on your floor, then fully integrated.',
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#organization` },
      primaryImageOfPage: { '@id': `${siteUrl}/#logo` },
      inLanguage: 'en-GB',
    },
  ],
};

// Google Consent Mode v2 defaults. This has to be the first thing that touches
// dataLayer — before gtag.js is ever fetched — so the denied state is already
// queued when a tag initialises. It makes no network request of its own; the
// tags themselves are still withheld until consent (see Analytics.js).
const consentDefaults = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  wait_for_update: 500
});`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: consentDefaults }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased min-h-full">
        {children}
        <Analytics
          gaId={getGaId()}
          clarityId={getClarityId()}
          productionHost={new URL(siteUrl).hostname}
        />
        <ConversionTracking />
        <ConsentBanner />
      </body>
    </html>
  );
}
