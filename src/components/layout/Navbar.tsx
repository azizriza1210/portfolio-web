"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useAppleMotion } from "@/components/motion/hooks";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { spring } = useAppleMotion();

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-surface/70 backdrop-blur-xl border-b border-border/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 flex items-center justify-between h-14">
          <Link
            href="/"
            className="font-semibold text-foreground hover:text-accent transition-colors"
          >
            Aziz Riza
          </Link>

          <div className="hidden sm:flex items-center gap-1">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                  pathname === href
                    ? "bg-foreground/10 text-foreground"
                    : "text-muted hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          <div className="flex sm:hidden items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="w-9 h-9 rounded-lg flex items-center justify-center border border-border bg-surface"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="w-4 h-4"
              >
                {open ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={spring}
            className="sm:hidden bg-surface border-b border-border/50 overflow-hidden"
          >
            <div className="mx-auto max-w-3xl px-4 pb-3 pt-1 flex flex-col gap-0.5">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm transition-colors ${
                    pathname === href
                      ? "bg-foreground/10 text-foreground"
                      : "text-muted hover:text-foreground hover:bg-foreground/5"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
