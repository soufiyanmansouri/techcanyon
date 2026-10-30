import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { PostList } from "@/components/PostList";
import { categories, getCategoryBySlug } from "../../../../content/categories";
import { getPostsByCategory } from "@/lib/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Category" };
  return {
    title: category.name,
    description: category.description,
  };
}

export default function CategoryPage({ params }: Props) {
  return (
    <Suspense fallback={<p className="muted site-wrap page-pad">Loading…</p>}>
      <CategoryDetails params={params} />
    </Suspense>
  );
}

async function CategoryDetails({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const posts = getPostsByCategory(slug);

  return (
    <div className="site-wrap page-pad">
      <div className="article-cover" style={{ marginBottom: "1.5rem" }}>
        <Image
          src={category.image}
          alt={category.imageAlt}
          fill
          priority
          sizes="100vw"
        />
      </div>
      <header className="page-header">
        <p className="eyebrow">Category</p>
        <h1>{category.name}</h1>
        <p className="section-intro">{category.description}</p>
      </header>
      <PostList posts={posts} layout="row" />
    </div>
  );
}
