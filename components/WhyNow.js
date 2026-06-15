import Image from 'next/image';

const signals = [
  {
    img: '/images/Figure-02-Humanoid-Robot.webp',
    imgAlt: 'Figure 02 humanoid robot on a factory floor',
    cardLabel: 'Figure 02 bot',
    cardSublabel: 'factory signal',
    brand: 'FIGURE',
    title: 'AI is improving fast',
    body: 'Vision, planning and language control are real.',
  },
  {
    img: '/images/Tesla_Optimus.jpg',
    imgAlt: 'Tesla Optimus humanoid robot',
    cardLabel: 'Tesla Optimus',
    cardSublabel: 'market signal',
    brand: 'TESLA',
    title: 'Factories need flexibility',
    body: 'Brownfield sites need adaptable automation.',
  },
  {
    img: '/images/unitree-g1.webp',
    imgAlt: 'Unitree G1 humanoid robot in a workshop',
    cardLabel: 'Unitree G1 bot',
    cardSublabel: 'platform signal',
    brand: 'UNITREE',
    title: 'Adoption needs trust',
    body: 'Customers need evidence before rollout.',
  },
];

export default function WhyNow() {
  return (
    <section id="robots" aria-label="Why Now" className="bg-white py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">

        {/* Header — matches PDF wording exactly */}
        <div className="mb-10 md:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-4">
            Why Now
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight max-w-4xl">
            Humanoid robotics changing<br className="hidden sm:block" /> the future of automation.
          </h2>
        </div>

        {/* Robot image cards — dark overlay, labels from PDF */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
          {signals.map(({ img, imgAlt, cardLabel, cardSublabel, brand }) => (
            <div
              key={brand}
              className="relative overflow-hidden rounded-2xl aspect-5/3"
            >
              <Image
                src={img}
                alt={imgAlt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
              />
              {/* Gradient overlay — dark at bottom, transparent at top */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              {/* Bottom labels */}
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5">
                <div>
                  <p className="text-white text-sm font-semibold leading-snug">{cardLabel}</p>
                  <p className="text-white/55 text-xs mt-0.5">{cardSublabel}</p>
                </div>
                <span className="text-white/40 text-[10px] font-bold tracking-[0.18em] uppercase self-end">
                  {brand}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bullet descriptions — same 3-col grid, below the images */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
          {signals.map(({ brand, title, body }) => (
            <div key={brand} className="flex items-start gap-3 px-1 py-4">
              <span className="mt-[5px] w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
              <div>
                <h3 className="text-base font-bold text-gray-900">{title}</h3>
                <p className="mt-1 text-sm text-gray-500 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
