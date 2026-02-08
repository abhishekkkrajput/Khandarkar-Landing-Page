
import React from 'react';

// --- SVG Assets ---

// 1. Tilla Embroidery Pattern (Stylized Paisley/Chinar)
const TillaPattern = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg viewBox="0 0 100 100" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="0.5">
        <path d="M50 85 C30 80 10 50 20 30 C25 20 35 15 50 15 C65 15 75 20 80 30 C90 50 70 80 50 85 Z M50 25 Q60 25 60 40 T50 55 T40 40 T50 25" opacity="0.8" />
        <circle cx="50" cy="50" r="2" fill="currentColor" stroke="none" />
    </svg>
);

// 2. Floral Papier-mâché Element (Almond Blossom)
const AlmondBlossom = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg viewBox="0 0 100 100" className={className} style={style} fill="currentColor">
        <path d="M50 50 Q60 20 50 10 Q40 20 50 50 Q80 40 90 50 Q80 60 50 50 Q40 80 50 90 Q60 80 50 50 Q20 60 10 50 Q20 40 50 50" opacity="0.6" />
        <circle cx="50" cy="50" r="5" opacity="0.9" />
    </svg>
);

// 3. Snow Capped Mountains (Layered)
const SnowMountains = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg viewBox="0 0 1440 320" className={className} style={style} preserveAspectRatio="none">
        <path fill="#2a1b3d" fillOpacity="0.8" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        <path fill="#1a0b2e" fillOpacity="1" d="M0,320L60,293.3C120,267,240,213,360,197.3C480,181,600,203,720,229.3C840,256,960,288,1080,277.3C1200,267,1320,213,1380,186.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
    </svg>
);

// 4. Kashmiri Couple Silhouette (Pherans)
const KashmiriCouple = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg viewBox="0 0 200 150" className={className} style={style} fill="currentColor">
        {/* Male in Pheran (Right) */}
        <path d="M120 150 L120 70 C120 60 135 60 135 70 L135 150" fill="currentColor" /> {/* Legs/Base */}
        <path d="M115 130 Q110 80 120 50 Q128 35 138 50 Q145 80 140 130 Z" fill="currentColor" /> {/* Body Pheran */}
        <circle cx="128" cy="35" r="8" fill="currentColor" /> {/* Head */}

        {/* Female in Pheran (Left) - Reaching Out */}
        <path d="M70 150 L70 80 C70 70 85 70 85 80 L85 150" fill="currentColor" /> {/* Legs/Base */}
        <path d="M65 130 Q60 85 70 55 Q78 40 88 55 Q95 85 90 130 Z" fill="currentColor" /> {/* Body Pheran */}
        <circle cx="78" cy="40" r="7" fill="currentColor" /> {/* Head with scarf shape implied */}

        {/* Arms Reaching */}
        <path d="M85 70 Q100 65 115 70" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
);


// 5. Beautiful Masjid Vector (Silhouette)
const MasjidVector = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg viewBox="0 0 500 200" className={className} style={style} fill="currentColor">
        <path d="M250 20 L250 60 M200 60 L300 60 L300 150 L200 150 L200 60" stroke="none" /> {/* Main Dome base structure placeholder logic for silhouette below */}
        <path d="M250 10 C270 10 290 30 290 60 L210 60 C210 30 230 10 250 10 Z" /> {/* Central Dome */}
        <rect x="290" y="60" width="10" height="90" /> {/* Right Pillar */}
        <rect x="200" y="60" width="10" height="90" /> {/* Left Pillar */}
        <path d="M300 50 L300 20 L310 20 L310 50 Z" /> {/* Minaret Top R */}
        <rect x="300" y="50" width="10" height="100" /> {/* Minaret R */}
        <path d="M190 50 L190 20 L200 20 L200 50 Z" /> {/* Minaret Top L */}
        <rect x="190" y="50" width="10" height="100" /> {/* Minaret L */}
        <path d="M150 150 L350 150 L350 160 L150 160 Z" /> {/* Base */}
        <circle cx="250" cy="5" r="2" /> {/* Crescent moon on top of dome */}
        <path d="M250 3 L252 0 L248 0 Z" /> {/* Spire */}

        {/* Detailed Silhouette Construction */}
        <path d="M250 20 Q280 20 295 60 L205 60 Q220 20 250 20" fill="currentColor" /> {/* Dome */}
        <rect x="180" y="70" width="15" height="100" rx="2" /> {/* Minaret 1 */}
        <rect x="305" y="70" width="15" height="100" rx="2" /> {/* Minaret 2 */}
        <path d="M180 70 L187.5 50 L195 70 Z" /> {/* Minaret Top 1 */}
        <path d="M305 70 L312.5 50 L320 70 Z" /> {/* Minaret Top 2 */}
        <rect x="140" y="100" width="220" height="70" rx="2" /> {/* Main Building Body */}
        <path d="M230 170 L230 130 Q250 110 270 130 L270 170 Z" fill="#0F0F1A" /> {/* Entrance Arch (Cutout) */}
    </svg>
);

