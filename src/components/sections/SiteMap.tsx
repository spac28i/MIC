'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

interface MousePosition {
  x: number;
  y: number;
}

const SiteMapSection = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    setIsLoaded(true);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="sitemap"
      className="relative min-h-screen flex items-center py-24 md:py-32 overflow-hidden font-sans"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-b from-emerald-950 via-black to-amber-950"
          style={{
            transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />

        {/* Enhanced geometric elements */}
        <div className="absolute inset-0">
          <div
            className={`absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full blur-3xl transform-gpu transition-all duration-700 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
            }}
          />
          <div
            className={`absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-amber-500/20 to-transparent rounded-full blur-3xl transform-gpu transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
            }}
          />
        </div>

        <div className="absolute inset-0 bg-[url('/indigenous-pattern.svg')] bg-repeat opacity-[0.03]" />
        
        <div className="absolute inset-0 backdrop-blur-[80px] bg-gradient-to-b from-black/0 via-black/5 to-black/10" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-20 md:mb-24"
        >
          {/* Title */}
          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extralight bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 via-amber-100 to-amber-200">
            Site Map
          </h2>

          {/* Decorative line */}
          <div className="w-32 h-[2px] mx-auto mt-8">
            <div className="absolute w-32 bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-[2px]" />
            <div className="absolute w-32 bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-[2px] animate-pulse" />
          </div>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Enhanced map container with subtle border animation */}
          <div className="relative rounded-2xl overflow-hidden group">
            {/* Animated border */}
            <div className="absolute inset-0 z-10 rounded-2xl transition-colors duration-300 border border-emerald-500/20 group-hover:border-emerald-500/30" />
            
            {/* Map Image with Parallax */}
            <motion.div
              className="relative w-full h-[600px] transition-transform duration-300 group-hover:scale-[1.01]"
              style={{
                translateX: mousePosition.x * -20,
                translateY: mousePosition.y * -20,
              }}
            >
              <Image
                src="/images/1.jpg"
                alt="MICO Properties Map"
                fill
                className="object-cover"
                priority
              />

              {/* Enhanced overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/5 to-black/10 transition-opacity duration-300 group-hover:opacity-50" />
            </motion.div>

            {/* Interactive hover effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
              initial={false}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-amber-500/10" />
            </motion.div>

            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-16 h-16">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-emerald-500/20 group-hover:border-emerald-500/40 transition-colors duration-300" />
            </div>
            <div className="absolute top-0 right-0 w-16 h-16">
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-emerald-500/20 group-hover:border-emerald-500/40 transition-colors duration-300" />
            </div>
            <div className="absolute bottom-0 left-0 w-16 h-16">
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-emerald-500/20 group-hover:border-emerald-500/40 transition-colors duration-300" />
            </div>
            <div className="absolute bottom-0 right-0 w-16 h-16">
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-emerald-500/20 group-hover:border-emerald-500/40 transition-colors duration-300" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SiteMapSection;