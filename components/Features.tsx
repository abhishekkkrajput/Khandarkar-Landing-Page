
import React from 'react';
import { WalnutPattern } from '../constants';
import { UserCheck, ShieldCheck, Heart, Users } from 'lucide-react';

const features = [
  {
    title: "Exclusive to Kashmiri Muslims",
    description: "A niche sanctuary designed specifically for our unique cultural sensibilities and values.",
    icon: <Users className="w-8 h-8 text-[#D4AF37]" />,
  },
  {
    title: "Sacred & Respectful Matchmaking",
    description: "Built on the principles of Nikah, ensuring every interaction is dignified and pure.",
    icon: <Heart className="w-8 h-8 text-[#D4AF37]" />,
  },
  {
    title: "Verified Profiles & Real Families",
    description: "A robust verification process that connects genuine individuals and sincere families.",
    icon: <UserCheck className="w-8 h-8 text-[#D4AF37]" />,
  },
  {
    title: "Privacy, Dignity, Trust First",
    description: "Advanced safety features giving you full control over who sees your journey.",
    icon: <ShieldCheck className="w-8 h-8 text-[#D4AF37]" />,
  },
];

const Features: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-[#064E3B] mb-4 uppercase tracking-wider">Why Khandarkar</h2>
        <div className="h-1 w-24 gold-gradient mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">Beyond simple algorithms, we offer a bridge to a blessed future rooted in our heritage.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, idx) => (
          <div key={idx} className="group relative bg-[#F9F9F9] p-8 rounded-2xl border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5 transition-opacity group-hover:opacity-10 pointer-events-none">
                <WalnutPattern />
            </div>
            
            <div className="relative z-10">
                <div className="w-16 h-16 bg-[#064E3B] rounded-2xl flex items-center justify-center mb-6 shadow-xl transform rotate-3 transition-transform group-hover:rotate-0">
                    {f.icon}
                </div>
                <h3 className="text-xl font-bold text-[#4A2F22] mb-4 leading-tight group-hover:text-[#064E3B] transition-colors">
                    {f.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                    {f.description}
                </p>
                
                <div className="mt-6 w-10 h-1 bg-[#D4AF37] transition-all duration-500 group-hover:w-full"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
