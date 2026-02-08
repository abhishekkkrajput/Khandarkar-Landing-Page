
import React, { useEffect } from 'react';

const AboutUs: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#F4F4F4] pt-32 pb-20 relative overflow-hidden font-sans">

            {/* --- BACKGROUND PATTERN (Islamic Geometric Subtle) --- */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231E3A8A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
            </div>

            {/* Floating Gradients */}
            <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-white via-white/80 to-transparent z-0 pointer-events-none"></div>
            <div className="absolute top-20 right-[-150px] w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"></div>
            <div className="absolute bottom-40 left-[-150px] w-[500px] h-[500px] bg-[#B6337D]/5 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 animate-fade-in-up">

                {/* --- HEADER --- */}
                <div className="text-center mb-32 relative">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-[#D4AF37]/30 shadow-sm mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#B6337D] animate-pulse"></span>
                        <span className="text-[#1E3A8A] text-xs uppercase tracking-[0.25em] font-bold">Our Sacred Journey</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-cinzel text-[#1E3A8A] font-medium mb-8 drop-shadow-sm tracking-tight">
                        About <span className="text-gold-plated italic font-serif">Us</span>
                    </h1>

                    <div className="flex items-center justify-center gap-4 mb-10 opacity-60">
                        <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-[#B6337D]"></div>
                        <div className="w-3 h-3 rotate-45 border border-[#D4AF37] bg-[#F4F4F4]"></div>
                        <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-[#B6337D]"></div>
                    </div>

                    <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                        Connecting Kashmiri hearts, nurturing sacred bonds, and building <br className="hidden md:block" /> blessed beginnings through <span className="font-serif italic font-bold text-[#B6337D] relative inline-block">
                            Nikah
                            <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#D4AF37] opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                            </svg>
                        </span>.
                    </p>
                </div>

                {/* --- SECTION 1 --- */}
                <div className="flex flex-col md:flex-row items-center gap-20 mb-40">
                    {/* Text Card Left */}
                    <div className="w-full md:w-1/2 space-y-10 order-2 md:order-1 relative">
                        <div className="absolute -left-10 top-10 w-20 h-20 border-l-4 border-t-4 border-[#D4AF37]/20 rounded-tl-[2rem] pointer-events-none"></div>

                        <div className="bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/50 shadow-premium relative overflow-hidden group hover:shadow-xl transition-all duration-500">
                            {/* Shiny overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000"></div>

                            <h2 className="text-3xl md:text-5xl font-serif text-[#1E3A8A] font-medium leading-tight mb-8">
                                Bringing hearts together for a <span className="text-gold-plated italic block mt-2">Blessed Union.</span>
                            </h2>
                            <div className="space-y-6 text-gray-700 text-lg leading-relaxed font-light">
                                <p>
                                    We understand that finding the right partner is an important journey, and we want to make that process easier and more meaningful for you. Our platform is built with your needs in mind, offering a simple, respectful, and trusted space where you can connect with others who share your values.
                                </p>
                                <p>
                                    Together, we aim to make your search for a life partner a step toward a blessed and happy future. Our goal is to support you every step of the way.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Image Right */}
                    <div className="w-full md:w-1/2 relative group order-1 md:order-2 perspective-1000">
                        {/* Back Layers */}
                        <div className="absolute inset-0 bg-[#B6337D] rounded-[2.5rem] transform rotate-6 scale-95 opacity-10 transition-transform duration-700 group-hover:rotate-3 group-hover:scale-100"></div>
                        <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-[2.5rem] transform -rotate-3 scale-105 opacity-40 transition-transform duration-700 group-hover:rotate-0"></div>

                        {/* Main Image */}
                        <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl aspect-[4/5] bg-white transform transition-transform duration-700 group-hover:-translate-y-2">
                            <img
                                src="/images/muslim_couple_illustration.png"
                                alt="Muslim Wedding Couple"
                                className="w-full h-full object-contain p-8 transform transition-transform duration-1000 group-hover:scale-105"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1594911772125-07fc7a2d8d80?q=80&w=2070&auto=format&fit=crop";
                                }}
                            />

                            {/* Badge */}
                            <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-xl px-8 py-4 rounded-2xl shadow-xl border border-[#D4AF37]/30">
                                <p className="text-[#B6337D] font-cinzel font-bold text-xs tracking-widest uppercase mb-1">Preserving</p>
                                <p className="text-[#1E3A8A] font-serif italic text-lg">Kashmiri Tradition</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- SECTION 2 --- */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-20 mb-32">
                    {/* Text Card Right */}
                    <div className="w-full md:w-1/2 space-y-10 relative">
                        <div className="absolute -right-10 bottom-10 w-20 h-20 border-r-4 border-b-4 border-[#B6337D]/20 rounded-br-[2rem] pointer-events-none"></div>

                        <div className="bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/50 shadow-premium relative overflow-hidden group hover:shadow-xl transition-all duration-500">
                            {/* Shiny overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000"></div>

                            <h2 className="text-3xl md:text-5xl font-serif text-[#1E3A8A] font-medium leading-tight mb-8">
                                More than a connection, <span className="text-[#B6337D] block mt-2">Nikah is what binds us.</span>
                            </h2>
                            <div className="space-y-6 text-gray-700 text-lg leading-relaxed font-light">
                                <p>
                                    Many Kashmiri individuals are finding it increasingly difficult to find the right life partner, leading to delayed marriages. Traditional methods are no longer as effective, and the lack of accessible platforms means many are left searching for years.
                                </p>
                                <p>
                                    Our platform aims to solve this by offering a trusted, simple, and respectful space. We make finding a partner efficient while staying true to the traditions and values that matter most.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Image Left */}
                    <div className="w-full md:w-1/2 relative group perspective-1000">
                        {/* Back Layers */}
                        <div className="absolute inset-0 bg-[#1E3A8A] rounded-[2.5rem] transform -rotate-6 scale-95 opacity-5 transition-transform duration-700 group-hover:rotate-[-3deg] group-hover:scale-100"></div>
                        <div className="absolute inset-0 border-2 border-[#B6337D] rounded-[2.5rem] transform rotate-3 scale-105 opacity-40 transition-transform duration-700 group-hover:rotate-0"></div>

                        {/* Main Image */}
                        <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl aspect-[4/5] bg-gray-100 transform transition-transform duration-700 group-hover:-translate-y-2">
                            <img
                                src="/images/muslim_couple_real.jpg"
                                alt="Muslim Couple Nikah Garden"
                                className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop";
                                }}
                            />
                            {/* Badge */}
                            <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-xl px-8 py-4 rounded-2xl shadow-xl border border-[#D4AF37]/30 text-right">
                                <p className="text-[#1E3A8A] font-cinzel font-bold text-xs tracking-widest uppercase mb-1">Nurturing</p>
                                <p className="text-[#B6337D] font-serif italic text-lg">Pure Intentions</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <style>{`
        .text-gold-plated {
            background: linear-gradient(to bottom, #F5E0A3 0%, #D4AF37 30%, #C5A028 60%, #B8860B 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .perspective-1000 {
            perspective: 1000px;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
        </div>
    );
};

export default AboutUs;
