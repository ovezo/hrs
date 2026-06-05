import Image from 'next/image';
import ShieldIcon from '@/icons/ShieldIcon';
import NetworkIcon from '@/icons/NetworkIcon';
import RocketIcon from '@/icons/RocketIcon';

const features = [
  {
    Icon: ShieldIcon,
    title: 'Reliable',
    description: 'Built for consistent performance in demanding environments.',
  },
  {
    Icon: NetworkIcon,
    title: 'Adaptive',
    description: 'Learns, adjusts, and improves in real time.',
  },
  {
    Icon: RocketIcon,
    title: 'Ready to Deploy',
    description: 'Pre-integrated solutions that get you up and running fast.',
  },
];

export default function HeroSection() {
  return (
    <section aria-label="Hero" className="relative min-h-screen overflow-hidden">

      {/* Background */}
      <Image
        src="/images/hero-background.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
        aria-hidden="true"
      />

      {/*
        ── Content wrapper ──────────────────────────────────────────
        Robot is positioned INSIDE this wrapper so `right-0` equals
        the content container's right edge (max-w-[1440px]), not the
        raw viewport. This satisfies "should not pass the hero-text
        container's right side."
        ─────────────────────────────────────────────────────────────
      */}
      <div className="relative min-h-screen max-w-[1440px] mx-auto">

        {/*
          ── Robot ───────────────────────────────────────────────────
          Mobile  (< 640 px):
            • Hero text is top-aligned; text ends ≈ 300–320 px from top
            • Robot starts just below that: top-[38%] ≈ 320 px (on 844 px)
            • Stretches to bottom-0 → feet go behind the cards panel
            • left-[15%] keeps a left breathing margin

          sm  (640–767 px):
            • Cards switch to a 3-col row → panel ≈ 115 px tall
            • Robot right side, constrained to content container right edge
            • top-[10%] → bottom-[7.5rem]: height ≈ 82.5 % – 10 % ≈ 72 %  ✓

          md  (768–1023 px):
            • Same 3-col row, slightly taller panel (descriptions visible)
            • bottom-36 (144 px): robot ≈ 74 %  ✓

          lg+ (≥ 1024 px):
            • Full design: larger type, more padding
            • top-[8%] → bottom-44 (176 px): robot ≈ 74 %  ✓
          ─────────────────────────────────────────────────────────────
        */}
        <div
          className="
            absolute pointer-events-none select-none
            top-[38%] right-0 left-0 bottom-30
            sm:top-[10%] sm:left-[40%] sm:right-0 sm:-bottom-10
            lg:top-[8%] lg:left-[42%]
          "
        >
          <Image
            src="/images/hero-robot.png"
            alt="HRS humanoid robot standing in position, branded with HRS logo on chest"
            fill
            sizes="(min-width: 640px) 60vw, 85vw"
            className="object-contain object-bottom-right"
            priority
          />
        </div>

        {/*
          ── Hero text ───────────────────────────────────────────────
          Mobile: NOT vertically centred (no items-center) — text sits
          at the top (pt-24 clears the fixed navbar).  No bottom padding
          needed: text ends ≈ 310 px, cards start ≈ 730 px → no overlap.

          sm+: vertically centred (sm:items-center).  pb offsets the
          centre point upward so the text clears the cards row.
          ─────────────────────────────────────────────────────────────
        */}
        <div className="relative z-10 flex sm:items-center min-h-screen px-6 md:px-16">
          <div className="w-full sm:max-w-[480px] lg:max-w-[720px] pt-[30%] sm:pt-20 sm:pb-30 md:pb-36 lg:pb-44">
            <h1 className="text-[44px] leading-[1.1] sm:text-[56px] lg:text-[80px] lg:leading-[1.05] font-bold tracking-tight text-gray-900">
              Humanoid<br />Robot Solutions
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-500 leading-relaxed">
              Intelligent robots for real-world work.
            </p>
            <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-3 md:gap-4">
              <a
                href="https://calendar.app.google/VHugirFzZa4sGwxi7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-black text-white px-7 md:px-8 py-3.5 md:py-4 rounded-full text-sm font-semibold hover:bg-gray-900 transition-colors"
              >
                Book Demo
              </a>
              <a
                href="mailto:lel@hrs.ai"
                className="inline-flex items-center justify-center bg-white text-gray-900 border border-gray-300 px-7 md:px-8 py-3.5 md:py-4 rounded-full text-sm font-semibold hover:bg-gray-50 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* ── Feature cards panel ────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="bg-white/92 backdrop-blur-sm rounded-t-2xl shadow-[0_-4px_40px_rgba(0,0,0,0.07)]">
            <div className="px-6 md:px-16 py-5 md:py-6">

              {/*
                Cards layout:
                  < sm (< 640 px) : stacked column  — description shown (full card width)
                  sm – md         : 3-col row        — description hidden (cards too narrow)
                  md+             : 3-col row        — description shown again
              */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-3 md:gap-4">
                {features.map(({ Icon, title, description }) => (
                  <div
                    key={title}
                    className="flex-1 bg-white rounded-xl md:rounded-2xl shadow-[0_2px_16px_rgba(0,0,0,0.06)] flex items-center gap-3 md:gap-4 lg:gap-5 px-4 lg:px-6 py-4 lg:py-5"
                  >
                    {/* Icon circle */}
                    <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 lg:w-6 lg:h-6 text-gray-700" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-gray-900 leading-snug">{title}</h3>
                      {/* Visible on mobile (stacked) and md+ (row has room). Hidden at sm (3-col, cramped). */}
                      <p className="mt-0.5 text-xs text-gray-500 leading-relaxed">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
