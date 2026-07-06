// Content for the /robots showcase. Shared by the server page (JSON-LD) and
// the client scroll modules. Spec figures mirror components/WhyNow.js.

export const G2 = {
  id: 'agibot-g2',
  name: 'AGIBOT G2',
  brand: 'AGIBOT',
  tagline: 'Industrial-grade humanoid',
  blurb:
    'The industrial-grade humanoid already working on factory floors — dual-arm precision, 360° perception and hot-swap endurance built for real production work.',
  claim: 'Built for the factory floor.',
  images: {
    hero: '/images/g2-hero.webp',
    left: '/images/g2-left.webp',
    right: '/images/g2-right.webp',
    thumb: '/images/g2-wave.webp',
  },
  heroAlt: 'AGIBOT G2 industrial humanoid robot on an omnidirectional base, raising one hand',
  features: [
    {
      eyebrow: 'Manipulation',
      title: 'Two arms. Factory precision.',
      body: 'Dual 7-DOF arms lift 5 kg each and place parts with ±0.5N force control — delicate enough for cabling, strong enough for totes.',
      chips: ['7-DOF dual arms', '5 kg payload / arm', '±0.5N force control'],
    },
    {
      eyebrow: 'Perception',
      title: 'Sees the whole floor.',
      body: 'Dual LiDAR gives G2 360° awareness of the people and plant around it, with an onboard Jetson T5000 processing 2070 TFLOPS in real time.',
      chips: ['Dual LiDAR · 360°', 'Jetson T5000 · 2070 TFLOPS'],
    },
    {
      eyebrow: 'Endurance',
      title: 'Works around the clock.',
      body: 'Hot-swap batteries mean G2 never stops to charge — swap the tray and carry on, shift after shift.',
      chips: ['Hot-swap batteries', '24/7 operation'],
    },
    {
      eyebrow: 'Mobility',
      title: 'Moves where the work is.',
      body: 'A 1.5 m/s omnidirectional base and 26-DOF body take G2 between stations without re-tooling the line.',
      chips: ['1.5 m/s omnidirectional', '26-DOF body'],
    },
  ],
  anatomy: [
    {
      label: 'Sensor head',
      detail: 'Dual LiDAR · 360° awareness',
      x: 52,
      y: 11,
      side: 'right',
    },
    {
      label: '7-DOF arms',
      detail: '5 kg each · ±0.5N force control',
      x: 27,
      y: 44,
      side: 'left',
    },
    {
      label: 'Onboard AI',
      detail: 'Jetson T5000 · 2070 TFLOPS',
      x: 56,
      y: 34,
      side: 'right',
    },
    {
      label: 'Omnidirectional base',
      detail: '1.5 m/s · hot-swap battery tray',
      x: 50,
      y: 87,
      side: 'left',
    },
  ],
};

export const X2 = {
  id: 'agibot-x2',
  name: 'AGIBOT X2',
  brand: 'AGIBOT',
  tagline: 'Interactive demonstration humanoid',
  blurb:
    'A fully bipedal, half-size humanoid built for interaction and live demonstration — expressive, agile and engaging in front of any audience.',
  claim: 'Brings humanoid AI to life.',
  images: {
    hero: '/images/x2-hero.webp',
    thumb: '/images/x2-sit.webp',
  },
  heroAlt: 'AGIBOT X2 bipedal humanoid robot walking mid-stride',
  features: [
    {
      eyebrow: 'Locomotion',
      title: 'Fully bipedal.',
      body: 'X2 walks on two legs — 131 cm tall, 35 kg, with 25 degrees of freedom for natural, stable movement.',
      chips: ['131 cm · 35 kg', 'Bipedal · 25 DOF'],
    },
    {
      eyebrow: 'Agility',
      title: 'Quick on its feet.',
      body: 'It walks at up to 2 m/s and carries a repertoire of more than twenty agile motions, from turns to gestures.',
      chips: ['2 m/s walking', '20+ agile motions'],
    },
    {
      eyebrow: 'Expression',
      title: 'Built for an audience.',
      body: 'With 30+ expressions, X2 is the robot we put in front of people — showrooms, events and open days across the UK.',
      chips: ['30+ expressions', 'Interactive demos'],
    },
    {
      eyebrow: 'Training',
      title: 'Teach it without code.',
      body: '0-code skill training means new motions and routines in hours, with a 500 Wh battery good for around two hours per session.',
      chips: ['0-code training', '3 kg end payload', '500 Wh · ~2h'],
    },
  ],
};

export const COMPARISON = [
  { label: 'Role', g2: 'Industrial work', x2: 'Interactive demonstration' },
  { label: 'Mobility', g2: '1.5 m/s omnidirectional base', x2: '2 m/s bipedal walking' },
  { label: 'Arms & payload', g2: 'Dual 7-DOF arms · 5 kg each', x2: '3 kg end payload' },
  { label: 'Degrees of freedom', g2: '26-DOF body', x2: '25 DOF' },
  { label: 'Endurance', g2: 'Hot-swap batteries · 24/7', x2: '500 Wh · ~2 h' },
  { label: 'Best for', g2: 'Production tasks & factory trials', x2: 'Demos, events & engagement' },
];
