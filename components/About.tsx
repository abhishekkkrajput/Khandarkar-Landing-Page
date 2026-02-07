
import React from 'react';
import { ChinarLeafIcon } from '../constants';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
      <div className="w-full lg:w-1/2 relative group">
        <div className="absolute -inset-4 gold-gradient opacity-20 blur-2xl rounded-3xl transition-opacity group-hover:opacity-30"></div>
        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] border-[12px] border-white">
          <img 
            src="https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            alt="Kashmiri Tradition" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#064E3B]/60 to-transparent"></div>
          <div className="absolute bottom-10 left-10 right-10">
            <p className="text-white text-2xl font-serif italic drop-shadow-md">"A union blessed by the valleys and the Almighty."</p>
          </div>
        </div>
        
        {/* Floating Motif */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#D4AF37] text-white p-6 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
            <ChinarLeafIcon className="w-16 h-16" />
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl">🌿</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#064E3B]">Rooted in Kashmir, <br/>Guided by Faith</h2>
        </div>
        
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-light">
          <p className="font-medium text-[#4A2F22]">
            Khandarkar is created to reconnect Kashmiri hearts through Nikah. 
          </p>
          <p>
            We honour your values, traditions, privacy, and expectations. Our mission is to provide a trusted, respectful platform where matches are created with sincerity and purity.
          </p>
          <p className="p-6 bg-white border-l-4 border-[#D4AF37] shadow-lg rounded-r-2xl italic">
            "For every Kashmiri family seeking a blessed beginning—this is your home."
          </p>
        </div>

        <div className="mt-12 flex items-center gap-8">
            <div className="flex flex-col">
                <span className="text-4xl font-serif text-[#D4AF37]">10K+</span>
                <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Verified Hearts</span>
            </div>
            <div className="w-[1px] h-12 bg-gray-200"></div>
            <div className="flex flex-col">
                <span className="text-4xl font-serif text-[#D4AF37]">500+</span>
                <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Blessed Nikahs</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
