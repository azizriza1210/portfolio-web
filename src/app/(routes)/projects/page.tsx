import Link from "next/link";
import { getProjectPosts } from "@/lib/mdx";

export default function ProjectsPage() {
  const projects = getProjectPosts();

  return (
    <div className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Projects
        </h1>
        <p className="mt-2 text-muted">
          Things I&apos;ve built at the intersection of search, retrieval, and
          language models.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.meta.slug}
              href={`/projects/${project.meta.slug}`}
              className="block p-5 rounded-xl border border-border bg-surface hover:bg-surface/70 transition-colors h-full"
            >
              <h2 className="font-medium text-foreground">
                {project.meta.title}
              </h2>
              <p className="mt-1.5 text-sm text-muted line-clamp-2">
                {project.meta.description}
              </p>
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
