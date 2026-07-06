'use client';

import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '../hooks';

/** One-shot IntersectionObserver flag for reveal-on-scroll sections. */
export function useInView(threshold = 0.3) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

/**
 * Animated count-up from 0 to `target` once `active` turns true.
 * Returns the formatted current value. Jumps straight to the target when the
 * user prefers reduced motion.
 */
export function useCountUp(target, active, { duration = 1100, decimals = 0 } = {}) {
  const reduced = usePrefersReducedMotion();
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return undefined;
    started.current = true;
    if (reduced) {
      setValue(target);
      return undefined;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - t0) / duration);
      const eased = 1 - (1 - t) * (1 - t) * (1 - t);
      setValue(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration, reduced]);

  return value.toFixed(decimals);
}
