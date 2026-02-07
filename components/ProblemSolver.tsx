
import React from 'react';

const problems = [
  {
    title: "Delayed Marriages",
    description: "In an increasingly complex world, finding the right match shouldn't take a lifetime. We simplify the journey.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
  },
  {
    title: "Changing Traditional Channels",
    description: "The old ways are evolving. We provide a modern, secure bridge for families to connect like they used to.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "A Dedicated Platform",
    description: "Kashmiris deserve a space that understands their specific nuances, dialect, and deep cultural roots.",
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=2070&auto=format&fit=crop"
  }
];

const ProblemSolver: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif text-[#064E3B] mb-4">Bridging the Gaps in our Society</h2>
        <p className="text-gray-500">Addressing the unique challenges of modern Kashmiri matchmaking with empathy and elegance.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {problems.map((p, idx) => (
          <div key={idx} className="group relative h-[500px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700">
            <img 
              src={p.image} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              alt={p.title} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#4A2F22] via-black/20 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                <div className="text-gold text-4xl mb-4 font-serif">0{idx + 1}</div>
                <h3 className="text-2xl font-serif text-white mb-3 tracking-wide">{p.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {p.description}
                </p>
                <div className="mt-6 w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemSolver;
