// Content for the /robots-v2 concept. Imagery and film stills are official
// AGIBOT partner media (public/images/robots-v2 + public/videos/robots-v2).

export const WORK_STEPS = [
  {
    eyebrow: 'Force control',
    title: 'Hands that know their strength.',
    body: 'Torque sensing in every joint gives G2 ±0.5N force control — precise enough to lift a phone from a desk without marking it.',
    chips: ['±0.5N force control', 'Sub-millimetre assembly'],
    image: '/images/robots-v2/detail-hand.webp',
    alt: 'Close-up of the AGIBOT G2 hand picking up a smartphone',
  },
  {
    eyebrow: '7-DOF arms',
    title: 'Arms built like instruments.',
    body: 'A human-like cross-wrist design with torque sensing in every joint and a rated 5 kg per arm — engineered for repetitive precision, not just demos.',
    chips: ['7-DOF per arm', '5 kg rated capacity', 'Torque sensing throughout'],
    image: '/images/robots-v2/detail-arms.webp',
    alt: 'Cutaway render of the AGIBOT G2 force-controlled arms',
  },
  {
    eyebrow: 'Interaction',
    title: 'A face people can talk to.',
    body: 'Multi-user conversation, eye-gaze tracking and expressive animations mean G2 holds its own in a busy showroom as comfortably as on a line.',
    chips: ['Multi-user conversation', 'Eye-gaze tracking', 'Expressive animations'],
    image: '/images/robots-v2/detail-face.webp',
    alt: 'AGIBOT G2 face display answering a visitor question',
  },
  {
    eyebrow: 'Omnidirectional chassis',
    title: 'A base that never blocks the aisle.',
    body: 'Four steerable wheels rotate in place and move in any direction at up to 1.5 m/s — G2 repositions without turning circles.',
    chips: ['4-steerable-wheel design', 'In-place rotation', '1.5 m/s'],
    image: '/images/robots-v2/detail-chassis.webp',
    alt: 'Top-down view of the AGIBOT G2 omnidirectional chassis',
  },
];

export const INDUSTRIES = [
  {
    label: 'Manufacturing',
    caption: 'Machine tending on a live production line',
    video: '/videos/robots-v2/factory.mp4',
    poster: '/videos/robots-v2/factory-poster.webp',
  },
  {
    label: 'Visitor experience',
    caption: 'Guiding guests through a gallery',
    video: '/videos/robots-v2/gallery.mp4',
    poster: '/videos/robots-v2/gallery-poster.webp',
  },
  {
    label: 'Front of house',
    caption: 'Reception and concierge duties',
    video: '/videos/robots-v2/concierge.mp4',
    poster: '/videos/robots-v2/concierge-poster.webp',
  },
  {
    label: 'Workplace safety',
    caption: 'Collision detection around people and furniture',
    video: '/videos/robots-v2/office.mp4',
    poster: '/videos/robots-v2/office-poster.webp',
  },
  {
    label: 'Facilities',
    caption: 'Everyday upkeep tasks',
    image: '/images/robots-v2/scene-cleaning.webp',
    alt: 'AGIBOT G2 cleaning a glass door',
  },
];

export const X2_DETAILS = [
  { label: 'Neck', value: '2 DOF', image: '/images/robots-v2/x2-neck.webp', alt: 'AGIBOT X2 head and neck articulation' },
  { label: 'Waist', value: '3 DOF', image: '/images/robots-v2/x2-waist.webp', alt: 'AGIBOT X2 waist joint close-up' },
  { label: 'Single arm', value: '5–7 DOF', image: '/images/robots-v2/x2-blocks.webp', alt: 'AGIBOT X2 stacking blocks' },
  { label: 'Whole body', value: '25–30 DOF', image: '/images/robots-v2/x2-run.webp', alt: 'AGIBOT X2 running' },
];

export const SPEC_SHEETS = [
  {
    name: 'AGIBOT G2',
    tagline: 'Industrial-grade humanoid',
    rows: [
      ['Class', 'Industrial wheeled humanoid'],
      ['Degrees of freedom', '26 (7-DOF arm ×2)'],
      ['Arm payload', '5 kg per arm'],
      ['Force control', '±0.5N absolute accuracy'],
      ['Perception', 'Dual LiDAR · 360° + RGB-D'],
      ['Compute', 'Jetson T5000 · 2070 TFLOPS'],
      ['Build', 'IP42 · automotive-grade components'],
      ['Chassis', '4-steerable wheels · 1.5 m/s omnidirectional'],
      ['Power', 'Dual hot-swap batteries · 24/7'],
    ],
  },
  {
    name: 'AGIBOT X2',
    tagline: 'Interactive demonstration humanoid',
    rows: [
      ['Class', 'Bipedal interactive humanoid'],
      ['Height · weight', '131 cm · ~35 kg'],
      ['Degrees of freedom', '25 (X2 Ultra: 30)'],
      ['Walking speed', 'Up to 2 m/s'],
      ['Payload', '3 kg end payload'],
      ['Interaction', '30+ expressions · voice · touch'],
      ['Compute', 'Dual RK3588 (Ultra adds Orin NX)'],
      ['Battery', '500 Wh · ~2 h per session'],
      ['Training', '0-code skill training'],
    ],
  },
];
