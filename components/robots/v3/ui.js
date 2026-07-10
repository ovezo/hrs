// Shared presentational chrome for the v3 "dossier" look. No hooks, so these
// render fine from both server and client components.

/** Amber corner brackets that frame a relative container. */
export function Ticks() {
  const base = 'pointer-events-none absolute h-3 w-3 border-amber-500';
  return (
    <>
      <span aria-hidden="true" className={`${base} left-0 top-0 border-l-2 border-t-2`} />
      <span aria-hidden="true" className={`${base} right-0 top-0 border-r-2 border-t-2`} />
      <span aria-hidden="true" className={`${base} bottom-0 left-0 border-b-2 border-l-2`} />
      <span aria-hidden="true" className={`${base} bottom-0 right-0 border-b-2 border-r-2`} />
    </>
  );
}

/** Mono-coded header that keeps the sections reading as one document.
 *  `compact` shrinks it for tight pinned layouts on small screens. */
export function SectionHeader({ index, code, title, sub, compact = false }) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-600">
        {code}
      </p>
      <h2
        className={`font-bold tracking-tight text-gray-900 ${
          compact ? 'mt-1.5 text-2xl sm:mt-3 sm:text-4xl lg:text-5xl' : 'mt-3 text-4xl sm:text-5xl'
        }`}
      >
        {title}
      </h2>
      {sub ? (
        <p
          className={`text-gray-500 ${
            compact ? 'mt-1 hidden text-base leading-snug sm:block' : 'mt-4 text-lg leading-relaxed'
          }`}
        >
          {sub}
        </p>
      ) : null}
    </div>
  );
}

/** One row of a spec table (label left, value right). */
export function SpecValue({ spec, animatedValue }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-gray-200/80 py-1.5 md:py-2.5">
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400 md:text-[11px]">
        {spec.label}
      </span>
      <span className="font-mono text-xs font-semibold text-gray-900 tabular-nums whitespace-nowrap md:text-sm">
        {spec.text ?? (
          <>
            {spec.prefix ?? ''}
            {animatedValue}
            {spec.unit ? <span className="ml-1 text-xs font-medium text-gray-500">{spec.unit}</span> : null}
          </>
        )}
      </span>
    </div>
  );
}
