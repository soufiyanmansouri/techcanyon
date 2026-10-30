import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { getCategoryBySlug, type Category } from "../../content/categories";

export type PostMeta = {
  title: string;
  slug: string;
  category: string;
  date: string;
  excerpt: string;
  author?: string;
  video?: string;
  poster?: string;
  cover?: string;
};

export type Post = PostMeta & {
  content: string;
  categoryMeta: Category | undefined;
  coverImage: string;
  coverAlt: string;
};

const postsDirectory = path.join(process.cwd(), "content/posts");

function parsePost(filename: string): Post {
  const fullPath = path.join(postsDirectory, filename);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const meta = data as PostMeta;
  const categoryMeta = getCategoryBySlug(meta.category);

  return {
    title: meta.title,
    slug: meta.slug,
    category: meta.category,
    date: normalizeDate(meta.date),
    excerpt: meta.excerpt,
    author: meta.author,
    video: meta.video,
    poster: meta.poster,
    cover: meta.cover,
    content,
    categoryMeta,
    coverImage: meta.cover || categoryMeta?.image || siteFallbackCover,
    coverAlt: categoryMeta?.imageAlt || meta.title,
  };
}

const siteFallbackCover =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80";

/** gray-matter turns YAML dates into Date objects — keep a stable YYYY-MM-DD string. */
function normalizeDate(value: string | Date): string {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }
  const parsed = new Date(value);
  if (!Number.isNaN(parsed.getTime()) && /^\d{4}-\d{2}-\d{2}/.test(value)) {
    return value.slice(0, 10);
  }
  if (!Number.isNaN(parsed.getTime())) {
    return parsed.toISOString().slice(0, 10);
  }
  return String(value);
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) return [];

  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".md"))
    .map(parsePost)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getPostsByCategory(categorySlug: string): Post[] {
  return getAllPosts().filter((p) => p.category === categorySlug);
}

export function getLatestPosts(limit = 6): Post[] {
  return getAllPosts().slice(0, limit);
}

export function getRelatedPosts(post: Post, limit = 3): Post[] {
  return getPostsByCategory(post.category)
    .filter((p) => p.slug !== post.slug)
    .slice(0, limit);
}

export function formatPostDate(
  iso: string,
  style: "short" | "long" = "short",
): string {
  const [year, month, day] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: style === "long" ? "long" : "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function readingMinutes(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 180));
}
