'use client';

import { usePrefersReducedMotion } from '../hooks';
import { useInView } from './hooksV3';
import { SectionHeader, Ticks } from './ui';
import { MATRIX } from './v3Data';

export default function SystemsMatrix() {
  const [ref, inView] = useInView(0.15);
  const reduced = usePrefersReducedMotion();
  const shown = inView || reduced;

  return (
    <section id="stack" className="relative bg-gray-50 py-24 scroll-mt-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16">
        <SectionHeader
          index="03"
          code="SHARED STACK"
          title="One stack. Two bodies."
          sub="Both platforms run the same AGIBOT software stack — what one unit learns, the fleet inherits."
        />
        <div ref={ref} className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {MATRIX.map((mod, i) => (
            <div
              key={mod.code}
              className="relative bg-white p-6 ring-1 ring-gray-200"
              style={{
                opacity: shown ? 1 : 0,
                transform: `translateY(${shown ? 0 : 16}px)`,
                transition: reduced ? 'none' : 'opacity 500ms ease, transform 500ms ease',
                transitionDelay: reduced ? '0ms' : `${i * 90}ms`,
              }}
            >
              <Ticks />
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-600">
                {mod.code}
              </p>
              <h3 className="mt-2 text-xl font-bold text-gray-900">{mod.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{mod.body}</p>
              <ul className="mt-4 space-y-1.5" role="list">
                {mod.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-gray-600"
                  >
                    <span aria-hidden="true" className="h-1 w-1 flex-shrink-0 bg-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
