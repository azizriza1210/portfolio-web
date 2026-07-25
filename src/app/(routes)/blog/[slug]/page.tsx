import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPost, getBlogPosts } from "@/lib/mdx";
import { compileMDX } from "next-mdx-remote/rsc";

const components = {
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h1 className="mt-10 mb-4 text-3xl font-bold tracking-tight text-foreground" {...props} />
  ),
  h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h2 className="mt-8 mb-3 text-xl font-semibold tracking-tight text-foreground" {...props} />
  ),
  h3: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h3 className="mt-6 mb-2 text-lg font-medium text-foreground" {...props} />
  ),
  p: (props: React.HTMLProps<HTMLParagraphElement>) => (
    <p className="mb-4 leading-relaxed text-muted" {...props} />
  ),
  ul: (props: React.ComponentPropsWithoutRef<"ul">) => (
    <ul className="mb-4 ml-5 list-disc space-y-1 text-muted" {...props} />
  ),
  ol: (props: React.ComponentPropsWithoutRef<"ol">) => (
    <ol className="mb-4 ml-5 list-decimal space-y-1 text-muted" {...props} />
  ),
  li: (props: React.HTMLProps<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  code: ({ className, children, ...props }: React.HTMLProps<HTMLElement>) => {
    const isInline = !className;
    if (isInline) {
      return (
        <code className="px-1.5 py-0.5 rounded-md bg-foreground/10 text-sm font-mono" {...props}>
          {children}
        </code>
      );
    }
    return (
      <code
        className={`block overflow-x-auto rounded-lg bg-foreground/5 p-4 text-sm font-mono ${className}`}
        {...props}
      >
        {children}
      </code>
    );
  },
  pre: (props: React.HTMLProps<HTMLPreElement>) => (
    <pre className="mb-4 overflow-x-auto rounded-lg bg-foreground/5" {...props} />
  ),
  strong: (props: React.HTMLProps<HTMLElement>) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  a: ({ href, ...props }: React.HTMLProps<HTMLAnchorElement>) => (
    <a href={href} className="text-accent underline underline-offset-2 hover:no-underline" {...props} />
  ),
  blockquote: (props: React.HTMLProps<HTMLQuoteElement>) => (
    <blockquote className="mb-4 border-l-2 border-accent pl-4 italic text-muted" {...props} />
  ),
};

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
    components,
  });

  const allPosts = getBlogPosts();
  const currentIndex = allPosts.findIndex((p) => p.meta.slug === slug);
  const prev = allPosts[currentIndex + 1] ?? null;
  const next = allPosts[currentIndex - 1] ?? null;

  return (
    <div className="py-16 sm:py-20 px-4 sm:px-6">
      <article className="mx-auto max-w-3xl">
        <Link href="/blog" className="text-sm text-muted hover:text-foreground transition-colors">
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
                <span key={tag} className="px-2 py-0.5 rounded-md bg-foreground/5 text-xs text-muted">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>
        <div className="mt-10">{content}</div>
        <nav className="mt-16 pt-8 border-t border-border/50 flex justify-between text-sm">
          {prev ? (
            <Link href={`/blog/${prev.meta.slug}`} className="text-muted hover:text-foreground transition-colors">
              &larr; {prev.meta.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/blog/${next.meta.slug}`} className="text-muted hover:text-foreground transition-colors text-right">
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
