import Image from 'next/image';
import { getContactEmail } from '@/lib/config';
import { FlagChip } from '@/components/UnionJack';

export default function HeroSection() {
  const contactEmail = getContactEmail();
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
          Positioned bottom-right on sm+; top-aligned and centred-ish
          on mobile. Heights tuned so the robot reads ~74% of the hero.
          ─────────────────────────────────────────────────────────────
        */}
        <div
          className="
            absolute pointer-events-none select-none
            top-[65%] right-0 left-0 -bottom-30
            sm:top-[10%] sm:left-[40%] sm:right-0 sm:bottom-0
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

        {/* ── Hero text ── */}
        <div className="relative z-10 flex sm:items-center min-h-screen px-6 md:px-16">
          <div className="w-full sm:max-w-[480px] lg:max-w-[720px] pt-[30%] sm:pt-20 sm:pb-30 md:pb-36 lg:pb-44">
            {/* Eyebrow: restrained "British" signal — a small Union Jack chip + label. */}
            <div className="mb-4 inline-flex items-center gap-2.5">
              <FlagChip />
              <span className="text-xs sm:text-base font-semibold uppercase tracking-[0.18em] text-gray-600">
                British Robotics Company
              </span>
            </div>
            <h1 className="text-[44px] leading-[1.1] sm:text-[56px] lg:text-[90px] lg:leading-[1.05] font-bold tracking-tight text-gray-900">
              Humanoid<br />Robot Solutions
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-500 leading-relaxed">
              HRS (Humanoid Robot Solutions) is a UK humanoid robot integrator. We take
              humanoid robots from demonstration to deployment across manufacturing,
              warehousing and logistics — proven on your floor before you commit, then
              integrated and trained to work safely alongside your team.
            </p>
            <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-3 md:gap-4">
              <a
                href={`/contact`}
                className="inline-flex items-center justify-center bg-black text-white px-7 md:px-8 py-3.5 md:py-4 rounded-full text-sm font-semibold hover:bg-gray-900 transition-colors"
              >
                Book a Demo
              </a>
              <a
                href={`/contact`}
                className="inline-flex items-center justify-center bg-white text-gray-900 border border-gray-300 px-7 md:px-8 py-3.5 md:py-4 rounded-full text-sm font-semibold hover:bg-gray-50 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
