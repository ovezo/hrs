import BackgroundVideo from '@/components/v2/BackgroundVideo';

/*
  ── VideoSection (v4) ───────────────────────────────────────────────────
  A full-viewport (100dvh) dark, full-bleed video panel — the cinematic
  punctuation that lands every 2–3 sections between the light content blocks.
  Bottom-left content: eyebrow + headline + short copy, with one action.

  Variants:
    hero    → big H1 + Book a Demo + scroll cue
    contact → Book a Demo + Get in touch + slim footer
    default → headline + short copy + an Explore link (if `explore` set)

  Reuses the shared, in-view-only BackgroundVideo so the page's many clips
  never all decode at once. Drop a replacement MP4 at the same path to swap.
  ────────────────────────────────────────────────────────────────────────
*/
export default function VideoSection({
  index,
  id,
  eyebrow,
  title,
  desc,
  src,
  mobileSrc,
  poster,
  mobilePoster,
  variant = 'standard',
  explore,
  contactEmail,
  bookDemoUrl,
  onScrollNext,
  hasNext,
}) {
  const isHero = variant === 'hero';
  const isContact = variant === 'contact';
  const Heading = isHero ? 'h1' : 'h2';

  return (
    <section
      data-index={index}
      id={id}
      aria-label={eyebrow}
      className="relative h-[100dvh] w-full snap-start snap-always overflow-hidden bg-gray-900"
    >
      {/* ── Video ── */}
      <div className="absolute inset-0">
        {mobileSrc ? (
          <>
            <BackgroundVideo
              src={src}
              poster={poster}
              preload={index === 0 ? 'auto' : 'metadata'}
              className="hidden sm:block"
            />
            <BackgroundVideo
              src={mobileSrc}
              poster={mobilePoster || poster}
              preload={index === 0 ? 'auto' : 'metadata'}
              className="sm:hidden"
            />
          </>
        ) : (
          <BackgroundVideo src={src} poster={poster} preload="metadata" />
        )}
      </div>

      {/* ── Scrims ── */}
      <div
        className="absolute inset-x-0 top-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.45), transparent)' }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.25) 42%, transparent 70%)',
        }}
      />

      {/* ── Content (bottom-left) ── */}
      <div className="relative z-10 h-full max-w-[1440px] mx-auto flex items-end">
        <div
          className={`w-full px-6 md:px-16 ${
            isContact ? 'pb-28 md:pb-36' : 'pb-24 md:pb-28'
          }`}
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
            <div className="max-w-2xl">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
                {eyebrow}
              </p>
              <Heading
                className={`mt-4 font-bold tracking-tight text-white ${
                  isHero
                    ? 'text-[40px] leading-[1.05] sm:text-6xl lg:text-[80px] lg:leading-[1.02]'
                    : 'text-4xl sm:text-5xl lg:text-6xl leading-[1.05]'
                }`}
              >
                {title}
              </Heading>
              {desc && (
                <p className="mt-5 max-w-xl text-base sm:text-lg text-white/80 leading-relaxed">
                  {desc}
                </p>
              )}
            </div>

            <div className="flex flex-shrink-0 flex-wrap items-center gap-3 md:gap-4 md:pb-1">
              {(isHero || isContact) && (
                <a
                  href={bookDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors"
                >
                  Book a Demo
                </a>
              )}
              {isContact && (
                <a
                  href={`mailto:${contactEmail}`}
                  className="inline-flex items-center justify-center border border-white/40 text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm"
                >
                  Get in touch
                </a>
              )}
              {explore && !isHero && !isContact && (
                <a
                  href={explore}
                  className="group/btn inline-flex items-center gap-2 justify-center border border-white/40 text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm"
                >
                  Explore
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover/btn:translate-x-1"
                  >
                    →
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Footer (contact panel only) ── */}
      {isContact && (
        <div className="absolute bottom-0 inset-x-0 z-10">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16">
            <div className="border-t border-white/15 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/55">
              <span>© {new Date().getFullYear()} HRS — Humanoid Robot Solutions UK</span>
              <span>The robot and the mind behind it.</span>
            </div>
          </div>
        </div>
      )}

      {/* ── Scroll cue (hero only) ── */}
      {isHero && hasNext && (
        <button
          type="button"
          onClick={onScrollNext}
          aria-label="Scroll to next section"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 text-white/55 hover:text-white/90 transition-colors cursor-pointer"
        >
          <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
          <span className="block w-px h-8 bg-gradient-to-b from-white/60 to-transparent" />
        </button>
      )}
    </section>
  );
}
