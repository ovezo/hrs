import BackgroundVideo from './BackgroundVideo';

/*
  ── TwoPillars ─────────────────────────────────────────────────────────
  The company in one glance: two media tiles — the physical robot ("Body")
  and the AI software ("Mind"). Each tile is a link down to its full
  section (#robot / #intelligence). Section chrome stays light; the motion
  lives inside the rounded tiles.
  ────────────────────────────────────────────────────────────────────────
*/
const pillars = [
  {
    num: '01',
    eyebrow: 'The Body',
    title: 'A humanoid built for real work',
    href: '#robot',
    src: '/videos/body.mp4',
    poster: '/videos/posters/body.jpg',
  },
  {
    num: '02',
    eyebrow: 'The Mind',
    title: 'Software that makes it smart',
    href: '#intelligence',
    src: '/videos/mind.mp4',
    poster: '/videos/posters/mind.jpg',
  },
];

export default function TwoPillars() {
  return (
    <section aria-label="Two parts" className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {pillars.map(({ num, eyebrow, title, href, src, poster }) => (
            <a
              key={num}
              href={href}
              className="group relative block overflow-hidden rounded-3xl bg-gray-900 aspect-[16/11] sm:aspect-[4/3] md:aspect-[5/6] lg:aspect-[4/3]"
            >
              {/* Media */}
              <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
                <BackgroundVideo src={src} poster={poster} />
              </div>

              {/* Legibility gradient */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.15) 45%, transparent 75%)',
                }}
              />

              {/* Label */}
              <div className="absolute inset-0 p-7 md:p-9 flex flex-col justify-between">
                <span className="text-sm font-semibold text-white/60 tracking-[0.2em]">
                  {num}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
                    {eyebrow}
                  </p>
                  <h3 className="mt-2 text-2xl md:text-3xl font-bold text-white leading-tight tracking-tight">
                    {title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/90">
                    Learn more
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
