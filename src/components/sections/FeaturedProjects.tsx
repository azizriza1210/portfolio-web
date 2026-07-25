"use client";

import Link from "next/link";
import { SpringDiv } from "@/components/motion/SpringDiv";

const featured = [
  {
    slug: "rag-chatbot",
    title: "RAG Chatbot",
    description:
      "Retrieval-augmented chat over custom documents using LangChain and Pinecone.",
    tags: ["Python", "LangChain", "Pinecone"],
  },
  {
    slug: "pdf-qa-pipeline",
    title: "PDF Q&A Pipeline",
    description:
      "Ingest PDFs, chunk, embed, and query with cited sources.",
    tags: ["Python", "FastAPI", "OpenAI"],
  },
  {
    slug: "multimodal-rag",
    title: "Multi-modal RAG",
    description:
      "Text and image retrieval for mixed-media knowledge bases.",
    tags: ["Python", "CLIP", "ChromaDB"],
  },
];

export function FeaturedProjects() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <SpringDiv
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Featured Projects
          </h2>
        </SpringDiv>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {featured.map((project, i) => (
            <SpringDiv
              key={project.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="block p-5 rounded-xl border border-border bg-surface hover:bg-surface/70 transition-colors h-full"
              >
                <h3 className="font-medium text-foreground">{project.title}</h3>
                <p className="mt-1.5 text-sm text-muted line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-foreground/5 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </SpringDiv>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/projects"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            All projects &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
