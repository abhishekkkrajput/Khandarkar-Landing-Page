import React from 'react';
import { Mail, MapPin, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { WalnutPattern } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="relative bg-[#B6337D] text-white pt-20 pb-10 overflow-hidden">
      {/* Decorative Gold Carving Border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] gold-gradient"></div>
      <div className="absolute top-2 left-0 right-0 h-12 opacity-10 pointer-events-none">
        <WalnutPattern />
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Reach us */}
          <div>
            <h4 className="text-xl font-bold text-white mb-8">Reach us</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                  <Mail className="w-4 h-4 text-gold" />
                </div>
                <span className="text-white/80 hover:text-white transition-colors">contact@khandarkar.com</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                  <MapPin className="w-4 h-4 text-gold" />
                </div>
                <span className="text-white/80 transition-colors">Srinagar, Kashmir</span>
              </div>
            </div>
          </div>

          {/* Column 2: Follow Us */}
          <div>
            <h4 className="text-xl font-bold text-white mb-8">Follow Us</h4>
            <div className="space-y-4">
              <a href="#" className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-[#E4405F]/20 flex items-center justify-center group-hover:bg-[#E4405F]/40 transition-all">
                  <Instagram className="w-4 h-4 text-[#E4405F]" />
                </div>
                <span className="text-white/80 group-hover:text-white transition-colors">Instagram</span>
              </a>
              <a href="#" className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-[#1877F2]/20 flex items-center justify-center group-hover:bg-[#1877F2]/40 transition-all">
                  <Facebook className="w-4 h-4 text-[#1877F2]" />
                </div>
                <span className="text-white/80 group-hover:text-white transition-colors">Facebook</span>
              </a>
              <a href="#" className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-[#1DA1F2]/20 flex items-center justify-center group-hover:bg-[#1DA1F2]/40 transition-all">
                  <Twitter className="w-4 h-4 text-[#1DA1F2]" />
                </div>
                <span className="text-white/80 group-hover:text-white transition-colors">Twitter</span>
              </a>
              <a href="#" className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-[#FF0000]/20 flex items-center justify-center group-hover:bg-[#FF0000]/40 transition-all">
                  <Youtube className="w-4 h-4 text-[#FF0000]" />
                </div>
                <span className="text-white/80 group-hover:text-white transition-colors">YouTube</span>
              </a>
            </div>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h4 className="text-xl font-bold text-white mb-8">Legal</h4>
            <ul className="space-y-4 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Services</a></li>
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-8">Quick Links</h4>
            <ul className="space-y-4 text-white/80">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="https://khandarkar.com/about" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">About</a></li>
              <li><a href="https://khandarkar.com/contact" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between text-white/40 text-xs tracking-widest uppercase font-bold">
          <p>© 2024 <span className="text-gold">KHANDARKAR.COM</span>. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0 text-white/60">
            <span>Inspired by Culture</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;