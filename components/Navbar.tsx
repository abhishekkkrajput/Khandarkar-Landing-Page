
import React, { useState, useEffect } from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

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
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isHome = location.pathname === '/';
  // Show background if scrolled OR if not on home page
  const showBackground = scrolled || !isHome;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b 
        ${showBackground
            ? 'bg-white/90 backdrop-blur-xl shadow-premium py-4 border-white/20'
            : 'bg-transparent py-6 border-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group cursor-pointer select-none">
            <div className="relative flex items-center h-10 w-12 translate-y-1">
              <Heart
                className="absolute left-0 bottom-1 w-6 h-6 fill-[#1E3A8A] text-[#1E3A8A] transform -rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
              />
              <Heart
                className="absolute right-0 top-0 w-8 h-8 fill-[#B6337D] text-[#B6337D] transform rotate-12 drop-shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
              />
            </div>

            <div className="flex flex-col ml-1">
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight flex items-baseline font-cinzel">
                <span className="text-[#1E3A8A] transition-colors duration-300 group-hover:text-brand-dark">Khandar</span>
                <span className="text-gold-plated transition-colors duration-300">Kar</span>
              </h1>
              <span className={`text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] mt-[-2px] transition-colors duration-300 font-sans ${showBackground ? 'text-gray-500' : 'text-white/90 drop-shadow-sm'}`}>
                Sacred Bond of Nikah
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href.startsWith('/') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-xs font-bold transition-all tracking-[0.15em] uppercase hover:tracking-[0.2em] duration-300 relative group
                  ${showBackground ? 'text-gray-800 hover:text-[#B6337D]' : 'text-white hover:text-[#D4AF37] drop-shadow-md'}`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${showBackground ? 'bg-[#B6337D]' : 'bg-[#D4AF37]'}`}></span>
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-bold transition-all tracking-[0.15em] uppercase hover:tracking-[0.2em] duration-300 relative group
                  ${showBackground ? 'text-gray-800 hover:text-[#B6337D]' : 'text-white hover:text-[#D4AF37] drop-shadow-md'}`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${showBackground ? 'bg-[#B6337D]' : 'bg-[#D4AF37]'}`}></span>
                </a>
              )
            ))}

            {/* CTA Buttons */}
            <div className="flex items-center gap-4">
              <a
                href="https://khandarkar.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs font-bold transition-all tracking-[0.15em] uppercase hover:tracking-[0.2em] duration-300 border py-2.5 px-6 rounded-full
                ${showBackground ? 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white' : 'border-white text-white hover:bg-white hover:text-[#B6337D] drop-shadow-md'}`}
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
            className={`lg:hidden p-2 rounded-lg transition-colors ${showBackground ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10 filter drop-shadow-md'}`}
          >
            <Menu className="w-8 h-8" strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-[#1E3A8A]/95 backdrop-blur-2xl transition-all duration-500 lg:hidden flex flex-col items-center justify-center space-y-8 ${mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
      >
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors transform hover:rotate-90 duration-300"
        >
          <X className="w-10 h-10" strokeWidth={1} />
        </button>

        <div className="flex flex-col items-center gap-1 mb-8">
          <Heart className="w-16 h-16 fill-[#B6337D] text-[#B6337D] animate-pulse drop-shadow-[0_0_15px_rgba(182,51,125,0.5)]" />
          <h2 className="text-4xl font-cinzel text-white mt-6 tracking-wide">KhandarKar</h2>
        </div>

        {navLinks.map((link, idx) => (
          link.href.startsWith('/') ? (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-serif text-white hover:text-[#D4AF37] transition-all transform hover:scale-110"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {link.name}
            </Link>
          ) : (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-serif text-white hover:text-[#D4AF37] transition-all transform hover:scale-110"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {link.name}
            </a>
          )
        ))}

        <div className="flex flex-col items-center gap-6 mt-8 w-full px-10">
          <a
            href="https://khandarkar.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold text-white uppercase tracking-widest border border-white/30 px-8 py-4 rounded-full hover:bg-white hover:text-[#1E3A8A] transition-all w-full text-center hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Continue in Web
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.khandarkar.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-3 bg-white border-2 border-black rounded-xl text-black transition-all hover:bg-gray-50 shadow-lg w-full"
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
