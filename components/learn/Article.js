import Link from 'next/link';
import Footer from '@/components/Footer';
import LearnHeader from '@/components/learn/LearnHeader';
import ArticleBody from '@/components/learn/ArticleBody';
import { getContactEmail } from '@/lib/config';
import { formatDate } from '@/lib/learn';

/*
 * The single reusable structure shared by every Learn article. Pages pass the
 * loaded `article` plus its resolved `related` cards; the layout is always:
 *
 *   breadcrumb → category → title → byline →
 *   Quick answer (AEO snippet) → long-form body → FAQ → related → CTA
 *
 * Server component only — no client JS, so each article renders to static HTML.
 */
export default function Article({ article, related = [] }) {
  const { title, category, datePublished, dateModified, readingTime, quickAnswer, body, faq } =
    article;
  const contactEmail = getContactEmail();
  const updated = dateModified || datePublished;

  return (
    <>
      <LearnHeader />

      <main className="bg-white">
        <article className="mx-auto max-w-[720px] px-6 py-10 md:py-14">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-gray-800 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-gray-300">/</li>
              <li>
                <Link href="/learn" className="hover:text-gray-800 transition-colors">
                  Learn
                </Link>
              </li>
              <li aria-hidden="true" className="text-gray-300">/</li>
              <li aria-current="page" className="truncate text-gray-700">
                {title}
              </li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mt-8">
            {category && (
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
                {category}
              </p>
            )}
            <h1 className="mt-3 text-3xl sm:text-4xl font-bold leading-[1.12] tracking-tight text-gray-900">
              {title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500">
              <span className="font-medium text-gray-700">HRS Team</span>
              <span aria-hidden="true" className="text-gray-300">·</span>
              <span>
                Updated{' '}
                <time dateTime={updated}>{formatDate(updated)}</time>
              </span>
              <span aria-hidden="true" className="text-gray-300">·</span>
              <span>{readingTime} min read</span>
            </div>
          </header>

          {/* Quick answer — the direct, citable response (AEO target) */}
          {quickAnswer && (
            <section
              aria-label="Quick answer"
              className="mt-8 rounded-2xl border border-gray-200 bg-gray-50/70 p-6"
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                  Quick answer
                </h2>
              </div>
              <p
                id="quick-answer"
                className="mt-3 text-lg leading-[1.6] text-gray-900"
              >
                {quickAnswer}
              </p>
            </section>
          )}

          {/* Long-form body */}
          <div className="mt-4">
            <ArticleBody blocks={body} />
          </div>

          {/* FAQ — rendered visibly so the FAQPage schema matches the page */}
          {faq && faq.length > 0 && (
            <section aria-label="Frequently asked questions" className="mt-14">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Frequently asked questions
              </h2>
              <dl className="mt-6 divide-y divide-gray-200 border-t border-gray-200">
                {faq.map(({ question, answer }, i) => (
                  <div key={i} className="py-5">
                    <dt className="text-base font-semibold text-gray-900">{question}</dt>
                    <dd className="mt-2 text-[16px] leading-[1.7] text-gray-700">{answer}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          {/* Related reading — internal links for crawl depth + AEO context */}
          {related.length > 0 && (
            <section aria-label="Related articles" className="mt-14">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
                Continue learning
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/learn/${item.slug}`}
                      className="group block h-full rounded-xl border border-gray-200 p-5 hover:border-gray-300 hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-base font-semibold text-gray-900 group-hover:text-gray-700">
                        {item.title}
                      </span>
                      <span className="mt-1.5 block text-sm leading-relaxed text-gray-500">
                        {item.description}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* CTA */}
          <section className="mt-14 rounded-2xl bg-gray-900 px-6 py-10 text-center sm:px-10">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              See a humanoid robot work your task
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-gray-300">
              HRS helps UK manufacturers select high-fit tasks, run real factory trials and prove
              ROI — with full integration, safety and long-term support.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-colors"
              >
                Book a Demo
              </a>
              <Link
                href="/learn"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Browse the Learn hub
              </Link>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}
