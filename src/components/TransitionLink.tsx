"use client";

import React from "react";
import { useTransitionContext } from "./TransitionProvider";
import { useLenis } from "lenis/react";

interface TransitionLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

/**
 * TransitionLink Component
 * Custom anchor tag that intercepts standard left-clicks to trigger Barba.js coordinated transitions
 * before invoking Next.js navigation push under the hood.
 */
export default function TransitionLink({ href, children, ...props }: TransitionLinkProps) {
  const { navigate } = useTransitionContext();
  const lenis = useLenis();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Intercept standard left-clicks (no modifiers like cmd/ctrl, and not target="_blank")
    if (
      e.button === 0 &&
      !e.metaKey &&
      !e.ctrlKey &&
      !e.shiftKey &&
      !e.altKey &&
      !props.target
    ) {
      // Determine if this is a hash link pointing to the current page
      const currentPath = typeof window !== "undefined" ? window.location.pathname : "";
      
      // Clean path comparison (removing trailing slashes if any)
      const cleanPath = (p: string) => p.replace(/\/$/, "") || "/";
      
      const isHashOnly = href.startsWith("#");
      const isSamePageHash = isHashOnly || (
        href.includes("#") && 
        cleanPath(href.split("#")[0]) === cleanPath(currentPath)
      );
      
      if (isSamePageHash) {
        e.preventDefault();
        const hash = href.includes("#") ? href.substring(href.indexOf("#")) : "";
        if (hash) {
          lenis?.scrollTo(hash, { duration: 1.2 });
        }
        return;
      }

      e.preventDefault();
      navigate(href);
    }
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
