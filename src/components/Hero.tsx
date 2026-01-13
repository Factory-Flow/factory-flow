
import WaitlistInlineForm from './WaitlistInlineForm';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-40 pb-24 overflow-hidden">
      {/* Background Glow - more subtle like Linear */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-8 relative z-10">
        {/* Announcement Badge */}
        <div className="flex flex-col items-center mb-8">
          <a href="mailto:support@factoryflow.io?subject=Request%20Factory%20Flow%20access%20before%20launch" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border card-border hover:card-border-hover text-sm text-secondary hover:text-white transition-all group cursor-pointer mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span>Early Access</span>
            <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <p className="text-xs text-white/40">Send us a message to try Factory Flow before launch</p>
        </div>

        {/* Hero Headline - Large, balanced typography */}
        <div className="text-center max-w-[980px] mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[1.1] mb-6 text-white">
            Production monitoring for{' '}
            <span className="text-gradient">any machine</span>{' '}
            in minutes
          </h1>

          <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-[680px] mx-auto mb-12">
            Send data to our API and start tracking performance across your entire plant instantly. No complex hardware required.
          </p>

          {/* CTA */}
          <div className="flex justify-center mb-20">
            <div className="w-full max-w-md">
              <WaitlistInlineForm />
            </div>
          </div>
        </div>

        {/* Product Screenshot/Visual */}
        <div className="relative w-full max-w-[1120px] mx-auto">
          <div className="relative aspect-[16/10] rounded-xl border card-border bg-[#0d0e10]/60 backdrop-blur-sm shadow-2xl overflow-hidden">
            {/* Dashboard Mockup with Graph Representations */}
            <div className="absolute inset-0 p-6 flex items-center justify-center">
              <div className="grid grid-cols-3 grid-rows-2 gap-3 w-full h-full opacity-70">

                {/* Row 1: Cycle Time Chart */}
                <div className="bg-white/[0.06] rounded-lg border border-white/[0.08] p-4 flex flex-col">
                  <div className="text-[11px] text-white/80 font-medium mb-3">Cycle Time</div>
                  <div className="flex-1 flex items-center justify-center">
                    <svg className="w-full h-full" viewBox="0 0 100 60" preserveAspectRatio="none">
                      <polyline points="0,45 20,42 40,38 60,35 80,32 100,28"
                        fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2"/>
                      <line x1="0" y1="55" x2="100" y2="55" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
                    </svg>
                  </div>
                  <div className="text-[8px] text-white/30 text-center mt-2">No data for the selected range</div>
                </div>

                {/* Row 1: Production Chart */}
                <div className="bg-white/[0.06] rounded-lg border border-white/[0.08] p-4 flex flex-col">
                  <div className="text-[11px] text-white/80 font-medium mb-3">Production</div>
                  <div className="flex-1 flex items-center justify-center">
                    <svg className="w-full h-full" viewBox="0 0 100 60" preserveAspectRatio="none">
                      <rect x="8" y="35" width="10" height="20" fill="rgba(255, 255, 255, 0.35)" rx="1"/>
                      <rect x="23" y="30" width="10" height="25" fill="rgba(255, 255, 255, 0.35)" rx="1"/>
                      <rect x="38" y="25" width="10" height="30" fill="rgba(255, 255, 255, 0.35)" rx="1"/>
                      <rect x="53" y="28" width="10" height="27" fill="rgba(255, 255, 255, 0.35)" rx="1"/>
                      <rect x="68" y="26" width="10" height="29" fill="rgba(255, 255, 255, 0.35)" rx="1"/>
                      <rect x="83" y="30" width="10" height="25" fill="rgba(255, 255, 255, 0.35)" rx="1"/>
                      <line x1="0" y1="55" x2="100" y2="55" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
                    </svg>
                  </div>
                  <div className="text-[8px] text-white/30 text-center mt-2">No data for the selected range</div>
                </div>

                {/* Row 1: OEE Gauge */}
                <div className="bg-white/[0.06] rounded-lg border border-white/[0.08] p-4 flex flex-col">
                  <div className="text-[11px] text-white/80 font-medium mb-3">OEE</div>
                  <div className="flex-1 flex items-center justify-center">
                    <svg className="w-16 h-16" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="35" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8"/>
                      <circle cx="50" cy="50" r="35" fill="none" stroke="rgba(255, 255, 255, 0.4)"
                        strokeWidth="8" strokeDasharray="164.93 219.91" strokeDashoffset="0"
                        transform="rotate(-90 50 50)"/>
                      <text x="50" y="55" textAnchor="middle" className="text-[12px]" fill="rgba(255,255,255,0.6)" fontWeight="600">--</text>
                    </svg>
                  </div>
                  <div className="text-[8px] text-white/30 text-center mt-2">No data for the selected range</div>
                </div>

                {/* Row 2: Downtime Chart */}
                <div className="bg-white/[0.06] rounded-lg border border-white/[0.08] p-4 flex flex-col">
                  <div className="text-[11px] text-white/80 font-medium mb-3">Downtime</div>
                  <div className="flex-1 flex items-center justify-center">
                    <svg className="w-full h-full" viewBox="0 0 100 60">
                      <rect x="12" y="15" width="14" height="40" fill="rgba(255, 255, 255, 0.35)" rx="1"/>
                      <rect x="32" y="25" width="14" height="30" fill="rgba(255, 255, 255, 0.35)" rx="1"/>
                      <rect x="52" y="35" width="14" height="20" fill="rgba(255, 255, 255, 0.35)" rx="1"/>
                      <rect x="72" y="45" width="14" height="10" fill="rgba(255, 255, 255, 0.35)" rx="1"/>
                      <line x1="0" y1="55" x2="100" y2="55" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
                    </svg>
                  </div>
                  <div className="text-[8px] text-white/30 text-center mt-2">No data for the selected range</div>
                </div>

                {/* Row 2: Uptime Chart */}
                <div className="bg-white/[0.06] rounded-lg border border-white/[0.08] p-4 flex flex-col">
                  <div className="text-[11px] text-white/80 font-medium mb-3">Uptime</div>
                  <div className="flex-1 flex items-center justify-center">
                    <svg className="w-full h-full" viewBox="0 0 100 60">
                      <rect x="12" y="25" width="14" height="30" fill="rgba(255, 255, 255, 0.35)" rx="1"/>
                      <rect x="32" y="20" width="14" height="35" fill="rgba(255, 255, 255, 0.35)" rx="1"/>
                      <rect x="52" y="15" width="14" height="40" fill="rgba(255, 255, 255, 0.35)" rx="1"/>
                      <rect x="72" y="18" width="14" height="37" fill="rgba(255, 255, 255, 0.35)" rx="1"/>
                      <line x1="0" y1="55" x2="100" y2="55" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
                    </svg>
                  </div>
                  <div className="text-[8px] text-white/30 text-center mt-2">No data for the selected range</div>
                </div>

                {/* Row 2: Timeline */}
                <div className="bg-white/[0.06] rounded-lg border border-white/[0.08] p-4 flex flex-col">
                  <div className="text-[11px] text-white/80 font-medium mb-3">Timeline</div>
                  <div className="flex-1 flex items-center justify-center gap-1">
                    <div className="flex-1 bg-white/30 h-6 rounded-sm"></div>
                    <div className="flex-1 bg-white/30 h-6 rounded-sm"></div>
                    <div className="w-6 bg-white/20 h-6 rounded-sm"></div>
                    <div className="flex-1 bg-white/30 h-6 rounded-sm"></div>
                    <div className="w-8 bg-white/15 h-6 rounded-sm"></div>
                    <div className="flex-1 bg-white/30 h-6 rounded-sm"></div>
                  </div>
                  <div className="text-[8px] text-white/30 text-center mt-2">No data for the selected range</div>
                </div>

              </div>
            </div>

            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#08090a]/50 to-[#08090a] opacity-90" />

            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 pt-32 pb-12 px-8 bg-gradient-to-t from-[#08090a] via-[#08090a] to-transparent">
              <div className="text-center max-w-[680px] mx-auto">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2 text-white">
                  Know what's happening on your{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    factory floor
                  </span>
                </h2>
                <p className="text-sm md:text-base text-white/60">
                  Track performance, identify issues, and improve efficiency across all workstations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
