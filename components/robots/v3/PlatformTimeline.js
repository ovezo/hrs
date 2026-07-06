'use client';

import { usePrefersReducedMotion } from '../hooks';
import { useInView } from './hooksV3';
import { SectionHeader } from './ui';
import { TIMELINE, TIMELINE_NOTE } from './v3Data';

export default function PlatformTimeline() {
  const [ref, inView] = useInView(0.2);
  const reduced = usePrefersReducedMotion();
  const shown = inView || reduced;

  return (
    <section id="timeline" className="relative bg-white py-24 scroll-mt-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16">
        <SectionHeader
          index="06"
          code="PLATFORM LOG"
          title="Built on a platform that ships."
          sub="From founding to the ten-thousandth robot in three years — the scale behind both units."
        />
        <ol
          ref={ref}
          className="relative mt-12 border-l-2 border-gray-200 lg:grid lg:grid-cols-6 lg:gap-8 lg:border-l-0 lg:border-t-2"
          role="list"
        >
          {TIMELINE.map((entry, i) => (
            <li
              key={entry.when}
              className="relative pb-8 pl-6 last:pb-0 lg:pb-0 lg:pl-0 lg:pt-6"
              style={{
                opacity: shown ? 1 : 0,
                transform: `translateY(${shown ? 0 : 14}px)`,
                transition: reduced ? 'none' : 'opacity 500ms ease, transform 500ms ease',
                transitionDelay: reduced ? '0ms' : `${i * 120}ms`,
              }}
            >
              <span
                aria-hidden="true"
                className="absolute -left-[5px] top-1.5 h-2 w-2 bg-amber-500 lg:-top-[5px] lg:left-0"
              />
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-600">
                {entry.when}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{entry.what}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-2xl font-mono text-[11px] uppercase tracking-[0.15em] text-gray-400">
          {TIMELINE_NOTE}
        </p>
      </div>
    </section>
  );
}
