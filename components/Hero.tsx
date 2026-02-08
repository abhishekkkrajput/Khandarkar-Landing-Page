
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1590489246387-542e973e4492?q=80&w=2070&auto=format&fit=crop"
          className="w-full h-full object-cover brightness-50 scale-105 animate-[slowZoom_25s_infinite_alternate]"
          alt="Kashmir Golden Hour"
        />
        {/* Richer Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-[#B6337D]/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]"></div>

        {/* Decorative Geometric Pattern */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none mix-blend-overlay">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="islamic" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M30 0L40 20L60 30L40 40L30 60L20 40L0 30L20 20Z" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#islamic)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 text-center max-w-5xl px-6 pt-20">
        <div className="animate-fade-in-up space-y-8">

          {/* Top Badge */}
          <div className="flex items-center justify-center gap-4 mb-2 opacity-0 animate-fade-in delay-300 fill-mode-forwards">
            <div className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
            <span className="text-[#D4AF37] font-cinzel tracking-[0.3em] text-xs md:text-sm uppercase font-bold drop-shadow-[0_2px_10px_rgba(212,175,55,0.6)]">
              The Purest Bond
            </span>
            <div className="h-[1px] w-8 md:w-16 bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-9xl text-white font-serif leading-[1.1] drop-shadow-2xl tracking-tight">
            <span className="block">Nikah is a</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F5E0A3] to-[#D4AF37] italic font-medium">
              Sunnah
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-lg">
            <span className="italic block mb-2">“And We have created you in pairs.”</span>
            <span className="text-sm md:text-base opacity-80 uppercase tracking-widest text-[#D4AF37]">
              Quran 78:8
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">

            {/* Play Store Button (Premium Gold) */}
            <a
              href="https://play.google.com/store/apps/details?id=com.khandarkar.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-b from-[#D4AF37] to-[#B8860B] shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.5)] transition-all transform hover:-translate-y-1 active:scale-95 border border-[#F5E0A3]/30"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg"
                alt="Google Play"
                className="w-8 h-8 drop-shadow-sm filter brightness-0 invert"
              />
              <div className="flex flex-col items-start leading-none text-white">
                <span className="text-[9px] uppercase font-bold tracking-[0.2em] opacity-90 mb-1">GET IT ON</span>
                <span className="text-xl font-bold tracking-tight font-sans">Google Play</span>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000"></div>
            </a>

            {/* App Store (Glass) */}
            <button className="flex items-center gap-4 px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/10 transition-all group">
              <svg viewBox="0 0 384 512" className="w-8 h-8 fill-white opacity-80 group-hover:opacity-100 transition-opacity">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-51.1-20.8-83.6-20.1-42.9 .6-82.7 25.1-104.5 63.3-44.6 77.5-11.4 192.6 31.8 255.2 21.1 30.5 46.3 64.6 79.1 63.4 31.4-1.2 43.2-20.2 81.3-20.2 37.9 0 48.8 20.2 81.6 19.5 33.7-.6 55.4-30.8 76.2-61.1 24.3-35.4 34.3-69.8 34.6-71.6-1.1-.5-66.5-25.5-66.7-101.5zm-52.3-152.1c16.1-19.5 26.9-46.6 23.9-73.7-23.2 1-51.4 15.5-68 34.9-14.8 17.2-27.7 45.1-24.1 71.3 26.1 2 52.1-13 68.2-32.5z" />
              </svg>
              <div className="flex flex-col items-start leading-none opacity-80 group-hover:opacity-100">
                <span className="text-[9px] uppercase font-bold tracking-[0.2em] mb-1">Coming Soon</span>
                <span className="text-xl font-bold tracking-tight font-sans">App Store</span>
              </div>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}

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
          animation: fade-in-up 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        .fill-mode-forwards {
          animation-fill-mode: forwards;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
        @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .animate-fade-in {
            animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Hero;
