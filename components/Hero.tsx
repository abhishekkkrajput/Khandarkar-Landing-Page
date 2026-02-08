
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-[#B6337D]/75"></div>
        
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
            <span className="text-gold font-cinzel tracking-[0.4em] text-sm uppercase font-bold drop-shadow-md">Blessed by Culture & Faith</span>
            <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
          </div>
          
          <h1 className="text-5xl md:text-8xl text-white font-serif mb-8 leading-tight drop-shadow-2xl">
            ✨ “Where Kashmiri Hearts Find Their <br/>
            <span className="text-gold italic drop-shadow-[0_4px_10px_rgba(212,175,55,0.5)]">Blessed Beginning”</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto mb-12 font-light leading-relaxed drop-shadow-lg">
            Join the most trusted matrimonial space created exclusively for <span className="text-gold font-semibold">Kashmiri Muslims</span>—rooted in culture, guided by faith.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            {/* Play Store Button (Gold) */}
            <button className="group relative flex items-center gap-5 px-10 py-5 rounded-[2.5rem] gold-gradient shadow-[0_20px_50px_rgba(212,175,55,0.4)] transition-all hover:scale-105 active:scale-95 border-2 border-white/20">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" 
                alt="Google Play" 
                className="w-10 h-10 drop-shadow-sm" 
              />
              <div className="flex flex-col items-start leading-none text-[#4A2F22]">
                <span className="text-[10px] uppercase font-black tracking-[0.2em] opacity-80 mb-1.5">GET IT ON</span>
                <span className="text-2xl font-black tracking-tight">Google Play</span>
              </div>
            </button>
            
            {/* App Store Coming Soon (Translucent) */}
            <button className="flex items-center gap-5 px-10 py-5 bg-white/10 backdrop-blur-xl border-2 border-white/30 rounded-[2.5rem] text-white hover:bg-white/20 hover:border-white/40 transition-all group opacity-90 relative overflow-hidden">
               <svg viewBox="0 0 384 512" className="w-10 h-10 fill-white opacity-90 group-hover:opacity-100 transition-opacity">
                 <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-51.1-20.8-83.6-20.1-42.9 .6-82.7 25.1-104.5 63.3-44.6 77.5-11.4 192.6 31.8 255.2 21.1 30.5 46.3 64.6 79.1 63.4 31.4-1.2 43.2-20.2 81.3-20.2 37.9 0 48.8 20.2 81.6 19.5 33.7-.6 55.4-30.8 76.2-61.1 24.3-35.4 34.3-69.8 34.6-71.6-1.1-.5-66.5-25.5-66.7-101.5zm-52.3-152.1c16.1-19.5 26.9-46.6 23.9-73.7-23.2 1-51.4 15.5-68 34.9-14.8 17.2-27.7 45.1-24.1 71.3 26.1 2 52.1-13 68.2-32.5z"/>
               </svg>
               <div className="flex flex-col items-start leading-none">
                 <span className="text-[10px] uppercase font-black tracking-[0.2em] text-white/70 mb-1.5">APP STORE</span>
                 <span className="text-2xl font-black tracking-tight">Coming Soon</span>
               </div>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-[2px] h-20 bg-gradient-to-b from-[#D4AF37] to-transparent mx-auto rounded-full"></div>
        </div>
      </div>

      <style>{`
        @keyframes slowZoom {
          from { transform: scale(1.0); }
          to { transform: scale(1.15); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.4s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default Hero;
