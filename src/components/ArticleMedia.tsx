"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
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

/**
 * Article hero media.
 * - `?p=` opaque Nova+ handoff → iframe (CDN URL stays off TechCanyon address bar)
 * - `?v=` legacy cleartext URL (manual tests only)
 * - else post front-matter video / cover
 */
export function ArticleMedia({
  title,
  coverImage,
  coverAlt,
  video,
  poster,
}: Props) {
  const searchParams = useSearchParams();
  const opaque = searchParams.get("p")?.trim() ?? "";
  const override = searchParams.get("v")?.trim() ?? "";

  if (opaque) {
    return (
      <ProtectContextMenu>
        <div className="article-player-wrap">
          <DevtoolsRedirect />
          <iframe
            title={title}
            src={novaPlusEmbedPlayUrl(opaque)}
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
    override && isAllowedMediaUrl(override) ? override : video?.trim() || "";

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
