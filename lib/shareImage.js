import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

/*
 * Shared 1200×630 social share card, used by both `app/opengraph-image.js`
 * and `app/twitter-image.js`. Mirrors the hero section so a shared link
 * previews with the HRS logo, the tagline, and the branded robot.
 *
 * Light background on purpose: the logo ("HRS") and robot are dark/white
 * artwork on transparent backgrounds, so they read cleanly on light, not dark.
 *
 * Runs in the Node.js runtime (no `export const runtime`) so it can read the
 * brand assets from disk with `fs`. next/og ships its default font (Geist),
 * so no font files need to be loaded.
 */

export const alt =
  'HRS — Humanoid Robot Solutions. Intelligent humanoid robots for real-world work.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export async function createShareImage() {
  const [logo, robot] = await Promise.all([
    readFile(join(process.cwd(), 'public/images/logo.png')),
    readFile(join(process.cwd(), 'public/images/hero-robot.png')),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`;
  const robotSrc = `data:image/png;base64,${robot.toString('base64')}`;

  // logo native 851×284, robot native 941×1672 — keep aspect ratios.
  const logoWidth = 206;
  const logoHeight = Math.round((logoWidth * 284) / 851); // ≈ 69
  const robotHeight = 600;
  const robotWidth = Math.round((robotHeight * 941) / 1672); // ≈ 338

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          position: 'relative',
          backgroundColor: '#ffffff',
          backgroundImage:
            'linear-gradient(120deg, #ffffff 0%, #ffffff 50%, #eef1f4 100%)',
        }}
      >
        {/* Robot — anchored bottom-right, mirrors the hero */}
        <img
          src={robotSrc}
          width={robotWidth}
          height={robotHeight}
          style={{ position: 'absolute', right: 96, bottom: 0 }}
        />

        {/* Left content column */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
            width: 770,
            padding: '0 80px',
          }}
        >
          <img src={logoSrc} width={logoWidth} height={logoHeight} />

          <div
            style={{
              display: 'flex',
              marginTop: 46,
              fontSize: 62,
              lineHeight: 1.05,
              letterSpacing: -1.5,
              color: '#0f172a',
              maxWidth: 560,
            }}
          >
            Intelligent robots for real-world work.
          </div>

          {/* Amber accent rule */}
          <div
            style={{
              marginTop: 30,
              width: 72,
              height: 5,
              borderRadius: 9999,
              backgroundColor: '#f59e0b',
            }}
          />

          <div
            style={{
              display: 'flex',
              marginTop: 30,
              fontSize: 25,
              lineHeight: 1.4,
              color: '#6b7280',
              maxWidth: 520,
            }}
          >
            Deploying humanoid robots for UK manufacturing — task selection,
            factory trials and proven ROI.
          </div>

          <div
            style={{
              display: 'flex',
              marginTop: 42,
              fontSize: 21,
              letterSpacing: 1,
              color: '#9ca3af',
            }}
          >
            Reliable · Adaptive · Ready to Deploy
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
