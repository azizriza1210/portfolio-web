import { notFound } from "next/navigation";
import Link from "next/link";
import { VStack } from "@astryxdesign/core/Layout";
import { Heading, Text } from "@astryxdesign/core/Text";
import { Token } from "@astryxdesign/core/Token";
import { Section } from "@astryxdesign/core/Section";
import { HStack } from "@astryxdesign/core/Layout";
import { getProjectPost, getProjectPosts } from "@/lib/mdx";
import { compileMDX } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx/components";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getProjectPosts().map((post) => ({ slug: post.meta.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectPost(slug);

  if (!project) {
    notFound();
  }

  const { content } = await compileMDX({
    source: project.content,
    components: mdxComponents,
  });

  return (
    <Section>
      <article className="max-w-3xl mx-auto px-4">
        <VStack gap={6}>
          <Link href="/projects" className="text-secondary hover:text-primary text-sm">
            &larr; All projects
          </Link>
          <VStack gap={2}>
            <Heading level={1}>
              {project.meta.title}
            </Heading>
            <Text type="body" color="secondary">
              {project.meta.description}
            </Text>
            {project.meta.tags && project.meta.tags.length > 0 && (
              <HStack gap={1.5}>
                {project.meta.tags.map((tag) => (
                  <Token key={tag} label={tag} color="gray" />
                ))}
              </HStack>
            )}
          </VStack>
          <div className="prose">{content}</div>
        </VStack>
      </article>
    </Section>
  );
}
