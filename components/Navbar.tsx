
import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-light py-2 shadow-[0_10px_40px_rgba(0,0,0,0.08)]' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative flex items-center h-10 w-12 translate-y-1">
            {/* Dark Blue Heart */}
            <Heart
              className="absolute left-0 bottom-1 w-6 h-6 fill-[#1E3A8A] text-[#1E3A8A] transform -rotate-12 transition-transform group-hover:scale-110"
            />
            {/* Magenta Heart */}
            <Heart
              className="absolute right-0 top-0 w-8 h-8 fill-[#B6337D] text-[#B6337D] transform rotate-12 drop-shadow-md transition-transform group-hover:scale-110"
            />
          </div>

          <div className="flex flex-col ml-1">
            <h1 className="text-3xl font-bold tracking-tight flex items-baseline" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <span className="text-[#1E3A8A]">Khandar</span>
              <span className="text-[#B6337D]">Kar</span>
            </h1>
            <span className={`text-[10px] font-bold uppercase tracking-[0.3em] mt-[-4px] transition-colors duration-300 ${scrolled ? 'text-gray-500' : 'text-white/90'}`}>
              Sacred Bond of Nikah
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <a href="https://khandarkar.com/about" target="_blank" rel="noopener noreferrer" className={`text-xs font-black transition-colors tracking-[0.15em] uppercase ${scrolled ? 'text-gray-800 hover:text-[#B6337D]' : 'text-white hover:text-gold'}`}>
            About
          </a>

          <a href="https://khandarkar.com/contact" target="_blank" rel="noopener noreferrer" className={`text-xs font-black transition-colors tracking-[0.15em] uppercase ${scrolled ? 'text-gray-800 hover:text-[#B6337D]' : 'text-white hover:text-gold'}`}>
            Contact
          </a>

          {/* Download App - NOW PRIMARY (More Highlighted) */}
          <a
            href="https://play.google.com/store/apps/details?id=com.khandarkar.app"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-3 px-6 py-3 rounded-2xl transition-all group shadow-lg hover:shadow-[#B6337D]/30 active:scale-95 bg-[#B6337D] text-white`}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg"
              alt="Play Store"
              className="w-5 h-5 brightness-0 invert"
            />
            <span className="text-[11px] font-black uppercase tracking-widest">Download App</span>
          </a>

          {/* Continue on web app - NOW SECONDARY (Less Highlighted) */}
          <a
            href="https://khandarkar.com/explore"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-[0.1em] transition-all border ${scrolled
              ? 'border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A]/5'
              : 'border-white/30 text-white hover:bg-white/10'
              }`}>
            Continue on web app
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className={scrolled ? 'text-gray-800 lg:hidden' : 'text-white lg:hidden'}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
