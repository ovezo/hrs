'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CONSENT_REOPEN_EVENT, readConsent, writeConsent } from './consent';

/**
 * Cookie banner.
 *
 * The ICO expects rejecting to be as easy as accepting, so "Accept" and
 * "Decline" are the same size, sit side by side and are one click each. There
 * is deliberately no "manage preferences" third path — with a single category
 * of cookies in play it would only add a step to the reject route.
 */
export default function ConsentBanner() {
  // Starts closed so the server and first client render agree; the stored
  // decision is only readable after mount.
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (readConsent() === null) setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener(CONSENT_REOPEN_EVENT, reopen);
    return () => window.removeEventListener(CONSENT_REOPEN_EVENT, reopen);
  }, []);

  if (!open) return null;

  const decide = (value) => {
    writeConsent(value);
    setOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-banner-heading"
      className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-5 shadow-lg sm:p-6">
        <h2 id="cookie-banner-heading" className="text-sm font-semibold text-gray-900">
          Cookies on this site
        </h2>
        <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
          We&apos;d like to set analytics cookies to understand how people use the site so we
          can improve it. We only turn them on if you agree. See our{' '}
          <Link href="/cookies" className="underline underline-offset-2 hover:text-gray-900">
            cookie policy
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="underline underline-offset-2 hover:text-gray-900">
            privacy policy
          </Link>
          .
        </p>

        <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
          <button
            type="button"
            onClick={() => decide('granted')}
            className="flex-1 rounded-xl border border-gray-900 bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-700 hover:border-gray-700"
          >
            Accept analytics cookies
          </button>
          <button
            type="button"
            onClick={() => decide('denied')}
            className="flex-1 rounded-xl border border-gray-900 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-50"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
