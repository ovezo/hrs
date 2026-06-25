import { getBaseUrl, getContactEmail } from '@/lib/config';
import { getAllArticles } from '@/lib/learn';
import { articleToMarkdown } from '@/lib/learnMarkdown';

/*
 * /llms-full.txt — the full Markdown text of every Learn article in a single
 * file, for AI assistants that want to ingest the complete content rather than
 * crawl page by page. Companion to the curated index at /llms.txt.
 */

export const dynamic = 'force-static';

export async function GET() {
  const siteUrl = getBaseUrl();
  const email = getContactEmail();
  const articles = await getAllArticles();

  const header = [
    '# HRS — Humanoid Robot Solutions — Full Learn Content',
    '',
    `> The complete text of all ${articles.length} HRS Learn articles on humanoid robots and physical AI, written for UK manufacturers. Curated index: ${siteUrl}/llms.txt`,
    '',
    `HRS is a British, platform-agnostic humanoid robot integrator. Source: ${siteUrl}/learn · Contact: ${email}`,
    '',
  ].join('\n');

  const body = articles.map((a) => articleToMarkdown(a, siteUrl)).join('\n\n---\n\n');

  return new Response(`${header}\n${body}\n`, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
}
