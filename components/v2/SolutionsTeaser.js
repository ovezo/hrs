import { getContactEmail } from '@/lib/config';
import BackgroundVideo from './BackgroundVideo';

/*
  ── SolutionsTeaser ────────────────────────────────────────────────────
  Media-led teaser for the work HRS deploys into. A wide motion band over a
  card grid of use cases.

  NOTE: the dedicated /solutions listing + per-solution detail pages don't
  exist yet. Until they do, the cards are informational and the CTA points
  to contact. When those routes ship, give each `useCase` a `slug` and wrap
  the card in <Link href={`/solutions/${slug}`}>.
  ────────────────────────────────────────────────────────────────────────
*/
const useCases = [
  { title: 'Machine tending', body: 'Loading, unloading and monitoring around existing CNC and processing cells.' },
  { title: 'Line-side material movement', body: 'Parts, totes and small materials moved between stations — no new conveyors.' },
  { title: 'Packing support', body: 'Handling and placing product where fixture types change across shifts.' },
  { title: 'Kitting & pick support', body: 'Repeatable picking and part preparation near assembly workstations.' },
  { title: 'In-line inspection assist', body: 'Vision-led quality checks and real-time exception flagging in the flow.' },
  { title: 'Internal logistics', body: 'Brownfield routes built for people — now navigable without infrastructure changes.' },
];

export default function SolutionsTeaser() {
  const contactEmail = getContactEmail();

  return (
    <section id="solutions" aria-label="Solutions" className="bg-white py-24 md:py-32 scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              Solutions
            </p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
              Start where the value<br className="hidden sm:block" /> is clearest.
            </h2>
          </div>
          <p className="max-w-sm text-base text-gray-500 leading-relaxed md:text-right">
            Repetitive, bounded tasks around the stations, routes and cells you
            already run — where a humanoid pays back fastest.
          </p>
        </div>

        {/* Featured media band */}
        <div className="relative overflow-hidden rounded-3xl bg-gray-900 aspect-[16/10] sm:aspect-[21/9]">
          <BackgroundVideo
            src="/videos/solutions.mp4"
            poster="/videos/posters/solutions.jpg"
            objectPosition="center"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 45%, transparent 80%)',
            }}
          />
          <div className="absolute inset-0 p-7 md:p-12 flex flex-col justify-end max-w-2xl">
            <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight tracking-tight">
              Built for the work people already do.
            </h3>
            <p className="mt-3 text-sm md:text-lg text-white/80 leading-relaxed">
              From machine tending to internal logistics — matched to the task,
              proven on a real line before any capital commitment.
            </p>
          </div>
        </div>

        {/* Use-case grid */}
        <div className="mt-5 md:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 rounded-3xl overflow-hidden">
          {useCases.map(({ title, body }) => (
            <div
              key={title}
              className="bg-gray-50 p-7 flex flex-col gap-3 hover:bg-white transition-colors duration-150"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 self-start mt-1" />
              <h3 className="text-base font-semibold text-gray-900 leading-snug">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* Footer note + CTA */}
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <p className="text-sm text-gray-400">
            Dedicated solution pages are on the way.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://calendar.app.google/VHugirFzZa4sGwxi7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gray-900 text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors"
            >
              Book a Demo
            </a>
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center justify-center border border-gray-300 text-gray-900 px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-100 hover:border-gray-400 transition-colors"
            >
              Discuss your line
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
