import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Maximize2, X, Play, Camera, GlassWater, Utensils, Music } from 'lucide-react';
import { cn } from '../lib/utils';

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'interior' | 'food' | 'drinks' | 'events'>('all');

  const images = [
    { url: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&q=80&w=800", category: 'interior' },
    { url: "https://images.unsplash.com/photo-1514525253361-bee8718a340b?auto=format&fit=crop&q=80&w=800", category: 'events' },
    { url: "https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&q=80&w=800", category: 'drinks' },
    { url: "https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=800", category: 'food' },
    { url: "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&q=80&w=800", category: 'interior' },
    { url: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=800", category: 'drinks' },
    { url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800", category: 'events' },
    { url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800", category: 'food' },
    { url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800", category: 'interior' },
    { url: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800", category: 'drinks' },
    { url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800", category: 'events' },
    { url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800", category: 'food' }
  ];

  const filteredImages = activeFilter === 'all' 
    ? images 
    : images.filter(img => img.category === activeFilter);

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
            Visual Experience
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter leading-none mb-12"
          >
            THE <span className="text-gold">GALLERY</span>
          </motion.h1>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              { id: 'all', label: 'All', icon: <Camera size={16} /> },
              { id: 'interior', label: 'Venue', icon: <Music size={16} /> },
              { id: 'food', label: 'Food', icon: <Utensils size={16} /> },
              { id: 'drinks', label: 'Drinks', icon: <GlassWater size={16} /> },
              { id: 'events', label: 'Events', icon: <Play size={16} /> }
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id as any)}
                className={cn(
                  'flex items-center gap-2 px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300',
                  activeFilter === filter.id 
                    ? 'bg-gold text-black' 
                    : 'bg-white/5 text-white/60 hover:bg-white/10'
                )}
              >
                {filter.icon}
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-3xl cursor-pointer"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={`Gallery ${index}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-gold/20 backdrop-blur-md flex items-center justify-center text-gold border border-gold/30">
                  <Maximize2 size={24} />
                </div>
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white/80">
                  {image.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-10 right-10 text-white/60 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage}
              alt="Lightbox"
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        )}
      </div>
    </div>
  );
};
