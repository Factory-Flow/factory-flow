import type { ToolLogo } from './types';

type ToolTileProps = {
  logo: ToolLogo;
  size?: 'sm' | 'md';
};

export default function ToolTile({ logo, size = 'md' }: ToolTileProps) {
  const tile = size === 'sm' ? 'w-8 h-8' : 'w-10 h-10';
  const icon = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';

  if (logo.kind === 'image') {
    return (
      <div className={`${tile} rounded-full overflow-hidden ring-1 ring-white/10 flex-shrink-0`}>
        <img src={logo.src} alt={logo.alt} className="w-full h-full object-cover" />
      </div>
    );
  }

  return (
    <div className={`${tile} rounded-lg ${logo.bg} flex items-center justify-center flex-shrink-0`}>
      <logo.Icon className={`${icon} ${logo.color}`} strokeWidth={1.75} />
    </div>
  );
}
