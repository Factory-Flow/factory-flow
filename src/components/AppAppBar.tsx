import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Sitemark from './Logo';

export default function AppAppBar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const targetHash = `#${id}`;
    setMobileMenuOpen(false);

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${isScrolled ? 'glass py-3' : 'bg-transparent py-4'
        }`}
    >
      <div className="max-w-[1280px] mx-auto px-8 flex items-center justify-between">
        <div
          onClick={() => scrollToSection("hero")}
          className="cursor-pointer flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Sitemark />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          <button
            onClick={() => scrollToSection("features")}
            className="text-sm text-secondary hover:text-white transition-colors px-3 py-1.5 rounded-md hover:bg-white/5 cursor-pointer"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-sm text-secondary hover:text-white transition-colors px-3 py-1.5 rounded-md hover:bg-white/5 cursor-pointer"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-sm text-secondary hover:text-white transition-colors px-3 py-1.5 rounded-md hover:bg-white/5 cursor-pointer"
          >
            FAQ
          </button>
          <div className="w-px h-4 bg-white/10 mx-2" />
          <button
            onClick={() => scrollToSection("hero")}
            className="text-sm bg-white text-black px-4 py-1.5 rounded-md font-medium hover:bg-white/90 transition-all ml-1 cursor-pointer"
          >
            Join Waitlist
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-md transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0d0e10]/95 backdrop-blur-xl border-b card-border p-5 md:hidden flex flex-col gap-1">
          <button
            onClick={() => scrollToSection("features")}
            className="text-left text-secondary hover:text-white hover:bg-white/5 px-3 py-2 rounded-md transition-colors cursor-pointer"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-left text-secondary hover:text-white hover:bg-white/5 px-3 py-2 rounded-md transition-colors cursor-pointer"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-left text-secondary hover:text-white hover:bg-white/5 px-3 py-2 rounded-md transition-colors cursor-pointer"
          >
            FAQ
          </button>
          <div className="h-px bg-white/10 my-2" />
          <button
            onClick={() => scrollToSection("hero")}
            className="bg-white text-black px-4 py-2 rounded-md font-medium text-center hover:bg-white/90 transition-colors cursor-pointer"
          >
            Join Waitlist
          </button>
        </div>
      )}
    </nav>
  );
}
