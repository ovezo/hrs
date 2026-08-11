'use client';

import { useEffect } from 'react';
import { track } from './track';

/**
 * Delegated click tracking for every CTA on the site.
 *
 * The "Book a Demo" buttons live in a dozen different server components and
 * all point at /contact. Rather than converting each one into a client
 * component, we listen once at the document level — which also means CTAs
 * added later are tracked without anyone remembering to instrument them.
 *
 * Events that aren't link clicks (the contact form submit, opening a video)
 * still call track() directly at their source.
 */
export default function ConversionTracking() {
  useEffect(() => {
    const onClick = (event) => {
      const link = event.target?.closest?.('a[href]');
      if (!link) return;

      const href = link.getAttribute('href') || '';
      // Button copy is the most useful label we have, and it stays readable in
      // reports. Trimmed because these anchors often wrap an icon and newlines.
      const params = {
        source_page: window.location.pathname,
        cta_text: (link.textContent || '').trim().slice(0, 60) || 'unlabelled',
      };

      if (href.startsWith('mailto:')) {
        track('email_click', params);
      } else if (href.startsWith('tel:')) {
        track('phone_click', params);
      } else if (href === '/contact' || href.startsWith('/contact?')) {
        track('contact_cta_click', params);
      } else if (/^https?:\/\//.test(href) && !href.includes(window.location.host)) {
        track('outbound_click', { ...params, destination: new URL(href).host });
      }
    };

    // Capture phase: some CTAs stop propagation or re-render on click.
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}
