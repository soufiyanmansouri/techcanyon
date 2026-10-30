import Image from "next/image";
import Link from "next/link";
import { categories } from "../../content/categories";

export function CategoryNav({ columns = "duo" }: { columns?: "duo" | "trio" }) {
  return (
    <ul className={`category-nav ${columns === "trio" ? "trio" : ""}`}>
      {categories.map((cat, index) => (
        <li
          key={cat.slug}
          style={{ animationDelay: `${90 + index * 70}ms` }}
          className="category-nav-item"
        >
          <Link href={`/categories/${cat.slug}`}>
            <span className="cat-media">
              <Image
                src={cat.image}
                alt={cat.imageAlt}
                fill
                sizes="(max-width: 720px) 100vw, 33vw"
              />
              <span className="cat-index" aria-hidden>
                {String(index + 1).padStart(2, "0")}
              </span>
            </span>
            <span className="cat-copy">
              <span className="cat-name">{cat.name}</span>
              <span className="cat-desc">{cat.description}</span>
              <span className="cat-enter">Enter desk →</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
