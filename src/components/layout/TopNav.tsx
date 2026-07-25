"use client";

import { usePathname } from "next/navigation";
import {
  TopNav as TopNavBar,
  TopNavHeading,
  TopNavItem,
} from "@astryxdesign/core/TopNav";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function TopNav() {
  const pathname = usePathname();

  return (
    <TopNavBar
      heading={
        <TopNavHeading heading="Aziz Riza" headingHref="/" />
      }
      startContent={links.map(({ href, label }) => (
        <TopNavItem
          key={href}
          label={label}
          href={href}
          isSelected={pathname === href}
        />
      ))}
    />
  );
}
