import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BlogVideoPlayer } from "@/components/BlogVideoPlayer";
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

export default function BlogPostPage({ params }: Props) {
  return (
    <Suspense fallback={<p className="muted site-wrap page-pad">Loading…</p>}>
      <BlogPostDetails params={params} />
    </Suspense>
  );
}

async function BlogPostDetails({ params }: Props) {
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
        {!post.video ? (
          <div className="article-cover cinematic">
            <Image
              src={post.coverImage}
              alt={post.coverAlt}
              fill
              priority
              sizes="100vw"
              className="zoom-img"
            />
          </div>
        ) : (
          <div className="article-player-wrap">
            <BlogVideoPlayer
              src={post.video}
              poster={post.poster || post.coverImage}
              title={post.title}
            />
          </div>
        )}

        <div className="article-layout">
          <div className="prose-body dropcap">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
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
