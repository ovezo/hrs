import { notFound } from 'next/navigation';
import { getBaseUrl } from '@/lib/config';
import {
  getArticleSlugs,
  getArticleBySlug,
  getRelatedArticles,
} from '@/lib/learn';
import Article from '@/components/learn/Article';

// Every article is known at build time, so prerender them all and 404 anything
// else (no runtime rendering of unknown slugs).
export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};

  const path = `/learn/${slug}`;
  return {
    title: `${article.title} | HRS`,
    description: article.description,
    keywords: article.keywords,
    alternates: { canonical: path },
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.description,
      url: path,
      siteName: 'HRS — Humanoid Robot Solutions',
      locale: 'en_GB',
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified || article.datePublished,
      authors: ['HRS — Humanoid Robot Solutions'],
      section: article.category,
      tags: article.keywords,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
    },
  };
}

function buildJsonLd(article, slug) {
  const siteUrl = getBaseUrl();
  const url = `${siteUrl}/learn/${slug}`;
  const published = article.datePublished;
  const modified = article.dateModified || article.datePublished;

  const graph = [
    {
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: article.title,
      description: article.description,
      inLanguage: 'en-GB',
      datePublished: published,
      dateModified: modified,
      author: {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'HRS — Humanoid Robot Solutions',
      },
      publisher: { '@id': `${siteUrl}/#organization` },
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      image: `${url}/opengraph-image`,
      articleSection: article.category,
      keywords: (article.keywords || []).join(', '),
      url,
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '#quick-answer'],
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Learn', item: `${siteUrl}/learn` },
        { '@type': 'ListItem', position: 3, name: article.title, item: url },
      ],
    },
  ];

  if (article.faq && article.faq.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: article.faq.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const related = await getRelatedArticles(article.related);
  const jsonLd = buildJsonLd(article, slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Article article={article} related={related} />
    </>
  );
}
