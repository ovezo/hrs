'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { G2_DOSSIER, HERO, X2_DOSSIER } from './v3Data';
import { useCountUp } from './hooksV3';
import { Ticks } from './ui';

function Stat({ stat, active }) {
  const value = useCountUp(stat.value, active, { decimals: stat.decimals ?? 0 });
  return (
    <div className="relative bg-white/80 px-5 py-4 ring-1 ring-gray-200">
      <Ticks />
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400">{stat.label}</p>
      <p className="mt-1 font-mono text-2xl font-bold tabular-nums text-gray-900">
        {value}
        {stat.unit ? <span className="ml-1 text-sm font-medium text-gray-500">{stat.unit}</span> : null}
      </p>
    </div>
  );
}

function RobotWithRuler({ dossier, height, mounted, preload = false }) {
  return (
    <div className="relative" style={{ height, aspectRatio: dossier.imageAspect }}>
      <Image
        src={dossier.image}
        alt={dossier.imageAlt}
        fill
        preload={preload}
        sizes="(min-width: 768px) 30vw, 45vw"
        className="object-contain select-none pointer-events-none"
      />
      {/* Dimension ruler grows up from the baseline */}
      <div
        aria-hidden="true"
        className="absolute -right-4 bottom-0 top-0 hidden origin-bottom border-r border-dashed border-gray-400 transition-transform duration-1000 ease-out sm:block md:-right-7"
        style={{ transform: `scaleY(${mounted ? 1 : 0})` }}
      >
        <span className="absolute -right-1.5 top-0 h-px w-3 bg-gray-400" />
        <span className="absolute -right-1.5 bottom-0 h-px w-3 bg-gray-400" />
      </div>
      <span
        className="absolute -top-6 -right-4 hidden translate-x-1/2 whitespace-nowrap font-mono text-[10px] text-gray-500 transition-opacity duration-500 sm:block md:-right-7"
        style={{ opacity: mounted ? 1 : 0, transitionDelay: '800ms' }}
      >
        {dossier.heightMm} MM
      </span>
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">
        {dossier.name}
      </span>
    </div>
  );
}

export default function V3Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="init"
      className="relative min-h-screen overflow-hidden bg-white pt-28 pb-14 scroll-mt-24 md:pt-32"
    >
      <div className="mx-auto flex min-h-[calc(100vh-11rem)] w-full max-w-[1440px] flex-col px-6 md:px-16">
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-600">
            {HERO.bootline}
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            {HERO.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-500 md:text-xl">{HERO.sub}</p>
        </div>

        <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
          {HERO.stats.map((stat) => (
            <Stat key={stat.label} stat={stat} active={mounted} />
          ))}
        </div>

        {/* True-scale lineup on a shared baseline */}
        <div className="mt-auto flex items-end justify-center gap-12 border-b border-gray-300 pt-14 pb-0 md:gap-24">
          <RobotWithRuler dossier={G2_DOSSIER} height="min(44vh, 460px)" mounted={mounted} preload />
          <RobotWithRuler dossier={X2_DOSSIER} height="min(32vh, 335px)" mounted={mounted} />
        </div>
        <div className="h-10" />
      </div>
    </section>
  );
}
