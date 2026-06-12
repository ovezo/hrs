/*
  ── Statement ──────────────────────────────────────────────────────────
  Quiet, light breather between the video hero and the media pillars.
  Introduces the company and frames the two-part thesis: a physical robot
  + the intelligence that runs it.
  ────────────────────────────────────────────────────────────────────────
*/
export default function Statement() {
  return (
    <section aria-label="Who we are" className="bg-white py-24 md:py-36">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
            Who we are
          </p>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-[52px] lg:leading-[1.1] font-bold text-gray-900 tracking-tight">
            We build humanoid robots — and the intelligence that makes them
            <span className="text-gray-400"> actually useful.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-gray-500 leading-relaxed">
            Our work has two sides, under one roof. We make the physical
            humanoid — industrial-grade and general-purpose — and we build the
            AI data-processing software that turns it into a dependable worker:
            perception, learning and control, tuned to the job in front of it.
          </p>
          <div className="mt-10 w-16 h-1 bg-amber-500 rounded-full" />
        </div>
      </div>
    </section>
  );
}
