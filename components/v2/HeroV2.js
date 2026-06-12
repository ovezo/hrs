import BackgroundVideo from './BackgroundVideo';
import { getContactEmail } from '@/lib/config';

/*
  ── HeroV2 ─────────────────────────────────────────────────────────────
  Full-bleed cinematic video hero (figure.ai / thehumanoid.ai style) but
  kept LIGHT: the footage is a robot walking through a bright interior, so
  only soft scrims are used for legibility — no heavy black wash.

  Placeholder footage (replace before publishing):
    desktop → /videos/hero.mp4         (robot walking / handoff, 16:9)
    mobile  → /videos/hero-mobile.mp4  (torso close-up, ~square crop)
  ────────────────────────────────────────────────────────────────────────
*/
export default function HeroV2() {
  const contactEmail = getContactEmail();

  return (
    <section
      aria-label="Hero"
      className="relative min-h-screen overflow-hidden bg-gray-900"
    >
      {/* ── Video layer ── */}
      <div className="absolute inset-0">
        {/* Desktop / tablet */}
        <BackgroundVideo
          src="/videos/hero.mp4"
          poster="/videos/posters/hero.jpg"
          objectPosition="center"
          preload="auto"
          className="hidden sm:block"
        />
        {/* Mobile — tighter crop reads better on a tall screen */}
        <BackgroundVideo
          src="/videos/hero-mobile.mp4"
          poster="/videos/posters/hero-mobile.jpg"
          objectPosition="center"
          preload="auto"
          className="sm:hidden"
        />
      </div>

      {/* ── Scrims ── soft, just enough for nav + text legibility ── */}
      <div
        className="absolute inset-x-0 top-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.35), transparent)' }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-2/3 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 35%, transparent 70%)',
        }}
      />

      {/* ── Content ── bottom-left editorial block ── */}
      <div className="relative z-10 min-h-screen max-w-[1440px] mx-auto flex items-end">
        <div className="w-full px-6 md:px-16 pb-20 sm:pb-24 md:pb-28">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
            Physical robots · Real intelligence
          </p>
          <h1 className="mt-5 max-w-4xl text-[44px] leading-[1.05] sm:text-6xl lg:text-[88px] lg:leading-[1.02] font-bold tracking-tight text-white">
            Humanoid Robot Solutions
          </h1>
          <p className="mt-5 max-w-xl text-lg md:text-2xl text-white/85 leading-relaxed">
            We build humanoid robots that do real work — and the AI that makes
            them dependable. Proven on your line before you commit.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3 md:gap-4">
            <a
              href="https://calendar.app.google/VHugirFzZa4sGwxi7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              Book a Demo
            </a>
            <a
              href="#robot"
              className="inline-flex items-center gap-2 justify-center border border-white/40 text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              Explore the robot
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Scroll cue ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/50">Scroll</span>
        <span className="block w-px h-8 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}
