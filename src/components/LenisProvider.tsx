"use client";

import React from "react";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css"; // Crucial official Lenis CSS to fix scroll height calculations

/**
 * LenisProvider Component
 * Integrates high-performance smooth scrolling into the root layout of Next.js.
 */
export default function LenisProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.08,        // Scroll smoothing intensity (smaller = smoother/slower)
        duration: 1.2,     // Duration of the scroll scroll-behavior in seconds
        smoothWheel: true, // Smooth mouse wheel scroll
        touchMultiplier: 1.5, // Touch screen scroll sensitivity
      }}
    >
      {children}
    </ReactLenis>
  );
}
