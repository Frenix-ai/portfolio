"use client";

import React from "react";
import Header from "@/components/Header";
import Atmosphere from "@/components/Atmosphere";
import TransitionLink from "@/components/TransitionLink";

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  glowBg: string;
  link: string;
}

const projects: Project[] = [
  {
    number: "01",
    title: "Frenix.sh",
    category: "AI Model Gateway & Proxy Router",
    description: "A developer-first, secure gateway platform built to manage and optimize LLM route connections. Designed to proxy high-throughput, exclusive model streams (like the 'Uttam Vara' models) with dynamic, sub-millisecond balancing, token quotas, and obfuscated payload filters.",
    tech: ["TypeScript", "NextJS", "Tailwind", "NodeJS"],
    image: "/image.png",
    glowBg: "bg-emerald-800/[0.04]",
    link: "https://github.com",
  },
  {
    number: "02",
    title: "filybase",
    category: "Decentralized File Storage & Asset CDN",
    description: "A serverless blob object storage engine engineered for modern web apps. Integrates secure parallel blob uploads, dynamic real-time file compression, lightning-fast edge delivery networks, and granular bucket key access control API keys.",
    tech: ["TypeScript", "Prisma", "Postgres", "Tailwind"],
    image: "/filybase.png",
    glowBg: "bg-amber-800/[0.04]",
    link: "https://github.com",
  },
  {
    number: "03",
    title: "Uttam Code",
    category: "Terminal-first Agentic IDE",
    description: "A terminal-based, local-first agentic coding environment built to integrate seamlessly with custom high-end LLM architectures. Offers standard context assembly, shell command sandbox execution, and local workspace code generation.",
    tech: ["Go", "React", "Tailwind", "gRPC"],
    image: "/uttam-code.png",
    glowBg: "bg-emerald-950/[0.03]",
    link: "https://github.com",
  },
  {
    number: "04",
    title: "uttamai.in",
    category: "High-performance AI Interface",
    description: "A sleek, high-throughput conversational AI model dashboard interface. Featuring real-time response streams, multi-modal file uploads, custom model router configurations, and personalized workspace libraries.",
    tech: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL"],
    image: "/uttamai.png",
    glowBg: "bg-stone-800/[0.04]",
    link: "https://www.uttamai.in",
  }
];

