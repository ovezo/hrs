import Image from 'next/image';
import Link from 'next/link';
import { getBaseUrl, getContactEmail } from '@/lib/config';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const APPLY_EMAIL = getContactEmail();
const APPLY_SUBJECT = 'Application — Robotics & AI Engineer';
const APPLY_MAILTO = `mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(APPLY_SUBJECT)}`;

export const metadata = {
  title: 'Careers — Robotics & AI Engineer (Humanoid Robotics) | HRS',
  description:
    'We’re hiring a Robotics & AI Engineer at HRS in Newtown, Mid Wales. Build humanoid robots with ROS2, NVIDIA Isaac Sim, computer vision and AI. Full-time, £30,000–£65,000+, relocation support.',
  keywords: [
    'robotics engineer job UK',
    'AI engineer job Wales',
    'humanoid robotics jobs',
    'ROS2 engineer job',
    'NVIDIA Isaac Sim job',
    'robotics careers Mid Wales',
    'computer vision engineer job',
    'HRS careers',
  ],
  alternates: { canonical: '/careers' },
  openGraph: {
    type: 'website',
    title: 'We’re Hiring — Robotics & AI Engineer | HRS',
    description:
      'Join HRS in Mid Wales and help build the next generation of humanoid robots. ROS2, NVIDIA Isaac Sim, computer vision and AI. Full-time, relocation support.',
    url: '/careers',
    siteName: 'HRS — Humanoid Robot Solutions',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'We’re Hiring — Robotics & AI Engineer | HRS',
    description: 'Help build humanoid robots at HRS in Mid Wales. Full-time, relocation support.',
  },
};

