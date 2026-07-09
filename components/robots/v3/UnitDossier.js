'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { easeOut, seg, usePrefersReducedMotion, useScrollProgress } from '../hooks';
import { useCountUp } from './hooksV3';
import { SectionHeader, SpecValue, Ticks } from './ui';

// Each subsystem group owns a slot of the pin timeline (in / hold / out).
const START = 0.05;
const SLOT = 0.225;

function SpecRow({ spec, active }) {
  const value = useCountUp(spec.value ?? 0, active && spec.value != null, {
    decimals: spec.decimals ?? 0,
  });
  return <SpecValue spec={spec} animatedValue={value} />;
}

function GroupPanel({ group, active }) {
  return (
    <div>
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-600">
        {group.code} — {group.name}
      </p>
      <p className="mt-3 max-w-lg text-base leading-relaxed text-gray-500 md:text-lg">{group.desc}</p>
      <div className="mt-5 max-w-lg">
        {group.specs.map((spec) => (
          <SpecRow key={spec.label} spec={spec} active={active} />
        ))}
      </div>
    </div>
  );
}

function StaticDossier({ dossier, index, background }) {
  return (
    <section id={dossier.id} className={`relative ${background} py-24 scroll-mt-24 md:py-32`}>
      <div className="mx-auto max-w-[1440px] px-6 md:px-16">
        <SectionHeader index={index} code={`UNIT ${dossier.unit}`} title={dossier.name} sub={dossier.role} />
        <div className="mt-12 grid gap-12 lg:grid-cols-[44%_56%]">
          <div className="relative mx-auto w-full max-w-md" style={{ aspectRatio: dossier.imageAspect }}>
            <Image
              src={dossier.image}
              alt={dossier.imageAlt}
              fill
              sizes="(min-width: 1024px) 44vw, 90vw"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-10">
            {dossier.groups.map((group) => (
              <GroupPanel key={group.code} group={group} active />
            ))}
            {dossier.variant ? (
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-gray-400">
                {dossier.variant}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function UnitDossier({ dossier, index, background = 'bg-white' }) {
  const wrapRef = useRef(null);
  const p = useScrollProgress(wrapRef);
  const reduced = usePrefersReducedMotion();

  if (reduced) return <StaticDossier dossier={dossier} index={index} background={background} />;

  const active = Math.min(
    dossier.groups.length - 1,
    Math.floor(seg(p, START, 0.95) * dossier.groups.length)
  );

  return (
    <section
      id={dossier.id}
      ref={wrapRef}
      className={`relative h-[300vh] md:h-[360vh] ${background}`}
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden pt-20 pb-6 md:pt-24">
        <div className="mx-auto grid h-full w-full max-w-[1440px] grid-rows-[40%_60%] gap-3 px-6 md:px-16 lg:grid-rows-none lg:grid-cols-[42%_58%] lg:gap-12">

          {/* Unit image with ruler and phase-synced detail thumbnail */}
          <div className="relative">
            <p className="absolute left-0 top-0 z-10 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
              Unit {dossier.unit} — {dossier.name}
            </p>
            <div
              className="absolute inset-0 will-change-transform"
              style={{ transform: `translateY(${-2 * p}%)` }}
            >
              <Image
                src={dossier.image}
                alt={dossier.imageAlt}
                fill
                sizes="(min-width: 1024px) 42vw, 90vw"
                className="object-contain select-none pointer-events-none"
              />
            </div>

            <div
              aria-hidden="true"
              className="absolute bottom-2 right-0 top-8 hidden border-r border-dashed border-gray-400 lg:block"
            >
              <span className="absolute -top-5 right-0 translate-x-1/2 whitespace-nowrap font-mono text-[10px] text-gray-500">
                H {dossier.heightMm} MM
              </span>
            </div>

            <div className="absolute bottom-6 left-0 hidden h-48 w-48 bg-white ring-1 ring-gray-200 md:block lg:h-64 lg:w-64">
              <Ticks />
              {dossier.groups.map((group, i) => (
                <Image
                  key={group.code}
                  src={group.detailImg}
                  alt={group.detailAlt}
                  fill
                  sizes="256px"
                  className="object-cover p-1 transition-opacity duration-500"
                  style={{ opacity: active === i ? 1 : 0 }}
                />
              ))}
              <span className="absolute -bottom-5 left-0 font-mono text-[9px] uppercase tracking-[0.18em] text-gray-400">
                Detail // {dossier.groups[active].code}
              </span>
            </div>
          </div>

          {/* Dossier panels scrub past while the unit stays pinned */}
          <div className="relative flex min-h-0 flex-col">
            <SectionHeader index={index} code={`UNIT ${dossier.unit}`} title={dossier.name} sub={dossier.role} />
            <div className="relative mt-2 min-h-0 flex-1">
              {dossier.groups.map((group, i) => {
                const s = START + i * SLOT;
                const inP = seg(p, s, s + 0.07);
                const outP = i === dossier.groups.length - 1 ? 0 : seg(p, s + 0.16, s + SLOT);
                const opacity = Math.min(inP, 1 - outP);
                const y = 30 * (1 - easeOut(inP)) - 24 * easeOut(outP);
                return (
                  <div
                    key={group.code}
                    className="absolute inset-0 flex flex-col justify-center"
                    style={{ opacity, pointerEvents: opacity > 0.5 ? 'auto' : 'none' }}
                  >
                    <div className="will-change-transform" style={{ transform: `translateY(${y}px)` }}>
                      <GroupPanel group={group} active={active === i} />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex items-end justify-between gap-6 pt-2">
              {dossier.variant ? (
                <p className="max-w-md font-mono text-[10px] uppercase tracking-[0.14em] text-gray-400">
                  {dossier.variant}
                </p>
              ) : (
                <span />
              )}
              <p className="whitespace-nowrap font-mono text-sm font-medium tabular-nums text-gray-400">
                SYS 0{active + 1} / 0{dossier.groups.length}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
