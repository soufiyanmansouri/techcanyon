import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing your use of the TechCanyon website.",
};

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Legal" title="Terms of Use" updated="October 30, 2026">
      <p>
        Welcome to TechCanyon. By accessing or using this Site, you agree to
        these Terms of Use. If you do not agree, do not use the Site.
      </p>

      <h2>1. The Site</h2>
      <p>
        TechCanyon publishes editorial content about financial technology and
        related topics for general information. Features, design, and
        availability may change without notice.
      </p>

      <h2>2. Not financial advice</h2>
      <p>
        Nothing on the Site is investment, tax, legal, accounting, or other
        professional advice. Read our{" "}
        <Link href="/disclaimer">Disclaimer</Link> before acting on any content.
      </p>

      <h2>3. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Site in any unlawful way</li>
        <li>Attempt to disrupt, scrape abusively, or reverse engineer the Site</li>
        <li>Upload malware or harmful code</li>
        <li>Misrepresent your identity or affiliation</li>
        <li>Infringe intellectual property or privacy rights</li>
      </ul>

      <h2>4. Intellectual property</h2>
      <p>
        Unless otherwise noted, TechCanyon owns or licenses the text, branding,
        layout, and original graphics on the Site. You may not copy, republish,
        or commercially exploit content without prior written permission, except
        for ordinary personal browsing and fair dealing/fair use as allowed by
        law.
      </p>

      <h2>5. Third-party links &amp; media</h2>
      <p>
        The Site may link to third-party websites or embed media hosted by
        others. We are not responsible for their content, policies, or
        availability.
      </p>

      <h2>6. User submissions</h2>
      <p>
        If you send us feedback or messages, you grant us a non-exclusive right
        to use that material to operate and improve the Site, unless we agree
        otherwise in writing.
      </p>

      <h2>7. Disclaimer of warranties</h2>
      <p>
        The Site is provided “as is” and “as available” without warranties of
        any kind, express or implied, including merchantability, fitness for a
        particular purpose, and non-infringement.
      </p>

      <h2>8. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, TechCanyon and its operators
        will not be liable for any indirect, incidental, special,
        consequential, or punitive damages, or any loss of profits, data, or
        goodwill, arising from your use of the Site.
      </p>

      <h2>9. Indemnity</h2>
      <p>
        You agree to indemnify and hold harmless TechCanyon from claims arising
        out of your misuse of the Site or violation of these Terms.
      </p>

      <h2>10. Privacy</h2>
      <p>
        Our <Link href="/privacy">Privacy Policy</Link> explains how we handle
        personal information.
      </p>

      <h2>11. Changes</h2>
      <p>
        We may revise these Terms. Continued use after changes means you accept
        the updated Terms.
      </p>

      <h2>12. Contact</h2>
      <p>
        Questions about these Terms:{" "}
        <a href="mailto:legal@techcanyon.online">legal@techcanyon.online</a> or{" "}
        <Link href="/contact">Contact</Link>.
      </p>
    </LegalPage>
  );
}
