import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectPost, getProjectPosts } from "@/lib/mdx";
import { MdxRenderer } from "@/components/ui/MdxRenderer";
import { serialize } from "next-mdx-remote/serialize";

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

  const mdxSource = await serialize(project.content);

  return (
    <div className="py-16 sm:py-20 px-4 sm:px-6">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/projects"
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          &larr; All projects
        </Link>
        <header className="mt-6">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            {project.meta.title}
          </h1>
          <p className="mt-2 text-muted">{project.meta.description}</p>
          {project.meta.tags && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.meta.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-md bg-foreground/5 text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>
        <div className="mt-10">
          <MdxRenderer {...mdxSource} />
        </div>
      </article>
    </div>
  );
}
