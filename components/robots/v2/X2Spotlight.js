import Image from 'next/image';
import { X2_DETAILS } from './v2Data';

export default function X2Spotlight() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-600">
              Interactive demonstration humanoid
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              And for the crowd — X2.
            </h2>
            <p className="mt-5 text-lg text-gray-500 leading-relaxed">
              Friendly, agile and fully bipedal. X2 handles multimodal interaction — vision,
              voice, touch and facial expression — and walks, gestures and dances with a
              25–30 DOF bionic body. It is the robot we put in front of an audience.
            </p>
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {['Fully bipedal', 'Multimodal interaction', 'Autonomous navigation', 'Self-docking recharge'].map((chip) => (
                <li
                  key={chip}
                  className="inline-flex items-center gap-2 rounded-full bg-gray-50 ring-1 ring-gray-200 px-3.5 py-1.5 text-xs font-medium text-gray-700"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                  {chip}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl ring-1 ring-gray-100">
            <Image
              src="/images/robots-v2/x2-banner.webp"
              alt="AGIBOT X2 bipedal humanoid sitting on a ledge"
              fill
              sizes="(min-width: 1024px) 50vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Articulation details from the official X2 anatomy carousel */}
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {X2_DETAILS.map((detail) => (
            <figure key={detail.label} className="overflow-hidden rounded-2xl bg-gray-50 ring-1 ring-gray-100">
              <div className="relative aspect-square">
                <Image
                  src={detail.image}
                  alt={detail.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="flex items-baseline justify-between px-4 py-3">
                <span className="text-sm font-semibold text-gray-900">{detail.label}</span>
                <span className="text-xs font-medium text-amber-600">{detail.value}</span>
              </figcaption>
            </figure>
          ))}
        </div>

      </div>
    </section>
  );
}
