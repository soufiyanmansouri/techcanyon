import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Children,
  isValidElement,
  type ComponentPropsWithoutRef,
} from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArticleMedia } from "@/components/ArticleMedia";
import { PostList } from "@/components/PostList";
import {
  formatPostDate,
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
  readingMinutes,
} from "@/lib/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

function MarkdownImage({
  src,
  alt,
  title,
}: ComponentPropsWithoutRef<"img">) {
  const href = typeof src === "string" ? src : undefined;
  if (!href) return null;
  return (
    <figure className="prose-figure">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={href} alt={alt || ""} loading="lazy" />
      {title ? <figcaption>{title}</figcaption> : null}
    </figure>
  );
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);
  const mins = readingMinutes(post.content);

  return (
    <article>
      <div className="article-hero-band">
        <div className="site-wrap article-hero-inner">
          <p className="eyebrow">
            {post.categoryMeta ? (
              <Link href={`/categories/${post.categoryMeta.slug}`}>
                {post.categoryMeta.name}
              </Link>
            ) : (
              post.category
            )}
          </p>
          <h1 className="article-title">{post.title}</h1>
          <p className="article-deck">{post.excerpt}</p>
          <div className="article-byline">
            <div>
              <strong>{post.author ?? "TechCanyon Desk"}</strong>
              <p className="article-meta">
                <time dateTime={post.date}>
                  {formatPostDate(post.date, "long")}
                </time>
                <span aria-hidden> · </span>
                <span>{mins} min read</span>
              </p>
            </div>
            <div className="article-actions">
              <span>Share-ready story</span>
              <span>Partner-safe layout</span>
            </div>
          </div>
        </div>
      </div>

      <div className="site-wrap">
        <ArticleMedia
          title={post.title}
          coverImage={post.coverImage}
          coverAlt={post.coverAlt}
          video={post.video}
          poster={post.poster}
        />

        <div className="article-layout">
          <div className="prose-body dropcap">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                // Markdown wraps lone images in <p>; figures cannot nest in <p>.
                p: ({ children }) => {
                  const items = Children.toArray(children).filter(
                    (child) => !(typeof child === "string" && !child.trim()),
                  );
                  const onlyImage =
                    items.length === 1 &&
                    isValidElement(items[0]) &&
                    items[0].type === MarkdownImage;
                  if (onlyImage) return <>{items}</>;
                  return <p>{children}</p>;
                },
                img: MarkdownImage,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
          <aside className="article-rail">
            <div className="rail-card">
              <p className="footer-label">In this story</p>
              <p className="rail-card-title">
                {post.categoryMeta?.name ?? "Fintech"}
              </p>
              <p className="excerpt">
                {post.categoryMeta?.description ??
                  "Coverage from the TechCanyon desk."}
              </p>
              {post.categoryMeta ? (
                <Link
                  href={`/categories/${post.categoryMeta.slug}`}
                  className="text-link"
                >
                  More in this desk →
                </Link>
              ) : null}
            </div>
            <div className="rail-card partner-mini">
              <p className="footer-label">For brands</p>
              <p className="rail-card-title">Appear beside this desk</p>
              <p className="excerpt">
                Category sponsorships stay editorial-first and visually quiet.
              </p>
              <a className="text-link" href="mailto:partners@techcanyon.online">
                Talk to partnerships →
              </a>
            </div>
          </aside>
        </div>

        {related.length > 0 ? (
          <aside className="related">
            <p className="eyebrow">Keep reading</p>
            <h2 className="section-title">More in this category</h2>
            <PostList posts={related} layout="row" />
          </aside>
        ) : null}
      </div>
    </article>
  );
}
