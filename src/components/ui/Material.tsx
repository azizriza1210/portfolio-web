"use client";

import { Material as MaterialBase } from "../motion/hooks";
import type { ComponentPropsWithoutRef } from "react";

export function Material({
  children,
  className = "",
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <MaterialBase className={className} {...props}>
      {children}
    </MaterialBase>
  );
}
