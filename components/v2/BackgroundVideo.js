'use client';

import { useEffect, useRef } from 'react';

/*
  ── BackgroundVideo ────────────────────────────────────────────────────
  Reusable muted, looping background video used across the media-forward
  pages (/home-v2 and the full-screen /home-v3).

  • Always paints the `poster` first, so there is never a black flash while
    the MP4 streams in.
  • Plays ONLY while in view (IntersectionObserver) and pauses when scrolled
    away — so a page full of full-screen clips never decodes them all at
    once. This also means offscreen clips can ship with preload="metadata".
  • Honours `prefers-reduced-motion`: if the visitor asked for less motion we
    never play — the poster frame stays as a still image.

  Drop a replacement MP4 at the same /public path to swap footage later.
  ────────────────────────────────────────────────────────────────────────
*/
export default function BackgroundVideo({
  src,
  poster,
  className = '',
  objectPosition = 'center',
  preload = 'metadata',
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reduced = mq.matches;

    const safePlay = () => {
      const p = v.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (reduced || !entry || !entry.isIntersecting) {
          v.pause();
          return;
        }
        safePlay();
      },
      { threshold: 0.25 }
    );
    io.observe(v);

    const onMq = () => {
      reduced = mq.matches;
      if (reduced) v.pause();
    };
    mq.addEventListener('change', onMq);

    return () => {
      io.disconnect();
      mq.removeEventListener('change', onMq);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={`h-full w-full object-cover ${className}`}
      style={{ objectPosition }}
      poster={poster}
      muted
      loop
      playsInline
      preload={preload}
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
