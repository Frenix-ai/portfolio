"use client";

import React, { useEffect, useState } from "react";
import { useTransitionContext } from "@/components/TransitionProvider";

/**
 * Template Component
 * Animates the inner page content as it enters or exits during route changes.
 * Coordinated with the global Barba.js curtain overlay.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const { status } = useTransitionContext();
  const [localTransitioning, setLocalTransitioning] = useState(true);

  useEffect(() => {
    // Trigger subtle content entry fade-in on mount
    const timer = setTimeout(() => {
      setLocalTransitioning(false);
    }, 50);
    
    return () => clearTimeout(timer);
  }, []);

  const isTransitioning = localTransitioning || status === "leaving";

  return (
    <div 
      className={`w-full transition-all duration-[700ms] ${
        isTransitioning ? "translate-y-6 opacity-0" : "translate-y-0 opacity-100"
      }`}
      style={{
        transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)"
      }}
    >
      {children}
    </div>
  );
}
