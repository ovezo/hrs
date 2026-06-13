/*
  ── PartnersSection (v4) ────────────────────────────────────────────────
  A LIGHT, text-led section: the platform-agnostic partner story with Agibot
  as the lead. Wordmarks are clean monochrome type (no logo files yet) — swap
  in real logos later. Locked to one screen (h-100dvh). Per-partner detail
  pages are planned.
  ────────────────────────────────────────────────────────────────────────
*/
const partners = [
  {
    name: 'Agibot',
    role: 'Industrial humanoids',
    body: 'Our main hardware partner — general-purpose, industrial-grade humanoids, finished in HRS livery.',
    lead: true,
  },
  {
    name: 'Unitree',
    role: 'Agile humanoids & quadrupeds',
    body: 'Fast, dynamic platforms for mobility-first tasks, inspection and difficult terrain.',
  },
  {
    name: 'Keenon',
    role: 'Service & logistics robots',
    body: 'Proven service and delivery robots for structured, people-facing environments.',
  },
];

export default function PartnersSection({ index, id, eyebrow, title, intro }) {
  return (
    <section
      data-index={index}
      id={id}
      aria-label={eyebrow}
      className="relative h-[100dvh] w-full snap-start snap-always overflow-hidden bg-white flex items-center"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-16 py-12 md:py-16">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
            {title}
          </h2>
          {intro && (
            <p className="mt-4 text-base md:text-lg text-gray-500 leading-relaxed">{intro}</p>
          )}
        </div>

        <div className="mt-7 md:mt-9 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {partners.map((p) => (
            <div
              key={p.name}
              className={`rounded-3xl border bg-gray-50 p-5 md:p-7 transition-all duration-200 hover:bg-white hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] ${
                p.lead ? 'border-amber-200' : 'border-gray-200'
              }`}
            >
              <div className="flex items-center gap-2">
                {p.lead && <span className="w-2 h-2 rounded-full bg-amber-500" />}
                <span className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">{p.name}</span>
              </div>
              <div className="mt-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-amber-500">
                {p.role}
              </div>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 md:mt-8 text-sm text-gray-400">Dedicated partner pages are on the way.</p>
      </div>
    </section>
  );
}
