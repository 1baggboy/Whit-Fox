import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../constants/business';

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&q=80&w=2000"
          alt="Nightlife"
          className="w-full h-full object-cover scale-110 animate-pulse-slow"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex items-center justify-center gap-2"
        >
          <div className="flex text-gold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/80">
            Lagos' Most Exclusive Nightlife Experience
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-9xl font-display font-black tracking-tighter leading-[0.85] uppercase mb-8"
        >
          THE <span className="text-gold">ELITE</span> <br />
          <span className="neon-text-purple">NIGHTLIFE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-white/70 mb-12 font-light leading-relaxed"
        >
          Experience luxury redefined at Whitefox Lounge. Premium drinks, gourmet cuisine, and the city's most vibrant atmosphere.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            to="/reservations"
            className="group relative bg-gold text-black px-10 py-5 rounded-full text-lg font-bold uppercase tracking-widest overflow-hidden transition-all hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book a Table <ArrowRight size={20} />
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>

          <Link
            to="/menu"
            className="flex items-center gap-3 text-white font-bold uppercase tracking-widest hover:text-gold transition-colors"
          >
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group hover:border-gold">
              <Play size={16} fill="currentColor" className="ml-1 group-hover:text-gold" />
            </div>
            View Menu
          </Link>
        </motion.div>
      </div>

      {/* Quick Actions Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-white/5 backdrop-blur-xl border-t border-white/10 z-20 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Location</p>
              <p className="text-sm font-medium">{BUSINESS_INFO.address}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Opening Hours</p>
              <p className="text-sm font-medium">Daily: 6:00 PM - 4:00 AM</p>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="text-sm font-bold hover:text-gold transition-colors">
              {BUSINESS_INFO.phone}
            </a>
            <a href={BUSINESS_INFO.socials.whatsapp} className="bg-green-500 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-green-600 transition-colors">
              WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
