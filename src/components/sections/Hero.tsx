"use client";

import Link from "next/link";
import { SpringDiv } from "@/components/motion/SpringDiv";

export function Hero() {
  return (
    <SpringDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-20 sm:py-28 px-4 sm:px-6"
    >
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
          Mohammad Aziz Riza
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-muted max-w-xl">
          Software developer building tools at the intersection of search,
          retrieval, and language models.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            View projects
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-5 py-2.5 rounded-lg border border-border text-sm font-medium hover:bg-foreground/5 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </SpringDiv>
  );
}