// ── Content ────────────────────────────────────────────────────────────────
const FACTS = [
  {
    label: 'Location',
    value: ['Reeco Automation, Unit 45', 'Mochdre Industrial Estate', 'Newtown, Powys, Wales, UK'],
    icon: (
      <>
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
  {
    label: 'Position',
    value: ['Full-Time,', 'Permanent'],
    icon: (
      <>
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <rect width="20" height="14" x="2" y="6" rx="2" />
      </>
    ),
  },
  {
    label: 'Salary',
    value: ['£30,000–£65,000+', 'depending on experience', 'and the value you bring'],
    icon: (
      <>
        <path d="M18 7c0-5.333-8-5.333-8 0" />
        <path d="M10 7v14" />
        <path d="M6 21h12" />
        <path d="M6 13h10" />
      </>
    ),
  },
  {
    label: 'Relocation support',
    value: ['Accommodation can be', 'provided for candidates', 'relocating to Mid Wales'],
    icon: (
      <>
        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </>
    ),
  },
];

const ABOUT = [
  'HRS is developing the next generation of intelligent robotic systems, combining robotics, artificial intelligence, simulation, computer vision and autonomous technologies to solve real-world industrial challenges.',
  'Working alongside Reeco Automation, we’re creating advanced robotic platforms that bridge the gap between research and practical deployment. From intelligent autonomous systems to humanoid robotics, we’re building technologies that have the potential to transform manufacturing, automation and the future of work.',
  'As we continue to grow, we’re looking for talented engineers who are passionate about robotics, AI and solving complex technical challenges.',
];

const ROLE_AREAS = [
  'Robotics software development using ROS2',
  'Autonomous navigation and robotic behaviours',
  'AI-powered perception and computer vision',
  'NVIDIA Isaac Sim digital twins and simulation',
  'Simulation-to-real (Sim2Real) workflows',
  'Sensor integration including cameras, LIDAR and depth sensors',
  'Machine learning and AI applications',
  'Humanoid robotics',
  'Research and development of next-generation robotic technologies',
  'Testing, debugging and optimising robotics software',
  'Technical documentation and reporting',
  'Building and deploying prototype systems',
];

const SKILLS = [
  'ROS2',
  'Python',
  'Linux',
  'NVIDIA Isaac Sim',
  'NVIDIA Isaac ROS',
  'Computer Vision (OpenCV)',
  'Machine Learning',
  'PyTorch or TensorFlow',
  'Reinforcement Learning',
  'SLAM',
  'LiDAR',
  'Sensor Fusion',
  'MoveIt2',
  'Docker',
  'C++',
  'NVIDIA Jetson',
  'Digital Twins',
  'Large Language Models (LLMs)',
  'AI Agents',
  'Autonomous Mobile Robots (AMRs)',
];

const OFFERS = [
  'Work on cutting-edge robotics and AI projects',
  'Genuine responsibility from your first day',
  'The opportunity to influence product development',
  'Access to advanced robotics hardware and software',
  'Mentoring and professional development',
  'Flexible and supportive working environment',
  'Excellent career progression within a fast-growing robotics company',
  'Relocation support, including accommodation where required',
  'The opportunity to help shape the future of humanoid robotics and intelligent automation',
];

const APPLY_INCLUDE = [
  'Your CV',
  'A short covering email introducing yourself',
  'GitHub profile (if available)',
  'Portfolio or links to projects you’ve developed',
  'Examples of robotics, AI, autonomous systems, simulation or software you’ve developed',
];

// ── Small building blocks ────────────────────────────────────────────────────
function Eyebrow({ children }) {
  return (
    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-600">
      {children}
    </p>
  );
}

function ApplyButton({ children = 'Email your application', className = '' }) {
  return (
    <a
      href={APPLY_MAILTO}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-gray-900 ${className}`}
    >
      {children}
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

function Bullet() {
  return <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-amber-500" aria-hidden="true" />;
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function CareersPage() {
  const siteUrl = getBaseUrl();

  // JobPosting mirrors exactly what the page shows, so it is eligible for
  // Google for Jobs. datePosted / validThrough keep the listing "fresh"; the
  // role is evergreen, so validThrough is set a year out.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/careers#webpage`,
        url: `${siteUrl}/careers`,
        name: 'Careers — Robotics & AI Engineer (Humanoid Robotics) | HRS',
        description:
          'HRS is hiring a Robotics & AI Engineer in Newtown, Mid Wales — building humanoid robots with ROS2, NVIDIA Isaac Sim, computer vision and AI.',
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#organization` },
        inLanguage: 'en-GB',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/careers#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Careers', item: `${siteUrl}/careers` },
        ],
      },
      {
        '@type': 'JobPosting',
        '@id': `${siteUrl}/careers#job-robotics-ai-engineer`,
        title: 'Robotics & AI Engineer — Humanoid Robotics',
        description:
          '<p>HRS is developing the next generation of intelligent robotic systems, combining robotics, artificial intelligence, simulation, computer vision and autonomous technologies to solve real-world industrial challenges.</p>' +
          '<p>You’ll join a small, ambitious engineering team developing advanced robotic systems from concept through to deployment. This is a hands-on role contributing directly to live robotics projects — helping design, build and deploy intelligent robotic systems using modern robotics software, AI and autonomous technologies.</p>' +
          '<p>Depending on your skills and experience, you’ll work across areas including: Robotics software development using ROS2; autonomous navigation and robotic behaviours; AI-powered perception and computer vision; NVIDIA Isaac Sim digital twins and simulation; simulation-to-real (Sim2Real) workflows; sensor integration including cameras, LIDAR and depth sensors; machine learning and AI applications; humanoid robotics; research and development of next-generation robotic technologies; testing, debugging and optimising robotics software; technical documentation and reporting; and building and deploying prototype systems.</p>' +
          '<p>Experience with some of the following is beneficial (you don’t need all of them): ROS2, Python, Linux, NVIDIA Isaac Sim, NVIDIA Isaac ROS, Computer Vision (OpenCV), Machine Learning, PyTorch or TensorFlow, Reinforcement Learning, SLAM, LiDAR, Sensor Fusion, MoveIt2, Docker, C++, NVIDIA Jetson, Digital Twins, Large Language Models (LLMs), AI Agents and Autonomous Mobile Robots (AMRs).</p>' +
          '<p>We’re far more interested in what you’ve built than the job titles on your CV. Practical ability, curiosity and enthusiasm matter far more than ticking every box. To apply, email your CV, a short covering email, your GitHub profile (if available) and links to projects you’ve developed to ' +
          APPLY_EMAIL +
          '.</p>',
        datePosted: '2026-07-24',
        validThrough: '2027-07-24',
        employmentType: 'FULL_TIME',
        directApply: false,
        hiringOrganization: {
          '@type': 'Organization',
          '@id': `${siteUrl}/#organization`,
          name: 'HRS — Humanoid Robot Solutions',
          sameAs: siteUrl,
          logo: `${siteUrl}/images/logo.png`,
        },
        jobLocation: {
          '@type': 'Place',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Reeco Automation, Unit 45, Mochdre Industrial Estate',
            addressLocality: 'Newtown',
            addressRegion: 'Powys',
            postalCode: 'SY16 4LE',
            addressCountry: 'GB',
          },
        },
        applicantLocationRequirements: {
          '@type': 'Country',
          name: 'United Kingdom',
        },
        baseSalary: {
          '@type': 'MonetaryAmount',
          currency: 'GBP',
          value: {
            '@type': 'QuantitativeValue',
            minValue: 30000,
            maxValue: 65000,
            unitText: 'YEAR',
          },
        },
        industry: 'Robotics, Artificial Intelligence',
        skills: SKILLS.join(', '),
        jobBenefits:
          'Relocation support and accommodation where required; mentoring and professional development; access to advanced robotics hardware and software.',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar showFlag />

      <main>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-white pt-28 md:pt-36">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 md:grid-cols-[1.1fr_1fr] md:gap-12 md:px-16">
            <div className="pb-4 md:pb-12">
              <Eyebrow>We’re Hiring</Eyebrow>
              <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl">
                Robotics &amp; AI Engineer
                <span className="mt-1 block text-2xl font-semibold text-sky-500 sm:text-3xl">
                  — Humanoid Robotics
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-500">
                Build the future of intelligent robotic systems that transform industries and
                improve lives.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ApplyButton />
                <a
                  href="#the-role"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 transition-colors hover:bg-gray-50"
                >
                  Read the full role
                </a>
              </div>
            </div>

            <div className="relative -mx-6 md:mx-0">
              <Image
                src="/images/x2-sit.webp"
                alt="Humanoid robot sitting on a ledge"
                width={1800}
                height={900}
                sizes="(max-width: 768px) 100vw, 45vw"
                className="h-auto w-full select-none"
                priority
              />
            </div>
          </div>

          {/* Quick facts */}
          <div className="mx-auto mt-6 max-w-[1440px] px-6 md:mt-2 md:px-16">
            <dl className="grid grid-cols-1 gap-x-10 gap-y-8 border-t border-gray-200 py-10 sm:grid-cols-2 lg:grid-cols-4">
              {FACTS.map((fact) => (
                <div key={fact.label} className="flex gap-3.5">
                  <svg
                    className="mt-0.5 h-6 w-6 flex-none text-sky-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {fact.icon}
                  </svg>
                  <div>
                    <dt className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-900">
                      {fact.label}
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-gray-500">
                      {fact.value.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ── About + The Role (two columns on desktop) ── */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-x-16 gap-y-14 px-6 md:grid-cols-2 md:px-16">
            <div>
              <Eyebrow>About Humanoid Robot Solutions (HRS)</Eyebrow>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-gray-500">
                {ABOUT.map((para) => (
                  <p key={para.slice(0, 24)}>{para}</p>
                ))}
              </div>
            </div>

            <div id="the-role" className="scroll-mt-28">
              <Eyebrow>The Role</Eyebrow>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-gray-500">
                <p>
                  You’ll join a small, ambitious engineering team developing advanced robotic
                  systems from concept through to deployment.
                </p>
                <p>
                  This is a hands-on role where you’ll contribute directly to live robotics
                  projects, helping design, build and deploy intelligent robotic systems using
                  modern robotics software, artificial intelligence and autonomous technologies.
                </p>
              </div>
              <p className="mt-8 text-sm font-semibold text-gray-900">
                Depending on your skills and experience, you’ll work across areas including:
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2" role="list">
                {ROLE_AREAS.map((area) => (
                  <li key={area} className="flex gap-3 text-sm leading-relaxed text-gray-600">
                    <Bullet />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Skills & Experience ── */}
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-6 md:px-16">
            <Eyebrow>Skills &amp; Experience</Eyebrow>
            <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Experience with some of the following is beneficial.
            </h2>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 ring-1 ring-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-500">
              You don’t need experience with every technology listed. If you’re a capable engineer
              with a passion for robotics and a willingness to learn, we’d still like to hear from
              you.
            </p>
          </div>
        </section>

        {/* ── Who should apply + What we offer ── */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-x-16 gap-y-14 px-6 md:grid-cols-2 md:px-16">
            <div>
              <Eyebrow>Who should apply?</Eyebrow>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-gray-500">
                <p>We’re far more interested in what you’ve built than the job titles on your CV.</p>
                <p>
                  You might be a robotics engineer, AI engineer, robotics software engineer,
                  computer vision engineer, ROS developer, software engineer with an interest in
                  robotics, a recent graduate with exceptional projects, a postgraduate or PhD
                  researcher, or a self-taught engineer with an impressive portfolio.
                </p>
                <p>
                  Whether your experience comes from{' '}
                  <span className="font-semibold text-gray-900">
                    industry, university, research, open-source contributions or personal projects
                  </span>
                  , we’re interested in seeing what you’ve created.
                </p>
                <p>
                  Practical ability, curiosity and enthusiasm matter far more than simply ticking
                  every box.
                </p>
              </div>
            </div>

            <div>
              <Eyebrow>What we offer</Eyebrow>
              <ul className="mt-5 space-y-3.5" role="list">
                {OFFERS.map((offer) => (
                  <li key={offer} className="flex gap-3 text-base leading-relaxed text-gray-600">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-none text-sky-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m5 12 5 5 9-11" />
                    </svg>
                    <span>{offer}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── How to apply ── */}
        <section id="apply" className="scroll-mt-24 bg-white py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-6 md:px-16">
            <div className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
              <div>
                <Eyebrow>How to apply</Eyebrow>
                <p className="mt-5 text-lg leading-relaxed text-gray-500">
                  If you’re excited about the opportunity to help develop the next generation of
                  intelligent robotic systems, we’d love to hear from you.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-gray-500">
                  Please send your application to{' '}
                  <a
                    href={APPLY_MAILTO}
                    className="font-semibold text-gray-900 underline decoration-amber-500 underline-offset-4 hover:decoration-amber-600"
                  >
                    {APPLY_EMAIL}
                  </a>{' '}
                  and include:
                </p>
                <ul className="mt-5 space-y-3" role="list">
                  {APPLY_INCLUDE.map((item) => (
                    <li key={item} className="flex gap-3 text-base leading-relaxed text-gray-600">
                      <Bullet />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-base leading-relaxed text-gray-500">
                  If you don’t meet every requirement but believe you have the skills, enthusiasm
                  and ability to make a valuable contribution, we encourage you to apply.
                </p>
              </div>

              <div className="flex">
                <div className="relative w-full self-start overflow-hidden rounded-3xl bg-gray-900 p-10 text-white md:p-12">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-400">
                    Join us
                  </p>
                  <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                    Build the future with us.
                  </h2>
                  <p className="mt-5 text-lg leading-relaxed text-gray-300">
                    This is an opportunity to work on technologies that push the boundaries of
                    robotics and artificial intelligence. If you’re passionate about building
                    intelligent machines and solving challenging engineering problems, we’d love to
                    hear from you.
                  </p>
                  <a
                    href={APPLY_MAILTO}
                    className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-100"
                  >
                    Email your application
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <p className="mt-5 text-sm text-gray-400">
                    Prefer to look around first?{' '}
                    <Link href="/robots" className="text-white underline decoration-amber-400 underline-offset-4">
                      See the robots
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
