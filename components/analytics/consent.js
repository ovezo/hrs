'use client';

/**
 * Cookie-consent state, shared by the banner and the tag loader.
 *
 * HRS is a UK company, so analytics cookies need opt-in consent under PECR —
 * and nothing is loaded until we get it. GA4 and Clarity are both mounted only
 * after a "granted" decision (see Analytics.js), which is why the stored value
 * is a plain three-state flag rather than a per-vendor object.
 *
 * We never ask for advertising consent: HRS runs no ad tags, so ad_storage
 * stays denied permanently and the banner only has to offer one real choice.
 */

export const CONSENT_STORAGE_KEY = 'hrs-cookie-consent';
export const CONSENT_EVENT = 'hrs:consent-change';
export const CONSENT_REOPEN_EVENT = 'hrs:consent-reopen';

/** @returns {'granted'|'denied'|null} null means "not asked yet". */
export function readConsent() {
  if (typeof window === 'undefined') return null;
  try {
    const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return stored === 'granted' || stored === 'denied' ? stored : null;
  } catch {
    // Private mode or blocked storage — treat as undecided, which means we
    // stay silent and load nothing.
    return null;
  }
}

/**
 * Pushes the decision to whichever tags are already on the page. Safe to call
 * when they aren't: both guards are no-ops before the scripts load, and
 * Analytics.js re-applies consent on mount for that case.
 */
export function applyConsent(value) {
  if (typeof window === 'undefined') return;
  const analytics = value === 'granted' ? 'granted' : 'denied';

  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: analytics,
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
  }

  // Clarity's own API — note the non-standard capitalisation, it is what
  // Microsoft's consentv2 spec asks for.
  if (typeof window.clarity === 'function') {
    window.clarity('consentv2', {
      ad_Storage: 'denied',
      analytics_Storage: analytics,
    });
  }
}

/** First-party cookies the two tools set, so withdrawal can clear them. */
const ANALYTICS_COOKIE_PREFIXES = ['_ga', '_gid', '_gat', '_clck', '_clsk'];

/**
 * Deletes analytics cookies already on the device.
 *
 * Withdrawing consent has to actually take effect, not just stop future
 * collection — so a visitor who accepts and later declines doesn't keep a
 * GA identifier. Only first-party cookies are reachable from here; Clarity's
 * own clarity.ms cookies are cleared by its API when it happens to be loaded.
 */
function clearAnalyticsCookies() {
  if (typeof window.clarity === 'function') {
    try {
      window.clarity('consent', false);
    } catch {
      // Best effort.
    }
  }

  const { hostname } = window.location;
  // GA sets cookies on the registrable domain, so expire them there too.
  const domains = [undefined, hostname, `.${hostname}`, `.${hostname.split('.').slice(-2).join('.')}`];

  for (const cookie of document.cookie.split('; ')) {
    const name = cookie.split('=')[0];
    if (!ANALYTICS_COOKIE_PREFIXES.some((prefix) => name.startsWith(prefix))) continue;
    for (const domain of domains) {
      document.cookie =
        `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/` +
        (domain ? `; domain=${domain}` : '');
    }
  }
}

/** Records a decision and tells the rest of the app about it. */
export function writeConsent(value) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
  } catch {
    // Can't persist it — honour the choice for this page at least.
  }
  applyConsent(value);
  if (value !== 'granted') clearAnalyticsCookies();
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}

/** Re-opens the banner so a visitor can change their mind (footer link). */
export function openConsentSettings() {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new Event(CONSENT_REOPEN_EVENT));
}
