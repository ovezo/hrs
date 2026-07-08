import Image from 'next/image';
import Link from 'next/link';
import { getContactEmail } from '@/lib/config';

/*
 * Lightweight, fully static header for the Learn hub. Unlike the homepage
 * Navbar (a client component with scroll-spy), this ships no client JS — the
 * Learn pages stay text-only and open instantly. Logo returns to the homepage;
 * the "Learn" link returns to the hub.
 */
export default function LearnHeader() {
  const contactEmail = getContactEmail();
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-4 md:px-8">
        <div className="flex items-center gap-3">
          <Link href="/" aria-label="HRS — Home" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="HRS — Humanoid Robot Solutions"
              width={120}
              height={40}
              style={{ height: '18px', width: 'auto' }}
              priority
            />
          </Link>
          <span aria-hidden="true" className="h-4 w-px bg-gray-300" />
          <Link
            href="/learn"
            className="text-sm font-semibold tracking-tight text-gray-900 hover:text-gray-600 transition-colors"
          >
            Learn
          </Link>
        </div>

        <a
          href={`/contact`}
          className="inline-flex items-center justify-center rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-700 transition-colors"
        >
          Book a Demo
        </a>
      </div>
    </header>
  );
}
