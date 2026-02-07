
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import ProblemSolver from './components/ProblemSolver';
import AppShowcase from './components/AppShowcase';
import CultureStrip from './components/CultureStrip';
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

        <section id="app-showcase" className="py-24 bg-[#064E3B] text-white">
          <AppShowcase />
        </section>

        <CultureStrip />

        <section id="testimonials" className="py-24 bg-white">
          <Testimonials />
        </section>

        <section id="cta" className="relative h-[600px] flex items-center justify-center">
            {/* Background Image: Dal Lake Night */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=2070&auto=format&fit=crop" 
                    className="w-full h-full object-cover brightness-[0.4]"
                    alt="Dal Lake Night"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#064E3B]/80 to-transparent"></div>
            </div>
            
            <div className="relative z-10 text-center px-4">
                <h2 className="text-4xl md:text-6xl text-white font-serif mb-6 drop-shadow-lg">
                    🌙 Begin Your Nikah Journey Today
                </h2>
                <div className="flex flex-col md:flex-row gap-6 justify-center mt-12">
                    <button className="px-10 py-5 gold-gradient rounded-full text-[#4A2F22] font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
                        Create Your Free Profile
                    </button>
                    <button className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-10" />
                    </button>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
