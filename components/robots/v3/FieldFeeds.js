'use client';

import Image from 'next/image';
import { usePrefersReducedMotion } from '../hooks';
import { SectionHeader, Ticks } from './ui';
import { FEEDS } from './v3Data';

export default function FieldFeeds() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="feeds" className="relative bg-gray-50 py-24 scroll-mt-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16">
        <SectionHeader
          index="01"
          code="FIELD FEEDS"
          title="On station."
          sub="The fleet at work — task loops from AGIBOT deployments, plus our own X2 field trials, framed the way an operator sees them."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {FEEDS.map((feed, i) => (
            <figure key={i} className="relative overflow-hidden bg-gray-900 ring-1 ring-gray-200">
              <div className="relative z-10">
                <Ticks />
              </div>
              <div className="relative aspect-video">
                {feed.videos ? (
                  /* Two portrait clips share one monitor cell */
                  <div className="grid h-full grid-cols-2">
                    {feed.videos.map((clip) =>
                      reduced ? (
                        <div key={clip.src} className="relative overflow-hidden">
                          <Image src={clip.poster} alt={feed.label} fill sizes="25vw" className="object-cover object-[50%_60%]" />
                        </div>
                      ) : (
                        <video
                          key={clip.src}
                          src={clip.src}
                          poster={clip.poster}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="h-full w-full object-cover object-[50%_60%]"
                        />
                      )
                    )}
                  </div>
                ) : reduced ? (
                  <Image src={feed.poster} alt={feed.label} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
                ) : (
                  <video
                    src={feed.video}
                    poster={feed.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
              <figcaption className="absolute inset-x-0 top-0 z-10 flex items-center justify-between bg-black/35 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white">
                <span>
                  {feed.label}
                </span>
                <span className="flex items-center gap-1.5">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse motion-reduce:animate-none" />
                  REC
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
