"use client";

import {
  MediaPlayer,
  MediaProvider,
  Poster,
  type PlayerSrc,
} from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

type Props = {
  src: string;
  poster?: string;
  title?: string;
  /** Set true only when the media host sends CORS headers. */
  cors?: boolean;
};

function toPlayerSrc(src: string): PlayerSrc {
  const lower = src.toLowerCase();
  if (lower.includes(".m3u8")) {
    return { src, type: "application/x-mpegurl" };
  }
  if (lower.includes(".mp4")) {
    return { src, type: "video/mp4" };
  }
  if (lower.includes(".webm")) {
    return { src, type: "video/webm" };
  }
  return src;
}

export function BlogVideoPlayer({ src, poster, title, cors = false }: Props) {
  return (
    <div className="blog-player">
      <MediaPlayer
        title={title ?? "Article video"}
        src={toPlayerSrc(src)}
        playsInline
        crossOrigin={cors || undefined}
      >
        <MediaProvider>
          {poster ? (
            <Poster className="vds-poster" src={poster} alt="" />
          ) : null}
        </MediaProvider>
        <DefaultVideoLayout icons={defaultLayoutIcons} />
      </MediaPlayer>
    </div>
  );
}
