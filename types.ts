// Fix: Added missing React import for React.ReactNode usage
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: number;
  name: string;
  car: string;
  text: string;
  rating: number;
}