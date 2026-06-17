import { Check, Server } from 'lucide-react';

export default function Pricing() {
  const scrollToLimits = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('plan-limits')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const tiers = [
    {
      name: 'Basic',
      price: '$199',
      cadence: 'CAD / month',
      features: [
        'Track machine uptime and performance in real time',
        'Visualize your factory layout and production lines',
        'Analyze shift performance with built-in analytics',
      ],
      cta: {
        label: 'Get started',
        href: 'https://app.factoryflow.io',
      },
    },
    {
      name: 'Pro',
      price: '$499',
      cadence: 'CAD / month',
      features: [
        'Everything in Basic',
        'Automate alerts and notify the right people instantly',
        'Collaborate with your team across facilities',
        'Connect physical machines via Factory Flow Gateway',
        'Maintain a full audit log for accountability',
      ],
      cta: {
        label: 'Get started',
        href: 'https://app.factoryflow.io',
      },
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: '$1499',
      cadence: 'CAD / month',
      features: [
        'Everything in Pro',
        'Scale across your entire organization without constraints',
        'Manage multiple sites under one account',
        'Volume pricing as your connected fleet grows',
      ],
      cta: {
        label: 'Get started',
        href: 'https://app.factoryflow.io',
      },
    },
  ];

  const selfHostedFeatures = [
    'Deploy Factory Flow entirely within your own infrastructure',
    'Full data sovereignty — no data leaves your environment',
    'Unlimited machines, facilities, users, and layouts',
    'Custom integrations and white-label options',
    'Dedicated onboarding and implementation support',
    'SLA-backed uptime guarantees',
  ];

  const usageTable = [
    { label: 'Facilities',           basic: '1',          pro: '1',          enterprise: '3',        selfHosted: 'Unlimited*' },
    { label: 'Machines',             basic: '5',          pro: '25',         enterprise: '200',      selfHosted: 'Unlimited*' },
    { label: 'Price per machine',    basic: '~$40 CAD/mo',   pro: '~$20 CAD/mo',   enterprise: '~$8 CAD/mo',  selfHosted: '—' },
    { label: 'Layouts',              basic: '1',          pro: '2',          enterprise: '5',        selfHosted: 'Unlimited*' },
    { label: 'Production lines',     basic: '1',          pro: '3',          enterprise: '15',       selfHosted: 'Unlimited*' },
    { label: 'Shifts',               basic: '3',          pro: '5',          enterprise: '10',       selfHosted: 'Unlimited*' },
    { label: 'Team members',         basic: '1',          pro: '5',          enterprise: '20',       selfHosted: 'Unlimited*' },
    { label: 'Connected machines',   basic: '5',          pro: '25',         enterprise: '200',      selfHosted: 'Unlimited*' },
    { label: 'Gateway licenses',     basic: '—',          pro: '1',          enterprise: '5',        selfHosted: 'Custom' },
    { label: 'Alert rules',          basic: '—',          pro: '10',         enterprise: '50',       selfHosted: 'Unlimited*' },
    { label: 'Alert groups',         basic: '—',          pro: '3',          enterprise: '10',       selfHosted: 'Unlimited*' },
    { label: 'Alert group members',  basic: '—',          pro: '5',          enterprise: '20',       selfHosted: 'Unlimited*' },
    { label: 'Alert history',        basic: '—',          pro: '500',        enterprise: '1,000',    selfHosted: 'Unlimited*' },
    { label: 'Audit logs',           basic: '—',          pro: '500',        enterprise: '1,000',    selfHosted: 'Unlimited*' },
    { label: 'API tokens',           basic: '1',          pro: '5',          enterprise: '5',        selfHosted: 'Unlimited*' },
    { label: 'Email alerts / month', basic: '50',         pro: '500',        enterprise: '1,000',    selfHosted: 'Unlimited*' },
    { label: 'Data retention',       basic: '3 months',   pro: '6 months',   enterprise: '1 year',   selfHosted: 'Unlimited*' },
  ];

  return (
    <section id="pricing" className="pt-12 pb-24 md:pt-16 md:pb-32 relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center max-w-[720px] mx-auto mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-white">
            Pricing
          </h2>
          <p className="text-lg md:text-xl text-secondary">
            Choose the plan that fits your operation
          </p>
        </div>

        {/* Pricing cards */}
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl p-8 border transition-all duration-300 bg-white/[0.02] ${tier.highlight
                ? 'border-white/20 hover:border-white/30'
                : 'card-border hover:card-border-hover'
                }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-white text-black text-xs font-semibold px-3 py-1 shadow-lg">
                  Most popular
                </span>
              )}

              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
              </div>

              <div className="mt-6 flex items-end gap-2">
                <span className="text-4xl font-semibold text-white">{tier.price}</span>
                <span className="text-sm text-tertiary">{tier.cadence}</span>
              </div>

              <a
                href={tier.cta.href}
                className={`mt-6 inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all ${tier.highlight
                  ? 'bg-white text-black hover:bg-white/90'
                  : 'bg-white/5 text-white border card-border hover:card-border-hover hover:bg-white/[0.08]'
                  }`}
              >
                {tier.cta.label}
              </a>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-xs uppercase tracking-[0.12em] text-tertiary mb-4">What you can do</p>
                <ul className="space-y-3 text-secondary">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-[15px] leading-relaxed">
                      <Check className="mt-1 h-4 w-4 flex-shrink-0 text-green-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#plan-limits" onClick={scrollToLimits} className="mt-4 inline-block text-xs text-tertiary hover:text-white/60 transition-colors">
                  Compare all features →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Self-Hosted Tier */}
        <div className="max-w-[1200px] mx-auto mt-6">
          <div className="relative flex flex-col md:flex-row md:items-center gap-8 rounded-2xl p-8 border bg-white/[0.02] card-border hover:card-border-hover transition-all duration-300">
            <div className="flex-shrink-0 flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10">
                <Server className="h-5 w-5 text-white/70" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Self-Hosted</h3>
                <p className="text-sm text-tertiary mt-0.5">On-premise deployment</p>
              </div>
            </div>

            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                {selfHostedFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-[15px] leading-relaxed text-secondary">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-400" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <a href="#plan-limits" onClick={scrollToLimits} className="mt-4 inline-block text-xs text-tertiary hover:text-white/60 transition-colors">
                Compare all features →
              </a>
            </div>

            <div className="flex-shrink-0">
              <a
                href="mailto:sales@factoryflow.io"
                className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium bg-white/5 text-white border card-border hover:card-border-hover hover:bg-white/[0.08] transition-all whitespace-nowrap"
              >
                Contact sales
              </a>
            </div>
          </div>
        </div>

        {/* Usage limits table */}
        <div className="max-w-[1200px] mx-auto mt-16">
          <h3 id="plan-limits" className="text-lg font-semibold text-white mb-6">Plan limits</h3>
          <div className="rounded-2xl border card-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left px-6 py-4 text-xs uppercase tracking-[0.12em] text-tertiary font-medium w-1/3">Feature</th>
                  <th className="px-6 py-4 text-center text-secondary font-medium">
                    <div>Basic</div>
                    <div className="text-xs text-tertiary font-normal mt-0.5">$199 CAD/mo</div>
                  </th>
                  <th className="px-6 py-4 text-center text-secondary font-medium">
                    <div>Pro</div>
                    <div className="text-xs text-tertiary font-normal mt-0.5">$499 CAD/mo</div>
                  </th>
                  <th className="px-6 py-4 text-center text-secondary font-medium">
                    <div>Enterprise</div>
                    <div className="text-xs text-tertiary font-normal mt-0.5">$1,499 CAD/mo</div>
                  </th>
                  <th className="px-6 py-4 text-center text-secondary font-medium">
                    <div>Self-Hosted</div>
                    <div className="text-xs text-tertiary font-normal mt-0.5">Contact sales</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {usageTable.map((row, i) => {
                  const isDerived = row.label === 'Price per machine';
                  return (
                  <tr
                    key={row.label}
                    className={`border-b border-white/[0.1] last:border-0 ${isDerived ? 'bg-white/[0.04]' : i % 2 === 0 ? 'bg-white/[0.04]' : 'bg-white/[0.01]'}`}
                  >
                    <td className={`px-6 py-3.5 ${isDerived ? 'text-tertiary text-xs pl-8' : 'text-secondary'}`}>{row.label}</td>
                    <td className={`px-6 py-3.5 text-center tabular-nums ${isDerived ? 'text-tertiary text-xs' : 'text-white/80'}`}>{row.basic}</td>
                    <td className={`px-6 py-3.5 text-center tabular-nums ${isDerived ? 'text-tertiary text-xs' : 'text-white/80'}`}>{row.pro}</td>
                    <td className={`px-6 py-3.5 text-center tabular-nums ${isDerived ? 'text-tertiary text-xs' : 'text-white/80'}`}>{row.enterprise}</td>
                    <td className={`px-6 py-3.5 text-center tabular-nums ${isDerived ? 'text-tertiary text-xs' : 'text-white/80'}`}>{row.selfHosted}</td>
                  </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2">
          <p className="text-tertiary text-sm">* Subject to your infrastructure capacity.</p>
          <p className="text-tertiary text-sm">Cancel anytime.</p>
        </div>
      </div>
    </section>
  );
}
