'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import VideoSection from './VideoSection';
import MediaGridSection from './MediaGridSection';
import FeatureSection from './FeatureSection';
import SolutionsSection from './SolutionsSection';
import PartnersSection from './PartnersSection';
import { getContactEmail } from '@/lib/config';

const BOOK_DEMO_URL = 'https://calendar.app.google/VHugirFzZa4sGwxi7';

/*
  ── /home-v4 shell ─────────────────────────────────────────────────────
  A figure.ai / thehumanoid.ai-style scroll-snap deck. Keeps v3's snap
  scrolling (the <main> is its own snap-mandatory scroll container) but
  DROPS the right-side dot indicator and mixes section types:

    • dark, full-bleed VIDEO panels (the cinematic punctuation)
    • light MEDIA GRID panels (4–5 looping clips on one screen)
    • light FEATURE panels (text + image)
    • light SOLUTIONS / PARTNERS text panels

  Rhythm: a full-screen video lands at least every 2–3 sections (here at
  index 0, 3, 6, 8). The fixed overlay nav swaps between white (over the dark
  video panels) and dark (over the light panels) by tracking the in-view
  section. Explore buttons are placeholders (href="#") until dedicated pages
  exist.
  ────────────────────────────────────────────────────────────────────────
*/
const sections = [
  {
    type: 'video',
    id: 'hero',
    dark: true,
    variant: 'hero',
    eyebrow: 'Physical robots · Real intelligence',
    title: 'Humanoid Robot Solutions',
    desc: 'We build humanoid robots that do real work — and the AI that makes them dependable.',
    src: '/videos/hero.mp4',
    mobileSrc: '/videos/hero-mobile.mp4',
    poster: '/videos/posters/hero.jpg',
    mobilePoster: '/videos/posters/hero-mobile.jpg',
  },
  {
    type: 'feature',
    id: 'thesis',
    dark: false,
    mediaSide: 'right',
    eyebrow: 'Who we are',
    title: 'Two sides of one company.',
    body: 'We make the physical humanoid — industrial-grade and general-purpose — and the AI data-processing software that turns it into a dependable worker: perception, learning and control, tuned to the job in front of it.',
    media: [
      {
        src: '/images/v2/robot-base.png',
        alt: 'HRS humanoid robot on its mobile base',
        fit: 'contain',
        ratio: '3 / 4',
        caption: 'The robot',
      },
      {
        src: '/images/v2/cosmic-humanoid.jpg',
        alt: 'The AI intelligence layer that runs the robot',
        fit: 'cover',
        ratio: '3 / 4',
        caption: 'The intelligence',
      },
    ],
  },
  {
    type: 'mediaGrid',
    id: 'capabilities',
    dark: true,
    eyebrow: 'Capabilities',
    title: 'One body, many jobs.',
    intro:
      'A general-purpose humanoid that walks, sees and manipulates real parts — then learns the next task.',
    tiles: [
      { label: 'Locomotion', sub: 'Walks human spaces', src: '/videos/body.mp4', poster: '/videos/posters/body.jpg' },
      { label: 'Manipulation', sub: 'Force-controlled', src: '/videos/intelligence.mp4', poster: '/videos/posters/intelligence.jpg' },
      { label: 'Perception', sub: 'Sees, hears, responds', src: '/videos/mind.mp4', poster: '/videos/posters/mind.jpg' },
      { label: 'Real work', sub: 'On the line', src: '/videos/solutions.mp4', poster: '/videos/posters/solutions.jpg' },
      { label: 'Deployment', sub: 'Proven on your floor', src: '/videos/cta.mp4', poster: '/videos/posters/cta.jpg' },
    ],
  },
  {
    type: 'feature',
    id: 'intelligence',
    dark: false,
    mediaSide: 'left',
    eyebrow: 'The Intelligence',
    title: 'The mind behind the machine.',
    body: 'The AI data-processing software that turns a capable body into a dependable worker — and gets better the longer it runs.',
    bullets: [
      {
        title: 'Perception',
        body: 'Vision-language understanding of parts, task state, quality and exceptions — situational awareness on a live line.',
      },
      {
        title: 'Learning from data',
        body: 'Skills trained in simulation and sharpened on real shifts — every deployment feeds the next.',
      },
      {
        title: 'Control & decisioning',
        body: 'Turns perception into safe, repeatable action — and knows when to hand back to a person.',
      },
    ],
    media: [
      {
        src: '/images/v2/robot-dark.png',
        alt: 'Humanoid robot driven by the HRS intelligence layer',
        fit: 'contain',
        ratio: '4 / 3',
        caption: 'Sense → decide → act',
      },
    ],
  },
  {
    type: 'video',
    id: 'robot',
    dark: true,
    explore: '#',
    eyebrow: 'The Robot',
    title: 'A humanoid built for real work.',
    desc: 'Automotive-grade components, IP-rated protection and force-controlled precision — finished in HRS livery, built with Agibot.',
    src: '/videos/solutions.mp4',
    poster: '/videos/posters/solutions.jpg',
  },
  {
    type: 'solutions',
    id: 'solutions',
    dark: false,
    eyebrow: 'Solutions',
    title: 'Start where the value is clearest.',
    intro:
      'Repetitive, bounded tasks around the stations, routes and cells you already run — where a humanoid pays back fastest.',
  },
  {
    type: 'video',
    id: 'inaction',
    dark: true,
    explore: '#',
    eyebrow: 'In the field',
    title: 'Proven on a real line first.',
    desc: 'A real demonstration on your floor — measured on cycle time, uptime and ROI — before any capital commitment.',
    src: '/videos/body.mp4',
    poster: '/videos/posters/body.jpg',
  },
  {
    type: 'partners',
    id: 'partners',
    dark: false,
    eyebrow: 'Partners',
    title: 'The right robot for the task.',
    intro:
      'Platform-agnostic and led by our main hardware partner, Agibot — we match the strongest platform to each job and add the HRS intelligence layer on top.',
  },
  {
    type: 'video',
    id: 'contact',
    dark: true,
    variant: 'contact',
    eyebrow: 'Get started',
    title: 'Put a humanoid to work.',
    desc: 'See the robot and the intelligence on a task that matters to you.',
    src: '/videos/cta.mp4',
    poster: '/videos/posters/cta.jpg',
  },
];

