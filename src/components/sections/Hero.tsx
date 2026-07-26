import Image from "next/image";
import Link from "next/link";
import { Button } from "@astryxdesign/core/Button";
import { Text } from "@astryxdesign/core/Text";
import { Section } from "@astryxdesign/core/Section";
import { HStack, VStack } from "@astryxdesign/core/Layout";

export function Hero() {
  return (
    <Section variant="transparent" padding={0} className="overflow-hidden">
      <div className="relative min-h-[calc(100vh-3.5rem)] flex flex-col">
        {/* Stamp — lime circle top-left of photo */}
        <div className="absolute top-6 left-4 lg:left-12 z-20 pointer-events-none">
          <div className="w-12 h-12 rounded-full border-2 border-[var(--color-accent)] flex items-center justify-center">
            <span className="text-[var(--color-accent)] text-xs font-bold tracking-widest">AR</span>
          </div>
        </div>

        {/* Hand-drawn arrow — left of photo */}
        <svg
          className="absolute top-1/3 left-2 lg:left-8 w-16 h-24 z-20 pointer-events-none opacity-60"
          viewBox="0 0 60 100"
          fill="none"
          stroke="var(--color-text-secondary)"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M50 10 Q15 20 20 50 Q25 75 45 80" />
          <path d="M40 70 L45 80 L35 85" />
        </svg>

        {/* Main grid */}
        <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-0 items-center max-w-6xl mx-auto w-full px-4 lg:px-8 py-12">
          {/* Left: portrait (40%) */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-56 h-[22rem] sm:w-64 sm:h-[26rem] lg:w-72 lg:h-[30rem]">
              {/* Ring behind photo */}
              <div className="absolute inset-0 rounded-full border border-[var(--color-border-emphasized)] opacity-30 scale-110" />
              <Image
                src="/me-cutout.png"
                alt="Mohammad Aziz Riza"
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 1024px) 224px, 256px"
                priority
              />
            </div>
          </div>

          {/* Right: content (60%) */}
          <div className="lg:col-span-3 flex flex-col justify-center gap-6 order-1 lg:order-2">
            <Text type="body" color="secondary" className="tracking-wide">
              Hi, I&apos;m Aziz Riza
            </Text>

            {/* Headline */}
            <div className="flex flex-col">
              <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[0.9] tracking-[-0.03em] uppercase text-[var(--color-text-primary)]">
                Full-Stack
              </h1>
              <h1
                className="text-[clamp(2.5rem,7vw,6rem)] font-normal italic leading-[0.9] tracking-[-0.03em] text-[var(--color-accent)]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                &amp; AI Engineer
              </h1>
            </div>

            <Text type="body" color="secondary" textWrap="balance" className="max-w-md">
              Software developer building retrieval, AI, and backend systems — from prototype to production.
            </Text>

            <HStack gap={3} className="mt-2">
              <Link href="/projects">
                <Button label="View Projects" variant="primary" size="lg" />
              </Link>
              <Link href="/contact">
                <Button label="Contact" variant="ghost" size="lg" />
              </Link>
            </HStack>
          </div>
        </div>

        {/* Asterisk — bottom right decorative */}
        <div className="absolute bottom-20 right-4 lg:right-12 z-10 pointer-events-none opacity-20">
          <span
            className="text-[var(--color-text-disabled)] text-[8rem] leading-none"
            style={{ fontWeight: 200 }}
          >
            ✳
          </span>
        </div>

        {/* Tech strip — full-width bottom */}
        <div className="relative z-10 w-full border-t border-[var(--color-border)]">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap justify-center gap-4 lg:gap-8">
            {["Python", "TypeScript", "Next.js", "LangChain", "PostgreSQL"].map((tech) => (
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
