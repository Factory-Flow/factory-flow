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
  showLabel = false,
}: {
  label: string;
  description: string;
  url: string;
  icon: ReactNode;
  /** True for generic (non-brand) icons that need the label spelled out, since the glyph alone isn't identifying. */
  showLabel?: boolean;
}) {
  if (showLabel) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center justify-center w-28 h-9"
      >
        <span className="flex items-center justify-center gap-1.5 max-w-full px-2 text-xs font-medium whitespace-nowrap overflow-hidden">
          <span className="flex items-center justify-center w-4 h-4 flex-shrink-0 grayscale brightness-0 invert opacity-50 transition-all duration-200 group-hover:grayscale-0 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100">
            {icon}
          </span>
          <span className="truncate text-neutral-300 opacity-80 transition-opacity duration-200 group-hover:text-white group-hover:opacity-100">
            {label}
          </span>
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
      className="group relative inline-flex items-center justify-center w-28 h-9"
    >
      <span className="flex items-center justify-center h-7 max-w-24 grayscale brightness-0 invert opacity-50 transition-all duration-200 group-hover:grayscale-0 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100">
        {icon}
      </span>
      <Tooltip label={label} description={description} icon={icon} url={url} />
    </a>
  );
}
