'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  CHANNEL_NAME,
  embedUrl,
  fallbackThumbnailUrl,
  formatDate,
  formatDuration,
  PREVIEW_ORIGIN,
  previewEmbedUrl,
  thumbnailUrl,
  watchUrl,
} from '@/components/videos/videosData';

/** Hover previews are for mouse users who aren't asking for less motion —
 *  touch devices and reduced-motion visitors keep the still poster. */
function usePreviewAllowed() {
  const allowed = useRef(false);
  useEffect(() => {
    allowed.current =
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);
  return allowed;
}

function PlayGlyph({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M5 3.5v9l8-4.5-8-4.5z" />
    </svg>
  );
}

/** Poster frame. `maxresdefault`/`oardefault` are missing on some uploads, so
 *  a failed load quietly falls back to the always-present `hqdefault`. */
function Poster({ video, sizes, priority }) {
  const [src, setSrc] = useState(thumbnailUrl(video));
  return (
    <Image
      src={src}
      alt=""
      fill
      sizes={sizes}
      priority={priority}
      onError={() => setSrc(fallbackThumbnailUrl(video))}
      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
    />
  );
}

function Tile({ video, index, onOpen }) {
  // Double-width tiles have the room for a bigger caption; Shorts don't.
  const isFeature = video.size !== 'portrait';
  const sizes =
    video.size === 'portrait'
      ? '(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw'
      : '(max-width: 768px) 100vw, 75vw';

  const previewAllowed = usePreviewAllowed();
  const [preview, setPreview] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const frameRef = useRef(null);
  const revealing = useRef(false);
  const timers = useRef([]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  // A short dwell before mounting keeps a cursor sweeping across the grid from
  // spawning a player per tile.
  const startPreview = () => {
    if (!previewAllowed.current || preview) return;
    timers.current.push(setTimeout(() => setPreview(true), 400));
  };

  const stopPreview = () => {
    clearTimers();
    revealing.current = false;
    setPreview(false);
    setPreviewVisible(false);
  };

  useEffect(() => clearTimers, []);

  // YouTube throws up a control cluster for a moment when a player starts, so
  // reveal a beat after playback rather than on the first frame.
  const revealSoon = () => {
    if (revealing.current) return;
    revealing.current = true;
    timers.current.push(setTimeout(() => setPreviewVisible(true), 1200));
  };

  // The embed fires `load` long before it paints a frame, so fading in on load
  // shows a black rectangle over the poster. Instead, open the IFrame API
  // channel and wait for the player to report that it is actually playing.
  useEffect(() => {
    if (!preview) return undefined;

    const onMessage = (event) => {
      if (event.origin !== PREVIEW_ORIGIN || event.source !== frameRef.current?.contentWindow) {
        return;
      }
      try {
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        const state = data?.info?.playerState ?? (data?.event === 'onStateChange' ? data.info : null);
        if (state === 1) revealSoon();
      } catch {
        // Non-JSON chatter from the player — nothing to do.
      }
    };

    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [preview]);

  return (
    <li className={`${video.className} min-w-0`}>
      <button
        type="button"
        onClick={() => {
          stopPreview();
          onOpen(index);
        }}
        onMouseEnter={startPreview}
        onMouseLeave={stopPreview}
        aria-label={`Play: ${video.title}`}
        className="group relative block h-full w-full overflow-hidden bg-gray-900 text-left ring-1 ring-gray-200 transition-shadow duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
      >
        <Poster video={video} sizes={sizes} priority={index === 0} />

        {/* Muted looping preview. Sized to cover the tile so no letterboxing
            shows through, and click-through to the button underneath. */}
        {preview ? (
          <span
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 block overflow-hidden transition-opacity duration-700 ${
              previewVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <iframe
              ref={frameRef}
              src={previewEmbedUrl(video, window.location.origin)}
              title=""
              tabIndex={-1}
              allow="autoplay; encrypted-media"
              onLoad={(e) => {
                // Handshake that makes the player start posting state events,
                // plus a fallback in case those never arrive.
                e.currentTarget.contentWindow?.postMessage(
                  JSON.stringify({ event: 'listening' }),
                  PREVIEW_ORIGIN
                );
                timers.current.push(setTimeout(revealSoon, 2000));
              }}
              // Landscape players are overscanned and bottom-anchored so
              // YouTube's own title/channel bar — which returns on every loop —
              // stays cropped off above the tile.
              className={`absolute left-1/2 -translate-x-1/2 border-0 ${
                video.kind === 'short'
                  ? 'aspect-9/16 top-1/2 h-auto w-full -translate-y-1/2'
                  : 'aspect-video bottom-0 h-[124%] w-auto'
              }`}
            />
          </span>
        ) : null}

        {/* Tile chrome. Sits above the player, and steps back to 40% once the
            preview is actually rolling so the footage carries the tile. */}
        <div
          className={`pointer-events-none absolute inset-0 z-10 transition-opacity duration-700 ${
            previewVisible ? 'opacity-40' : 'opacity-100'
          }`}
        >
          {/* Legibility wash — deeper at the bottom where the caption sits. */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5 transition-opacity duration-300 group-hover:from-black/90" />

          {/* Format badge */}
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 bg-black/55 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
            <span className="h-1.5 w-1.5 bg-amber-500" />
            {video.kind === 'short' ? 'Short' : 'Video'}
            {formatDuration(video.duration) ? (
              <span className="font-sans tracking-normal text-white/70">
                {formatDuration(video.duration)}
              </span>
            ) : null}
          </span>

          {/* Play affordance */}
          <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/40 backdrop-blur-sm transition-all duration-300 group-hover:bg-amber-500 group-hover:ring-amber-500">
            <PlayGlyph className="ml-0.5 h-3.5 w-3.5" />
          </span>

          {/* Caption */}
          <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
            <h3
              className={`font-bold leading-snug text-white ${
                isFeature ? 'text-lg md:text-2xl' : 'text-sm md:text-base'
              }`}
            >
              {video.title}
            </h3>
            <p
              className={`mt-1.5 leading-relaxed text-white/70 ${
                isFeature ? 'line-clamp-2 text-sm md:text-base' : 'line-clamp-2 text-xs md:text-sm'
              }`}
            >
              {video.blurb}
            </p>
          </div>
        </div>
      </button>
    </li>
  );
}

function Lightbox({ video, onClose, onPrev, onNext, hasPrev, hasNext }) {
  const closeRef = useRef(null);
  const isShort = video.kind === 'short';

  useEffect(() => {
    closeRef.current?.focus();
  }, [video.id]);

  // Escape closes, arrows walk the gallery, and the page behind stays put.
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose, onPrev, onNext]);

  const meta = [formatDate(video.publishedAt), formatDuration(video.duration)].filter(Boolean);

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto overscroll-contain bg-black/80 p-4 backdrop-blur-sm sm:items-center sm:p-8">
      <button
        type="button"
        aria-label="Close video"
        tabIndex={-1}
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-lightbox-title"
        className={`relative my-auto w-full bg-white shadow-2xl ${isShort ? 'max-w-4xl' : 'max-w-5xl'}`}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 md:px-6">
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-amber-600">
            {video.kind === 'short' ? 'HRS SHORT' : 'HRS VIDEO'}
          </span>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={onPrev}
              disabled={!hasPrev}
              aria-label="Previous video"
              className="flex h-8 w-8 items-center justify-center text-gray-400 transition-colors hover:text-gray-900 disabled:pointer-events-none disabled:opacity-25"
            >
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={onNext}
              disabled={!hasNext}
              aria-label="Next video"
              className="flex h-8 w-8 items-center justify-center text-gray-400 transition-colors hover:text-gray-900 disabled:pointer-events-none disabled:opacity-25"
            >
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              ref={closeRef}
              onClick={onClose}
              aria-label="Close video"
              className="ml-1 flex h-8 w-8 items-center justify-center text-gray-400 transition-colors hover:text-gray-900"
            >
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className={isShort ? 'gap-8 p-4 md:flex md:p-8' : 'p-4 md:p-8'}>
          {/* Player — vertical for Shorts, 16:9 otherwise. */}
          <div
            className={
              isShort
                ? 'mx-auto w-full max-w-[300px] shrink-0 md:mx-0 md:max-w-[320px]'
                : 'w-full'
            }
          >
            <div
              className={`relative w-full overflow-hidden bg-black ${
                isShort ? 'aspect-9/16' : 'aspect-video'
              }`}
            >
              <iframe
                key={video.id}
                src={embedUrl(video, { autoplay: true })}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>

          {/* Copy */}
          <div className={isShort ? 'mt-6 min-w-0 flex-1 md:mt-0' : 'mt-6'}>
            <h2
              id="video-lightbox-title"
              className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl"
            >
              {video.title}
            </h2>

            {meta.length ? (
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-gray-400">
                {meta.join(' · ')}
              </p>
            ) : null}

            <div className="mt-5 space-y-4 text-base leading-relaxed text-gray-500">
              {video.description.split('\n\n').map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            {video.highlights?.length ? (
              <>
                <p className="mt-8 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                  In this video
                </p>
                <ul className="mt-3 space-y-2">
                  {video.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-amber-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            ) : null}

            {video.tags?.length ? (
              <ul className="mt-8 flex flex-wrap gap-2">
                {video.tags.map((tag) => (
                  <li
                    key={tag}
                    className="bg-gray-50 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-gray-500 ring-1 ring-gray-200"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            ) : null}

            <a
              href={watchUrl(video)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-900 underline decoration-amber-500 underline-offset-4 hover:decoration-amber-600"
            >
              Watch on YouTube — {CHANNEL_NAME}
              <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M4 12L12 4M6 4h6v6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VideoMosaic({ tiles }) {
  const [openIndex, setOpenIndex] = useState(null);
  const triggerRef = useRef(null);

  const open = useCallback((index) => {
    triggerRef.current = document.activeElement;
    setOpenIndex(index);
  }, []);

  const close = useCallback(() => {
    setOpenIndex(null);
    triggerRef.current?.focus?.();
  }, []);

  const step = useCallback(
    (delta) =>
      setOpenIndex((current) => {
        if (current === null) return current;
        const next = current + delta;
        return next >= 0 && next < tiles.length ? next : current;
      }),
    [tiles.length]
  );

  const prev = useCallback(() => step(-1), [step]);
  const next = useCallback(() => step(1), [step]);

  return (
    <>
      <ul className="video-mosaic" role="list">
        {tiles.map((video, index) => (
          <Tile key={video.id} video={video} index={index} onOpen={open} />
        ))}
      </ul>

      {openIndex !== null ? (
        <Lightbox
          video={tiles[openIndex]}
          onClose={close}
          onPrev={prev}
          onNext={next}
          hasPrev={openIndex > 0}
          hasNext={openIndex < tiles.length - 1}
        />
      ) : null}
    </>
  );
}
