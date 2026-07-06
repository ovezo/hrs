'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { usePrefersReducedMotion, useScrollProgress } from '../hooks';
import { INDUSTRIES } from './v2Data';

function RailCard({ item }) {
  return (
    <figure className="relative aspect-[16/10] w-[78vw] flex-shrink-0 overflow-hidden rounded-3xl bg-gray-100 ring-1 ring-gray-200 sm:w-[55vw] lg:w-[42vw]">
      {item.video ? (
        <video
          src={item.video}
          poster={item.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="(min-width: 1024px) 42vw, 78vw"
          className="object-cover"
        />
      )}
      <figcaption className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
        <span className="rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-gray-900 ring-1 ring-black/5 backdrop-blur-sm">
          {item.label}
        </span>
        <span className="rounded-full bg-white/75 px-3 py-1 text-[11px] text-gray-600 ring-1 ring-black/5 backdrop-blur-sm">
          {item.caption}
        </span>
      </figcaption>
    </figure>
  );
}

export default function IndustryRail() {
  const wrapRef = useRef(null);
  const trackRef = useRef(null);
  const [shift, setShift] = useState(0);
  const p = useScrollProgress(wrapRef);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return undefined;
    const measure = () => {
      const track = trackRef.current;
      if (track) setShift(Math.max(0, track.scrollWidth - track.parentElement.clientWidth));
    };
    measure();
    window.addEventListener('resize', measure, { passive: true });
    return () => window.removeEventListener('resize', measure);
  }, [reduced]);

  const header = (
    <div className="max-w-[1440px] mx-auto w-full px-6 md:px-16">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-4">
        In the field
      </p>
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
        Where they already work.
      </h2>
      <p className="mt-4 max-w-2xl text-lg text-gray-500 leading-relaxed">
        Scenes from AGIBOT deployments and demonstrations — the tasks HRS trials with UK
        customers today.
      </p>
    </div>
  );

  if (reduced) {
    return (
      <section className="bg-gray-50 py-24 md:py-32">
        {header}
        <div className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 md:px-16">
          {INDUSTRIES.map((item) => (
            <div key={item.label} className="snap-start">
              <RailCard item={item} />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={wrapRef} className="relative h-[280vh] bg-gray-50">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden pt-20 md:pt-24">
        {header}
        <div className="mt-10 pl-6 md:pl-16">
          <div
            ref={trackRef}
            className="flex gap-6 will-change-transform"
            style={{ transform: `translateX(${-p * shift}px)` }}
          >
            {INDUSTRIES.map((item) => (
              <RailCard key={item.label} item={item} />
            ))}
            <div className="w-6 flex-shrink-0 md:w-16" />
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto mt-10 w-full px-6 md:px-16">
          <div className="h-0.5 w-full max-w-sm rounded-full bg-gray-200">
            <div
              className="h-0.5 rounded-full bg-amber-500"
              style={{ width: `${Math.round(p * 100)}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
