import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { cn } from '../lib/utils';
import { BUSINESS_INFO } from '../constants/business';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Reservations', path: '/reservations' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={BUSINESS_INFO.logo} alt="Whitefox Logo" className="w-10 h-10 rounded-full" />
          <span className="text-2xl font-display font-bold tracking-tighter text-white">
            WHITEFOX<span className="text-gold">LOUNGE</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium uppercase tracking-widest transition-colors hover:text-gold',
                location.pathname === link.path ? 'text-gold' : 'text-white/70'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/reservations"
            className="bg-gold text-black px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors"
          >
            Reserve Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          'fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="text-2xl font-display font-bold uppercase tracking-widest hover:text-gold"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <Link
          to="/reservations"
          className="bg-gold text-black px-10 py-4 rounded-full text-lg font-bold uppercase tracking-widest"
          onClick={() => setIsOpen(false)}
        >
          Reserve Now
        </Link>
        
        <div className="flex gap-6 mt-8">
          <a href={`tel:${BUSINESS_INFO.phone}`} className="p-3 bg-white/10 rounded-full text-white">
            <Phone size={24} />
          </a>
          <a href={BUSINESS_INFO.socials.whatsapp} className="p-3 bg-white/10 rounded-full text-white">
            <MessageSquare size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};
