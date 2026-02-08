
import React, { useState, useEffect } from 'react';
import { Heart, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'App Showcase', href: '#app-showcase' },
    { name: 'Contact', href: 'https://khandarkar.com/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 
        ${scrolled
            ? 'bg-white/80 backdrop-blur-md shadow-premium py-3'
            : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo Section */}
          <div className="flex items-center gap-3 group cursor-pointer select-none">
            <div className="relative flex items-center h-10 w-12 translate-y-1">
              <Heart
                className="absolute left-0 bottom-1 w-6 h-6 fill-[#1E3A8A] text-[#1E3A8A] transform -rotate-12 transition-transform group-hover:scale-110"
              />
              <Heart
                className="absolute right-0 top-0 w-8 h-8 fill-[#B6337D] text-[#B6337D] transform rotate-12 drop-shadow-md transition-transform group-hover:scale-110"
              />
            </div>

            <div className="flex flex-col ml-1">
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight flex items-baseline font-cinzel">
                <span className="text-[#1E3A8A]">Khandar</span>
                <span className="text-[#B6337D]">Kar</span>
              </h1>
              <span className={`text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] mt-[-2px] transition-colors duration-300 font-sans ${scrolled ? 'text-gray-500' : 'text-white/90'}`}>
                Sacred Bond of Nikah
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-bold transition-all tracking-[0.15em] uppercase hover:tracking-[0.2em] duration-300 
                ${scrolled ? 'text-gray-800 hover:text-[#B6337D]' : 'text-white hover:text-[#D4AF37]'}`}
              >
                {link.name}
              </a>
            ))}

            {/* CTA Buttons */}
            <div className="flex items-center gap-4">
              <a
                href="https://khandarkar.com/explore"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs font-bold transition-all tracking-[0.15em] uppercase hover:tracking-[0.2em] duration-300 border py-2.5 px-6 rounded-full
                ${scrolled ? 'border-gray-800 text-gray-800 hover:bg-gray-50' : 'border-white text-white hover:bg-white/10'}`}
              >
                Continue in Web
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.khandarkar.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2 bg-white border-2 border-black rounded-xl text-black transition-all hover:bg-gray-50 hover:scale-105 active:scale-95"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg"
                  alt="Google Play"
                  className="w-5 h-5"
                />
                <span className="font-bold text-sm tracking-tight">Google Play</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
          >
            <Menu className="w-8 h-8" strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-[#1E3A8A]/95 backdrop-blur-xl transition-transform duration-500 lg:hidden flex flex-col items-center justify-center space-y-8 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
        >
          <X className="w-10 h-10" strokeWidth={1} />
        </button>

        <div className="flex flex-col items-center gap-1 mb-8">
          <Heart className="w-12 h-12 fill-[#B6337D] text-[#B6337D] animate-pulse" />
          <h2 className="text-3xl font-cinzel text-white mt-4">KhandarKar</h2>
        </div>

        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-serif text-white hover:text-[#D4AF37] transition-colors"
          >
            {link.name}
          </a>
        ))}

        <div className="flex flex-col items-center gap-4 mt-4">
          <a
            href="https://khandarkar.com/explore"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold text-white uppercase tracking-widest border border-white/30 px-8 py-3 rounded-full hover:bg-white/10 transition-all"
          >
            Continue in Web
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.khandarkar.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-3 bg-white border-2 border-black rounded-xl text-black transition-all hover:bg-gray-50 shadow-lg"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg"
              alt="Google Play"
              className="w-6 h-6"
            />
            <span className="font-bold text-lg tracking-tight">Google Play</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
