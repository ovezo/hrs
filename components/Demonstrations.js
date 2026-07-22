import Image from 'next/image';
import { getContactEmail } from '@/lib/config';

const sectors = [
  'Hospitality',
  'Defence',
  'Electronics',
  'Automotive',
  'Manufacturing',
  'Pharmaceuticals',
];

export default function Demonstrations() {
  const contactEmail = getContactEmail();
  return (
    <section id="demos" aria-label="Live Demonstrations" className="bg-gray-50 py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Feature image — X2, the crowd-stopper */}
          <div className="relative aspect-4/3 rounded-3xl overflow-hidden bg-gray-50 ring-1 ring-gray-100 order-1 lg:order-none">
            <Image
              src="/images/x2-sit.webp"
              alt="AGIBOT X2 interactive humanoid robot in a demonstration setting"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <span className="absolute bottom-5 left-5 right-5 text-sm font-semibold text-white drop-shadow">
              AGIBOT X2 — interactive bipedal humanoid
            </span>
          </div>

          {/* Content */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              Live Demonstrations
            </p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
              See humanoid AI in your environment.
            </h2>
            <p className="mt-6 text-lg text-gray-500 leading-relaxed">
              HRS runs hands-on humanoid demonstrations in live UK environments — so you can see,
              interact with and evaluate humanoid AI on your own site before you commit. Our
              showcases run on AGIBOT robots, featuring the interactive X2.
            </p>

            {/* Sectors */}
            <p className="mt-10 text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Demonstrating across
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {sectors.map((sector) => (
                <li
                  key={sector}
                  className="flex items-center gap-2.5 rounded-xl bg-white ring-1 ring-gray-200 px-4 py-3 text-sm font-medium text-gray-800"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                  {sector}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`/contact`}
                className="inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-gray-900 transition-colors"
              >
                Book a Demo
              </a>
              <a
                href="/videos"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-semibold text-gray-900 ring-1 ring-gray-300 hover:bg-white transition-colors"
              >
                Watch the robots
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
