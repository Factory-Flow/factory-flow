import { Layers, Gauge, Timer, PauseCircle, PackageCheck, Bell, Box, ShieldCheck, Users, Code2, Plug, ScrollText, KeyRound, Building2, ShieldAlert, Lock } from 'lucide-react';

function LayoutViewMockup() {
  const lines = [
    {
      label: 'Line 1', y: 30,
      machines: [
        { x: 8,   color: '#22c55e', oee: '94%' },
        { x: 50,  color: '#22c55e', oee: '91%' },
        { x: 92,  color: '#f97316', oee: '67%' },
        { x: 134, color: '#22c55e', oee: '88%' },
      ],
    },
    {
      label: 'Line 2', y: 78,
      machines: [
        { x: 8,   color: '#22c55e', oee: '98%' },
        { x: 50,  color: '#ef4444', oee: 'STOP' },
        { x: 92,  color: '#22c55e', oee: '82%' },
        { x: 134, color: '#22c55e', oee: '91%' },
      ],
    },
    {
      label: 'Line 3', y: 126,
      machines: [
        { x: 8,   color: '#22c55e', oee: '89%' },
        { x: 50,  color: '#22c55e', oee: '95%' },
        { x: 92,  color: '#f97316', oee: '71%' },
        { x: 134, color: '#22c55e', oee: '86%' },
      ],
    },
  ];
  return (
    <div className="w-full h-full bg-[#0a0b0d] p-3 flex flex-col">
      <div className="flex items-center justify-between mb-1">
        <div className="text-[8px] text-white/30 tracking-wider uppercase">Layout View</div>
        <div className="flex gap-2">
          {([['#22c55e','Run'],['#f97316','Idle'],['#ef4444','Fault']] as const).map(([c,l]) => (
            <span key={l} className="flex items-center gap-0.5 text-[7px] text-white/25">
              <span className="w-1.5 h-1.5 rounded-sm flex-shrink-0" style={{backgroundColor: c}}/>{l}
            </span>
          ))}
        </div>
      </div>
      <svg viewBox="0 0 180 158" className="flex-1 w-full">
        {Array.from({length: 14}, (_, row) =>
          Array.from({length: 18}, (_, col) => (
            <circle key={`${row}-${col}`} cx={col * 11 + 5} cy={row * 11 + 5} r="0.5" fill="rgba(255,255,255,0.07)"/>
          ))
        )}
        {lines.map(line => (
          <g key={line.label}>
            <text x="5" y={line.y - 5} fill="rgba(255,255,255,0.22)" fontSize="5.5">{line.label}</text>
            <line x1="5" y1={line.y - 1} x2="175" y2={line.y - 1} stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" strokeDasharray="2,2"/>
            {line.machines.map((m, i) => (
              <g key={i}>
                <rect x={m.x} y={line.y + 1} width="34" height="24" fill={m.color} opacity="0.1" rx="2"/>
                <rect x={m.x} y={line.y + 1} width="34" height="3" fill={m.color} opacity="0.65" rx="1"/>
                <text x={m.x + 17} y={line.y + 19} textAnchor="middle" fill={m.color} fontSize="7.5" fontWeight="bold" opacity="0.85">{m.oee}</text>
              </g>
            ))}
          </g>
        ))}
      </svg>
    </div>
  );
}

