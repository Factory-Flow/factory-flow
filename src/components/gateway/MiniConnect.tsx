import { Cog, Boxes, Code2, Plug, ArrowRight } from 'lucide-react';
import MiniIcon from './MiniIcon';
import MiniRow from './MiniRow';

export default function MiniConnect() {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="flex flex-col gap-1.5">
        <MiniRow icon={Cog} label="Machines & controls" />
        <MiniRow icon={Boxes} label="Factory systems" />
        <MiniRow icon={Code2} label="Apps & APIs" />
      </div>
      <ArrowRight className="w-3.5 h-3.5 text-white/35 flex-shrink-0" strokeWidth={1.75} />
      <MiniIcon icon={Plug} label="Gateway" active />
    </div>
  );
}
