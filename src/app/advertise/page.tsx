import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Advertise",
  description:
    "Advertise on TechCanyon — sponsorships and partner placements beside premium fintech editorial.",
};

export default function AdvertisePage() {
  return (
    <LegalPage
      eyebrow="Partners"
      title="Advertise on TechCanyon"
      updated="October 30, 2026"
    >
      <p>
        TechCanyon is built as a premium editorial environment: clear
        categories, photography-led stories, and layouts designed so partner
        placements feel intentional — not noisy.
      </p>

      <h2>Formats we support</h2>
      <ul>
        <li>Homepage and category partner frames</li>
        <li>Newsletter or briefing adjacency (when launched)</li>
        <li>Sponsored desk takeovers (clearly labeled)</li>
        <li>Custom campaigns aligned to one of our six desks</li>
      </ul>

      <h2>Our standards</h2>
      <p>
        Sponsored material will be disclosed. We do not accept promotions that
        conflict with our <Link href="/disclaimer">Disclaimer</Link> or that
        mislead readers about financial products. We may decline any placement.
      </p>

      <h2>Audience</h2>
      <p>
        Readers come for fintech clarity — banking, payments, markets,
        insurance tech, personal finance tools, and lending. That intent is
        what makes the Site valuable for serious brands.
      </p>

      <h2>Get the media kit</h2>
      <p>
        Email{" "}
        <a href="mailto:partners@techcanyon.online">partners@techcanyon.online</a>{" "}
        with your brand, goals, and preferred desks. Or start via{" "}
        <Link href="/contact">Contact</Link>.
      </p>
    </LegalPage>
  );
}
