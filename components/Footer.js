import Link from 'next/link';
import { FlagChip } from '@/components/UnionJack';
import CookieSettingsLink from '@/components/analytics/CookieSettingsLink';

/*
 * Site-wide footer.
 *
 * As well as the legal row, this is the site's main internal-linking surface.
 * Before it existed, the 44-article Learn hub hung off a single navbar link and
 * received no link equity from anywhere else, so the hub's topical authority
 * never reached the pages meant to rank.
 *
 * The Learn links below are curated cornerstones, not a "latest N" feed — they
 * mirror the CORNERSTONE set in `app/sitemap.js`, so the two stay in agreement
 * about which pages matter most. Keep them in sync when either changes.
 *
 * Anchor text is the article's own title rather than "read more"/"click here":
 * these are the descriptive, qualified-intent phrases we actually want to rank
 * for ("humanoid robots in the UK", "humanoid robot integrator"), and the anchor
 * is the strongest relevance signal an internal link carries.
 */

const linkClass = 'text-sm text-gray-500 hover:text-gray-900 transition-colors';
const legalLinkClass = 'text-xs text-gray-400 hover:text-gray-600 transition-colors';
const headingClass =
  'text-xs font-semibold uppercase tracking-[0.14em] text-gray-900 mb-4';

const EXPLORE = [
  { href: '/robots', label: 'Our Robots' },
  { href: '/products', label: 'Product Range' },
  { href: '/videos', label: 'Videos' },
  { href: '/learn', label: 'Learn' },
  { href: '/careers', label: "We're Hiring" },
  { href: '/contact', label: 'Contact' },
];

const START_HERE = [
  { slug: 'what-is-a-humanoid-robot', label: 'What is a humanoid robot?' },
  { slug: 'humanoid-robots-uk-guide', label: 'Humanoid robots in the UK' },
  { slug: 'humanoid-robot-platforms-2026', label: 'Humanoid robot platforms in 2026' },
  { slug: 'what-is-physical-ai', label: 'What is physical AI?' },
  {
    slug: 'humanoid-robots-vs-industrial-robots-and-cobots',
    label: 'Humanoid robots vs. industrial robots',
  },
];

const FOR_BUYERS = [
  {
    slug: 'choosing-a-humanoid-robot-integrator',
    label: 'Choosing a humanoid robot integrator',
  },
  { slug: 'humanoid-robots-in-manufacturing', label: 'Humanoid robots in manufacturing' },
  {
    slug: 'humanoid-robots-in-warehousing-and-logistics',
    label: 'Humanoid robots in warehousing',
  },
  { slug: 'how-to-deploy-a-humanoid-robot', label: 'How to deploy a humanoid robot' },
  { slug: 'are-humanoid-robots-safe', label: 'Are humanoid robots safe?' },
];

function LinkColumn({ heading, children }) {
  return (
    <div>
      <h2 className={headingClass}>{heading}</h2>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      {/*
        Only the top padding lives on the container — the legal row carries its
        own symmetric py-8, so the gap above the copyright line (border → text)
        matches the gap below it (text → page bottom).
      */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 pt-14 md:pt-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Identity column — the entity signals (who, where, how to reach us). */}
          <div className="lg:pr-8">
            <div className="mb-4 inline-flex items-center gap-2.5">
              <FlagChip className="h-3.5 w-7" />
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-600">
                British Robotics Company
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-500">
              HRS (Humanoid Robot Solutions) is a UK humanoid robot integrator, taking
              humanoid robots from demonstration to deployment across manufacturing,
              warehousing and logistics.
            </p>
            <a
              href="mailto:info@hrsrobot.co.uk"
              className="mt-4 inline-block text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
            >
              info@hrsrobot.co.uk
            </a>
          </div>

          <LinkColumn heading="Explore">
            {EXPLORE.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={linkClass}>
                  {label}
                </Link>
              </li>
            ))}
          </LinkColumn>

          <LinkColumn heading="Start Here">
            {START_HERE.map(({ slug, label }) => (
              <li key={slug}>
                <Link href={`/learn/${slug}`} className={linkClass}>
                  {label}
                </Link>
              </li>
            ))}
          </LinkColumn>

          <LinkColumn heading="For Buyers">
            {FOR_BUYERS.map(({ slug, label }) => (
              <li key={slug}>
                <Link href={`/learn/${slug}`} className={linkClass}>
                  {label}
                </Link>
              </li>
            ))}
          </LinkColumn>
        </div>

        {/* Legal row */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gray-200 py-8 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="text-xs text-gray-400">
              © 2026 HRS — Humanoid Robot Solutions UK
            </span>
            <FlagChip className="h-3.5 w-7" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link href="/privacy" className={legalLinkClass}>Privacy</Link>
            <Link href="/cookies" className={legalLinkClass}>Cookies</Link>
            <CookieSettingsLink className={legalLinkClass} />
          </div>
        </div>
      </div>
    </footer>
  );
}
