import Image from "next/image";
import Link from "next/link";
import { VStack } from "@astryxdesign/core/Layout";
import { Text } from "@astryxdesign/core/Text";
import { Section } from "@astryxdesign/core/Section";

const primarySkills = ["AI Engineering", "RAG Systems"];
const secondarySkills = ["Backend Development", "Data Engineering"];
const techStack = ["Python", "TypeScript", "Next.js", "LangChain", "PostgreSQL"];

export function Hero() {
  return (
    <Section variant="transparent" padding={0} className="overflow-hidden">
      <div className="relative min-h-[calc(100vh-3.5rem)] flex flex-col">
        {/* Background name — massive, behind photo */}
        <div className="absolute inset-0 flex items-start justify-center pointer-events-none select-none pt-4 lg:pt-8 z-0">
          <h1 className="text-[clamp(5rem,16vw,14rem)] font-normal leading-[0.8] tracking-[-0.05em] text-center whitespace-nowrap text-[var(--color-text-primary)] opacity-10">
            AZIZ RIZA
          </h1>
        </div>

        {/* Photo — centered, large, overlapping name */}
        <div className="relative z-10 flex justify-center flex-1 items-center pt-16 lg:pt-24">
          <div className="relative w-56 h-[22rem] lg:w-64 lg:h-[26rem] xl:w-72 xl:h-[30rem]">
            <Image
              src="/me-cutout.png"
              alt="Mohammad Aziz Riza"
              fill
              className="object-contain object-bottom"
              sizes="(max-width: 1024px) 224px, (max-width: 1280px) 256px, 288px"
              priority
            />
          </div>
        </div>

        {/* Bottom content row */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 pb-8 lg:pb-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
          <VStack gap={5}>
            <Text type="body" color="secondary" textWrap="balance" className="max-w-md">
              Hey there! I&apos;m a software developer building retrieval, AI, and backend systems.
            </Text>
            <Link
              href="/contact"
              className="text-sm tracking-[0.15em] uppercase text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
            >
              // Work with me &rarr;
            </Link>
          </VStack>
          <VStack gap={4} className="lg:items-end">
            <VStack gap={1.5} className="lg:items-end">
              {primarySkills.map((skill) => (
                <Text key={skill} type="body" weight="semibold">
                  {skill}
                </Text>
              ))}
            </VStack>
            <VStack gap={1.5} className="lg:items-end">
              {secondarySkills.map((skill) => (
                <Text key={skill} type="body" color="secondary">
                  {skill}
                </Text>
              ))}
            </VStack>
          </VStack>
        </div>

        {/* Tech strip — full-width bottom */}
        <div className="relative z-10 w-full border-t border-[var(--color-border)]">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap justify-center gap-4 lg:gap-8">
            {techStack.map((tech) => (
              <Text key={tech} type="label" color="disabled" className="uppercase tracking-[0.12em] text-xs">
                {tech}
              </Text>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
