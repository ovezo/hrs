const useCases = [
  {
    title: 'Line-side material movement',
    body: 'Parts, totes and small materials moved between stations — no fixed conveyor infrastructure needed.',
  },
  {
    title: 'Machine tending',
    body: 'Loading, unloading and monitoring around existing CNC or processing cells.',
  },
  {
    title: 'Packing support',
    body: 'Handling and placing product in environments where fixture types change frequently across shifts.',
  },
  {
    title: 'Kitting and pick support',
    body: 'Repeatable picking and part preparation tasks close to existing assembly workstations.',
  },
  {
    title: 'In-line inspection assist',
    body: 'Vision-led quality checks, part presentation and real-time exception flagging in the production flow.',
  },
  {
    title: 'Internal logistics',
    body: 'Brownfield movement routes built for people — now navigable by humanoid robots without infrastructure changes.',
  },
];

export default function FirstTargets() {
  return (
    <section id="use-cases" aria-label="First Targets" className="bg-white py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              First Targets
            </p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
              Start where the value<br />is clearest.
            </h2>
          </div>
          <p className="max-w-sm text-base text-gray-500 leading-relaxed md:text-right">
            Repetitive, bounded tasks around existing workstations, routes and cells — where humanoid robots deliver measurable value from day one.
          </p>
        </div>

        {/* Use case grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 rounded-2xl overflow-hidden">
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

      </div>
    </section>
  );
}
