'use client';
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface MousePosition {
  x: number;
  y: number;
}

const AboutUsSection = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    setIsLoaded(true);
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative min-h-screen overflow-hidden flex items-center font-sans py-24 md:py-32"
    >
      {/* Enhanced Background layers */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-b from-amber-950 via-black to-emerald-950"
          style={{
            transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />

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

        <motion.div
          className="absolute inset-0 bg-[url('/indigenous-pattern.svg')] bg-repeat opacity-[0.03]"
          style={{ y: backgroundY }}
        />

        <motion.div 
          className="absolute inset-0 backdrop-blur-[80px] bg-gradient-to-b from-black/0 via-black/5 to-black/10"
          style={{ opacity: contentOpacity }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-12 gap-6 md:gap-8 lg:gap-12">
          {/* Enhanced Title column */}
          <div className="col-span-12 md:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
              className="sticky top-40"
            >
              <h2 className="text-[clamp(3.5rem,8vw,9rem)] font-[200] leading-none tracking-tighter">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 via-white to-amber-200 pb-2">
                  About
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-400">
                  Us
                </span>
              </h2>
            </motion.div>
          </div>

          {/* Enhanced Content column */}
          <div className="col-span-12 md:col-span-8 md:pt-32">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="relative max-w-4xl"
            >
              {/* Enhanced decorative line */}
              <div className="absolute left-0 top-0 w-32 h-[2px]">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-transparent animate-pulse" />
              </div>

              {/* Enhanced text content with better spacing */}
              <div className="pt-20 w-full">
                <div className="space-y-16 md:space-y-20">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-[clamp(1.25rem,2.5vw,2.5rem)] text-amber-200/90 font-light leading-relaxed"
                  >
                    Since 2015, Malahat Investment Corporation (MICO) has managed the properties collectively known as the Bamberton Industrial Lands. 
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-[clamp(1.25rem,2.5vw,2.5rem)] text-amber-200/90 font-light leading-relaxed"
                  >
                    Located on southern Vancouver Island, these properties include Oliphant Lake, industrially-zoned waterfront lands, and a deep sea port in the Saanich Inlet.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-[clamp(1.25rem,2.5vw,2.5rem)] text-amber-200/90 font-light leading-relaxed"
                  >
                    With a long-term stewardship vision, MICO manages the lands for the ultimate benefit of Malahat Nation. 
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;