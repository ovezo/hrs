import Link from 'next/link';
import Footer from '@/components/Footer';
import LearnHeader from '@/components/learn/LearnHeader';
import { getBaseUrl, getContactEmail } from '@/lib/config';
import { getAllArticles, groupArticlesByCategory } from '@/lib/learn';

export const metadata = {
  title: 'Learn: Humanoid Robots Explained | HRS',
  description:
    'Clear, practical answers on humanoid robots — what they are, how they work, where they deliver ROI, and how UK manufacturers deploy them. From HRS.',
  alternates: { canonical: '/learn' },
  openGraph: {
    type: 'website',
    title: 'Learn: Humanoid Robots Explained | HRS',
    description:
      'Clear, practical answers on humanoid robots — what they are, how they work, and how UK manufacturers deploy them.',
    url: '/learn',
    siteName: 'HRS — Humanoid Robot Solutions',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learn: Humanoid Robots Explained | HRS',
    description: 'Clear, practical answers on humanoid robots — from HRS.',
  },
};

export default async function LearnHub() {
  const siteUrl = getBaseUrl();
  const contactEmail = getContactEmail();
  const articles = await getAllArticles();
  const groups = groupArticlesByCategory(articles);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${siteUrl}/learn#webpage`,
        url: `${siteUrl}/learn`,
        name: 'Learn: Humanoid Robots Explained',
        description:
          'Clear, practical answers on humanoid robots — what they are, how they work, and how UK manufacturers deploy them.',
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#organization` },
        inLanguage: 'en-GB',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: articles.map((article, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: `${siteUrl}/learn/${article.slug}`,
            name: article.title,
          })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/learn#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Learn', item: `${siteUrl}/learn` },
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

      <LearnHeader />

      <main className="bg-white">
        <div className="mx-auto max-w-[1100px] px-6 py-14 md:px-8 md:py-20">
          {/* Hero */}
          <div className="max-w-[720px]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
              HRS Learn
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold leading-[1.08] tracking-tight text-gray-900">
              Humanoid robots, explained.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-500">
              Clear, no-hype answers on humanoid robots — what they are, how they work, where they
              deliver measurable ROI, and how UK manufacturers put them to work. Written by the HRS
              team.
            </p>
          </div>

          {/* Article list, grouped by category */}
          <div className="mt-14 space-y-14">
            {groups.map(([category, items]) => (
              <section key={category} aria-label={category}>
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
                  {category}
                </h2>
                <ul className="mt-5 divide-y divide-gray-100 border-t border-gray-100">
                  {items.map((article) => (
                    <li key={article.slug}>
                      <Link
                        href={`/learn/${article.slug}`}
                        className="group flex flex-col gap-1.5 py-5 sm:flex-row sm:items-baseline sm:gap-6"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-600 transition-colors sm:w-[44%] sm:shrink-0">
                          {article.title}
                        </h3>
                        <p className="text-[15px] leading-relaxed text-gray-500">
                          {article.description}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          {/* CTA */}
          <section className="mt-20 rounded-2xl bg-gray-900 px-6 py-10 text-center sm:px-10">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Ready to see one work your task?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-gray-300">
              HRS helps UK manufacturers select high-fit tasks, run real factory trials and prove
              ROI — with full integration, safety and long-term support.
            </p>
            <div className="mt-7">
              <a
                href={`/contact`}
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-colors"
              >
                Book a Demo
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
