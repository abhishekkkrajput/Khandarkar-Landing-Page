
import React from 'react';
import { Mail, MapPin, Instagram, Facebook, Twitter, Youtube, Heart } from 'lucide-react';
import { WalnutPattern } from '../constants';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="relative bg-[#1A1A1A] text-white pt-20 pb-10 overflow-hidden border-t-4 border-[#D4AF37]">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
        <WalnutPattern />
      </div>

      {/* Gold Glow Overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-[#D4AF37] blur-[60px] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Reach Us */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Reach us</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="w-5 h-5 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <a href="mailto:contact@khandarkar.com" className="text-gray-400 hover:text-white transition-colors text-sm">contact@khandarkar.com</a>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-5 h-5 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <span className="text-gray-400 text-sm">Srinagar, Kashmir</span>
              </div>
            </div>
          </div>

          {/* Column 2: Follow Us */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Follow Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://www.instagram.com/khandarkar_com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group text-sm">
                  <Instagram className="w-5 h-5 text-[#E4405F] group-hover:scale-110 transition-transform" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/people/Khandarkar/61581174521661/?rdid=QuMlgeprq6HzuExi&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17YXf8PNgJ%2F" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group text-sm">
                  <Facebook className="w-5 h-5 text-[#1877F2] group-hover:scale-110 transition-transform" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="https://x.com/khandarkar_com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group text-sm">
                  <Twitter className="w-5 h-5 text-[#1DA1F2] group-hover:scale-110 transition-transform" />
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@khandar_kar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group text-sm">
                  <Youtube className="w-5 h-5 text-[#FF0000] group-hover:scale-110 transition-transform" />
                  <span>YouTube</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms & Services</Link></li>
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs tracking-wider">
            © 2025 <span className="text-[#D4AF37] font-bold">KHANDARKAR</span>. All Rights Reserved.
          </p>

          <div className="flex items-center gap-2 text-xs text-gray-500 tracking-widest uppercase">
            <span>Handcrafted in</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" />
            <span>Kashmir</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;