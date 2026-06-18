function VlaFlowDiagram() {
  return (
    <svg
      viewBox="0 0 680 290"
      role="img"
      aria-labelledby="vla-title vla-desc"
      className="w-full h-auto"
      style={{ fontFamily: 'inherit' }}
    >
      <title id="vla-title">Vision-Language-Action model flow</title>
      <desc id="vla-desc">
        Vision, language and robot-state inputs feed a Vision-Language-Action model that outputs
        precise movement.
      </desc>
      <defs>
        <marker id="vla-arrow" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto" markerUnits="userSpaceOnUse">
          <path d="M0,0 L6,3 L0,6" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
      </defs>

      {/* connectors (drawn first, behind boxes) */}
      <g stroke="#9ca3af" strokeWidth="1.5" fill="none" markerEnd="url(#vla-arrow)">
        <path d="M170,67 L216,112" />
        <path d="M170,145 L216,145" />
        <path d="M170,223 L216,178" />
        <path d="M432,145 L466,145" />
      </g>

      {/* input boxes */}
      <g>
        <rect x="40" y="40" width="130" height="54" rx="12" fill="#f9fafb" stroke="#e5e7eb" />
        <text x="105" y="64" textAnchor="middle" fontSize="14" fontWeight="500" fill="#111827">Vision</text>
        <text x="105" y="81" textAnchor="middle" fontSize="12" fill="#6b7280">what it sees</text>

        <rect x="40" y="118" width="130" height="54" rx="12" fill="#f9fafb" stroke="#e5e7eb" />
        <text x="105" y="142" textAnchor="middle" fontSize="14" fontWeight="500" fill="#111827">Language</text>
        <text x="105" y="159" textAnchor="middle" fontSize="12" fill="#6b7280">what it&rsquo;s told</text>

        <rect x="40" y="196" width="130" height="54" rx="12" fill="#f9fafb" stroke="#e5e7eb" />
        <text x="105" y="220" textAnchor="middle" fontSize="14" fontWeight="500" fill="#111827">Robot state</text>
        <text x="105" y="237" textAnchor="middle" fontSize="12" fill="#6b7280">its own body</text>
      </g>

      {/* model box (accent) */}
      <rect x="220" y="80" width="210" height="130" rx="16" fill="#fffbeb" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="325" y="139" textAnchor="middle" fontSize="14" fontWeight="500" fill="#92400e">Vision-Language-Action</text>
      <text x="325" y="159" textAnchor="middle" fontSize="14" fontWeight="500" fill="#92400e">model</text>

      {/* output box */}
      <rect x="470" y="118" width="140" height="54" rx="12" fill="#111827" />
      <text x="540" y="142" textAnchor="middle" fontSize="14" fontWeight="500" fill="#ffffff">Action</text>
      <text x="540" y="159" textAnchor="middle" fontSize="12" fill="#d1d5db">precise movement</text>
    </svg>
  );
}

function NeuroSymbolicDiagram() {
  return (
    <svg
      viewBox="0 0 680 250"
      role="img"
      aria-labelledby="ns-title ns-desc"
      className="w-full h-auto"
      style={{ fontFamily: 'inherit' }}
    >
      <title id="ns-title">Neuro-symbolic learning</title>
      <desc id="ns-desc">
        Neural networks and symbolic reasoning work together to produce behaviour that adapts as
        conditions change.
      </desc>
      <defs>
        <marker id="ns-arrow" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto" markerUnits="userSpaceOnUse">
          <path d="M0,0 L6,3 L0,6" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
        <marker id="ns-arrow-amber" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto" markerUnits="userSpaceOnUse">
          <path d="M0,0 L6,3 L0,6" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
      </defs>

      {/* exchange arcs between the two ideas */}
      <g stroke="#9ca3af" strokeWidth="1.5" fill="none" markerEnd="url(#ns-arrow)">
        <path d="M212,58 Q320,30 428,58" />
        <path d="M428,82 Q320,110 212,82" />
      </g>

      {/* converging arrows into the outcome */}
      <g stroke="#f59e0b" strokeWidth="1.5" fill="none" markerEnd="url(#ns-arrow-amber)">
        <path d="M125,102 L300,148" />
        <path d="M520,102 L382,148" />
      </g>

      {/* idea boxes */}
      <rect x="40" y="40" width="170" height="60" rx="12" fill="#f9fafb" stroke="#e5e7eb" />
      <text x="125" y="66" textAnchor="middle" fontSize="14" fontWeight="500" fill="#111827">Neural networks</text>
      <text x="125" y="84" textAnchor="middle" fontSize="12" fill="#6b7280">learns from demos</text>

      <rect x="430" y="40" width="180" height="60" rx="12" fill="#f9fafb" stroke="#e5e7eb" />
      <text x="520" y="66" textAnchor="middle" fontSize="14" fontWeight="500" fill="#111827">Symbolic reasoning</text>
      <text x="520" y="84" textAnchor="middle" fontSize="12" fill="#6b7280">logic &amp; safety rules</text>

      {/* outcome box (accent) */}
      <rect x="230" y="150" width="220" height="60" rx="14" fill="#fffbeb" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="340" y="176" textAnchor="middle" fontSize="14" fontWeight="500" fill="#92400e">Adaptive behaviour</text>
      <text x="340" y="194" textAnchor="middle" fontSize="12" fill="#b45309">even as conditions change</text>
    </svg>
  );
}

