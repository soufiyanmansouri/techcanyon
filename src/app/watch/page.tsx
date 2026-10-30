import type { Metadata } from "next";
import { Suspense } from "react";
import { getAllPosts } from "@/lib/posts";
import { WatchClient } from "./WatchClient";

export const metadata: Metadata = {
  title: "Watch",
  description: "Play a public mp4 or m3u8 URL on TechCanyon.",
  robots: { index: false, follow: true },
};

export default function WatchPage() {
  const posts = getAllPosts().map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.categoryMeta?.name ?? post.category,
    coverImage: post.coverImage,
  }));

  return (
    <Suspense fallback={<p className="muted site-wrap page-pad">Loading…</p>}>
      <WatchClient posts={posts} />
    </Suspense>
  );
}
