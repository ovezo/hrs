import Link from 'next/link';
import { getBaseUrl } from '@/lib/config';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SectionHeader, Ticks } from '@/components/robots/v3/ui';
import FamilySection from '@/components/products/FamilySection';
import { FAMILIES, ALL_PRODUCTS, FAQS } from '@/components/products/productsData';

export const metadata = {
  title: 'AGIBOT Product Range — Humanoids, Quadrupeds & End-Effectors | HRS',
  description:
    'The full AGIBOT product range supplied and integrated by HRS in the UK: X2, A2, A3 and G2 humanoid robots, the Lingxi D1 quadruped line, OmniHand dexterous hands, grippers and teleoperation kits.',
  keywords: [
    'AGIBOT products',
    'AGIBOT robots UK',
    'humanoid robot range',
    'AGIBOT A2',
    'AGIBOT A3',
    'AGIBOT X2',
    'AGIBOT G2',
    'AGIBOT D1 quadruped',
    'robot dog UK',
    'OmniHand dexterous hand',
    'humanoid robot integrator',
    'AGIBOT UK supplier',
    'buy humanoid robot UK',
  ],
  alternates: { canonical: '/products' },
  openGraph: {
    type: 'website',
    title: 'AGIBOT Product Range | HRS',
    description:
      'Humanoid robots, quadrupeds, dexterous hands and teleoperation kits — the full AGIBOT range supplied and integrated by HRS in the UK.',
    url: '/products',
    siteName: 'HRS — Humanoid Robot Solutions',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AGIBOT Product Range | HRS',
    description:
      'Humanoids, quadrupeds, dexterous hands and teleoperation kits — supplied and integrated in the UK by HRS.',
  },
};

function ProductsHero() {
  return (
    <section className="relative bg-white pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-600">
          AGIBOT PLATFORM PARTNER
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          The full AGIBOT range.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-500">
          Every platform below is available through HRS in the UK — supplied, integrated and
          supported. Pricing is on application:{' '}
          <Link href="/contact" className="text-gray-900 underline decoration-amber-500 underline-offset-4 hover:decoration-amber-600">
            tell us about your task
          </Link>{' '}
          and we&apos;ll quote the right configuration.
        </p>
      </div>
    </section>
  );
}

function ProductsFAQ() {
  return (
    <section id="faq" className="relative bg-white py-20 scroll-mt-24 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16">
        <SectionHeader
          code="FAQ"
          title="Questions, answered."
          sub="The short version of what buyers ask us about the AGIBOT range."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {FAQS.map((faq) => (
            <div key={faq.q} className="relative bg-gray-50 p-6 ring-1 ring-gray-200 md:p-8">
              <Ticks />
              <h3 className="text-lg font-bold text-gray-900">{faq.q}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsCTA() {
  return (
    <section id="quote" className="relative bg-gray-50 py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16">
        <div className="relative mx-auto max-w-3xl bg-white p-10 text-center ring-1 ring-gray-200 md:p-14">
          <Ticks />
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-600">
            PRICING &amp; AVAILABILITY
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Configure it for your site.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-500">
            Every unit ships in multiple configurations — end-effectors, sensor payloads, software
            packages. Tell us the job and we&apos;ll spec the build, quote it and demonstrate it live.
          </p>
          <p className="mt-6 font-mono text-xs text-gray-400">
            &gt; request_quote --range agibot --site your-facility
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gray-900 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-gray-700"
            >
              Request a Quote
            </Link>
            <Link
              href="/robots"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 px-8 py-4 text-sm font-semibold text-gray-900 transition-colors hover:border-gray-400 hover:bg-gray-100"
            >
              Explore G2 &amp; X2 in Depth
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProductsPage() {
  const siteUrl = getBaseUrl();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/products#webpage`,
        url: `${siteUrl}/products`,
        name: 'AGIBOT Product Range | HRS',
        description:
          'The full AGIBOT product range supplied and integrated by HRS in the UK: humanoid robots, quadrupeds, dexterous hands and teleoperation kits.',
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#organization` },
        inLanguage: 'en-GB',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/products#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Products', item: `${siteUrl}/products` },
        ],
      },
      {
        '@type': 'ItemList',
        '@id': `${siteUrl}/products#catalogue`,
        name: 'AGIBOT products supplied by HRS',
        itemListElement: ALL_PRODUCTS.map((product, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'Product',
            '@id': `${siteUrl}/products#${product.slug}`,
            url: `${siteUrl}/products#${product.slug}`,
            name: product.name,
            brand: { '@type': 'Brand', name: 'AGIBOT' },
            category: product.category,
            description: product.tagline,
            ...(product.image ? { image: `${siteUrl}${product.image}` } : {}),
            // Mirrors the spec rows shown on the card — schema stays matched
            // to visible content.
            additionalProperty: product.specs.map((spec) => ({
              '@type': 'PropertyValue',
              name: spec.label,
              value: spec.value,
            })),
          },
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}/products#faq`,
        mainEntity: FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
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
        <ProductsHero />
        {FAMILIES.map((family) => (
          <FamilySection key={family.id} family={family} />
        ))}
        <ProductsFAQ />
        <ProductsCTA />
      </main>
      <Footer />
    </>
  );
}
