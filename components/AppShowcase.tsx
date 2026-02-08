
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

                    <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-gold text-sm font-semibold mb-6 uppercase tracking-widest">
                        The Digital Meeraas
                    </div>
                    <h2 className="text-5xl font-serif mb-8 leading-tight">
                        Seamless <br />
                        <span className="text-gold italic">Cultural Connection.</span>
                    </h2>
                    <p className="text-white/80 text-lg mb-12 font-light leading-relaxed">
                        Our app is designed with a deep understanding of Kashmiri Muslim values. Explore profiles with dignity, manage your preferences, and connect through a secure, moderated environment that feels like home.
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
                    <div className="relative z-20 flex justify-center">
                        <div className="w-[320px] h-[650px] bg-[#1a1a1a] rounded-[3.5rem] border-[10px] border-[#2a2a2a] p-1.5 shadow-[0_50px_100px_rgba(0,0,0,0.6)] relative overflow-hidden">
                            {/* Inner Screen */}
                            <div className="w-full h-full bg-[#F9FAFB] rounded-[2.8rem] overflow-hidden flex flex-col relative">

                                {/* Status Bar Mock (iOS Style) */}
                                <div className="h-8 flex items-center justify-between px-8 pt-4">
                                    <span className="text-[10px] font-bold text-gray-900">10:06</span>
                                    <div className="flex gap-1 items-center">
                                        <div className="w-3 h-2 border border-black rounded-sm"></div>
                                        <div className="w-2 h-2 bg-black rounded-full"></div>
                                    </div>
                                </div>

                                {/* App Header */}
                                <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-gray-50">
                                    <div className="flex items-center gap-1">
                                        <div className="flex">
                                            <Heart className="w-4 h-4 fill-[#B6337D] text-[#B6337D] -mr-1" />
                                            <Heart className="w-4 h-4 fill-[#1E3A8A] text-[#1E3A8A]" />
                                        </div>
                                        <span className="text-xl font-bold tracking-tight text-[#1E3A8A]">Khandar<span className="text-[#B6337D]">Kar</span></span>
                                    </div>
                                    <div className="w-8 h-8 bg-[#F3E8F1] rounded-full flex items-center justify-center">
                                        <Pencil className="w-4 h-4 text-[#B6337D]" />
                                    </div>
                                </div>

                                {/* Scrollable Content (Explore Feed) */}
                                <div className="flex-1 overflow-y-auto px-4 py-2 scrollbar-hide space-y-4">
                                    {/* Card 1: Main Explore Image (Using the uploaded Valley Image) */}
                                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
                                        <div className="aspect-[4/5] w-full overflow-hidden relative">
                                            <img
                                                src="./images/kashmiri-valleys.jpg"
                                                className="w-full h-full object-cover"
                                                alt="Kashmiri Valley Explore"
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1596131397999-bb015802875c?q=80&w=2070&auto=format&fit=crop";
                                                }}
                                            />
                                            {/* Overlay for depth */}
                                            <div className="absolute inset-0 bg-[#B6337D]/20 mix-blend-multiply"></div>
                                        </div>
                                        <div className="p-4 flex items-center gap-2">
                                            <button className="text-[#B6337D]">
                                                <Heart className="w-5 h-5 fill-[#B6337D]" />
                                            </button>
                                            <span className="text-sm font-bold text-gray-700">124</span>
                                            <div className="ml-auto flex -space-x-2">
                                                {[1, 2, 3].map(i => (
                                                    <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                                        <div className="w-full h-full bg-[#D4AF37]/50"></div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 2: Profile Feed Card */}
                                    <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
                                        <div className="flex items-start gap-3 mb-4">
                                            <div className="w-10 h-10 bg-[#E0E7FF] rounded-full flex items-center justify-center text-[#4338CA] font-bold">
                                                S
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-bold text-gray-900 leading-none">Shaziya M.</span>
                                                <span className="text-[10px] text-gray-400 mt-1">26 Jan • 11:13 PM</span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            Seeking a partner who values our Kashmiri heritage and Islamic traditions. Exploring the "Seamless Cultural Connection" ...
                                            <span className="text-[#B6337D] font-semibold ml-1 cursor-pointer">See more</span>
                                        </p>
                                    </div>

                                    {/* Card 3: Seasonal Mood Card */}
                                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
                                        <div className="h-40 w-full overflow-hidden">
                                            <img
                                                src="https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?q=80&w=2042&auto=format&fit=crop"
                                                className="w-full h-full object-cover"
                                                alt="Cultural Vibes"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <span className="text-[10px] text-[#B6337D] font-bold uppercase tracking-widest">Kashmiri Winter Vibes</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Navigation */}
                                <div className="bg-white border-t border-gray-100 px-6 py-4 flex items-center justify-between">
                                    <button className="text-gray-300">
                                        <Home className="w-6 h-6" />
                                    </button>
                                    <button className="bg-[#B6337D] px-6 py-2.5 rounded-2xl flex items-center gap-2 text-white shadow-lg shadow-[#B6337D]/20">
                                        <LayoutGrid className="w-5 h-5" />
                                        <span className="font-bold text-sm">Explore</span>
                                    </button>
                                    <button className="text-gray-300 relative">
                                        <MessageSquare className="w-6 h-6" />
                                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#1e1e1e] text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                                            7
                                        </div>
                                    </button>
                                    <button className="text-gray-300">
                                        <User className="w-6 h-6" />
                                    </button>
                                </div>

                                {/* Home Indicator */}
                                <div className="h-1.5 w-32 bg-gray-200 rounded-full mx-auto mb-2 mt-1"></div>
                            </div>
                        </div>
                    </div>

                    {/* Background Decorative Element */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#B6337D]/10 rounded-full blur-[100px] -z-10"></div>

                    {/* Floating Elements */}
                    <div className="absolute top-1/2 -right-10 z-10 hidden xl:block w-[180px] h-[360px] bg-[#222] rounded-[2rem] border-4 border-white/5 overflow-hidden shadow-2xl opacity-40 blur-[1px] transform rotate-6 -translate-y-1/2">
                        <div className="w-full h-full bg-[#f4f4f4] flex flex-col p-4 space-y-3">
                            <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse"></div>
                            <div className="h-20 w-full bg-gray-200 rounded animate-pulse"></div>
                            <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppShowcase;
