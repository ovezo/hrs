import Image from 'next/image';

/*
  ── FeatureSection (v4) ─────────────────────────────────────────────────
  A LIGHT, text-led section with supporting image(s) — the "some only text
  with some images" pattern. Used for the thesis (a two-up diptych) and the
  intelligence deep-dive (one image + a bullet list). `mediaSide` flips the
  layout for rhythm.

  Locked to one screen (h-100dvh, overflow-hidden); media is capped at a
  viewport-relative height so the row always fits the viewport.

  Each `media` item declares its own `fit`:
    contain → robot cutout floated on a soft light panel (radial glow)
    cover   → full-bleed photo / render
  ────────────────────────────────────────────────────────────────────────
*/
export default function FeatureSection({
  index,
  id,
  eyebrow,
  title,
  body,
  bullets,
  media = [],
  mediaSide = 'right',
  cta,
}) {
  const textFirst = mediaSide === 'right';
  const pair = media.length > 1;

  return (
    <section
      data-index={index}
      id={id}
      aria-label={eyebrow}
      className="relative h-[100dvh] w-full snap-start snap-always overflow-hidden bg-white flex items-center"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-16 py-14 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* ── Text ── */}
          <div className={textFirst ? 'lg:order-1' : 'lg:order-2'}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              {eyebrow}
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl lg:leading-[1.08] font-bold text-gray-900 tracking-tight">
              {title}
            </h2>
            {body && (
              <p className="mt-5 max-w-xl text-base lg:text-lg text-gray-500 leading-relaxed">{body}</p>
            )}
            {bullets && (
              <ul className="mt-7 flex flex-col gap-5">
                {bullets.map((b) => (
                  <li key={b.title} className="flex items-start gap-4">
                    <span className="mt-[7px] w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                    <div>
                      <h3 className="text-base font-bold text-gray-900">{b.title}</h3>
                      <p className="mt-1 text-sm text-gray-500 leading-relaxed">{b.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            {cta && (
              <div className="mt-8">
                <a
                  href={cta.href}
                  {...(cta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors"
                >
                  {cta.label}
                </a>
              </div>
            )}
          </div>

          {/* ── Media (hidden on mobile when the panel is bullet-heavy, so it
                always fits one screen; the diptych thesis keeps its images) ── */}
          <div className={`${textFirst ? 'lg:order-2' : 'lg:order-1'} ${bullets ? 'hidden lg:block' : ''}`}>
            <div className={`grid gap-4 ${pair ? 'grid-cols-2' : 'grid-cols-1'}`}>
              {media.map((m) => {
                const contain = m.fit === 'contain';
                return (
                  <figure
                    key={m.src}
                    className={`relative w-full max-h-[34vh] lg:max-h-[60vh] overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.10)] ${
                      contain ? 'bg-gradient-to-b from-gray-100 to-gray-50' : 'bg-gray-900'
                    }`}
                    style={{ aspectRatio: m.ratio || (pair ? '3 / 4' : '4 / 3') }}
                  >
                    {contain && (
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            'radial-gradient(60% 55% at 50% 45%, rgba(255,255,255,0.9), rgba(243,244,246,0) 70%)',
                        }}
                      />
                    )}
                    <Image
                      src={m.src}
                      alt={m.alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 30vw"
                      className={contain ? 'object-contain p-5 md:p-7' : 'object-cover'}
                    />
                    {m.caption && (
                      <figcaption className="absolute left-3 bottom-3">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold backdrop-blur ${
                            contain ? 'bg-white/85 text-gray-700 shadow-sm' : 'bg-black/55 text-white'
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                          {m.caption}
                        </span>
                      </figcaption>
                    )}
                  </figure>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
