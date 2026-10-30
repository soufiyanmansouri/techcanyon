import Link from "next/link";
import { categories } from "../../content/categories";
import { BrandMark } from "./BrandMark";

const legalLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/advertise", label: "Advertise" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookies", label: "Cookies" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-wrap footer-grid">
        <div className="footer-brand-block">
          <div className="footer-brand-row">
            <BrandMark size={34} />
            <p className="footer-brand">TechCanyon</p>
          </div>
          <p className="footer-blurb">
            A photography-led fintech desk for decision-makers — and a clean,
            trusted environment for partners who care where their brand sits.
          </p>
        </div>
        <div>
          <p className="footer-label">Desk</p>
          <div className="footer-cats">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/categories/${cat.slug}`}>
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="footer-label">Company &amp; legal</p>
          <div className="footer-cats">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="site-wrap footer-meta">
        <span>© {new Date().getFullYear()} TechCanyon</span>
        <span>
          <Link href="/disclaimer">Not financial advice</Link>
          {" · "}
          Independent fintech editorial
        </span>
      </div>
    </footer>
  );
}
