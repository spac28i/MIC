'use client';

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

type ContactCardProps = {
  icon: React.ElementType;
  title: string;
  value: string;
  href: string;
};

const CONTACT_INFO = {
  email: {
    title: 'Email Us',
    value: 'tristan@malahatinvestment.ca',
    href: 'mailto:tristan@malahatinvestment.ca',
  },
  phone: {
    title: 'Call Us',
    value: '+1 (250) 830-8258',
    href: 'tel:+12508308258',
  },
  location: {
    title: 'Visit Us',
    value: '1451 Trowsse Road, Mill Bay, BC V8H 1B7',
    href: `https://maps.google.com/?q=${encodeURIComponent(
      '1451 Trowsse Road, Mill Bay, BC V8H 1B7'
    )}`,
  },
} as const;

const ContactCard: React.FC<ContactCardProps> = ({ icon: Icon, title, value, href }) => (
  <motion.div
    // Subtle fade + upward motion
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
    viewport={{ once: true }}
    // Slight 3D hover tilt
    whileHover={{ scale: 1.02, rotateY: 3, rotateX: 1 }}
    className="group relative flex flex-col items-center transform transition-transform duration-300"
  >
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="w-full h-full p-8 rounded-2xl bg-gradient-to-br from-emerald-900/80 to-black/80 border border-amber-500/10 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/30 group-hover:shadow-lg group-hover:shadow-amber-900/20"
    >
      {/* Hover Effect Background */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-800/0 to-amber-700/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

      {/* Animated shimmer line across the card */}
      <motion.div
        className="absolute w-[120%] h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent top-1/2 left-[-10%] opacity-0 group-hover:opacity-50"
        animate={{ x: ['-100%', '100%'] }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 2.5,
          ease: 'easeInOut',
        }}
      />

      {/* Icon Container */}
      <div className="relative flex justify-center mb-6">
        <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-xl transform group-hover:scale-125 transition-transform duration-300" />
        <div className="relative p-4 bg-gradient-to-br from-amber-500/20 to-emerald-500/20 rounded-full border border-amber-500/20">
          <Icon className="w-8 h-8 text-amber-300" aria-hidden="true" />
        </div>
      </div>

      {/* Content */}
      <div className="text-center space-y-3">
        <h3 className="text-xl font-semibold text-amber-100">{title}</h3>
        <p className="text-amber-200/90 text-lg break-words hover:text-amber-100 transition-colors duration-300">
          {value}
        </p>
      </div>

      {/* Interactive Underline Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 mx-8">
        <div className="h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </div>
    </a>
  </motion.div>
);

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative py-32 bg-gradient-to-b from-emerald-900 to-black overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Subtle pattern */}
        <div className="absolute inset-0 bg-[url('/indigenous-pattern.svg')] bg-repeat opacity-5" />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />

        {/* Decorative Circles */}
        <div className="absolute -top-1/4 -left-1/4 w-2/3 h-2/3">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-700 to-amber-600 rounded-full opacity-20 blur-3xl animate-slow-spin" />
        </div>
        <div className="absolute -bottom-1/4 -right-1/4 w-2/3 h-2/3">
          <div className="absolute inset-0 bg-gradient-to-bl from-amber-700 to-emerald-600 rounded-full opacity-20 blur-3xl animate-slow-spin-reverse" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          {/* Rotating ring for extra flair */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none">
            <div className="absolute inset-0 border-2 border-emerald-500/20 rounded-full animate-spin-slow" />
          </div>
          <h2 className="relative text-4xl md:text-5xl font-bold text-amber-100 mb-6">
            Connect with Us
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <ContactCard
            icon={Mail}
            title={CONTACT_INFO.email.title}
            value={CONTACT_INFO.email.value}
            href={CONTACT_INFO.email.href}
          />
          <ContactCard
            icon={Phone}
            title={CONTACT_INFO.phone.title}
            value={CONTACT_INFO.phone.value}
            href={CONTACT_INFO.phone.href}
          />
          <ContactCard
            icon={MapPin}
            title={CONTACT_INFO.location.title}
            value={CONTACT_INFO.location.value}
            href={CONTACT_INFO.location.href}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;