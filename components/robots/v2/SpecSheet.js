import { SPEC_SHEETS } from './v2Data';

export default function SpecSheet() {
  return (
    <section className="bg-gray-50 py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">

        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-4">
            Specifications
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            The numbers.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {SPEC_SHEETS.map((sheet) => (
            <div key={sheet.name} className="overflow-hidden rounded-3xl bg-white ring-1 ring-gray-200">
              <div className="border-b border-gray-100 px-6 py-6 md:px-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-amber-600">
                  {sheet.tagline}
                </p>
                <h3 className="mt-1 text-2xl font-bold text-gray-900 tracking-tight">{sheet.name}</h3>
              </div>
              <dl className="divide-y divide-gray-100">
                {sheet.rows.map(([label, value]) => (
                  <div key={label} className="grid grid-cols-[38%_62%] gap-4 px-6 py-3.5 md:px-8">
                    <dt className="text-xs font-semibold uppercase tracking-widest text-gray-400 self-center">
                      {label}
                    </dt>
                    <dd className="text-sm text-gray-700">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-gray-400">
          Figures from AGIBOT platform documentation.
        </p>

      </div>
    </section>
  );
}
