import Link from 'next/link';
import { getContactEmail } from '@/lib/config';
import { Ticks } from './ui';

export default function V3CTA() {
  const contactEmail = getContactEmail();

  return (
    <section id="contact-cta" className="relative bg-gray-50 py-24 scroll-mt-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16">
        <div className="relative mx-auto max-w-3xl bg-white p-10 text-center ring-1 ring-gray-200 md:p-14">
          <Ticks />
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-600">
            CONTACT
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Run the numbers on your task.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-500">
            Send us the job — cycle times, payloads, floor plan — and we&apos;ll tell you which
            unit fits, then prove it in a live demo.
          </p>
          <p className="mt-6 font-mono text-xs text-gray-400">
            &gt; request_demo --unit g2 --unit x2 --site your-facility
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`/contact`}
              className="inline-flex items-center justify-center rounded-full bg-gray-900 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-gray-700"
            >
              Book a Demo
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 px-8 py-4 text-sm font-semibold text-gray-900 transition-colors hover:border-gray-400 hover:bg-gray-100"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
