
import React, { useState, useEffect } from 'react';
import { ChinarLeafIcon } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-dark py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <ChinarLeafIcon className={`w-8 h-8 transition-colors duration-300 ${scrolled ? 'text-[#D4AF37]' : 'text-white'}`} />
          <div className="flex flex-col">
            <span className={`text-2xl font-cinzel font-bold tracking-widest ${scrolled ? 'text-[#D4AF37]' : 'text-white'}`}>KHANDARKAR</span>
            <span className={`text-[10px] uppercase tracking-tighter ${scrolled ? 'text-white/60' : 'text-white/80'}`}>Sacred Bond of Nikah</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {['About', 'Success Stories', 'Safety', 'FAQ'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className={`text-sm font-medium hover:text-[#D4AF37] transition-colors ${scrolled ? 'text-white' : 'text-white/90'}`}>
              {item}
            </a>
          ))}
          <button className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${scrolled ? 'bg-[#D4AF37] text-white hover:bg-[#B8962D]' : 'bg-white text-[#064E3B] hover:bg-[#D4AF37] hover:text-white'}`}>
            Login
          </button>
        </div>

        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
