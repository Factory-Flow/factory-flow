import { Activity, Bell, BarChart3, Lock, Globe, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Activity,
    title: 'Real-Time Monitoring',
    description: 'Track production metrics across all workstations instantly. Know exactly what\'s happening on your factory floor at any moment.',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-400'
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Visualize OEE, cycle times, and downtime trends. Make data-driven decisions to optimize your production efficiency.',
    gradient: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-400'
  },
  {
    icon: Bell,
    title: 'Instant Alerts',
    description: 'Get notified immediately when metrics exceed thresholds. Stay ahead of issues before they impact production.',
    gradient: 'from-orange-500/20 to-red-500/20',
    iconColor: 'text-orange-400'
  },
  {
    icon: Globe,
    title: 'Universal Integration',
    description: 'Connect any machine or system with our simple API. Works with PLCs, CNCs, robots, and more.',
    gradient: 'from-green-500/20 to-emerald-500/20',
    iconColor: 'text-green-400'
  },
  {
    icon: Sparkles,
    title: 'Smart Insights',
    description: 'Automatically identify patterns and anomalies. Discover optimization opportunities you didn\'t know existed.',
    gradient: 'from-yellow-500/20 to-amber-500/20',
    iconColor: 'text-yellow-400'
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and role-based access control. Your production data stays secure and private.',
    gradient: 'from-slate-500/20 to-zinc-500/20',
    iconColor: 'text-slate-400'
  }
];

export default function Features() {
  return (
    <section id="features" className="pt-12 pb-24 md:pt-16 md:pb-32 relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center max-w-[720px] mx-auto mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-white">
            Features
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-xl p-8 hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-6 h-6 ${feature.iconColor}`} strokeWidth={2} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
