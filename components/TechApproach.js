import Image from 'next/image';

const pillars = [
  {
    num: '01',
    title: 'Vision-Language-Action models',
    body: 'Our robots reason about their environment, understand spoken or written commands, and translate that into precise physical movement — replacing rigid scripted routines.',
    img: '/images/pillar-vla.png',
    fit: 'contain',
  },
  {
    num: '02',
    title: 'Motion capture & egocentric data',
    body: 'Our team physically performs tasks in motion-capture suits, generating thousands of hours of egocentric data that teaches our robots genuine human movement.',
    img: '/images/pillar-mocap.png',
    fit: 'cover',
  },
  {
    num: '03',
    title: 'Neuro-symbolic AI & imitation learning',
    body: 'Robots learn by watching humans demonstrate tasks, then combine imitation learning with neuro-symbolic AI — so they grasp why a task is done and adapt when conditions change.',
    img: '/images/pillar-imitation.png',
    fit: 'contain',
  },
  {
    num: '04',
    title: 'Digital twins & simulation at scale',
    body: 'Before a robot reaches your floor, it has trained across millions of scenario variations in physics-based digital twins — reducing risk and accelerating deployment.',
    img: '/images/pillar-digital-twin.jpg',
    fit: 'cover',
  },
  {
    num: '05',
    title: 'Deployment in real UK environments',
    body: 'We put humanoids to work in live UK environments — from manufacturing and pharmaceuticals to hospitality, defence, electronics and automotive — through hands-on demonstrations.',
    img: '/images/pillar-deployment.jpg',
    fit: 'cover',
  },
];

export default function TechApproach() {
  return (
    <section
      id="how-it-works"
      aria-label="Bringing AI to Life"
      className="relative py-24 md:py-32 bg-center"
      style={{
        backgroundImage: 'url(/images/robot-ai-vision.png)',
        backgroundSize: 'auto 100%',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgb(249,250,251)',
      }}
    >
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            'linear-gradient(to right, rgb(249,250,251) 65%, rgba(249,250,251,0.9) 78%, rgba(249,250,251,0.5) 90%, transparent 100%)',
        }}
      />
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            'linear-gradient(to right, rgb(249,250,251) 40%, rgba(249,250,251,0.9) 55%, rgba(249,250,251,0.5) 72%, rgba(249,250,251,0.15) 88%, transparent 100%)',
        }}
      />
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16">

        {/* Title + description */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
            Bringing AI to Life
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
            The age of physical AI is here.
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            And it is moving faster than most people realise. At the heart of the shift are
            Vision-Language-Action models that let robots interpret what they see and hear and turn
            it into action — robots that understand intent, not just instructions. Five capabilities
            sit behind every HRS deployment.
          </p>
        </div>

        {/* Pillar cards — image on top, text below */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {pillars.map(({ num, title, body, img, fit }) => (
            <article
              key={num}
              className="flex flex-col rounded-2xl bg-white ring-1 ring-gray-200 overflow-hidden"
            >
              <div className={`relative aspect-video ${fit === 'contain' ? 'bg-gray-50 border-b border-gray-100' : ''}`}>
                <Image
                  src={img}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={fit === 'contain' ? 'object-contain p-4' : 'object-cover object-center'}
                />
              </div>

              <div className="p-6">
                <span className="text-[11px] font-bold tracking-[0.2em] text-amber-600">{num}</span>
                <h3 className="mt-1.5 text-lg font-semibold text-gray-900 leading-snug">{title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{body}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
