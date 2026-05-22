import React from "react";
import TransitionLink from "@/components/TransitionLink";
import Header from "@/components/Header";
import Atmosphere from "@/components/Atmosphere";
import { Logos3 } from "@/components/ui/logos3";

export default function Home() {
  return (
    <main className="relative bg-bg-sand w-full select-none min-h-screen">
      
      {/* SECTION 1: HERO SECTION (FIRST FOLD - EXACTLY 100vh) */}
      <section className="relative flex flex-col h-[100dvh] min-h-[100dvh] w-full justify-between pb-8">
        {/* 1. ATMOSPHERIC SHADOWS, GRADIENT BLOBS, AND SVG ORNAMENTS */}
        <Atmosphere />

        {/* 2. FLOATING HEADER METADATA & NAV */}
        <Header />

        {/* 3. CENTRAL STATEMENT HEADLINE */}
        <div className="relative z-20 flex flex-col flex-1 items-center justify-center px-4 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
          {/* Creative Sub-title Pill */}
          <div className="mb-6 md:mb-8 transform transition-transform duration-300 hover:scale-105 select-none">
            <span className="inline-block border border-brand-green/20 bg-[#F1EFEA]/80 backdrop-blur-md px-5 py-1.5 rounded-full text-[10px] md:text-xs uppercase tracking-[0.2em] text-brand-green/80 font-bold shadow-sm">
              Web design & development
            </span>
          </div>

          {/* Headline Text */}
          <div className="w-full text-center md:text-left select-text max-w-5xl">
            <h2 className="font-display font-medium text-[1.65rem] sm:text-[2.6rem] md:text-[3.8rem] lg:text-[4.8rem] xl:text-[5.6rem] leading-[1.15] md:leading-[1.08] text-brand-green tracking-tight">
              <span className="block md:whitespace-nowrap">
                I 
                <TransitionLink 
                  href="#about-me"
                  className="group relative inline-flex items-center justify-center align-middle mx-2 md:mx-3 h-[0.95em] w-[1.6em] hover:w-[0.95em] rounded-full bg-stone-200 border border-brand-green/15 transition-all duration-300 cursor-pointer select-none animate-none overflow-hidden"
                >
                  {/* Oval Avatar (Normally capsule w-[1.6em], morphs to circle w-[0.95em] on hover, letting text adjust) */}
                  <img 
                    src="/avatar.png" 
                    alt="Hiren portrait avatar badge"
                    className="w-full h-full object-cover rounded-full z-20 transition-opacity duration-300 group-hover:opacity-20"
                    style={{ objectFit: "cover" }}
                  />
                  {/* On hover, background becomes grey and shows elegant grey backing */}
                  <div className="absolute inset-0 bg-stone-600 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Floating Tooltip Above the Capsule */}
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 bg-stone-800 text-bg-sand text-[8px] md:text-[9px] uppercase font-bold tracking-widest rounded shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 pointer-events-none z-30 whitespace-nowrap">
                    about me
                    {/* Tooltip Arrow */}
                    <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-stone-800" />
                  </span>
                </TransitionLink>
                create living, breathing
              </span>
              <span className="block md:whitespace-nowrap">
                websites for brands 
                <TransitionLink 
                  href="/work"
                  className="group relative inline-flex items-center justify-center align-middle mx-2 md:mx-3 h-[0.95em] w-[1.6em] hover:w-[0.95em] rounded-full bg-stone-200 border border-brand-green/15 transition-all duration-300 cursor-pointer select-none overflow-hidden"
                >
                  {/* Oval Mockup (Normally capsule w-[1.6em], morphs to circle w-[0.95em] on hover, letting text adjust) */}
                  <img 
                    src="/tablet-mockup.png" 
                    alt="Web design tablet mockup badge"
                    className="w-full h-full object-cover rounded-full z-20 transition-opacity duration-300 group-hover:opacity-20"
                    style={{ objectFit: "cover" }}
                  />
                  {/* On hover, background becomes grey and shows elegant grey backing */}
                  <div className="absolute inset-0 bg-stone-600 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Floating Tooltip Above the Circle */}
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 bg-stone-800 text-bg-sand text-[8px] md:text-[9px] uppercase font-bold tracking-widest rounded shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 pointer-events-none z-30 whitespace-nowrap">
                    about work
                    {/* Tooltip Arrow */}
                    <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-stone-800" />
                  </span>
                </TransitionLink>
                that want
              </span>
              <span className="block md:whitespace-nowrap">to be felt, not just seen.</span>
            </h2>
          </div>
        </div>

        {/* 4. BOTTOM METADATA & FEEDBACK */}
        <div className="relative z-30 w-full px-4 md:px-12 lg:px-24 flex items-center justify-between">
          <a 
            href="mailto:ghg64272@gmail.com?subject=Feedback%20on%20Portfolio"
            className="flex items-center gap-2 text-stone-500/80 hover:text-brand-green font-sans text-xs font-semibold uppercase tracking-wider transition-colors duration-300 group cursor-pointer"
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
              className="transform group-hover:scale-110 transition-transform duration-200"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span className="border-b border-stone-400/20 group-hover:border-brand-green/60 pb-[1px] transition-colors duration-300">
              Feedback
            </span>
          </a>

          <span className="hidden md:inline text-stone-400 font-sans text-[10px] uppercase tracking-widest select-none">
            © 2026 Hiren Ahlawat — All rights reserved
          </span>
        </div>
      </section>

      {/* SECTION 2: TECH STACK MARQUEE (SECOND FOLD - SCROLLED DOWN) */}
      <section className="w-full bg-bg-sand">
        <Logos3 heading="My Stack" />
      </section>

      {/* SECTION 3: ABOUT ME (NEW) */}
      <section id="about-me" className="relative z-20 py-20 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto w-full bg-bg-sand scroll-mt-24">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-brand-green/10 pb-6 w-full">
          <div>
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-brand-green/60 font-bold block mb-1">
              02 / ABOUT ME
            </span>
            <h3 className="font-display font-medium text-3xl md:text-5xl text-brand-green tracking-tight">
              My Story
            </h3>
          </div>
          <span className="font-sans text-xs tracking-widest text-stone-500/60 uppercase mt-2 md:mt-0 select-none">
            A Little About Myself
          </span>
        </div>

        {/* Profile Card Container */}
        <div className="w-full border border-brand-green/15 bg-[#F1EFEA]/60 backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-sm flex flex-col gap-8 md:gap-10 transition-all duration-300 hover:border-brand-green/20 hover:shadow-md">
          
          {/* Top Grid: Avatar, Name, Socials */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 w-full">
            
            {/* Left Part: Avatar & Name */}
            <div className="flex items-center gap-5">
              <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-brand-green/10 bg-[#F1EFEA] shadow-inner shrink-0">
                <img 
                  src="/avatar.png" 
                  alt="Hiren Ahlawat portrait avatar"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out"
                />
              </div>
              <div>
                <h4 className="font-display text-2xl md:text-3xl font-medium italic text-brand-green tracking-tight select-none">
                  Hiren Ahlawat
                </h4>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1 text-stone-500 font-sans text-xs font-semibold uppercase tracking-wider select-none">
                  <span>Senior Developer</span>
                  <span className="w-1 h-1 rounded-full bg-stone-300" />
                  <span>Builder</span>
                  <span className="w-1 h-1 rounded-full bg-stone-300" />
                  <span>Engineer</span>
                </div>
              </div>
            </div>

            {/* Right Part: Socials & Availability */}
            <div className="flex flex-row md:flex-col items-start md:items-end justify-between md:justify-center gap-4 w-full md:w-auto shrink-0 border-t border-brand-green/5 md:border-t-0 pt-4 md:pt-0">
              
              {/* Social Links */}
              <div className="flex items-center gap-3">
                {/* GitHub */}
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center w-8 h-8 rounded-full border border-brand-green/10 bg-brand-green/5 text-brand-green hover:bg-brand-green hover:text-bg-sand transition-all duration-300 cursor-pointer"
                  title="GitHub"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                
                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center w-8 h-8 rounded-full border border-brand-green/10 bg-brand-green/5 text-brand-green hover:bg-brand-green hover:text-bg-sand transition-all duration-300 cursor-pointer"
                  title="LinkedIn"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>

                {/* X/Twitter */}
                <a 
                  href="https://x.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center w-8 h-8 rounded-full border border-brand-green/10 bg-brand-green/5 text-brand-green hover:bg-brand-green hover:text-bg-sand transition-all duration-300 cursor-pointer"
                  title="X (Twitter)"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                  </svg>
                </a>
              </div>

              {/* Availability badge */}
              <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-800 text-[10px] font-bold uppercase tracking-wider select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                <span>Available</span>
              </div>

            </div>

          </div>

          {/* Text Bio */}
          <div className="w-full text-stone-700 font-sans text-sm md:text-base leading-relaxed border-t border-brand-green/5 pt-6 select-text">
            <p className="mb-4">
              <strong className="text-brand-green font-bold">I build from zero.</strong> I am Hiren Ahlawat, a senior Software Developer and Engineer dedicated to my work and I love building products to solve real-world problems. I'm specialized in building MVPs.
            </p>
            <p>
              I take great pride in turning raw ideas into beautifully polished, highly functional web products. From clean, robust backend architectures to modern, responsive, and tactile frontends, I design digital experiences that feel premium and work flawlessly.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 4: SELECTED PROJECTS (HOME PAGE SHOWCASE) */}
      <section className="relative z-20 py-24 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto w-full bg-bg-sand">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-brand-green/10 pb-6 w-full">
          <div>
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-brand-green/60 font-bold block mb-1">
              03 / SELECTED WORK
            </span>
            <h3 className="font-display font-medium text-3xl md:text-5xl text-brand-green tracking-tight">
              Case Studies
            </h3>
          </div>
          <span className="font-sans text-xs tracking-widest text-stone-500/60 uppercase mt-2 md:mt-0 select-none">
            2 Projects Showcased
          </span>
        </div>

        {/* Asymmetrical Layout for two showcase projects */}
        <div className="w-full flex flex-col gap-28 md:gap-36 select-text">
          
          {/* Project 01: Frenix.sh */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start w-full">
            {/* Screenshot preview */}
            <TransitionLink 
              href="/work#project-01"
              className="w-full md:w-3/5 overflow-hidden rounded-2xl border border-brand-green/10 bg-[#F1EFEA]/40 backdrop-blur-sm p-3 group cursor-pointer shadow-md transform transition-all duration-500 hover:scale-[1.02] hover:border-brand-green/20 hover:shadow-lg block"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-stone-100">
                <img 
                  src="/image.png" 
                  alt="Frenix.sh dashboard mockup"
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out"
                />
              </div>
            </TransitionLink>
            
            {/* Details */}
            <div className="w-full md:w-2/5 flex flex-col pt-2">
              <span className="font-display text-4xl md:text-5xl font-bold text-brand-green/20 mb-3 select-none">
                01
              </span>
              <TransitionLink href="/work#project-01" className="group/title block mb-1">
                <h4 className="font-display text-2xl md:text-3xl font-bold text-brand-green tracking-tight select-none group-hover/title:text-emerald-800 transition-colors duration-300">
                  Frenix.sh <span className="inline-block transform group-hover/title:translate-x-1 transition-transform duration-200 text-lg md:text-xl font-light">↗</span>
                </h4>
              </TransitionLink>
              <span className="font-sans text-[10px] md:text-xs font-semibold tracking-wider text-stone-500/70 uppercase mb-4 select-none">
                AI Model Gateway & proxy router
              </span>
              <p className="font-sans text-xs md:text-sm leading-relaxed text-stone-600 mb-6">
                A developer-first, secure gateway platform built to manage and optimize LLM route connections. Designed to proxy high-throughput, exclusive model streams (like the "Uttam Vara" models) with micro-second latency.
              </p>
              <div className="flex flex-wrap gap-2 select-none">
                {["TypeScript", "NextJS", "Tailwind"].map((t) => (
                  <span key={t} className="inline-block border border-brand-green/10 bg-brand-green/5 px-3 py-1 rounded-full text-[9px] uppercase tracking-wider text-brand-green font-bold">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Project 02: filybase */}
          <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-16 items-start w-full">
            {/* Screenshot preview */}
            <TransitionLink 
              href="/work#project-02"
              className="w-full md:w-3/5 overflow-hidden rounded-2xl border border-brand-green/10 bg-[#F1EFEA]/40 backdrop-blur-sm p-3 group cursor-pointer shadow-md transform transition-all duration-500 hover:scale-[1.02] hover:border-brand-green/20 hover:shadow-lg block"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-stone-100">
                <img 
                  src="/filybase.png" 
                  alt="filybase database dashboard"
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out"
                />
              </div>
            </TransitionLink>
            
            {/* Details */}
            <div className="w-full md:w-2/5 flex flex-col pt-2">
              <span className="font-display text-4xl md:text-5xl font-bold text-brand-green/20 mb-3 select-none">
                02
              </span>
              <TransitionLink href="/work#project-02" className="group/title block mb-1">
                <h4 className="font-display text-2xl md:text-3xl font-bold text-brand-green tracking-tight select-none group-hover/title:text-emerald-800 transition-colors duration-300">
                  filybase <span className="inline-block transform group-hover/title:translate-x-1 transition-transform duration-200 text-lg md:text-xl font-light">↗</span>
                </h4>
              </TransitionLink>
              <span className="font-sans text-[10px] md:text-xs font-semibold tracking-wider text-stone-500/70 uppercase mb-4 select-none">
                Decentralized File Storage & Asset CDN
              </span>
              <p className="font-sans text-xs md:text-sm leading-relaxed text-stone-600 mb-6">
                A serverless object storage engine engineered for modern web apps. Integrates secure blob uploads, dynamic file compression, fast edge delivery networks, and granular bucket key access control.
              </p>
              <div className="flex flex-wrap gap-2 select-none">
                {["TypeScript", "Prisma", "Postgres", "Tailwind"].map((t) => (
                  <span key={t} className="inline-block border border-brand-green/10 bg-brand-green/5 px-3 py-1 rounded-full text-[9px] uppercase tracking-wider text-brand-green font-bold">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* C. Redirect Button to Full Work Page */}
        <div className="mt-24 flex justify-center w-full select-none">
          <TransitionLink 
            href="/work"
            className="inline-flex items-center gap-3 border border-brand-green/30 bg-[#F1EFEA]/80 backdrop-blur-md px-8 py-3.5 rounded-full text-[10px] font-bold uppercase tracking-[0.25em] text-brand-green hover:bg-brand-green hover:text-bg-sand transition-all duration-300 transform hover:scale-105 shadow-md active:scale-95 cursor-pointer"
          >
            <span>Show Complete Work</span>
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="transform group-hover:translate-x-1 transition-transform duration-200"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </TransitionLink>
        </div>

      </section>

      {/* SECTION 5: CONTACT (NEW) */}
      <section id="contact" className="relative z-20 py-24 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto w-full bg-bg-sand scroll-mt-24">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-brand-green/10 pb-6 w-full">
          <div>
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-brand-green/60 font-bold block mb-1">
              04 / CONTACT
            </span>
            <h3 className="font-display font-medium text-3xl md:text-5xl text-brand-green tracking-tight">
              Get In Touch
            </h3>
          </div>
          <span className="font-sans text-xs tracking-widest text-stone-500/60 uppercase mt-2 md:mt-0 select-none">
            Let's build something great
          </span>
        </div>

        {/* High-Impact CTA Container */}
        <div className="w-full border border-brand-green/15 bg-[#F1EFEA]/60 backdrop-blur-md p-8 md:p-16 rounded-3xl shadow-sm text-center flex flex-col items-center justify-center gap-6 transition-all duration-300 hover:border-brand-green/20 hover:shadow-md max-w-4xl mx-auto">
          
          <h4 className="font-display font-medium text-4xl md:text-6xl text-brand-green tracking-tight italic">
            Let's work together
          </h4>
          
          <p className="font-sans text-stone-600 text-sm md:text-base max-w-xl leading-relaxed">
            I'm always looking for new projects and collaborations. If you have a project in mind, or just want to say hello, please get in touch.
          </p>

          <div className="mt-4 flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            {/* Email Button */}
            <a 
              href="mailto:ghg64272@gmail.com"
              className="group relative inline-flex items-center gap-3 border border-brand-green bg-brand-green px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-bg-sand hover:bg-[#203022]/90 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md cursor-pointer"
            >
              <svg 
                width="16" 
                height="16" 
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

        {/* Small footer credit inside section */}
        <div className="mt-20 pt-8 border-t border-brand-green/5 text-center md:hidden">
          <span className="text-stone-400 font-sans text-[10px] uppercase tracking-widest select-none">
            © 2026 Hiren Ahlawat — All rights reserved
          </span>
        </div>

      </section>

    </main>
  );
}