export default function WorkPage() {
  return (
    <main className="relative w-full overflow-x-hidden bg-bg-sand text-brand-green select-none">
      
      {/* A. FLOATING FIXED HEADER WITH PREMIUM BLURRED SANDSTONE BACKDROP */}
      <div className="fixed top-0 left-0 w-full z-50 bg-[#F1EFEA]/60 backdrop-blur-md border-b border-brand-green/5">
        <Header />
      </div>

      {/* B. Panel 1: PROJECTS INTRO */}
      <section className="w-full min-h-screen flex flex-col justify-between pt-32 pb-12 bg-bg-sand relative overflow-hidden select-none z-10">
        <Atmosphere />
        
        <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-12 lg:px-24 max-w-7xl mx-auto w-full relative z-20">
          {/* Creative Sub-title Pill */}
          <div className="mb-6 md:mb-8 transform transition-transform duration-300 hover:scale-105 select-none">
            <span className="inline-block border border-brand-green/20 bg-[#F1EFEA]/80 backdrop-blur-md px-5 py-1.5 rounded-full text-[10px] md:text-xs uppercase tracking-[0.2em] text-brand-green/80 font-bold shadow-sm">
              Selected Works — 2026
            </span>
          </div>

          {/* Page Title (Melodrama Display Font) */}
          <div className="w-full text-center mb-6">
            <h2 className="font-display font-medium text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[8rem] leading-[0.9] text-brand-green tracking-tight select-none">
              Projects.
            </h2>
            <p className="font-sans text-xs sm:text-sm tracking-widest text-stone-500/80 uppercase mt-4 select-none max-w-xl mx-auto">
              A showcase of digital design, high-end architectures, and clean engineering.
            </p>
          </div>

          {/* Scroll Down Indicator */}
          <div className="mt-8 text-stone-400 font-sans text-[10px] uppercase tracking-widest flex flex-col items-center gap-4">
            <span>Scroll down to explore</span>
            <div className="w-[1.5px] h-12 bg-brand-green/10 rounded-full relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-brand-green rounded-full animate-scroll-line" />
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="w-full px-4 md:px-12 lg:px-24 flex items-center justify-between relative z-20">
          <span className="text-stone-400 font-sans text-[10px] uppercase tracking-widest">
            © 2026 Hiren Ahlawat — All rights reserved
          </span>
        </div>
      </section>

      {/* C. Panels 2 to 5: PROJECT SHOWCASES */}
      {projects.map((project, idx) => {
        const isEven = idx % 2 === 0;
        
        return (
          <section 
            key={project.number}
            id={`project-${project.number}`}
            className="w-full min-h-screen bg-bg-sand flex flex-col justify-between pt-32 pb-12 relative overflow-hidden select-none z-10 border-t border-brand-green/5 scroll-mt-16"
          >
            {/* Custom Atmosphere shadow overlay inside panel sheet */}
            <Atmosphere />

            {/* Ambient Background Aura behind content */}
            <div className={`absolute top-1/4 ${isEven ? 'right-1/4' : 'left-1/4'} w-96 h-96 rounded-full ${project.glowBg} blur-[120px] pointer-events-none`} />

            {/* Interactive Showcase fold */}
            <div className="flex-1 flex items-center justify-center px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full relative z-20 py-8">
              <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full ${isEven ? "" : "md:flex-row-reverse"}`}>
                
                {/* Visual Showcase Card */}
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full md:w-1/2 overflow-hidden rounded-2xl border border-brand-green/10 bg-[#F1EFEA]/40 backdrop-blur-sm p-3 group cursor-pointer shadow-md transform transition-all duration-500 hover:scale-[1.02] hover:border-brand-green/20 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-stone-100/60">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover grayscale opacity-95 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out"
                    />
                  </div>
                </a>

                {/* Project Details */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  {/* Project Number */}
                  <span className="font-display text-5xl md:text-7xl font-bold text-brand-green/10 mb-2 select-none">
                    {project.number}
                  </span>

                  {/* Title & Category */}
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="group/title block">
                    <h3 className="font-display text-3xl md:text-5xl font-bold text-brand-green mb-1 tracking-tight group-hover/title:text-emerald-800 transition-colors duration-300">
                      {project.title} <span className="inline-block transform group-hover/title:translate-x-1.5 transition-transform duration-300 text-2xl md:text-3xl font-light">↗</span>
                    </h3>
                  </a>
                  <span className="font-sans text-[10px] md:text-xs font-semibold tracking-wider text-stone-500/70 uppercase mb-4 block">
                    {project.category}
                  </span>

                  {/* Description */}
                  <p className="font-sans text-xs md:text-sm leading-relaxed text-stone-600 mb-6 max-w-lg">
                    {project.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span 
                        key={t}
                        className="inline-block border border-brand-green/10 bg-brand-green/5 px-3 py-1 rounded-full text-[9px] uppercase tracking-wider text-brand-green font-bold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <div className="mt-8">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-brand-green/20 hover:border-brand-green/80 bg-[#F1EFEA]/80 hover:bg-brand-green hover:text-bg-sand px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-brand-green transition-all duration-300 shadow-sm transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>Visit Live Site</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </a>
                  </div>

                </div>

              </div>
            </div>

            {/* Panel Footer */}
            <div className="w-full px-4 md:px-12 lg:px-24 flex items-center justify-between opacity-50 relative z-20">
              <span className="font-sans text-[10px] uppercase tracking-widest text-stone-400">
                Case Study {project.number} — Scroll to explore
              </span>
            </div>

          </section>
        );
      })}

      {/* D. Panel 6: WORK ENDING / CONTACT CTA */}
      <section className="w-full bg-bg-sand pt-24 pb-16 relative overflow-hidden select-none z-10 border-t border-brand-green/5">
        <Atmosphere />
        
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center gap-6 relative z-20">
          <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-brand-green/60 font-bold block mb-1">
            05 / WHAT'S NEXT
          </span>
          
          <h4 className="font-display font-medium text-4xl md:text-6xl text-brand-green tracking-tight italic">
            Let's build something great
          </h4>
          
          <p className="font-sans text-stone-600 text-xs md:text-sm max-w-xl leading-relaxed">
            Have a project in mind, or want to discuss high-performance architectures and modern design? Let's get in touch and bring it to life.
          </p>

          <div className="mt-4 flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            {/* Email Button */}
            <a 
              href="mailto:ghg64272@gmail.com"
              className="group relative inline-flex items-center gap-3 border border-brand-green bg-brand-green px-8 py-3.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-bg-sand hover:bg-[#203022]/90 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md cursor-pointer"
            >
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>ghg64272@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Ending credit footer */}
        <div className="w-full px-4 md:px-12 lg:px-24 mt-20 flex items-center justify-between opacity-50 relative z-20">
          <span className="font-sans text-[10px] uppercase tracking-widest text-stone-400">
            © 2026 Hiren Ahlawat — All rights reserved
          </span>
          <TransitionLink 
            href="/"
            className="font-sans text-[10px] uppercase tracking-widest text-brand-green hover:underline cursor-pointer"
          >
            Back to Home
          </TransitionLink>
        </div>
      </section>

    </main>
  );
}
