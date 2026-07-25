import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { LatestPosts } from "@/components/sections/LatestPosts";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <LatestPosts />
    </>
  );
}
