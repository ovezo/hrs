import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

/*
 * Learn hub data layer.
 *
 * Each article is a single JSON file in `content/learn/`, where the file name
 * (minus `.json`) is the article slug — e.g. `content/learn/what-is-a-humanoid-robot.json`
 * is served at `/learn/what-is-a-humanoid-robot`.
 *
 * Everything here runs on the server at build time (the Learn pages are fully
 * static — see `generateStaticParams` in `app/learn/[slug]/page.js`), so reading
 * straight from disk keeps the pages text-only and very fast to open.
 *
 * Article JSON shape:
 * {
 *   "title":        string,                  // H1 + <title>
 *   "description":  string,                  // meta description (~150–160 chars)
 *   "category":     string,                  // grouping label, e.g. "Fundamentals"
 *   "datePublished":"YYYY-MM-DD",
 *   "dateModified": "YYYY-MM-DD",
 *   "keywords":     string[],
 *   "quickAnswer":  string,                  // 1–3 sentence direct answer (the AEO snippet)
 *   "body":         Block[],                 // long-form article (see ArticleBody.js)
 *   "faq":          { question, answer }[],  // optional — rendered + emitted as FAQPage schema
 *   "related":      string[]                 // optional — slugs of related articles
 * }
 */

const CONTENT_DIR = join(process.cwd(), 'content', 'learn');
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** Returns every article slug, derived from the JSON file names. */
export async function getArticleSlugs() {
  const files = await readdir(CONTENT_DIR);
  return files
    .filter((name) => name.endsWith('.json'))
    .map((name) => name.replace(/\.json$/, ''))
    .filter((slug) => SLUG_PATTERN.test(slug));
}

/**
 * Loads and normalises a single article by slug. Returns `null` for an unknown
 * or malformed slug so callers can `notFound()`. The slug is validated against a
 * strict pattern first, so a slug can never escape the content directory.
 */
export async function getArticleBySlug(slug) {
  if (typeof slug !== 'string' || !SLUG_PATTERN.test(slug)) return null;
  try {
    const raw = await readFile(join(CONTENT_DIR, `${slug}.json`), 'utf8');
    const data = JSON.parse(raw);
    return {
      slug,
      faq: [],
      related: [],
      keywords: [],
      body: [],
      ...data,
      readingTime: estimateReadingTime(data),
    };
  } catch {
    return null;
  }
}

/** Loads every article, newest first (by `datePublished`). */
export async function getAllArticles() {
  const slugs = await getArticleSlugs();
  const articles = await Promise.all(slugs.map(getArticleBySlug));
  return articles
    .filter(Boolean)
    .sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1));
}

/**
 * Display order for category sections, shared by the hub and the llms.txt
 * index so they stay consistent. Categories not listed fall to the end.
 */
export const CATEGORY_ORDER = [
  'Fundamentals',
  'Comparisons',
  'Applications',
  'Adoption',
  'Buying',
  'Safety',
  'Market',
];

/** Groups articles into `[category, articles][]`, ordered by CATEGORY_ORDER. */
export function groupArticlesByCategory(articles) {
  const groups = new Map();
  for (const article of articles) {
    const key = article.category || 'More';
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(article);
  }
  return [...groups.entries()].sort((a, b) => {
    const ai = CATEGORY_ORDER.indexOf(a[0]);
    const bi = CATEGORY_ORDER.indexOf(b[0]);
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
  });
}

/** Resolves a list of related slugs to lightweight article cards (skips misses). */
export async function getRelatedArticles(slugs = []) {
  const articles = await Promise.all(slugs.map(getArticleBySlug));
  return articles.filter(Boolean).map(({ slug, title, description, category }) => ({
    slug,
    title,
    description,
    category,
  }));
}

/** Pulls the readable text out of every block so we can estimate reading time. */
function collectText(article) {
  const parts = [article.quickAnswer || ''];
  for (const block of article.body || []) {
    if (block.text) parts.push(block.text);
    if (Array.isArray(block.runs)) {
      parts.push(block.runs.map((r) => (typeof r === 'string' ? r : r.text)).join(' '));
    }
    if (Array.isArray(block.items)) {
      parts.push(
        block.items
          .map((item) => (typeof item === 'string' ? item : item.text || ''))
          .join(' ')
      );
    }
    if (Array.isArray(block.rows)) {
      parts.push(block.rows.flat().join(' '));
    }
  }
  for (const { question, answer } of article.faq || []) {
    parts.push(question, answer);
  }
  return parts.join(' ');
}

/** Whole-minute reading-time estimate at ~220 words per minute (min 1). */
export function estimateReadingTime(article) {
  const words = collectText(article).trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

/** Formats `YYYY-MM-DD` as a UK long date, e.g. "25 June 2026". */
export function formatDate(iso) {
  if (!iso) return '';
  const date = new Date(`${iso}T00:00:00Z`);
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}
