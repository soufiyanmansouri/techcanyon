import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How TechCanyon collects, uses, and protects personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="October 30, 2026"
    >
      <p>
        This Privacy Policy explains how TechCanyon (“we”, “us”, or “our”)
        handles information when you visit{" "}
        <a href="https://techcanyon.online">techcanyon.online</a> (the “Site”).
        By using the Site, you agree to this policy.
      </p>

      <h2>1. Who we are</h2>
      <p>
        TechCanyon is an independent editorial website covering fintech topics.
        For privacy questions, contact{" "}
        <a href="mailto:privacy@techcanyon.online">privacy@techcanyon.online</a>{" "}
        or use our <Link href="/contact">Contact</Link> page.
      </p>

      <h2>2. Information we collect</h2>
      <p>We may collect:</p>
      <ul>
        <li>
          <strong>Information you provide</strong> — such as name, email, and
          message content when you contact us or subscribe to updates.
        </li>
        <li>
          <strong>Technical data</strong> — IP address, browser type, device
          type, referring URL, pages viewed, and approximate location derived
          from IP.
        </li>
        <li>
          <strong>Cookies and similar technologies</strong> — used for
          essentials, analytics, and (if enabled) advertising. See our{" "}
          <Link href="/cookies">Cookie Policy</Link>.
        </li>
      </ul>

      <h2>3. How we use information</h2>
      <p>We use information to:</p>
      <ul>
        <li>Operate, secure, and improve the Site</li>
        <li>Respond to inquiries and send requested communications</li>
        <li>Measure readership and content performance</li>
        <li>Show or measure advertising and sponsorships, where applicable</li>
        <li>Comply with law and enforce our Terms</li>
      </ul>

      <h2>4. Legal bases (EEA/UK visitors)</h2>
      <p>
        Where GDPR/UK GDPR applies, we rely on one or more of: consent,
        legitimate interests (such as running a secure editorial site), contract
        performance, and legal obligation.
      </p>

      <h2>5. Sharing</h2>
      <p>
        We do not sell personal information. We may share data with service
        providers (hosting, analytics, email, advertising partners) under
        appropriate agreements, or when required by law, or during a business
        transfer.
      </p>

      <h2>6. Advertising &amp; analytics</h2>
      <p>
        The Site may use third-party tools (for example analytics or ad
        networks). Those providers may set their own cookies and process data
        under their policies. You can manage cookies as described in the{" "}
        <Link href="/cookies">Cookie Policy</Link>.
      </p>

      <h2>7. Retention</h2>
      <p>
        We keep information only as long as needed for the purposes above,
        unless a longer period is required by law.
      </p>

      <h2>8. Security</h2>
      <p>
        We use reasonable technical and organizational measures to protect
        information. No method of transmission or storage is fully secure.
      </p>

      <h2>9. Your rights</h2>
      <p>
        Depending on where you live, you may have rights to access, correct,
        delete, restrict, or object to certain processing, and to withdraw
        consent. Contact{" "}
        <a href="mailto:privacy@techcanyon.online">privacy@techcanyon.online</a>{" "}
        to make a request. You may also lodge a complaint with a supervisory
        authority.
      </p>

      <h2>10. Children</h2>
      <p>
        The Site is not directed to children under 13 (or the equivalent minimum
        age in your region). We do not knowingly collect their personal
        information.
      </p>

      <h2>11. International transfers</h2>
      <p>
        If you access the Site from outside the country where our processors
        operate, your information may be processed in other countries that may
        have different data-protection rules.
      </p>

      <h2>12. Changes</h2>
      <p>
        We may update this policy from time to time. The “Last updated” date
        will change when we do. Continued use of the Site means you accept the
        revised policy.
      </p>
    </LegalPage>
  );
}
