import type { ReactNode } from 'react';
import { ExternalLink } from 'lucide-react';

function Tooltip({
  label,
  description,
  icon,
  url,
}: {
  label: string;
  description: string;
  icon: ReactNode;
  url: string;
}) {
  const hostname = (() => {
    try {
      return new URL(url).hostname.replace(/^www\./, '');
    } catch {
      return url;
    }
  })();

  return (
    // Outer box spans the gap down to the pill (via pb-2 padding, not margin) so the
    // hoverable area is continuous — no dead zone the mouse can slip through on the way up.
    <span className="pointer-events-none absolute bottom-full left-1/2 z-20 w-56 -translate-x-1/2 pb-2 opacity-0 transition-opacity duration-150 group-hover:pointer-events-auto group-hover:opacity-100">
      <span className="block rounded-lg bg-white px-3 py-2.5 text-left shadow-lg">
        <span className="flex items-center gap-2">
          <span className="flex items-center justify-center h-5 max-w-14 flex-shrink-0">{icon}</span>
          <span className="text-sm font-semibold text-neutral-900 whitespace-normal">{label}</span>
        </span>
        <span className="mt-1 block text-xs leading-snug text-neutral-500 whitespace-normal">{description}</span>
        <span className="mt-1.5 flex items-center gap-1 text-xs font-medium text-blue-600">
          {hostname}
          <ExternalLink className="w-3 h-3" strokeWidth={2} />
        </span>
      </span>
    </span>
  );
}

export default function ConnectionPill({
  label,
  description,
  url,
  icon,
  variant = 'light',
  showLabel = false,
}: {
  label: string;
  description: string;
  url: string;
  icon: ReactNode;
  /** 'dark' for logos whose mark relies on a dark/colored backdrop (e.g. white-on-transparent artwork). */
  variant?: 'light' | 'dark';
  /** True for generic (non-brand) icons that need the label spelled out, since the glyph alone isn't identifying. */
  showLabel?: boolean;
}) {
  if (showLabel) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center justify-center w-24 h-7 rounded-md bg-white"
      >
        <span className="flex items-center justify-center gap-1.5 max-w-full px-2 text-[10px] font-medium text-neutral-700 whitespace-nowrap overflow-hidden">
          <span className="flex items-center justify-center w-3 h-3 flex-shrink-0">{icon}</span>
          <span className="truncate">{label}</span>
        </span>
        <Tooltip label={label} description={description} icon={icon} url={url} />
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`group relative inline-flex items-center justify-center w-24 h-7 rounded-md ${variant === 'dark' ? 'bg-neutral-900' : 'bg-white'}`}
    >
      <span className="flex items-center justify-center h-4 max-w-16">{icon}</span>
      <Tooltip label={label} description={description} icon={icon} url={url} />
    </a>
  );
}
