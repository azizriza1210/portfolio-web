import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPost, getBlogPosts } from "@/lib/mdx";
import { MdxRenderer } from "@/components/ui/MdxRenderer";
import { serialize } from "next-mdx-remote/serialize";

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

  const mdxSource = await serialize(post.content);

  const allPosts = getBlogPosts();
  const currentIndex = allPosts.findIndex((p) => p.meta.slug === slug);
  const prev = allPosts[currentIndex + 1] ?? null;
  const next = allPosts[currentIndex - 1] ?? null;

  return (
    <div className="py-16 sm:py-20 px-4 sm:px-6">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          &larr; All posts
        </Link>
        <header className="mt-6">
          <time className="text-sm text-muted">{post.meta.date}</time>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
            {post.meta.title}
          </h1>
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
        </header>
        <div className="mt-10">
          <MdxRenderer {...mdxSource} />
        </div>
        <nav className="mt-16 pt-8 border-t border-border/50 flex justify-between text-sm">
          {prev ? (
            <Link
              href={`/blog/${prev.meta.slug}`}
              className="text-muted hover:text-foreground transition-colors"
            >
              &larr; {prev.meta.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/blog/${next.meta.slug}`}
              className="text-muted hover:text-foreground transition-colors text-right"
            >
              {next.meta.title} &rarr;
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </article>
    </div>
  );
}
