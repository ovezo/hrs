'use client';

import { usePrefersReducedMotion } from '../hooks';
import { useCountUp, useInView } from './hooksV3';
import { SectionHeader } from './ui';
import { COMPARE } from './v3Data';

function Bar({ tag, value, target, max, color, shown, reduced, unit }) {
  const width = `${Math.round((target / max) * 100)}%`;
  return (
    <div className="mt-2 flex items-center gap-3">
      <span className="w-7 flex-shrink-0 font-mono text-[10px] font-semibold text-gray-500">{tag}</span>
      <div className="h-2 flex-1 overflow-hidden bg-gray-200/70">
        <div
          className={`h-full ${color}`}
          style={{
            width: shown ? width : '0%',
            transition: reduced ? 'none' : 'width 900ms cubic-bezier(0.2, 0.7, 0.3, 1)',
            transitionDelay: reduced ? '0ms' : '150ms',
          }}
        />
      </div>
      <span className="w-16 flex-shrink-0 text-right font-mono text-xs font-semibold tabular-nums text-gray-900">
        {value}
        <span className="ml-0.5 font-medium text-gray-400">{unit}</span>
      </span>
    </div>
  );
}

function CompareRow({ row, shown, reduced }) {
  const g2Value = useCountUp(row.g2, shown, { decimals: row.decimals ?? 0 });
  const x2Value = useCountUp(row.x2, shown, { decimals: row.decimals ?? 0 });
  return (
    <div className="border-b border-gray-200/80 py-4">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gray-400">{row.label}</p>
      <Bar tag="G2" value={g2Value} target={row.g2} max={row.max} color="bg-amber-500" shown={shown} reduced={reduced} unit={row.unit} />
      <Bar tag="X2" value={x2Value} target={row.x2} max={row.max} color="bg-gray-900" shown={shown} reduced={reduced} unit={row.unit} />
    </div>
  );
}

export default function TelemetryCompare() {
  const [ref, inView] = useInView(0.25);
  const reduced = usePrefersReducedMotion();
  const shown = inView || reduced;

  return (
    <section id="versus" className="relative bg-gray-50 py-24 scroll-mt-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16">
        <SectionHeader
          index="05"
          code="TELEMETRY"
          title="Head to head."
          sub={COMPARE.note}
        />
        <div ref={ref} className="mt-10 max-w-3xl">
          {COMPARE.rows.map((row) => (
            <CompareRow key={row.label} row={row} shown={shown} reduced={reduced} />
          ))}
          <div className="mt-5 flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400">
            <span className="flex items-center gap-2">
              <span aria-hidden="true" className="h-2 w-2 bg-amber-500" /> AGIBOT G2
            </span>
            <span className="flex items-center gap-2">
              <span aria-hidden="true" className="h-2 w-2 bg-gray-900" /> AGIBOT X2
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
