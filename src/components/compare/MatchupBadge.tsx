import FactoryFlowMark from './FactoryFlowMark';
import type { ToolLogo } from './types';

type MatchupBadgeProps = {
  toolName: string;
  logo: ToolLogo;
  size?: 'md' | 'lg';
  showNames?: boolean;
};

export default function MatchupBadge({ toolName, logo, size = 'md', showNames = true }: MatchupBadgeProps) {
  const tile = size === 'lg' ? 'w-14 h-14 rounded-2xl' : 'w-10 h-10 rounded-xl';
  const icon = size === 'lg' ? 'w-7 h-7' : 'w-5 h-5';
  const mark = size === 'lg' ? 'w-9 h-9' : 'w-7 h-7';
  const label = size === 'lg' ? 'text-base' : 'text-sm';

  const vsLabel = <span className="text-xs font-medium text-white/30 uppercase tracking-wider">vs</span>;

  return (
    <div className={`flex ${showNames ? 'items-start' : 'items-center'} justify-center gap-3 sm:gap-4`}>
      <div className="flex flex-col items-center gap-2 min-w-0">
        <div className={`${tile} bg-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-black/40`}>
          <FactoryFlowMark className={`${mark} text-black`} />
        </div>
        {showNames && (
          <span className={`${label} font-semibold text-white whitespace-nowrap`}>Factory Flow</span>
        )}
      </div>

      {showNames ? (
        <div className={`${tile} flex items-center justify-center flex-shrink-0`}>{vsLabel}</div>
      ) : (
        <div className="flex-shrink-0">{vsLabel}</div>
      )}

      <div className="flex flex-col items-center gap-2 min-w-0">
        {logo.kind === 'image' ? (
          <div className={`${tile} overflow-hidden flex-shrink-0 ring-1 ring-white/10`}>
            <img src={logo.src} alt={logo.alt} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className={`${tile} ${logo.bg} border border-white/10 flex items-center justify-center flex-shrink-0`}>
            <logo.Icon className={`${icon} ${logo.color}`} strokeWidth={1.75} />
          </div>
        )}
        {showNames && (
          <span className={`${label} font-semibold text-white/70 text-center leading-snug max-w-[160px]`}>{toolName}</span>
        )}
      </div>
    </div>
  );
}
