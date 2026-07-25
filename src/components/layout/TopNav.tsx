"use client";

import { usePathname } from "next/navigation";
import {
  TopNav as TopNavBar,
  TopNavHeading,
  TopNavItem,
} from "@astryxdesign/core/TopNav";
import { StatusDot } from "@astryxdesign/core/StatusDot";
import { Text } from "@astryxdesign/core/Text";
import { HStack } from "@astryxdesign/core/Layout";

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
        <TopNavHeading heading="AZIZ" headingHref="/" />
      }
      centerContent={links.map(({ href, label }) => (
        <TopNavItem
          key={href}
          label={label}
          href={href}
          isSelected={pathname === href}
        />
      ))}
      endContent={
        <HStack gap={1.5} className="items-center">
          <StatusDot variant="success" label="Available" isPulsing />
          <Text type="label" color="secondary">Open to work</Text>
        </HStack>
      }
    />
  );
}
