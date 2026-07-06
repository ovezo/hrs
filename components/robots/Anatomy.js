'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// Image column occupies the middle half of the frame, so a point at x% of the
// image sits at 25 + x/2 % of the frame. Label cards live in the outer quarters.
const frameX = (x) => 25 + x / 2;

export default function Anatomy({ robot }) {
  const frameRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = frameRef.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const points = robot.anatomy;

  return (
    <section className="bg-gray-50 py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">

        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-4">
            Under the shell
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            Anatomy of a working humanoid.
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            Every subsystem on G2 earns its place on a production floor.
          </p>
        </div>

        <div ref={frameRef} className="relative mx-auto max-w-4xl">
          {/* Robot image — centre half of the frame */}
          <div className="relative mx-auto w-full max-w-[50%] aspect-[1197/1600]">
            <Image
              src={robot.images.right}
              alt={`${robot.name} humanoid robot with labelled subsystems`}
              fill
              sizes="(min-width: 896px) 448px, 50vw"
              className="object-contain"
            />
          </div>

          {/* Blueprint lines (desktop) */}
          <svg
            className="absolute inset-0 hidden h-full w-full md:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {points.map((pt, i) => {
              const endX = pt.side === 'left' ? 23 : 77;
              return (
                <polyline
                  key={pt.label}
                  points={`${frameX(pt.x)},${pt.y} ${endX},${pt.y}`}
                  fill="none"
                  stroke="#d97706"
                  strokeWidth="1.5"
                  vectorEffect="non-scaling-stroke"
                  pathLength="1"
                  style={{
                    strokeDasharray: 1,
                    strokeDashoffset: inView ? 0 : 1,
                    transition: 'stroke-dashoffset 700ms ease',
                    transitionDelay: `${200 + i * 150}ms`,
                  }}
                />
              );
            })}
          </svg>

          {/* Anchor dots (desktop) */}
          {points.map((pt, i) => (
            <span
              key={pt.label}
              className="absolute hidden h-3 w-3 -ml-1.5 -mt-1.5 rounded-full bg-amber-500 ring-4 ring-amber-500/20 md:block"
              style={{
                left: `${frameX(pt.x)}%`,
                top: `${pt.y}%`,
                transform: inView ? 'scale(1)' : 'scale(0)',
                transition: 'transform 400ms ease',
                transitionDelay: `${200 + i * 150}ms`,
              }}
            />
          ))}

          {/* Label cards (desktop) — pinned to the line ends */}
          {points.map((pt, i) => (
            <div
              key={pt.label}
              className={`absolute hidden w-[22%] -translate-y-1/2 md:block motion-reduce:transition-none motion-reduce:opacity-100 ${
                pt.side === 'left' ? 'left-0 text-right' : 'right-0'
              }`}
              style={{
                top: `${pt.y}%`,
                opacity: inView ? 1 : 0,
                transform: `translateY(${inView ? '-50%' : 'calc(-50% + 12px)'})`,
                transition: 'opacity 500ms ease, transform 500ms ease',
                transitionDelay: `${350 + i * 150}ms`,
              }}
            >
              <div className="inline-block rounded-xl bg-white ring-1 ring-gray-200 px-4 py-3 text-left">
                <p className="text-sm font-semibold text-gray-900">{pt.label}</p>
                <p className="mt-0.5 text-xs text-gray-500">{pt.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile — label grid below the image instead of lines */}
        <div className="mt-8 grid grid-cols-2 gap-3 md:hidden">
          {points.map((pt, i) => (
            <div
              key={pt.label}
              className="rounded-xl bg-white ring-1 ring-gray-200 px-4 py-3 motion-reduce:transition-none motion-reduce:opacity-100"
              style={{
                opacity: inView ? 1 : 0,
                transform: `translateY(${inView ? 0 : 12}px)`,
                transition: 'opacity 500ms ease, transform 500ms ease',
                transitionDelay: `${i * 120}ms`,
              }}
            >
              <p className="text-sm font-semibold text-gray-900">{pt.label}</p>
              <p className="mt-0.5 text-xs text-gray-500">{pt.detail}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
