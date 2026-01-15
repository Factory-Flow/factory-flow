import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Sitemark from './Logo';

export default function AppAppBar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [supportDropdownOpen, setSupportDropdownOpen] = React.useState(false);
  const [supportDropdownPinned, setSupportDropdownPinned] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (supportDropdownPinned && !target.closest('.support-dropdown-container')) {
        setSupportDropdownPinned(false);
        setSupportDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [supportDropdownPinned]);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${isScrolled ? 'glass py-3' : 'bg-transparent border-transparent py-4'
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
          <div
            className="relative support-dropdown-container"
            onMouseEnter={() => setSupportDropdownOpen(true)}
            onMouseLeave={() => {
              if (!supportDropdownPinned) {
                setSupportDropdownOpen(false);
              }
            }}
          >
            <button
              onClick={() => {
                setSupportDropdownPinned(!supportDropdownPinned);
                setSupportDropdownOpen(true);
              }}
              className="text-sm text-secondary hover:text-white transition-colors px-3 py-1.5 rounded-md hover:bg-white/5 cursor-pointer flex items-center gap-1"
            >
              Support
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${supportDropdownOpen ? 'rotate-180' : ''}`}><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            {supportDropdownOpen && (
              <div className="absolute top-full left-0 pt-2 w-52">
                <div className="bg-[#0d0e10]/95 backdrop-blur-xl border card-border rounded-lg overflow-hidden shadow-xl">
                  <a href="mailto:support@factoryflow.io" className="flex items-center gap-2.5 text-sm text-secondary hover:text-white hover:bg-white/5 px-4 py-2.5 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    Contact
                  </a>
                  <a href="https://docs.factoryflow.io" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-secondary hover:text-white hover:bg-white/5 px-4 py-2.5 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                    Documentation
                  </a>
                  <a href="https://docs.factoryflow.io/api" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-secondary hover:text-white hover:bg-white/5 px-4 py-2.5 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                    API Documentation
                  </a>
                  <a href="https://status.factoryflow.io" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-secondary hover:text-white hover:bg-white/5 px-4 py-2.5 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                    Status
                  </a>
                </div>
              </div>
            )}
          </div>
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
          <div className="support-dropdown-container">
            <button
              onClick={() => setSupportDropdownOpen(!supportDropdownOpen)}
              className="w-full text-left text-secondary hover:text-white hover:bg-white/5 px-3 py-2 rounded-md transition-colors cursor-pointer flex items-center justify-between"
            >
              Support
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${supportDropdownOpen ? 'rotate-180' : ''}`}><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            {supportDropdownOpen && (
              <div className="mt-1 ml-3 flex flex-col gap-1">
                <a href="mailto:support@factoryflow.io" className="flex items-center gap-2.5 text-sm text-secondary hover:text-white hover:bg-white/5 px-3 py-2 rounded-md transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  Contact
                </a>
                <a href="https://docs.factoryflow.io" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-secondary hover:text-white hover:bg-white/5 px-3 py-2 rounded-md transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                  Documentation
                </a>
                <a href="https://docs.factoryflow.io/api" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-secondary hover:text-white hover:bg-white/5 px-3 py-2 rounded-md transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                  API Documentation
                </a>
                <a href="https://status.factoryflow.io" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-secondary hover:text-white hover:bg-white/5 px-3 py-2 rounded-md transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                  Status
                </a>
              </div>
            )}
          </div>
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
