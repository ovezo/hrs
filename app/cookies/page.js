import Link from 'next/link';
import LegalLayout from '@/components/legal/LegalLayout';
import CookieSettingsLink from '@/components/analytics/CookieSettingsLink';

/*
 * ⚠️ Before publishing, someone at HRS needs to confirm:
 *   · that the cookie table below matches what the live tags actually set
 *     (check in DevTools → Application → Cookies after accepting)
 *   · the company registration number for the privacy page
 * The technical description here is accurate to the code as written: nothing
 * loads until consent, and the /videos embeds use youtube-nocookie.com.
 */

export const metadata = {
  title: 'Cookie Policy | HRS — Humanoid Robot Solutions',
  description:
    'How HRS uses cookies and similar technologies on hrsrobot.co.uk, which cookies are set, and how to change your choice at any time.',
  alternates: { canonical: '/cookies' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    title: 'Cookie Policy | HRS',
    description: 'How HRS uses cookies on hrsrobot.co.uk and how to change your choice.',
    url: '/cookies',
    siteName: 'HRS — Humanoid Robot Solutions',
    locale: 'en_GB',
  },
};

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookie policy" breadcrumb="Cookies" updated="8 August 2026">
      <p>
        This page explains the cookies and similar technologies used on hrsrobot.co.uk, who
        sets them, and how to change your mind at any time.
      </p>

      <h2>The short version</h2>
      <p>
        We set <strong>no analytics cookies unless you agree to them</strong>. Until you accept,
        no analytics scripts are loaded at all — not in a limited mode, not at all. If you
        decline, the site works exactly as it does otherwise; we simply learn nothing about
        your visit.
      </p>
      <p>
        The one thing we store either way is your choice itself, so we don&apos;t ask again on
        every page. It lives in your browser&apos;s local storage, never leaves your device, and
        is not a cookie.
      </p>

      <h2>Changing your mind</h2>
      <p>
        You can change your decision whenever you like:{' '}
        <CookieSettingsLink className="font-medium text-gray-900 underline underline-offset-2 hover:text-gray-500" />
        . If you decline after previously accepting, we stop collecting anything and delete the
        analytics cookies already on your device. A small number of cookies set on Microsoft&apos;s
        own domain can only be removed through your browser settings.
      </p>

      <h2>What gets set if you accept</h2>
      <p>
        Accepting enables two analytics tools. Neither is used for advertising, and we do not
        run ad tags of any kind — advertising storage stays switched off permanently.
      </p>

      <h3>Google Analytics 4</h3>
      <p>
        Tells us how many people visit, which pages they read, and where they arrived from.
        Provided by Google Ireland Limited.
      </p>

      <h3>Microsoft Clarity</h3>
      <p>
        Produces heatmaps and anonymised session replays so we can see where the site confuses
        people. Replays are reconstructions of page layout and interactions, not video
        recordings of your screen, and form fields are masked — we cannot see what you type.
        Provided by Microsoft Ireland Operations Limited. Microsoft also uses aggregated,
        de-identified data from Clarity to improve its own products and services.
      </p>

      <h2>Cookies used</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Set by</th>
            <th>Purpose</th>
            <th>Expires</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>hrs-cookie-consent</td>
            <td>HRS</td>
            <td>Remembers your cookie choice. Local storage, not a cookie.</td>
            <td>Until you clear it</td>
          </tr>
          <tr>
            <td>_ga, _ga_*</td>
            <td>Google Analytics</td>
            <td>Distinguishes one visitor from another and keeps session state.</td>
            <td>2 years</td>
          </tr>
          <tr>
            <td>_clck</td>
            <td>Microsoft Clarity</td>
            <td>Keeps a Clarity identifier for the browser.</td>
            <td>1 year</td>
          </tr>
          <tr>
            <td>_clsk</td>
            <td>Microsoft Clarity</td>
            <td>Joins page views into a single session.</td>
            <td>1 day</td>
          </tr>
          <tr>
            <td>CLID, MUID, ANONCHK, SM</td>
            <td>Microsoft (clarity.ms)</td>
            <td>Set on Microsoft&apos;s own domain to recognise a browser across sessions.</td>
            <td>Up to 1 year</td>
          </tr>
        </tbody>
      </table>

      <h2>Videos</h2>
      <p>
        The videos on <Link href="/videos">/videos</Link>{' '}are hosted on YouTube and embedded
        through youtube-nocookie.com, which does not set tracking cookies unless you play a
        video. Once you press play, YouTube may set its own cookies under Google&apos;s privacy
        policy.
      </p>

      <h2>Controlling cookies in your browser</h2>
      <p>
        Every major browser lets you block or delete cookies from its settings, independently
        of the choice you make here. Blocking cookies broadly may affect how other websites
        work; it will not stop this site functioning.
      </p>

      <h2>Questions</h2>
      <p>
        Email <a href="mailto:info@hrsrobot.co.uk">info@hrsrobot.co.uk</a>. See also our{' '}
        <Link href="/privacy">privacy policy</Link>.
      </p>
    </LegalLayout>
  );
}
