import { ArrowLeft, ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import AppAppBar from './components/AppAppBar';
import Footer from './components/Footer';
import MatchupBadge from './components/compare/MatchupBadge';
import { comparisons } from './data/comparisons';

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20">
      <AppAppBar />
      <main className="pt-32 pb-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="max-w-[1200px] mx-auto mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm text-secondary hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              Back Home
            </Link>
          </div>

          <div className="text-center max-w-[720px] mx-auto mb-16">
            <p className="text-sm font-medium text-secondary mb-4">Comparisons</p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.02em] leading-[1.1] mb-6 text-white">
              How Factory Flow compares
            </h1>
            <p className="text-lg text-secondary leading-relaxed">
              Honest, specific comparisons against common tools manufacturers already use.
            </p>
          </div>

          <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {comparisons.map((c) => (
              <Link
                key={c.slug}
                to={`/compare/${c.slug}`}
                className="group relative rounded-2xl border border-white/[0.12] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all p-8 flex items-center justify-center"
              >
                <MatchupBadge toolName={c.toolName} logo={c.logo} />
                <ArrowRight className="absolute top-4 right-4 w-4 h-4 text-white/20 group-hover:text-white/60 group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </div>

          <div className="max-w-[560px] mx-auto text-center mt-16 pt-12 border-t border-white/[0.08]">
            <p className="text-secondary mb-5">
              Don't see the tool you're using? Tell us what it is and we'll look into how Factory
              Flow compares.
            </p>
            <a
              href="mailto:support@factoryflow.io?subject=Compare%20Factory%20Flow%20to%20our%20tool&body=We%27re%20currently%20using%3A%20"
              className="inline-flex items-center gap-1.5 text-sm text-white border card-border px-4 py-2 rounded-md font-medium hover:border-white/20 transition-all"
            >
              <Mail className="w-4 h-4" />
              Request a comparison
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
