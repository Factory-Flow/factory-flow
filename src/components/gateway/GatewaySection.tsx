import { useState, useEffect, type ReactNode } from 'react';
import { ArrowLeftRight, Zap, Plug, Network, ShieldCheck, ScrollText, type LucideIcon } from 'lucide-react';
import MiniConnect from './MiniConnect';
import MiniNetworks from './MiniNetworks';
import MiniLogging from './MiniLogging';
import MiniSecurity from './MiniSecurity';
import ConnectionPill from './ConnectionPill';
import { useRevealOnScroll } from './useRevealOnScroll';
import { AppleIcon, WindowsIcon, LinuxIcon } from './PlatformIcons';

const AUTO_ADVANCE_MS = 15000;

const cards: Array<{
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  visual: ReactNode;
  tags?: { label: string; description: string; url: string; icon: ReactNode; variant?: 'light' | 'dark'; showLabel?: boolean }[];
}> = [
  {
    number: '01',
    icon: Plug,
    title: 'Universal connectivity',
    description:
      'Connect directly to your machines and control systems, or tap into your factory systems already collecting data. Factory Flow Gateway can ingest data from multiple sources at the same time using any of the following protocols:',
    visual: <MiniConnect />,
    tags: [
      {
        label: 'OPC UA',
        description: 'Platform-independent industrial protocol for secure, structured machine data.',
        url: 'https://opcfoundation.org/about/opc-technologies/opc-ua/',
        icon: <img src="/opcua-logo.png" alt="OPC UA" className="h-full w-auto max-w-full object-contain" />,
      },
      {
        label: 'Modbus',
        description: 'Long-standing serial/TCP protocol for talking to PLCs and industrial devices.',
        url: 'https://modbus.org/',
        icon: <img src="/modbus-logo.svg" alt="Modbus" className="h-full w-auto max-w-full object-contain" />,
      },
      {
        label: 'EtherNet/IP',
        description: 'Industrial Ethernet protocol built on the Common Industrial Protocol (CIP).',
        url: 'https://www.odva.org/technology-standards/key-technologies/ethernet-ip/',
        icon: <img src="/ethernetip-logo.webp" alt="EtherNet/IP" className="h-full w-auto max-w-full object-contain" />,
      },
      {
        label: 'MTConnect',
        description: 'Open manufacturing standard for exchanging machine tool and equipment data.',
        url: 'https://www.mtconnect.org/',
        icon: <img src="/mtconnect-logo.png" alt="MTConnect" className="h-full w-auto max-w-full object-contain" />,
      },
      {
        label: 'MQTT',
        description: 'Lightweight publish/subscribe messaging protocol built for IoT devices.',
        url: 'https://mqtt.org/',
        icon: <img src="/mqtt-logo.svg" alt="MQTT" className="h-full w-auto max-w-full object-contain" />,
      },
      {
        label: 'HTTP',
        description: 'GET and POST requests to external APIs, or open a port to receive webhooks.',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP',
        icon: <ArrowLeftRight className="w-full h-full text-cyan-400" strokeWidth={1.75} />,
        showLabel: true,
      },
      {
        label: 'GraphQL',
        description: 'Query language for APIs that fetches exactly the data you ask for.',
        url: 'https://graphql.org/',
        icon: <img src="/graphql-logo.svg" alt="GraphQL" className="h-full w-auto max-w-full object-contain" />,
      },
      {
        label: 'WebSocket',
        description: 'Persistent, two-way connection for streaming real-time machine data.',
        url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSocket',
        icon: <Zap className="w-full h-full text-rose-400" strokeWidth={1.75} />,
        showLabel: true,
      },
    ],
  },
  {
    number: '02',
    icon: Network,
    title: 'Data mapping',
    description:
      'No custom Node.js or Node-RED scripts. Point the Gateway at a data source and map it to a machine in minutes. One machine is easy — hundreds, with addresses that shift over time, isn’t. Factory Flow Gateway handles that automatically.',
    visual: <MiniNetworks />,
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Security',
    description:
      'Run one gateway per network segment to keep every network isolated from the rest of your IT. Factory Flow Gateway only makes outbound connections — never inbound — so it can sit on a network with no general internet access, as long as it can reach your self-hosted deployment or Factory Flow Cloud.',
    visual: <MiniSecurity />,
  },
  {
    number: '04',
    icon: ScrollText,
    title: 'Activity logs',
    description:
      'Connection attempts, data sends, collector status, and server access are all logged for full auditability.',
    visual: <MiniLogging />,
  },
];

