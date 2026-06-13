import HomeV4 from '@/components/v4/HomeV4';

/*
  ── /home-v4 ───────────────────────────────────────────────────────────
  A scroll-snap deck like /home-v3 — but with the right-side dot indicator
  removed and a mix of section types inspired by figure.ai/helix and
  thehumanoid.ai: dark full-screen video panels punctuating light text,
  image and 4–5-clip grid sections (a full video at least every 2–3
  sections). Same brand as the rest of the site (Inter, black/white/gray +
  amber).

  Server component holds the metadata; the interactive snap deck lives in the
  client <HomeV4 /> shell. Placeholder footage is shared with /home-v2 and
  /home-v3 (Agibot G2 + figure.ai + Unitree clips under /public/videos) and
  will be swapped per-slot before launch.

  noindex while it's a work-in-progress variant — remove when it goes live.
  ────────────────────────────────────────────────────────────────────────
*/
export const metadata = {
  title: 'HRS — Humanoid Robot Solutions | The robot and the mind behind it',
  description:
    'Humanoid Robot Solutions builds the physical humanoid robot and the AI software that makes it work — deployed for real-world tasks, with partners including Agibot, Unitree and Keenon.',
  alternates: { canonical: '/home-v4' },
  robots: { index: false, follow: false },
};

export default function HomeV4Page() {
  return <HomeV4 />;
}
