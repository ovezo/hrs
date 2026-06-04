import { Inter } from 'next/font/google';
import { getBaseUrl } from '@/lib/config';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const siteUrl = getBaseUrl();

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'HRS — Humanoid Robot Solutions | Intelligent Robots for Real-World Work',
  description:
    'HRS builds reliable, adaptive humanoid robots pre-integrated for real-world deployment. Book a demo to see autonomous robots built for demanding industrial environments.',
  keywords: [
    'humanoid robot',
    'robotics solutions',
    'autonomous robots',
    'industrial robots',
    'adaptive robots',
    'HRS',
    'humanoid robot solutions',
    'robot deployment',
  ],
  authors: [{ name: 'HRS — Humanoid Robot Solutions' }],
  openGraph: {
    title: 'HRS — Humanoid Robot Solutions | Intelligent Robots for Real-World Work',
    description:
      'HRS builds reliable, adaptive humanoid robots pre-integrated for real-world deployment.',
    url: '/',
    siteName: 'HRS — Humanoid Robot Solutions',
    images: [
      {
        url: '/images/hero-robot.png',
        width: 1200,
        height: 630,
        alt: 'HRS humanoid robot',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HRS — Humanoid Robot Solutions',
    description: 'Intelligent robots for real-world work.',
    images: ['/images/hero-robot.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: '/',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'HRS — Humanoid Robot Solutions',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/logo.png`,
      },
      description:
        'HRS builds reliable, adaptive humanoid robots pre-integrated for real-world industrial and commercial deployment.',
      sameAs: [],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'HRS — Humanoid Robot Solutions',
      publisher: { '@id': `${siteUrl}/#organization` },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is HRS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'HRS (Humanoid Robot Solutions) is a robotics company that builds reliable, adaptive humanoid robots for real-world industrial and commercial work environments.',
          },
        },
        {
          '@type': 'Question',
          name: 'What kind of robots does HRS make?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'HRS makes humanoid robots designed for consistent performance in demanding environments. They are adaptive — capable of learning and improving in real time — and come pre-integrated for rapid deployment.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I get a humanoid robot from HRS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can book a demo to see HRS humanoid robots in action and discuss deployment options for your specific use case.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are HRS robots reliable for industrial use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. HRS robots are built specifically for consistent performance in demanding real-world environments, making them well-suited for industrial and commercial applications.',
          },
        },
        {
          '@type': 'Question',
          name: 'How quickly can HRS robots be deployed?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'HRS robots are pre-integrated solutions, meaning they are designed to get you up and running fast with minimal setup required.',
          },
        },
      ],
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
