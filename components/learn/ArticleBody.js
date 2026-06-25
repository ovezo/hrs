import Link from 'next/link';

/*
 * Renders an article's long-form `body` from structured JSON blocks.
 *
 * Supported block types (see lib/learn.js for the article shape):
 *   { type: 'heading',     text }                 → <h2>
 *   { type: 'subheading',  text }                 → <h3>
 *   { type: 'paragraph',   text | runs }          → <p>  (runs allow inline links)
 *   { type: 'list',        items }                → <ul>
 *   { type: 'orderedList', items }                → <ol>
 *   { type: 'table',       headers, rows }        → <table>
 *   { type: 'callout',     text | runs }          → highlighted aside
 *
 * `runs` (and list `items`) may mix plain strings with { text, href } objects;
 * an href starting with "/" renders as an internal <Link>, anything else as a
 * normal anchor. Plain strings keep the body XSS-safe (no raw HTML).
 */

function Inline({ value }) {
  if (typeof value === 'string') return value;
  if (Array.isArray(value)) {
    return value.map((run, i) => <Inline key={i} value={run} />);
  }
  const { text, href } = value;
  if (!href) return text;
  const className =
    'font-medium text-gray-900 underline decoration-amber-400 decoration-2 underline-offset-2 hover:decoration-amber-600 transition-colors';
  return href.startsWith('/') ? (
    <Link href={href} className={className}>
      {text}
    </Link>
  ) : (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
}

function Block({ block }) {
  switch (block.type) {
    case 'heading':
      return (
        <h2 className="mt-12 mb-4 text-2xl sm:text-[28px] font-bold tracking-tight text-gray-900 scroll-mt-24">
          {block.text}
        </h2>
      );

    case 'subheading':
      return (
        <h3 className="mt-8 mb-3 text-lg font-semibold text-gray-900">{block.text}</h3>
      );

    case 'paragraph':
      return (
        <p className="my-5 text-[17px] leading-[1.75] text-gray-700">
          <Inline value={block.runs || block.text} />
        </p>
      );

    case 'list':
      return (
        <ul className="my-5 space-y-2.5 pl-5 list-disc marker:text-amber-500 text-[17px] leading-[1.7] text-gray-700">
          {block.items.map((item, i) => (
            <li key={i} className="pl-1.5">
              <Inline value={item} />
            </li>
          ))}
        </ul>
      );

    case 'orderedList':
      return (
        <ol className="my-5 space-y-2.5 pl-5 list-decimal marker:font-semibold marker:text-gray-400 text-[17px] leading-[1.7] text-gray-700">
          {block.items.map((item, i) => (
            <li key={i} className="pl-1.5">
              <Inline value={item} />
            </li>
          ))}
        </ol>
      );

    case 'table':
      return (
        <div className="my-7 overflow-x-auto rounded-xl ring-1 ring-gray-200">
          <table className="w-full border-collapse text-left text-[15px]">
            {block.headers && (
              <thead>
                <tr className="bg-gray-50">
                  {block.headers.map((cell, i) => (
                    <th
                      key={i}
                      className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-900"
                    >
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r} className="even:bg-gray-50/50">
                  {row.map((cell, c) => (
                    <td
                      key={c}
                      className="border-b border-gray-100 px-4 py-3 align-top text-gray-700"
                    >
                      <Inline value={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case 'callout':
      return (
        <aside className="my-7 rounded-r-lg border-l-4 border-amber-400 bg-amber-50/60 px-5 py-4 text-[16px] leading-[1.7] text-gray-700">
          <Inline value={block.runs || block.text} />
        </aside>
      );

    default:
      return null;
  }
}

export default function ArticleBody({ blocks = [] }) {
  return (
    <>
      {blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </>
  );
}
