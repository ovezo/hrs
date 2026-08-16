import Link from 'next/link';
import { getRelatedArticles } from '@/lib/learn';

/*
 * Homepage entry point into the Learn hub.
 *
 * The hub is the site's topical-authority asset, but nothing on the homepage
 * linked to it — so the strongest page on the domain passed none of its equity
 * down. A footer link helps; an in-content link from the homepage body counts
 * for more, because it sits in the main content rather than site boilerplate.
 *
 * Slugs are resolved through the content layer rather than hardcoded, so the
 * card titles and summaries can never drift from the articles themselves.
 */

const FEATURED = [
  'humanoid-robots-uk-guide',
  'choosing-a-humanoid-robot-integrator',
  'humanoid-robots-in-manufacturing',
  'humanoid-robots-in-warehousing-and-logistics',
  'humanoid-robot-roi',
  'how-to-deploy-a-humanoid-robot',
];

export default async function LearnPreview() {
  const articles = await getRelatedArticles(FEATURED);

  return (
    <section
      id="learn"
      aria-label="Learn"
      className="py-24 md:py-32 bg-white"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              Learn
            </p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
              Humanoid robots,<br />explained properly.
            </h2>
          </div>
          <p className="max-w-sm text-base text-black leading-relaxed md:text-right">
            Straight answers on what humanoid robots do, what they cost to run, where they
            fit in UK industry and how a deployment actually works — no sales pitch.
          </p>
        </div>

        {/* Article grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 rounded-2xl overflow-hidden">
          {articles.map(({ slug, title, description, category }) => (
            <Link
              key={slug}
              href={`/learn/${slug}`}
              className="group bg-white p-7 flex flex-col gap-3 hover:bg-gray-50 transition-colors duration-150"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-600">
                {category}
              </span>
              <h3 className="text-base font-semibold text-gray-900 leading-snug group-hover:text-black">
                {title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                {description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/learn"
            className="inline-flex items-center justify-center bg-white text-gray-900 border border-gray-300 px-7 md:px-8 py-3.5 md:py-4 rounded-full text-sm font-semibold hover:bg-gray-50 transition-colors"
          >
            Browse all 44 guides
          </Link>
        </div>

      </div>
    </section>
  );
}
