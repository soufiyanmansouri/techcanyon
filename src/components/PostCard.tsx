import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/posts";
import { formatPostDate, readingMinutes } from "@/lib/posts";

export function PostCard({
  post,
  layout = "stack",
  index,
}: {
  post: Post;
  layout?: "stack" | "row" | "ranked";
  index?: number;
}) {
  return (
    <article
      className={`post-card ${layout === "row" ? "row" : ""} ${layout === "ranked" ? "ranked" : ""}`}
    >
      {layout === "ranked" && typeof index === "number" ? (
        <span className="rank-num" aria-hidden>
          {String(index + 1).padStart(2, "0")}
        </span>
      ) : null}
      <Link href={`/blog/${post.slug}`} className="post-card-media">
        <Image
          src={post.coverImage}
          alt={post.coverAlt}
          fill
          sizes="(max-width: 720px) 100vw, 420px"
        />
      </Link>
      <div className="post-card-body">
        <p className="eyebrow">
          {post.categoryMeta?.name ?? post.category}
          {post.video ? <span className="video-tag"> · Film</span> : null}
        </p>
        <h3>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="excerpt">{post.excerpt}</p>
        <div className="post-meta-row">
          <time dateTime={post.date}>{formatPostDate(post.date)}</time>
          <span aria-hidden>·</span>
          <span>{readingMinutes(post.content)} min read</span>
        </div>
      </div>
    </article>
  );
}
