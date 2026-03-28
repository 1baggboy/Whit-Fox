import React from 'react';
import { motion } from 'motion/react';
import { PartyPopper, Cake, Briefcase, Music, ArrowRight, MessageSquare, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../constants/business';

export const Events = () => {
  const eventTypes = [
    {
      icon: <Cake className="text-gold" size={32} />,
      title: "Birthdays",
      description: "Celebrate your special day with a custom VIP package, cake service, and dedicated area.",
      features: ["Custom Cake", "VIP Table", "Bottle Service", "DJ Shoutout"]
    },
    {
      icon: <Briefcase className="text-gold" size={32} />,
      title: "Corporate Events",
      description: "Impress your clients or reward your team with a premium networking experience.",
      features: ["Private Area", "Custom Menu", "AV Support", "Dedicated Host"]
    },
    {
      icon: <PartyPopper className="text-gold" size={32} />,
      title: "Private Parties",
      description: "From engagement parties to exclusive launches, we provide the perfect backdrop.",
      features: ["Full Venue Hire", "Security", "Custom Decor", "Live Entertainment"]
    }
  ];

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
            Unforgettable Moments
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter leading-none mb-12"
          >
            HOST YOUR <br />
            <span className="text-gold">EVENT</span>
          </motion.h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            From intimate birthday celebrations to large-scale corporate takeovers, Whitefox Lounge offers the ultimate venue for your next event.
          </p>
        </div>

        {/* Event Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {eventTypes.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card p-12 rounded-[2.5rem] group hover:border-gold transition-all duration-500"
            >
              <div className="mb-8 transform group-hover:scale-110 transition-transform duration-500">
                {event.icon}
              </div>
              <h3 className="text-3xl font-display font-bold uppercase mb-6 tracking-wide">{event.title}</h3>
              <p className="text-white/60 mb-10 leading-relaxed">{event.description}</p>
              <ul className="space-y-4 mb-12">
                {event.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-white/80">
                    <Check size={16} className="text-gold" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="w-full bg-white/5 border border-white/10 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gold hover:text-black transition-all flex items-center justify-center gap-2"
              >
                Inquire Now <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Hero CTA for Events */}
        <div className="relative rounded-[3rem] overflow-hidden py-32 px-12 text-center">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=2000"
              alt="Event"
              className="w-full h-full object-cover opacity-40"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter mb-8">
              READY TO <span className="text-gold">CELEBRATE?</span>
            </h2>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              Our events team is ready to help you plan every detail. Let's make your next event legendary.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href={BUSINESS_INFO.socials.whatsapp}
                className="bg-green-500 text-white px-12 py-5 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-green-600 transition-all flex items-center gap-3"
              >
                <MessageSquare size={24} />
                WhatsApp Inquiry
              </a>
              <Link
                to="/reservations"
                className="bg-gold text-black px-12 py-5 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-white transition-all"
              >
                Book a Table
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
