import type { ReactNode } from 'react';
import { ArrowLeftRight, Zap, Plug, Network, ShieldCheck, ScrollText, type LucideIcon } from 'lucide-react';
import Lightbox from '../Lightbox';
import ConnectionPill from './ConnectionPill';
import { useRevealOnScroll } from './useRevealOnScroll';
import { AppleIcon, WindowsIcon, LinuxIcon } from './PlatformIcons';

const cards: Array<{
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  title: string;
  description: string;
  tags?: { label: string; description: string; url: string; icon: ReactNode; variant?: 'light' | 'dark'; showLabel?: boolean }[];
}> = [
  {
    icon: Plug,
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/10',
    title: 'Universal connectivity',
    description:
      'Connect directly to your machines and control systems, or tap into your factory systems already collecting data. Factory Flow Gateway can ingest data from multiple sources at the same time using any of the following protocols:',
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
    icon: Network,
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10',
    title: 'Data mapping',
    description:
      'No custom Node.js or Node-RED scripts. Point the Gateway at a data source and map it to a machine in minutes. One machine is easy — hundreds, with addresses that shift over time, isn’t. Factory Flow Gateway handles that automatically.',
  },
  {
    icon: ShieldCheck,
    iconColor: 'text-green-400',
    iconBg: 'bg-green-500/10',
    title: 'Security',
    description:
      'Run one gateway per network segment to keep every network isolated from the rest of your IT. Factory Flow Gateway only makes outbound connections — never inbound — so it can sit on a network with no general internet access, as long as it can reach your self-hosted deployment or Factory Flow Cloud.',
  },
  {
    icon: ScrollText,
    iconColor: 'text-orange-400',
    iconBg: 'bg-orange-500/10',
    title: 'Activity logs',
    description:
      'Connection attempts, data sends, collector status, and server access are all logged for full auditability.',
  },
];

function GatewayHero() {
  return (
    <div className="relative rounded-2xl border border-white/[0.12] bg-[#0a0b0d] overflow-hidden aspect-[2840/1896]">
      <Lightbox src="/factory-flow-gateway-dashboard.png" alt="Factory Flow Gateway dashboard">
        <img
          src="/factory-flow-gateway-dashboard.png"
          alt="Factory Flow Gateway dashboard"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </Lightbox>
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#08090a] to-transparent pointer-events-none" />
    </div>
  );
}

function GatewayCard({ card }: { card: (typeof cards)[number] }) {
  return (
    <div className="rounded-2xl border border-white/[0.12] bg-white/[0.02] p-6 flex flex-col gap-4 transition-colors hover:bg-white/[0.04]">
      <div className={`w-10 h-10 rounded-lg ${card.iconBg} flex items-center justify-center`}>
        <card.icon className={`w-5 h-5 ${card.iconColor}`} strokeWidth={2} />
      </div>
      <div>
        <h4 className="text-base font-semibold text-white mb-2">{card.title}</h4>
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
  const { ref, inView } = useRevealOnScroll<HTMLDivElement>();

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

        <div ref={ref} className={`gw-reveal ${inView ? 'gw-in-view' : ''} flex flex-col gap-8`}>
          <GatewayHero />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cards.map((card) => (
              <GatewayCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
