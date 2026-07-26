"use client";

import { Theme } from "@astryxdesign/core";
import { defineTheme } from "@astryxdesign/core/theme";
import { AppShell } from "@astryxdesign/core/AppShell";
import { neutralTheme } from "@astryxdesign/theme-neutral";
import { TopNav } from "@/components/layout/TopNav";
import { Footer } from "@/components/layout/Footer";

const portfolioTheme = defineTheme({
  name: "portfolio-dark",
  extends: neutralTheme,
  tokens: {
    "--color-accent": "#A3E635",
    "--color-accent-muted": "#A3E63533",
    "--color-on-accent": "#0A1317",
    "--color-text-accent": "#A3E635",
    "--color-icon-accent": "#A3E635",
  },
});

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <Theme theme={portfolioTheme} mode="dark">
      <AppShell
        height="auto"
        topNav={<TopNav />}
        mobileNav={{ breakpoint: "sm" }}
      >
        {children}
        <Footer />
      </AppShell>
    </Theme>
  );
}
