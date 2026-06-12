import Image from 'next/image';

/*
  ── RobotShowcase ──────────────────────────────────────────────────────
  Deep-dive on the physical robot. Media-led: the Agibot G2-class humanoid
  (our hardware, HRS-branded) sits large on a soft studio panel beside a
  short set of qualitative capabilities. No invented spec numbers.

  Placeholder image: /images/v2/robot-base.png (Agibot G2 press still).
  ────────────────────────────────────────────────────────────────────────
*/
const capabilities = [
  {
    title: 'Industrial-grade build',
    body: 'Automotive-grade components and IP-rated protection — engineered for the factory floor, not the lab.',
  },
  {
    title: 'Force-controlled precision',
    body: 'Sub-millimetre assembly and a delicate touch for handling real parts, totes and tooling.',
  },
  {
    title: 'Interactive by design',
    body: 'Sees, hears and responds — natural movement and conversation make it easy to work alongside.',
  },
  {
    title: 'Rapid to deploy',
    body: 'Reinforcement-learned skills mean new tasks in days — finished in HRS livery, built with Agibot.',
  },
];

export default function RobotShowcase() {
  return (
    <section id="robot" aria-label="The robot" className="bg-white py-24 md:py-32 scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Media ── studio robot on a soft panel ── */}
          <div className="relative order-1 lg:order-none">
            <div className="relative rounded-3xl bg-gradient-to-b from-gray-100 to-gray-50 overflow-hidden aspect-[4/5] sm:aspect-[5/5] lg:aspect-[4/5]">
              {/* soft radial glow behind the robot */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'radial-gradient(60% 55% at 50% 42%, rgba(255,255,255,0.9), rgba(243,244,246,0) 70%)',
                }}
              />
              <Image
                src="/images/v2/robot-base.png"
                alt="HRS humanoid robot (Agibot G2-class) standing on its mobile base"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-contain object-bottom p-6 md:p-10"
              />
              {/* corner badge */}
              <span className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3.5 py-1.5 text-xs font-semibold text-gray-700 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                G2-class platform
              </span>
            </div>
          </div>

          {/* ── Copy ── */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              The Robot
            </p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
              The hardware that<br className="hidden sm:block" /> shows up to work.
            </h2>
            <p className="mt-5 text-lg text-gray-500 leading-relaxed">
              A general-purpose, industrial-grade humanoid that moves through
              your site, handles real parts with a force-controlled touch, and
              fits the work people already do — wearing the HRS badge, built on
              a proven platform.
            </p>

            <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
              {capabilities.map(({ title, body }) => (
                <div key={title} className="flex items-start gap-3">
                  <span className="mt-[7px] w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                  <div>
                    <dt className="text-base font-semibold text-gray-900">{title}</dt>
                    <dd className="mt-1 text-sm text-gray-500 leading-relaxed">{body}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

        </div>
      </div>
    </section>
  );
}
