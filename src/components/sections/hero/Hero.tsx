'use client' 
import React, { useEffect, useState } from 'react';
import { ChevronRight, MousePointer2 } from 'lucide-react';

interface MousePosition {
  x: number;
  y: number;
}

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5,
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Trigger load animation
    setIsLoaded(true);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden font-sans">
      {/* Enhanced Dynamic Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-b from-emerald-950 via-black to-amber-950"
          style={{
            transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />

        {/* Enhanced geometric elements with smoother animations */}
        <div className="absolute inset-0">
          <div
            className={`absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full blur-3xl transition-all duration-700 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'
            }`}
            style={{
              transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px) scale(${
                scrolled ? 0.95 : 1
              })`,
            }}
          />
          <div
            className={`absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-amber-500/20 to-transparent rounded-full blur-3xl transition-all duration-700 delay-100 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{
              transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px) scale(${
                scrolled ? 0.95 : 1
              })`,
            }}
          />
        </div>

        {/* Enhanced pattern overlay with dynamic opacity */}
        <div
          className="absolute inset-0 bg-[url('/indigenous-pattern.svg')] bg-repeat transition-all duration-700"
          style={{
            opacity: scrolled ? 0.02 : 0.03,
            transform: `translateY(${scrolled ? -15 : 0}px)`,
          }}
        />

        {/* Enhanced glass effect with dynamic blur */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/5 to-black/10 transition-all duration-500"
          style={{
            backdropFilter: `blur(${scrolled ? '100px' : '80px'})`,
          }}
        />
      </div>

      {/* Interactive mouse guide */}
      <div
        className={`absolute text-white/50 flex items-center gap-2 transition-all duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
          top: '20%',
          right: '10%',
        }}
      >
        <MousePointer2 className="w-4 h-4" />
        <span className="text-sm font-light">Move mouse to interact</span>
      </div>

      <div className={`relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="text-center max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Enhanced main title with shimmer effect */}
            <h1 className="text-[clamp(2rem,6vw,4.5rem)] font-bold leading-tight relative">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 via-white to-amber-200 animate-gradient">
                Malahat Investment Corporation
              </span>
            </h1>

            {/* Enhanced description with fade-in animation */}
            <p className={`text-[clamp(1.5rem,4vw,2.75rem)] font-light text-amber-200/90 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Managing the Bamberton Industrial Lands
            </p>

            {/* Enhanced CTA buttons with improved hover effects */}
            <div className={`flex flex-wrap gap-4 md:gap-6 mt-20 md:mt-24 justify-center transition-all duration-700 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <a
                href="#companies"
                onClick={(e) => handleScroll(e, 'companies')}
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-lg font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5"
              >
                <span className="relative z-10 flex items-center gap-2">
                  MICO Tenants
                  <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-400 translate-y-[102%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScroll(e, 'contact')}
                className="group relative inline-flex items-center gap-2 px-8 py-4 border border-emerald-500/30 text-emerald-100 rounded-lg transition-all duration-300 hover:bg-emerald-500/10 hover:border-emerald-500/50 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/5"
              >
                Contact Us
                <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;