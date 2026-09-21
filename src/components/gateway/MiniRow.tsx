import type { LucideIcon } from 'lucide-react';

interface MiniRowProps {
  icon: LucideIcon;
  label: string;
}

/** A compact icon + label row, used to stack several sources above one MiniIcon target. */
export default function MiniRow({ icon: Icon, label }: MiniRowProps) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center justify-center w-5 h-5 rounded border border-white/15 bg-white/[0.07] flex-shrink-0">
        <Icon className="w-2.5 h-2.5 text-white/70" strokeWidth={1.75} />
      </div>
      <span className="text-[10px] text-white/75 whitespace-nowrap">{label}</span>
    </div>
  );
}
