"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BlogVideoPlayer } from "@/components/BlogVideoPlayer";
import { DevtoolsRedirect } from "@/components/DevtoolsRedirect";
import { ProtectContextMenu } from "@/components/ProtectContextMenu";
import { isAllowedMediaUrl } from "@/lib/media-url";
import { novaPlusEmbedPlayUrl } from "@/lib/novaplus-embed";

type Props = {
  title: string;
  coverImage: string;
  coverAlt: string;
  /** Front-matter video when no handoff override. */
  video?: string;
  poster?: string;
};

type Handoff = {
  opaque: string;
  override: string;
};

/**
 * Article hero media.
 * - `?p=` opaque Nova+ handoff → iframe (CDN URL stays off TechCanyon address bar)
 * - `?v=` legacy cleartext URL (manual tests only)
 * - else post front-matter video / cover
 *
 * Query overrides are read after mount so SSR HTML matches the first client paint.
 */
export function ArticleMedia({
  title,
  coverImage,
  coverAlt,
  video,
  poster,
}: Props) {
  const [handoff, setHandoff] = useState<Handoff>({ opaque: "", override: "" });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setHandoff({
      opaque: params.get("p")?.trim() ?? "",
      override: params.get("v")?.trim() ?? "",
    });
  }, []);

  if (handoff.opaque) {
    return (
      <ProtectContextMenu>
        <div className="article-player-wrap">
          <DevtoolsRedirect />
          <iframe
            title={title}
            src={novaPlusEmbedPlayUrl(handoff.opaque)}
            className="blog-player-frame"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </ProtectContextMenu>
    );
  }

  const playSrc =
    handoff.override && isAllowedMediaUrl(handoff.override)
      ? handoff.override
      : video?.trim() || "";

  if (playSrc) {
    return (
      <ProtectContextMenu>
        <div className="article-player-wrap">
          <DevtoolsRedirect />
          <BlogVideoPlayer
            src={playSrc}
            poster={poster || coverImage}
            title={title}
          />
        </div>
      </ProtectContextMenu>
    );
  }

  return (
    <div className="article-cover cinematic">
      <Image
        src={coverImage}
        alt={coverAlt}
        fill
        priority
        sizes="100vw"
        className="zoom-img"
      />
    </div>
  );
}
