'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/*
  ── NavbarV2 ───────────────────────────────────────────────────────────
  Media-forward variant used only by the /home-v2 route. Unlike the v1
  Navbar (dark text, transparent → white), this one sits over a full-bleed
  video hero, so it starts WHITE (logo + links inverted) and flips to the
  solid light brand bar once the user scrolls past the hero.

  Same palette, same Inter type, same rounded-full CTA — just colour-aware.
  v1's Navbar is left untouched.
  ────────────────────────────────────────────────────────────────────────
*/

const navLinks = [
  { label: 'Robot', id: 'robot' },
  { label: 'Intelligence', id: 'intelligence' },
  { label: 'Solutions', id: 'solutions' },
  { label: 'Partners', id: 'partners' },
];

const BOOK_DEMO_URL = 'https://calendar.app.google/VHugirFzZa4sGwxi7';

export default function NavbarV2() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    closeMenu();
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // At the top, over dark hero footage → light treatment. Once scrolled or
  // the mobile sheet is open → solid white brand bar with dark text.
  const onLight = scrolled || menuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          onLight ? 'bg-white shadow-sm' : 'bg-transparent'
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="flex items-center justify-between px-6 md:px-16 py-5 md:py-6 max-w-[1440px] mx-auto"
        >
          {/* Logo — inverted to white while over the hero video */}
          <Link
            href="/"
            aria-label="HRS — Home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              closeMenu();
            }}
          >
            <Image
              src="/images/logo.png"
              alt="HRS"
              width={120}
              height={40}
              style={{
                height: '20px',
                width: 'auto',
                filter: onLight ? 'none' : 'brightness(0) invert(1)',
                transition: 'filter 300ms ease-in-out',
              }}
              priority
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-9" role="list">
            {navLinks.map(({ label, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => scrollTo(e, id)}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    onLight
                      ? 'text-gray-800 hover:text-gray-500'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={BOOK_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                  onLight
                    ? 'bg-gray-900 text-white hover:bg-gray-700'
                    : 'bg-white text-gray-900 hover:bg-white/90'
                }`}
              >
                Book Demo
              </a>
            </li>
          </ul>

          {/* Hamburger / X */}
          <button
            type="button"
            className="md:hidden flex items-center justify-center w-10 h-10 -mr-2"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu-v2"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="relative block w-6 h-[14px]">
              <span
                className={`absolute left-0 h-[2px] w-6 rounded-full transition-all duration-300 ease-in-out ${
                  onLight ? 'bg-gray-800' : 'bg-white'
                } ${menuOpen ? 'top-[6px] rotate-45' : 'top-0'}`}
              />
              <span
                className={`absolute left-0 top-[6px] h-[2px] w-6 rounded-full transition-all duration-300 ease-in-out ${
                  onLight ? 'bg-gray-800' : 'bg-white'
                } ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
              />
              <span
                className={`absolute left-0 h-[2px] rounded-full transition-all duration-300 ease-in-out ${
                  onLight ? 'bg-gray-800' : 'bg-white'
                } ${menuOpen ? 'w-6 top-[6px] -rotate-45' : 'w-4 top-[12px]'}`}
              />
            </span>
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu-v2"
        aria-hidden={!menuOpen}
        className={`md:hidden fixed top-0 left-0 right-0 z-40 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)]
          transition-all duration-300 ease-in-out
          ${
            menuOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-3 pointer-events-none'
          }`}
      >
        <nav className="px-6 pt-[72px] pb-5 max-w-[1440px] mx-auto">
          <ul role="list">
            {navLinks.map(({ label, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => scrollTo(e, id)}
                  className="flex items-center py-5 text-lg font-medium text-gray-900 hover:text-gray-500 transition-colors border-b border-gray-100"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={BOOK_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gray-900 text-white px-6 py-4 text-sm font-semibold hover:bg-gray-700 transition-colors"
              >
                Book Demo
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
