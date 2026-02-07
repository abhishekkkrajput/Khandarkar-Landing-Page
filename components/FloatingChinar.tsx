
import React, { useEffect, useState } from 'react';
import { ChinarLeafIcon } from '../constants';

const FloatingChinar: React.FC = () => {
  const [leaves, setLeaves] = useState<{ id: number; left: number; duration: number; delay: number; scale: number; rotation: number }[]>([]);

  useEffect(() => {
    const newLeaves = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 10,
      scale: 0.5 + Math.random() * 1,
      rotation: Math.random() * 360
    }));
    setLeaves(newLeaves);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden opacity-20">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute text-[#D4AF37] animate-[float_linear_infinite]"
          style={{
            left: `${leaf.left}%`,
            top: '-50px',
            animationDuration: `${leaf.duration}s`,
            animationDelay: `${leaf.delay}s`,
            transform: `scale(${leaf.scale}) rotate(${leaf.rotation}deg)`,
          }}
        >
          <ChinarLeafIcon className="w-12 h-12" />
        </div>
      ))}
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0vh) rotate(0deg) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) rotate(360deg) translateX(50px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingChinar;
