import Link from "next/link";
import { getBlogPosts } from "@/lib/mdx";

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Blog
        </h1>
        <p className="mt-2 text-muted">
          Thoughts on RAG, search, and building with LLMs.
        </p>
        <div className="mt-10 grid gap-4">
          {posts.map((post) => (
            <Link
              key={post.meta.slug}
              href={`/blog/${post.meta.slug}`}
              className="block p-5 rounded-xl border border-border bg-surface hover:bg-surface/70 transition-colors"
            >
              <time className="text-xs text-muted">{post.meta.date}</time>
              <h2 className="mt-1 font-medium text-foreground">
                {post.meta.title}
              </h2>
              <p className="mt-1 text-sm text-muted">
                {post.meta.description}
              </p>
              {post.meta.tags && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {post.meta.tags.map((tag) => (
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
