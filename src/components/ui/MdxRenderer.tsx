"use client";

import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote";

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
        <code
          className="px-1.5 py-0.5 rounded-md bg-foreground/10 text-sm font-mono"
          {...props}
        >
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
    <a
      href={href}
      className="text-accent underline underline-offset-2 hover:no-underline"
      {...props}
    />
  ),
  blockquote: (props: React.HTMLProps<HTMLQuoteElement>) => (
    <blockquote
      className="mb-4 border-l-2 border-accent pl-4 italic text-muted"
      {...props}
    />
  ),
};

export function MdxRenderer(props: MDXRemoteProps) {
  return <MDXRemote {...props} components={components} />;
}
