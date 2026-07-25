"use client";

import Link from "next/link";
import { SpringDiv } from "@/components/motion/SpringDiv";

const posts = [
  {
    slug: "getting-started-with-rag",
    title: "Getting Started with Retrieval-Augmented Generation",
    date: "2026-07-15",
    description:
      "A practical guide to building your first RAG pipeline from scratch.",
  },
  {
    slug: "chunking-strategies",
    title: "Chunking Strategies for Better Document Retrieval",
    date: "2026-06-28",
    description:
      "How the way you split your documents changes retrieval quality.",
  },
  {
    slug: "evaluating-rag-systems",
    title: "Evaluating RAG Systems: Beyond Accuracy",
    date: "2026-06-10",
    description:
      "Metrics and frameworks for measuring retrieval and generation quality.",
  },
];

export function LatestPosts() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-border/50">
      <div className="mx-auto max-w-3xl">
        <SpringDiv
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Latest Posts
          </h2>
        </SpringDiv>
        <div className="mt-8 grid gap-4">
          {posts.map((post, i) => (
            <SpringDiv
              key={post.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="block p-5 rounded-xl border border-border bg-surface hover:bg-surface/70 transition-colors"
              >
                <time className="text-xs text-muted">{post.date}</time>
                <h3 className="mt-1 font-medium text-foreground">
                  {post.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{post.description}</p>
              </Link>
            </SpringDiv>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            All posts &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
