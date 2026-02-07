
import React from 'react';
import { ChinarLeafIcon, WalnutPattern } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#064E3B] text-white pt-20 pb-10 overflow-hidden">
      {/* Decorative Gold Carving Border */}
      <div className="absolute top-0 left-0 right-0 h-4 gold-gradient"></div>
      <div className="absolute top-4 left-0 right-0 h-10 opacity-10">
          <WalnutPattern />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <ChinarLeafIcon className="w-10 h-10 text-[#D4AF37]" />
              <div className="flex flex-col">
                <span className="text-3xl font-cinzel font-bold text-gold tracking-widest">KHANDARKAR</span>
                <span className="text-[10px] uppercase tracking-tighter text-white/60">Connecting Kashmiri Hearts</span>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed max-w-sm">
                The world's most trusted matrimonial platform dedicated exclusively to Kashmiri Muslims worldwide. Rooted in heritage, built on trust.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-serif text-gold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#" className="hover:text-gold transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Safety Guidelines</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Download App</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif text-gold mb-6">Support</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif text-gold mb-6">Stay Connected</h4>
            <p className="text-sm text-white/60 mb-6 font-light">Join our newsletter to receive cultural updates and stories.</p>
            <div className="flex gap-2">
                <input type="email" placeholder="Email Address" className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 flex-1 outline-none focus:border-[#D4AF37]" />
                <button className="gold-gradient text-[#4A2F22] p-2 rounded-lg font-bold">→</button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between text-white/40 text-sm">
          <p>© 2024 KHANDARKAR.COM. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">FB</a>
            <a href="#" className="hover:text-white transition-colors">IG</a>
            <a href="#" className="hover:text-white transition-colors">X</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
