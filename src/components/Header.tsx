"use client";

import React from "react";
import TransitionLink from "@/components/TransitionLink";
import { usePathname } from "next/navigation";

/**
 * Header Component
 * Aligns the logo, job description, geographical details, and menu navigation.
 * Uses client-side usePathname to highlight the active navigation item dynamically.
 */
interface HeaderProps {
  light?: boolean;
}

export default function Header({ light = false }: HeaderProps) {
  const pathname = usePathname();

  const isHomeActive = pathname === "/";
  const isWorkActive = pathname === "/work";

  const textColor = light ? "text-[#F1EFEA]" : "text-brand-green";
  const logoHoverColor = light ? "group-hover:text-stone-300" : "group-hover:text-emerald-800";
  const subTextColor = light ? "text-[#F1EFEA]/60" : "text-brand-green/60";
  const subTextHoverColor = light ? "group-hover:text-stone-300/60" : "group-hover:text-emerald-800/60";
  const metaTextColor = light ? "text-[#F1EFEA]/70" : "text-stone-500/80";
  
  const navActiveColor = light ? "text-[#F1EFEA] font-bold" : "text-brand-green font-bold";
  const navInactiveColor = light ? "text-[#F1EFEA]/70" : "text-stone-500/80";
  const navHoverColor = light ? "hover:text-[#F1EFEA]" : "hover:text-brand-green";
  const dotBg = light ? "bg-[#F1EFEA]" : "bg-brand-green";

  return (
    <header className="relative w-full z-30 pt-8 pb-4 px-4 md:px-12 lg:px-24 flex items-start justify-between select-none">
      {/* 1. BRANDING LOGO (Top-Left) */}
      <TransitionLink href="/" className="flex flex-col select-none group">
        <h1 className={`font-display text-2xl md:text-3xl font-bold leading-[0.9] ${textColor} tracking-tight transition-colors duration-300 ${logoHoverColor} cursor-pointer`}>
          hiren.
        </h1>
        <span className={`font-sans text-[10px] tracking-[0.35em] ${subTextColor} uppercase ml-[2px] transition-colors duration-300 ${subTextHoverColor}`}>
          ahlawat
        </span>
      </TransitionLink>

      {/* 2. LABELS / METADATA (Top-Middle) */}
      <div className={`hidden lg:flex items-center gap-24 xl:gap-36 ${metaTextColor} font-sans text-xs font-medium pt-2`}>
        <div className="flex items-center gap-2 select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Digital designer</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span>Based in Calgary, Canada</span>
        </div>
      </div>

      {/* 3. MENU NAVIGATION (Top-Right) */}
      <nav className={`flex items-start text-xs font-semibold uppercase tracking-wider ${metaTextColor} pt-1`}>
        <ul className="flex flex-col gap-2 text-right md:flex-row md:gap-8 items-end md:items-center">
          <li>
            <TransitionLink 
              href="/"
              className={`flex items-center gap-1.5 transition-colors duration-200 ${navHoverColor} ${
                isHomeActive ? navActiveColor : navInactiveColor
              }`}
            >
              {isHomeActive && <span className={`w-1 h-1 rounded-full ${dotBg}`} />}
              <span>Home</span>
            </TransitionLink>
          </li>
          <li>
            <TransitionLink 
              href="/work"
              className={`flex items-center gap-1.5 transition-colors duration-200 ${navHoverColor} ${
                isWorkActive ? navActiveColor : navInactiveColor
              }`}
            >
              {isWorkActive && <span className={`w-1 h-1 rounded-full ${dotBg}`} />}
              <span>Work</span>
            </TransitionLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
