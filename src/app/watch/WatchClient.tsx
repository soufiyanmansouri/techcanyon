"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { BlogVideoPlayer } from "@/components/BlogVideoPlayer";

export type WatchPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  coverImage: string;
};

function isAllowedMediaUrl(raw: string): boolean {
  try {
    const url = new URL(raw);
    if (url.protocol !== "https:" && url.protocol !== "http:") return false;
    const path = url.pathname.toLowerCase();
    return (
      path.endsWith(".mp4") ||
      path.endsWith(".webm") ||
      path.endsWith(".m3u8") ||
      path.includes(".m3u8") ||
      url.search.toLowerCase().includes("m3u8") ||
      url.search.toLowerCase().includes("mp4")
    );
  } catch {
    return false;
  }
}

export function WatchClient({ posts }: { posts: WatchPost[] }) {
  const searchParams = useSearchParams();
  const raw = searchParams.get("v")?.trim() ?? "";
  const valid = raw.length > 0 && isAllowedMediaUrl(raw);

  const companion = useMemo(() => {
    if (posts.length === 0) return null;
    const seed = raw || String(Date.now());
    let hash = 0;
    for (let i = 0; i < seed.length; i += 1) {
      hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
    }
    return posts[hash % posts.length];
  }, [posts, raw]);

  return (
    <div className="site-wrap page-pad">
      <header className="page-header">
        <p className="eyebrow">Watch</p>
        <h1>Play media</h1>
        <p className="section-intro">
          Pass a public mp4 or m3u8 URL as{" "}
          <code className="inline-code">?v=</code> — works on this static site
          in the browser. Playback still depends on the source allowing it.
        </p>
      </header>

      {valid ? (
        <BlogVideoPlayer src={raw} title="External media" />
      ) : (
        <div className="rail-card" style={{ marginBottom: "1.5rem" }}>
          <p className="rail-card-title">No playable URL</p>
          <p className="excerpt">
            Open a link like{" "}
            <code className="inline-code">
              /watch?v=https://example.com/video.mp4
            </code>
          </p>
        </div>
      )}

      {companion ? (
        <aside className="related">
          <p className="eyebrow">From the desk</p>
          <h2 className="section-title">{companion.title}</h2>
          <p className="section-intro">{companion.excerpt}</p>
          <Link href={`/blog/${companion.slug}`} className="text-link">
            Read this article →
          </Link>
        </aside>
      ) : null}
    </div>
  );
}
