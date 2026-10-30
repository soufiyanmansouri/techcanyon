import type { Metadata } from "next";
import { CategoryNav } from "@/components/CategoryNav";

export const metadata: Metadata = {
  title: "Desk",
};

export default function CategoriesPage() {
  return (
    <div className="site-wrap page-pad">
      <header className="page-header">
        <p className="eyebrow">Coverage map</p>
        <h1>The desk</h1>
        <p className="section-intro">
          Six photographed lanes. One house brand partners can trust.
        </p>
      </header>
      <CategoryNav columns="trio" />
    </div>
  );
}
