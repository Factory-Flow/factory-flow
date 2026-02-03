import { Check } from 'lucide-react';

export default function Pricing() {
  const tiers = [
    {
      name: 'Basic',
      price: '$29',
      cadence: 'CAD / month',
      features: [
        'Create up to 5 machines',
        'Create 1 layout',
        'Create 1 line',
        'Create up to 3 shifts',
        'Create 1 facility',
        'Connect 5 machines to Factory Flow Analytics',
      ],
      cta: {
        label: 'Start trial',
        href: 'https://app.factoryflow.io',
      },
    },
    {
      name: 'Pro',
      price: '$249',
      cadence: 'CAD / month',
      features: [
        'Create up to 20 machines',
        'Create up to 2 layouts',
        'Create up to 3 lines',
        'Create up to 5 shifts',
        'Create up to 3 facilities',
        'Connect 10 machines to Factory Flow Analytics',
        'Connect to 1 Factory Flow Gateway',
        'Collaborate with up to 5 team members',
      ],
      cta: {
        label: 'Start trial',
        href: 'https://app.factoryflow.io',
      },
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: '$999',
      cadence: 'CAD / month',
      features: [
        'Unlimited machines and layouts',
        'Unlimited organization users',
        'Includes 50 connected machines',
        'Volume pricing for additional connected machines',
      ],
      cta: {
        label: 'Start trial',
        href: 'https://app.factoryflow.io',
      },
    },
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

        {/* Custom Pricing Table */}
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl p-8 border transition-all duration-300 ${tier.highlight
                ? 'bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-white/[0.02] border-white/20 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]'
                : 'bg-white/[0.02] card-border hover:card-border-hover'
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
                <p className="text-xs uppercase tracking-[0.12em] text-tertiary mb-4">This includes</p>
                <ul className="space-y-3 text-sm text-secondary">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={`mt-0.5 h-4 w-4 text-green-400`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-tertiary text-sm mt-10">
          All plans include a 30-day free trial. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
