
import React, { useState, useEffect } from 'react';
import { Heart, X, Bookmark, Mail, Home, LayoutGrid, MessageSquare, User, Filter, Bell, UserCircle } from 'lucide-react';

const words = ["Self", "Brother", "Sister", "Son", "Daughter", "Friend"];

const About: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 1000); // Changed to 1s for faster transition and ensuring effect update
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
      {/* Left Column: Premium App Mockup */}
      <div className="w-full lg:w-5/12 relative flex justify-center order-2 lg:order-1">
        {/* Background Decorative Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#B6337D]/5 rounded-full blur-[100px] -z-10"></div>

        {/* Main Phone Mockup */}
        <div className="relative w-[320px] h-[670px] bg-[#0F0F0F] rounded-[3.5rem] border-[10px] border-[#1A1A1A] p-1 shadow-[0_60px_120px_rgba(182,51,125,0.6)] hover:shadow-[0_70px_140px_rgba(182,51,125,0.8)] transition-shadow duration-700 overflow-hidden animate-mobile-live">
          {/* Inner Screen */}
          <div className="w-full h-full bg-white rounded-[2.8rem] overflow-hidden flex flex-col relative">

            <img
              src="/images/IMG_8572.PNG"
              className="w-full h-full object-cover"
              alt="App Interface"
            />

            {/* Home Indicator Overlay */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 h-1 w-32 bg-gray-600/50 rounded-full z-10"></div>
          </div>
        </div>
      </div>

      {/* Right Column: Narrative Text */}
      <div className="w-full lg:w-7/12 order-1 lg:order-2">
        <div className="flex items-center gap-4 mb-8">

          <h2 className="text-4xl md:text-6xl font-serif text-[#B6337D] leading-[1.1]">
            Rooted in Kashmir, <br />
            <span className="text-gold italic">Guided by Faith</span>
          </h2>
        </div>

        <div className="space-y-8 text-lg text-gray-700 leading-relaxed font-light">
          <p className="font-semibold text-xl text-[#1E3A8A]">
            Create a profile for <span key={currentWordIndex} className="text-[#B6337D] font-bold inline-block animate-fade-slide-up bg-gradient-to-r from-[#B6337D] to-[#D4AF37] bg-clip-text text-transparent">{words[currentWordIndex]}.</span>
          </p>

          <p className="max-w-xl">
            We understand that in our culture, families build unions. That's why Khandarkar is designed for everyone—parents, grandparents, and individuals alike.
          </p>

          <ul className="space-y-6 mt-6">
            <li className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-full bg-[#B6337D]/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🛡️</span>
              </div>
              <div>
                <strong className="block text-[#1E3A8A] font-serif text-lg mb-1">Uncompromised Privacy</strong>
                <span className="text-sm text-gray-600 leading-snug">We respect your privacy more than anything. Your family's dignity is our amaanah.</span>
              </div>
            </li>
            <li className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-full bg-[#B6337D]/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">✅</span>
              </div>
              <div>
                <strong className="block text-[#1E3A8A] font-serif text-lg mb-1">100% Verified Profiles</strong>
                <span className="text-sm text-gray-600 leading-snug">Real people, genuine intentions. No fakes, just sincere families looking for barakah.</span>
              </div>
            </li>
            <li className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-full bg-[#B6337D]/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">✨</span>
              </div>
              <div>
                <strong className="block text-[#1E3A8A] font-serif text-lg mb-1">Best & Genuine Experience</strong>
                <span className="text-sm text-gray-600 leading-snug">A seamless, dignified journey to finding your perfect match in the valley.</span>
              </div>
            </li>
          </ul>
        </div>


      </div>
    </div>
  );
};

export default About;
