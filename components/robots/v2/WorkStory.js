'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { usePrefersReducedMotion } from '../hooks';
import { WORK_STEPS } from './v2Data';

function StepText({ step, index }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-amber-600">
        <span className="mr-3 text-gray-300">0{index + 1}</span>
        {step.eyebrow}
      </p>
      <h3 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
        {step.title}
      </h3>
      <p className="mt-4 text-base md:text-lg text-gray-500 leading-relaxed">{step.body}</p>
      <ul className="mt-6 flex flex-wrap gap-2.5">
        {step.chips.map((chip) => (
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

export default function WorkStory() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef([]);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    // Whichever step crosses the vertical middle of the viewport wins.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number(entry.target.dataset.idx));
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">

        <div className="max-w-3xl mb-8 lg:mb-0">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-4">
            Built for real work
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            Look closer.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Steps scroll naturally… */}
          <div>
            {WORK_STEPS.map((step, i) => (
              <div
                key={step.title}
                data-idx={i}
                ref={(el) => { stepRefs.current[i] = el; }}
                className="flex flex-col justify-center py-14 lg:min-h-[78vh] lg:py-0"
              >
                {/* On small screens the image travels with its step */}
                <div className="relative mb-7 aspect-video overflow-hidden rounded-3xl bg-gray-50 ring-1 ring-gray-100 lg:hidden">
                  <Image src={step.image} alt={step.alt} fill sizes="90vw" className="object-cover" />
                </div>
                <StepText step={step} index={i} />
              </div>
            ))}
          </div>

          {/* …while the media stays pinned and crossfades */}
          <div className="hidden lg:block">
            <div className="sticky top-24 h-[calc(100vh-8rem)]">
              <div className="relative h-full overflow-hidden rounded-3xl bg-gray-50 ring-1 ring-gray-100">
                {WORK_STEPS.map((step, i) => (
                  <div
                    key={step.title}
                    className="absolute inset-0"
                    style={{
                      opacity: active === i ? 1 : 0,
                      transform: `scale(${active === i ? 1 : 1.04})`,
                      transition: reduced ? 'none' : 'opacity 600ms ease, transform 900ms ease',
                    }}
                  >
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      sizes="(min-width: 1024px) 45vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                ))}
                <p className="absolute bottom-5 right-6 text-sm font-medium text-gray-400 tabular-nums">
                  0{active + 1} / 0{WORK_STEPS.length}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
