import type { ToolLogo } from './types';

export default function ToolGlyph({ logo, className = 'w-4 h-4' }: { logo: ToolLogo; className?: string }) {
  if (logo.kind === 'image') {
    return <img src={logo.src} alt={logo.alt} className={`${className} rounded-full object-cover flex-shrink-0`} />;
  }
  const { Icon, color } = logo;
  return <Icon className={`${className} ${color} flex-shrink-0`} strokeWidth={1.75} />;
}
