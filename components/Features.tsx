
import React from 'react';
import { UserCheck, ShieldCheck, Heart, Users } from 'lucide-react';

const features = [
  {
    title: "Exclusively Kashmiri",
    description: "A sanctuary crafted solely for our community. We understand the nuance of every caste, creed, and valley tradition.",
    icon: <Users className="w-8 h-8 text-white" />,
    gradient: "from-[#B6337D] to-[#8E1F5D]"
  },
  {
    title: "Halal & Dignified",
    description: "Built upon the Sunnah. No swiping, no casual dating—just sincere families seeking endless unions.",
    icon: <Heart className="w-8 h-8 text-white" />,
    gradient: "from-[#D4AF37] to-[#B8860B]"
  },
  {
    title: "100% Verified Souls",
    description: "Every profile is manually vetted. We ensure you meet real people with genuine intentions, not bots.",
    icon: <UserCheck className="w-8 h-8 text-white" />,
    gradient: "from-[#1E3A8A] to-[#0F172A]"
  },
  {
    title: "Ironclad Privacy",
    description: "Your family's honor is our Amanaah. Photos and details are only shared with your explicit consent.",
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    gradient: "from-[#10B981] to-[#047857]"
  },
];

const Features: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 relative py-12">
      {/* Section Header */}
      <div className="text-center mb-24 animate-fade-slide-up">
        <span className="text-[#D4AF37] font-cinzel tracking-[0.3em] text-xs uppercase font-bold inline-block mb-3 px-4 py-1 border-b border-[#D4AF37]/30">The Gold Standard</span>
        <h2 className="text-4xl md:text-6xl font-serif text-[#1E3A8A] mt-2 mb-6 tracking-tight">
          Why Choose <span className="text-gold-plated relative inline-block">
            Khandarkar
            <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#D4AF37] opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </span>?
        </h2>
        <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto opacity-50"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, idx) => (
          <div
            key={idx}
            className="group relative bg-white rounded-[2.5rem] p-8 border border-gray-100 hover:border-[#D4AF37]/20 transition-all duration-700 hover:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.15)] hover:-translate-y-3 overflow-hidden flex flex-col items-center text-center animate-fade-slide-up"
            style={{ animationDelay: `${idx * 150}ms` }}
          >
            {/* Hover Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700`}></div>

            {/* Top Shine */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="relative z-10 flex flex-col items-center text-center h-full">
              {/* Icon Container */}
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-8 shadow-xl transform group-hover:rotate-[10deg] group-hover:scale-110 transition-all duration-500`}>
                {React.cloneElement(f.icon as React.ReactElement, { className: "w-9 h-9 text-white drop-shadow-md" })}
              </div>

              <h3 className="text-xl font-serif font-bold text-[#1E3A8A] mb-4 group-hover:text-[#B6337D] transition-colors duration-300">
                {f.title}
              </h3>

              <p className="text-gray-600 text-sm leading-7 font-light tracking-wide group-hover:text-gray-800 transition-colors">
                {f.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
