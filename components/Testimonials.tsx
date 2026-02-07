
import React from 'react';

const successStories = [
  {
    name: "Zoya & Sameer",
    location: "Baramulla & Sopore",
    story: "Khandarkar made our meeting feel so organic. Our families connected instantly because of the shared cultural nuances the platform preserves.",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Irfa & Junaid",
    location: "Srinagar & Budgam",
    story: "The privacy features gave me the confidence to share my profile. I found a partner who truly values Kashmiri traditions as much as I do.",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=2080&auto=format&fit=crop"
  },
  {
    name: "Hina & Arshid",
    location: "Anantnag & Pulwama",
    story: "Blessed to have used this platform. It's not just an app; it's a bridge for our community to come together in a dignified way.",
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=2070&auto=format&fit=crop"
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif text-[#064E3B] mb-4">Blessed Success Stories</h2>
        <div className="h-1 w-24 gold-gradient mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {successStories.map((s, idx) => (
          <div key={idx} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:scale-[1.02] transition-all duration-500">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-6 ring-4 ring-[#D4AF37]/30 ring-offset-4 shadow-lg transition-transform duration-500 group-hover:scale-110">
              <img src={s.image} className="w-full h-full object-cover" alt={s.name} />
            </div>
            <p className="text-gray-600 italic mb-6 leading-relaxed">"{s.story}"</p>
            <div>
              <h4 className="text-xl font-serif text-[#064E3B]">{s.name}</h4>
              <p className="text-xs uppercase tracking-widest text-gold font-bold mt-1">{s.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
