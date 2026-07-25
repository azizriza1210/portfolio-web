import { VStack } from "@astryxdesign/core/Layout";
import { Heading, Text } from "@astryxdesign/core/Text";
import { ClickableCard } from "@astryxdesign/core/ClickableCard";
import { Timestamp } from "@astryxdesign/core/Timestamp";
import { Token } from "@astryxdesign/core/Token";
import { Section } from "@astryxdesign/core/Section";
import { HStack } from "@astryxdesign/core/Layout";
import { getBlogPosts } from "@/lib/mdx";

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <Section>
      <VStack gap={8} className="max-w-3xl mx-auto px-4">
        <VStack gap={2}>
          <Heading level={1}>
            Blog
          </Heading>
          <Text type="body" color="secondary">
            Thoughts on RAG, search, and building with LLMs.
          </Text>
        </VStack>
        <VStack gap={4}>
          {posts.map((post) => (
            <ClickableCard
              key={post.meta.slug}
              label={post.meta.title}
              href={`/blog/${post.meta.slug}`}
              padding={5}
            >
              <VStack gap={2}>
                <Timestamp value={post.meta.date} format="date" color="secondary" />
                <Text type="body" weight="medium">
                  {post.meta.title}
                </Text>
                <Text type="supporting" color="secondary">
                  {post.meta.description}
                </Text>
                {post.meta.tags && post.meta.tags.length > 0 && (
                  <HStack gap={1.5}>
                    {post.meta.tags.map((tag) => (
                      <Token key={tag} label={tag} color="gray" />
                    ))}
                  </HStack>
                )}
              </VStack>
            </ClickableCard>
          ))}
        </VStack>
      </VStack>
    </Section>
  );
}
