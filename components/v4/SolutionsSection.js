/*
  ── SolutionsSection (v4) ───────────────────────────────────────────────
  A LIGHT, text-only breather: the bounded, repetitive tasks HRS deploys
  into, as a compact use-case card grid. No media — a quiet beat between the
  video punctuations. Locked to one screen (h-100dvh): 2 columns on small
  screens, 3 on desktop, so it never grows past the viewport.

  NOTE: dedicated /solutions detail pages don't exist yet; cards are
  informational. Give each a `slug` + wrap in <Link> when those routes ship.
  ────────────────────────────────────────────────────────────────────────
*/
const useCases = [
  { title: 'Machine tending', body: 'Loading, unloading and monitoring around existing CNC and processing cells.' },
  { title: 'Line-side movement', body: 'Parts and totes moved between stations — no new conveyors required.' },
  { title: 'Packing support', body: 'Handling and placing product where fixture types change across shifts.' },
  { title: 'Kitting & picking', body: 'Repeatable picking and part preparation near assembly workstations.' },
  { title: 'In-line inspection', body: 'Vision-led quality checks and real-time exception flagging in the flow.' },
  { title: 'Internal logistics', body: 'Brownfield routes built for people — navigable without infrastructure changes.' },
];

export default function SolutionsSection({ index, id, eyebrow, title, intro }) {
  return (
    <section
      data-index={index}
      id={id}
      aria-label={eyebrow}
      className="relative h-[100dvh] w-full snap-start snap-always overflow-hidden bg-gray-50 flex items-center"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-16 py-12 md:py-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6 md:mb-9">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              {eyebrow}
            </p>
            <h2 className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
              {title}
            </h2>
          </div>
          {intro && (
            <p className="max-w-sm text-sm md:text-base text-gray-500 leading-relaxed md:text-right">
              {intro}
            </p>
          )}
        </div>

        {/* Use-case grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-gray-200 rounded-3xl overflow-hidden">
          {useCases.map(({ title: t, body }) => (
            <div
              key={t}
              className="bg-gray-50 p-4 md:p-6 flex flex-col gap-2 hover:bg-white transition-colors duration-150"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 self-start mt-1" />
              <h3 className="text-sm md:text-base font-semibold text-gray-900 leading-snug">{t}</h3>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <p className="mt-5 text-sm text-gray-400">Dedicated solution pages are on the way.</p>
      </div>
    </section>
  );
}
