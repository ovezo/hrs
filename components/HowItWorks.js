const steps = [
  {
    num: '01',
    title: 'Robot Platform',
    body: 'Select the right humanoid for the task — matching robot capability to real factory requirements and budget.',
  },
  {
    num: '02',
    title: 'Integration',
    body: 'Tooling, workflow design, safety systems and operator interfaces built specifically for your site and processes.',
  },
  {
    num: '03',
    title: 'Software Layer',
    body: 'Vision, AI monitoring, live support dashboards and performance tracking — the intelligence layer on top of the hardware.',
  },
  {
    num: '04',
    title: 'Training',
    body: 'Building operator confidence before scale-up. Real demonstrations in a factory environment so adoption is earned, not forced.',
  },
  {
    num: '05',
    title: 'Optimisation',
    body: 'Long-term performance improvement as the robot matures on-site — continuous learning and support to protect ROI.',
  },
];

export default function HowItWorks() {
  return (
    <section id="solutions" aria-label="How It Works" className="bg-white py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              Our Process
            </p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
              From first trial to<br />long-term performance.
            </h2>
          </div>
          <p className="max-w-sm text-base text-gray-500 leading-relaxed md:text-right">
            A structured pathway from proof-of-concept through to sustained, measurable deployment.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
          {steps.map(({ num, title, body }, i) => (
            <div
              key={num}
              className="relative bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col gap-4 group hover:border-gray-300 hover:shadow-sm transition-all duration-200"
            >
              {/* Step number — large decorative */}
              <span className="text-5xl font-bold text-gray-100 leading-none group-hover:text-gray-200 transition-colors duration-200">
                {num}
              </span>

              <div className="flex-1 flex flex-col gap-2">
                <h3 className="text-sm font-semibold text-gray-900 leading-snug">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{body}</p>
              </div>

              {/* Connector dot — desktop only */}
              {i < steps.length - 1 && (
                <div className="hidden xl:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 z-10">
                  <div className="w-2 h-2 rounded-full bg-gray-300 mx-auto mt-1" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA nudge */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors underline underline-offset-4"
          >
            Ready to start your trial? Talk to us
          </a>
        </div>

      </div>
    </section>
  );
}
