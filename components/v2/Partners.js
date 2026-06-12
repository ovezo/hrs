import Image from 'next/image';

/*
  ── Partners ───────────────────────────────────────────────────────────
  Platform-agnostic positioning with Agibot featured as the lead hardware
  partner. Wordmarks are rendered as clean monochrome type rather than
  mismatched logo files; swap in real logos later.

  NOTE: per-partner detail pages are planned but not built yet — hence the
  "coming" note and no links.
  ────────────────────────────────────────────────────────────────────────
*/
const partners = [
  { name: 'Agibot', role: 'Industrial humanoids', lead: true },
  { name: 'Unitree', role: 'Agile humanoids & quadrupeds' },
  { name: 'Keenon', role: 'Service & logistics robots' },
];

export default function Partners() {
  return (
    <section id="partners" aria-label="Partners" className="bg-gray-50 py-24 md:py-32 scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">

        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
            Partners
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
            The right robot<br className="hidden sm:block" /> for the task.
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            HRS is platform-agnostic. We work with the strongest humanoid and
            service-robot makers — led by our main hardware partner, Agibot.
          </p>
        </div>

        {/* Partner wall — name + role */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-6">
          {partners.map(({ name, role, lead }) => (
            <div key={name}>
              <div
                className={`flex items-center gap-2 text-2xl md:text-3xl font-bold tracking-tight transition-colors ${
                  lead ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {lead && <span className="w-2 h-2 rounded-full bg-amber-500" />}
                {name}
              </div>
              <p className="mt-1.5 text-xs text-gray-400">{role}</p>
            </div>
          ))}
          <div>
            <div className="text-2xl md:text-3xl font-bold tracking-tight text-gray-300">
              + more
            </div>
            <p className="mt-1.5 text-xs text-gray-400">Matched per task</p>
          </div>
        </div>

        {/* Featured: Agibot */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-7 md:gap-10 items-center rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.05)]">
          <div className="relative w-full md:w-56 aspect-[4/3] md:aspect-square rounded-2xl bg-gradient-to-b from-gray-100 to-gray-50 overflow-hidden">
            <Image
              src="/images/v2/robot-bipedal.png"
              alt="Agibot G2-class humanoid robot"
              fill
              sizes="(min-width: 768px) 224px, 90vw"
              className="object-contain object-bottom p-4"
            />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold tracking-tight text-gray-900">Agibot</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700 ring-1 ring-amber-200">
                Lead hardware partner
              </span>
            </div>
            <p className="mt-3 max-w-xl text-base text-gray-500 leading-relaxed">
              Our humanoids are built on Agibot's industrial-grade G2 platform
              and finished in HRS livery — a proven body for the intelligence
              layer we add on top.
            </p>
            <p className="mt-5 text-sm text-gray-400">
              Dedicated partner pages are coming.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
