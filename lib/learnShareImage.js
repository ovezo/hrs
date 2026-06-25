import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

/*
 * Shared 1200×630 social card for the Learn hub, used by both the hub
 * (`app/learn/opengraph-image.js`) and every article
 * (`app/learn/[slug]/opengraph-image.js`). Mirrors the site share card
 * (light background, HRS logo) but leads with the page title so cited or
 * shared links preview meaningfully.
 *
 * Runs in the Node.js runtime so it can read the logo from disk with `fs`.
 */

export const alt = 'HRS Learn — humanoid robots explained';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export async function createLearnCard({ title, category = 'Learn' }) {
  const logo = await readFile(join(process.cwd(), 'public/images/logo.png'));
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`;

  // Logo native 851×284 — keep aspect ratio.
  const logoWidth = 176;
  const logoHeight = Math.round((logoWidth * 284) / 851); // ≈ 59

  // Ease the title down a notch when it's long so it never overflows.
  const titleSize = title.length > 78 ? 52 : title.length > 52 ? 60 : 70;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          backgroundColor: '#ffffff',
          backgroundImage:
            'linear-gradient(120deg, #ffffff 0%, #ffffff 55%, #eef1f4 100%)',
        }}
      >
        {/* Top row — logo + Learn eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <img src={logoSrc} width={logoWidth} height={logoHeight} />
          <div style={{ display: 'flex', width: 2, height: 34, backgroundColor: '#d1d5db' }} />
          <div
            style={{
              display: 'flex',
              fontSize: 22,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: '#6b7280',
            }}
          >
            Learn
          </div>
        </div>

        {/* Title block */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 20,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color: '#d97706',
              marginBottom: 22,
            }}
          >
            {category}
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: titleSize,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: -1.5,
              color: '#0f172a',
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
          <div
            style={{
              marginTop: 30,
              width: 80,
              height: 6,
              borderRadius: 9999,
              backgroundColor: '#f59e0b',
            }}
          />
        </div>

        {/* Footer line */}
        <div style={{ display: 'flex', fontSize: 24, color: '#6b7280' }}>
          Humanoid Robot Solutions · UK
        </div>
      </div>
    ),
    { ...size }
  );
}
