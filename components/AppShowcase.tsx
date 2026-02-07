
import React from 'react';

const AppShowcase: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        <div className="w-full lg:w-1/2">
          <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-gold text-sm font-semibold mb-6">
            The Digital Meeraas
          </div>
          <h2 className="text-5xl font-serif mb-8 leading-tight">
            Modern Technology, <br/>
            <span className="text-gold italic">Kashmiri Values.</span>
          </h2>
          <p className="text-white/80 text-lg mb-12 font-light leading-relaxed">
            Our premium mobile application brings the sacred journey of Nikah to your fingertips, ensuring privacy and ease of use for both candidates and their guardians.
          </p>

          <div className="grid grid-cols-2 gap-8 mb-12">
            {[
              { label: 'Smart Filtering', val: 'Districts & Lineage' },
              { label: 'Privacy Control', val: 'Blurred Photos' },
              { label: 'Guardian Mode', val: 'Family First' },
              { label: 'Direct Connect', val: 'Verified Chats' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-gold font-bold text-sm uppercase tracking-widest mb-1">{item.label}</span>
                <span className="text-white text-lg font-light">{item.val}</span>
              </div>
            ))}
          </div>

          <button className="px-10 py-4 gold-gradient text-[#4A2F22] font-bold rounded-full transition-transform hover:scale-105 active:scale-95 shadow-2xl">
            Experience the App
          </button>
        </div>

        <div className="w-full lg:w-1/2 relative">
            {/* Main Phone Mockup */}
            <div className="relative z-20 flex justify-center">
                <div className="w-[300px] h-[600px] bg-[#1a1a1a] rounded-[3rem] border-8 border-white/5 p-3 shadow-[0_50px_100px_rgba(0,0,0,0.5)] transform rotate-2">
                    <div className="w-full h-full bg-[#064E3B] rounded-[2.5rem] overflow-hidden relative group">
                        <img 
                            src="https://images.unsplash.com/photo-1581333100576-b73bbe92c19a?q=80&w=1974&auto=format&fit=crop" 
                            alt="App Screenshot" 
                            className="w-full h-full object-cover brightness-90 group-hover:scale-110 transition-transform duration-[10s]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                            <div className="w-12 h-12 bg-[#D4AF37] rounded-xl flex items-center justify-center mb-4">
                                <span className="text-white font-serif text-2xl">K</span>
                            </div>
                            <h4 className="text-white text-xl font-bold mb-1">Fatima, 26</h4>
                            <p className="text-white/60 text-sm">Srinagar | M.Tech Computer Science</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[100px] -z-10"></div>
            
            {/* Floating Second Screen */}
            <div className="absolute top-20 -right-20 z-10 hidden xl:block w-[240px] h-[480px] bg-[#1a1a1a] rounded-[2.5rem] border-4 border-white/5 p-2 shadow-2xl transform -rotate-6">
                 <div className="w-full h-full bg-[#f4f4f4] rounded-[2.2rem] overflow-hidden flex flex-col p-4">
                    <div className="h-8 w-24 bg-gray-200 rounded-lg mb-4 animate-pulse"></div>
                    <div className="flex-1 space-y-3">
                        <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-4 w-4/6 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                    <div className="h-10 w-full bg-[#D4AF37] rounded-xl mb-2"></div>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
