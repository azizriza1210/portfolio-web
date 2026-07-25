import { VStack, HStack } from "@astryxdesign/core/Layout";
import { Heading, Text } from "@astryxdesign/core/Text";
import { Button } from "@astryxdesign/core/Button";
import { Section } from "@astryxdesign/core/Section";

export function Hero() {
  return (
    <Section paddingBlock={10}>
      <VStack gap={6} className="max-w-3xl mx-auto px-4">
        <VStack gap={3}>
          <Heading level={1} type="display-2" textWrap="balance">
            Mohammad Aziz Riza
          </Heading>
          <Text type="body" color="secondary" textWrap="balance">
            Software developer building tools at the intersection of search,
            retrieval, and language models.
          </Text>
        </VStack>
        <HStack gap={3}>
          <Button label="View projects" variant="primary" href="/projects" />
          <Button label="Get in touch" variant="secondary" href="/contact" />
        </HStack>
      </VStack>
    </Section>
  );
}
