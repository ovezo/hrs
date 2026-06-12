import BackgroundVideo from './BackgroundVideo';

/*
  ── IntelligenceShowcase ───────────────────────────────────────────────
  Deep-dive on the AI / data-processing software — the half of HRS that
  turns a capable body into a dependable worker. Media on the right,
  reversed from RobotShowcase for visual rhythm.

  Placeholder footage: /videos/intelligence.mp4 (Unitree G1 — dexterous
  manipulation, stands in for "intelligence in action").
  ────────────────────────────────────────────────────────────────────────
*/
const layers = [
  {
    title: 'Perception',
    body: 'Vision-language understanding of parts, task state, quality and exceptions — situational awareness on a live line.',
  },
  {
    title: 'Learning from data',
    body: 'Skills are trained in simulation and sharpened on real shifts — every deployment feeds the next.',
  },
  {
    title: 'Control & decisioning',
    body: 'Turns perception into safe, repeatable action — and knows when to hand back to a person.',
  },
];

export default function IntelligenceShowcase() {
  return (
    <section
      id="intelligence"
      aria-label="The intelligence"
      className="bg-gray-50 py-24 md:py-32 scroll-mt-20"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Copy ── */}
          <div className="order-2 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              The Intelligence
            </p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
              The mind behind<br className="hidden sm:block" /> the machine.
            </h2>
            <p className="mt-5 text-lg text-gray-500 leading-relaxed">
              We build the AI data-processing software that runs the robot —
              vision-language perception, learned manipulation and real-time
              control — so the same body gets more capable the longer it runs.
            </p>

            <ul className="mt-10 flex flex-col gap-7">
              {layers.map(({ title, body }) => (
                <li key={title} className="flex items-start gap-4">
                  <span className="mt-[7px] w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-base font-bold text-gray-900">{title}</h3>
                    <p className="mt-1 text-sm text-gray-500 leading-relaxed">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Media ── manipulation footage with floating data chips ── */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden bg-gray-900 aspect-[4/3] shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
              <BackgroundVideo
                src="/videos/intelligence.mp4"
                poster="/videos/posters/intelligence.jpg"
                objectPosition="center"
              />
              {/* subtle tint for chip legibility */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent 55%)' }}
              />
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
                {['Perception', 'Learning', 'Control'].map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-white/20"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
