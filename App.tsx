
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import ProblemSolver from './components/ProblemSolver';
import AppShowcase from './components/AppShowcase';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingChinar from './components/FloatingChinar';

const App: React.FC = () => {
  useEffect(() => {
    // Reveal animations on scroll could be added here
  }, []);

  return (
    <div className="relative min-h-screen">
      <FloatingChinar />
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="features" className="py-20 bg-white relative overflow-hidden">
          <Features />
        </section>

        <section id="about" className="py-24 bg-[#F4F4F4]">
          <About />
        </section>

        <section id="problem" className="py-24 bg-white">
          <ProblemSolver />
        </section>

        <section id="app-showcase" className="py-24 bg-[#B6337D] text-white">
          <AppShowcase />
        </section>

        <section id="testimonials" className="py-24 bg-white">
          <Testimonials />
        </section>

        <section id="cta" className="relative py-40 flex items-center justify-center overflow-hidden">
          {/* Background Image: Kashmiri Valley matching the request */}
          <div className="absolute inset-0 z-0">
            <img
              src="./images/kashmiri-valleys.jpg"
              className="w-full h-full object-cover brightness-[0.3] scale-105"
              alt="Kashmiri Valley Night"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1590489246387-542e973e4492?q=80&w=2070&auto=format&fit=crop";
              }}
            />
            <div className="absolute inset-0 bg-[#B6337D]/50 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#B6337D] via-transparent to-[#B6337D]/30"></div>
          </div>

          <div className="relative z-10 text-center px-4 max-w-5xl">
            <h2 className="text-4xl md:text-7xl text-white font-serif mb-16 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] leading-tight">
              <span className="inline-block animate-pulse mr-4 select-none">🌙</span>
              <span className="text-[#D4AF37]">Begin Your Nikah Journey Today</span>
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {/* Option 1: Google Play (Gold Gradient) */}
              <a
                href="https://play.google.com/store/apps/details?id=com.khandarkar.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-5 px-10 py-5 rounded-[2.5rem] gold-gradient shadow-[0_20px_60px_rgba(212,175,55,0.4)] transition-all hover:scale-105 active:scale-95 border-2 border-white/20"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg"
                  alt="Google Play"
                  className="w-10 h-10 drop-shadow-sm"
                />
                <div className="flex flex-col items-start leading-none text-[#4A2F22]">
                  <span className="text-[10px] uppercase font-black tracking-[0.2em] opacity-80 mb-1.5">GET IT ON</span>
                  <span className="text-2xl font-black tracking-tight">Google Play</span>
                </div>
              </a>

              {/* Option 2: App Store (Coming Soon - Translucent) */}
              <button className="flex items-center gap-5 px-10 py-5 bg-white/10 backdrop-blur-xl border-2 border-white/30 rounded-[2.5rem] text-white hover:bg-white/20 hover:border-white/50 transition-all group opacity-90 relative overflow-hidden">
                <svg viewBox="0 0 384 512" className="w-10 h-10 fill-white opacity-90 group-hover:opacity-100 transition-opacity">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-51.1-20.8-83.6-20.1-42.9 .6-82.7 25.1-104.5 63.3-44.6 77.5-11.4 192.6 31.8 255.2 21.1 30.5 46.3 64.6 79.1 63.4 31.4-1.2 43.2-20.2 81.3-20.2 37.9 0 48.8 20.2 81.6 19.5 33.7-.6 55.4-30.8 76.2-61.1 24.3-35.4 34.3-69.8 34.6-71.6-1.1-.5-66.5-25.5-66.7-101.5zm-52.3-152.1c16.1-19.5 26.9-46.6 23.9-73.7-23.2 1-51.4 15.5-68 34.9-14.8 17.2-27.7 45.1-24.1 71.3 26.1 2 52.1-13 68.2-32.5z" />
                </svg>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] uppercase font-black tracking-[0.2em] text-white/70 mb-1.5">APP STORE</span>
                  <span className="text-2xl font-black tracking-tight">Coming Soon</span>
                </div>
                {/* Subtle Animated Chinar Leaf in background of button */}
                <div className="absolute -bottom-2 -right-2 opacity-10 transform rotate-12 group-hover:rotate-45 transition-transform duration-700">
                  <svg className="w-12 h-12" fill="white" viewBox="0 0 24 24"><path d="M12 22C12 22 11.5 18 11.5 17C10.5 17.5 9.5 18.5 8 18.5C8.5 17 8 16 7 15.5C5.5 16 4 16 3 15C4.5 14 5 13 5 12C4 11.5 2 11 1 9C3 9 4.5 9.5 5.5 10.5C6 9 6.5 7.5 8 6C8 7.5 8.5 8.5 9.5 9C10 7.5 10.5 4 12 2C13.5 4 14 7.5 14.5 9C15.5 8.5 16 7.5 16 6C17.5 7.5 18 9 18.5 10.5C19.5 9.5 21 9 23 9C22 11 20 11.5 19 12C19 13 19.5 14 21 15C20 16 18.5 16 17 15.5C16 16 15.5 17 16 18.5C14.5 18.5 13.5 17.5 12.5 17C12.5 18 12 22 12 22Z" /></svg>
                </div>
              </button>
            </div>

            {/* Visual Decoration Sparkles */}
            <div className="absolute top-20 left-10 text-gold opacity-20 animate-pulse">✦</div>
            <div className="absolute bottom-20 right-10 text-gold opacity-20">✦</div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
