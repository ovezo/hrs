import HomeV3 from '@/components/v3/HomeV3';

/*
  ── /home-v3 ───────────────────────────────────────────────────────────
  Full-screen, scroll-snapping deck inspired by figure.ai's UI: one 100dvh
  video panel per section, minimal text, one action each. Same brand as the
  rest of the site (Inter, black/white/gray + amber).

  Server component holds the metadata; the interactive snap/nav/dots live in
  the client <HomeV3 /> shell. Placeholder footage is shared with /home-v2
  (Agibot G2 + figure.ai + Unitree clips under /public/videos).

  noindex while it's a work-in-progress variant — remove when it goes live.
  ────────────────────────────────────────────────────────────────────────
*/
export const metadata = {
  title: 'HRS — Humanoid Robot Solutions | The robot and the mind behind it',
  description:
    'Humanoid Robot Solutions builds the physical humanoid robot and the AI software that makes it work — deployed for real-world tasks, with partners including Agibot, Unitree and Keenon.',
  alternates: { canonical: '/home-v3' },
  robots: { index: false, follow: false },
};

export default function HomeV3Page() {
  return <HomeV3 />;
}
