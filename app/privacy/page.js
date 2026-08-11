import Link from 'next/link';
import LegalLayout from '@/components/legal/LegalLayout';

/*
 * ⚠️ Placeholders that need real values before this is relied on:
 *   · COMPANY_NUMBER — Companies House registration number
 *   · the retention periods below are sensible defaults, not a decision HRS
 *     has actually made. Confirm them.
 * Everything else describes what the site genuinely does today.
 */
const COMPANY_NUMBER = 'TBC';

export const metadata = {
  title: 'Privacy Policy | HRS — Humanoid Robot Solutions',
  description:
    'How Humanoid Robot Solutions Ltd collects, uses and protects personal data on hrsrobot.co.uk, and your rights under UK GDPR.',
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    title: 'Privacy Policy | HRS',
    description: 'How HRS collects, uses and protects personal data, and your rights under UK GDPR.',
    url: '/privacy',
    siteName: 'HRS — Humanoid Robot Solutions',
    locale: 'en_GB',
  },
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy policy" breadcrumb="Privacy" updated="8 August 2026">
      <p>
        This policy explains what personal data Humanoid Robot Solutions Ltd collects through
        hrsrobot.co.uk, why, and what you can do about it.
      </p>

      <h2>Who we are</h2>
      <p>
        Humanoid Robot Solutions Ltd (&ldquo;HRS&rdquo;, &ldquo;we&rdquo;) is the data
        controller for personal data collected through this website.
      </p>
      <ul>
        <li>Unit 45, Mochdre Industrial Estate, Newtown, Powys, SY16 4LE, United Kingdom</li>
        <li>Company number: {COMPANY_NUMBER}</li>
        <li>
          Email: <a href="mailto:info@hrsrobot.co.uk">info@hrsrobot.co.uk</a>
        </li>
        <li>Telephone: +44 (0) 1686 621138</li>
      </ul>

      <h2>What we collect, and why</h2>

      <h3>When you contact us</h3>
      <p>
        Our contact form asks for your email address, a subject and a message. We use these
        solely to answer you. The lawful basis is legitimate interests — you have asked us a
        question and we need your details to reply. The same applies if you email or call us
        directly.
      </p>
      <p>
        Form submissions are delivered to our inbox by Web3Forms, a form-processing service
        that handles the message in transit. It is sent straight from your browser to
        Web3Forms and forwarded to info@hrsrobot.co.uk.
      </p>

      <h3>When you apply for a job</h3>
      <p>
        Applications reach us by email. We use the CV and covering material you send only to
        assess your application, on the basis of legitimate interests and steps taken at your
        request prior to entering a contract.
      </p>

      <h3>Analytics</h3>
      <p>
        If — and only if — you accept analytics cookies, we use Google Analytics 4 and
        Microsoft Clarity to understand how the site is used. The lawful basis is your
        consent, which you can withdraw at any time from the{' '}
        <Link href="/cookies">cookie policy</Link> page. If you decline, no analytics scripts
        are loaded and nothing about your visit is recorded.
      </p>
      <p>
        Clarity produces anonymised session replays. These reconstruct page layout, clicks and
        scrolling — they are not video of your screen, and form inputs are masked, so we
        cannot see anything you type.
      </p>

      <h3>Server logs</h3>
      <p>
        Our host, Vercel, keeps standard operational logs (IP address, request time, browser
        user agent) for security and reliability. The lawful basis is legitimate interests in
        keeping the site available and secure.
      </p>

      <h2>Who your data is shared with</h2>
      <p>We do not sell personal data. It is shared only with the providers that run the site:</p>
      <ul>
        <li>Vercel Inc. — website hosting</li>
        <li>Web3Forms — contact form delivery</li>
        <li>Google Ireland Limited — Google Analytics, only with your consent</li>
        <li>Microsoft Ireland Operations Limited — Clarity, only with your consent</li>
        <li>Google/YouTube — only if you play an embedded video</li>
      </ul>
      <p>
        We may also disclose data where the law requires it. Some of these providers process
        data outside the UK; where that happens it is covered by the UK International Data
        Transfer Agreement, the UK Addendum to the EU Standard Contractual Clauses, or an
        adequacy decision.
      </p>

      <h2>How long we keep it</h2>
      <ul>
        <li>Enquiries: up to 24 months after our last contact, so we can pick up the thread.</li>
        <li>Job applications: up to 12 months after the recruitment round closes.</li>
        <li>Analytics data: retained by Google and Microsoft under their own schedules.</li>
      </ul>

      <h2>Your rights</h2>
      <p>Under UK GDPR you have the right to:</p>
      <ul>
        <li>ask what personal data we hold about you, and get a copy</li>
        <li>have inaccurate data corrected</li>
        <li>ask us to delete your data</li>
        <li>ask us to restrict how we use it</li>
        <li>object to processing based on legitimate interests</li>
        <li>receive your data in a portable format</li>
        <li>withdraw consent for analytics at any time</li>
      </ul>
      <p>
        To exercise any of these, email{' '}
        <a href="mailto:info@hrsrobot.co.uk">info@hrsrobot.co.uk</a>. We will respond within
        one month.
      </p>

      <h2>Complaints</h2>
      <p>
        If you are unhappy with how we have handled your data, please tell us first so we can
        put it right. You also have the right to complain to the Information Commissioner&apos;s
        Office at{' '}
        <a href="https://ico.org.uk" rel="noopener noreferrer" target="_blank">
          ico.org.uk
        </a>{' '}
        or on 0303 123 1113.
      </p>

      <h2>Changes</h2>
      <p>
        If this policy changes we will update the date at the top of this page. Material
        changes to how we use analytics will re-trigger the consent banner.
      </p>
    </LegalLayout>
  );
}
