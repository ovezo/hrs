'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { seg, usePrefersReducedMotion, useScrollProgress } from './hooks';

export default function RotationShift({ robot }) {
  const wrapRef = useRef(null);
  const p = useScrollProgress(wrapRef);
  const reduced = usePrefersReducedMotion();

  const heading = (
    <div className="relative z-10 px-6 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
        360° perception
      </p>
      <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
        Every angle considered.
      </h2>
      <p className="mt-4 mx-auto max-w-2xl text-lg text-gray-500 leading-relaxed">
        Dual LiDAR and full-body sensing keep G2 aware of the floor all the way around it.
      </p>
    </div>
  );

  if (reduced) {
    return (
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          {heading}
          <div className="relative mx-auto mt-12 h-[55vh] max-w-2xl">
            <Image
              src={robot.images.right}
              alt={`${robot.name} humanoid robot seen from its right side`}
              fill
              sizes="(min-width: 768px) 672px, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </section>
    );
  }

  // Crossfade with a nudge in facing direction reads as the robot turning.
  const r = seg(p, 0.35, 0.65);

  return (
    <section ref={wrapRef} className="relative h-[200vh] md:h-[220vh] bg-white">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden pt-20 md:pt-24 pb-6">
        {heading}
        <div className="relative flex-1 min-h-0 mt-4">
          <div
            className="absolute inset-0 will-change-transform"
            style={{
              opacity: 1 - r,
              transform: `translateX(${-2 * r}%) scale(${1 - 0.03 * r})`,
            }}
          >
            <Image
              src={robot.images.left}
              alt={`${robot.name} humanoid robot seen from its left side`}
              fill
              sizes="100vw"
              className="object-contain select-none pointer-events-none"
            />
          </div>
          <div
            className="absolute inset-0 will-change-transform"
            style={{
              opacity: r,
              transform: `translateX(${2 * (1 - r)}%) scale(${0.97 + 0.03 * r})`,
            }}
          >
            <Image
              src={robot.images.right}
              alt={`${robot.name} humanoid robot seen from its right side`}
              fill
              sizes="100vw"
              className="object-contain select-none pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
