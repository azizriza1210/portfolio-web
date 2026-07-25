import { VStack, HStack } from "@astryxdesign/core/Layout";
import { Heading, Text } from "@astryxdesign/core/Text";
import { ClickableCard } from "@astryxdesign/core/ClickableCard";
import { Token } from "@astryxdesign/core/Token";
import { Section } from "@astryxdesign/core/Section";
import { Link } from "@astryxdesign/core/Link";
import { Grid } from "@astryxdesign/core/Grid";

const featured = [
  {
    slug: "rag-chatbot",
    title: "RAG Chatbot",
    description:
      "Retrieval-augmented chat over custom documents using LangChain and Pinecone.",
    tags: ["Python", "LangChain", "Pinecone"],
  },
  {
    slug: "pdf-qa-pipeline",
    title: "PDF Q&A Pipeline",
    description:
      "Ingest PDFs, chunk, embed, and query with cited sources.",
    tags: ["Python", "FastAPI", "OpenAI"],
  },
  {
    slug: "multimodal-rag",
    title: "Multi-modal RAG",
    description:
      "Text and image retrieval for mixed-media knowledge bases.",
    tags: ["Python", "CLIP", "ChromaDB"],
  },
];

export function FeaturedProjects() {
  return (
    <Section dividers={["top"]}>
      <VStack gap={8} className="max-w-3xl mx-auto px-4">
        <Heading level={2}>
          Featured Projects
        </Heading>
        <Grid columns={3} gap={4}>
          {featured.map((project) => (
            <ClickableCard
              key={project.slug}
              label={project.title}
              href={`/projects/${project.slug}`}
              padding={5}
            >
              <VStack gap={3}>
                <VStack gap={1.5}>
                  <Text type="body" weight="medium">
                    {project.title}
                  </Text>
                  <Text type="supporting" color="secondary">
                    {project.description}
                  </Text>
                </VStack>
                <HStack gap={1.5}>
                  {project.tags.map((tag) => (
                    <Token key={tag} label={tag} color="gray" />
                  ))}
                </HStack>
              </VStack>
            </ClickableCard>
          ))}
        </Grid>
        <HStack gap={0} className="justify-center">
          <Link href="/projects">
            All projects &rarr;
          </Link>
        </HStack>
      </VStack>
    </Section>
  );
}
