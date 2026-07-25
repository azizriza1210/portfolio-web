"use client";

import { useReducedMotion, type Transition } from "framer-motion";
import { motion } from "framer-motion";
import type { ComponentPropsWithoutRef } from "react";

function useAppleSpring(): Transition {
  const prefersReduced = useReducedMotion();
  if (prefersReduced ?? false) {
    return { type: "tween", duration: 0 };
  }
  return {
    type: "spring",
    stiffness: 300,
    damping: 30,
    mass: 0.8,
  };
}

type MotionDivProps = ComponentPropsWithoutRef<typeof motion.div>;

export function SpringDiv({
  children,
  className,
  ...props
}: MotionDivProps) {
  const spring = useAppleSpring();
  return (
    <motion.div transition={spring} className={className} {...props}>
      {children}
    </motion.div>
  );
}

type MotionSectionProps = ComponentPropsWithoutRef<typeof motion.section>;

export function SpringSection({
  children,
  className,
  ...props
}: MotionSectionProps) {
  const spring = useAppleSpring();
  return (
    <motion.section transition={spring} className={className} {...props}>
      {children}
    </motion.section>
  );
}
