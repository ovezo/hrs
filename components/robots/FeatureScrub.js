'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { easeOut, seg, usePrefersReducedMotion, useScrollProgress } from './hooks';

// Each feature owns a slot of the pin timeline: fade/slide in, hold, hand over.
const START = 0.05;
const SLOT = 0.225;

function FeatureCard({ feature }) {
  return (
    <div className="max-w-md">
      <p className="text-xs font-semibold uppercase tracking-widest text-amber-600">
        {feature.eyebrow}
      </p>
      <h3 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
        {feature.title}
      </h3>
      <p className="mt-4 text-base md:text-lg text-gray-500 leading-relaxed">{feature.body}</p>
      <ul className="mt-6 flex flex-wrap gap-2.5">
        {feature.chips.map((chip) => (
          <li
            key={chip}
            className="inline-flex items-center gap-2 rounded-full bg-gray-50 ring-1 ring-gray-200 px-3.5 py-1.5 text-xs font-medium text-gray-700"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
            {chip}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FeatureScrub({ robot, image, imageAlt }) {
  const wrapRef = useRef(null);
  const p = useScrollProgress(wrapRef);
  const reduced = usePrefersReducedMotion();
  const features = robot.features;

  if (reduced) {
    return (
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <h2 className="sr-only">{robot.name} capabilities</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-3/4">
              <Image src={image} alt={imageAlt} fill sizes="(min-width: 1024px) 50vw, 90vw" className="object-contain" />
            </div>
            <div className="flex flex-col gap-12">
              {features.map((feature) => (
                <FeatureCard key={feature.title} feature={feature} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const active = Math.min(features.length - 1, Math.floor(seg(p, START, 0.95) * features.length));

  return (
    <section ref={wrapRef} className="relative h-[280vh] md:h-[350vh] bg-white">
      <div className="sticky top-0 h-screen overflow-hidden pt-20 md:pt-24 pb-4">
        <h2 className="sr-only">{robot.name} capabilities</h2>
        <div className="mx-auto grid h-full max-w-[1440px] grid-rows-[55%_45%] px-6 md:px-16 lg:grid-rows-none lg:grid-cols-[55%_45%]">

          {/* Robot stays pinned with a faint parallax drift */}
          <div className="relative">
            <div
              className="absolute inset-0 will-change-transform"
              style={{ transform: `translateY(${-3 * p}%)` }}
            >
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 90vw"
                className="object-contain select-none pointer-events-none"
              />
            </div>
            <p className="absolute top-0 left-0 text-[10px] font-bold tracking-[0.18em] uppercase text-gray-400">
              {robot.name}
            </p>
          </div>

          {/* Callouts scroll past the pinned robot */}
          <div className="relative">
            {features.map((feature, i) => {
              const s = START + i * SLOT;
              const inP = seg(p, s, s + 0.07);
              const outP = i === features.length - 1 ? 0 : seg(p, s + 0.16, s + SLOT);
              const opacity = Math.min(inP, 1 - outP);
              const y = 36 * (1 - easeOut(inP)) - 28 * easeOut(outP);
              return (
                <div
                  key={feature.title}
                  className="absolute inset-0 flex items-center justify-center lg:justify-start"
                  style={{ opacity, pointerEvents: opacity > 0.5 ? 'auto' : 'none' }}
                >
                  <div className="will-change-transform" style={{ transform: `translateY(${y}px)` }}>
                    <FeatureCard feature={feature} />
                  </div>
                </div>
              );
            })}
            <p className="absolute bottom-2 right-0 hidden lg:block text-sm font-medium text-gray-400 tabular-nums">
              0{active + 1} / 0{features.length}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