function GatewayNavItem({
  card,
  active,
  onClick,
}: {
  card: (typeof cards)[number];
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`w-full flex flex-col items-center md:items-start gap-2 px-4 py-3.5 rounded-lg border text-center md:text-left transition-colors ${
        active ? 'bg-white/[0.06] border-white/[0.15]' : 'border-transparent hover:bg-white/[0.03]'
      }`}
    >
      <card.icon className={`w-6 h-6 flex-shrink-0 ${active ? 'text-purple-300' : 'text-tertiary'}`} strokeWidth={1.75} />
      <span className={`text-xs font-semibold leading-snug ${active ? 'text-white' : 'text-secondary'}`}>
        {card.title}
      </span>
      <div className={`w-full h-0.5 rounded-full overflow-hidden ${active ? 'bg-white/10' : 'bg-transparent'}`}>
        {active && (
          <div
            key={card.number}
            className="gw-progress-fill h-full rounded-full bg-purple-400/70"
            style={{ animationDuration: `${AUTO_ADVANCE_MS}ms` }}
          />
        )}
      </div>
    </button>
  );
}

function GatewayDetailPanel({ card }: { card: (typeof cards)[number] }) {
  return (
    <div
      key={card.number}
      role="tabpanel"
      className="gw-panel-in rounded-xl border border-white/[0.12] bg-white/[0.03] p-6 md:p-8 flex flex-col gap-6"
    >
      <div className="flex items-center justify-center min-h-48 border-b border-white/[0.06] pb-6">{card.visual}</div>
      <div>
        <h4 className="text-lg font-semibold text-white mb-2 leading-snug">{card.title}</h4>
        <p className="text-sm text-secondary leading-relaxed">{card.description}</p>
        {card.tags && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {card.tags.map((tag) => (
              <ConnectionPill
                key={tag.label}
                label={tag.label}
                description={tag.description}
                url={tag.url}
                icon={tag.icon}
                variant={tag.variant}
                showLabel={tag.showLabel}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function GatewaySection() {
  const [selected, setSelected] = useState(0);
  const { ref, inView } = useRevealOnScroll<HTMLDivElement>();

  useEffect(() => {
    const id = setInterval(() => {
      setSelected((s) => (s + 1) % cards.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [selected]);

  return (
    <section id="gateway" className="pt-12 pb-24 md:pt-16 md:pb-32 relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center max-w-[720px] mx-auto mb-10 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-white">
            Factory Flow <span className="bg-clip-text text-transparent bg-gradient-to-br from-purple-400 to-indigo-400">Gateway</span>
          </h2>
          <p className="text-lg md:text-xl text-secondary leading-relaxed">
            Factory Flow Gateway is a desktop application that runs inside your factory network
            and connects your existing machines, controllers, and factory
            systems to Factory Flow — without ripping out what you already have.
          </p>
          <div className="flex items-center justify-center gap-5 mt-4 text-white">
            <span className="inline-flex items-center gap-2 text-sm font-medium">
              <AppleIcon className="w-[18px] h-[18px]" />
              macOS
            </span>
            <span className="inline-flex items-center gap-2 text-sm font-medium">
              <WindowsIcon className="w-[18px] h-[18px]" />
              Windows
            </span>
            <span className="inline-flex items-center gap-2 text-sm font-medium">
              <LinuxIcon className="w-[18px] h-[18px]" />
              Linux
            </span>
          </div>
        </div>

        <div
          ref={ref}
          className={`gw-reveal ${inView ? 'gw-in-view' : ''} grid grid-cols-1 md:grid-cols-[260px_1fr] gap-5 md:gap-8 max-w-[1000px] mx-auto`}
        >
          <div role="tablist" aria-orientation="vertical" className="flex flex-col gap-1.5">
            {cards.map((card, i) => (
              <GatewayNavItem key={card.number} card={card} active={i === selected} onClick={() => setSelected(i)} />
            ))}
          </div>
          <GatewayDetailPanel card={cards[selected]} />
        </div>
      </div>
    </section>
  );
}
