
import React from 'react';
import { Mail, MapPin, Instagram, Facebook, Twitter, Youtube, Heart } from 'lucide-react';
import { WalnutPattern } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="relative bg-[#1A1A1A] text-white pt-24 pb-12 overflow-hidden border-t-4 border-[#D4AF37]">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <WalnutPattern />
      </div>

      {/* Gold Glow Overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-[#D4AF37] blur-[50px] opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          {/* Column 1: Brand & Contact */}
          <div className="space-y-6">
            <h4 className="text-2xl font-cinzel text-[#D4AF37] mb-6">KhandarKar</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4 group">
                <div className="mt-1 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-all">
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 uppercase tracking-wider mb-1">Email Us</span>
                  <a href="mailto:contact@khandarkar.com" className="text-white hover:text-[#D4AF37] transition-colors">contact@khandarkar.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="mt-1 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-all">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 uppercase tracking-wider mb-1">Headquarters</span>
                  <span className="text-white">The Valley of Saints,<br />Kashmir, 190001</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-serif text-white mb-8 border-b border-[#D4AF37]/30 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li><a href="#hero" className="hover:text-[#D4AF37] hover:translate-x-1 transition-all inline-block">Home</a></li>
              <li><a href="https://khandarkar.com/about" className="hover:text-[#D4AF37] hover:translate-x-1 transition-all inline-block">About Us</a></li>
              <li><a href="https://khandarkar.com/features" className="hover:text-[#D4AF37] hover:translate-x-1 transition-all inline-block">Premium Features</a></li>
              <li><a href="https://khandarkar.com/contact" className="hover:text-[#D4AF37] hover:translate-x-1 transition-all inline-block">Contact Support</a></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h4 className="text-lg font-serif text-white mb-8 border-b border-[#D4AF37]/30 pb-2 inline-block">Legal</h4>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li><a href="https://khandarkar.com/privacy" className="hover:text-[#D4AF37] hover:translate-x-1 transition-all inline-block">Privacy Policy</a></li>
              <li><a href="https://khandarkar.com/terms" className="hover:text-[#D4AF37] hover:translate-x-1 transition-all inline-block">Terms & Guidelines</a></li>
              <li><a href="https://khandarkar.com/safety" className="hover:text-[#D4AF37] hover:translate-x-1 transition-all inline-block">Safety Tips</a></li>
              <li><a href="https://khandarkar.com/community" className="hover:text-[#D4AF37] hover:translate-x-1 transition-all inline-block">Community Standards</a></li>
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div>
            <h4 className="text-lg font-serif text-white mb-8 border-b border-[#D4AF37]/30 pb-2 inline-block">Join Our Community</h4>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">Stay connected with us on social media for heartfelt stories and updates.</p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, color: '#E4405F', name: 'Instagram' },
                { icon: Facebook, color: '#1877F2', name: 'Facebook' },
                { icon: Twitter, color: '#1DA1F2', name: 'Twitter' },
                { icon: Youtube, color: '#FF0000', name: 'YouTube' }
              ].map((social, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:scale-110 transition-all group" aria-label={social.name}>
                  <social.icon className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs tracking-wider">
            © 2025 <span className="text-[#D4AF37] font-bold">KHANDARKAR</span>. All Rights Reserved.
          </p>

          <div className="flex items-center gap-2 text-xs text-gray-500 tracking-widest uppercase">
            <span>Handcrafted with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" />
            <span>in Kashmir</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;