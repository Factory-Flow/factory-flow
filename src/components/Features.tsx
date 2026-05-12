import { Activity, Bell, BarChart3, Lock, Globe, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Activity,
    title: 'Real-Time Monitoring',
    description: 'Track production metrics across all workstations instantly. Know exactly what\'s happening on your factory floor at any moment.',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-400',
    accentColor: 'from-blue-500 to-cyan-500',
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Visualize OEE, cycle times, and downtime trends. Make data-driven decisions to optimize your production efficiency.',
    gradient: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-400',
    accentColor: 'from-purple-500 to-pink-500',
  },
  {
    icon: Bell,
    title: 'Instant Alerts',
    description: 'Get notified immediately when metrics exceed thresholds. Stay ahead of issues before they impact production.',
    gradient: 'from-orange-500/20 to-red-500/20',
    iconColor: 'text-orange-400',
    accentColor: 'from-orange-500 to-red-500',
  },
  {
    icon: Globe,
    title: 'Universal Integration',
    description: 'Connect any machine or system with our simple API. Works with PLCs, CNCs, robots, and more.',
    gradient: 'from-green-500/20 to-emerald-500/20',
    iconColor: 'text-green-400',
    accentColor: 'from-green-500 to-emerald-500',
  },
  {
    icon: Sparkles,
    title: 'Smart Insights',
    description: 'Automatically identify patterns and anomalies. Discover optimization opportunities you didn\'t know existed.',
    gradient: 'from-yellow-500/20 to-amber-500/20',
    iconColor: 'text-yellow-400',
    accentColor: 'from-yellow-500 to-amber-500',
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and role-based access control. Your production data stays secure and private.',
    gradient: 'from-slate-500/20 to-zinc-500/20',
    iconColor: 'text-slate-400',
    accentColor: 'from-slate-400 to-zinc-400',
  },
];

export default function Features() {
  return (
    <section id="features" className="pt-12 pb-24 md:pt-16 md:pb-32 relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center max-w-[720px] mx-auto mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-white">
            Features
          </h2>
        </div>

        {/* Features Rows */}
        <div className="flex flex-col gap-6 md:gap-8">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-2xl overflow-hidden hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300"
              >
                <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} min-h-[320px]`}>
                  {/* Image / Visual Panel */}
                  <div className={`relative w-full md:w-1/2 min-h-[220px] md:min-h-0 bg-gradient-to-br ${feature.gradient} flex items-center justify-center overflow-hidden`}>
                    {/* Decorative grid lines */}
                    <div className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                      }}
                    />
                    {/* Large icon as visual placeholder */}
                    <div className={`relative z-10 w-28 h-28 rounded-2xl bg-gradient-to-br ${feature.gradient} border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}>
                      <feature.icon className={`w-14 h-14 ${feature.iconColor}`} strokeWidth={1.5} />
                    </div>
                    {/* Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.accentColor} opacity-[0.06] pointer-events-none`} />
                  </div>

                  {/* Text Panel */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-12 py-10 md:py-12">
                    {/* Small icon badge */}
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${feature.gradient} mb-5 self-start group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className={`w-5 h-5 ${feature.iconColor}`} strokeWidth={2} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-secondary text-base md:text-lg leading-relaxed max-w-md">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
