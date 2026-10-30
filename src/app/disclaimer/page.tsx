import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Important disclaimer: TechCanyon content is for information only and is not financial advice.",
};

export default function DisclaimerPage() {
  return (
    <LegalPage eyebrow="Legal" title="Disclaimer" updated="October 30, 2026">
      <p>
        Please read this Disclaimer carefully before using TechCanyon. By using
        the Site, you acknowledge this notice.
      </p>

      <h2>1. General information only</h2>
      <p>
        All articles, headlines, videos, and other materials on TechCanyon are
        for general informational and educational purposes about financial
        technology and related news. They are not tailored to your personal
        situation.
      </p>

      <h2>2. No financial, investment, or legal advice</h2>
      <p>
        Nothing on the Site constitutes financial, investment, trading, tax,
        legal, insurance, or other professional advice. You should not make
        decisions solely based on TechCanyon content. Consult a qualified
        professional before making financial decisions.
      </p>

      <h2>3. No guarantees of accuracy</h2>
      <p>
        We aim for careful editorial standards, but markets, products, laws, and
        company facts change quickly. Content may become outdated, incomplete,
        or contain errors. We do not warrant that any information is accurate,
        complete, or current.
      </p>

      <h2>4. Third-party content &amp; links</h2>
      <p>
        Mentions of companies, products, apps, or services — and links to
        third-party sites — do not imply endorsement. We are not responsible for
        third-party content, offers, or losses arising from your use of them.
      </p>

      <h2>5. Forward-looking statements</h2>
      <p>
        Discussions of markets, deals, products, or technology may include
        opinions or forward-looking views that can prove wrong. Past performance
        is not indicative of future results.
      </p>

      <h2>6. Advertising &amp; sponsorships</h2>
      <p>
        The Site may display ads or sponsored placements. Sponsored content will
        be identified where required. Sponsorship does not change our obligation
        to present this Disclaimer. See{" "}
        <Link href="/advertise">Advertise</Link> for partner information.
      </p>

      <h2>7. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, TechCanyon is not liable for any
        loss or damage arising from reliance on Site content or from use of the
        Site. Your use of any information is at your own risk.
      </p>

      <h2>8. Related policies</h2>
      <p>
        Also see our <Link href="/terms">Terms of Use</Link> and{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
    </LegalPage>
  );
}
