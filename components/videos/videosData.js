/*
 * Content for /videos — the HRS YouTube gallery.
 *
 * ── Adding a video ────────────────────────────────────────────────────────
 * Append an entry to VIDEOS (newest first — the list renders in this order).
 *
 *   id          the YouTube ID. Watch page: youtu.be/<id>  ·  Short: youtube.com/shorts/<id>
 *   kind        'video' for normal 16:9 uploads, 'short' for vertical Shorts.
 *               This drives the tile shape and the player aspect ratio.
 *   title       exactly as it reads on YouTube.
 *   blurb       one line shown on the tile itself. Keep it under ~90 chars.
 *   description the full write-up shown in the lightbox and in the VideoObject
 *               structured data. Blank lines separate paragraphs.
 *   publishedAt YYYY-MM-DD — required by Google for video rich results.
 *   duration    ISO 8601, e.g. PT1M30S. Optional but worth filling in.
 *   highlights  optional bullet list ("In this video:").
 *   tags        optional chips — plain words, not hashtags.
 *   thumb       optional override. Leave it out and we derive the thumbnail
 *               from YouTube (16:9 maxres for videos, vertical for Shorts).
 *   feature     optional `true` to stretch a landscape video to three columns
 *               on wide screens. Worth using once there are enough tiles to
 *               fill the row it sits in; otherwise leave it off.
 * ──────────────────────────────────────────────────────────────────────────
 */

export const CHANNEL_URL = 'https://www.youtube.com/@HRSrobot';
export const CHANNEL_NAME = 'Humanoid Robot Solutions';

export const VIDEOS = [
  {
    id: '92QKOfoIWhE',
    kind: 'short',
    title: 'Humanoid Robot Walks Like a Human 🤖 | Future of Robotics',
    blurb: 'The X2 walking — smooth, balanced and unmistakably human-like.',
    description: `The AGIBOT X2 humanoid robot showcases its smooth, human-like walking ability.

Advances in robotics and artificial intelligence are making humanoid robots more capable than ever. From realistic movement to real-world applications, this is a glimpse into the future of technology.`,
    publishedAt: '2026-07-10',
    duration: 'PT11S',
    tags: ['AGIBOT X2', 'Bipedal walking', 'Robotics'],
  },
  {
    id: 'PwhWwQEnI4A',
    kind: 'short',
    title: 'Humanoid Robot Gets Up Like a Human 🤯',
    blurb: 'Face-down to standing again, with a recovery that reads as unnervingly human.',
    description: `Watch the AGIBOT X2 humanoid robot get up from a face-down position using a remarkably human-like movement.

Robotics and AI are advancing faster than ever, and this is another impressive example of how natural humanoid motion is becoming.`,
    publishedAt: '2026-07-10',
    duration: 'PT9S',
    tags: ['AGIBOT X2', 'Whole-body control', 'Robotics'],
  },
  {
    id: 'Luajud8XRJY',
    kind: 'video',
    title: 'Generative AI Teaches a Humanoid Robot to Move Like a Human | AGIBOT X2',
    blurb: 'Human motion captured, understood by generative AI, replayed by the X2 — no hand-coded programming.',
    description: `See how generative AI is transforming the way humanoid robots learn. In this demo, human movement is captured and transferred directly onto the AGIBOT X2 humanoid robot — no traditional programming required.

A performer carries out a series of natural human movements while being recorded. That footage is processed using advanced generative AI, which analyses and understands each action before converting it into motion commands for the AGIBOT X2 humanoid robot. The robot then reproduces the same movements with remarkable accuracy, showing how human skills can be transferred to machines without hand-coded programming.

This is a glimpse into the future of embodied AI, where robots learn from people, adapt more quickly, and become capable of supporting industries ranging from manufacturing and logistics to healthcare and hospitality.`,
    publishedAt: '2026-07-18',
    duration: 'PT17S',
    highlights: [
      'How generative AI captures human motion',
      'Converting movement into robot motion commands',
      'The AGIBOT X2 humanoid reproducing human actions',
      'What embodied AI means for industry',
    ],
    tags: ['Generative AI', 'Embodied AI', 'AGIBOT X2', 'Motion transfer', 'Robotics'],
  },
];

/** Poster frame for a tile. Shorts have a vertical original-aspect-ratio
 *  thumbnail (`oardefault`); normal uploads use the 1280×720 `maxresdefault`. */
export function thumbnailUrl(video) {
  if (video.thumb) return video.thumb;
  const file = video.kind === 'short' ? 'oardefault' : 'maxresdefault';
  return `https://i.ytimg.com/vi/${video.id}/${file}.jpg`;
}

/** Fallback poster — `maxresdefault`/`oardefault` are not generated for every
 *  upload, but `hqdefault` always is. */
export function fallbackThumbnailUrl(video) {
  return `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;
}

export function watchUrl(video) {
  return video.kind === 'short'
    ? `https://www.youtube.com/shorts/${video.id}`
    : `https://www.youtube.com/watch?v=${video.id}`;
}

/** youtube-nocookie keeps the page free of tracking cookies until play. */
export function embedUrl(video, { autoplay = false } = {}) {
  const params = new URLSearchParams({ rel: '0', modestbranding: '1', playsinline: '1' });
  if (autoplay) params.set('autoplay', '1');
  return `https://www.youtube-nocookie.com/embed/${video.id}?${params}`;
}

export const PREVIEW_ORIGIN = 'https://www.youtube-nocookie.com';

/** Silent looping player used for the hover preview on a tile — no controls,
 *  no keyboard, no chrome. `playlist` is what makes a single video loop, and
 *  `enablejsapi` lets the tile wait for the player to actually start playing
 *  before it fades the preview in over the poster. */
export function previewEmbedUrl(video, origin) {
  const params = new URLSearchParams({
    autoplay: '1',
    mute: '1',
    loop: '1',
    playlist: video.id,
    controls: '0',
    disablekb: '1',
    fs: '0',
    iv_load_policy: '3',
    modestbranding: '1',
    rel: '0',
    playsinline: '1',
    enablejsapi: '1',
  });
  if (origin) params.set('origin', origin);
  return `${PREVIEW_ORIGIN}/embed/${video.id}?${params}`;
}

// Tile geometry. The grid's row unit is half a column (see .video-mosaic in
// globals.css) and every tile is three rows tall, so a landscape video reads
// as exactly two Shorts side by side and rows pack with no holes.
const TILE_CLASSES = {
  feature: 'col-span-2 row-span-3 xl:col-span-3',
  wide: 'col-span-2 row-span-3',
  portrait: 'col-span-1 row-span-3',
};

/**
 * Decorates VIDEOS with a tile size. Shorts are portrait, landscape uploads
 * take a double-width tile, and `feature: true` stretches one to three columns
 * once the gallery is full enough to carry a hero tile.
 */
export function getTiles(videos = VIDEOS) {
  return videos.map((video) => {
    const size = video.kind === 'short' ? 'portrait' : video.feature ? 'feature' : 'wide';
    return { ...video, size, className: TILE_CLASSES[size] };
  });
}

/** "PT1M30S" → "1:30" for the tile badge. */
export function formatDuration(iso) {
  if (!iso) return null;
  const match = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/.exec(iso);
  if (!match) return null;
  const [h, m, s] = [match[1], match[2], match[3]].map((v) => Number(v || 0));
  const mm = h ? String(m).padStart(2, '0') : String(m);
  return `${h ? `${h}:` : ''}${mm}:${String(s).padStart(2, '0')}`;
}

/** "2026-07-18" → "18 July 2026" */
export function formatDate(iso) {
  if (!iso) return null;
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
