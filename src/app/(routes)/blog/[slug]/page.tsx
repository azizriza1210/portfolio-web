import { notFound } from "next/navigation";
import Link from "next/link";
import { VStack } from "@astryxdesign/core/Layout";
import { Heading, Text } from "@astryxdesign/core/Text";
import { Timestamp } from "@astryxdesign/core/Timestamp";
import { Token } from "@astryxdesign/core/Token";
import { Section } from "@astryxdesign/core/Section";
import { HStack } from "@astryxdesign/core/Layout";
import { getBlogPost, getBlogPosts } from "@/lib/mdx";
import { compileMDX } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx/components";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.meta.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const { content } = await compileMDX({
    source: post.content,
    components: mdxComponents,
  });

  const allPosts = getBlogPosts();
  const currentIndex = allPosts.findIndex((p) => p.meta.slug === slug);
  const prev = allPosts[currentIndex + 1] ?? null;
  const next = allPosts[currentIndex - 1] ?? null;

  return (
    <Section>
      <article className="max-w-3xl mx-auto px-4">
        <VStack gap={6}>
          <Link href="/blog" className="text-secondary hover:text-primary text-sm">
            &larr; All posts
          </Link>
          <VStack gap={2}>
            <Timestamp value={post.meta.date} format="date" color="secondary" />
            <Heading level={1}>
              {post.meta.title}
            </Heading>
            {post.meta.tags && post.meta.tags.length > 0 && (
              <HStack gap={1.5}>
                {post.meta.tags.map((tag) => (
                  <Token key={tag} label={tag} color="gray" />
                ))}
              </HStack>
            )}
          </VStack>
          <div className="prose">{content}</div>
          <HStack className="pt-8 border-t border-border justify-between text-sm">
            <span>
              {prev ? (
                <Link href={`/blog/${prev.meta.slug}`} className="text-secondary hover:text-primary">
                  &larr; {prev.meta.title}
                </Link>
              ) : null}
            </span>
            <span>
              {next ? (
                <Link href={`/blog/${next.meta.slug}`} className="text-secondary hover:text-primary">
                  {next.meta.title} &rarr;
                </Link>
              ) : null}
            </span>
          </HStack>
        </VStack>
      </article>
    </Section>
  );
}
