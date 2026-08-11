'use client';

import { sendGAEvent } from '@next/third-parties/google';
import { readConsent } from './consent';

/**
 * One place to send a conversion event to every analytics tool we run.
 *
 * Keeping the call sites vendor-agnostic means swapping or adding a provider
 * later (PostHog, Plausible) is a change to this file only. Names are
 * snake_case to match GA4 convention.
 *
 * @param {string} name   e.g. 'contact_form_submit'
 * @param {Record<string, string|number>} [params]  extra context, e.g. { source_page: '/products' }
 */
export function track(name, params = {}) {
  if (typeof window === 'undefined') return;
  // No consent, no events — the tags aren't loaded anyway, this just makes
  // that explicit rather than relying on a silent no-op.
  if (readConsent() !== 'granted') return;

  try {
    sendGAEvent('event', name, params);
  } catch {
    // Never let analytics break a real interaction.
  }

  if (typeof window.clarity === 'function') {
    try {
      window.clarity('event', name);
      // Params become Clarity tags so recordings can be filtered by them —
      // e.g. "show me sessions where demo_email_click came from /products".
      for (const [key, value] of Object.entries(params)) {
        window.clarity('set', key, String(value));
      }
    } catch {
      // As above.
    }
  }
}

/** Current path, for tagging an event with where it happened. */
export function currentPath() {
  return typeof window === 'undefined' ? '' : window.location.pathname;
}
