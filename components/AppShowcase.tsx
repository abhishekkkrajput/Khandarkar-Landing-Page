
import React from 'react';
import { Home, LayoutGrid, MessageSquare, User, Pencil, Heart } from 'lucide-react';

const AppShowcase: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-20">
                <div className="w-full lg:w-1/2 relative">
                    {/* Decorative Sparkles for consistency with the About section */}
                    <div className="absolute -top-10 -left-10 text-gold opacity-40 animate-pulse">✦</div>
                    <div className="absolute top-20 -right-5 text-gold opacity-30">✦</div>

                    <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-gold text-sm font-semibold mb-6 uppercase tracking-widest border border-gold/20">
                        India's First
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                        Explore Feature <br />
                        <span className="text-gold italic">in Matrimony.</span>
                    </h2>
                    <p className="text-white/80 text-lg mb-12 font-light leading-relaxed">
                        Connect beyond the biodata. Share your world, discover common interests, and find someone who resonates with your vibration. Experience the first-ever matrimonial platform that lets you truly explore.
                    </p>

                    <div className="grid grid-cols-2 gap-8 mb-12">
                        {[
                            { label: 'Smart Filtering', val: 'Districts & Lineage' },
                            { label: 'Privacy Control', val: 'Blurred Photos' },
                            { label: 'Guardian Mode', val: 'Family First' },
                            { label: 'Direct Connect', val: 'Verified Chats' }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col">
                                <span className="text-gold font-bold text-sm uppercase tracking-[0.2em] mb-1">{item.label}</span>
                                <span className="text-white text-lg font-light">{item.val}</span>
                            </div>
                        ))}
                    </div>

                    <button className="px-10 py-4 gold-gradient text-[#4A2F22] font-bold rounded-full transition-transform hover:scale-105 active:scale-95 shadow-2xl uppercase tracking-widest text-sm">
                        Experience the App
                    </button>
                </div>

                <div className="w-full lg:w-1/2 relative">
                    {/* Phone Mockup - Replicating the User's Screenshot UI with local image */}
                    <div className="relative z-20 flex justify-center animate-mobile-live">
                        <div className="w-[320px] h-[650px] bg-[#1a1a1a] rounded-[3.5rem] border-[10px] border-[#2a2a2a] p-1.5 shadow-[0_50px_100px_rgba(0,0,0,0.6)] relative overflow-hidden">
                            {/* Inner Screen */}
                            <div className="w-full h-full bg-[#F9FAFB] rounded-[2.8rem] overflow-hidden flex flex-col relative">
                                <img
                                    src="/images/IMG_8571.PNG"
                                    alt="App Screenshot"
                                    className="w-full h-full object-cover"
                                />
                                {/* Home Indicator Overlay */}
                                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1.5 w-32 bg-white/50 rounded-full z-10"></div>
                            </div>
                        </div>
                    </div>

                    {/* Background Decorative Element */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#B6337D]/10 rounded-full blur-[100px] -z-10"></div>


                </div>
            </div>
        </div>
    );
};

export default AppShowcase;
