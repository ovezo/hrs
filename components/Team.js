import CheckIcon from '@/icons/CheckIcon';

const credentials = [
  '20+ years in automation & robotics',
  'Founded Reeco in 2016 — UK collaborative-robot integration',
  'Grown to a market-leading team of 32',
  'Serving the food & pharmaceutical industries',
  'Deep UK customer trust and delivery network',
  'Factory base for live humanoid demonstrations',
];

const stats = [
  { value: '2016', label: 'Reeco founded' },
  { value: '32', label: 'People' },
  { value: '20+', label: 'Years in robotics' },
];

export default function Team() {
  return (
    <section id="about" aria-label="Founder" className="bg-white py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
            Founder
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
            Two decades building<br />UK automation.
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            HRS is founder-led by an operator with a proven track record of putting robots to
            work on British factory floors — now bringing the same drive to the humanoid frontier.
          </p>
        </div>

        {/* Founder card */}
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left — identity + bio */}
          <div className="flex flex-col gap-7">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-950 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg tracking-tight">LR</span>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                  Founder &amp; CEO
                </p>
                <h3 className="mt-0.5 text-xl font-bold text-gray-900">Lel Rees</h3>
              </div>
            </div>

            <p className="text-base text-gray-600 leading-relaxed">
              With over twenty years in automation and robotics, Lel founded Reeco in 2016 to
              pioneer collaborative-robot integration in the UK. What began as a vision to transform
              manufacturing has grown into a market-leading company of thirty-two people, serving the
              food and pharmaceutical industries.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              Now, as humanoid robots emerge as the next frontier, Lel is launching Humanoid Robot
              Solutions to bring this technology to British manufacturers — drawing on the same
              entrepreneurial drive and deep technical expertise that built Reeco to help businesses
              automate work that fixed machinery never could.
            </p>

            {/* Stat strip */}
            <div className="mt-2 grid grid-cols-3 gap-4 border-t border-gray-200 pt-7">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">{value}</p>
                  <p className="mt-1 text-xs text-gray-500 leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — credentials */}
          <div className="lg:border-l lg:border-gray-200 lg:pl-16 flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
              Track record
            </p>
            <ul className="flex flex-col gap-3.5">
              {credentials.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckIcon className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-700 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
