"use client";

import React from "react";

type FloatingHexProps = {
  size: number;
  color: string;
  className?: string;
};

export default function FloatingHex({
  size,
  color,
  className = "",
}: FloatingHexProps) {
  const w = size * 0.866;

  return (
    <div
      className={`floating-hex ${className}`}
      style={{
        width: w,
        height: size,
        willChange: "transform",
      }}
    >
      <svg
        width={w}
        height={size}
        viewBox={`0 0 ${w} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points={`${w / 2},0 
                  ${w},${size * 0.25} 
                  ${w},${size * 0.75} 
                  ${w / 2},${size} 
                  0,${size * 0.75} 
                  0,${size * 0.25}`}
          fill={color}
        />
      </svg>
    </div>
  );
}
