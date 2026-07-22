import Link from 'next/link';
import { getBaseUrl } from '@/lib/config';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SectionHeader, Ticks } from '@/components/robots/v3/ui';
import VideoMosaic from '@/components/videos/VideoMosaic';
import {
  CHANNEL_NAME,
  CHANNEL_URL,
  VIDEOS,
  embedUrl,
  getTiles,
  thumbnailUrl,
  watchUrl,
} from '@/components/videos/videosData';

export const metadata = {
  title: 'Humanoid Robot Videos — HRS on YouTube | Humanoid Robot Solutions',
  description:
    'Watch HRS humanoid robots in motion: generative AI motion transfer onto the AGIBOT X2, human-like walking, whole-body recovery and more. Videos and Shorts from the HRS channel.',
  keywords: [
    'humanoid robot video',
    'humanoid robot demonstration video',
    'AGIBOT X2 video',
    'humanoid robot walking',
    'generative AI robot',
    'embodied AI demo',
    'robotics videos UK',
    'HRS YouTube',
  ],
  alternates: { canonical: '/videos' },
  openGraph: {
    type: 'website',
    title: 'Humanoid Robot Videos | HRS',
    description:
      'HRS humanoid robots in motion — generative AI motion transfer, human-like walking and whole-body control on the AGIBOT X2.',
    url: '/videos',
    siteName: 'HRS — Humanoid Robot Solutions',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Humanoid Robot Videos | HRS',
    description: 'HRS humanoid robots in motion — watch the demos.',
  },
};

function VideosHero({ videoCount, shortCount }) {
  return (
    <section className="relative bg-white pb-12 pt-32 md:pb-16 md:pt-40">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-end gap-8 px-6 md:grid-cols-[1fr_auto] md:gap-16 md:px-16">
        <div>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-600">
            Video Footages
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Humanoid robots, in motion.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-500">
            Every clip below is a real humanoid doing something real — motion learned from
            people, walking, balancing, recovering. Tap any tile to watch it here, with the
            full story of what you&apos;re looking at.{' '}
            <Link
              href="/contact"
              className="text-gray-900 underline decoration-amber-500 underline-offset-4 hover:decoration-amber-600"
            >
              Want to see it in person?
            </Link>
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 md:items-end">
          {/* <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray-400">
            {videoCount} {videoCount === 1 ? 'video' : 'videos'} · {shortCount}{' '}
            {shortCount === 1 ? 'short' : 'shorts'}
          </p> */}
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-900"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
            </svg>
            Subscribe on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}

function VideosCTA() {
  return (
    <section className="relative bg-gray-50 py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16">
        <div className="relative mx-auto max-w-3xl bg-white p-10 text-center ring-1 ring-gray-200 md:p-14">
          <Ticks />
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-600">
            SEE IT IN PERSON
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Better on your factory floor.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-500">
            Footage only goes so far. HRS runs hands-on humanoid demonstrations in live UK
            environments, so your team can stand next to the robot, interact with it and judge
            the fit for your own tasks.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-gray-900"
            >
              Book a Demo
            </Link>
            <Link
              href="/robots"
              className="inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 transition-colors hover:bg-gray-50"
            >
              Explore the robots
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function VideosPage() {
  const siteUrl = getBaseUrl();
  const tiles = getTiles();
  const videoCount = VIDEOS.filter((v) => v.kind === 'video').length;
  const shortCount = VIDEOS.filter((v) => v.kind === 'short').length;

  // One VideoObject per clip, wrapped in an ItemList so the gallery is
  // indexable as a video collection. uploadDate/thumbnailUrl/description all
  // mirror what the page actually shows.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${siteUrl}/videos#webpage`,
        url: `${siteUrl}/videos`,
        name: 'Humanoid Robot Videos — HRS on YouTube',
        description:
          'Videos and Shorts of HRS humanoid robots in motion, including generative AI motion transfer onto the AGIBOT X2.',
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#organization` },
        inLanguage: 'en-GB',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/videos#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Videos', item: `${siteUrl}/videos` },
        ],
      },
      {
        '@type': 'ItemList',
        '@id': `${siteUrl}/videos#list`,
        name: 'HRS humanoid robot videos',
        itemListElement: VIDEOS.map((video, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'VideoObject',
            '@id': `${siteUrl}/videos#${video.id}`,
            name: video.title,
            description: video.description.replace(/\n+/g, ' '),
            thumbnailUrl: [thumbnailUrl(video)],
            uploadDate: video.publishedAt,
            ...(video.duration ? { duration: video.duration } : {}),
            embedUrl: embedUrl(video),
            contentUrl: watchUrl(video),
            url: `${siteUrl}/videos#${video.id}`,
            publisher: { '@id': `${siteUrl}/#organization` },
            ...(video.tags?.length ? { keywords: video.tags.join(', ') } : {}),
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar showFlag />
      <main>
        <VideosHero videoCount={videoCount} shortCount={shortCount} />

        <section aria-label="Video gallery" className="bg-white pb-20 md:pb-28">
          <div className="mx-auto max-w-[1440px] px-6 md:px-16">
            <VideoMosaic tiles={tiles} />
          </div>
        </section>

        <section className="bg-white pb-20 md:pb-28">
          <div className="mx-auto max-w-[900px] px-6 md:px-16 text-center">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-600">
              More on the way
            </p>
          
            <p
              className="text-gray-500 mt-4 text-lg leading-relaxed"
            >
              New footage lands on the {CHANNEL_NAME} channel as robots come through the workshop — demonstrations, task trials and the odd short that speaks for itself.
            </p>
          </div>
        </section>

        <VideosCTA />
      </main>
      <Footer />
    </>
  );
}
