import { VStack, HStack } from "@astryxdesign/core/Layout";
import { Text } from "@astryxdesign/core/Text";
import { Link } from "@astryxdesign/core/Link";
import { Divider } from "@astryxdesign/core/Divider";

const socials = [
  { href: "https://github.com/azizriza1210", label: "GitHub" },
  { href: "https://linkedin.com/in/mohammad-aziz-riza", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer>
      <Divider variant="subtle" />
      <VStack gap={4} className="py-6 px-4">
        <HStack gap={4} hAlign="center">
          {socials.map(({ href, label }) => (
            <Link key={href} href={href} target="_blank" rel="noopener noreferrer">
              {label}
            </Link>
          ))}
        </HStack>
        <Text type="supporting" color="secondary" justify="center">
          &copy; {new Date().getFullYear()} Mohammad Aziz Riza
        </Text>
      </VStack>
    </footer>
  );
}