function LineViewMockup() {
  const machines = [
    { name: 'CNC-01', status: 'Running', statusColor: 'text-green-400 bg-green-500/10', segments: [{w:42,c:'#22c55e'},{w:5,c:'#f97316'},{w:36,c:'#22c55e'},{w:4,c:'#ef4444'},{w:13,c:'#22c55e'}] },
    { name: 'RB-01',  status: 'Running', statusColor: 'text-green-400 bg-green-500/10', segments: [{w:60,c:'#22c55e'},{w:8,c:'#f97316'},{w:32,c:'#22c55e'}] },
    { name: 'WS-03',  status: 'Fault',   statusColor: 'text-red-400 bg-red-500/10',     segments: [{w:20,c:'#ef4444'},{w:50,c:'#22c55e'},{w:10,c:'#f97316'},{w:20,c:'#22c55e'}] },
  ];
  return (
    <div className="w-full h-full bg-[#0a0b0d] p-3 flex flex-col justify-center gap-3">
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-medium tracking-wider uppercase text-white/30">Production Line 1</span>
        <div className="flex items-center gap-2">
          {([['#22c55e','Run'],['#f97316','Idle'],['#ef4444','Fault']] as const).map(([c,l]) => (
            <span key={l} className="flex items-center gap-1 text-[8px] text-white/25">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{backgroundColor: c}} />{l}
            </span>
          ))}
        </div>
      </div>
      {machines.map(m => (
        <div key={m.name}>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] text-white/70 font-medium w-14">{m.name}</span>
            <span className={`text-[8px] px-1.5 py-px rounded ${m.statusColor}`}>{m.status}</span>
          </div>
          <div className="flex h-2.5 rounded-sm overflow-hidden gap-px">
            {m.segments.map((s, i) => (
              <div key={i} style={{width:`${s.w}%`, backgroundColor: s.c, opacity: 0.75}} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ProductionCountsMockup() {
  return <img src="/panel-production.png" className="w-full h-full object-contain bg-[#0a0b0d]" alt="Production Counts" loading="lazy" />;
}

function DowntimeLoggingMockup() {
  return <img src="/panel-downtime.png" className="w-full h-full object-contain bg-[#0a0b0d]" alt="Downtime Logging" loading="lazy" />;
}

function OEETrackingMockup() {
  return <img src="/panel-oee.png" className="w-full h-full object-contain bg-[#0a0b0d]" alt="OEE Tracking" loading="lazy" />;
}

function CycleTimeMockup() {
  return <img src="/panel-cycle-time.png" className="w-full h-full object-contain bg-[#0a0b0d]" alt="Cycle Time" loading="lazy" />;
}

function ThresholdAlertsMockup() {
  const alerts = [
    { metric: 'OEE — CNC-01',        value: '34%',    threshold: '< 60% threshold', color: '#ef4444', bg: 'bg-red-500/10',    time: '2m ago'  },
    { metric: 'Downtime — RB-01',     value: '4h 12m', threshold: '> 2h threshold',  color: '#f97316', bg: 'bg-orange-500/10', time: '18m ago' },
    { metric: 'Cycle Time — WS-03',   value: '412s',   threshold: '> 350s threshold',color: '#f97316', bg: 'bg-orange-500/10', time: '1h ago'  },
  ];
  return (
    <div className="w-full h-full bg-[#0a0b0d] p-3 flex flex-col gap-2">
      <div className="text-[9px] text-white/30 tracking-wider uppercase mb-1">Active Alerts</div>
      {alerts.map(a => (
        <div key={a.metric} className={`${a.bg} border border-white/[0.12] rounded-lg px-2.5 py-2 flex items-center justify-between`}>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{backgroundColor: a.color}} />
            <div>
              <div className="text-[9px] text-white/70 font-medium leading-tight">{a.metric}</div>
              <div className="text-[8px] text-white/30">{a.threshold}</div>
            </div>
          </div>
          <div className="text-right ml-2">
            <div className="text-[11px] font-semibold" style={{color: a.color}}>{a.value}</div>
            <div className="text-[8px] text-white/20">{a.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

const features = [
  {
    icon: Timer,
    title: 'Cycle Time Monitoring',
    description: 'Compare actual cycle times against targets, per station, in real time. Catch drift and bottlenecks before they back up the line.',
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/10',
    border: 'hover:border-cyan-500/30',
    Mockup: CycleTimeMockup,
    wide: true,
  },
  {
    icon: Gauge,
    title: 'OEE Tracking',
    description: 'Overall Equipment Effectiveness calculated live and broken down into Availability, Performance, and Quality — so you know exactly where efficiency is being lost.',
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-500/10',
    border: 'hover:border-purple-500/30',
    Mockup: OEETrackingMockup,
  },
  {
    icon: PackageCheck,
    title: 'Production Counts',
    description: 'Live part counts tracked against shift targets. See good parts, rejects, and scrap rates per machine so operators and managers are always on the same page.',
    iconColor: 'text-green-400',
    iconBg: 'bg-green-500/10',
    border: 'hover:border-green-500/30',
    Mockup: ProductionCountsMockup,
  },
  {
    icon: PauseCircle,
    title: 'Downtime Logging',
    description: 'Every stop is captured automatically — no manual logging. Categorize causes, review trends by shift or machine, and eliminate repeat failures.',
    iconColor: 'text-orange-400',
    iconBg: 'bg-orange-500/10',
    border: 'hover:border-orange-500/30',
    Mockup: DowntimeLoggingMockup,
    wide: true,
  },
  {
    icon: Layers,
    title: 'Line & Facility Insights',
    description: 'Compare performance across every line and facility from one place. Spot which lines are underperforming, track trends over time, and drill into any machine for the full picture.',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10',
    border: 'hover:border-blue-500/30',
    Mockup: LineViewMockup,
  },
  {
    icon: Box,
    title: 'Layout View',
    description: 'A 3D map of your factory with live analytics overlaid. See machine status, OEE, and output across every line and facility at a glance.',
    iconColor: 'text-indigo-400',
    iconBg: 'bg-indigo-500/10',
    border: 'hover:border-indigo-500/30',
    Mockup: LayoutViewMockup,
  },
  {
    icon: Bell,
    title: 'Threshold Alerts',
    description: 'Set custom thresholds on any metric — OEE, cycle time, downtime duration. Get notified the instant a machine underperforms so you can act before the shift is lost.',
    iconColor: 'text-yellow-400',
    iconBg: 'bg-yellow-500/10',
    border: 'hover:border-yellow-500/30',
    Mockup: ThresholdAlertsMockup,
  },
];

export default function Features() {
  return (
    <section id="features" className="pt-12 pb-24 md:pt-16 md:pb-32 relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="text-center max-w-[720px] mx-auto mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-white">
            Features
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`group relative bg-white/[0.02] border border-white/[0.12] rounded-2xl overflow-hidden flex transition-all duration-200 hover:bg-white/[0.04] ${feature.border} ${feature.wide ? 'sm:col-span-2 flex-col sm:flex-row' : 'flex-col'}`}
            >
              {feature.wide ? (
                <>
                  {/* Text — left on desktop, top on mobile */}
                  <div className="sm:w-[38%] p-6 flex flex-col gap-4 justify-center border-b sm:border-b-0 sm:border-r border-white/[0.06] flex-shrink-0">
                    <div className={`w-10 h-10 rounded-lg ${feature.iconBg} flex items-center justify-center`}>
                      <feature.icon className={`w-5 h-5 ${feature.iconColor}`} strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-sm text-secondary leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                  {/* Mockup — right on desktop */}
                  <div className="flex-1 aspect-[784/372] sm:aspect-auto overflow-hidden">
                    <feature.Mockup />
                  </div>
                </>
              ) : (
                <>
                  <div className="w-full aspect-[784/372] border-b border-white/[0.06] overflow-hidden">
                    <feature.Mockup />
                  </div>
                  <div className="p-6 flex flex-col gap-4 flex-1">
                    <div className={`w-10 h-10 rounded-lg ${feature.iconBg} flex items-center justify-center`}>
                      <feature.icon className={`w-5 h-5 ${feature.iconColor}`} strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-sm text-secondary leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Enterprise & Integration */}
        <div className="mt-20 md:mt-28">
          {/* Header */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[11px] font-semibold tracking-widest uppercase text-emerald-400/70 border border-emerald-500/20 bg-emerald-500/8 rounded-full px-3 py-1">Enterprise</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">Built for enterprise</h3>
          <p className="text-sm text-secondary max-w-[480px] mb-8">Security, control, and deep integration for teams that need more than a dashboard.</p>

          {/* Gateway — hero card */}
          <div className="relative bg-white/[0.02] border border-white/[0.12] rounded-2xl overflow-hidden mb-4">
            <div className="flex flex-col lg:flex-row">
              {/* Text */}
              <div className="lg:w-[42%] p-8 flex flex-col gap-4 justify-center">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <Plug className="w-5 h-5 text-emerald-400" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Factory Flow Gateway</h4>
                  <p className="text-sm text-secondary leading-relaxed">A lightweight agent that runs on-site and connects directly to your machines and data sources — streaming data securely to the platform. No cloud dependency required for data collection.</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-1">
                  {['MQTT', 'OPC-UA', 'MT-Connect'].map(p => (
                    <span key={p} className="text-[11px] font-semibold tracking-wide text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1">{p}</span>
                  ))}
                </div>
              </div>

              {/* Diagram */}
              <div className="flex-1 border-t lg:border-t-0 lg:border-l border-white/[0.08] bg-[#0a0b0d] flex items-center justify-center p-6 min-h-[200px]">
                <svg viewBox="0 0 320 140" className="w-full max-w-sm">
                  {/* Machines */}
                  {[{y:18,l:'CNC-01'},{y:52,l:'RB-01'},{y:86,l:'WS-01'},{y:120,l:'ML-01'}].map(m => (
                    <g key={m.l}>
                      <rect x="0" y={m.y} width="52" height="18" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.75"/>
                      <text x="26" y={m.y + 12} textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="6.5" fontFamily="monospace">{m.l}</text>
                    </g>
                  ))}
                  {/* Protocol lines */}
                  {[{y:27,label:'MQTT'},{y:61,label:'OPC-UA'},{y:95,label:'MT-Connect'}].map(p => (
                    <g key={p.label}>
                      <line x1="53" y1={p.y} x2="118" y2={p.y} stroke="rgba(52,211,153,0.25)" strokeWidth="0.75" strokeDasharray="3,2"/>
                      <text x="85" y={p.y - 3} textAnchor="middle" fill="rgba(52,211,153,0.45)" fontSize="5.5">{p.label}</text>
                    </g>
                  ))}
                  {/* Gateway box */}
                  <rect x="118" y="38" width="72" height="62" rx="8" fill="rgba(52,211,153,0.06)" stroke="rgba(52,211,153,0.25)" strokeWidth="1"/>
                  <text x="154" y="68" textAnchor="middle" fill="rgba(52,211,153,0.85)" fontSize="9" fontWeight="600">Gateway</text>
                  <text x="154" y="82" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="6">on-site agent</text>
                  {/* Arrow */}
                  <line x1="191" y1="69" x2="218" y2="69" stroke="rgba(255,255,255,0.15)" strokeWidth="0.75"/>
                  <polygon points="218,66 224,69 218,72" fill="rgba(255,255,255,0.2)"/>
                  {/* Platform box */}
                  <rect x="224" y="48" width="88" height="42" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.75"/>
                  <text x="268" y="68" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="8" fontWeight="500">Factory Flow</text>
                  <text x="268" y="80" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="6">platform</text>
                </svg>
              </div>
            </div>
          </div>

          {/* Admin feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { icon: Building2,    title: 'Data Isolation',        description: 'Your data is fully isolated per organization — no cross-tenant access, ever.', accent: '#60a5fa' },
              { icon: ScrollText,  title: 'Audit Trail',           description: 'Every change is logged with who did it and when, so nothing goes untracked.', accent: '#fb923c' },
              { icon: KeyRound,    title: 'Two-Factor Auth',       description: 'Optional 2FA protects your account even if your password is compromised.', accent: '#f472b6' },
              { icon: Users,       title: 'Role-Based Permissions', description: 'Control exactly what each team member can see and do — Admin, Editor, or Viewer.', accent: '#a78bfa' },
              { icon: Code2,       title: 'Secure API Access',     description: 'Connect your systems with scoped API keys that can be revoked at any time.', accent: '#22d3ee' },
              { icon: ShieldAlert, title: 'Breach Protection',     description: 'We block passwords known to be compromised in data breaches before they can be used.', accent: '#facc15' },
              { icon: Lock,        title: 'Encrypted Secrets',     description: 'Credentials and sensitive data are encrypted at rest — never stored in plaintext.', accent: '#34d399' },
              { icon: ShieldCheck, title: 'Single Sign-On',        description: 'Connect your identity provider. One set of credentials across your entire org.', accent: '#94a3b8' },
            ].map(f => (
              <div key={f.title} className="bg-white/[0.02] border border-white/[0.12] rounded-2xl p-5 flex flex-col gap-3 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{background: `linear-gradient(90deg, ${f.accent}40, ${f.accent}15)`}}/>
                <f.icon className="w-5 h-5 mt-1" style={{color: f.accent}} strokeWidth={1.75}/>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1.5">{f.title}</h4>
                  <p className="text-xs text-secondary leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
