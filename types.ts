
// Import React to ensure the React namespace is available for type definitions
import React from 'react';

export interface FeatureBlock {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  name: string;
  location: string;
  story: string;
  image: string;
}

export interface ProblemCard {
  title: string;
  description: string;
  image: string;
}