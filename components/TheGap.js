const barriers = [
  {
    number: '01',
    title: 'Trials & procurement',
    body: 'We run practical capability trials, then source and procure the right humanoid robot platform for your specific real-world tasks.'
  },
  {
    number: '02',
    title: 'Active Deployment',
    body: 'We move beyond testing to full integration, safely deploying robots directly into your current workflows and production lines.',
  },
  {
    number: '03',
    title: 'Advanced AI Training',
    body: 'We capture real-world <b>egocentric data</b> from the workspace to train foundational models. By applying <b>neuro-symbolic AI</b>, we ensure your robots not only learn physical tasks quickly but operate with reliable, built-in logic and safety rules.'
  },
  {
    number: '04',
    title: 'Built for Any Industry',
    body: 'We design humanoid automation solutions that adapt safely to human environments across manufacturing, warehousing and logistics, defence, pharmaceuticals and hospitality.'
  }
];

export default function TheGap() {
  return (
    <section id="solutions" aria-label="End-to-End Adoption" className="relative py-24 md:py-32 bg-center md:bg-right"
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
          <div className="lg:sticky lg:top-32 lg:self-start z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              End-to-End Adoption
            </p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
            Humanoid robot integration, end to end
            </h2>
            <p className="mt-6 text-lg text-gray-500 leading-relaxed">
            HRS makes adopting humanoid robots straightforward — we take you from a first trial to
            a deployed, working robot, automating repetitive manual tasks on your floor. Our core
            services:
            </p>
            {/* <p className="mt-4 text-lg text-gray-900 font-medium">
              HRS bridges that gap — making humanoid robot deployment credible, safe and commercially viable.
            </p> */}

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
                    <div className="mt-2 text-sm text-gray-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: body }} />
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
