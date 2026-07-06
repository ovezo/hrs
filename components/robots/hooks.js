'use client';

import { useEffect, useState } from 'react';

export const clamp01 = (v) => Math.min(1, Math.max(0, v));

/** Progress through the [a, b] sub-window of a 0..1 timeline. */
export const seg = (p, a, b) => clamp01((p - a) / (b - a));

export const easeOut = (t) => 1 - (1 - t) * (1 - t);

/**
 * Scroll progress (0..1) of a tall wrapper containing a sticky h-screen child.
 * 0 = wrapper top reaches viewport top (pin starts), 1 = wrapper bottom
 * reaches viewport bottom (pin releases).
 */
export function useScrollProgress(ref) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    let raf = 0;
    let last = -1;

    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const span = rect.height - window.innerHeight;
      const p = span > 0 ? clamp01(-rect.top / span) : 0;
      // Clamped sections that are off-screen keep returning the same 0 or 1,
      // so this skip means at most a couple of modules re-render per frame.
      if (p !== last) {
        last = p;
        setProgress(p);
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ref]);

  return progress;
}

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return reduced;
}
