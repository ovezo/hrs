import { getContactEmail } from '@/lib/config';

export default function VisionCTA() {
  const contactEmail = getContactEmail();
  return (
    <section id="contact" aria-label="Vision and Contact" className="bg-white py-24 pb-8! md:py-36">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
            Our Vision
          </p>

          <h2 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight">
            Build the UK pathway early.
          </h2>

          <p className="mt-8 text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Become the trusted route for practical humanoid deployment in UK manufacturing — through credible trials, measurable ROI and long-term operator support.
          </p>

          {/* CTAs */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`/contact`}
              className="inline-flex items-center justify-center bg-gray-900 text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors"
            >
              Book a Demo
            </a>
            <a
              href={`/contact`}
              className="inline-flex items-center justify-center border border-gray-300 text-gray-900 px-8 py-4 rounded-full text-sm font-semibold hover:bg-gray-100 hover:border-gray-400 transition-colors"
            >
              Get in Touch
            </a>
          </div>

        </div>

        {/* Bottom footer strip */}
        <div className="mt-24 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <span>© {new Date().getFullYear()} HRS — Humanoid Robot Solutions UK</span>
          <span>Humanoid robot deployment for UK industry</span>
        </div>

      </div>
    </section>
  );
}
