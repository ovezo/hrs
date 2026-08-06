import Image from 'next/image';
import { getContactEmail } from '@/lib/config';
import { FlagChip } from '@/components/UnionJack';

/**
 * Homepage hero, two layouts in one section:
 *
 *  lg+   — the clip is inset to the right 80% of the section (20% → 100%)
 *          and the copy sits over it on the left. The band the clip vacates
 *          is where the wash is at its most opaque, so the part of the frame
 *          that would sit under solid white is simply never drawn.
 *  < lg  — nothing overlaps: the copy runs on white, the clip stacks
 *          underneath it and fills what's left of the viewport, with its top
 *          edge fading out so the two don't meet on a hard line.
 */
export default function HeroSection() {
  const contactEmail = getContactEmail();
  return (
    <section
      aria-label="Hero"
      className="relative flex min-h-screen flex-col overflow-hidden bg-white lg:block"
    >

      {/* ── Copy — in flow above the clip below lg, centred over it on lg+ ── */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pt-28 pb-10 md:px-16 lg:flex lg:min-h-screen lg:items-center lg:py-0">
        {/*
          The column has to clear the wash's fall-off, which ends at 62%
          rather than running the full width. "Robot Solutions" is one
          locked line: 76px measures 560px in a 560px column, i.e. exactly
          at the wrap point, so this sits a step below it for slack.
        */}
        {/*
          lg pt/pb are asymmetric on purpose: `items-center` centres the box
          including its padding, so the heavier bottom padding lifts the copy
          above the true centre. Dropping the top padding here shunts it up
          into the navbar.
        */}
        <div className="w-full sm:max-w-130 lg:max-w-140 lg:pt-20 lg:pb-44">
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

      {/*
        ── Background video ────────────────────────────────────────────
        Autoplaying, muted + playsInline so mobile Safari/Chrome allow it
        without a tap.

        Below lg this is a normal block that takes whatever height the copy
        leaves (flex-1, with a floor so it never collapses on a short
        viewport); on lg it lifts out of flow into the right-hand 80%.

        The still underneath is the first frame: it paints before the clip
        has data, and it's what stays on screen under `prefers-reduced-
        motion`, where the video itself is hidden. It's a preloaded
        next/image rather than a CSS background or the video's own `poster`
        attribute — both of those are found late by the preload scanner,
        and this is the hero's LCP candidate. (`preload` is the Next 16
        replacement for the deprecated `priority`.)
        ─────────────────────────────────────────────────────────────────
      */}
      <div
        className="relative min-h-[42vh] w-full flex-1 lg:absolute lg:inset-y-0 lg:left-[20%] lg:w-[80%] lg:min-h-0 lg:flex-none"
        aria-hidden="true"
      >
        <Image
          src="/videos/posters/hero-banner.jpg"
          alt=""
          fill
          sizes="(min-width: 1024px) 80vw, 100vw"
          className="object-cover object-center"
          preload
        />
        <video
          className="absolute inset-0 h-full w-full object-cover object-center motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          tabIndex={-1}
        >
          {/*
            One encode for every viewport. A `media` attribute on a second,
            phone-sized <source> is tempting but unsafe here: the browser
            resolves it once, during resource selection, and if that happens
            before the viewport is known (observed: innerWidth 0) a desktop
            visitor is locked to the 960px file for the life of the page —
            no re-evaluation on resize. A soft hero is worse than the bytes.

            1920×1080 @ 2.6 Mbps, matching the other served clips in
            public/videos, and faststart (moov ahead of mdat) so playback
            starts before the file finishes downloading. Source of truth is
            public/videos/_raw/hrs-banner-raw.mp4.
          */}
          <source src="/videos/hero-banner.mp4" type="video/mp4" />
        </video>
        {/*
          Below lg the clip butts straight up against the white copy area —
          this softens that join so it doesn't read as a seam. Not needed on
          lg, where the wash already handles the transition.
        */}
        <div
          className="absolute inset-x-0 top-0 h-24 lg:hidden"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.75) 28%, rgba(255,255,255,0.30) 62%, rgba(255,255,255,0) 100%)',
          }}
        />
      </div>

      {/*
        ── Overlays (lg+ only) ─────────────────────────────────────────
        Solid white across the empty left band, then a short fall-off over
        the start of the clip so the copy stays readable — clear video from
        ~62% out — plus a short fade under the navbar. Nothing at the
        bottom: the clip cuts straight into the white section below. Below
        lg the copy and the clip don't overlap, so neither is needed.
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
        className="absolute inset-0 z-[1] hidden lg:block pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 9%)',
        }}
      />

    </section>
  );
}
