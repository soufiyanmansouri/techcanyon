import type { Post } from "@/lib/posts";
import { PostCard } from "./PostCard";

export function PostList({
  posts,
  layout = "stack",
  grid = false,
  ranked = false,
}: {
  posts: Post[];
  layout?: "stack" | "row" | "ranked";
  grid?: boolean;
  ranked?: boolean;
}) {
  if (posts.length === 0) {
    return <p className="muted">No posts yet.</p>;
  }

  const cardLayout = ranked ? "ranked" : layout;

  return (
    <div className={`post-list ${grid ? "gridish" : ""} ${ranked ? "ranked-list" : ""}`}>
      {posts.map((post, index) => (
        <div key={post.slug} style={{ animationDelay: `${index * 55}ms` }}>
          <PostCard post={post} layout={cardLayout} index={index} />
        </div>
      ))}
    </div>
  );
}
