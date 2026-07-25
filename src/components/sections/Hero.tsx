import Image from "next/image";
import { VStack, HStack } from "@astryxdesign/core/Layout";
import { Heading, Text } from "@astryxdesign/core/Text";
import { Link } from "@astryxdesign/core/Link";
import { Section } from "@astryxdesign/core/Section";

const primarySkills = [
  "AI Engineering",
  "RAG Systems",
];
const secondarySkills = [
  "Backend Development",
  "Data Engineering",
];

export function Hero() {
  return (
    <Section variant="transparent">
      <div className="relative min-h-[calc(100vh-3.5rem)] flex items-center overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-center py-20 lg:py-0">
          {/* Left column */}
          <VStack gap={6} className="order-2 lg:order-1 z-10">
            <VStack gap={4}>
              <Text type="body" color="secondary" textWrap="balance">
                Hey there! I&apos;m a software developer building retrieval, AI, and backend systems.
              </Text>
            </VStack>
            <Link href="/contact" className="text-sm tracking-wider uppercase">
              // Work with me &rarr;
            </Link>
          </VStack>

          {/* Center column — photo + headline */}
          <div className="order-1 lg:order-2 z-10 flex flex-col items-center relative">
            <Heading
              level={1}
              type="display-1"
              className="text-center leading-none whitespace-nowrap"
            >
              AZIZ
            </Heading>
            <Heading
              level={1}
              type="display-1"
              className="text-center leading-none whitespace-nowrap"
            >
              RIZA
            </Heading>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative w-48 h-64 lg:w-56 lg:h-80">
                <Image
                  src="/me.png"
                  alt="Mohammad Aziz Riza"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 192px, 224px"
                  priority
                />
              </div>
            </div>
            {/* Bottom tech strip */}
            <div className="mt-6 pt-6 border-t border-border w-full flex justify-center gap-6">
              {["Python", "TypeScript", "Next.js", "LangChain", "PostgreSQL"].map(
                (tech) => (
                  <Text key={tech} type="label" color="disabled" className="uppercase tracking-wider text-xs">
                    {tech}
                  </Text>
                )
              )}
            </div>
          </div>

          {/* Right column */}
          <VStack gap={4} className="order-3 z-10 lg:pl-12">
            <VStack gap={1.5}>
              {primarySkills.map((skill) => (
                <Text key={skill} type="body" weight="semibold">
                  {skill}
                </Text>
              ))}
            </VStack>
            <VStack gap={1.5}>
              {secondarySkills.map((skill) => (
                <Text key={skill} type="body" color="secondary">
                  {skill}
                </Text>
              ))}
            </VStack>
          </VStack>
        </div>
      </div>
    </Section>
  );
}
