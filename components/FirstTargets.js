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
    title: 'Packing & palletising',
    body: 'Handling, packing and palletising product in environments where fixture types change frequently across shifts.',
  },
  {
    title: 'Pick-and-place & kitting',
    body: 'Repeatable pick-and-place, picking and part-preparation tasks close to existing assembly workstations.',
  },
  {
    title: 'In-line inspection assist',
    body: 'Vision-led quality checks, part presentation and real-time exception flagging in the production flow.',
  },
  {
    title: 'Warehouse & internal logistics',
    body: 'Tote transport and material movement along brownfield routes built for people — now handled by humanoid robots without infrastructure changes.',
  },
];

export default function FirstTargets() {
  return (
    <section
      id="use-cases"
      aria-label="First Targets"
      className="relative py-24 md:py-32 bg-center md:bg-right"
      style={{
        backgroundImage: 'url(/images/robot-ai-vision.png)',
        backgroundSize: 'auto 100%',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgb(249,250,251)',
      }}
    >
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            'linear-gradient(to right, rgb(249,250,251) 65%, rgba(249,250,251,0.9) 78%, rgba(249,250,251,0.5) 90%, transparent 100%)',
        }}
      />
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            'linear-gradient(to right, rgb(249,250,251) 40%, rgba(249,250,251,0.9) 55%, rgba(249,250,251,0.5) 72%, rgba(249,250,251,0.15) 88%, transparent 100%)',
        }}
      />
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              Use Cases
            </p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
              Start where the value<br />is clearest.
            </h2>
          </div>
          <p className="max-w-sm text-base text-black leading-relaxed md:text-right">
            Repetitive, bounded tasks around existing workstations, routes and cells — where humanoid robots deliver measurable ROI from day one.
          </p>
        </div>

        {/* Use case grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 rounded-2xl overflow-hidden">
          {useCases.map(({ title, body }) => (
            <div
              key={title}
              className="bg-white p-7 flex flex-col gap-3 hover:bg-gray-50 transition-colors duration-150"
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
