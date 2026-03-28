import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Instagram, Facebook, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../constants/business';

export const Contact = () => {
  return (
    <div className="pt-32 pb-24 px-6 bg-dark-bg min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-[0.4em] text-gold mb-6 block"
          >
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter leading-none mb-12"
          >
            CONTACT <span className="text-gold">US</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Left Side: Info */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
              <div className="glass-card p-10 rounded-3xl">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                  <MapPin className="text-gold" size={24} />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4">Location</h4>
                <p className="text-lg font-medium leading-relaxed">{BUSINESS_INFO.address}</p>
              </div>
              <div className="glass-card p-10 rounded-3xl">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                  <Phone className="text-gold" size={24} />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4">Phone</h4>
                <p className="text-lg font-medium leading-relaxed">{BUSINESS_INFO.phone}</p>
              </div>
              <div className="glass-card p-10 rounded-3xl">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                  <Mail className="text-gold" size={24} />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4">Email</h4>
                <p className="text-lg font-medium leading-relaxed">{BUSINESS_INFO.email}</p>
              </div>
              <div className="glass-card p-10 rounded-3xl">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                  <MessageSquare className="text-gold" size={24} />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4">WhatsApp</h4>
                <p className="text-lg font-medium leading-relaxed">Available 24/7 for inquiries</p>
              </div>
            </div>

            <div className="mb-16">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gold mb-8">Opening Hours</h4>
              <div className="space-y-4">
                {Object.entries(BUSINESS_INFO.hours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between items-center text-white/60">
                    <span className="font-medium">{day}</span>
                    <div className="h-px flex-1 mx-4 bg-white/5" />
                    <span className="font-bold text-white">{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-gold mb-8">Follow Us</h4>
              <div className="flex gap-6">
                <a href={BUSINESS_INFO.socials.instagram} className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                  <Instagram size={24} />
                </a>
                <a href={BUSINESS_INFO.socials.facebook} className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                  <Facebook size={24} />
                </a>
                <a href={BUSINESS_INFO.socials.whatsapp} className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                  <MessageSquare size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Map & CTA */}
          <div className="space-y-12">
            <div className="rounded-[2.5rem] overflow-hidden aspect-square lg:aspect-auto lg:h-[500px] border border-white/10 relative group">
              {/* Placeholder for Google Maps Embed */}
              <div className="absolute inset-0 bg-white/5 flex flex-col items-center justify-center p-12 text-center">
                <MapPin size={60} className="text-gold/20 mb-6" />
                <h3 className="text-2xl font-display font-bold uppercase mb-4">Find us in Lekki</h3>
                <p className="text-white/40 mb-8 max-w-sm">
                  We are located in the heart of Lekki Phase 1, the premier destination for nightlife in Lagos.
                </p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-gold hover:text-black px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all"
                >
                  Get Directions
                </a>
              </div>
              <img
                src="https://images.unsplash.com/photo-1524666041070-9d87656c25bb?auto=format&fit=crop&q=80&w=1000"
                alt="Map Placeholder"
                className="w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="glass-card p-12 rounded-[2.5rem] bg-gradient-to-br from-gold/10 to-transparent border-gold/20">
              <h3 className="text-3xl font-display font-black uppercase mb-6">Ready to Experience <br /> <span className="text-gold">Whitefox?</span></h3>
              <p className="text-white/60 mb-10 leading-relaxed">
                Whether it's a casual night out or a major celebration, we're here to make it unforgettable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex-1 bg-white text-black px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-gold transition-all flex items-center justify-center gap-2"
                >
                  <Phone size={18} /> Call Now
                </a>
                <a
                  href={BUSINESS_INFO.socials.whatsapp}
                  className="flex-1 bg-green-500 text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-green-600 transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare size={18} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
