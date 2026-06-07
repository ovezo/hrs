'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = ['Robots', 'About', 'Solutions', 'Contact'];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
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
          {/* Logo */}
          <Link href="/" aria-label="HRS — Home" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); closeMenu(); }}>
            <Image
              src="/images/logo.png"
              alt="HRS"
              width={120}
              height={40}
              style={{ height: '20px', width: 'auto' }}
              priority
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-10" role="list">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => scrollTo(e, link.toLowerCase())}
                  className="text-sm font-medium text-gray-800 hover:text-gray-500 transition-colors duration-300"
                >
                  {link}
                </a>
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
            {navLinks.map((link, i) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => scrollTo(e, link.toLowerCase())}
                  className={`flex items-center py-5 text-lg font-medium text-gray-900 hover:text-gray-500 transition-colors ${
                    i < navLinks.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
