import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "About TechCanyon — an independent fintech editorial desk for readers and brand partners.",
};

export default function AboutPage() {
  return (
    <LegalPage
      eyebrow="Company"
      title="About TechCanyon"
      updated="October 30, 2026"
    >
      <p>
        TechCanyon is an independent editorial publication covering financial
        technology — digital banking, payments, trading and crypto, insurtech,
        personal finance tools, and lending tech.
      </p>

      <h2>What we publish</h2>
      <p>
        We write clear, photography-led stories for operators, founders,
        product people, and curious readers who want to understand how money
        software is changing. Coverage is organized into six desks so you can
        go deep by topic.
      </p>

      <h2>Editorial approach</h2>
      <p>
        We prioritize original writing, transparent framing, and practical
        context. Fintech moves fast; when we discuss companies or products, we
        treat that as journalism and commentary — not advice. See our{" "}
        <Link href="/disclaimer">Disclaimer</Link>.
      </p>

      <h2>For brands</h2>
      <p>
        We design the Site as a premium environment where sponsorships can sit
        beside trusted copy without clutter. Learn more on{" "}
        <Link href="/advertise">Advertise</Link>.
      </p>

      <h2>Contact</h2>
      <p>
        Editorial and general:{" "}
        <a href="mailto:hello@techcanyon.online">hello@techcanyon.online</a>
        <br />
        Or use the <Link href="/contact">Contact</Link> form page.
      </p>
    </LegalPage>
  );
}
