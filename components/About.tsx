
import React, { useState, useEffect } from 'react';

const words = ["Yourself", "Brother", "Sister", "Son", "Daughter", "Friend"];

const About: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative">
      {/* Decorative Background Elements */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Left Column: Premium App Mockup */}
      <div className="w-full lg:w-5/12 relative flex justify-center order-2 lg:order-1">
        {/* Glow behind phone */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[120%] bg-gradient-to-tr from-[#B6337D]/20 to-[#D4AF37]/20 rounded-full blur-[80px] -z-10"></div>

        {/* Main Phone Mockup */}
        <div className="relative w-[300px] h-[640px] bg-[#0F0F0F] rounded-[3.5rem] border-[10px] border-[#1A1A1A] shadow-[0_50px_100px_rgba(0,0,0,0.5)] transform rotate-[-2deg] hover:rotate-0 transition-transform duration-700 overflow-hidden">
          <div className="w-full h-full bg-white rounded-[2.8rem] overflow-hidden flex flex-col relative">
            <img
              src="/images/IMG_8572.PNG"
              className="w-full h-full object-cover"
              alt="App Interface"
            />
            {/* Glossy Overlay */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-50 pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Right Column: Narrative Text */}
      <div className="w-full lg:w-7/12 order-1 lg:order-2 space-y-10">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-[#B6337D]"></div>
            <span className="text-[#B6337D] font-bold tracking-[0.2em] text-sm uppercase">Our Philosophy</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-serif text-[#1E3A8A] leading-[1.15]">
            Rooted in Kashmir, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B8860B] italic">Guided by Faith</span>
          </h2>
        </div>

        <div className="text-lg text-gray-600 leading-relaxed font-light space-y-6">
          <p className="text-xl text-[#4A2F22]">
            Begin the search for <span key={currentWordIndex} className="font-bold text-[#B6337D] inline-block min-w-[120px] animate-fade-slide-up bg-gradient-to-r from-[#B6337D] to-[#8E1F5D] bg-clip-text text-transparent">{words[currentWordIndex]}</span>
          </p>

          <p className="max-w-xl">
            In the valley of saints, marriage is more than a contract—it is a covenant. We have reimagined matchmaking to honor our traditions while embracing the ease of modern technology.
          </p>

          <p className="max-w-xl">
            Whether you are looking for yourself or your beloved children, Khandarkar provides a dignified space free from the noise of typical apps.
          </p>
        </div>


      </div>
    </div>
  );
};

export default About;
