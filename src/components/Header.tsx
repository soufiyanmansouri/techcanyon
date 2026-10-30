import Link from "next/link";
import { categories } from "../../content/categories";
import { BrandMark } from "./BrandMark";

const links = [
  { href: "/blog", label: "Stories" },
  { href: "/categories", label: "Desk" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="edition-bar">
        <div className="site-wrap edition-bar-inner">
          <span>TechCanyon Daily</span>
          <span className="edition-dot" aria-hidden />
          <span>Vol. 01 · Fintech Desk</span>
          <span className="edition-dot" aria-hidden />
          <span>For readers &amp; brand partners</span>
        </div>
      </div>
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
            Open the desk
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
