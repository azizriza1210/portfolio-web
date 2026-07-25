import { getBlogPosts } from "@/lib/mdx";

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-domain.vercel.app";

  const blogPosts = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.meta.slug}`,
    lastModified: new Date(post.meta.date),
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/projects`, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    ...blogPosts,
  ];
}
