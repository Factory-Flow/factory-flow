import { Layers, Gauge, Timer, PauseCircle, PackageCheck, Bell, Box, ShieldCheck, Users, Code2, ScrollText, Building2, Lock, KeyRound, Network } from 'lucide-react';
import Lightbox from './Lightbox';

function LayoutViewMockup() {
  return (
    <Lightbox src="/layout.png" alt="Layout View">
      <div className="relative w-full h-full">
        <img src="/layout.png" alt="Layout View" className="w-full h-full object-cover object-[center_30%]" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 45%, #08090a 100%)' }} />
      </div>
    </Lightbox>
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
  return <Lightbox src="/panel-production.png" alt="Production Counts"><img src="/panel-production.png" className="w-full h-full object-contain bg-[#0a0b0d]" alt="Production Counts" loading="lazy" /></Lightbox>;
}

function DowntimeLoggingMockup() {
  return <Lightbox src="/panel-downtime.png" alt="Downtime Logging"><img src="/panel-downtime.png" className="w-full h-full object-contain bg-[#0a0b0d]" alt="Downtime Logging" loading="lazy" /></Lightbox>;
}

function OEETrackingMockup() {
  return <Lightbox src="/panel-oee.png" alt="OEE Tracking"><img src="/panel-oee.png" className="w-full h-full object-contain bg-[#0a0b0d]" alt="OEE Tracking" loading="lazy" /></Lightbox>;
}

function CycleTimeMockup() {
  return <Lightbox src="/panel-cycle-time.png" alt="Cycle Time"><img src="/panel-cycle-time.png" className="w-full h-full object-contain bg-[#0a0b0d]" alt="Cycle Time" loading="lazy" /></Lightbox>;
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

        {/* Security & access */}
        <div className="mt-10">
          <div className="flex items-center justify-center gap-6 max-w-[900px] mx-auto mb-8">
            <div className="flex-1 h-px bg-white/15 hidden sm:block" />
            <p className="text-lg md:text-xl text-secondary max-w-[600px] text-center leading-relaxed min-w-0">Enterprise-ready security, compliance, and controls built in.</p>
            <div className="flex-1 h-px bg-white/15 hidden sm:block" />
          </div>

          <div className="rounded-2xl border border-white/[0.12] bg-white/[0.02] overflow-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y divide-x divide-white/[0.06]">
            {[
              { icon: Building2,    title: 'Data Isolation',          description: 'Your data is fully isolated per organization — no cross-tenant access, ever.', color: 'text-blue-400' },
              { icon: ScrollText,   title: 'Audit Trail',             description: 'Every change is logged with who did it and when, so nothing goes untracked.', color: 'text-orange-400' },
              { icon: ShieldCheck,  title: '2FA & Single Sign-On',    description: 'Add 2FA or connect your identity provider for secure, centralized login.', color: 'text-green-400' },
              { icon: Users,        title: 'Role-Based Permissions',  description: 'Control exactly what each team member can see and do — Admin, Editor, or Viewer.', color: 'text-purple-400' },
              { icon: Code2,        title: 'Secure API Access',       description: 'Connect your systems with scoped API keys that can be revoked at any time.', color: 'text-cyan-400' },
              { icon: Lock,         title: 'Encrypted Secrets',       description: 'Credentials and sensitive data are encrypted at rest — never stored in plaintext.', color: 'text-indigo-400' },
              { icon: KeyRound,     title: 'Encryption in Transit',   description: 'All data is encrypted in transit via TLS between your browser, the Gateway, and Factory Flow.', color: 'text-yellow-400' },
              { icon: Network,      title: 'Outbound-Only Gateway',   description: 'Factory Flow Gateway only makes outbound connections — never inbound — so it can sit on an isolated network.', color: 'text-pink-400' },
            ].map(f => (
              <div key={f.title} className="p-6 flex flex-col gap-3">
                <f.icon className={`w-4 h-4 ${f.color}`} strokeWidth={1.75}/>
                <div>
                  <h4 className="text-sm font-medium text-white mb-1">{f.title}</h4>
                  <p className="text-xs text-secondary leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm font-medium text-white/50 mt-8 mb-3">On our roadmap</p>
          <div className="rounded-2xl border border-white/[0.12] bg-white/[0.02] overflow-hidden grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06]">
            {[
              { name: 'SOC 2 Type II', scope: 'Audited controls over the security, availability, and confidentiality of customer data.' },
              { name: 'ISO 27001',     scope: 'International standard for information security management across our organization.' },
              { name: 'IEC 62443',     scope: 'Security requirements specific to industrial automation and control systems.' },
            ].map(s => (
              <div key={s.name} className="p-6 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-medium text-white">{s.name}</h4>
                  <span className="text-[10px] uppercase tracking-wide text-white/35">Planned</span>
                </div>
                <p className="text-xs text-secondary leading-relaxed">{s.scope}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
