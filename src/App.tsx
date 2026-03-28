import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Menu } from './pages/Menu';
import { Reservations } from './pages/Reservations';
import { Events } from './pages/Events';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { MessageSquare, Phone } from 'lucide-react';
import { BUSINESS_INFO } from './constants/business';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-dark-bg text-white selection:bg-gold selection:text-black">
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Floating WhatsApp Button */}
        <a
          href={BUSINESS_INFO.socials.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform group"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare size={28} />
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">
            Chat with us
          </span>
        </a>

        {/* Sticky Mobile Reservation Bar */}
        <div className="fixed bottom-0 left-0 w-full md:hidden z-40 p-4 bg-black/80 backdrop-blur-md border-t border-white/10">
          <div className="flex gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex-1 bg-white/10 text-white py-4 rounded-2xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2"
            >
              <Phone size={16} /> Call Now
            </a>
            <Link
              to="/reservations"
              className="flex-[2] bg-gold text-black py-4 rounded-2xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2"
            >
              Reserve Table
            </Link>
          </div>
        </div>
      </div>
    </Router>
  );
}
