"use client";

import React, { createContext, useContext, useEffect, useState, useTransition, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLenis } from "lenis/react";

type TransitionStatus = "idle" | "leaving" | "entering" | "first-loading";

interface TransitionContextProps {
  status: TransitionStatus;
  navigate: (href: string) => void;
}

const TransitionContext = createContext<TransitionContextProps | undefined>(undefined);

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [status, setStatus] = useState<TransitionStatus>("first-loading");
  const [showWelcome, setShowWelcome] = useState(true);
  const [isPending, startTransition] = useTransition();
  const barbaRef = useRef<any>(null);
  const lastPathnameRef = useRef(pathname);
  const lenis = useLenis();

  // Initialize Barba.js dynamically to avoid SSR evaluation errors (e.g. ReferenceError: Element is not defined)
  useEffect(() => {
    const initBarba = async () => {
      try {
        const { default: b } = await import("@barba/core");
        barbaRef.current = b;
        
        b.init({
          prevent: () => true, // Disable Barba's native PJAX routing to let Next.js handle it
          transitions: [
            {
              name: "vertical-curtain",
              leave() {},
              enter() {}
            }
          ]
        });
      } catch (err) {
        console.error("Failed to initialize Barba.js:", err);
      }
    };

    if (typeof window !== "undefined") {
      initBarba();
    }
  }, []);

  // Handle first load welcome screen with fading text and sliding curtain swipe-up
  useEffect(() => {
    if (typeof window !== "undefined") {
      const showWelcomeTimer = setTimeout(() => {
        setShowWelcome(false);
        
        // Wait for focus-blur exit animation to complete before triggering slide up transition
        const slideTimer = setTimeout(() => {
          setStatus("entering");
          
          const b = barbaRef.current;
          if (b) {
            b.hooks.do("enter", {});
          }

          // Complete the enter transition
          const idleTimer = setTimeout(() => {
            setStatus("idle");
            if (b) {
              b.hooks.do("afterEnter", {});
            }
          }, 700); // Crisp 700ms duration (0.5s faster)

        }, 520); // Wait exactly 520ms for focus-blur exit to finish

      }, 1500); // Show "Welcome to My Portfolio" for 1.5 seconds

      return () => {
        clearTimeout(showWelcomeTimer);
      };
    }
  }, []);

  const navigate = (href: string) => {
    if (status !== "idle" || pathname === href) return;

    const b = barbaRef.current;
    if (b) {
      b.hooks.do("beforeLeave", {});
    }
    
    setStatus("leaving");
    
    if (b) {
      b.hooks.do("leave", {});
    }

    setTimeout(() => {
      if (b) {
        b.hooks.do("afterLeave", {});
      }
      startTransition(() => {
        router.push(href);
      });
    }, 700); // Crisp 700ms duration (0.5s faster)
  };

  // Trigger enter transition ONLY when the pathname actually changes
  useEffect(() => {
    if (pathname !== lastPathnameRef.current) {
      lastPathnameRef.current = pathname;

      if (status === "leaving") {
        const b = barbaRef.current;
        if (b) {
          b.hooks.do("beforeEnter", {});
        }
        
        setStatus("entering");
        
        if (b) {
          b.hooks.do("enter", {});
        }

        const timer = setTimeout(() => {
          setStatus("idle");
          if (b) {
            b.hooks.do("afterEnter", {});
          }
        }, 700); // Crisp 700ms duration (0.5s faster)

        return () => clearTimeout(timer);
      }
    }
  }, [pathname, status]);

  // Handle smooth scroll to hash after transition finishes
  useEffect(() => {
    if (status === "idle" && typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash;
      const timer = setTimeout(() => {
        lenis?.scrollTo(hash, { duration: 1.2, immediate: false });
      }, 150); // a slight delay ensures layout settles completely
      return () => clearTimeout(timer);
    }
  }, [status, lenis]);

  return (
    <TransitionContext.Provider value={{ status, navigate }}>
      {/* Barba.js DOM Wrapper and Container required for successful initialization */}
      <div data-barba="wrapper">
        <div data-barba="container">
          {children}
        </div>
      </div>
      
      {/* Barba.js Vertical Curtain Swipe overlay: comes from down, goes up */}
      <div 
        className={`fixed inset-0 z-[9999] bg-[#203022] pointer-events-none w-full h-full flex flex-col items-center justify-center ${
          status === "first-loading"
            ? "translate-y-0 transition-none"
            : status === "idle" 
            ? "translate-y-full transition-none" 
            : status === "leaving" 
            ? "translate-y-0 transition-transform duration-[700ms]" 
            : "-translate-y-full transition-transform duration-[700ms]"
        }`}
        style={{
          transitionTimingFunction: "cubic-bezier(0.85, 0, 0.15, 1)"
        }}
      >
        {/* Welcome text inside the curtain overlay */}
        <div className="flex flex-col items-center gap-8">
          <div 
            className={`text-bg-sand font-display font-medium text-4xl sm:text-6xl md:text-7xl select-none text-center flex flex-col gap-2 leading-[0.9] ${
              showWelcome ? "animate-focus-blur-enter" : "animate-focus-blur-exit"
            }`}
          >
            <span className="tracking-tight">hiren.</span>
            <span className="tracking-tight opacity-90">ahlawat</span>
          </div>

          {/* Premium Minimalist Progress Loader Bar */}
          <div 
            className={`w-16 h-[1.5px] bg-bg-sand/15 rounded-full overflow-hidden transition-opacity duration-500 ${
              showWelcome ? "opacity-100" : "opacity-0"
            }`}
          >
            <div 
              className="h-full bg-bg-sand rounded-full"
              style={{
                animation: "progressLoader 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards"
              }}
            />
          </div>
        </div>
      </div>
    </TransitionContext.Provider>
  );
}

export function useTransitionContext() {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error("useTransitionContext must be used within a TransitionProvider");
  }
  return context;
}
