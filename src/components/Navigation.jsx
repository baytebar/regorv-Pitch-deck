import React from 'react';
import { useState, useEffect } from 'react';
import logo from '../public/images/logo.svg';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-(--color-bg)/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={() => scrollToSection('hero')}
            className="hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="REGROV" className="h-6 md:h-8" />
          </button>
        </div>
        <div className="hidden md:flex items-center gap-4 md:gap-8">
          <button
            onClick={() => scrollToSection('features')}
            className="text-white hover:text-(--color-accent) transition-colors text-sm md:text-base"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection('roadmap')}
            className="text-white hover:text-(--color-accent) transition-colors text-sm md:text-base"
          >
            Roadmap
          </button>
          <button
            onClick={() => scrollToSection('team')}
            className="text-white hover:text-(--color-accent) transition-colors text-sm md:text-base"
          >
            Team
          </button>
          <button
            onClick={() => scrollToSection('footer')}
            className="bg-(--color-accent) text-(--color-text-dark) px-4 md:px-6 py-1 rounded-3xl font-semibold hover:opacity-90 transition-opacity text-sm md:text-base"
          >
            Get App
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
