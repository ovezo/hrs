/*
 * Renders a Learn article (the JSON shape from lib/learn.js) to Markdown.
 * Used by the /llms-full.txt route so AI crawlers can ingest the full content
 * of every article in one file. Mirrors the block types in ArticleBody.js.
 */

/** Flattens a string | runs[] | { text, href } value to Markdown text. */
function runsToMarkdown(value, siteUrl) {
  if (value == null) return '';
  if (typeof value === 'string') return value;
  if (Array.isArray(value)) return value.map((v) => runsToMarkdown(v, siteUrl)).join('');
  const { text, href } = value;
  if (!href) return text || '';
  const url = href.startsWith('/') ? `${siteUrl}${href}` : href;
  return `[${text}](${url})`;
}

function cell(value, siteUrl) {
  // Escape pipes so table cells don't break the Markdown table.
  return runsToMarkdown(value, siteUrl).replace(/\|/g, '\\|');
}

function blockToMarkdown(block, siteUrl) {
  switch (block.type) {
    case 'heading':
      return `## ${block.text}`;
    case 'subheading':
      return `### ${block.text}`;
    case 'paragraph':
      return runsToMarkdown(block.runs || block.text, siteUrl);
    case 'list':
      return block.items.map((i) => `- ${runsToMarkdown(i, siteUrl)}`).join('\n');
    case 'orderedList':
      return block.items.map((i, n) => `${n + 1}. ${runsToMarkdown(i, siteUrl)}`).join('\n');
    case 'callout':
      return `> ${runsToMarkdown(block.runs || block.text, siteUrl)}`;
    case 'table': {
      const headers = block.headers || (block.rows[0] || []).map(() => '');
      const head = `| ${headers.map((h) => cell(h, siteUrl)).join(' | ')} |`;
      const rule = `| ${headers.map(() => '---').join(' | ')} |`;
      const rows = block.rows.map((r) => `| ${r.map((c) => cell(c, siteUrl)).join(' | ')} |`);
      return [head, rule, ...rows].join('\n');
    }
    default:
      return '';
  }
}

/** Returns the full Markdown for a single article (heading, quick answer, body, FAQ). */
export function articleToMarkdown(article, siteUrl) {
  const url = `${siteUrl}/learn/${article.slug}`;
  const parts = [
    `# ${article.title}`,
    `Source: ${url}  \nCategory: ${article.category}`,
    `**Quick answer:** ${article.quickAnswer}`,
  ];

  for (const block of article.body || []) {
    const md = blockToMarkdown(block, siteUrl);
    if (md) parts.push(md);
  }

  if (article.faq && article.faq.length > 0) {
    parts.push('## Frequently asked questions');
    for (const { question, answer } of article.faq) {
      parts.push(`### ${question}\n${answer}`);
    }
  }

  return parts.join('\n\n');
}
