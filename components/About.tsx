
import React from 'react';
import { Heart, X, Bookmark, Mail, Home, LayoutGrid, MessageSquare, User, Filter, Bell, UserCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
      {/* Left Column: Premium App Mockup */}
      <div className="w-full lg:w-5/12 relative flex justify-center order-2 lg:order-1">
        {/* Background Decorative Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#B6337D]/5 rounded-full blur-[100px] -z-10"></div>
        
        {/* Main Phone Mockup */}
        <div className="relative w-[320px] h-[670px] bg-[#0F0F0F] rounded-[3.5rem] border-[10px] border-[#1A1A1A] p-1 shadow-[0_40px_100px_rgba(0,0,0,0.4)] overflow-hidden">
          {/* Inner Screen */}
          <div className="w-full h-full bg-white rounded-[2.8rem] overflow-hidden flex flex-col relative">
            
            {/* Status Bar */}
            <div className="h-10 flex items-center justify-between px-8 pt-4 pb-2 bg-white">
                <span className="text-[11px] font-black text-gray-900">10:22</span>
                <div className="flex gap-1.5 items-center">
                    <div className="w-4 h-2 border border-black/20 rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                </div>
            </div>

            {/* App Header */}
            <div className="px-5 py-2 flex items-center justify-between bg-white">
                <div className="flex items-center gap-1">
                    <div className="relative flex items-center h-6 w-8">
                        <Heart className="absolute left-0 bottom-0.5 w-4 h-4 fill-[#1E3A8A] text-[#1E3A8A] transform -rotate-12" />
                        <Heart className="absolute right-0 top-0 w-5 h-5 fill-[#B6337D] text-[#B6337D] transform rotate-12" />
                    </div>
                    <span className="text-xl font-bold tracking-tighter text-[#1E3A8A]">Khandar<span className="text-[#B6337D]">Kar</span></span>
                </div>
                <div className="flex gap-2">
                    <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600">
                        <Filter className="w-4 h-4" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600">
                        <Bell className="w-4 h-4" />
                    </div>
                </div>
            </div>

            {/* Profile Discovery Section */}
            <div className="flex-1 p-3 flex flex-col">
                <div className="relative flex-1 rounded-[2.5rem] overflow-hidden group bg-gradient-to-br from-[#FDF2F8] to-[#FCE7F3]">
                    {/* UPDATED: Cartoonic / 3D Illustration Avatar */}
                    <img 
                        src="https://img.freepik.com/premium-photo/3d-cartoon-style-character-illustration-beautiful-muslim-woman-wearing-hijab_1029473-500201.jpg" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        alt="3D Cartoon Profile"
                        onError={(e) => {
                          // Fallback to a high-quality stylized placeholder if the specific URL fails
                          (e.target as HTMLImageElement).src = "https://cdn3d.iconscout.com/3d/premium/thumb/muslim-woman-5691557-4741103.png";
                        }}
                    />
                    
                    {/* Top Label */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full shadow-sm">
                        <UserCircle className="w-3.5 h-3.5 text-[#B6337D]" />
                        <span className="text-[9px] font-black text-gray-800 uppercase tracking-tight">Profile Created for : Self</span>
                    </div>

                    {/* Bottom Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                        <h3 className="text-white text-2xl font-bold mb-1">Irtiza Mushtaq, 25</h3>
                        <p className="text-white/80 text-[11px] font-medium italic mb-2 leading-relaxed max-w-[90%]">
                            Looking to build a home grounded in Islam and mutual respect.
                        </p>
                        <p className="text-white/70 text-[10px] font-semibold mb-4">Srinagar , Female</p>
                        
                        <button className="w-full py-3 bg-[#B6337D] text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-[#B6337D]/30 active:scale-95 transition-transform">
                            More Details
                        </button>
                    </div>
                </div>

                {/* Main Action Buttons */}
                <div className="flex justify-center gap-6 py-4">
                    <button className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center text-white shadow-xl shadow-red-500/20 active:scale-90 transition-transform">
                        <X className="w-6 h-6 stroke-[3px]" />
                    </button>
                    <button className="w-14 h-14 bg-[#B6337D] rounded-full flex items-center justify-center text-white shadow-xl shadow-[#B6337D]/20 active:scale-90 transition-transform">
                        <Mail className="w-6 h-6 fill-white" />
                    </button>
                    <button className="w-14 h-14 bg-[#4A72FF] rounded-full flex items-center justify-center text-white shadow-xl shadow-blue-500/20 active:scale-90 transition-transform">
                        <Bookmark className="w-6 h-6 fill-white" />
                    </button>
                </div>
            </div>

            {/* Bottom App Navigation */}
            <div className="bg-white px-6 py-3 border-t border-gray-50 flex items-center justify-between mb-4">
                <div className="bg-[#B6337D] flex items-center gap-2 px-4 py-2 rounded-full text-white">
                    <Home className="w-4 h-4 fill-white" />
                    <span className="text-[10px] font-black uppercase">Home</span>
                </div>
                <LayoutGrid className="w-5 h-5 text-gray-300" />
                <div className="relative">
                    <MessageSquare className="w-5 h-5 text-gray-300" />
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-gray-900 text-white text-[8px] font-black flex items-center justify-center rounded-full border-2 border-white">7</div>
                </div>
                <User className="w-5 h-5 text-gray-300" />
            </div>

            {/* Home Indicator */}
            <div className="h-1 w-32 bg-gray-200 rounded-full mx-auto mb-2"></div>
          </div>
        </div>
      </div>

      {/* Right Column: Narrative Text */}
      <div className="w-full lg:w-7/12 order-1 lg:order-2">
        <div className="flex items-center gap-4 mb-8">
            <span className="text-4xl filter saturate-150 drop-shadow-sm">🏔️</span>
            <h2 className="text-4xl md:text-6xl font-serif text-[#B6337D] leading-[1.1]">
              Rooted in Kashmir, <br/>
              <span className="text-gold italic">Guided by Faith</span>
            </h2>
        </div>
        
        <div className="space-y-8 text-lg text-gray-700 leading-relaxed font-light">
          <p className="font-semibold text-xl text-[#1E3A8A]">
            Khandarkar is more than a platform—it's a digital legacy <span className="text-[#B6337D] font-bold">(Meeraas)</span> for our community.
          </p>
          
          <p className="max-w-xl">
            We honour the specific nuances of Kashmiri matchmaking, from understanding local districts to respecting the sacred privacy of our sisters and brothers. Our interface is designed to bring families together with elegance and ease.
          </p>

          <div className="p-8 bg-white border-l-4 border-[#D4AF37] shadow-[0_20px_60px_rgba(0,0,0,0.05)] rounded-r-3xl relative overflow-hidden group">
            <div className="absolute top-4 right-4 text-gold opacity-10 transform scale-150">✦</div>
            <p className="italic text-[#B6337D] font-medium leading-relaxed text-xl">
              "We believe that every match is written in the heavens; we simply provide the bridge to find it here in the valley."
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 flex items-center gap-16">
            <div className="flex flex-col">
                <div className="flex items-baseline">
                  <span className="text-5xl font-serif text-[#1E3A8A] tracking-tight">10K</span>
                  <span className="text-2xl text-gold font-bold ml-1">+</span>
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-black mt-2">Verified Profiles</span>
            </div>
            <div className="w-[1px] h-16 bg-gray-100"></div>
            <div className="flex flex-col">
                <div className="flex items-baseline">
                  <span className="text-5xl font-serif text-[#1E3A8A] tracking-tight">500</span>
                  <span className="text-2xl text-gold font-bold ml-1">+</span>
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-black mt-2">Blessed Unions</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
