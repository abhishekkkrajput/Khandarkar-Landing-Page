
import React from 'react';

const AppShowcase: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-20">
                {/* Text Content */}
                <div className="w-full lg:w-1/2 relative z-10">
                    <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-[#F5E0A3] text-xs font-bold mb-8 uppercase tracking-[0.2em] border border-[#D4AF37]/30 shadow-lg">
                        Pioneering Tradition
                    </div>

                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-[1.1] drop-shadow-lg">
                        Experience The <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F5E0A3] italic">Future of Nikah</span>
                    </h2>

                    <p className="text-gray-100 text-lg mb-12 font-light leading-relaxed max-w-xl opacity-90">
                        Connect beyond the biodata. Share your world, discover common interests, and find someone who resonates with your vibration. <span className="font-semibold text-[#D4AF37]">Khandarkar</span> is the first-ever matrimonial platform that lets you truly explore before you commit.
                    </p>

                    <div className="grid grid-cols-2 gap-x-8 gap-y-10 mb-12">
                        {[
                            { label: 'Halal Preferences', val: 'Districts & Lineage', icon: '✨' },
                            { label: 'Privacy First', val: 'Blurred Photos', icon: '🛡️' },
                            { label: 'Wali / Guardian', val: 'Family Inclusion', icon: '👥' },
                            { label: 'Verified Souls', val: 'Govt. ID Check', icon: '✅' }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col group cursor-default">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                                    <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-[0.2em]">{item.label}</span>
                                </div>
                                <span className="text-white text-lg font-serif tracking-wide border-l-2 border-[#D4AF37]/30 pl-3 group-hover:border-[#D4AF37] transition-colors duration-500">{item.val}</span>
                            </div>
                        ))}
                    </div>

                    <button className="px-10 py-4 bg-white text-[#B6337D] font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_25px_50px_rgba(255,255,255,0.2)] uppercase tracking-widest text-xs flex items-center gap-3 group">
                        <span>Download Now</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </button>
                </div>

                {/* Phone Mockup - Right Side */}
                <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                    {/* Decorative Elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#D4AF37]/10 to-[#B6337D]/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>

                    <div className="relative z-20 transform rotate-[-6deg] hover:rotate-0 transition-transform duration-1000 ease-out">
                        <div className="w-[340px] h-[680px] bg-[#1a1a1a] rounded-[3.5rem] border-[12px] border-[#2a2a2a] shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden relative">
                            {/* Reflection */}
                            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none z-30"></div>

                            {/* Inner Screen */}
                            <div className="w-full h-full bg-[#0F0F0F] rounded-[2.8rem] overflow-hidden flex flex-col relative">
                                <img
                                    src="/images/IMG_8571.PNG"
                                    alt="App Screenshot"
                                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
                                />
                                {/* Bottom Fade */}
                                <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent"></div>
                                {/* Home Indicator */}
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 h-1 w-32 bg-white/20 rounded-full z-10"></div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute top-20 -left-12 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl animate-bounce" style={{ animationDuration: '3s' }}>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#B6337D] flex items-center justify-center text-white">❤️</div>
                                <div>
                                    <p className="text-white text-xs font-bold">New Match!</p>
                                    <p className="text-white/60 text-[10px]">Just now</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppShowcase;
