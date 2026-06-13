import BackgroundVideo from '@/components/v2/BackgroundVideo';

/*
  ── MediaGridSection (v4) ───────────────────────────────────────────────
  A full-screen (100dvh) video MOSAIC — the "many clips on one screen"
  pattern from thehumanoid.ai / figure.ai. The 5 clips fill the whole panel
  edge to edge with NO gaps (2 tiles on top, 3 on the bottom). Each tile
  loops its own clip (plays only in view) and carries its own label + sub at
  the bottom-left. The section header (eyebrow + title + description) sits
  top-left over a soft top gradient, clear of the tile labels.
  ────────────────────────────────────────────────────────────────────────
*/
function Tile({ t }) {
  return (
    <div
      className="group relative flex-1 min-w-0 overflow-hidden bg-gray-900"
      aria-label={t.label}
    >
      <BackgroundVideo src={t.src} poster={t.poster} />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.74) 0%, rgba(0,0,0,0.06) 46%, transparent 100%)',
        }}
      />
      <div className="absolute left-0 bottom-0 p-4 md:p-6">
        <h3 className="text-sm md:text-lg font-semibold text-white leading-snug">{t.label}</h3>
        {t.sub && (
          <p className="mt-0.5 text-xs md:text-sm text-white/70 leading-snug">{t.sub}</p>
        )}
      </div>
    </div>
  );
}

export default function MediaGridSection({ index, id, eyebrow, title, intro, tiles }) {
  const top = tiles.slice(0, 2);
  const bottom = tiles.slice(2);

  return (
    <section
      data-index={index}
      id={id}
      aria-label={eyebrow}
      className="relative flex h-[100dvh] w-full flex-col overflow-hidden bg-black snap-start snap-always"
    >
      {/* ── Top row: 2 video tiles ── */}
      <div className="flex flex-1 min-h-0">
        {top.map((t) => (
          <Tile key={t.label} t={t} />
        ))}
      </div>

      {/* ── Bottom row: 3 video tiles ── */}
      <div className="flex flex-1 min-h-0">
        {bottom.map((t) => (
          <Tile key={t.label} t={t} />
        ))}
      </div>

      {/* ── Top scrim so the section header stays legible ── */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-2/5"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 42%, transparent 100%)',
        }}
      />

      {/* ── Section header, top-left (compact so it never meets the tile labels) ── */}
      <div className="absolute inset-x-0 top-0 z-10 px-6 md:px-16 pt-[68px] md:pt-24">
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.05]">
            {title}
          </h2>
          {intro && (
            <p className="mt-2.5 max-w-xl text-sm sm:text-base text-white/80 leading-relaxed">
              {intro}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
