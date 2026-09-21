import type { LucideIcon } from 'lucide-react';

interface MiniIconProps {
  icon: LucideIcon;
  /** Marks the Gateway itself so it reads consistently across every card. */
  active?: boolean;
  /** Small caption rendered under the icon. */
  label?: string;
  /** Optional second line under the label, e.g. an IP range — rendered in monospace. */
  sublabel?: string;
}

/** A small uniform icon chip (optionally labeled) used to build tiny glyph-style diagrams inside a card. */
export default function MiniIcon({ icon: Icon, active = false, label, sublabel }: MiniIconProps) {
  return (
    <div className="flex flex-col items-center gap-1 flex-shrink-0">
      <div
        className={`flex items-center justify-center w-9 h-9 rounded-lg border ${active ? 'bg-purple-500/15 border-purple-400/40' : 'bg-white/[0.07] border-white/15'
          }`}
      >
        <Icon className={`w-4 h-4 ${active ? 'text-purple-300' : 'text-white/70'}`} strokeWidth={1.75} />
      </div>
      {label && (
        <span className={`text-[9px] whitespace-nowrap ${active ? 'text-purple-200' : 'text-white/60'}`}>{label}</span>
      )}
      {sublabel && <span className="text-[8px] font-mono whitespace-nowrap text-white/55">{sublabel}</span>}
    </div>
  );
}
