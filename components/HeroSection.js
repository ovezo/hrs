import { getContactEmail } from '@/lib/config';
import { FlagChip } from '@/components/UnionJack';

export default function HeroSection() {
  const contactEmail = getContactEmail();
  return (
    <section aria-label="Hero" className="relative min-h-screen overflow-hidden bg-gray-200">

      {/*
        ── Background video ────────────────────────────────────────────
        Autoplaying, muted + playsInline so mobile Safari/Chrome allow it
        without a tap. The poster frame paints first (and stays put for
        `prefers-reduced-motion`, where the video itself is hidden).

        sm+ : sized to 118% of the hero and pinned to the RIGHT edge, so the
              frame overhangs to the LEFT — off-screen, under the wash — and
              the right-hand side of the shot, the side left clear, is always
              fully in view instead of being centre-cropped. Anchoring alone
              isn't enough: the clip is 16:9, so on a 16:9 window it wouldn't
              shift at all.
        <sm : plain full-width cover, since there's no side column.
        ─────────────────────────────────────────────────────────────────
      */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 bg-cover bg-right"
          style={{ backgroundImage: "url('/videos/posters/hero-banner.jpg')" }}
        />
        <video
          className="
            absolute inset-0 h-full w-full object-cover object-center
            sm:inset-auto sm:top-0 sm:right-0 sm:left-auto sm:h-full
            sm:w-[118%] sm:max-w-none
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
        A light wash (not a dark scrim) so the hero still reads as part of
        the white site chrome and the navbar's dark links stay legible.
          · sm+   → horizontal: solid-ish white behind the copy on the
                    left, clearing to full video on the right.
          · <sm   → vertical: the copy sits over the whole frame, so the
                    wash has to cover the whole frame.
          · both  → soft fade under the navbar and into the white section
                    that follows.
        ─────────────────────────────────────────────────────────────────
      */}
      <div
        className="absolute inset-0 z-[1] hidden sm:block pointer-events-none"
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
            'linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 18%), linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 20%)',
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 min-h-screen max-w-[1440px] mx-auto">
        <div className="flex items-center min-h-screen px-6 md:px-16">
          <div className="w-full sm:max-w-130 lg:max-w-180 pt-24 sm:pt-20 pb-16 sm:pb-30 md:pb-36 lg:pb-44">
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
