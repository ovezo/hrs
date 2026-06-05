const capabilities = [
  {
    title: 'Computer vision and task intelligence',
    body: 'Real-time perception of task state, part quality and exceptions — giving the robot the situational awareness to act reliably in a live production cell.',
  },
  {
    title: 'Safety integration and workflow design',
    body: 'Risk assessment, hand-off protocols and operator interfaces engineered for each site — so the robot works safely alongside people from day one.',
  },
  {
    title: 'Live performance dashboards',
    body: 'Cycle time, uptime, intervention rate and ROI tracked continuously — making the business case measurable and visible to stakeholders.',
  },
];

export default function TechApproach() {
  return (
    <section
      id="technology"
      aria-label="Technology Approach"
      className="relative overflow-hidden py-24 md:py-32 bg-center md:bg-right"
      style={{
        backgroundImage: 'url(/images/robot-ai-vision.png)',
        backgroundSize: 'auto 100%',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgb(249,250,251)',
      }}
    >

      {/* Gradient overlay — wider on mobile so text area stays readable */}
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

      {/* Content — left-aligned, z above gradient */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="max-w-lg">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
            Technology Approach
          </p>

          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
            Humanoids are the platform.<br className="hidden sm:block" /> HRS is the deployment layer.
          </h2>

          {/* Capability bullets */}
          <ul className="mt-10 flex flex-col gap-8">
            {capabilities.map(({ title, body }) => (
              <li key={title} className="flex items-start gap-4">
                <span className="mt-[7px] w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                <div>
                  <h3 className="text-base font-bold text-gray-900">{title}</h3>
                  <p className="mt-1 text-sm text-gray-500 leading-relaxed">{body}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Tag line */}
          <p className="mt-12 text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-300">
            Deployment Intelligence
          </p>

        </div>
      </div>

    </section>
  );
}
