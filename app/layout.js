import { Inter } from 'next/font/google';
import { getBaseUrl, getContactEmail } from '@/lib/config';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const siteUrl = getBaseUrl();
const contactEmail = getContactEmail();

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'HRS — Humanoid Robot Solutions | Intelligent Robots for Real-World Work',
  description:
    'HRS helps UK manufacturers deploy humanoid robots — the right task, real factory trials, proven ROI, plus full integration and long-term support. Book a demo.',
  applicationName: 'HRS — Humanoid Robot Solutions',
  keywords: [
    'humanoid robots',
    'humanoid robot deployment',
    'industrial humanoid robots',
    'UK manufacturing automation',
    'factory automation',
    'machine tending',
    'robot integration',
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
// the two named founders (Team section), the contact email (CTAs), the UK
// focus (throughout), and the real positioning. No FAQ markup — those Q&As
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
        'Industrial automation',
        'Computer vision',
        'Robot integration',
        'Manufacturing',
      ],
      founder: [
        { '@type': 'Person', name: 'Lel Rees', jobTitle: 'Automation Lead' },
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: contactEmail,
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
      name: 'HRS — Humanoid Robot Solutions | Intelligent Robots for Real-World Work',
      description:
        'HRS helps UK manufacturers deploy humanoid robots — the right task, real factory trials, proven ROI, plus full integration and long-term support.',
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#organization` },
      primaryImageOfPage: { '@id': `${siteUrl}/#logo` },
      inLanguage: 'en-GB',
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased min-h-full">{children}</body>
    </html>
  );
}
