import React from "react";
import Image from "next/image";

interface InlineBadgeProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  aspectRatio?: "avatar" | "device";
}

/**
 * InlineBadge Component
 * Renders an inline media badge (avatar pill or device preview)
 * to be nested fluidly directly inside a text headline block.
 */
export default function InlineBadge({
  src,
  alt,
  width = 90,
  height = 54,
  className = "",
  aspectRatio = "avatar"
}: InlineBadgeProps) {
  // Styles depending on whether it's a rounded avatar pill or a device screenshot
  const borderStyle = aspectRatio === "avatar" 
    ? "rounded-[2rem] border-2 border-stone-200/60 shadow-sm" 
    : "rounded-[1.2rem] border border-stone-300/40 shadow-md";

  return (
    <span 
      className={`inline-flex items-center justify-center align-middle mx-2 overflow-hidden transition-transform duration-300 ease-out hover:scale-108 active:scale-95 cursor-pointer select-none ${borderStyle} ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full object-cover pointer-events-none"
        priority
      />
    </span>
  );
}
