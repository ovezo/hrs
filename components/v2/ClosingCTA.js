import { getContactEmail } from '@/lib/config';
import BackgroundVideo from './BackgroundVideo';

/*
  ── ClosingCTA ─────────────────────────────────────────────────────────
  Final call to action + footer. Keeps the media theme but stays LIGHT: the
  hero clip plays faintly behind a near-white wash, with dark text on top —
  the inverse of a dark cinematic CTA, so the page closes bright and on-brand.
  ────────────────────────────────────────────────────────────────────────
*/
const footerLinks = [
  { label: 'Robot', id: 'robot' },
  { label: 'Intelligence', id: 'intelligence' },
  { label: 'Solutions', id: 'solutions' },
  { label: 'Partners', id: 'partners' },
];

export default function ClosingCTA() {
  const contactEmail = getContactEmail();

  return (
    <section id="contact" aria-label="Get started" className="bg-white pt-24 md:pt-32 pb-8 scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">

        {/* ── Media CTA band ── */}
        <div className="relative overflow-hidden rounded-[2rem] bg-gray-100 min-h-[480px] md:min-h-[560px] flex items-center">
          <div className="absolute inset-0">
            <BackgroundVideo
              src="/videos/cta.mp4"
              poster="/videos/posters/cta.jpg"
              objectPosition="center"
            />
          </div>
          {/* near-white wash keeps it bright, robot stays faintly visible */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to bottom, rgba(255,255,255,0.86), rgba(249,250,251,0.92))',
            }}
          />

          <div className="relative z-10 w-full px-6 md:px-16 py-16 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Get started
            </p>
            <h2 className="mt-6 mx-auto max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tight">
              Put a humanoid to work — and prove it.
            </h2>
            <p className="mt-6 mx-auto max-w-xl text-lg md:text-xl text-gray-600 leading-relaxed">
              See the robot and the intelligence on a task that matters to you.
              Real demonstration first, commitment second.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://calendar.app.google/VHugirFzZa4sGwxi7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gray-900 text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors"
              >
                Book a Demo
              </a>
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center justify-center bg-white/80 backdrop-blur border border-gray-300 text-gray-900 px-8 py-4 rounded-full text-sm font-semibold hover:bg-white hover:border-gray-400 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        {/* ── Footer ── */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <span className="text-sm font-bold tracking-tight text-gray-900">
              HRS — Humanoid Robot Solutions
            </span>
            <nav aria-label="Footer" className="flex flex-wrap gap-x-7 gap-y-2">
              {footerLinks.map(({ label, id }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-gray-400">
            <span>© {new Date().getFullYear()} HRS — Humanoid Robot Solutions UK</span>
            <span>The robot and the mind behind it.</span>
          </div>
        </footer>

      </div>
    </section>
  );
}
