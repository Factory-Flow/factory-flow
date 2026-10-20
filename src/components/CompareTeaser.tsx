import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { comparisons } from '../data/comparisons';
import ToolTile from './compare/ToolTile';

export default function CompareTeaser() {
  return (
    <section id="compare" className="py-16 md:py-20 relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="text-center max-w-[720px] mx-auto mb-10 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-white">
            Comparison
          </h2>
          <p className="text-lg text-secondary">
            Honest, specific comparisons against common tools manufacturers already use.
          </p>
        </div>

        <div className="rounded-2xl border border-white/[0.12] bg-white/[0.02] overflow-hidden grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-y divide-x divide-white/[0.06]">
          {comparisons.map((c) => (
            <Link
              key={c.slug}
              to={`/compare/${c.slug}`}
              className="group p-4 sm:p-6 flex flex-col items-center gap-2 sm:gap-3 text-center hover:bg-white/[0.04] transition-colors"
            >
              <ToolTile logo={c.logo} />
              <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                vs. {c.toolName}
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/compare"
            className="inline-flex items-center gap-1.5 text-sm text-secondary hover:text-white transition-colors group"
          >
            View all comparisons
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
