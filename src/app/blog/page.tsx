import type { Metadata } from "next";
import { PostList } from "@/components/PostList";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Stories",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="site-wrap page-pad">
      <header className="page-header">
        <p className="eyebrow">Archive</p>
        <h1>Stories</h1>
        <p className="section-intro">
          The full TechCanyon desk — photography-led, category-clear, newest
          first.
        </p>
      </header>
      <PostList posts={posts} layout="row" grid />
    </div>
  );
}
