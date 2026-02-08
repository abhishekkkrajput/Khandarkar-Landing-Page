
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
      <div className="text-center mb-20">
        <span className="text-[#D4AF37] font-cinzel tracking-[0.3em] text-xs uppercase font-bold">The Gold Standard</span>
        <h2 className="text-4xl md:text-6xl font-serif text-[#1E3A8A] mt-4 mb-6">
          Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B6337D] to-[#D4AF37]">Khandarkar</span>?
        </h2>
        <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, idx) => (
          <div
            key={idx}
            className="group relative bg-white rounded-[2rem] p-8 border border-gray-100 hover:border-[#D4AF37]/30 transition-all duration-500 hover:shadow-premium hover:-translate-y-2 overflow-hidden"
          >
            {/* Hover Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Icon Container */}
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-8 shadow-lg transform group-hover:rotate-12 transition-transform duration-500`}>
                {f.icon}
              </div>

              <h3 className="text-xl font-serif font-bold text-[#1E3A8A] mb-4 group-hover:text-[#B6337D] transition-colors">
                {f.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed font-light">
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
