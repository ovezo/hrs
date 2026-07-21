import Image from 'next/image';
import Link from 'next/link';
import { Ticks } from '../robots/v3/ui';

/** Deep-link to the contact form with the enquiry pre-filled for this product. */
function requestHref(name) {
  const subject = `Product enquiry: ${name}`;
  const message = `I'd like more information about the ${name} — availability, pricing and configuration options.`;
  return `/contact?subject=${encodeURIComponent(subject)}&message=${encodeURIComponent(message)}`;
}

/** One catalogue tile. Transparent studio renders sit on white (contain);
 *  opaque scene shots fill the frame (cover). Cards without an image drop
 *  the media area and lead with the spec sheet instead. */
export default function ProductCard({ product }) {
  const { slug, name, category, tagline, image, alt, cover, specs, note, noteHref } = product;

  return (
    <article id={slug} className="relative flex flex-col scroll-mt-28 bg-white ring-1 ring-gray-200">
      <Ticks />
      {image ? (
        <div className={`relative h-64 overflow-hidden ${cover ? '' : 'bg-white p-5'}`}>
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
            className={cover ? 'object-cover' : 'object-contain p-5'}
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-600">
          {category}
        </p>
        <h3 className="mt-1.5 text-xl font-bold text-gray-900">{name}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-gray-500">{tagline}</p>
        <dl className="mt-4 flex-1">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="flex items-baseline justify-between gap-4 border-b border-gray-200/80 py-1.5"
            >
              <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400">
                {spec.label}
              </dt>
              <dd className="text-right font-mono text-xs font-semibold text-gray-900 tabular-nums">
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>
        
        <Link
          href={requestHref(name)}
          className="group mt-5 ml-auto inline-flex items-center gap-2 self-start text-sm font-semibold text-amber-600 transition-colors hover:text-amber-500"
        >
          Request this product
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
        </Link>
      </div>
    </article>
  );
}
