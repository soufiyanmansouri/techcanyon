import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How TechCanyon uses cookies and similar technologies.",
};

export default function CookiesPage() {
  return (
    <LegalPage eyebrow="Legal" title="Cookie Policy" updated="October 30, 2026">
      <p>
        This Cookie Policy explains how TechCanyon uses cookies and similar
        technologies on the Site. For broader privacy practices, see our{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>1. What are cookies?</h2>
      <p>
        Cookies are small text files stored on your device. Similar technologies
        include local storage, pixels, and tags used by analytics or advertising
        partners.
      </p>

      <h2>2. How we use cookies</h2>
      <ul>
        <li>
          <strong>Essential</strong> — required for security, load balancing,
          and basic site function.
        </li>
        <li>
          <strong>Preferences</strong> — remember choices such as cookie
          consent (when implemented).
        </li>
        <li>
          <strong>Analytics</strong> — understand traffic, popular pages, and
          performance.
        </li>
        <li>
          <strong>Advertising</strong> — if we run ads or sponsorship
          measurement, partners may set cookies to deliver or measure ads.
        </li>
      </ul>

      <h2>3. Third-party cookies</h2>
      <p>
        Hosting, analytics, embedded media (such as video players), and ad
        networks may set their own cookies. Their use is governed by their
        policies.
      </p>

      <h2>4. Managing cookies</h2>
      <p>
        You can control cookies through your browser settings (block, delete, or
        alert). Blocking essential cookies may break parts of the Site. Where we
        display a consent banner, you can also manage non-essential cookies
        there.
      </p>

      <h2>5. Updates</h2>
      <p>
        We may update this Cookie Policy when our tools or practices change. The
        “Last updated” date will reflect revisions.
      </p>

      <h2>6. Contact</h2>
      <p>
        <a href="mailto:privacy@techcanyon.online">privacy@techcanyon.online</a> ·{" "}
        <Link href="/contact">Contact</Link>
      </p>
    </LegalPage>
  );
}
