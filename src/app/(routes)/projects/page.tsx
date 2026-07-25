import { VStack } from "@astryxdesign/core/Layout";
import { Heading, Text } from "@astryxdesign/core/Text";
import { ClickableCard } from "@astryxdesign/core/ClickableCard";
import { Token } from "@astryxdesign/core/Token";
import { Section } from "@astryxdesign/core/Section";
import { Grid } from "@astryxdesign/core/Grid";
import { HStack } from "@astryxdesign/core/Layout";
import { getProjectPosts } from "@/lib/mdx";

export default function ProjectsPage() {
  const projects = getProjectPosts();

  return (
    <Section>
      <VStack gap={8} className="max-w-3xl mx-auto px-4">
        <VStack gap={2}>
          <Heading level={1}>
            Projects
          </Heading>
          <Text type="body" color="secondary">
            Things I&apos;ve built at the intersection of search, retrieval, and
            language models.
          </Text>
        </VStack>
        <Grid columns={2} gap={4}>
          {projects.map((project) => (
            <ClickableCard
              key={project.meta.slug}
              label={project.meta.title}
              href={`/projects/${project.meta.slug}`}
              padding={5}
            >
              <VStack gap={3}>
                <VStack gap={1.5}>
                  <Text type="body" weight="medium">
                    {project.meta.title}
                  </Text>
                  <Text type="supporting" color="secondary">
                    {project.meta.description}
                  </Text>
                </VStack>
                {project.meta.tags && project.meta.tags.length > 0 && (
                  <HStack gap={1.5}>
                    {project.meta.tags.map((tag) => (
                      <Token key={tag} label={tag} color="gray" />
                    ))}
                  </HStack>
                )}
              </VStack>
            </ClickableCard>
          ))}
        </Grid>
      </VStack>
    </Section>
  );
}
