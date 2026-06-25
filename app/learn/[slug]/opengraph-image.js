import { getArticleSlugs, getArticleBySlug } from '@/lib/learn';
import { createLearnCard } from '@/lib/learnShareImage';

export { alt, size, contentType } from '@/lib/learnShareImage';

export async function generateStaticParams() {
  const slugs = await getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function Image({ params }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  return createLearnCard({
    title: article?.title || 'Humanoid Robot Solutions',
    category: article?.category || 'Learn',
  });
}
