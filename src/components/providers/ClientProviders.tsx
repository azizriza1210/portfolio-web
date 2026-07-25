"use client";

import { Theme } from "@astryxdesign/core";
import { AppShell } from "@astryxdesign/core/AppShell";
import { neutralTheme } from "@astryxdesign/theme-neutral";
import { TopNav } from "@/components/layout/TopNav";
import { Footer } from "@/components/layout/Footer";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <Theme theme={neutralTheme} mode="light">
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
