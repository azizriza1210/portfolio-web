import { VStack } from "@astryxdesign/core/Layout";
import { Heading, Text } from "@astryxdesign/core/Text";
import { Section } from "@astryxdesign/core/Section";
import { Divider } from "@astryxdesign/core/Divider";
import { Card } from "@astryxdesign/core/Card";
import { Button } from "@astryxdesign/core/Button";
import { Token } from "@astryxdesign/core/Token";
import { HStack } from "@astryxdesign/core/Layout";
import { Item } from "@astryxdesign/core/Item";
import { List } from "@astryxdesign/core/List";

const skills = [
  "Python",
  "TypeScript",
  "Next.js",
  "React",
  "LangChain",
  "Pinecone",
  "OpenAI API",
  "FastAPI",
  "Docker",
  "PostgreSQL",
];

const experience = [
  {
    role: "Software Developer",
    company: "Current",
    period: "2024 — Present",
    description:
      "Building AI-powered developer tools and search systems at scale.",
  },
  {
    role: "Backend Engineer",
    company: "Previous",
    period: "2022 — 2024",
    description:
      "Designed and built REST APIs, data pipelines, and microservices handling millions of requests.",
  },
];

export default function AboutPage() {
  return (
    <Section>
      <VStack gap={10} className="max-w-3xl mx-auto px-4">
        <VStack gap={2}>
          <Heading level={1} type="display-3">
            About
          </Heading>
        </VStack>

        <VStack gap={4}>
          <Text type="body" color="secondary">
            I&apos;m a software developer passionate about the intersection of
            search, retrieval, and large language models. I build systems that
            help people find and understand information — whether it&apos;s
            buried in documents, databases, or unstructured data.
          </Text>
          <Text type="body" color="secondary">
            Currently focused on retrieval-augmented generation, embedding
            models, and building practical AI applications that solve real
            problems.
          </Text>
        </VStack>

        <Divider variant="subtle" />

        <VStack gap={6}>
          <Heading level={2}>
            Experience
          </Heading>
          <List hasDividers>
            {experience.map((exp, i) => (
              <Item
                key={i}
                label={exp.role}
                description={`${exp.company} · ${exp.period} — ${exp.description}`}
              />
            ))}
          </List>
        </VStack>

        <Divider variant="subtle" />

        <VStack gap={6}>
          <Heading level={2}>
            Skills &amp; Tools
          </Heading>
          <HStack gap={2} className="flex-wrap">
            {skills.map((skill) => (
              <Token key={skill} label={skill} color="gray" />
            ))}
          </HStack>
        </VStack>

        <Divider variant="subtle" />

        <Card padding={5}>
          <VStack gap={4}>
            <VStack gap={1}>
              <Heading level={3}>
                Resume
              </Heading>
              <Text type="supporting" color="secondary">
                Download my full CV in PDF format.
              </Text>
            </VStack>
            <Button
              label="Download Resume"
              variant="primary"
              href="/resume.pdf"
              target="_blank"
            />
          </VStack>
        </Card>
      </VStack>
    </Section>
  );
}
