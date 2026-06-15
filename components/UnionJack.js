'use client';

import { useId } from 'react';

/**
 * Accurate Union Jack as an inline SVG (geometrically correct counterchange
 * via a clip path). Rendered inline so it inherits sizing from the wrapper and
 * stays crisp at any scale. `useId` gives each instance a unique clip-path id,
 * so multiple flags can live on the same page without colliding.
 */
export default function UnionJack({ className = '' }) {
  const id = `uj-${useId().replace(/[^a-zA-Z0-9]/g, '')}`;
  return (
    <svg viewBox="0 0 60 30" className={className} aria-hidden="true">
      <clipPath id={id}>
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath={`url(#${id})`} stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

/** Union Jack in a small rounded, ringed chip — the reusable flag accent. */
export function FlagChip({ className = 'h-4 w-[26px]' }) {
  return (
    <span className={`inline-flex overflow-hidden rounded-[3px] ring-1 ring-black/10 shadow-sm ${className}`}>
      <UnionJack className="h-full w-full" />
    </span>
  );
}
