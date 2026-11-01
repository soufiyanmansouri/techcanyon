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
            alt="Night city skyline with illuminated towers"
            fill
            priority
            sizes="100vw"
            className="hero-img"
          />
          <div className="hero-atmosphere" aria-hidden>
            <span className="hero-orb hero-orb-a" />
            <span className="hero-orb hero-orb-b" />
            <span className="hero-orb hero-orb-c" />
          </div>
          <div className="hero-veil" aria-hidden />
          <div className="hero-grid" aria-hidden />
        </div>
        <div className="hero-content">
          <p className="hero-brand">TechCanyon</p>
          <h1 className="hero-headline">
            Money technology, written for people who build it.
          </h1>
          <p className="hero-copy">
            Banking, payments, markets, insurance, and credit — covered with
            precision for operators, founders, and brand partners.
          </p>
          <div className="hero-actions">
            <Link href="/blog" className="btn btn-primary">
              Read the latest
            </Link>
            <Link href="/categories" className="btn btn-ghost">
              Browse coverage
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
              <h2>Trending now</h2>
              <p>What the market is reading</p>
            </div>
            <PostList posts={desk} ranked />
          </aside>
        </section>

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
          <PostList posts={more} layout="row" grid />
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
