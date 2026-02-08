
import React from 'react';
import KashmiriBackground from './KashmiriBackground';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <KashmiriBackground />
      </div>

      <div className="relative z-10 text-center max-w-5xl px-6 pt-20">
        <div className="animate-fade-in-up space-y-8">

          {/* Top Badge */}
          <div className="flex items-center justify-center gap-6 mb-4 opacity-0 animate-fade-in delay-300 fill-mode-forwards">
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-70"></div>
            <span className="text-[#D4AF37] font-cinzel tracking-[0.4em] text-xs md:text-sm uppercase font-bold drop-shadow-[0_2px_10px_rgba(212,175,55,0.6)]">
              The Purest Bond
            </span>
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-70"></div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-9xl text-white font-serif leading-[1.1] drop-shadow-2xl tracking-tight">
            <span className="block drop-shadow-lg">Nikah is a</span>
            <span className="text-gold-plated italic font-medium">
              Sunnah
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-2xl text-gray-100 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-lg">
            <span className="italic block mb-3 font-serif">“And We have created you in pairs.”</span>
            <span className="text-xs md:text-sm opacity-90 uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
              Quran 78:8
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">

            {/* Play Store Button (Premium Gold) */}
            <a
              href="https://play.google.com/store/apps/details?id=com.khandarkar.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-5 px-10 py-5 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8860B] shadow-[0_15px_40px_rgba(212,175,55,0.4)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.6)] transition-all transform hover:-translate-y-1 active:scale-95 border border-[#F5E0A3]/40 overflow-hidden"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg"
                alt="Google Play"
                className="w-8 h-8 drop-shadow-sm filter brightness-0 invert"
              />
              <div className="flex flex-col items-start leading-none text-white z-10">
                <span className="text-[10px] uppercase font-black tracking-[0.2em] opacity-90 mb-1.5">GET IT ON</span>
                <span className="text-xl font-bold tracking-tight font-sans">Google Play</span>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out"></div>
            </a>

            {/* App Store (Glass) */}
            <button className="flex items-center gap-5 px-10 py-5 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full text-white hover:bg-white/15 hover:border-white/40 transition-all duration-300 group hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
              <svg viewBox="0 0 384 512" className="w-8 h-8 fill-white opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-51.1-20.8-83.6-20.1-42.9 .6-82.7 25.1-104.5 63.3-44.6 77.5-11.4 192.6 31.8 255.2 21.1 30.5 46.3 64.6 79.1 63.4 31.4-1.2 43.2-20.2 81.3-20.2 37.9 0 48.8 20.2 81.6 19.5 33.7-.6 55.4-30.8 76.2-61.1 24.3-35.4 34.3-69.8 34.6-71.6-1.1-.5-66.5-25.5-66.7-101.5zm-52.3-152.1c16.1-19.5 26.9-46.6 23.9-73.7-23.2 1-51.4 15.5-68 34.9-14.8 17.2-27.7 45.1-24.1 71.3 26.1 2 52.1-13 68.2-32.5z" />
              </svg>
              <div className="flex flex-col items-start leading-none opacity-80 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] uppercase font-black tracking-[0.2em] mb-1.5">Coming Soon</span>
                <span className="text-xl font-bold tracking-tight font-sans">App Store</span>
              </div>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-70">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-white/50"></div>
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
