import { getBaseUrl } from '@/lib/config';
import { getAllArticles } from '@/lib/learn';

// Cornerstone pages — broad, high-value entry points get a higher priority
// hint. Everything else (including new articles) is picked up automatically.
const CORNERSTONE = new Set([
  'what-is-a-humanoid-robot',
  'humanoid-robots-uk-guide',
  'humanoid-robots-in-manufacturing',
  'humanoid-robot-platforms-2026',
  'choosing-a-humanoid-robot-integrator',
]);

export default async function sitemap() {
  const siteUrl = getBaseUrl();
  const articles = await getAllArticles();
  const now = new Date();

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteUrl}/robots`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/products`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${siteUrl}/videos`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/learn`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...articles.map((article) => ({
      url: `${siteUrl}/learn/${article.slug}`,
      lastModified: new Date(article.dateModified || article.datePublished),
      changeFrequency: 'monthly',
      priority: CORNERSTONE.has(article.slug) ? 0.8 : 0.7,
    })),
  ];
}
