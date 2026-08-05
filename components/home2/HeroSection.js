import { getContactEmail } from '@/lib/config';
import { FlagChip } from '@/components/UnionJack';

/**
 * Alternative hero for /home-2 — same background video as the live hero on
 * `/`, but the overlay is a translucent card sized to the copy instead of a
 * full-height wash down the left, so the frame stays visible edge to edge.
 * Kept side by side with components/HeroSection.js for comparison.
 */
export default function HeroSectionHome2() {
  const contactEmail = getContactEmail();
  return (
    <section aria-label="Hero" className="relative min-h-screen overflow-hidden bg-gray-200">

      {/*
        ── Background video ────────────────────────────────────────────
        Autoplaying, muted + playsInline so mobile Safari/Chrome allow it
        without a tap. The poster frame paints first (and stays put for
        `prefers-reduced-motion`, where the video itself is hidden).

        Full-bleed and uncropped — with no wash to hide part of the frame
        under, the clip doesn't need shifting off to one side.
        ─────────────────────────────────────────────────────────────────
      */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/videos/posters/hero-banner.jpg')" }}
        />
        <video
          className="absolute inset-0 h-full w-full object-cover object-center motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/videos/posters/hero-banner.jpg"
          tabIndex={-1}
        >
          <source src="/videos/hrs_banner_video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 min-h-screen max-w-[1440px] mx-auto">
        <div className="flex items-center min-h-screen px-6 md:px-16">
          {/*
            ── Copy panel ────────────────────────────────────────────
            The overlay is now just this: a translucent card sized to the
            copy plus its own padding, so the video stays visible across
            the whole frame instead of under a full-height wash. The blur
            is what keeps dark text legible over moving footage — without
            it the card needs to be far more opaque.
            ───────────────────────────────────────────────────────────
          */}
          <div
            className="
              w-full sm:max-w-130 lg:max-w-185
              rounded-3xl bg-white/45 backdrop-blur-xs
              px-5 py-7 sm:px-8 sm:py-10 lg:px-12 lg:py-14
            "
          >
            {/* Eyebrow: restrained "British" signal — a small Union Jack chip + label. */}
            <div className="mb-4 inline-flex items-center gap-2.5">
              <FlagChip />
              <span className="text-xs sm:text-base font-semibold uppercase tracking-[0.18em] text-gray-600">
                British Robotics Company
              </span>
            </div>
            {/*
              Sizes are set against the panel's inner width, not the
              viewport — "Robot Solutions" is one locked line, so it has to
              fit inside the padding at every breakpoint.
            */}
            <h1 className="text-[clamp(30px,9vw,40px)] leading-[1.1] sm:text-[56px] lg:text-[76px] lg:leading-[1.05] font-bold tracking-tight text-gray-900">
              Humanoid<br />Robot Solutions
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 leading-relaxed">
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
