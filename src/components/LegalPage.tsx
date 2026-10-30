import type { ReactNode } from "react";

export function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="site-wrap page-pad legal-page">
      <header className="page-header">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="section-intro">Last updated: {updated}</p>
      </header>
      <div className="legal-body">{children}</div>
    </div>
  );
}
