
import React from 'react';

const CultureStrip: React.FC = () => {
  const items = [
    { name: "SHIKARAS", icon: "⛵" },
    { name: "HAZRATBAL", icon: "🕌" },
    { name: "NISHAT GARDEN", icon: "⛲" },
    { name: "TILLA EMBROIDERY", icon: "🧵" }
  ];

  return (
    <div className="relative py-14 bg-white overflow-hidden border-y border-gray-100 shadow-sm">
      {/* Marquee Container */}
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center mx-16">
            <span className="text-3xl mr-5 drop-shadow-sm filter saturate-150">{item.icon}</span>
            <span className="text-lg font-serif text-[#B6337D] font-bold uppercase tracking-[0.25em]">{item.name}</span>
          </div>
        ))}
      </div>
      
      {/* Central Floating Badge */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-white px-10 py-3 border border-[#D4AF37] rounded-full shadow-[0_10px_40px_rgba(212,175,55,0.2)] flex items-center gap-3">
            <span className="text-[#D4AF37] text-xs">✨</span>
            <span className="text-[#D4AF37] font-cinzel tracking-[0.3em] text-[10px] font-black uppercase">A Celebration of Our Heritage</span>
            <span className="text-[#D4AF37] text-xs">✨</span>
          </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CultureStrip;
