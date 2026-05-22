import React from "react";

/**
 * GridLines Component
 * Renders a structured, editorial 5-column vertical blueprint grid
 * that spans the full viewport height.
 */
export default function GridLines() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 flex w-full justify-between px-4 md:px-12 lg:px-24">
      {/* Column 1 Line */}
      <div className="h-full w-[1px] bg-stone-300/20" />
      {/* Column 2 Line */}
      <div className="h-full w-[1px] bg-stone-300/20" />
      {/* Column 3 Line */}
      <div className="h-full w-[1px] bg-stone-300/20" />
      {/* Column 4 Line */}
      <div className="hidden h-full w-[1px] bg-stone-300/20 md:block" />
      {/* Column 5 Line */}
      <div className="hidden h-full w-[1px] bg-stone-300/20 md:block" />
      {/* Column 6 Line */}
      <div className="h-full w-[1px] bg-stone-300/20" />
    </div>
  );
}
