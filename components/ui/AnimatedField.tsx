"use client";

import { ReactNode } from "react";

export function AnimatedDiv({
  inView,
  delay = 0,
  direction = "up",
  children,
  className = "",
}: {
  inView: boolean;
  delay?: number;
  direction?: "up" | "left" | "right";
  children: ReactNode;
  className?: string;
}) {
  const transforms = {
    up: "translateY(22px)",
    left: "translateX(-14px)",
    right: "translateX(14px)",
  };
  return (
    <div
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translate(0)" : transforms[direction],
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
