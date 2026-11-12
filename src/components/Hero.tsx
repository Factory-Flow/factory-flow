
import BetaSignupForm from './BetaSignupForm';
import Lightbox from './Lightbox';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-40 pb-24 xl:min-h-[640px] xl:flex xl:items-center overflow-hidden">
      {/* Ambient gradient background — masked to fade into the page at top/bottom */}
      <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_80%,transparent)]">
        <div className="gradient-wash absolute inset-0" />
        {/* Drifting blobs hidden on mobile — blur-[100px] + animation is GPU-intensive on iOS */}
        <div className="gradient-blob gradient-blob--a absolute hidden md:block" />
        <div className="gradient-blob gradient-blob--b absolute hidden md:block" />
        <div className="gradient-blob gradient-blob--c absolute hidden md:block" />
        <div className="gradient-blob gradient-blob--d absolute hidden md:block" />
      </div>

      {/* Product visual — bleeds off the right edge of the viewport on large screens */}
      <div className="hidden xl:block absolute top-1/2 -translate-y-1/2 right-[-6vw] w-[48vw] max-w-[880px] z-0 pointer-events-none">
        <div className="relative rounded-l-2xl border card-border shadow-2xl overflow-hidden pointer-events-auto">
          <Lightbox src="/line-view-example.png" alt="Factory Flow line view" wrapperClassName="block">
            <img
              src="/line-view-example.png"
              alt="Factory Flow line view"
              className="w-full h-auto block"
              width={3024}
              height={1526}
              fetchPriority="high"
            />
          </Lightbox>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-8 relative z-10 w-full pointer-events-none">
        {/* Hero Headline */}
        <div className="text-left max-w-[640px] pointer-events-auto">
          <h1 className="text-balance text-5xl font-semibold tracking-[-0.03em] leading-[1.1] mb-0 text-white">
            Production monitoring for{' '}
            <span className="text-gradient">modern factories</span>
          </h1>

          <p className="text-md text-secondary leading-relaxed mb-10">
            Know what's happening on your shop floor without months of integration work.
          </p>

          {/* CTA */}
          <div className="w-full max-w-md">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <BetaSignupForm />
              </div>
              <a
                href="https://demo.factoryflow.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border card-border text-white font-medium hover:bg-white/5 transition-all text-[15px] whitespace-nowrap"
              >
                Live demo
              </a>
            </div>
            <p className="mt-3 text-xs text-amber-400/90">Limited spots available. Early members get 50% off their subscription for life.</p>
          </div>
        </div>

        {/* Product Screenshot/Visual — stacked below the copy on smaller screens */}
        <div className="xl:hidden relative w-full max-w-[1120px] mx-auto mt-16 pointer-events-auto">
          <div className="relative rounded-xl border card-border shadow-2xl overflow-hidden">
            <Lightbox src="/line-view-example.png" alt="Factory Flow line view" wrapperClassName="block">
              <img
                src="/line-view-example.png"
                alt="Factory Flow line view"
                className="w-full h-auto block"
                width={3024}
                height={1526}
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
