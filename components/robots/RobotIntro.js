'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { easeOut, seg, usePrefersReducedMotion, useScrollProgress } from './hooks';

export default function RobotIntro({ robot }) {
  const wrapRef = useRef(null);
  const p = useScrollProgress(wrapRef);
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return (
      <section className="bg-white pt-32 pb-16 md:pt-40">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
            Our robots · {robot.tagline}
          </p>
          <h1 className="mt-4 text-5xl sm:text-7xl font-bold text-gray-900 tracking-tight">
            {robot.name}
          </h1>
          <div className="relative mx-auto mt-10 h-[55vh] max-w-3xl">
            <Image
              src={robot.images.hero}
              alt={robot.heroAlt}
              fill
              preload
              sizes="100vw"
              className="object-contain"
            />
          </div>
          <p className="mt-8 text-xl font-semibold text-gray-900">{robot.claim}</p>
        </div>
      </section>
    );
  }

  const titleOut = seg(p, 0, 0.3);
  const settle = easeOut(seg(p, 0, 0.6));
  const claimIn = seg(p, 0.45, 0.65);
  const hintOut = seg(p, 0, 0.1);

  return (
    <section ref={wrapRef} className="relative h-[180vh] md:h-[220vh] bg-white">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden pt-24 md:pt-28 pb-6">

        {/* Headline — scales/fades away as the scroll begins */}
        <div
          className="relative z-10 px-6 text-center will-change-transform"
          style={{
            opacity: 1 - titleOut,
            transform: `translateY(${-28 * titleOut}px) scale(${1 - 0.06 * titleOut})`,
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
            Our robots · {robot.tagline}
          </p>
          <h1 className="mt-3 text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 tracking-tight">
            {robot.name}
          </h1>
        </div>

        {/* Robot — settles from a slight zoom as the headline hands over */}
        <div className="relative flex-1 min-h-0 my-2">
          <div
            className="absolute inset-0 will-change-transform"
            style={{
              transform: `scale(${1 + 0.06 * (1 - settle)}) translateY(${2 * (1 - settle)}%)`,
            }}
          >
            <Image
              src={robot.images.hero}
              alt={robot.heroAlt}
              fill
              preload
              sizes="100vw"
              className="object-contain select-none pointer-events-none"
            />
          </div>
        </div>

        {/* Claim swaps in where the scroll hint started */}
        <div className="relative h-10">
          <p
            className="absolute inset-x-0 text-center text-lg md:text-xl font-semibold text-gray-900"
            style={{ opacity: claimIn, transform: `translateY(${12 * (1 - claimIn)}px)` }}
          >
            {robot.claim}
          </p>
          <div
            className="absolute inset-x-0 flex flex-col items-center gap-1 text-gray-400"
            style={{ opacity: 1 - hintOut }}
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">Scroll</span>
            <svg
              className="h-4 w-4 animate-bounce motion-reduce:animate-none"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
