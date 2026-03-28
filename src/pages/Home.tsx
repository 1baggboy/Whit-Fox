import React from 'react';
import { Hero } from '../components/Hero';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Star, MessageSquare, Phone, MapPin, ArrowRight, GlassWater, Utensils, Music } from 'lucide-react';
import { BUSINESS_INFO, MENU_ITEMS } from '../constants/business';
import { formatCurrency } from '../lib/utils';

export const Home = () => {
  const features = [
    {
      icon: <GlassWater className="text-gold" size={32} />,
      title: "Premium Drinks",
      description: "A curated selection of the world's finest spirits and signature cocktails."
    },
    {
      icon: <Utensils className="text-gold" size={32} />,
      title: "Gourmet Cuisine",
      description: "Exquisite dishes prepared by our world-class chefs to satisfy your cravings."
    },
    {
      icon: <Music className="text-gold" size={32} />,
      title: "Vibrant Atmosphere",
      description: "The perfect blend of high-energy music and luxury lounge vibes."
    }
  ];

  return (
    <div className="w-full">
      <Hero />

      {/* Features Section */}
      <section className="py-24 px-6 bg-dark-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-10 rounded-3xl group hover:border-gold transition-all duration-500"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 uppercase tracking-wider">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Menu Preview */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-4 block">Taste the Luxury</span>
              <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter leading-none">
                OUR <span className="text-gold">SIGNATURE</span> SELECTION
              </h2>
            </div>
            <Link to="/menu" className="flex items-center gap-2 text-white/60 hover:text-gold transition-colors font-bold uppercase tracking-widest text-sm">
              View Full Menu <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MENU_ITEMS.slice(0, 3).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl aspect-[4/5]"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <span className="text-[10px] uppercase tracking-widest text-gold mb-2 block">{item.category}</span>
                  <h3 className="text-2xl font-display font-bold uppercase mb-2">{item.name}</h3>
                  <p className="text-white/60 text-sm mb-4 line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">{formatCurrency(item.price)}</span>
                    <button className="bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-gold hover:text-black transition-all">
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1514525253361-bee8718a340b?auto=format&fit=crop&q=80&w=2000"
            alt="VIP"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter leading-[0.85] mb-8">
              BECOME A <br />
              <span className="text-gold">WHITEFOX</span> VIP
            </h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed">
              Elevate your nightlife experience with our exclusive VIP tables. Priority entry, dedicated service, and the best views in the house.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                to="/reservations"
                className="bg-gold text-black px-10 py-5 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-white transition-colors"
              >
                Book VIP Table
              </Link>
              <a
                href={BUSINESS_INFO.socials.whatsapp}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-10 py-5 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-white/20 transition-colors"
              >
                <MessageSquare size={24} className="text-green-500" />
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Google Reviews */}
      <section className="py-24 px-6 bg-dark-bg">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-display font-black uppercase tracking-tighter mb-16">
            WHAT OUR <span className="text-gold">GUESTS</span> SAY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-card p-10 rounded-3xl text-left">
                <div className="flex text-gold mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-white/80 italic mb-8 leading-relaxed">
                  "The best lounge in Lekki! The music is always on point, and the service is top-notch. Highly recommend the VIP experience."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center font-bold text-gold">
                    JD
                  </div>
                  <div>
                    <p className="font-bold uppercase tracking-wider text-sm">John Doe</p>
                    <p className="text-xs text-white/40 uppercase tracking-widest">Google Reviewer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact Preview */}
      <footer className="bg-black py-24 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-8">
              <img src={BUSINESS_INFO.logo} alt="Whitefox Logo" className="w-12 h-12 rounded-full" />
              <span className="text-3xl font-display font-bold tracking-tighter text-white">
                WHITEFOX<span className="text-gold">LOUNGE</span>
              </span>
            </Link>
            <p className="text-white/50 max-w-md mb-8 leading-relaxed">
              Lagos' premier nightlife destination. Experience luxury, energy, and exclusivity in the heart of Lekki.
            </p>
            <div className="flex gap-4">
              <a href={BUSINESS_INFO.socials.instagram} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                <span className="sr-only">Instagram</span>
                <i className="lucide-instagram" />
              </a>
              <a href={BUSINESS_INFO.socials.whatsapp} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                <span className="sr-only">WhatsApp</span>
                <MessageSquare size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gold mb-8">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={18} className="text-gold shrink-0" />
                {BUSINESS_INFO.address}
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Phone size={18} className="text-gold shrink-0" />
                {BUSINESS_INFO.phone}
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <MessageSquare size={18} className="text-gold shrink-0" />
                WhatsApp: Available 24/7
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gold mb-8">Opening Hours</h4>
            <ul className="space-y-2 text-sm text-white/60">
              {Object.entries(BUSINESS_INFO.hours).map(([day, hours]) => (
                <li key={day} className="flex justify-between">
                  <span>{day}</span>
                  <span>{hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 text-center text-white/20 text-xs uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Whitefox Lounge. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};
