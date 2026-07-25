"use client";

import React, { type ComponentPropsWithoutRef } from "react";
import { useReducedMotion } from "framer-motion";

export function useAppleMotion() {
  const prefersReduced = useReducedMotion();

  return {
    prefersReduced,
    spring: {
      type: "spring" as const,
      stiffness: prefersReduced ? 0 : 300,
      damping: prefersReduced ? 1 : 30,
      mass: prefersReduced ? 1 : 0.8,
    },
  };
}

export function Material({
  children,
  className = "",
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={`bg-surface/70 backdrop-blur-xl border-b border-border/50 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
