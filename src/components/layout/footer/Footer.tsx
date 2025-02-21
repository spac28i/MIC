'use client';
import React, { useState, useEffect } from 'react';
import { Mountain, Mail, Phone, MapPin, ExternalLink, Loader2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/Alert';
import { motion } from 'framer-motion';

interface MousePosition {
  x: number;
  y: number;
}

interface TooltipProps {
  children: React.ReactNode;
  content: string;
}

interface ContactCardProps {
  icon: React.ElementType;
  title: string;
  content: string;
  href: string;
}

const COMPANY_INFO = {
  name: 'MICO',
  fullName: 'Malahat Investment Corporation',
  description: "Managing the Bamberton Lands",
  contact: {
    address: '1451 Trowsse Road, Mill Bay, BC V8H 1B7',
    email: 'info@malahatinvestment.ca',
    phone: '+1 (250) 830-8258',
  },
  year: new Date().getFullYear(),
} as const;

const Tooltip: React.FC<TooltipProps> = ({ children, content }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative group" 
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 text-sm text-white bg-black/90 backdrop-blur-sm rounded-lg whitespace-nowrap animate-fade-in z-50">
          {content}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-black/90" />
        </div>
      )}
    </div>
  );
};

const ContactCard: React.FC<ContactCardProps> = ({ icon: Icon, title, content, href }) => {
  const [isLoading, setIsLoading] = useState(false);
  const isExternal = href.startsWith('http');

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isExternal) {
      e.preventDefault();
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 800));
      window.open(href, '_blank', 'noopener,noreferrer');
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
    >
      <Tooltip content={`Click to ${title.toLowerCase()}`}>
        <a
          href={href}
          onClick={handleClick}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="group relative p-8 rounded-lg bg-black/40 backdrop-blur-xl border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-500 block"
        >
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

          {/* Icon */}
          <div className="relative flex justify-center mb-8">
            <div className="relative p-4 bg-black/30 rounded-lg border border-emerald-500/30 group-hover:border-emerald-500/50 transition-colors duration-500">
              {isLoading ? (
                <Loader2 className="w-8 h-8 text-emerald-300 animate-spin" />
              ) : (
                <Icon className="w-8 h-8 text-emerald-300 transform group-hover:scale-110 transition-transform duration-500" />
              )}
            </div>
          </div>

          {/* Content */}
          <div className="relative text-center space-y-4">
            <h3 className="text-xl font-light text-amber-100 group-hover:text-amber-50 transition-colors duration-300">
              {title}
              {isExternal && (
                <ExternalLink className="inline-block ml-2 w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </h3>
            <p className="text-amber-200/80 group-hover:text-amber-100 transition-colors duration-300 font-light">
              {content}
            </p>
          </div>
        </a>
      </Tooltip>
    </motion.div>
  );
};

const Footer: React.FC = () => {
  const [isOffline, setIsOffline] = useState(false);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5,
      });
    };

    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    setIsLoaded(true);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <footer id="contact" className="relative min-h-screen flex items-center overflow-hidden py-24 md:py-32">
      {isOffline && (
        <Alert className="fixed bottom-4 right-4 max-w-md bg-red-900/90 border-red-500 text-white">
          <AlertDescription>
            You are currently offline. Some features may be limited.
          </AlertDescription>
        </Alert>
      )}

      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-emerald-950 via-black to-amber-950"
          style={{
            transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`,
            transition: 'transform 0.3s ease-out'
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
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-20 md:mb-24"
        >
          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extralight bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 via-amber-100 to-amber-200">
            Contact Us
          </h2>
          
          {/* Decorative line */}
          <div className="w-32 h-[2px] mx-auto mt-8">
            <div className="absolute w-32 bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-[2px]" />
            <div className="absolute w-32 bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-[2px] animate-pulse" />
          </div>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20 md:mb-24">
          <ContactCard
            icon={MapPin}
            title="Visit Us"
            content={COMPANY_INFO.contact.address}
            href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.contact.address)}`}
          />
          <ContactCard
            icon={Mail}
            title="Email Us"
            content={COMPANY_INFO.contact.email}
            href={`mailto:${COMPANY_INFO.contact.email}`}
          />
          <ContactCard
            icon={Phone}
            title="Call Us"
            content={COMPANY_INFO.contact.phone}
            href={`tel:${COMPANY_INFO.contact.phone.replace(/[^\d+]/g, '')}`}
          />
        </div>

        {/* Footer Bottom */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative pt-8 border-t border-emerald-500/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-lg font-light text-amber-200/70">
              © {COMPANY_INFO.year} {COMPANY_INFO.fullName}. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;