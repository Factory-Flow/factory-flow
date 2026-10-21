import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowLeft,
  Check,
  Minus,
  X,
  Timer,
  Plug,
  Gauge,
  Bell,
  Layers,
  Wrench,
  Database,
  Smartphone,
  KeyRound,
  Clock,
  Crosshair,
  PauseCircle,
  Activity,
  Cpu,
  Users,
  TrendingUp,
  Package,
  FileText,
  Award,
  Info,
  DollarSign,
  LayoutDashboard,
  Blocks,
  Factory,
  Shuffle,
  Truck,
  PlusCircle,
  WifiOff,
  Circle,
  Target,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AppAppBar from '../AppAppBar';
import Footer from '../Footer';
import BetaSignupForm from '../BetaSignupForm';
import FactoryFlowMark from './FactoryFlowMark';
import MatchupBadge from './MatchupBadge';
import ToolTile from './ToolTile';
import type { ToolLogo } from './types';

export type { ToolLogo, ToolIconComponent } from './types';

export type ComparisonCellKind = 'yes' | 'no' | 'partial';

export type ComparisonCell = { kind: ComparisonCellKind; text: string };

export type ComparisonRow = {
  label: string;
  alternative: ComparisonCell;
  factoryFlow: ComparisonCell;
};

export type OtherComparison = {
  slug: string;
  toolName: string;
  logo: ToolLogo;
};

export type ComparisonPageProps = {
  toolName: string;
  logo: ToolLogo;
  title: ReactNode;
  intro: string;
  rows: ComparisonRow[];
  whenGoodTitle: string;
  whenGoodParagraphs: string[];
  otherComparisons?: OtherComparison[];
};

function CellIcon({ kind }: { kind: ComparisonCellKind }) {
  if (kind === 'yes') {
    return <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />;
  }
  if (kind === 'partial') {
    return <Minus className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />;
  }
  return <X className="w-4 h-4 text-red-400/70 flex-shrink-0 mt-0.5" strokeWidth={2.5} />;
}

const cellTone: Record<ComparisonCellKind, { bg: string; text: string }> = {
  yes: { bg: 'bg-green-500/[0.05]', text: 'text-white/90' },
  partial: { bg: 'bg-amber-500/[0.05]', text: 'text-secondary' },
  no: { bg: 'bg-red-500/[0.04]', text: 'text-white/45' },
};

const rowIcons: Record<string, LucideIcon> = {
  'Setup time': Timer,
  'Connecting to machines': Plug,
  'OEE calculation': Gauge,
  'Alerting on thresholds': Bell,
  'Multi-line / facility rollups': Layers,
  'Who maintains it': Wrench,
  'Historical data & export': Database,
  'Mobile / remote access': Smartphone,
  'Access control': KeyRound,
  'Cycle time collection': Clock,
  'Accuracy': Crosshair,
  'Downtime causes': PauseCircle,
  'Real-time visibility': Activity,
  'No PLC or sensor on a machine?': Cpu,
  'Labor cost': Users,
  'Historical trends': TrendingUp,
  'What you get out of the box': Package,
  'Licensing model': FileText,
  'OEE & downtime out of the box': Gauge,
  'Ongoing maintenance': Wrench,
  'Multi-facility rollups': Layers,
  'Track record & ecosystem': Award,
  'What it is': Info,
  'OEE & cycle time tracking': Gauge,
  Pricing: DollarSign,
  'Best fit': Target,
  'Time to first dashboard': LayoutDashboard,
  'Beyond monitoring': Blocks,
  'Machine focus': Factory,
  'OEE tracking': Gauge,
  'Mixed, non-CNC fleets': Shuffle,
  'Track record': Award,
  "How it's delivered": Truck,
  'Cost model': DollarSign,
  'Adding a new machine': PlusCircle,
  'Remote / mobile access': Smartphone,
  'Works without a network connection': WifiOff,
};

function RowIcon({ label }: { label: string }) {
  const Icon = rowIcons[label] ?? Circle;
  return <Icon className="w-4 h-4 text-white/70 flex-shrink-0" strokeWidth={2} />;
}

