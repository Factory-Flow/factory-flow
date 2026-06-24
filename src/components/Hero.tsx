
import WaitlistInlineForm from './WaitlistInlineForm';
import Lightbox from './Lightbox';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-40 pb-24 overflow-hidden">
      {/* Background Glow — hidden on mobile (blur-[150px] is GPU-intensive on iOS) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none hidden md:block" />
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none hidden md:block" />

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
            <span className="text-gradient">modern factories</span>
          </h1>

          <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-[680px] mx-auto mb-12">
            Know exactly what's happening on your shop floor — without months of integration work.
          </p>

          {/* CTA */}
          <div className="flex justify-center mb-20">
            <div className="w-full max-w-md">
              <WaitlistInlineForm />
              <div className="mt-4 text-center">
                <a
                  href="https://demo.factoryflow.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-secondary hover:text-white transition-colors group"
                >
                  Or try the live demo
                  <svg className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Product Screenshot/Visual */}
        <div className="relative w-full max-w-[1120px] mx-auto">
          <div className="relative rounded-xl border card-border shadow-2xl overflow-hidden">
            <Lightbox src="/line-view-example.png" alt="Factory Flow line view" wrapperClassName="block">
              <img
                src="/line-view-example.png"
                alt="Factory Flow line view"
                className="w-full h-auto block"
                width={1120}
                height={630}
                fetchPriority="high"
              />
            </Lightbox>
            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#08090a] to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
