import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, Clock, MessageSquare, Star, ArrowRight, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants/business';
import { cn } from '../lib/utils';

export const Reservations = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: 2,
    date: '',
    time: '',
    tableType: 'standard',
    requests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="pt-32 pb-24 px-6 bg-dark-bg min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* Left Side: Info & Social Proof */}
        <div>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xs font-bold uppercase tracking-[0.4em] text-gold mb-6 block"
          >
            Secure Your Table
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter leading-none mb-12"
          >
            RESERVE <br />
            <span className="text-gold">YOUR SPOT</span>
          </motion.h1>
          
          <p className="text-xl text-white/60 mb-12 leading-relaxed max-w-lg">
            Experience the pinnacle of nightlife. Our tables fill up fast, especially on weekends. Book now to avoid disappointment.
          </p>

          <div className="space-y-8 mb-16">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center shrink-0">
                <Star className="text-gold" size={28} />
              </div>
              <div>
                <h4 className="text-xl font-display font-bold uppercase mb-2">VIP Experience</h4>
                <p className="text-white/40 text-sm">Priority entry, dedicated server, and premium bottle service.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center shrink-0">
                <MessageSquare className="text-gold" size={28} />
              </div>
              <div>
                <h4 className="text-xl font-display font-bold uppercase mb-2">Instant Confirmation</h4>
                <p className="text-white/40 text-sm">Get immediate confirmation via WhatsApp or SMS.</p>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="glass-card p-10 rounded-3xl border-gold/20">
            <h4 className="text-2xl font-display font-bold uppercase mb-4">Need a last-minute table?</h4>
            <p className="text-white/60 mb-8">Chat with our reservation manager directly on WhatsApp for instant availability.</p>
            <a
              href={BUSINESS_INFO.socials.whatsapp}
              className="flex items-center justify-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-green-600 transition-all"
            >
              <MessageSquare size={20} />
              WhatsApp Reservation
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-12 rounded-[2.5rem] relative z-10"
          >
            {isSubmitted ? (
              <div className="text-center py-20">
                <CheckCircle size={80} className="text-gold mx-auto mb-8" />
                <h2 className="text-3xl font-display font-bold uppercase mb-4">Request Received!</h2>
                <p className="text-white/60 mb-10">
                  Our team will contact you shortly to confirm your reservation.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-gold text-black px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest"
                >
                  Make Another Booking
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-2">Full Name</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold transition-colors"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-2">Phone Number</label>
                    <input
                      type="tel"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold transition-colors"
                      placeholder="+234..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-2">Guests</label>
                    <div className="relative">
                      <Users size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" />
                      <select
                        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-4 focus:outline-none focus:border-gold transition-colors appearance-none"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15].map(n => (
                          <option key={n} value={n} className="bg-black">{n} Guests</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-2">Date</label>
                    <div className="relative">
                      <Calendar size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" />
                      <input
                        type="date"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-4 focus:outline-none focus:border-gold transition-colors"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-2">Time</label>
                    <div className="relative">
                      <Clock size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" />
                      <select
                        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-4 focus:outline-none focus:border-gold transition-colors appearance-none"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      >
                        <option value="" className="bg-black">Select Time</option>
                        {['18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00', '01:00'].map(t => (
                          <option key={t} value={t} className="bg-black">{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-2">Table Type</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, tableType: 'standard' })}
                      className={cn(
                        'px-6 py-4 rounded-2xl border text-sm font-bold uppercase tracking-widest transition-all',
                        formData.tableType === 'standard' ? 'bg-white text-black border-white' : 'bg-white/5 border-white/10 text-white/60'
                      )}
                    >
                      Standard
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, tableType: 'vip' })}
                      className={cn(
                        'px-6 py-4 rounded-2xl border text-sm font-bold uppercase tracking-widest transition-all',
                        formData.tableType === 'vip' ? 'bg-gold text-black border-gold' : 'bg-white/5 border-white/10 text-white/60'
                      )}
                    >
                      VIP Table
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-2">Special Requests</label>
                  <textarea
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold transition-colors"
                    placeholder="Birthdays, anniversaries, or specific table requests..."
                    value={formData.requests}
                    onChange={(e) => setFormData({ ...formData, requests: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-black py-6 rounded-2xl text-lg font-bold uppercase tracking-[0.2em] hover:bg-white transition-all flex items-center justify-center gap-2"
                >
                  Confirm Reservation <ArrowRight size={20} />
                </button>
              </form>
            )}
          </motion.div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/20 blur-[100px] rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-neon-purple/20 blur-[100px] rounded-full" />
        </div>
      </div>
    </div>
  );
};
