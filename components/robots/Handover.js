'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { easeOut, seg, usePrefersReducedMotion, useScrollProgress } from './hooks';

export default function Handover({ from, to }) {
  const wrapRef = useRef(null);
  const p = useScrollProgress(wrapRef);
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return (
      <section className="bg-white pt-24 pb-16 md:pt-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
            {to.tagline}
          </p>
          <h2 className="mt-4 text-5xl sm:text-6xl font-bold text-gray-900 tracking-tight">
            {to.name}
          </h2>
          <div className="relative mx-auto mt-10 h-[55vh] max-w-3xl">
            <Image
              src={to.images.hero}
              alt={to.heroAlt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
          <p className="mt-8 text-xl font-semibold text-gray-900">{to.claim}</p>
        </div>
      </section>
    );
  }

  const gOut = easeOut(seg(p, 0, 0.35));
  const gFade = seg(p, 0.1, 0.32);
  const xIn = easeOut(seg(p, 0.25, 0.6));
  const xFade = seg(p, 0.25, 0.45);
  const hIn = seg(p, 0.55, 0.8);
  const claimIn = seg(p, 0.8, 0.95);

  return (
    <section ref={wrapRef} className="relative h-[220vh] md:h-[250vh] bg-white">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden pt-24 md:pt-28 pb-6">

        {/* X2 headline settles in once the handover completes */}
        <div
          className="relative z-10 px-6 text-center will-change-transform"
          style={{ opacity: hIn, transform: `scale(${1.12 - 0.12 * hIn})` }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
            {to.tagline}
          </p>
          <h2 className="mt-3 text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight">
            {to.name}
          </h2>
        </div>

        <div className="relative flex-1 min-h-0 my-2">
          {/* G2 exits stage left */}
          <div
            className="absolute inset-0 will-change-transform"
            style={{
              opacity: 1 - gFade,
              transform: `translateX(${-55 * gOut}%) rotate(${-5 * gOut}deg) scale(${1 - 0.08 * gOut})`,
            }}
          >
            <Image
              src={from.images.right}
              alt={from.heroAlt}
              fill
              sizes="100vw"
              className="object-contain select-none pointer-events-none"
            />
          </div>

          {/* X2 walks in from the right */}
          <div
            className="absolute inset-0 will-change-transform"
            style={{
              opacity: xFade,
              transform: `translateX(${60 * (1 - xIn)}%) rotate(${4 * (1 - xIn)}deg) scale(${0.94 + 0.06 * xIn})`,
            }}
          >
            <Image
              src={to.images.hero}
              alt={to.heroAlt}
              fill
              sizes="100vw"
              className="object-contain select-none pointer-events-none"
            />
          </div>
        </div>

        <div className="relative h-10">
          <p
            className="absolute inset-x-0 text-center text-lg md:text-xl font-semibold text-gray-900"
            style={{ opacity: claimIn, transform: `translateY(${12 * (1 - claimIn)}px)` }}
          >
            {to.claim}
          </p>
        </div>

      </div>
    </section>
  );
}
