
import React, { useEffect, useState } from 'react';
import { ChinarLeafIcon } from '../constants';

interface Leaf {
  id: number;
  left: number;
  duration: number;
  delay: number;
  scale: number;
  rotation: number;
  swayAmount: number;
  swayDuration: number;
}

const FloatingChinar: React.FC = () => {
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    const newLeaves = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 12 + Math.random() * 15,
      delay: Math.random() * -20, // Negative delay to have leaves already falling on load
      scale: 0.4 + Math.random() * 0.8,
      rotation: Math.random() * 360,
      swayAmount: 20 + Math.random() * 50,
      swayDuration: 3 + Math.random() * 4,
    }));
    setLeaves(newLeaves);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute text-[#D4AF37] animate-fall"
          style={{
            left: `${leaf.left}%`,
            top: '-10%',
            animationDuration: `${leaf.duration}s`,
            animationDelay: `${leaf.delay}s`,
            opacity: 0.4,
          } as React.CSSProperties}
        >
          <div 
            className="animate-sway"
            style={{
              animationDuration: `${leaf.swayDuration}s`,
              transform: `scale(${leaf.scale}) rotate(${leaf.rotation}deg)`,
            } as React.CSSProperties}
          >
            <ChinarLeafIcon className="w-10 h-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
          </div>
        </div>
      ))}
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-10vh) translateX(0);
          }
          100% {
            transform: translateY(110vh) translateX(40px);
          }
        }
        
        @keyframes sway {
          0%, 100% {
            transform: rotateZ(-20deg) rotateY(0deg);
          }
          50% {
            transform: rotateZ(20deg) rotateY(180deg);
          }
        }

        .animate-fall {
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .animate-sway {
          animation-name: sway;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
};

export default FloatingChinar;
