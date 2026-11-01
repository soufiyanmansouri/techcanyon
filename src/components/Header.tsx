import Link from "next/link";
import { categories } from "../../content/categories";
import { BrandMark } from "./BrandMark";

const links = [
  { href: "/blog", label: "Stories" },
  { href: "/categories", label: "Coverage" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="site-wrap header-inner">
        <Link href="/" className="brand">
          <BrandMark />
          <span>TechCanyon</span>
        </Link>
        <nav className="nav" aria-label="Primary">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
          <Link href="/blog" className="nav-cta">
            Read latest
          </Link>
        </nav>
      </div>
      <div className="topic-rail" aria-label="Topics">
        <div className="site-wrap topic-rail-inner">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/categories/${cat.slug}`}>
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
