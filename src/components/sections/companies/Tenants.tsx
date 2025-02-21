'use client';
import React, { useState, useEffect } from 'react';
import {
  Building2, Mountain, Wrench, Anchor, HardHat, TreePine,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface MousePosition {
  x: number;
  y: number;
}

const companies = [
  {
    name: 'Heidelberg Materials',
    icon: Building2,
    category: 'Construction Materials',
    website: 'https://www.heidelbergmaterials.com',
  },
  {
    name: 'Granite Inc',
    icon: Mountain,
    category: 'Aggregates',
    website: 'https://www.graniteconstruction.com',
  },
  {
    name: 'Emcon',
    icon: Wrench,
    category: 'Infrastructure',
    website: 'https://www.emconservices.ca',
  },
  {
    name: 'Scomill',
    icon: TreePine,
    category: 'Timber',
    website: 'https://www.scomilwood.com',
  },
  {
    name: 'Heavy Metal Marine',
    icon: Anchor,
    category: 'Marine Services',
    website: 'https://www.heavymetalmarineltd.com/',
  },
  {
    name: 'Ruskin Construction',
    icon: HardHat,
    category: 'Construction',
    website: 'https://www.ruskinconstruction.com',
  },
  {
    name: 'Kinsol Timber Systems',
    icon: TreePine,
    category: 'Timber & Construction',
    website: 'https://www.kinsol.com',
  },
];

const Companies = () => {
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
      id="companies"
      className="relative min-h-screen flex flex-col justify-center py-24 md:py-32 overflow-hidden font-sans"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 overflow-hidden">
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

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-20 md:mb-24"
        >
          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extralight bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 via-amber-100 to-amber-200">
            MICO Tenants
          </h2>
          
          {/* Decorative line */}
          <div className="w-32 h-[2px] mx-auto mt-8">
            <div className="absolute w-32 bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-[2px]" />
            <div className="absolute w-32 bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-[2px] animate-pulse" />
          </div>
        </motion.div>

        {/* Companies Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative"
        >
          {companies.map((company, index) => {
            const IconComponent = company.icon;
            return (
              <motion.a
                key={company.name}
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.1 * index,
                  ease: [0.23, 1, 0.32, 1],
                }}
                whileHover={{ scale: 1.02 }}
                className="group relative transform transition-all duration-300"
              >
                {/* Card Content */}
                <div className="relative bg-black/40 backdrop-blur-xl p-8 rounded-lg border border-emerald-500/10 group-hover:border-emerald-400/20 transition-all duration-300">
                  {/* Icon & Category */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-amber-500/20 rounded-lg blur-sm group-hover:blur-md transition-all" />
                      <div className="relative p-3 rounded-lg bg-black/50">
                        <IconComponent className="w-6 h-6 text-emerald-300" />
                      </div>
                    </div>
                    <span className="text-base font-light text-amber-200/80 group-hover:text-amber-200 transition-colors">
                      {company.category}
                    </span>
                  </div>

                  {/* Company Name & Arrow */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-light text-amber-100 group-hover:text-amber-200 transition-colors">
                      {company.name}
                    </h3>
                    <svg
                      className="w-5 h-5 text-emerald-300 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 pointer-events-none rounded-lg overflow-hidden">
                    <motion.div
                      className="w-[200%] h-full absolute -top-0 -left-full bg-gradient-to-r from-transparent via-emerald-300/30 to-transparent opacity-0 group-hover:opacity-100"
                      animate={{
                        left: ['0%', '100%'],
                        transition: { duration: 1.5, repeat: Infinity }
                      }}
                    />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Companies;