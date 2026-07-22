'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FlagChip } from '@/components/UnionJack';

const navLinks = [
  { label: 'Robots', href: '/robots' },
  { label: 'Products', href: '/products' },
  { label: 'About', id: 'about' },
  { label: 'Videos', href: '/videos' },
  { label: 'Learn', href: '/learn' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar({ showFlag = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  const closeMenu = () => setMenuOpen(false);

  // Logo: on the home page, smooth-scroll to the top; on any other route let the
  // <Link> navigate home normally. (It used to always preventDefault, so on
  // /contact, /learn, etc. clicking the logo did nothing but scroll.)
  const handleLogoClick = (e) => {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    closeMenu();
  };

  // Section links target home-page anchors. On home we smooth-scroll to the
  // section; on any other route we let the <Link> navigate to /#id instead.
  const scrollTo = (e, id) => {
    if (isHome) {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* ── Top bar ── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}>
        <nav
          aria-label="Main navigation"
          className="flex items-center justify-between px-6 md:px-16 py-5 md:py-6 max-w-[1440px] mx-auto"
        >
          {/* Logo (+ optional UK flag pill) */}
          <div className="flex items-center gap-3">
            <Link href="/" aria-label="HRS — Home" onClick={(e) => { if (isHome) { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); } closeMenu(); }}>
              <Image
                src="/images/logo.png"
                alt="HRS"
                width={120}
                height={40}
                style={{ height: '20px', width: 'auto' }}
                priority
              />
            </Link>
            {showFlag && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/60 ring-1 ring-black/10 backdrop-blur-sm px-2 py-1">
                <FlagChip className="h-3.5 w-[21px]" />
                <span className="text-[11px] font-semibold tracking-wide text-gray-700">UK</span>
              </span>
            )}
          </div>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 lg:gap-10" role="list">
            {navLinks.map(({ label, id, href, items }) => (
              <li key={id || href || label} className={items ? 'relative group' : undefined}>
                {items ? (
                  <>
                    <button
                      type="button"
                      className="flex items-center gap-1.5 text-sm font-medium text-gray-800 hover:text-gray-500 transition-colors duration-300 whitespace-nowrap"
                    >
                      {label}
                      <svg
                        className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180"
                        viewBox="0 0 12 12"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      <div className="min-w-[190px] rounded-2xl bg-white p-2 shadow-lg ring-1 ring-black/5">
                        {items.map((item) => (
                          <Link key={item.href} href={item.href} className="block rounded-xl px-4 py-2.5 hover:bg-gray-50">
                            <span className="block text-sm font-medium text-gray-800">{item.label}</span>
                            <span className="block text-xs text-gray-400">{item.note}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : href ? (
                  <Link
                    href={href}
                    className="text-sm font-medium text-gray-800 hover:text-gray-500 transition-colors duration-300 whitespace-nowrap"
                  >
                    {label}
                  </Link>
                ) : (
                  <Link
                    href={`/#${id}`}
                    onClick={(e) => scrollTo(e, id)}
                    className="text-sm font-medium text-gray-800 hover:text-gray-500 transition-colors duration-300 whitespace-nowrap"
                  >
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Hamburger / X — lines converge to same y-position */}
          <button
            type="button"
            className="md:hidden flex items-center justify-center w-10 h-10 -mr-2"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="relative block w-6 h-[14px]">
              <span className={`absolute left-0 h-[2px] w-6 rounded-full bg-gray-800 transition-all duration-300 ease-in-out ${menuOpen ? 'top-[6px] rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 top-[6px] h-[2px] w-6 rounded-full bg-gray-800 transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute left-0 h-[2px] rounded-full bg-gray-800 transition-all duration-300 ease-in-out ${menuOpen ? 'w-6 top-[6px] -rotate-45' : 'w-4 top-[12px]'}`} />
            </span>
          </button>
        </nav>
      </header>

      {/*
        ── Mobile menu ──────────────────────────────────────────────
        Always mounted so CSS transitions run on both open AND close.
        Same duration-300 ease-in-out as the hamburger → seamless.

        Closed: opacity-0, shifted up 10px, non-interactive
        Open:   opacity-100, natural position, interactive
        ─────────────────────────────────────────────────────────────
      */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        className={`md:hidden fixed top-0 left-0 right-0 z-40 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)]
          transition-all duration-300 ease-in-out
          ${menuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-3 pointer-events-none'
          }`}
      >
        <nav className="px-6 pt-[72px] pb-4 max-w-[1440px] mx-auto">
          <ul role="list">
            {navLinks.map(({ label, id, href, items }, i) => {
              const borderClass = i < navLinks.length - 1 ? 'border-b border-gray-100' : '';
              const linkClass = `flex items-center py-5 text-lg font-medium text-gray-900 hover:text-gray-500 transition-colors ${borderClass}`;
              return (
                <li key={id || href || label}>
                  {items ? (
                    <div className={borderClass}>
                      <p className="pt-5 pb-1 text-lg font-medium text-gray-900">{label}</p>
                      <ul className="pb-4" role="list">
                        {items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={closeMenu}
                              className="flex items-center gap-2.5 py-2.5 pl-1 text-base text-gray-600 hover:text-gray-900 transition-colors"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                              {item.label}
                              <span className="text-xs text-gray-400">{item.note}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : href ? (
                    <Link href={href} onClick={closeMenu} className={linkClass}>
                      {label}
                    </Link>
                  ) : isHome ? (
                    <a href={`#${id}`} onClick={(e) => scrollTo(e, id)} className={linkClass}>
                      {label}
                    </a>
                  ) : (
                    <Link href={`/#${id}`} onClick={closeMenu} className={linkClass}>
                      {label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
