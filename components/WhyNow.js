import Image from 'next/image';

const robots = [
  {
    name: 'AGIBOT G2',
    tagline: 'Industrial-grade humanoid',
    brand: 'AGIBOT',
    img: '/images/g2-wave.webp',
    imgAlt: 'AGIBOT G2 industrial humanoid robot on a mobile base, raising one hand',
    body: 'The industrial-grade interactive humanoid already working on factory floors — and the most current platform in our fleet. Sub-millimetre dual-arm precision and round-the-clock endurance make it built for real production work, and it is the robot you will see most across our research and media.',
    specs: [
      '7-DOF dual arms',
      '5 kg payload / arm',
      '±0.5N force control',
      '26-DOF body',
      'Jetson T5000 · 2070 TFLOPS',
      'Dual LiDAR · 360°',
      'Hot-swap batteries · 24/7',
      '1.5 m/s omnidirectional base',
    ],
  },
  {
    name: 'AGIBOT X2',
    tagline: 'Interactive demonstration humanoid',
    brand: 'AGIBOT',
    img: '/images/x2-walk.webp',
    imgAlt: 'AGIBOT X2 bipedal humanoid robot walking',
    body: 'A fully bipedal, half-size humanoid built for interaction and live demonstration — the robot we put in front of an audience. Expressive, agile and engaging, X2 brings humanoid AI to life in showrooms, at events and on-site across the UK.',
    specs: [
      '131 cm · 35 kg',
      'Bipedal · 25 DOF',
      '3 kg end payload',
      '2 m/s walking',
      '500 Wh · ~2h',
      '30+ expressions',
      '20+ agile motions',
      '0-code skill training',
    ],
  },
];

const partners = [
  {
    name: 'Keenon',
    sublabel: 'Service & commercial robotics',
    brand: 'KEENON',
    img: '/images/keenon-humanoid-robots.jpg',
    imgAlt: 'Keenon humanoid and service robots',
    objectPosition: '50% 58%',
  },
  {
    name: 'Unitree G1',
    sublabel: 'Humanoid platform',
    brand: 'UNITREE',
    img: '/images/unitree-g1.webp',
    imgAlt: 'Unitree G1 humanoid robot',
    objectPosition: 'center',
  },
  {
    name: 'Figure 02',
    sublabel: 'Humanoid platform',
    brand: 'FIGURE',
    img: '/images/figureai-robot.jpg',
    imgAlt: 'Figure 02 humanoid robot',
    objectPosition: 'center',
  },
];

export default function WhyNow() {
  return (
    <section id="robots" aria-label="Our Robots" className="bg-white py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">

        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-4">
            Our Robots
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
            The humanoids we deploy.
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            We are platform-agnostic — we select the right humanoid for each task. AGIBOT is our
            primary platform partner today, and the robots behind our showcases and live
            demonstrations.
          </p>
        </div>

        {/* Robot rows — alternating image / detail */}
        <div className="flex flex-col gap-16 md:gap-24">
          {robots.map(({ name, tagline, brand, img, imgAlt, body, specs }, i) => (
            <div
              key={name}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              {/* Image tile */}
              <div className="relative aspect-4/3 rounded-3xl overflow-hidden bg-gray-50 ring-1 ring-gray-100">
                <Image
                  src={img}
                  alt={imgAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                />
                <span className="absolute top-5 left-5 text-[10px] font-bold tracking-[0.18em] uppercase text-gray-400">
                  {brand}
                </span>
              </div>

              {/* Detail */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-amber-600">
                  {tagline}
                </p>
                <h3 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                  {name}
                </h3>
                <p className="mt-5 text-base text-gray-500 leading-relaxed">{body}</p>

                {/* Spec chips */}
                <ul className="mt-7 flex flex-wrap gap-2.5">
                  {specs.map((spec) => (
                    <li
                      key={spec}
                      className="inline-flex items-center gap-2 rounded-full bg-gray-50 ring-1 ring-gray-200 px-3.5 py-1.5 text-xs font-medium text-gray-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        {
        // {/* Other platform partners */}
        // <div className="mt-20 md:mt-28">
        //   <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-6">
        //     Other platform partners
        //   </p>
        //   <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
        //     {partners.map(({ name, sublabel, brand, img, imgAlt, objectPosition }) => (
        //       <div key={name} className="relative overflow-hidden rounded-2xl aspect-5/3">
        //         <Image
        //           src={img}
        //           alt={imgAlt}
        //           fill
        //           sizes="(max-width: 640px) 100vw, 33vw"
        //           className="object-cover"
        //           style={{ objectPosition }}
        //         />
        //         {/* Gradient overlay — dark at bottom, transparent at top */}
        //         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        //         {/* Bottom labels */}
        //         <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5">
        //           <div>
        //             <p className="text-white text-sm font-semibold leading-snug">{name}</p>
        //             <p className="text-white/55 text-xs mt-0.5">{sublabel}</p>
        //           </div>
        //           <span className="text-white/40 text-[10px] font-bold tracking-[0.18em] uppercase self-end">
        //             {brand}
        //           </span>
        //         </div>
        //       </div>
        //     ))}
        //   </div>
        // </div>
      }
      </div>
    </section>
  );
}
