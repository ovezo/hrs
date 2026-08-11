'use client';

import { openConsentSettings } from './consent';

/**
 * Footer link that brings the cookie banner back, so a decision can be
 * changed at any time — which the ICO expects to be as easy as making it.
 */
export default function CookieSettingsLink({ className = '' }) {
  return (
    <button type="button" onClick={openConsentSettings} className={className}>
      Cookie settings
    </button>
  );
}
