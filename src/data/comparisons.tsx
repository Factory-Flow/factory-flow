import type { ReactNode } from 'react';
import { ClipboardList } from 'lucide-react';
import type { ComparisonRow } from '../components/compare/ComparisonPage';
import type { ToolLogo } from '../components/compare/types';
import NodeRedLogo from '../components/compare/NodeRedLogo';
import IgnitionLogo from '../components/compare/IgnitionLogo';
import VorneMark from '../components/compare/VorneMark';

export type ComparisonDefinition = {
  /** URL segment — page lives at /compare/{slug} */
  slug: string;
  toolName: string;
  logo: ToolLogo;
  title: ReactNode;
  intro: string;
  rows: ComparisonRow[];
  whenGoodTitle: string;
  whenGoodParagraphs: string[];
};

export const comparisons: ComparisonDefinition[] = [
  {
    slug: 'manual',
    toolName: 'Manual tracking',
    logo: { kind: 'icon', Icon: ClipboardList, color: 'text-amber-400', bg: 'bg-amber-500/10' },
    title: (
      <>
        Clipboards and spreadsheets work.{' '}
        <span className="text-gradient">Until someone asks for last month's trend.</span>
      </>
    ),
    intro:
      "Timing cycles with a stopwatch and logging them to a spreadsheet is how a lot of shops get their first read on performance. Factory Flow Gateway automates that collection for any machine with a PLC, OPC UA, MQTT, or Modbus connection — and for the rest, you can log part counts directly through the Factory Flow API instead of a spreadsheet. Either way, it's cheap to start a spreadsheet — but every number in it cost someone time to write down, and every gap is a shift nobody can account for.",
    rows: [
      {
        label: 'Cycle time collection',
        alternative: { kind: 'no', text: 'An operator times parts with a stopwatch or clock and writes it down' },
        factoryFlow: { kind: 'yes', text: 'Captured automatically from the machine, every cycle' },
      },
      {
        label: 'Accuracy',
        alternative: { kind: 'no', text: 'Subject to human error, rounding, and missed entries' },
        factoryFlow: { kind: 'yes', text: 'Precise, timestamped data straight from the source' },
      },
      {
        label: 'OEE calculation',
        alternative: { kind: 'no', text: 'Manual formulas in a spreadsheet, usually recalculated after the shift' },
        factoryFlow: { kind: 'yes', text: 'Calculated live, the moment data comes in' },
      },
      {
        label: 'Downtime causes',
        alternative: { kind: 'partial', text: 'Remembered and reconstructed after the fact' },
        factoryFlow: { kind: 'yes', text: 'Captured automatically with a timestamp when it happens' },
      },
      {
        label: 'Real-time visibility',
        alternative: { kind: 'no', text: 'None — numbers show up after the shift, or the next morning' },
        factoryFlow: { kind: 'yes', text: "Live, as it's happening on the floor" },
      },
      {
        label: 'Multi-line / facility rollups',
        alternative: { kind: 'no', text: 'Manual aggregation across separate sheets' },
        factoryFlow: { kind: 'yes', text: 'Built in — compare lines and facilities from one view' },
      },
      {
        label: 'No PLC or sensor on a machine?',
        alternative: { kind: 'no', text: 'Still a stopwatch and a notebook' },
        factoryFlow: { kind: 'partial', text: 'Log counts straight through the Factory Flow API — same system as your automated machines, no spreadsheet' },
      },
      {
        label: 'Labor cost',
        alternative: { kind: 'no', text: "Someone's time spent collecting, entering, and crunching numbers" },
        factoryFlow: { kind: 'yes', text: 'No added labor — the data collects itself' },
      },
      {
        label: 'Historical trends',
        alternative: { kind: 'partial', text: 'Scattered across files, versions, and whoever kept them' },
        factoryFlow: { kind: 'yes', text: 'Structured, queryable history with export on demand' },
      },
    ],
    whenGoodTitle: 'When manual tracking is still fine',
    whenGoodParagraphs: [
      "Manual logging isn't wrong — for a couple of machines, an intermittent process, or a shop that isn't ready to invest in a tool yet, a spreadsheet gets the job done without any setup at all.",
      "The costs show up as you grow: more machines means more time spent collecting and entering data, more room for a missed entry or a typo'd formula, and no real way to see what's happening until someone sits down and tallies it up. At that point, the labor spent maintaining the spreadsheet is often more expensive than automating the collection in the first place.",
    ],
  },
  {
    slug: 'node-red',
    toolName: 'Node-RED',
    logo: { kind: 'icon', Icon: NodeRedLogo, color: 'text-[#8F0000]', bg: 'bg-[#8F0000]/10' },
    title: (
      <>
        Node-RED is great for wiring things up.{' '}
        <span className="text-gradient">It wasn't built to be your analytics platform.</span>
      </>
    ),
    intro:
      "A lot of shops start production monitoring with a Node-RED flow pulling tags off the PLC into a dashboard. Factory Flow Gateway does that same connection work out of the box — it runs on your machine network, talks OPC UA, MQTT, and Modbus, and forwards the data to Factory Flow, no flow-building required. It's a solid way to prototype — but turning a hand-built flow into something your whole team relies on is a different job.",
    rows: [
      {
        label: 'Setup time',
        alternative: { kind: 'no', text: 'Weeks of building and wiring up flows, nodes, and dashboards' },
        factoryFlow: { kind: 'yes', text: 'Minutes — connect a machine and data starts flowing' },
      },
      {
        label: 'Connecting to machines',
        alternative: { kind: 'no', text: 'You wire up OPC UA, MQTT, or Modbus nodes yourself, flow by flow' },
        factoryFlow: { kind: 'yes', text: 'Factory Flow Gateway connects to OPC UA, MQTT, and Modbus sources out of the box — or log counts straight through the API' },
      },
      {
        label: 'OEE calculation',
        alternative: { kind: 'no', text: 'Custom function nodes you write and debug yourself' },
        factoryFlow: { kind: 'yes', text: 'Calculated automatically for every machine, live' },
      },
      {
        label: 'Alerting on thresholds',
        alternative: { kind: 'partial', text: 'Possible, but requires custom scripting in your flow' },
        factoryFlow: { kind: 'yes', text: 'Built in — set a threshold, get notified' },
      },
      {
        label: 'Multi-line / facility rollups',
        alternative: { kind: 'no', text: 'Manual aggregation across separate flows and dashboards' },
        factoryFlow: { kind: 'yes', text: 'Built in — compare lines and facilities from one view' },
      },
      {
        label: 'Who maintains it',
        alternative: { kind: 'no', text: 'Whoever built the flow — breaks silently when they leave or a node updates' },
        factoryFlow: { kind: 'yes', text: 'We do — maintained, supported, and versioned for you' },
      },
      {
        label: 'Historical data & export',
        alternative: { kind: 'partial', text: 'Depends on what database you wired up yourself' },
        factoryFlow: { kind: 'yes', text: 'Structured retention with export on demand' },
      },
      {
        label: 'Mobile / remote access',
        alternative: { kind: 'no', text: 'Usually none without extra work' },
        factoryFlow: { kind: 'yes', text: 'Web-based — check the floor from anywhere' },
      },
      {
        label: 'Access control',
        alternative: { kind: 'no', text: "Node-RED's editor has no real concept of roles or permissions" },
        factoryFlow: { kind: 'yes', text: 'Admin, Editor, and Viewer roles built in' },
      },
    ],
    whenGoodTitle: 'When Node-RED is still the right call',
    whenGoodParagraphs: [
      "Node-RED is a genuinely good tool, and we're not going to pretend otherwise. If you're prototyping a one-off integration, wiring a single test rig, or need a custom flow that bridges a protocol no off-the-shelf product supports, it's a reasonable place to start.",
      "Where it tends to break down is scale: a second line, a second facility, a new hire who didn't build the flow, or a manager who wants OEE trends going back six months. That's usually the point where a hand-built flow turns into a maintenance job nobody signed up for.",
    ],
  },
  {
    slug: 'ignition',
    toolName: 'Ignition',
    logo: { kind: 'icon', Icon: IgnitionLogo, color: 'text-[#F7901E]', bg: 'bg-[#F7901E]/10' },
    title: (
      <>
        Ignition can build almost anything.{' '}
        <span className="text-gradient">That's also the problem.</span>
      </>
    ),
    intro:
      "Ignition is a genuinely powerful SCADA and MES platform — unlimited tags and clients on a single server license, and no limit to what you can build with it. But it's a platform, not a product: every screen, calculation, and dashboard is something you or an integrator designs from scratch.",
    rows: [
      {
        label: 'What you get out of the box',
        alternative: { kind: 'no', text: 'A blank SCADA/MES platform — screens, tags, and logic are yours to design' },
        factoryFlow: { kind: 'yes', text: 'Production dashboards, OEE, and alerts ready on day one' },
      },
      {
        label: 'Setup time',
        alternative: { kind: 'no', text: 'A build project — typically a systems integrator or in-house engineer' },
        factoryFlow: { kind: 'yes', text: 'Minutes — connect a machine and data starts flowing' },
      },
      {
        label: 'Connecting to machines',
        alternative: { kind: 'partial', text: 'You configure OPC UA, MQTT, and other drivers yourself in the gateway' },
        factoryFlow: { kind: 'yes', text: 'Factory Flow Gateway connects to OPC UA, MQTT, and Modbus sources out of the box — or log counts manually through the API' },
      },
      {
        label: 'Licensing model',
        alternative: { kind: 'partial', text: 'Perpetual, per-server license plus paid modules — unlimited tags and clients on that server' },
        factoryFlow: { kind: 'yes', text: 'Simple monthly subscription, no server to license or host' },
      },
      {
        label: 'OEE & downtime out of the box',
        alternative: { kind: 'no', text: 'Not included — you build the logic yourself or buy a 3rd-party module' },
        factoryFlow: { kind: 'yes', text: 'Calculated automatically for every machine, live' },
      },
      {
        label: 'Ongoing maintenance',
        alternative: { kind: 'no', text: 'Yours — screens, scripts, and server upgrades are maintained in-house' },
        factoryFlow: { kind: 'yes', text: 'We do — maintained, supported, and versioned for you' },
      },
      {
        label: 'Multi-facility rollups',
        alternative: { kind: 'partial', text: 'Possible, but requires a gateway network you design and manage' },
        factoryFlow: { kind: 'yes', text: 'Built in — compare lines and facilities from one view' },
      },
      {
        label: 'Mobile / remote access',
        alternative: { kind: 'partial', text: 'Available via the Perspective module, which you design and build' },
        factoryFlow: { kind: 'yes', text: 'Web-based and ready to use — check the floor from anywhere' },
      },
      {
        label: 'Track record & ecosystem',
        alternative: { kind: 'yes', text: 'Decades in the field, a large module ecosystem, and deployments at companies like Shell and Johnson & Johnson' },
        factoryFlow: { kind: 'partial', text: "Newer platform — we're still building that track record" },
      },
    ],
    whenGoodTitle: 'When Ignition is still the right call',
    whenGoodParagraphs: [
      "If you need a fully custom SCADA system — tightly integrated with specific PLCs, historians, and control logic that no packaged product will ever cover — Ignition's flexibility is hard to beat. Plants with an in-house controls team or a trusted integrator get real value from building exactly what they need.",
      "The tradeoff is time and ownership: Ignition gives you the tools, not the dashboard. If what you actually want is OEE, downtime, and production visibility without a build project — and without owning a server, licenses, and a growing pile of custom screens — that's a different job, and usually a faster one.",
    ],
  },
  {
    slug: 'tulip',
    toolName: 'Tulip',
    logo: { kind: 'image', src: '/logos/tulip.png', alt: 'Tulip' },
    title: (
      <>
        Tulip lets you build almost any shop-floor app.{' '}
        <span className="text-gradient">We built the one you actually need first.</span>
      </>
    ),
    intro:
      "Tulip is a no-code platform for frontline operations — work instructions, quality checks, andon, and yes, production tracking, if you build it. Factory Flow is narrower on purpose: it's a production monitoring and analytics product, not an app builder, so there's nothing to design before you can see your first dashboard.",
    rows: [
      {
        label: 'What it is',
        alternative: { kind: 'partial', text: 'A no-code platform for building frontline apps — work instructions, quality checks, andon, and more' },
        factoryFlow: { kind: 'yes', text: 'A focused production monitoring and analytics product' },
      },
      {
        label: 'Setup time',
        alternative: { kind: 'no', text: 'No-code still means you design and build each app yourself' },
        factoryFlow: { kind: 'yes', text: 'Minutes — connect a machine and data starts flowing' },
      },
      {
        label: 'OEE & cycle time tracking',
        alternative: { kind: 'partial', text: 'Buildable with their app builder and IoT connections — not pre-built' },
        factoryFlow: { kind: 'yes', text: 'Calculated automatically for every machine, live' },
      },
      {
        label: 'Connecting to machines',
        alternative: { kind: 'partial', text: 'Configured per app, through their edge devices or IoT connectors' },
        factoryFlow: { kind: 'yes', text: 'Factory Flow Gateway connects to OPC UA, MQTT, and Modbus sources out of the box — or log counts manually through the API' },
      },
      {
        label: 'Pricing',
        alternative: { kind: 'no', text: 'Custom, subscription-based quotes scaled to usage — not published' },
        factoryFlow: { kind: 'yes', text: 'Transparent plans, listed on our pricing page' },
      },
      {
        label: 'Best fit',
        alternative: { kind: 'partial', text: 'Teams that want to build custom shop-floor workflows and apps' },
        factoryFlow: { kind: 'yes', text: 'Teams that want production analytics without building anything' },
      },
      {
        label: 'Multi-facility rollups',
        alternative: { kind: 'partial', text: 'Supported, but depends on how your apps were built' },
        factoryFlow: { kind: 'yes', text: 'Built in — compare lines and facilities from one view' },
      },
      {
        label: 'Time to first dashboard',
        alternative: { kind: 'no', text: 'Depends on how much you build before anything is visible' },
        factoryFlow: { kind: 'yes', text: 'Live the moment your first machine connects' },
      },
      {
        label: 'Beyond monitoring',
        alternative: { kind: 'yes', text: 'Quality checks, training, andon, and work instructions — not just production data' },
        factoryFlow: { kind: 'no', text: "Focused on monitoring and analytics only — we don't build frontline app workflows" },
      },
    ],
    whenGoodTitle: 'When Tulip is still the right call',
    whenGoodParagraphs: [
      "If your bottleneck is paper work instructions, quality forms, or andon workflows that need to be built out and customized per station, Tulip's app builder is a legitimately strong fit — it's designed for exactly that kind of frontline app sprawl.",
      "Where it's a heavier lift is if all you actually want is to know how your machines are performing. No-code still means someone has to design the app, wire up the data, and maintain it as processes change. Factory Flow skips that step entirely for production monitoring and OEE.",
    ],
  },
  {
    slug: 'machinemetrics',
    toolName: 'MachineMetrics',
    logo: { kind: 'image', src: '/logos/machinemetrics.png', alt: 'MachineMetrics' },
    title: (
      <>
        MachineMetrics goes deep on CNC.{' '}
        <span className="text-gradient">We cover the whole floor.</span>
      </>
    ),
    intro:
      "MachineMetrics is a strong, well-regarded platform if your plant runs on CNC and metalworking equipment — its controller-level integration goes deeper than most. Factory Flow takes a different angle: broad machine support and fast setup, so any manufacturer gets visibility without an enterprise sales process.",
    rows: [
      {
        label: 'Machine focus',
        alternative: { kind: 'yes', text: 'Deep CNC and metalworking controller integration — built for machine shops' },
        factoryFlow: { kind: 'partial', text: 'Works across any machine type, though without CNC-specific program and tool-level detail' },
      },
      {
        label: 'Setup time',
        alternative: { kind: 'partial', text: 'Controller-level integration takes longer to configure per machine' },
        factoryFlow: { kind: 'yes', text: 'Minutes — connect a machine and data starts flowing' },
      },
      {
        label: 'Connecting to machines',
        alternative: { kind: 'yes', text: 'Purpose-built agents for CNC controllers' },
        factoryFlow: { kind: 'yes', text: "Factory Flow Gateway connects to OPC UA, MQTT, and Modbus sources on any machine — or log counts manually through the API where there's no connection at all" },
      },
      {
        label: 'Pricing',
        alternative: { kind: 'no', text: 'Enterprise sales process, custom quotes — not published' },
        factoryFlow: { kind: 'yes', text: 'Transparent plans, listed on our pricing page' },
      },
      {
        label: 'OEE tracking',
        alternative: { kind: 'yes', text: 'Built in, with deep CNC-specific program and job data' },
        factoryFlow: { kind: 'yes', text: 'Built in, calculated live for every connected machine' },
      },
      {
        label: 'Mixed, non-CNC fleets',
        alternative: { kind: 'partial', text: 'Strongest on CNC — less purpose-built for general assembly or packaging lines' },
        factoryFlow: { kind: 'yes', text: 'Built for any machine that reports status, counts, or cycle data' },
      },
      {
        label: 'Multi-facility rollups',
        alternative: { kind: 'yes', text: 'Supported, with layered MES and CMMS tie-ins' },
        factoryFlow: { kind: 'yes', text: 'Built in — compare lines and facilities from one view' },
      },
      {
        label: 'Best fit',
        alternative: { kind: 'partial', text: 'CNC-heavy job shops needing deep controller and program-level detail' },
        factoryFlow: { kind: 'yes', text: 'Manufacturers of any kind wanting fast, team-wide visibility' },
      },
      {
        label: 'Track record',
        alternative: { kind: 'yes', text: 'Established CNC monitoring vendor with years of deployments in machine shops' },
        factoryFlow: { kind: 'partial', text: "Newer platform — we're still building that track record" },
      },
    ],
    whenGoodTitle: 'When MachineMetrics is still the right call',
    whenGoodParagraphs: [
      "If your plant is CNC-heavy and you want program-level, controller-specific detail — tool wear, feed rates, job-level cutting data — MachineMetrics has built deep expertise there that's worth taking seriously.",
      "Where it's less of a natural fit is a mixed fleet with CNC, assembly, packaging, and everything in between, or a smaller team that doesn't want to go through an enterprise sales and implementation process to get started. That's the gap Factory Flow is built to fill.",
    ],
  },
  {
    slug: 'vorne',
    toolName: 'Vorne',
    logo: { kind: 'icon', Icon: VorneMark, color: 'text-[#1070C0]', bg: 'bg-[#1070C0]/10' },
    title: (
      <>
        Vorne put a scoreboard on the line.{' '}
        <span className="text-gradient">We put the whole floor on your screen.</span>
      </>
    ),
    intro:
      "Vorne's XL Productivity Appliances are a proven, decades-old way to show real-time performance on the line — a physical scoreboard, one per machine, reporting on-prem. Factory Flow takes the same goal — real-time visibility — and delivers it as software, without hardware to buy or install per machine.",
    rows: [
      {
        label: "How it's delivered",
        alternative: { kind: 'no', text: 'A physical scoreboard appliance you buy and install per machine' },
        factoryFlow: { kind: 'yes', text: 'Software only — connect a machine and data starts flowing' },
      },
      {
        label: 'Cost model',
        alternative: { kind: 'no', text: 'Hardware purchased upfront, per machine' },
        factoryFlow: { kind: 'yes', text: 'Simple monthly subscription, no hardware to buy' },
      },
      {
        label: 'Adding a new machine',
        alternative: { kind: 'no', text: 'Buy and install another appliance' },
        factoryFlow: { kind: 'yes', text: 'Connect it — no hardware purchase required' },
      },
      {
        label: 'Connecting to machines',
        alternative: { kind: 'no', text: 'One appliance wired to one machine' },
        factoryFlow: { kind: 'yes', text: 'Factory Flow Gateway runs once on your network and connects to many machines over OPC UA, MQTT, and Modbus — or log counts manually through the API' },
      },
      {
        label: 'Multi-facility rollups',
        alternative: { kind: 'no', text: 'Each appliance reports locally — rolling up across sites takes extra work' },
        factoryFlow: { kind: 'yes', text: 'Built in — compare lines and facilities from one view' },
      },
      {
        label: 'Remote / mobile access',
        alternative: { kind: 'no', text: 'Built around an on-the-floor display, not remote viewing' },
        factoryFlow: { kind: 'yes', text: 'Web-based — check the floor from anywhere' },
      },
      {
        label: 'Track record',
        alternative: { kind: 'yes', text: 'Decades in the market, proven and widely installed' },
        factoryFlow: { kind: 'partial', text: 'Newer, built for teams that want a cloud-first rollout' },
      },
      {
        label: 'Works without a network connection',
        alternative: { kind: 'yes', text: 'Runs standalone on the floor — no network or internet dependency to show live numbers' },
        factoryFlow: { kind: 'no', text: 'Depends on Gateway connectivity and, for cloud accounts, an internet connection' },
      },
    ],
    whenGoodTitle: 'When Vorne is still the right call',
    whenGoodParagraphs: [
      "If what you want is a physical, always-on scoreboard visible from the floor — no network dependency, no browser, nothing to log into — Vorne's appliance model is purpose-built for that, and it has a long track record of just working.",
      "Where it's a heavier lift is scale and flexibility: every machine needs its own hardware unit, rolling data up across lines or facilities takes extra work, and there's no way to check performance from your phone on the way into the plant. That's the gap a software-first platform like Factory Flow is built to close.",
    ],
  },
];

export function getComparisonBySlug(slug: string | undefined): ComparisonDefinition | undefined {
  if (!slug) return undefined;
  return comparisons.find((c) => c.slug === slug);
}
