import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/posts";

type TileSize = "lg" | "md" | "sm";

const TITLE_CLASS: Record<TileSize, string> = {
  lg: "hero-tile-title hero-tile-title-lg",
  md: "hero-tile-title hero-tile-title-md",
  sm: "hero-tile-title hero-tile-title-sm",
};

function FeaturedTile({
  post,
  size,
  priority = false,
  className = "",
}: {
  post: Post;
  size: TileSize;
  priority?: boolean;
  className?: string;
}) {
  const href = `/blog/${post.slug}`;
  const category = post.categoryMeta?.name ?? post.category;

  return (
    <article className={`hero-tile hero-tile-${size} ${className}`.trim()}>
      <Link href={href} className="hero-tile-media" tabIndex={-1} aria-hidden>
        <Image
          src={post.coverImage}
          alt={post.coverAlt}
          fill
          sizes={
            size === "lg"
              ? "(min-width: 1024px) 50vw, 100vw"
              : size === "md"
                ? "(min-width: 1024px) 50vw, 100vw"
                : "(min-width: 1024px) 25vw, 50vw"
          }
          priority={priority}
          className="hero-tile-img"
        />
      </Link>
      <div className="hero-tile-copy">
        <span className="hero-tile-cat">{category}</span>
        <h2 className={TITLE_CLASS[size]}>
          <Link href={href} className="hero-tile-link">
            {post.title}
          </Link>
        </h2>
      </div>
    </article>
  );
}

/** Nova+-style latest-4 mosaic — one DOM tree for all breakpoints. */
export function HomeHeroNews({ posts }: { posts: Post[] }) {
  const items = posts.slice(0, 4);
  if (items.length === 0) return null;

  const [lead, second, third, fourth] = items;

  return (
    <section className="home-hero-news" aria-label="Latest stories">
      <div className="site-wrap home-hero-news-inner">
        <div className="home-hero-mosaic">
          <div className="home-hero-mosaic-lead">
            <FeaturedTile post={lead!} size="lg" priority />
          </div>
          {second ? (
            <div className="home-hero-mosaic-wide">
              <FeaturedTile post={second} size="md" />
            </div>
          ) : null}
          {third ? (
            <div className="home-hero-mosaic-small">
              <FeaturedTile post={third} size="sm" />
            </div>
          ) : null}
          {fourth ? (
            <div className="home-hero-mosaic-small">
              <FeaturedTile post={fourth} size="sm" />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
