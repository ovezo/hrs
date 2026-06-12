'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import SlideSection from './SlideSection';
import { getContactEmail } from '@/lib/config';

const BOOK_DEMO_URL = 'https://calendar.app.google/VHugirFzZa4sGwxi7';

/*
  ── /home-v3 shell ─────────────────────────────────────────────────────
  figure.ai-style full-screen scroll-snap deck. The <main> is its own
  scroll container (h-100dvh, snap-mandatory); each child is one 100dvh
  panel. A fixed overlay nav + right-side dot indicator ride on top.

  Explore buttons are placeholders (href="#") until dedicated pages exist.
  ────────────────────────────────────────────────────────────────────────
*/
const slides = [
  {
    id: 'hero',
    isHero: true,
    eyebrow: 'Physical robots · Real intelligence',
    title: 'Humanoid Robot Solutions',
    desc: 'We build humanoid robots that do real work — and the AI that makes them dependable.',
    detail:
      'Two sides of one company: an industrial-grade, general-purpose humanoid, and the data-processing software that runs it — perception, learning and control. We prove the value on your line before you commit.',
    src: '/videos/hero.mp4',
    mobileSrc: '/videos/hero-mobile.mp4',
    poster: '/videos/posters/hero.jpg',
    mobilePoster: '/videos/posters/hero-mobile.jpg',
  },
  {
    id: 'robot',
    eyebrow: 'The Robot',
    title: 'A humanoid built for real work.',
    desc: 'A general-purpose, industrial-grade humanoid that moves through your site and handles real parts.',
    detail:
      'Automotive-grade components and IP-rated protection. Force-controlled precision for sub-millimetre assembly and a delicate touch. It sees, hears and responds — and reinforcement-learned skills mean new tasks in days, not months. Built with Agibot, finished in HRS livery.',
    src: '/videos/solutions.mp4', // Agibot G2
    poster: '/videos/posters/solutions.jpg',
    explore: '#',
  },
  {
    id: 'intelligence',
    eyebrow: 'The Intelligence',
    title: 'The mind behind the machine.',
    desc: 'The AI data-processing software that turns a capable body into a dependable worker.',
    detail:
      'Vision-language perception of parts, task state and exceptions. Skills trained in simulation and sharpened on real shifts. Real-time control that turns what it sees into safe, repeatable action — and knows when to hand back to a person, so the same robot gets better the longer it runs.',
    src: '/videos/mind.mp4',
    poster: '/videos/posters/mind.jpg',
    explore: '#',
  },
  {
    id: 'solutions',
    eyebrow: 'Solutions',
    title: 'Built for the work people already do.',
    desc: 'Repetitive, bounded tasks around the stations, routes and cells you already run.',
    detail:
      'Machine tending, line-side material movement, packing, kitting, in-line inspection and internal logistics. We match the robot to the task and prove it on a real line — measured on cycle time, uptime and ROI — before any capital commitment.',
    src: '/videos/intelligence.mp4',
    poster: '/videos/posters/intelligence.jpg',
    explore: '#',
  },
  {
    id: 'partners',
    eyebrow: 'Partners',
    title: 'The right robot for the task.',
    desc: 'Platform-agnostic, led by our main hardware partner, Agibot.',
    detail:
      'Agibot for industrial humanoids, Unitree for agile humanoids and quadrupeds, Keenon for service and logistics robots. We match the strongest platform to each job and add the HRS intelligence layer on top. Dedicated partner pages are on the way.',
    src: '/videos/cta.mp4', // Agibot G2
    poster: '/videos/posters/cta.jpg',
    explore: '#',
  },
  {
    id: 'contact',
    isContact: true,
    eyebrow: 'Get started',
    title: 'Put a humanoid to work.',
    desc: 'See the robot and the intelligence on a task that matters to you.',
    detail:
      'Real demonstration first, commitment second. We identify the right task, prove the value on your floor, then handle integration, safety and long-term support.',
    src: '/videos/body.mp4',
    poster: '/videos/posters/body.jpg',
  },
];

const navLinks = [
  { label: 'Robot', id: 'robot' },
  { label: 'Intelligence', id: 'intelligence' },
  { label: 'Solutions', id: 'solutions' },
  { label: 'Partners', id: 'partners' },
];

export default function HomeV3() {
  const containerRef = useRef(null);
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const contactEmail = getContactEmail();

  // Track the in-view panel for the dot indicator + active nav state.
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const panels = root.querySelectorAll('[data-index]');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number(e.target.dataset.index));
        });
      },
      { root, threshold: 0.55 }
    );
    panels.forEach((p) => io.observe(p));
    return () => io.disconnect();
  }, []);

  const scrollToIndex = (i) => {
    const root = containerRef.current;
    root?.querySelector(`[data-index="${i}"]`)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };
  const indexOfId = (id) => slides.findIndex((s) => s.id === id);

  return (
    <main
      ref={containerRef}
      className="h-[100dvh] overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-black overscroll-y-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {/* ── Overlay nav ── */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
        <nav className="relative flex items-center justify-between px-6 md:px-16 py-5 md:py-6 max-w-[1440px] mx-auto">
          <button
            type="button"
            onClick={() => scrollToIndex(0)}
            aria-label="HRS — top"
            className="cursor-pointer"
          >
            <Image
              src="/images/logo.png"
              alt="HRS"
              width={120}
              height={40}
              style={{ height: '20px', width: 'auto', filter: 'brightness(0) invert(1)' }}
              priority
            />
          </button>

          <ul className="hidden md:flex items-center gap-9">
            {navLinks.map((l) => (
              <li key={l.id}>
                <button
                  type="button"
                  onClick={() => scrollToIndex(indexOfId(l.id))}
                  className={`text-sm font-medium transition-colors cursor-pointer ${
                    active === indexOfId(l.id) ? 'text-white' : 'text-white/75 hover:text-white'
                  }`}
                >
                  {l.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href={BOOK_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-white text-gray-900 px-5 py-2.5 text-sm font-semibold hover:bg-white/90 transition-colors"
              >
                Book Demo
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            type="button"
            className="md:hidden flex items-center justify-center w-10 h-10 -mr-2"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="relative block w-6 h-[14px]">
              <span className={`absolute left-0 h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${menuOpen ? 'top-[6px] rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 top-[6px] h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute left-0 h-[2px] rounded-full bg-white transition-all duration-300 ${menuOpen ? 'w-6 top-[6px] -rotate-45' : 'w-4 top-[12px]'}`} />
            </span>
          </button>
        </nav>
      </header>

      {/* ── Mobile menu ── */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="px-6 pt-24 max-w-[1440px] mx-auto">
          <ul>
            {navLinks.map((l) => (
              <li key={l.id}>
                <button
                  type="button"
                  onClick={() => scrollToIndex(indexOfId(l.id))}
                  className="flex w-full items-center py-5 text-lg font-medium text-white/90 hover:text-white border-b border-white/10 cursor-pointer"
                >
                  {l.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href={BOOK_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white text-gray-900 px-6 py-4 text-sm font-semibold"
              >
                Book a Demo
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* ── Dot indicator ── */}
      <div className="fixed right-5 md:right-7 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col gap-3.5">
        {slides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to ${s.eyebrow}`}
            aria-current={active === i}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              active === i ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* ── Panels ── */}
      {slides.map((s, i) => (
        <SlideSection
          key={s.id}
          index={i}
          slide={s}
          contactEmail={contactEmail}
          bookDemoUrl={BOOK_DEMO_URL}
          onScrollNext={() => scrollToIndex(i + 1)}
          hasNext={i < slides.length - 1}
        />
      ))}
    </main>
  );
}