const navLinks = [
  { label: 'Robot', id: 'robot' },
  { label: 'Intelligence', id: 'intelligence' },
  { label: 'Solutions', id: 'solutions' },
  { label: 'Partners', id: 'partners' },
];

export default function HomeV4() {
  const containerRef = useRef(null);
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const contactEmail = getContactEmail();

  // Track the in-view panel to drive the active nav state + nav colour theme.
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
  const indexOfId = (id) => sections.findIndex((s) => s.id === id);

  // White nav over the dark video panels, dark nav over the light panels.
  const dark = !!sections[active]?.dark;

  return (
    <main
      ref={containerRef}
      className="h-[100dvh] overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-white overscroll-y-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {/* ── Overlay nav ── */}
      <header className="fixed top-0 inset-x-0 z-50">
        {dark && (
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
        )}
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
              style={{
                height: '20px',
                width: 'auto',
                filter: dark ? 'brightness(0) invert(1)' : 'none',
                transition: 'filter 300ms ease',
              }}
              priority
            />
          </button>

          <ul className="hidden md:flex items-center gap-9">
            {navLinks.map((l) => {
              const on = active === indexOfId(l.id);
              return (
                <li key={l.id}>
                  <button
                    type="button"
                    onClick={() => scrollToIndex(indexOfId(l.id))}
                    className={`text-sm font-medium transition-colors cursor-pointer ${
                      dark
                        ? on
                          ? 'text-white'
                          : 'text-white/75 hover:text-white'
                        : on
                          ? 'text-gray-900'
                          : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    {l.label}
                  </button>
                </li>
              );
            })}
            <li>
              <a
                href={BOOK_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  dark
                    ? 'bg-white text-gray-900 hover:bg-white/90'
                    : 'bg-gray-900 text-white hover:bg-gray-700'
                }`}
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
              <span className={`absolute left-0 h-[2px] w-6 rounded-full transition-all duration-300 ${dark ? 'bg-white' : 'bg-gray-900'} ${menuOpen ? 'top-[6px] rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 top-[6px] h-[2px] w-6 rounded-full transition-all duration-300 ${dark ? 'bg-white' : 'bg-gray-900'} ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute left-0 h-[2px] rounded-full transition-all duration-300 ${dark ? 'bg-white' : 'bg-gray-900'} ${menuOpen ? 'w-6 top-[6px] -rotate-45' : 'w-4 top-[12px]'}`} />
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

      {/* ── Panels ── */}
      {sections.map((s, i) => {
        const common = { index: i, id: s.id, eyebrow: s.eyebrow, title: s.title };
        switch (s.type) {
          case 'video':
            return (
              <VideoSection
                key={s.id}
                {...common}
                desc={s.desc}
                src={s.src}
                mobileSrc={s.mobileSrc}
                poster={s.poster}
                mobilePoster={s.mobilePoster}
                variant={s.variant}
                explore={s.explore}
                contactEmail={contactEmail}
                bookDemoUrl={BOOK_DEMO_URL}
                onScrollNext={() => scrollToIndex(i + 1)}
                hasNext={i < sections.length - 1}
              />
            );
          case 'mediaGrid':
            return <MediaGridSection key={s.id} {...common} intro={s.intro} tiles={s.tiles} />;
          case 'feature':
            return (
              <FeatureSection
                key={s.id}
                {...common}
                body={s.body}
                bullets={s.bullets}
                media={s.media}
                mediaSide={s.mediaSide}
                cta={s.cta}
              />
            );
          case 'solutions':
            return <SolutionsSection key={s.id} {...common} intro={s.intro} />;
          case 'partners':
            return <PartnersSection key={s.id} {...common} intro={s.intro} />;
          default:
            return null;
        }
      })}
    </main>
  );
}
