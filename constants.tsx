
import React from 'react';

export const COLORS = {
  primary: '#B6337D', // Magenta/Plum from user image
  walnut: '#4A2F22',
  gold: '#D4AF37',
  goldLight: '#F5E0A3',
  pink: '#EDD6DF',
  white: '#FFFFFF',
  mist: '#F4F4F4'
};

export const ChinarLeafIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C12 22 11.5 18 11.5 17C10.5 17.5 9.5 18.5 8 18.5C8.5 17 8 16 7 15.5C5.5 16 4 16 3 15C4.5 14 5 13 5 12C4 11.5 2 11 1 9C3 9 4.5 9.5 5.5 10.5C6 9 6.5 7.5 8 6C8 7.5 8.5 8.5 9.5 9C10 7.5 10.5 4 12 2C13.5 4 14 7.5 14.5 9C15.5 8.5 16 7.5 16 6C17.5 7.5 18 9 18.5 10.5C19.5 9.5 21 9 23 9C22 11 20 11.5 19 12C19 13 19.5 14 21 15C20 16 18.5 16 17 15.5C16 16 15.5 17 16 18.5C14.5 18.5 13.5 17.5 12.5 17C12.5 18 12 22 12 22Z" />
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
