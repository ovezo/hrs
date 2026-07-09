// Content for /robots-v3 — the high-tech "fleet dossier" concept.
// Extended figures sourced from agibot.com product pages and launch coverage
// (2026-07-06). Spec rows with a numeric `value` get an animated count-up;
// rows with `text` render as-is.

export const HERO = {
  bootline: 'HRS // FLEET DOSSIER — UNITS ONLINE: 02',
  title: 'Know the machines.',
  sub: 'Every subsystem, every number — the two AGIBOT platforms HRS deploys, documented the way engineers read them.',
  stats: [
    // { label: 'Units', value: 2 },
    { label: 'Combined DOF', value: 51 },
    { label: 'Max payload', value: 10, unit: 'kg' },
    { label: 'Top speed', value: 1.8, unit: 'm/s', decimals: 1 },
  ],
};

export const G2_DOSSIER = {
  id: 'unit-01',
  unit: '01',
  name: 'AGIBOT G2',
  role: 'Industrial humanoid — production floors',
  image: '/images/g2-left.webp',
  imageAlt: 'AGIBOT G2 industrial humanoid with both arms extended forward',
  imageAspect: '1197/1600',
  heightMm: 1800,
  heightNote: 'max, adjustable',
  groups: [
    {
      code: 'SYS 01',
      name: 'Manipulation',
      desc: 'Dual force-controlled arms rated for real assembly work — delicate enough for cabling, strong enough for totes.',
      detailImg: '/images/robots-v2/detail-hand.webp',
      detailAlt: 'Close-up of the AGIBOT G2 dexterous hand',
      specs: [
        { label: 'Arm DOF', value: 7, unit: '× 2' },
        { label: 'Payload per arm', value: 5, unit: 'kg' },
        { label: 'Dual-arm lift', value: 10, unit: 'kg' },
        { label: 'Force resolution', value: 0.5, unit: 'N', prefix: '±', decimals: 1 },
        { label: 'Assembly precision', text: 'Sub-millimetre' },
      ],
    },
    {
      code: 'SYS 02',
      name: 'Perception',
      desc: 'Full-surround sensing tuned for busy floors — G2 tracks people, plant and parts all the way around itself.',
      detailImg: '/images/robots-v2/detail-face.webp',
      detailAlt: 'AGIBOT G2 head with sensor array and display face',
      specs: [
        { label: 'LiDAR', text: 'Dual 3D · 360°' },
        { label: 'Cameras', text: 'RGB-D + stereo array' },
        { label: 'Gaze tracking', text: 'Multi-user' },
        { label: 'Conversation', text: 'Multi-party, on-device' },
      ],
    },
    {
      code: 'SYS 03',
      name: 'Compute',
      desc: 'Datacentre-class inference carried onboard, with a dedicated co-processor for the housekeeping.',
      detailImg: '/images/robots-v2/detail-arms.webp',
      detailAlt: 'AGIBOT G2 arm joints and torso detail',
      specs: [
        { label: 'Primary', text: 'NVIDIA Jetson T5000' },
        { label: 'AI throughput', value: 2070, unit: 'TFLOPS' },
        { label: 'Co-processor', text: 'Rhino R1' },
        { label: 'Base compute', value: 500, unit: 'TOPS' },
        { label: 'Deployment', text: 'Genie RL · OTA' },
      ],
    },
    {
      code: 'SYS 04',
      name: 'Mobility & power',
      desc: 'Omnidirectional, height-adaptive and never off shift — batteries swap hot so the line keeps moving.',
      detailImg: '/images/robots-v2/detail-chassis.webp',
      detailAlt: 'AGIBOT G2 omnidirectional wheeled chassis',
      specs: [
        { label: 'Top speed', value: 1.5, unit: 'm/s', decimals: 1 },
        { label: 'Drive', text: '4-wheel steer · omni' },
        { label: 'Max height', value: 180, unit: 'cm' },
        { label: 'Mass', value: 185, unit: 'kg' },
        { label: 'Batteries', text: 'Dual hot-swap' },
        { label: 'Runtime', value: 4, unit: 'h / swap' },
        { label: 'Protection', text: 'IP42 · automotive-grade' },
      ],
    },
  ],
};

