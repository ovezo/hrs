import Image from 'next/image';
import Link from 'next/link';
import { getContactEmail } from '@/lib/config';
import { COMPARISON, G2, X2 } from './robotsData';

export default function CompareCTA() {
  const contactEmail = getContactEmail();

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">

        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-4">
            Side by side
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            Two robots. One team.
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            G2 carries the industrial work; X2 wins the room. Most deployments start with one —
            many end up with both.
          </p>
        </div>

        {/* Comparison strip */}
        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl ring-1 ring-gray-200">
          <div className="grid grid-cols-2 bg-gray-50 md:grid-cols-[1.2fr_1fr_1fr]">
            <div className="hidden md:block" />
            {[G2, X2].map((robot) => (
              <div key={robot.id} className="flex items-center gap-4 px-5 py-6 md:px-8">
                <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-2xl bg-white ring-1 ring-gray-200">
                  <Image
                    src={robot.images.thumb}
                    alt={robot.heroAlt}
                    fill
                    sizes="56px"
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{robot.name}</p>
                  <p className="mt-0.5 text-xs text-gray-500">{robot.tagline}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="divide-y divide-gray-100">
            {COMPARISON.map((row) => (
              <div key={row.label} className="grid grid-cols-2 md:grid-cols-[1.2fr_1fr_1fr]">
                <div className="col-span-2 px-5 pt-4 text-xs font-semibold uppercase tracking-widest text-gray-400 md:col-span-1 md:self-center md:px-8 md:py-4">
                  {row.label}
                </div>
                <div className="px-5 pb-4 pt-1 text-sm text-gray-700 md:px-8 md:py-4">{row.g2}</div>
                <div className="px-5 pb-4 pt-1 text-sm text-gray-700 md:px-8 md:py-4">{row.x2}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto mt-20 max-w-3xl text-center md:mt-28">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900">
            See them work your task.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-500 md:text-xl">
            Book a live demonstration — on-site or at our Newtown base — and watch G2 and X2
            handle a task from your line.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center justify-center rounded-full bg-gray-900 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-gray-700"
            >
              Book a Demo
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 px-8 py-4 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-100 hover:border-gray-400"
            >
              Get in Touch
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
