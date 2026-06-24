import Link from 'next/link';

export const metadata = {
  title: 'Page not found — HRS',
  robots: { index: false, follow: false },
};

/*
  ── 404 — Page Not Found ─────────────────────────────────────────────────
  Root not-found.js: catches every unmatched URL across the app. Next.js
  returns a 404 status and auto-injects <meta name="robots" content="noindex">,
  so this page is never indexed. Background mirrors the End-to-End Adoption
  section (TheGap) — same image, right-anchored, full height, with a
  left-to-right fade so the copy stays readable.
  ─────────────────────────────────────────────────────────────────────────
*/
export default function NotFound() {
  return (
    <main
      className="relative min-h-screen flex items-center bg-center md:bg-right"
      style={{
        backgroundImage: 'url(/images/manufacturers_are_interested.png)',
        backgroundSize: 'auto 100%',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgb(249,250,251)',
      }}
    >
      {/* Left-fade overlay — mobile */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            'linear-gradient(to right, rgba(249,250,251,0.92) 0%, rgba(249,250,251,0.88) 62%, rgba(249,250,251,0.55) 82%, transparent 100%)',
        }}
      />
      {/* Left-fade overlay — desktop */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            'linear-gradient(to right, rgba(249,250,251,0.9) 0%, rgba(249,250,251,0.86) 38%, rgba(249,250,251,0.6) 58%, rgba(249,250,251,0.2) 80%, transparent 95%)',
        }}
      />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
            Error 404
          </p>
          <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight">
            Page not found
          </h1>
          <p className="mt-6 text-lg text-gray-500 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you
            back to humanoid robot solutions for UK industry.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-gray-900 transition-colors"
            >
              Return to homepage
            </Link>
          </div>

          {/* Divider accent — matches the End-to-End Adoption section */}
          <div className="mt-12 w-16 h-1 bg-gray-900 rounded-full" />
        </div>
      </div>
    </main>
  );
}
