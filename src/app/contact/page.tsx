import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the TechCanyon desk for editorial, privacy, or partnership inquiries.",
};

export default function ContactPage() {
  return (
    <div className="site-wrap page-pad legal-page">
      <header className="page-header">
        <p className="eyebrow">Company</p>
        <h1>Contact</h1>
        <p className="section-intro">
          Reach the desk. We read every serious message — please choose the
          right inbox when you can.
        </p>
      </header>

      <div className="contact-grid">
        <div className="rail-card">
          <p className="footer-label">Editorial</p>
          <p className="rail-card-title">Stories &amp; tips</p>
          <p className="excerpt">
            Corrections, story ideas, and press notes for the TechCanyon desk.
          </p>
          <a className="text-link" href="mailto:hello@techcanyon.online">
            hello@techcanyon.online
          </a>
        </div>
        <div className="rail-card">
          <p className="footer-label">Partnerships</p>
          <p className="rail-card-title">Advertise with us</p>
          <p className="excerpt">
            Sponsorships, category takeovers, and newsletter adjacency.
          </p>
          <a className="text-link" href="mailto:partners@techcanyon.online">
            partners@techcanyon.online
          </a>
          <p className="excerpt" style={{ marginTop: "0.75rem" }}>
            <Link href="/advertise" className="text-link">
              View advertise page →
            </Link>
          </p>
        </div>
        <div className="rail-card">
          <p className="footer-label">Privacy &amp; legal</p>
          <p className="rail-card-title">Data &amp; terms</p>
          <p className="excerpt">
            Privacy requests, cookie questions, and legal notices.
          </p>
          <a className="text-link" href="mailto:privacy@techcanyon.online">
            privacy@techcanyon.online
          </a>
          <br />
          <a className="text-link" href="mailto:legal@techcanyon.online">
            legal@techcanyon.online
          </a>
        </div>
      </div>

      <form className="contact-form" action="mailto:hello@techcanyon.online" method="get">
        <p className="footer-label">Send a message</p>
        <label>
          Name
          <input name="subject" type="text" placeholder="Your name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" placeholder="you@company.com" required />
        </label>
        <label>
          Message
          <textarea
            name="body"
            rows={6}
            placeholder="How can we help?"
            required
          />
        </label>
        <button type="submit">Open email draft</button>
        <p className="excerpt">
          This opens your mail app with a draft. For a production form later,
          we can wire a server endpoint.
        </p>
      </form>
    </div>
  );
}
