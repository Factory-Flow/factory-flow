
import WaitlistInlineForm from './WaitlistInlineForm';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-40 pb-24 overflow-hidden">
      {/* Background Glow - more subtle like Linear */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-8 relative z-10">
        {/* Announcement Badge */}
        <div className="flex justify-center mb-8">
          <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border card-border hover:card-border-hover text-sm text-secondary hover:text-white transition-all group cursor-pointer">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span>Early Access</span>
            <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
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
          <div className="relative aspect-[16/10] rounded-xl border card-border bg-[#0d0e10]/40 backdrop-blur-sm shadow-2xl overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent" />

            {/* Abstract UI Placeholder - cleaner, more minimal */}
            <div className="absolute inset-0 p-8 flex items-center justify-center">
              <div className="grid grid-cols-12 gap-3 w-full h-full opacity-40">
                {/* Dashboard mockup */}
                <div className="col-span-8 row-span-6 bg-white/[0.03] rounded-lg border card-border p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-20 h-3 bg-white/10 rounded"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 h-[calc(100%-2rem)]">
                    <div className="bg-white/[0.02] rounded border border-white/[0.04]"></div>
                    <div className="bg-white/[0.02] rounded border border-white/[0.04]"></div>
                  </div>
                </div>

                <div className="col-span-4 row-span-3 bg-white/[0.03] rounded-lg border card-border"></div>
                <div className="col-span-4 row-span-3 bg-white/[0.03] rounded-lg border card-border"></div>

                <div className="col-span-12 row-span-2 bg-white/[0.03] rounded-lg border card-border"></div>
              </div>
            </div>

            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090a] via-transparent to-transparent opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
}
