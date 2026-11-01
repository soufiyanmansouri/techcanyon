import Link from "next/link";
import { CategoryNav } from "@/components/CategoryNav";
import { HomeHeroNews } from "@/components/HomeHeroNews";
import { PostList } from "@/components/PostList";
import { getLatestPosts } from "@/lib/posts";

export default function HomePage() {
  const latest = getLatestPosts(12);
  const heroPosts = latest.slice(0, 4);
  const more = latest.slice(4, 12);

  return (
    <>
      <HomeHeroNews posts={heroPosts} />

      <div className="site-wrap page-pad">
        <section className="partner-frame" aria-label="Partner placement">
          <div className="partner-frame-label">Partners</div>
          <div className="partner-frame-body">
            <p className="partner-frame-title">
              Place your brand beside high-intent readers
            </p>
            <p>
              Quiet sponsorships. Clean design. Adjacent to the stories
              operators already trust.
            </p>
            <a className="text-link" href="mailto:partners@techcanyon.online">
              Request a media kit →
            </a>
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <div>
              <p className="eyebrow">Latest</p>
              <h2 className="section-title">More stories</h2>
              <p className="section-intro">
                Deep briefings across every lane of modern finance.
              </p>
            </div>
            <Link href="/blog" className="section-link">
              Full archive →
            </Link>
          </div>
          <PostList posts={more} grid />
        </section>

        <section className="section">
          <div className="section-head">
            <div>
              <p className="eyebrow">Coverage</p>
              <h2 className="section-title">Six lanes of fintech</h2>
              <p className="section-intro">
                From digital banking to lending — pick a lane and go deep.
              </p>
            </div>
          </div>
          <CategoryNav columns="trio" />
        </section>

        <section className="newsletter">
          <div>
            <p className="eyebrow">Briefing</p>
            <h2 className="section-title">Stay ahead of the market</h2>
            <p className="section-intro">
              One sharp note when we publish — built for people who allocate
              time and capital carefully.
            </p>
          </div>
          <form className="newsletter-form" action="#" method="post">
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@company.com"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </div>
    </>
  );
}
