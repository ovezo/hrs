import Image from 'next/image';

export default function V2Hero() {
  return (
    <section className="relative h-[92vh] min-h-[560px] bg-white">
      <Image
        src="/images/robots-v2/hero-banner.webp"
        alt="AGIBOT G2 humanoid robot waving against an open sky"
        fill
        preload
        sizes="100vw"
        className="object-cover object-[70%_center]"
      />
      {/* Light wash so the copy stays readable over the photo */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-white via-white/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 pb-16 md:pb-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
            Our robots · AGIBOT platform
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.02]">
            Humanoids, at work.
          </h1>
          <p className="mt-6 max-w-xl text-lg md:text-xl text-gray-600 leading-relaxed">
            From the production line to the showroom — the AGIBOT platforms HRS deploys
            across the UK, shown doing the jobs they were built for.
          </p>
        </div>
      </div>
    </section>
  );
}
