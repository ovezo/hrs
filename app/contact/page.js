import { getBaseUrl } from '@/lib/config';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactClient from '@/components/ContactClient';

export const metadata = {
  title: 'Contact HRS | Humanoid Robot Solutions UK',
  description:
    'Get in touch with HRS — the UK humanoid robot integrator. Ask about factory trials, task assessments, or deployments. Based in Newtown, Powys.',
  alternates: { canonical: '/contact' },
  openGraph: {
    type: 'website',
    title: 'Contact HRS | Humanoid Robot Solutions UK',
    description:
      'Get in touch with HRS. Ask about factory trials, task assessments, or humanoid robot deployments.',
    url: '/contact',
    siteName: 'HRS — Humanoid Robot Solutions',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact HRS | Humanoid Robot Solutions UK',
    description: 'Get in touch with HRS — the UK humanoid robot integrator.',
  },
};

export default function ContactPage() {
  const siteUrl = getBaseUrl();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': `${siteUrl}/contact#webpage`,
        url: `${siteUrl}/contact`,
        name: 'Contact HRS — Humanoid Robot Solutions',
        description:
          'Get in touch with HRS — the UK humanoid robot integrator based in Newtown, Powys.',
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#organization` },
        inLanguage: 'en-GB',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/contact#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Contact', item: `${siteUrl}/contact` },
        ],
      },
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'Humanoid Robot Solutions Ltd',
        url: siteUrl,
        email: 'info@hrsrobot.co.uk',
        telephone: ['+441686621138', '+447852355187'],
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Unit 45, Mochdre Industrial Estate',
          addressLocality: 'Newtown',
          addressRegion: 'Powys',
          postalCode: 'SY16 4LE',
          addressCountry: 'GB',
        },
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
      <div className="flex min-h-screen flex-col">
        <ContactClient />
        <Footer />
      </div>
    </>
  );
}
