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

/** Numbered mono header that keeps the sections reading as one document. */
export function SectionHeader({ index, code, title, sub }) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-600">
        {index} // {code}
      </p>
      <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">{title}</h2>
      {sub ? <p className="mt-4 text-lg leading-relaxed text-gray-500">{sub}</p> : null}
    </div>
  );
}

/** One row of a spec table (label left, value right). */
export function SpecValue({ spec, animatedValue }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-gray-200/80 py-2.5">
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-gray-400">
        {spec.label}
      </span>
      <span className="font-mono text-sm font-semibold text-gray-900 tabular-nums whitespace-nowrap">
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
