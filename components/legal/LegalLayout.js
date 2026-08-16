import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/**
 * Shared shell for the policy pages. Deliberately plain — these exist to be
 * read and cited, not to sell anything.
 */
export default function LegalLayout({ title, updated, breadcrumb, children }) {
  return (
    <>
      <Navbar showFlag />
      <div className="flex min-h-screen flex-col bg-white">
        <main className="flex-1">
          <div className="mx-auto max-w-3xl px-6 py-16 md:px-8 md:py-24">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400">
              <Link href="/" className="transition-colors hover:text-gray-600">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-600">{breadcrumb}</span>
            </nav>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-sm text-gray-400">Last updated {updated}</p>

            <div className="legal-prose mt-12 text-gray-600">{children}</div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
