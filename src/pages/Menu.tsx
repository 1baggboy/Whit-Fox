import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GlassWater, Utensils, ShoppingCart, MessageSquare, ArrowRight } from 'lucide-react';
import { MENU_ITEMS, BUSINESS_INFO } from '../constants/business';
import { formatCurrency, cn } from '../lib/utils';

export const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'food' | 'drink'>('all');

  const filteredItems = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="pt-32 pb-24 px-6 bg-dark-bg min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-[0.4em] text-gold mb-6 block"
          >
            Exquisite Flavors
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter leading-none mb-12"
          >
            THE <span className="text-gold">MENU</span>
          </motion.h1>

          {/* Category Filter */}
          <div className="flex items-center justify-center gap-4">
            {[
              { id: 'all', label: 'All Items', icon: null },
              { id: 'food', label: 'Food', icon: <Utensils size={16} /> },
              { id: 'drink', label: 'Drinks', icon: <GlassWater size={16} /> }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={cn(
                  'flex items-center gap-2 px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300',
                  activeCategory === cat.id 
                    ? 'bg-gold text-black' 
                    : 'bg-white/5 text-white/60 hover:bg-white/10'
                )}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="glass-card rounded-3xl overflow-hidden group hover:border-gold transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold text-gold">
                  {formatCurrency(item.price)}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold/60">
                    {item.category}
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <h3 className="text-2xl font-display font-bold uppercase mb-3 group-hover:text-gold transition-colors">
                  {item.name}
                </h3>
                <p className="text-white/50 text-sm mb-8 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center gap-4">
                  <button className="flex-1 bg-white/5 hover:bg-gold hover:text-black text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2">
                    <ShoppingCart size={16} /> Add to Order
                  </button>
                  <a
                    href={BUSINESS_INFO.socials.whatsapp}
                    className="p-3 bg-green-500/10 text-green-500 rounded-full hover:bg-green-500 hover:text-white transition-all"
                  >
                    <MessageSquare size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* WhatsApp Order CTA */}
        <div className="mt-24 p-12 rounded-3xl bg-gradient-to-r from-gold/20 to-transparent border border-gold/20 text-center">
          <h2 className="text-3xl font-display font-bold uppercase mb-6">Prefer to order via WhatsApp?</h2>
          <p className="text-white/60 mb-10 max-w-2xl mx-auto">
            Our team is ready to take your order directly. Fast, easy, and convenient.
          </p>
          <a
            href={BUSINESS_INFO.socials.whatsapp}
            className="inline-flex items-center gap-3 bg-green-500 text-white px-10 py-5 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-green-600 transition-all"
          >
            <MessageSquare size={24} />
            Order on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};
