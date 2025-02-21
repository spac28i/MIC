'use client';

import React, { useState, useEffect } from 'react';
import { Mountain, Menu, X, Globe, Compass, Phone, ClipboardEdit } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isHovered, setIsHovered] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? window.scrollY / totalHeight : 0;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));

      // Section detection
      const sections = ['home', 'about', 'sitemap', 'contact'];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', id: 'about', icon: Compass },
    { label: 'Site Map', id: 'sitemap', icon: Globe },
    { label: 'Contact', id: 'contact', icon: Phone },
  ];

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${isScrolled ? 'bg-black/80 backdrop-blur-lg border-b border-emerald-500/10' : 'bg-transparent'}
      `}
    >
      {/* Scroll Progress Indicator */}
      {isMounted && (
        <div className="absolute top-0 left-0 w-full h-0.5 bg-emerald-900">
          <div
            className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 transition-transform duration-150"
            style={{ transform: `scaleX(${scrollProgress})` }}
          />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <button
            onClick={() => scrollToSection('home')}
            className="group cursor-pointer relative focus:outline-none"
            aria-label="Back to top"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div
                  className={`
                    p-2.5 rounded-xl transition-all duration-300 
                    ${isScrolled ? 'bg-gradient-to-br from-emerald-500 to-emerald-600' : 'bg-gradient-to-br from-emerald-400 to-emerald-500'}
                    group-hover:shadow-lg group-hover:shadow-emerald-500/25
                  `}
                >
                  <Mountain className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 rounded-xl bg-emerald-400 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
              <span className="text-2xl font-bold text-white tracking-wide group-hover:tracking-wider transition-all duration-300">
                MICO
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onMouseEnter={() => setIsHovered(item.id)}
                  onMouseLeave={() => setIsHovered('')}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-4 py-2 group"
                >
                  <div
                    className={`
                      absolute inset-0 rounded-lg transition-all duration-300
                      ${activeSection === item.id ? 'bg-emerald-500/20' : 'bg-transparent group-hover:bg-emerald-500/10'}
                    `}
                  />
                  <div className="relative flex items-center gap-2">
                    <Icon
                      className={`
                        w-4 h-4 transition-all duration-300 
                        ${isHovered === item.id ? 'text-emerald-400' : 'text-emerald-200'}
                      `}
                    />
                    <span
                      className={`
                        text-sm font-medium transition-all duration-300
                        ${isHovered === item.id ? 'text-emerald-400' : 'text-emerald-200'}
                      `}
                    >
                      {item.label}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-1/2 w-0 h-px bg-emerald-500 group-hover:w-full group-hover:left-0 transition-all duration-300" />
                </button>
              );
            })}
            
            {/* Supplier Sign-up Button */}
            <a
              href="https://form.jotform.com/233295179997276"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25"
            >
              <ClipboardEdit className="w-4 h-4" />
              <span className="text-sm font-medium">Supplier Sign-up</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative p-2 rounded-lg text-emerald-100 hover:bg-emerald-500/10 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden absolute left-0 right-0 px-4 pt-2 pb-4 bg-black/95 backdrop-blur-lg border-b border-emerald-500/10
            transition-all duration-300 transform
            ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
          `}
        >
          <div className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    w-full px-4 py-3 rounded-lg flex items-center gap-3
                    transition-all duration-300
                    ${activeSection === item.id ? 'bg-emerald-500/20 text-emerald-400' : 'text-emerald-200 hover:bg-emerald-500/10 hover:text-emerald-400'}
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
            
            {/* Mobile Supplier Sign-up Button */}
            <a
              href="https://form.jotform.com/233295179997276"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-2 px-4 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg flex items-center gap-3 transition-all duration-300"
            >
              <ClipboardEdit className="w-5 h-5" />
              <span className="font-medium">Supplier Sign-up</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;