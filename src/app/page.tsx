import Image from "next/image";
import Link from "next/link";
import { CategoryNav } from "@/components/CategoryNav";
import { PostList } from "@/components/PostList";
import { siteHeroImage } from "../../content/categories";
import { formatPostDate, getLatestPosts, readingMinutes } from "@/lib/posts";

export default function HomePage() {
  const latest = getLatestPosts(9);
  const [featured, ...rest] = latest;
  const desk = rest.slice(0, 4);
  const more = rest.slice(4, 8);

  return (
    <>
      <section className="hero">
        <div className="hero-media">
          <Image
            src={siteHeroImage}
            alt="Dramatic mountain peaks above the clouds"
            fill
            priority
            sizes="100vw"
            className="hero-img"
          />
          <div className="hero-veil" aria-hidden />
        </div>
        <div className="hero-content">
          <p className="hero-kicker">Independent fintech desk</p>
          <h1 className="hero-brand">TechCanyon</h1>
          <p className="hero-copy">
            Premium coverage of money technology — written for operators,
            founders, and brand partners who want to be seen beside serious work.
          </p>
          <div className="hero-actions">
            <Link href="/blog" className="btn btn-primary">
              Enter today’s desk
            </Link>
            <Link href="/categories" className="btn btn-ghost">
              Explore six lanes
            </Link>
          </div>
        </div>
      </section>

      <div className="site-wrap page-pad">
        <section className="desk-grid">
          {featured ? (
            <article className="lead-story">
              <Link href={`/blog/${featured.slug}`} className="lead-media">
                <Image
                  src={featured.coverImage}
                  alt={featured.coverAlt}
                  fill
                  sizes="(max-width: 960px) 100vw, 65vw"
                  priority
                  className="zoom-img"
                />
                <span className="lead-chip">Lead story</span>
              </Link>
              <div className="lead-body">
                <p className="eyebrow">
                  {featured.categoryMeta?.name ?? featured.category}
                </p>
                <h2>
                  <Link href={`/blog/${featured.slug}`}>{featured.title}</Link>
                </h2>
                <p className="lead-deck">{featured.excerpt}</p>
                <div className="post-meta-row">
                  <time dateTime={featured.date}>
                    {formatPostDate(featured.date, "long")}
                  </time>
                  <span aria-hidden>·</span>
                  <span>{readingMinutes(featured.content)} min read</span>
                  <Link href={`/blog/${featured.slug}`} className="text-link">
                    Read feature →
                  </Link>
                </div>
              </div>
            </article>
          ) : null}

          <aside className="desk-rail">
            <div className="rail-head">
              <h2>On the desk</h2>
              <p>Ranked for this edition</p>
            </div>
            <PostList posts={desk} ranked />
          </aside>
        </section>

        <section className="partner-frame" aria-label="Partner placement">
          <div className="partner-frame-label">Partner placement</div>
          <div className="partner-frame-body">
            <p className="partner-frame-title">Your brand, beside trusted copy</p>
            <p>
              TechCanyon keeps sponsorships quiet, designed, and adjacent to
              high-intent readers — not buried under clutter.
            </p>
            <a className="text-link" href="mailto:partners@techcanyon.online">
              Request a media kit →
            </a>
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <div>
              <p className="eyebrow">Continue reading</p>
              <h2 className="section-title">More from the canyon</h2>
              <p className="section-intro">
                Deep dives and briefings across every lane of modern finance.
              </p>
            </div>
            <Link href="/blog" className="section-link">
              Full archive →
            </Link>
          </div>
          <PostList posts={more} layout="row" grid />
        </section>

        <section className="section">
          <div className="section-head">
            <div>
              <p className="eyebrow">Coverage map</p>
              <h2 className="section-title">Six desks. One house.</h2>
              <p className="section-intro">
                Each lane is photographed, edited, and ready for loyal
                audiences.
              </p>
            </div>
          </div>
          <CategoryNav columns="trio" />
        </section>

        <section className="newsletter">
          <div>
            <p className="eyebrow">Briefing</p>
            <h2 className="section-title">Stay ahead of the desk</h2>
            <p className="section-intro">
              One sharp note when we publish — no spam, no filler. Built for
              people who allocate time and capital carefully.
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