// Better Masjid Silhouette
const BeautifulMasjid = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg viewBox="0 0 1000 300" className={className} style={style} preserveAspectRatio="xMidYBottom">
        <path fill="currentColor" d="M500,50 C540,50 570,90 570,140 L430,140 C430,90 460,50 500,50 Z" /> {/* Dome */}
        <line x1="500" y1="50" x2="500" y2="20" stroke="currentColor" strokeWidth="3" />

        <rect x="580" y="120" width="40" height="180" /> {/* Structure Right */}
        <rect x="380" y="120" width="40" height="180" /> {/* Structure Left */}
        <rect x="420" y="140" width="160" height="160" /> {/* Main Block */}

        {/* Minarets */}
        <rect x="630" y="80" width="20" height="220" />
        <path d="M630,80 L640,50 L650,80 Z" fill="currentColor" />
        <rect x="350" y="80" width="20" height="220" />
        <path d="M350,80 L360,50 L370,80 Z" fill="currentColor" />

        {/* Arch */}
        <path d="M480,300 L480,220 A 20 20 0 0 1 520,220 L520,300 Z" fill="#D4AF37" fillOpacity="0.2" />
    </svg>
);


interface KashmiriBackgroundProps {
    showMasjid?: boolean;
}

const KashmiriBackground: React.FC<KashmiriBackgroundProps> = ({ showMasjid = false }) => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none bg-[#0F0F1A]">

            {/* 1. Cinematic Gradient Base */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#5c0038] to-[#fc03a1] opacity-90"></div>

            {/* 2. Walnut Wood Carving Texture (Subtle Noise overlay) */}
            <div className="absolute inset-0 opacity-[0.07] mix-blend-overlay"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div>

            {/* 3. Tilla Embroidery Borders (Golden shimmer lines) */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#D4AF37]/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#fc03a1]/50 via-[#D4AF37]/5 to-transparent"></div>

            {/* --- 3D AESTHETIC MOON --- */}
            <div className="absolute top-10 right-10 md:top-20 md:right-32 w-32 h-32 md:w-48 md:h-48 opacity-0 animate-moon-rise z-10 pointer-events-none">
                {/* Glow Container */}
                <div className="relative w-full h-full">
                    {/* Outer Glow (Noor) */}
                    <div className="absolute inset-0 rounded-full bg-white/5 blur-[40px] animate-pulse-slow"></div>

                    {/* The Moon Itself */}
                    <div className="absolute inset-2 overflow-hidden rounded-full">
                        {/* Crescent Shape created via Box Shadow */}
                        <div className="w-full h-full rounded-full shadow-[inset_-16px_-8px_0px_4px_#fff] opacity-90 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
                            style={{ transform: 'rotate(-15deg)' }}>
                        </div>

                        {/* 3D Texture Overlay (Subtle Craters on the lit part) */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay"></div>
                    </div>

                    {/* Inner Radiance */}
                    <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(255,215,0,0.1)]"></div>
                </div>
            </div>

            {/* 4. Twinkling Stars & Shooting Star */}
            {[...Array(30)].map((_, i) => (
                <div key={`star-${i}`} className="absolute text-white animate-twinkle"
                    style={{
                        top: `${Math.random() * 60}%`, left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 6 + 2}px`, height: `${Math.random() * 6 + 2}px`,
                        opacity: Math.random() * 0.7 + 0.3,
                        animationDuration: `${2 + Math.random() * 3}s`, animationDelay: `${Math.random() * 2}s`
                    }}
                >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-[0_0_2px_rgba(255,255,255,0.8)]"><path d="M12,0.5 L14.5,9.5 L23.5,12 L14.5,14.5 L12,23.5 L9.5,14.5 L0.5,12 L9.5,9.5 Z" /></svg>
                </div>
            ))}
            <div className="absolute top-0 right-0 w-[200px] h-[2px] bg-gradient-to-l from-transparent via-white to-transparent opacity-0 animate-shooting-star rotate-[-45deg] origin-right"></div>

            {/* 5. Floating Tilla & Floral Patterns (Gold/Almond) */}
            {[...Array(5)].map((_, i) => (
                <div key={`tilla-${i}`} className="absolute text-[#D4AF37] opacity-[0.05] animate-float" style={{ top: `${10 + Math.random() * 60}%`, left: `${Math.random() * 90}%`, width: `${100 + Math.random() * 100}px`, height: `${100 + Math.random() * 100}px`, animationDuration: `${15 + Math.random() * 10}s`, animationDelay: `${Math.random() * 5}s`, transform: `rotate(${Math.random() * 45}deg)` }}>
                    <TillaPattern className="w-full h-full" />
                </div>
            ))}
            {[...Array(8)].map((_, i) => (
                <div key={`flower-${i}`} className="absolute text-[#F5E0A3] opacity-[0.08] animate-float-slow" style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, width: `${20 + Math.random() * 30}px`, height: `${20 + Math.random() * 30}px`, animationDuration: `${20 + Math.random() * 15}s`, animationDelay: `${Math.random() * 10}s`, }}>
                    <AlmondBlossom className="w-full h-full" />
                </div>
            ))}

            {/* 6. Islamic Geometric Shimmer */}
            <div className="absolute inset-0 opacity-[0.03] animate-pulse-slow" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 L50 0 L100 50 L50 100 Z' fill='none' stroke='%23D4AF37' stroke-width='0.5'/%3E%3C/svg%3E")`, backgroundSize: '80px 80px' }}></div>


            {/* 7. MOUNTAINS (Mid-ground) */}
            <div className="absolute bottom-0 left-0 w-full h-[40vh] z-0 opacity-80">
                <SnowMountains className="w-full h-full text-[#2a1b3d]" />
            </div>

            {/* 8. MASJID VECTOR (CONDITIONAL) */}
            {showMasjid && (
                <div className="absolute bottom-[5vh] left-1/2 transform -translate-x-1/2 w-[600px] opacity-100 z-10 text-[#1a0b2e]">
                    <BeautifulMasjid className="w-full h-full drop-shadow-2xl" />
                </div>
            )}

            {/* 8b. COUPLE SILHOUETTE (Conditional: ONLY if NOT showing Masjid, or maybe keep both? User asked for Masjid "in it". Default Hero has Couple. Let's keep Couple in Hero (default) and Masjid in CTA (showMasjid). CTA usually focuses on the "journey", Masjid fits "Nikah". Hero focuses on "Pair". Perfect.) */}
            {!showMasjid && (
                <div className="absolute bottom-[10vh] left-1/2 transform -translate-x-1/2 w-[300px] md:w-[400px] opacity-90 z-10 text-[#0F0F1A]">
                    <KashmiriCouple className="w-full h-full drop-shadow-2xl" />
                </div>
            )}


            {/* 9. SNOWFALL ANIMATION (Overlay) */}
            <div className="absolute inset-0 z-20 pointer-events-none">
                {[...Array(50)].map((_, i) => (
                    <div key={`snow-${i}`} className="absolute bg-white rounded-full opacity-80 animate-snow"
                        style={{
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 4 + 2}px`, height: `${Math.random() * 4 + 2}px`,
                            animationDuration: `${Math.random() * 15 + 10}s`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    ></div>
                ))}
            </div>

            {/* 10. Vignette & Mist Overlay for Focus */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#000000_120%)] opacity-60 z-30"></div>

            {/* Styles */}
            <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(10px, -20px) rotate(5deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.03; }
          50% { opacity: 0.06; }
        }
        @keyframes moon-rise {
            0% { transform: translateY(100px) scale(0.8); opacity: 0; }
            100% { transform: translateY(0) scale(1); opacity: 0.9; }
        }
        @keyframes twinkle {
            0%, 100% { opacity: 0.3; transform: scale(0.8); }
            50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes shooting-star {
            0% { transform: translateX(0) translateY(0) rotate(-45deg); opacity: 1; }
            100% { transform: translateX(-1000px) translateY(1000px) rotate(-45deg); opacity: 0; }
        }
        @keyframes snow {
            0% { transform: translateY(-10vh) translateX(0); opacity: 0; }
            10% { opacity: 1; }
            100% { transform: translateY(110vh) translateX(20px); opacity: 0.8; }
        }
        .animate-moon-rise { animation: moon-rise 3s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .animate-float-slow { animation: float-slow 15s ease-in-out infinite; }
        .animate-float-very-slow { animation: float-slow 25s ease-in-out infinite reverse; }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle 3s ease-in-out infinite; }
        .animate-shooting-star { animation: shooting-star 10s ease-in-out infinite; animation-delay: 5s; }
        .animate-snow { animation: snow linear infinite; }
      `}</style>
        </div>
    );
};

export default KashmiriBackground;
