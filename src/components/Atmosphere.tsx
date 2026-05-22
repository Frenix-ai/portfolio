import React from "react";

/**
 * Atmosphere Component
 * Renders the high-end creative visual environment:
 * - Three soft-focus blurred radial background mesh blobs (coral-rose, sky-indigo, spring-green).
 * - A realistic oblique window blinds shadow overlay.
 * - Three custom floating/rotating sharp SVG abstract ornaments.
 */
export default function Atmosphere() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      
      {/* 1. SOFT MESH BLUR BLOBS */}
      {/* Coral Rose Blob (Left Side) */}
      <div 
        className="absolute top-[20%] left-[-10%] md:left-[5%] w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-tr from-rose-400/20 to-orange-400/25 blur-3xl mix-blend-multiply filter opacity-70 animate-pulse"
        style={{ animationDuration: "8s" }}
      />
      
      {/* Sky Indigo/Blue Blob (Right Side) */}
      <div 
        className="absolute top-[30%] right-[-10%] md:right-[10%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-bl from-blue-400/15 to-indigo-400/20 blur-3xl mix-blend-screen filter opacity-60"
        style={{ animationDuration: "12s" }}
      />
      
      {/* Spring Green Blob (Far Right Side) */}
      <div 
        className="absolute bottom-[10%] right-[-15%] w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-emerald-300/20 blur-3xl filter opacity-50"
      />
      {/* 2. SHARP SVG ORNAMENTS WITH FLOAT ANIMATIONS */}
      {/* A. 8-Pointed Star (Left Side - Coral Blob overlay) */}
      <div 
        className="absolute left-[3%] md:left-[8%] top-[28%] scale-[0.6] md:scale-100 select-none animate-float"
        style={{ 
          animationDelay: "0s",
          animationDuration: "6s",
          willChange: "transform"
        }}
      >
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 0L36.8 19.2L51.2 4.8L44.8 24L64 32L44.8 36.8L51.2 59.2L36.8 44.8L32 64L27.2 44.8L12.8 59.2L19.2 36.8L0 32L19.2 27.2L12.8 4.8L27.2 19.2L32 0Z" fill="url(#star-grad-1)" />
          <defs>
            <linearGradient id="star-grad-1" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#93C5FD" />
              <stop offset="50%" stopColor="#C084FC" />
              <stop offset="100%" stopColor="#F472B6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* B. Flower Star / Sparkle (Top Middle - Sand background) */}
      <div 
        className="absolute left-[20%] md:left-[26%] top-[12%] scale-[0.5] md:scale-100 select-none animate-float-spin"
        style={{ 
          animationDelay: "1.5s",
          animationDuration: "14s",
          willChange: "transform"
        }}
      >
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 0C24 13.25 13.25 24 0 24C13.25 24 24 34.75 24 48C24 34.75 34.75 24 48 24C34.75 24 24 13.25 24 0Z" fill="url(#star-grad-2)" />
          <defs>
            <linearGradient id="star-grad-2" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#A7F3D0" />
              <stop offset="100%" stopColor="#34D399" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* C. Geometric Diamond Star Pattern (Bottom Right) */}
      <div 
        className="absolute right-[5%] md:right-[15%] bottom-[12%] scale-[0.6] md:scale-100 select-none animate-float"
        style={{ 
          animationDelay: "2.5s",
          animationDuration: "8s",
          willChange: "transform"
        }}
      >
        <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Diamond Border */}
          <path d="M42 2L82 42L42 82L2 42L42 2Z" stroke="#D1FAE5" strokeWidth="1.5" />
          {/* Internal Star */}
          <path d="M42 20C42 32.15 32.15 42 20 42C32.15 42 42 51.85 42 70C42 51.85 51.85 42 70 42C51.85 42 42 32.15 42 20Z" fill="url(#star-grad-3)" opacity="0.8" />
          <defs>
            <linearGradient id="star-grad-3" x1="20" y1="20" x2="70" y2="70" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#E2E8F0" />
              <stop offset="50%" stopColor="#A7F3D0" />
              <stop offset="100%" stopColor="#6EE7B7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
    </div>
  );
}
