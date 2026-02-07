
import React from 'react';

export const COLORS = {
  emerald: '#064E3B',
  walnut: '#4A2F22',
  gold: '#D4AF37',
  pink: '#EDD6DF',
  white: '#FFFFFF',
  mist: '#F4F4F4'
};

export const ChinarLeafIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <path d="M50 5C52 15 45 25 50 35C55 25 48 15 50 5ZM30 20C35 30 25 40 30 50C35 40 25 30 30 20ZM70 20C75 30 65 40 70 50C75 40 65 30 70 20ZM15 45C25 55 15 65 20 75C25 65 15 55 15 45ZM85 45C95 55 85 65 80 75C75 65 85 55 85 45ZM50 95V60M35 75C40 85 30 95 35 100M65 75C60 85 70 95 65 100" stroke="currentColor" strokeWidth="1" />
    <path d="M50 5L53 15L65 10L62 22L75 20L70 32L85 35L75 45L80 57L68 53L65 65L55 58L50 70L45 58L35 65L32 53L20 57L25 45L15 35L30 32L25 20L38 22L35 10L47 15L50 5Z" />
  </svg>
);

export const WalnutPattern = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" className="opacity-10 absolute inset-0 w-full h-full">
    <defs>
      <pattern id="walnut" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
        <path d="M0 25Q12.5 0 25 25T50 25M0 50Q12.5 25 25 50T50 50" fill="none" stroke="currentColor" strokeWidth="0.5"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#walnut)" />
  </svg>
);