export default function ComparisonPage({
  toolName,
  logo,
  title,
  intro,
  rows,
  whenGoodTitle,
  whenGoodParagraphs,
  otherComparisons = [],
}: ComparisonPageProps) {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20">
      <AppAppBar />
      <main className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-white/[0.04] blur-[150px] rounded-full pointer-events-none hidden md:block" />

        <div className="max-w-[1280px] mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-[1200px] mx-auto mb-8">
            <Link
              to="/compare"
              className="inline-flex items-center gap-1.5 text-sm text-secondary hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              All comparisons
            </Link>
          </div>

          <div className="max-w-[760px] mx-auto text-center mb-16">
            <div className="mb-8">
              <MatchupBadge toolName={toolName} logo={logo} size="lg" />
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.02em] leading-[1.1] mb-6 text-white">
              {title}
            </h1>
            <p className="text-lg text-secondary leading-relaxed max-w-[620px] mx-auto">{intro}</p>
          </div>

          {/* Comparison table */}
          <div className="max-w-[1200px] mx-auto mb-20">
            <div className="rounded-2xl border border-white/[0.12] bg-white/[0.02] overflow-x-auto">
              <div className="min-w-[640px]">
                <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-white/[0.08]">
                  <div className="px-6 py-4" />
                  <div className="px-6 py-4 flex items-center gap-2.5">
                    {logo.kind === 'image' ? (
                      <div className="w-6 h-6 rounded-full overflow-hidden ring-1 ring-white/10 flex-shrink-0">
                        <img src={logo.src} alt={logo.alt} className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      <div className={`w-6 h-6 rounded-md ${logo.bg} flex items-center justify-center flex-shrink-0`}>
                        <logo.Icon className={`w-4 h-4 ${logo.color}`} strokeWidth={1.75} />
                      </div>
                    )}
                    <span className="text-sm font-medium text-white/70 truncate">{toolName}</span>
                  </div>
                  <div className="px-6 py-4 flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-md bg-white flex items-center justify-center flex-shrink-0">
                      <FactoryFlowMark className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-sm font-semibold text-white truncate">Factory Flow</span>
                  </div>
                </div>
                <div className="divide-y divide-white/[0.06]">
                  {rows.map((row) => (
                    <div key={row.label} className="grid grid-cols-[1fr_1fr_1fr]">
                      <div className="px-6 py-4 text-sm font-medium text-white flex items-center gap-2.5">
                        <RowIcon label={row.label} />
                        {row.label}
                      </div>
                      <div className={`px-6 py-4 flex items-start gap-2 ${cellTone[row.alternative.kind].bg}`}>
                        <CellIcon kind={row.alternative.kind} />
                        <span className={`text-sm leading-snug ${cellTone[row.alternative.kind].text}`}>{row.alternative.text}</span>
                      </div>
                      <div className={`px-6 py-4 flex items-start gap-2 ${cellTone[row.factoryFlow.kind].bg}`}>
                        <CellIcon kind={row.factoryFlow.kind} />
                        <span className={`text-sm leading-snug ${cellTone[row.factoryFlow.kind].text}`}>{row.factoryFlow.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="sm:hidden text-xs text-white/30 text-center mt-3">Swipe to see the full table →</p>
          </div>

          {/* When the alternative still makes sense */}
          <div className="max-w-[720px] mx-auto mb-20">
            <h2 className="text-xl font-semibold text-white mb-4">{whenGoodTitle}</h2>
            {whenGoodParagraphs.map((paragraph, i) => (
              <p key={i} className="text-secondary leading-relaxed mb-3 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div className="max-w-[500px] mx-auto text-center">
            <h2 className="text-2xl font-semibold text-white mb-3">Get started today</h2>
            <BetaSignupForm />
          </div>

          {/* See also */}
          {otherComparisons.length > 0 && (
            <div className="max-w-[1200px] mx-auto mt-20 pt-12 border-t border-white/[0.08]">
              <p className="text-sm font-medium text-secondary text-center mb-6">See also</p>
              <div className="rounded-2xl border border-white/[0.12] bg-white/[0.02] overflow-hidden grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y divide-x divide-white/[0.06]">
                {otherComparisons.map((c) => (
                  <Link
                    key={c.slug}
                    to={`/compare/${c.slug}`}
                    className="group p-4 sm:p-5 flex flex-col items-center gap-2 text-center hover:bg-white/[0.04] transition-colors"
                  >
                    <ToolTile logo={c.logo} size="sm" />
                    <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                      vs. {c.toolName}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
