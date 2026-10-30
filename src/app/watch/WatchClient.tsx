"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { isAllowedMediaUrl } from "@/lib/media-url";

export type WatchPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  coverImage: string;
};

/**
 * `/watch?p=` (opaque) or `/watch?v=` (legacy) → latest published article
 * with the same query so media plays on that story.
 */
export function WatchClient({ posts }: { posts: WatchPost[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const opaque = searchParams.get("p")?.trim() ?? "";
  const raw = searchParams.get("v")?.trim() ?? "";
  const referer = searchParams.get("r")?.trim() ?? "";
  const validOpaque = opaque.length > 20;
  const validClear = raw.length > 0 && isAllowedMediaUrl(raw);
  const latest = posts[0];

  useEffect(() => {
    if (!latest) return;
    if (!validOpaque && !validClear) return;

    const target = new URL(`/blog/${latest.slug}`, window.location.origin);
    if (validOpaque) {
      target.searchParams.set("p", opaque);
    } else {
      target.searchParams.set("v", raw);
      if (referer) target.searchParams.set("r", referer);
    }
    router.replace(`${target.pathname}${target.search}`);
  }, [validOpaque, validClear, latest, opaque, raw, referer, router]);

  if (!latest) {
    return (
      <div className="site-wrap page-pad">
        <p className="muted">No articles published yet.</p>
      </div>
    );
  }

  if (!validOpaque && !validClear) {
    return (
      <div className="site-wrap page-pad">
        <header className="page-header">
          <p className="eyebrow">Watch</p>
          <h1>Play media</h1>
          <p className="section-intro">
            Handoffs from Nova+ use an opaque token and open on the latest desk
            story.
          </p>
        </header>
      </div>
    );
  }

  return (
    <p className="muted site-wrap page-pad">Opening on the latest story…</p>
  );
}
