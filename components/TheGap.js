const barriers = [
  {
    number: '01',
    title: 'Wrong task, wrong economics',
    body: 'Use cases must genuinely fit humanoid strengths. Not every task justifies the cost — selecting the wrong one kills adoption before it starts.',
  },
  {
    number: '02',
    title: 'Integration and safety complexity',
    body: 'Humanoid robots need workflow design, risk assessment and operator interfaces before they can run safely on a live factory floor.',
  },
  {
    number: '03',
    title: 'No evidence, no budget approval',
    body: 'Capital decisions require proof. ROI data and trial results must come before commitment — not be promised after it.',
  },
];

export default function TheGap() {
  return (
    <section id="the-gap" aria-label="The Adoption Gap" className="relative overflow-hidden py-24 md:py-32 bg-center md:bg-right"
      style={{
        backgroundImage: 'url(/images/manufacturers_are_interested.png)',
        backgroundSize: 'auto 100%',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgb(249,250,251)', 
      }}>
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
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — problem statement */}
          <div className="lg:sticky lg:top-32 z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              The Adoption Gap
            </p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
            Manufacturers are interested. <br />Adoption is the hard part.
            </h2>
            <p className="mt-6 text-lg text-gray-500 leading-relaxed">
              Interest in humanoid robotics is high across UK manufacturing. But without the right task selection, a safety framework and measurable ROI, adoption stalls before it starts.
            </p>
            <p className="mt-4 text-lg text-gray-900 font-medium">
              HRS bridges that gap — making humanoid robot deployment credible, safe and commercially viable.
            </p>

            {/* Divider line accent */}
            <div className="mt-10 w-16 h-1 bg-gray-900 rounded-full" />
          </div>

          {/* Right — barriers */}
          <div className="flex flex-col gap-0 rounded-3xl
    border border-white/60
    bg-white/55
    backdrop-blur-xl
    shadow-[0_8px_32px_rgba(0,0,0,0.08)]
    overflow-hidden">
            {barriers.map(({ number, title, body }, i) => (
              <div
                key={number}
                className={`py-8 px-8 ${i !== barriers.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <div className="flex items-start gap-5">
                  <span className="text-[11px] font-bold text-gray-300 tracking-widest pt-1 min-w-[28px]">
                    {number}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed">{body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
