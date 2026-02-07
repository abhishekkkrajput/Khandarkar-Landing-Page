
import React from 'react';

const CultureStrip: React.FC = () => {
  const items = [
    { name: "Chinar Leaves", icon: "🍁" },
    { name: "Shikaras", icon: "⛵" },
    { name: "Hazratbal", icon: "🕌" },
    { name: "Snowfall", icon: "❄️" },
    { name: "Nishat Garden", icon: "⛲" },
    { name: "Tilla Embroidery", icon: "🧵" },
    { name: "Walnut Carving", icon: "🪵" }
  ];

  return (
    <div className="relative py-12 bg-white overflow-hidden border-y border-[#D4AF37]/20">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center mx-12">
            <span className="text-4xl mr-4">{item.icon}</span>
            <span className="text-xl font-serif text-[#064E3B] uppercase tracking-[0.2em]">{item.name}</span>
          </div>
        ))}
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-white/80 backdrop-blur-sm px-10 py-2 border border-[#D4AF37] rounded-full shadow-2xl">
            <span className="text-gold font-cinzel tracking-widest text-sm font-bold uppercase">✨ A Celebration of Our Heritage</span>
          </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CultureStrip;
