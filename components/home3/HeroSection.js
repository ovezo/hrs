import { getContactEmail } from '@/lib/config';
import { FlagChip } from '@/components/UnionJack';

/**
 * Alternative hero for /home-3 — same background video as `/`, but on lg+
 * the clip is inset to the right 80% of the hero (20% → 100%) rather than
 * running full-bleed. The band it vacates is where the wash is at its most
 * opaque, so the part of the frame that used to sit under solid white is
 * simply never drawn there — nothing of the clip is lost off the left.
 * Below lg it falls back to the full-bleed treatment used on `/`.
 */
export default function HeroSectionHome3() {
  const contactEmail = getContactEmail();
  return (
    <section aria-label="Hero" className="relative min-h-screen overflow-hidden bg-white">

      {/*
        ── Background video ────────────────────────────────────────────
        Autoplaying, muted + playsInline so mobile Safari/Chrome allow it
        without a tap. The poster frame paints first (and stays put for
        `prefers-reduced-motion`, where the video itself is hidden).
        ─────────────────────────────────────────────────────────────────
      */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-y-0 left-0 w-full bg-cover bg-center lg:left-[20%] lg:w-[80%]"
          style={{ backgroundImage: "url('/videos/posters/hero-banner.jpg')" }}
        />
        <video
          className="
            absolute inset-y-0 left-0 h-full w-full object-cover object-center
            lg:left-[20%] lg:w-[80%]
            motion-reduce:hidden
          "
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

      {/*
        ── Overlays ────────────────────────────────────────────────────
          · lg+   → solid white across the empty left band, then a short
                    fall-off over the start of the clip so the copy stays
                    readable. Clear video from ~62% out.
          · sm–md → the full-bleed wash from `/`, since the clip still
                    runs edge to edge at those widths.
          · <sm   → vertical: the copy sits over the whole frame.
          · all   → a short fade under the navbar. Nothing at the bottom:
                    the clip cuts straight into the white section below.
        ─────────────────────────────────────────────────────────────────
      */}
      <div
        className="absolute inset-0 z-[1] hidden lg:block pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,0.93) 28%, rgba(255,255,255,0.70) 40%, rgba(255,255,255,0.34) 51%, rgba(255,255,255,0.08) 58%, rgba(255,255,255,0) 62%)',
        }}
      />
      <div
        className="absolute inset-0 z-[1] hidden sm:block lg:hidden pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(90deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.94) 28%, rgba(255,255,255,0.80) 44%, rgba(255,255,255,0.42) 62%, rgba(255,255,255,0.10) 82%, rgba(255,255,255,0) 100%)',
        }}
      />
      <div
        className="absolute inset-0 z-[1] sm:hidden pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.78) 40%, rgba(255,255,255,0.86) 100%)',
        }}
      />
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 9%)',
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 min-h-screen max-w-[1440px] mx-auto">
        <div className="flex items-center min-h-screen px-6 md:px-16">
          {/*
            Narrower column and a smaller headline than `/` — the copy has
            to clear the wash's fall-off, which now ends at 62% instead of
            running the full width. "Robot Solutions" is one locked line:
            76px measures 560px in a 560px column, i.e. exactly at the wrap
            point, so this sits a step below it for slack.
          */}
          <div className="w-full sm:max-w-130 lg:max-w-140 pt-24 sm:pt-20 pb-16 sm:pb-30 md:pb-36 lg:pb-44">
            {/* Eyebrow: restrained "British" signal — a small Union Jack chip + label. */}
            <div className="mb-4 inline-flex items-center gap-2.5">
              <FlagChip />
              <span className="text-xs sm:text-base font-semibold uppercase tracking-[0.18em] text-gray-600">
                British Robotics Company
              </span>
            </div>
            <h1 className="text-[44px] leading-[1.1] sm:text-[56px] lg:text-[72px] lg:leading-[1.05] font-bold tracking-tight text-gray-900">
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
