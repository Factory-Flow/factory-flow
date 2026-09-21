import { ArrowDown } from 'lucide-react';

const SOURCES = [
  { protocol: 'OPC UA', raw: 'GoodCount' },
  { protocol: 'Modbus', raw: '40012' },
  { protocol: 'MQTT', raw: 'reject/total' },
];

export default function MiniNetworks() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-start gap-2">
        {SOURCES.map((s) => (
          <div
            key={s.protocol}
            className="flex flex-col items-center gap-0.5 rounded-lg border border-white/20 bg-white/[0.05] px-2.5 py-2"
          >
            <span className="text-[8px] font-mono text-white/40 whitespace-nowrap">{s.protocol}</span>
            <span className="text-[9px] font-mono text-white/70 whitespace-nowrap">{s.raw}</span>
          </div>
        ))}
      </div>
      <ArrowDown className="w-3.5 h-3.5 text-white/35 flex-shrink-0" strokeWidth={1.75} />
      <div className="flex flex-col items-center gap-1 rounded-lg border border-purple-400/40 bg-purple-500/15 px-3 py-2">
        <span className="text-[9px] font-medium text-purple-200">Part Count</span>
        <div className="flex items-center gap-2 text-[8px] font-mono text-purple-200/80 whitespace-nowrap">
          <span>Good</span>
          <span>Bad</span>
          <span>Total</span>
        </div>
      </div>
    </div>
  );
}
