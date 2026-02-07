
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1590489246387-542e973e4492?q=80&w=2070&auto=format&fit=crop" 
          className="w-full h-full object-cover brightness-75 scale-105 animate-[slowZoom_20s_infinite_alternate]"
          alt="Kashmir Golden Hour"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#064E3B]/60"></div>
        
        {/* Decorative Geometric Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="islamic" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        <path d="M50 0L60 40L100 50L60 60L50 100L40 60L0 50L40 40Z" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#islamic)" />
            </svg>
        </div>
      </div>

      <div className="relative z-10 text-center max-w-5xl px-6 pt-20">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
            <span className="text-white font-cinzel tracking-[0.3em] text-sm uppercase">Blessed by Culture & Faith</span>
            <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
          </div>
          
          <h1 className="text-5xl md:text-8xl text-white font-serif mb-8 leading-tight drop-shadow-2xl">
            ✨ “Where Kashmiri Hearts Find Their <br/>
            <span className="text-gold italic">Blessed Beginning”</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Join the most trusted matrimonial space created exclusively for Kashmiri Muslims—rooted in culture, guided by faith.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group relative px-10 py-5 overflow-hidden rounded-full gold-gradient shadow-[0_10px_40px_rgba(212,175,55,0.3)] transition-all hover:scale-105 active:scale-95">
              <span className="relative z-10 text-[#4A2F22] font-bold text-lg">Create Your Profile</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </button>
            
            <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
               <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Download App" className="h-12 shadow-lg" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-60">
            <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent mx-auto"></div>
        </div>
      </div>

      <style>{`
        @keyframes slowZoom {
          from { transform: scale(1.0); }
          to { transform: scale(1.15); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Hero;
