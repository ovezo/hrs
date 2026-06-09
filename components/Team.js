import CheckIcon from '@/icons/CheckIcon';

const team = [
  {
    initials: 'LR',
    role: 'Automation Lead',
    name: 'Lel Rees',
    gradient: 'from-gray-700 to-gray-950',
    bio: 'The factory-floor half of HRS. Lel brings a proven track record of real UK automation deployments, decades of customer relationships, and the hands-on integration capability to make robots actually work on-site.',
    points: [
      '25 years in UK factory automation',
      'Automation business owner & operator',
      'Deep UK customer trust and delivery network',
      'Integration, tooling and on-site support',
      'Factory base for live robot demonstrations',
    ],
  },
];

export default function Team() {
  return (
    <section id="about" aria-label="Team" className="bg-white py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
            Founding Team
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
          Automation experience <br/>
          plus robotics intelligence.
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            One founder delivers real UK deployments. The other builds the AI, computer vision and software that makes robots perform. Together, that&rsquo;s a complete humanoid deployment capability.
          </p>
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {team.map(({ initials, role, name, gradient, bio, points }) => (
            <div
              key={name}
              className="bg-gray-50 rounded-3xl p-8 lg:p-10 flex flex-col gap-8"
            >
              {/* Avatar + identity */}
              <div className="flex items-center gap-5">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-bold text-lg tracking-tight">{initials}</span>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">{role}</p>
                  <h3 className="mt-0.5 text-xl font-bold text-gray-900">{name}</h3>
                </div>
              </div>

              {/* Bio */}
              <p className="text-sm text-gray-500 leading-relaxed">{bio}</p>

              {/* Points */}
              <ul className="flex flex-col gap-2.5">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckIcon className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
