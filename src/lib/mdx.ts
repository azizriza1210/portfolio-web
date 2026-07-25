import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import matter from "gray-matter";

const contentDir = join(process.cwd(), "src", "content");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
}

export interface Post {
  meta: PostMeta;
  content: string;
}

function readMdxFiles(dir: string): Post[] {
  const files = readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  return files.map((file) => {
    const raw = readFileSync(join(dir, file), "utf-8");
    const { data, content } = matter(raw);
    return {
      meta: {
        slug: file.replace(/\.mdx$/, ""),
        title: data.title as string,
        date: data.date as string,
        description: data.description as string,
        tags: data.tags as string[] | undefined,
      },
      content,
    };
  });
}

export function getBlogPosts(): Post[] {
  return readMdxFiles(join(contentDir, "blog")).sort(
    (a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
  );
}

export function getBlogPost(slug: string): Post | undefined {
  return getBlogPosts().find((p) => p.meta.slug === slug);
}

export function getProjectPosts(): Post[] {
  return readMdxFiles(join(contentDir, "projects"));
}

export function getProjectPost(slug: string): Post | undefined {
  return getProjectPosts().find((p) => p.meta.slug === slug);
}
