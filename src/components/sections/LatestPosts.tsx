import { VStack, HStack } from "@astryxdesign/core/Layout";
import { Heading, Text } from "@astryxdesign/core/Text";
import { ClickableCard } from "@astryxdesign/core/ClickableCard";
import { Timestamp } from "@astryxdesign/core/Timestamp";
import { Section } from "@astryxdesign/core/Section";
import { Link } from "@astryxdesign/core/Link";

const posts = [
  {
    slug: "getting-started-with-rag",
    title: "Getting Started with Retrieval-Augmented Generation",
    date: "2026-07-15",
    description:
      "A practical guide to building your first RAG pipeline from scratch.",
  },
  {
    slug: "chunking-strategies",
    title: "Chunking Strategies for Better Document Retrieval",
    date: "2026-06-28",
    description:
      "How the way you split your documents changes retrieval quality.",
  },
  {
    slug: "evaluating-rag-systems",
    title: "Evaluating RAG Systems: Beyond Accuracy",
    date: "2026-06-10",
    description:
      "Metrics and frameworks for measuring retrieval and generation quality.",
  },
];

export function LatestPosts() {
  return (
    <Section dividers={["top"]}>
      <VStack gap={8} className="max-w-3xl mx-auto px-4">
        <Heading level={2}>
          Latest Posts
        </Heading>
        <VStack gap={4}>
          {posts.map((post) => (
            <ClickableCard
              key={post.slug}
              label={post.title}
              href={`/blog/${post.slug}`}
              padding={5}
            >
              <VStack gap={1.5}>
                <Timestamp value={post.date} format="date" color="secondary" />
                <Text type="body" weight="medium">
                  {post.title}
                </Text>
                <Text type="supporting" color="secondary">
                  {post.description}
                </Text>
              </VStack>
            </ClickableCard>
          ))}
        </VStack>
        <HStack gap={0} className="justify-center">
          <Link href="/blog">
            All posts &rarr;
          </Link>
        </HStack>
      </VStack>
    </Section>
  );
}
