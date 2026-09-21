import { ScrollText, Copy } from 'lucide-react';

const LOG_LINES = [
  { time: '08:14:02', text: 'Collector started', tone: 'neutral' },
  { time: '08:14:03', text: 'PLC connected · OPC UA', tone: 'success' },
  { time: '08:16:47', text: 'MQTT connection failed', tone: 'error' },
  { time: '08:16:52', text: 'Data sent · 1,204 pts', tone: 'neutral' },
] as const;

const TONE_BG: Record<(typeof LOG_LINES)[number]['tone'], string> = {
  neutral: 'bg-white/[0.03]',
  success: 'bg-green-500/10',
  error: 'bg-red-500/10',
};

const TONE_TEXT: Record<(typeof LOG_LINES)[number]['tone'], string> = {
  neutral: 'text-white/90',
  success: 'text-green-300',
  error: 'text-red-300',
};

export default function MiniLogging() {
  return (
    <div className="flex flex-col items-start gap-2 w-full">
      <div className="flex items-center gap-1.5 text-white/50">
        <ScrollText className="w-3.5 h-3.5" strokeWidth={1.75} />
        <span className="text-[10px] font-medium">Audit log</span>
      </div>
      <div className="w-full rounded-lg border border-white/10 bg-black/30 p-1.5 flex flex-col gap-1">
        {LOG_LINES.map((line) => (
          <div
            key={line.text}
            className={`flex items-center gap-1.5 rounded-md px-1.5 py-1 text-[9px] font-mono ${TONE_BG[line.tone]}`}
          >
            <Copy className="w-2.5 h-2.5 text-white/40 flex-shrink-0" strokeWidth={1.75} />
            <span className="text-white/55 flex-shrink-0">{line.time}</span>
            <span className={`truncate ${TONE_TEXT[line.tone]}`}>{line.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
