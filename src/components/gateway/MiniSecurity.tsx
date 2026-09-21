import { Lock, Plug, Network, ArrowDown } from 'lucide-react';
import MiniIcon from './MiniIcon';

export default function MiniSecurity() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-start gap-3">
        <div className="rounded-lg border border-white/20 bg-white/[0.05] px-3 py-2.5">
          <MiniIcon icon={Plug} label="Network A" sublabel="10.0.1.0/24" active />
        </div>
        <div className="rounded-lg border border-white/20 bg-white/[0.05] px-3 py-2.5">
          <MiniIcon icon={Plug} label="Network B" sublabel="10.0.2.0/24" active />
        </div>
      </div>
      <div className="flex items-center gap-1">
        <Lock className="w-3 h-3 text-white/35 flex-shrink-0" strokeWidth={1.75} />
        <ArrowDown className="w-3.5 h-3.5 text-white/35 flex-shrink-0" strokeWidth={1.75} />
      </div>
      <MiniIcon icon={Network} label="Factory Flow" />
    </div>
  );
}