function DataPipelineDiagram() {
  return (
    <svg
      viewBox="0 0 680 220"
      role="img"
      aria-labelledby="pipe-title pipe-desc"
      className="w-full h-auto"
      style={{ fontFamily: 'inherit' }}
    >
      <title id="pipe-title">Data-to-deployment pipeline</title>
      <desc id="pipe-desc">
        Human demonstration is captured, used to train a model, validated in digital-twin
        simulation, then deployed to live UK sites, with real-world data feeding back.
      </desc>
      <defs>
        <marker id="pipe-arrow" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto" markerUnits="userSpaceOnUse">
          <path d="M0,0 L6,3 L0,6" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
        <marker id="pipe-arrow-amber" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto" markerUnits="userSpaceOnUse">
          <path d="M0,0 L6,3 L0,6" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
      </defs>

      {/* forward flow */}
      <g stroke="#9ca3af" strokeWidth="1.5" fill="none" markerEnd="url(#pipe-arrow)">
        <path d="M177,79 L191,79" />
        <path d="M332,79 L346,79" />
        <path d="M487,79 L501,79" />
      </g>

      {/* real-world data feedback loop */}
      <path d="M572,108 Q417,200 262,108" fill="none" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#pipe-arrow-amber)" />
      <text x="417" y="180" textAnchor="middle" fontSize="12" fill="#b45309">real-world data feeds back</text>

      {/* stages */}
      <rect x="40" y="50" width="135" height="58" rx="12" fill="#f9fafb" stroke="#e5e7eb" />
      <text x="107" y="76" textAnchor="middle" fontSize="14" fontWeight="500" fill="#111827">Human demos</text>
      <text x="107" y="93" textAnchor="middle" fontSize="12" fill="#6b7280">mocap capture</text>

      <rect x="195" y="50" width="135" height="58" rx="12" fill="#f9fafb" stroke="#e5e7eb" />
      <text x="262" y="76" textAnchor="middle" fontSize="14" fontWeight="500" fill="#111827">Model training</text>
      <text x="262" y="93" textAnchor="middle" fontSize="12" fill="#6b7280">neuro-symbolic</text>

      <rect x="350" y="50" width="135" height="58" rx="12" fill="#f9fafb" stroke="#e5e7eb" />
      <text x="417" y="76" textAnchor="middle" fontSize="14" fontWeight="500" fill="#111827">Digital twin</text>
      <text x="417" y="93" textAnchor="middle" fontSize="12" fill="#6b7280">millions of sims</text>

      <rect x="505" y="50" width="135" height="58" rx="12" fill="#fffbeb" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="572" y="76" textAnchor="middle" fontSize="14" fontWeight="500" fill="#92400e">Deployment</text>
      <text x="572" y="93" textAnchor="middle" fontSize="12" fill="#b45309">live UK sites</text>
    </svg>
  );
}

const blocks = [
  {
    title: 'Perception to action',
    body: 'A Vision-Language-Action model fuses what the robot sees, what it is told, and its own body state into a single policy — and outputs precise movement. There are no scripted routines: the robot reasons about the task and acts.',
    diagram: <VlaFlowDiagram />,
    reverse: false,
  },
  {
    title: 'Learning meets reasoning',
    body: 'Robots learn tasks by watching humans demonstrate them. We pair that neural pattern-recognition with symbolic logic and safety rules — so a robot does not just copy a motion, it understands why, and stays reliable when conditions change.',
    diagram: <NeuroSymbolicDiagram />,
    reverse: true,
  },
];

export default function PhysicalAI() {
  return (
    <section id="how-it-works" aria-label="How physical AI works" className="bg-white py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">

        {/* Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
            How It Works
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
            From what it sees<br className="hidden sm:block" /> to what it does.
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            Two ideas sit behind every HRS robot: a model that turns perception into action, and a
            way of learning that keeps it reliable when the real world changes.
          </p>
        </div>

        {/* Alternating diagram blocks */}
        <div className="flex flex-col gap-16 md:gap-20">
          {blocks.map(({ title, body, diagram, reverse }) => (
            <div
              key={title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                reverse ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">{title}</h3>
                <p className="mt-4 text-base text-gray-500 leading-relaxed">{body}</p>
              </div>
              <div className="rounded-3xl bg-gray-50 ring-1 ring-gray-100 p-6 sm:p-8">
                {diagram}
              </div>
            </div>
          ))}
        </div>

        {/* Full-width pipeline */}
        <div className="mt-16 md:mt-20">
          <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
            From demonstration to deployment
          </h3>
          <p className="mt-4 max-w-2xl text-base text-gray-500 leading-relaxed">
            Every skill follows the same path: we capture real human movement, train a policy, prove
            it across millions of simulated scenarios, then deploy it on real UK sites — where new
            data flows back to make the next version better.
          </p>
          <div className="mt-8 rounded-3xl bg-gray-50 ring-1 ring-gray-100 p-6 sm:p-8">
            <DataPipelineDiagram />
          </div>
        </div>

      </div>
    </section>
  );
}
