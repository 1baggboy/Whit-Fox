import React from 'react';
import { motion } from 'motion/react';
import { Star, ShieldCheck, Users, GlassWater, Utensils, Music, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About = () => {
  const stats = [
    { label: "Years of Excellence", value: "5+" },
    { label: "VIP Tables", value: "25" },
    { label: "Signature Cocktails", value: "50+" },
    { label: "Happy Guests", value: "100k+" }
  ];

  const values = [
    {
      icon: <Star className="text-gold" size={32} />,
      title: "Exclusivity",
      description: "We provide an elite environment for those who appreciate the finer things in life."
    },
    {
      icon: <ShieldCheck className="text-gold" size={32} />,
      title: "Premium Service",
      description: "Our dedicated team ensures every guest receives world-class hospitality."
    },
    {
      icon: <Users className="text-gold" size={32} />,
      title: "Community",
      description: "A social hub for Lagos' most vibrant and successful individuals."
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 bg-dark-bg min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xs font-bold uppercase tracking-[0.4em] text-gold mb-6 block"
            >
              The Whitefox Legacy
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter leading-none mb-12"
            >
              LUXURY <br />
              <span className="text-gold">REDEFINED</span>
            </motion.h1>
            <p className="text-xl text-white/60 mb-12 leading-relaxed">
              Whitefox Lounge isn't just a destination; it's a statement. Since our inception, we've set the standard for premium nightlife in Lagos, blending sophisticated design with high-energy atmosphere.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-4xl font-display font-black text-gold mb-1">{stat.value}</p>
                  <p className="text-xs uppercase tracking-widest text-white/40">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden relative z-10">
              <img
                src="https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&q=80&w=1000"
                alt="Whitefox Interior"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-60 h-60 bg-gold/10 blur-[100px] rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-neon-purple/10 blur-[120px] rounded-full" />
          </div>
        </div>

        {/* Values Section */}
        <div className="py-24 border-y border-white/5 mb-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter mb-6">
              OUR <span className="text-gold">CORE</span> VALUES
            </h2>
            <p className="text-white/40 max-w-xl mx-auto uppercase tracking-widest text-sm">
              The principles that drive the Whitefox experience every single night.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center mx-auto mb-8 group-hover:bg-gold group-hover:text-black transition-all duration-500">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-display font-bold uppercase mb-4 tracking-wider">{value.title}</h3>
                <p className="text-white/60 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1514525253361-bee8718a340b?auto=format&fit=crop&q=80&w=1000"
                alt="Whitefox Vibe"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter mb-8 leading-none">
              THE <span className="text-gold">WHITEFOX</span> STORY
            </h2>
            <div className="space-y-6 text-white/60 leading-relaxed text-lg">
              <p>
                Founded in the heart of Lekki, Whitefox Lounge was born from a vision to create a space where luxury meets energy. We noticed a gap in the market for a venue that offered both high-end dining and an unparalleled clubbing experience.
              </p>
              <p>
                Today, we are proud to be recognized as one of Lagos' premier nightlife destinations. Our commitment to quality, from our curated drink list to our world-class entertainment, remains at the core of everything we do.
              </p>
              <p>
                Whether you're here for a quiet evening drink or a high-octane night of celebration, Whitefox Lounge provides the perfect backdrop for memories that last a lifetime.
              </p>
            </div>
            <Link
              to="/reservations"
              className="inline-flex items-center gap-2 mt-12 bg-gold text-black px-10 py-5 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-white transition-all"
            >
              Join the Experience <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
