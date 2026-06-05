const steps = [
  {
    num: '01',
    title: 'Select',
    body: 'Identify high-fit tasks where humanoid capability matches the work and unit economics make commercial sense. We match robot platform to requirements.',
  },
  {
    num: '02',
    title: 'Trial & Prove',
    body: 'Real demonstrations in a factory environment before any capital commitment. Evidence first, purchase decision second.',
  },
  {
    num: '03',
    title: 'Integrate',
    body: 'Workflow design, tooling, safety systems and operator interfaces built specifically for your site — with the right humanoid platform selected and fitted.',
  },
  {
    num: '04',
    title: 'Measure',
    body: 'Vision, AI monitoring and live dashboards tracking cycle time, uptime, intervention rate and ROI — continuously.',
  },
  {
    num: '05',
    title: 'Support & Scale',
    body: 'Operator training and continuous optimisation long after go-live. The commercial pathway from a single trial to sustained deployment.',
  },
];

export default function WhatWeDo() {
  return (
    <section id="solutions" aria-label="What We Do" className="bg-gray-50 py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — intro, sticky on desktop */}
          <div className="lg:sticky lg:top-32">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              Our Process
            </p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
              Not just robot sales.<br />A complete deployment pathway.
            </h2>
            <p className="mt-5 text-lg text-gray-500 leading-relaxed">
              We identify the right task, prove value before any capital commitment, then handle integration, performance tracking and long-term support.
            </p>
            <div className="mt-8 w-16 h-1 bg-gray-900 rounded-full" />
          </div>

          {/* Right — numbered steps */}
          <div className="flex flex-col">
            {steps.map(({ num, title, body }, i) => (
              <div
                key={num}
                className={`flex items-start gap-6 py-7 ${i !== steps.length - 1 ? 'border-b border-gray-100' : ''}`}
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
