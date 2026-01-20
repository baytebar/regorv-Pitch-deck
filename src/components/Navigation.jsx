import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOverWhiteSection, setIsOverWhiteSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Check if we're over the app-download section (white background)
      const appDownloadSection = document.getElementById('app-download');
      if (appDownloadSection) {
        const rect = appDownloadSection.getBoundingClientRect();
        const isInView = rect.top <= 100 && rect.bottom >= 0;
        setIsOverWhiteSection(isInView);
      }
    };

    // Also check on mount and when container scrolls
    const container = document.querySelector('.snap-container');
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const textColorClass = isOverWhiteSection ? 'text-gray-900' : 'text-white';
  const hoverColorClass = isOverWhiteSection ? 'hover:text-[#2D6A4F]' : 'hover:text-(--color-accent)';
  const navBgClass = isOverWhiteSection 
    ? 'bg-white/95 backdrop-blur-md shadow-lg' 
    : (isScrolled ? 'bg-(--color-bg)/90 backdrop-blur-md shadow-lg' : 'bg-transparent');

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBgClass}`}>
        <div className="max-w-7xl mx-auto px-3 md:px-8 py-4 md:py-6 flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('hero')}
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src="/images/logo.svg" 
                alt="REGROV" 
                className="nav-logo w-auto md:h-8 md:max-w-none"
                loading="eager"
                fetchPriority="high"
                width="120"
                height="32"
              />
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 md:gap-8">
            <button
              onClick={() => scrollToSection('solution')}
              className={`${textColorClass} ${hoverColorClass} transition-colors text-sm md:text-base`}
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('roadmap')}
              className={`${textColorClass} ${hoverColorClass} transition-colors text-sm md:text-base`}
            >
              Roadmap
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className={`${textColorClass} ${hoverColorClass} transition-colors text-sm md:text-base`}
            >
              Team
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${textColorClass} ${hoverColorClass} transition-colors p-2`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-(--color-bg)/95 backdrop-blur-md z-60 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-(--color-surface) shadow-2xl transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Logo and Close Button Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <button
              onClick={() => {
                scrollToSection('hero');
                setIsMobileMenuOpen(false);
              }}
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src="/images/logo.svg" 
                alt="REGROV" 
                className="nav-logo w-auto" 
                loading="eager"
                width="120"
                height="32"
              />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-(--color-accent) transition-colors p-2"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="flex flex-col h-full pt-4 px-6">
            <button
              onClick={() => scrollToSection('solution')}
              className="text-white hover:text-(--color-accent) transition-colors text-lg py-4 border-b border-white/10 text-left"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('roadmap')}
              className="text-white hover:text-(--color-accent) transition-colors text-lg py-4 border-b border-white/10 text-left"
            >
              Roadmap
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-white hover:text-(--color-accent) transition-colors text-lg py-4 border-b border-white/10 text-left"
            >
              Team
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
