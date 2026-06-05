/**
 * Returns the canonical base URL for the current deployment.
 *
 * Priority:
 *   1. NEXT_PUBLIC_SITE_URL  — set this in the Vercel dashboard when you
 *                              attach a custom domain (e.g. https://hrs.com)
 *   2. VERCEL_URL            — Vercel injects this automatically on every
 *                              deployment (preview + production)
 *   3. localhost fallback    — local dev
 */
export function getBaseUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '');
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return 'http://localhost:3001';
}

/**
 * Returns the public contact email used by the CTA buttons and structured data.
 * Set NEXT_PUBLIC_CONTACT_EMAIL in the environment (see .env) to change it.
 */
export function getContactEmail() {
  return process.env.NEXT_PUBLIC_CONTACT_EMAIL;
}
