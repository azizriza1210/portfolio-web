"use client";

import { SpringDiv } from "@/components/motion/SpringDiv";
import Link from "next/link";

const skills = [
  "Python",
  "TypeScript",
  "Next.js",
  "React",
  "LangChain",
  "Pinecone",
  "OpenAI API",
  "FastAPI",
  "Docker",
  "PostgreSQL",
];

const experience = [
  {
    role: "Software Developer",
    company: "Current",
    period: "2024 — Present",
    description:
      "Building AI-powered developer tools and search systems at scale.",
  },
  {
    role: "Backend Engineer",
    company: "Previous",
    period: "2022 — 2024",
    description:
      "Designed and built REST APIs, data pipelines, and microservices handling millions of requests.",
  },
];

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <SpringDiv
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            About
          </h1>
        </SpringDiv>

        <SpringDiv
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-8"
        >
          <p className="text-muted leading-relaxed">
            I&apos;m a software developer passionate about the intersection of
            search, retrieval, and large language models. I build systems that
            help people find and understand information — whether it&apos;s
            buried in documents, databases, or unstructured data.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Currently focused on retrieval-augmented generation, embedding
            models, and building practical AI applications that solve real
            problems.
          </p>
        </SpringDiv>

        <SpringDiv
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16"
        >
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Experience
          </h2>
          <div className="mt-6 space-y-8">
            {experience.map((exp, i) => (
              <div key={i} className="relative pl-6 border-l border-border/50">
                <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-accent -translate-x-1/2" />
                <h3 className="font-medium text-foreground">{exp.role}</h3>
                <p className="text-sm text-muted">
                  {exp.company} &middot; {exp.period}
                </p>
                <p className="mt-1.5 text-sm text-muted leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </SpringDiv>

        <SpringDiv
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16"
        >
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Skills &amp; Tools
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-lg border border-border text-sm text-muted"
              >
                {skill}
              </span>
            ))}
          </div>
        </SpringDiv>

        <SpringDiv
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 pt-8 border-t border-border/50"
        >
          <Link
            href="/resume.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium hover:bg-foreground/5 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="w-4 h-4"
            >
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </Link>
        </SpringDiv>
      </div>
    </div>
  );
}
