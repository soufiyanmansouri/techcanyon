import type { MetadataRoute } from "next";
import { categories } from "../../content/categories";
import { getAllPosts } from "@/lib/posts";

export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://techcanyon.online";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/blog",
    "/categories",
    "/about",
    "/contact",
    "/advertise",
    "/privacy",
    "/terms",
    "/cookies",
    "/disclaimer",
    "/watch",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const categoryRoutes = categories.map((cat) => ({
    url: `${siteUrl}/categories/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const postRoutes = getAllPosts().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...categoryRoutes, ...postRoutes];
}
