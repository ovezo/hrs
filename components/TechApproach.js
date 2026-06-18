const pillars = [
  {
    num: '01',
    title: 'Vision-Language-Action models',
    body: 'Our robots reason about their environment, understand spoken or written commands, and translate that into precise physical movement — replacing rigid scripted routines. They understand context and act intelligently.',
  },
  {
    num: '02',
    title: 'Motion capture & egocentric data',
    body: 'Our team physically performs tasks in motion-capture suits, generating thousands of hours of egocentric data that teaches our robots genuine human movement and environmental context.',
  },
  {
    num: '03',
    title: 'Neuro-symbolic AI & imitation learning',
    body: 'Robots learn by watching humans demonstrate tasks, then combine imitation learning with neuro-symbolic AI — so they grasp why a task is done and adapt when conditions change.',
  },
  {
    num: '04',
    title: 'Digital twins & simulation at scale',
    body: 'Before a robot reaches your floor, it has trained across millions of scenario variations in physics-based digital twins — reducing risk and accelerating deployment timelines.',
  },
  {
    num: '05',
    title: 'Deployment in real UK environments',
    body: 'We put humanoids to work in live UK environments — from manufacturing and pharmaceuticals to hospitality, defence, electronics and automotive — through hands-on demonstrations.',
  },
];

export default function TechApproach() {
  return (
    <section
      id="technology"
      aria-label="Bringing AI to Life"
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
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — intro, sticky on desktop */}
          <div className="lg:sticky lg:top-32 lg:self-start z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              Bringing AI to Life
            </p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
              The age of physical AI is here.
            </h2>
            <p className="mt-5 text-lg text-gray-500 leading-relaxed">
              And it is moving faster than most people realise. At the heart of the shift are
              Vision-Language-Action models that let robots interpret what they see and hear and
              turn it into action — robots that understand intent, not just instructions.
            </p>
            <div className="mt-8">
              <a
                href="https://calendar.app.google/VHugirFzZa4sGwxi7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-gray-900 transition-colors"
              >
                Book a Demonstration
              </a>
            </div>
          </div>

          {/* Right — numbered pillars in a glass panel */}
          <div className="flex flex-col gap-0 rounded-3xl
    border border-white/60
    bg-white/55
    backdrop-blur-xl
    shadow-[0_8px_32px_rgba(0,0,0,0.08)]
    overflow-hidden">
            {pillars.map(({ num, title, body }, i) => (
              <div
                key={num}
                className={`flex items-start gap-6 py-7 px-7 ${i !== pillars.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <span className="text-3xl font-bold text-gray-200 w-10 flex-shrink-0 leading-none pt-1">
                  {num}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">{title}</h3>
                  <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
