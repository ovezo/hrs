import NavbarV2 from '@/components/v2/NavbarV2';
import HeroV2 from '@/components/v2/HeroV2';
import Statement from '@/components/v2/Statement';
import TwoPillars from '@/components/v2/TwoPillars';
import RobotShowcase from '@/components/v2/RobotShowcase';
import IntelligenceShowcase from '@/components/v2/IntelligenceShowcase';
import SolutionsTeaser from '@/components/v2/SolutionsTeaser';
import Partners from '@/components/v2/Partners';
import ClosingCTA from '@/components/v2/ClosingCTA';

/*
  ── /home-v2 ───────────────────────────────────────────────────────────
  Media-forward alternate home page. Same brand palette (black/white/gray +
  amber) and Inter type as v1, but a completely different, video-led
  structure inspired by figure.ai / unitree.com / thehumanoid.ai.

  PLACEHOLDER MEDIA — every slot now has its OWN clip (swap them one by one).
  All live under /public; brands are mixed for variety (mockup only):
    /videos/hero.mp4          hero (desktop)     figure.ai — robot walking / handoff
    /videos/hero-mobile.mp4   hero (mobile)      figure.ai — torso close-up
    /videos/body.mp4          "Body" tile        figure.ai — torso close-up
    /videos/mind.mp4          "Mind" tile        figure.ai — robot face
    /videos/intelligence.mp4  intelligence sec.  unitree   — dexterous manipulation
    /videos/solutions.mp4     solutions band     agibot G2 — kitchen task
    /videos/cta.mp4           closing CTA        agibot G2 — gallery (people)
    /videos/posters/*.jpg     poster frames (auto-extracted per clip)
    /images/v2/robot-base.png      robot section   Agibot G2 still
    /images/v2/robot-bipedal.png   partners card   Agibot G2 still

  Spare/raw footage (unitree, more agibot, thehumanoid, extra stills) is kept
  for other designs under /videos/_raw and /images/v2 — not deleted.
  Note: thehumanoid.ai's hero clip was skipped (burned-in "KinetIQ" text).

  Marked noindex while it's a work-in-progress variant so it doesn't compete
  with the real "/" in search. Remove the `robots` override when it goes live.
  ────────────────────────────────────────────────────────────────────────
*/
export const metadata = {
  title: 'HRS — Humanoid Robot Solutions | The robot and the mind behind it',
  description:
    'Humanoid Robot Solutions builds the physical humanoid robot and the AI software that makes it work — deployed for real-world tasks, with partners including Agibot, Unitree and Keenon.',
  alternates: { canonical: '/home-v2' },
  robots: { index: false, follow: false },
};

export default function HomeV2() {
  return (
    <main>
      <NavbarV2 />
      <HeroV2 />
      <Statement />
      <TwoPillars />
      <RobotShowcase />
      <IntelligenceShowcase />
      <SolutionsTeaser />
      <Partners />
      <ClosingCTA />
    </main>
  );
}