export const X2_DOSSIER = {
  id: 'unit-02',
  unit: '02',
  name: 'AGIBOT X2',
  role: 'Interactive humanoid — people-facing work',
  image: '/images/x2-hero.webp',
  imageAlt: 'AGIBOT X2 bipedal humanoid walking mid-stride',
  imageAspect: '898/1400',
  heightMm: 1310,
  heightNote: 'fixed',
  variant:
    'X2 Ultra option — 30 DOF · 7-DOF arms · Orin NX (157 TOPS) · 3D LiDAR + RGB-D · auto-charging dock',
  groups: [
    {
      code: 'SYS 01',
      name: 'Form & structure',
      desc: 'A half-scale bipedal frame that reads as friendly, with the joint count of a much bigger machine.',
      detailImg: '/images/robots-v2/x2-blocks.webp',
      detailAlt: 'AGIBOT X2 handling stacked blocks',
      specs: [
        { label: 'Height', value: 131, unit: 'cm' },
        { label: 'Mass', value: 35, unit: 'kg' },
        { label: 'Total DOF', value: 25 },
        { label: 'Arms', text: '5-DOF × 2' },
        { label: 'Waist', text: '3-DOF' },
        { label: 'Legs', text: '6-DOF × 2' },
        { label: 'Arm reach', value: 558, unit: 'mm' },
      ],
    },
    {
      code: 'SYS 02',
      name: 'Locomotion',
      desc: 'Genuinely bipedal — a humanoid gait with a repertoire that ranges from careful walking to full dance routines.',
      detailImg: '/images/robots-v2/x2-run.webp',
      detailAlt: 'AGIBOT X2 running',
      specs: [
        { label: 'Top walk speed', value: 1.8, unit: 'm/s', decimals: 1 },
        { label: 'Typical pace', text: '≤ 0.8 m/s' },
        { label: 'Gait', text: 'Bipedal, humanoid' },
        { label: 'Repertoire', text: '20+ agile motions' },
        { label: 'Peak payload', value: 3, unit: 'kg' },
      ],
    },
    {
      code: 'SYS 03',
      name: 'Interaction',
      desc: 'Cameras, microphones, touch and light — X2 is built to hold attention and hold a conversation.',
      detailImg: '/images/robots-v2/x2-neck.webp',
      detailAlt: 'AGIBOT X2 neck articulation',
      specs: [
        { label: 'Camera', text: 'Interactive RGB' },
        { label: 'Audio', text: 'Mic array + wireless mic' },
        { label: 'Touch', text: 'Head sensor' },
        { label: 'Display', text: 'Screen + light rings' },
        { label: 'Expressions', value: 30, unit: '+' },
      ],
    },
    {
      code: 'SYS 04',
      name: 'Power & compute',
      desc: 'A swappable 500 Wh pack and twin RK3588s keep a session running for around two hours between charges.',
      detailImg: '/images/robots-v2/x2-waist.webp',
      detailAlt: 'AGIBOT X2 waist articulation',
      specs: [
        { label: 'Battery', value: 500, unit: 'Wh' },
        { label: 'Runtime', text: '≈ 2 h @ 0.5 m/s' },
        { label: 'Recharge', value: 1.5, unit: 'h', decimals: 1 },
        { label: 'Compute', text: 'RK3588 × 2' },
        { label: 'Connectivity', text: 'Wi-Fi · BT · OTA' },
        { label: 'Operating temp', text: '−10 → 40 °C' },
      ],
    },
  ],
};

export const MATRIX = [
  {
    code: 'MOD 01',
    title: 'Embodied AI',
    body: 'GO-1 (Genie Operator-1), a generalist vision-language-action model, drives both platforms.',
    items: ['ViLA architecture', 'Learns from demonstration', 'Generalises across tasks'],
  },
  {
    code: 'MOD 02',
    title: 'Data',
    body: 'Trained against AgiBot World — over a million real-world manipulation episodes, open-sourced.',
    items: ['1M+ episodes', 'Long-horizon tasks', 'Real scenes, not sim only'],
  },
  {
    code: 'MOD 03',
    title: 'Training',
    body: '0-code teaching plus Genie RL refinement puts new tasks on the floor in hours, not months.',
    items: ['Teleop demonstration', 'RL refinement', 'No code at the line'],
  },
  {
    code: 'MOD 04',
    title: 'Safety',
    body: 'Force-limited contact and full-surround awareness, in a chassis built to automotive grades.',
    items: ['±0.5N force limits', '360° LiDAR awareness', 'IP42 protection'],
  },
  {
    code: 'MOD 05',
    title: 'Fleet ops',
    body: 'Designed to run shifts: batteries swap hot, software ships over the air, health is monitored remotely.',
    items: ['Hot-swap batteries', 'OTA updates', 'Remote monitoring'],
  },
  {
    code: 'MOD 06',
    title: 'Integration',
    body: 'The HRS layer — we assess the task, trial on your floor, then train your operators to own it.',
    items: ['Task assessment', 'On-site trials', 'Operator training & support'],
  },
];

export const COMPARE = {
  note: 'G2 swaps batteries hot, so in practice it runs continuously.',
  rows: [
    { label: 'Top speed', unit: 'm/s', g2: 1.5, x2: 1.8, max: 2, decimals: 1 },
    { label: 'Payload', unit: 'kg', g2: 10, x2: 3, max: 10 },
    { label: 'Degrees of freedom', unit: 'DOF', g2: 26, x2: 25, max: 30 },
    { label: 'Height', unit: 'cm', g2: 180, x2: 131, max: 200 },
    { label: 'Mass', unit: 'kg', g2: 185, x2: 35, max: 200 },
    { label: 'Runtime per battery', unit: 'h', g2: 4, x2: 2, max: 4 },
  ],
};

export const FEEDS = [
  {
    label: 'Machine tending',
    video: '/videos/robots-v2/factory.mp4',
    poster: '/videos/robots-v2/factory-poster.webp',
  },
  {
    label: 'Guided tours',
    video: '/videos/robots-v2/gallery.mp4',
    poster: '/videos/robots-v2/gallery-poster.webp',
  },
  {
    label: 'Front of house',
    video: '/videos/robots-v2/concierge.mp4',
    poster: '/videos/robots-v2/concierge-poster.webp',
  },
  {
    label: 'Workplace safety',
    video: '/videos/robots-v2/office.mp4',
    poster: '/videos/robots-v2/office-poster.webp',
  },
];

export const TIMELINE = [
  { when: '2023', what: 'AGIBOT founded in Shanghai by ex-Huawei engineers Peng Zhihui and Deng Taihua.' },
  { when: '2024', what: 'AgiBot World open-sourced — 1M+ real-world manipulation episodes.' },
  { when: 'Jan 2025', what: '1,000th general-purpose robot rolls off the line.' },
  { when: 'Mar 2025', what: 'GO-1 (Genie Operator-1) embodied foundation model announced.' },
  { when: 'Oct 2025', what: 'G2 launches — industrial-grade, 100% automotive-grade components.' },
  { when: 'Mar 2026', what: '10,000th robot produced. From 1,000 to 10,000 in fifteen months.' },
];

export const TIMELINE_NOTE =
  'AGIBOT is the primary platform HRS deploys — and we stay platform-agnostic where a task demands something different.';
