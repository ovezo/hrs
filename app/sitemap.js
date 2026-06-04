import { getBaseUrl } from '@/lib/config';

export default function sitemap() {
  const siteUrl = getBaseUrl();
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
