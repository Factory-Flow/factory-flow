import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SitemarkIcon from './Logo';

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.hash) return;
    const targetId = location.hash.slice(1);
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.pathname, location.hash]);

  const scrollToSection = (id: string) => {
    const targetHash = `#${id}`;
    if (location.pathname !== '/') {
      navigate({ pathname: '/', hash: targetHash });
      return;
    }
    if (location.hash !== targetHash) {
      navigate({ pathname: '/', hash: targetHash });
    }
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="border-t card-border py-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between gap-16 mb-12">
          <div className="max-w-xs">
            <div onClick={() => scrollToSection("hero")} className="cursor-pointer flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">
              <SitemarkIcon />
            </div>
            <p className="text-secondary text-sm leading-relaxed mb-4">
              Production monitoring for any machine.
            </p>
          </div>

          <div className="flex gap-16 md:gap-24 flex-wrap">
            <div>
              <h4 className="font-medium text-white text-sm mb-4">Product</h4>
              <ul className="space-y-3 text-sm">
                <li><button onClick={() => scrollToSection("features")} className="text-secondary hover:text-white transition-colors cursor-pointer">Features</button></li>
                <li><button onClick={() => scrollToSection("pricing")} className="text-secondary hover:text-white transition-colors cursor-pointer">Pricing</button></li>
                <li><button onClick={() => scrollToSection("faq")} className="text-secondary hover:text-white transition-colors cursor-pointer">FAQ</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-white text-sm mb-4">Platform</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <span className="text-secondary inline-flex items-center gap-2 cursor-default">
                    Application
                    <span className="text-[10px] px-1.5 py-0.5 bg-white/10 text-white/60 rounded font-medium uppercase tracking-wider">Coming Soon</span>
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-white text-sm mb-4">Support</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="mailto:support@factoryflow.io" className="text-secondary hover:text-white transition-colors cursor-pointer">Contact</a></li>
                <li><a href="https://docs.factoryflow.io" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors cursor-pointer">Documentation</a></li>
                <li><a href="https://docs.factoryflow.io/api" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors cursor-pointer">API Documentation</a></li>
                <li><a href="https://status.factoryflow.io" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors cursor-pointer">Status</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-white text-sm mb-4">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/terms" className="text-secondary hover:text-white transition-colors cursor-pointer">Terms</a></li>
                <li><a href="/privacy" className="text-secondary hover:text-white transition-colors cursor-pointer">Privacy</a></li>
                <li><a href="/cookies" className="text-secondary hover:text-white transition-colors cursor-pointer">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="text-tertiary text-xs text-center">
            © {new Date().getFullYear()} Factory Flow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
