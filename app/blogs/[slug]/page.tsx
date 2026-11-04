import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner/PageBanner";
import TrustedBrandsSection from "@/components/TrustedBrandsSection/TrustedBrandsSection";
import CtaBanner from "@/components/CtaBanner/CtaBanner";
import { BLOG_POSTS_DATA } from "@/data/siteData";
import styles from "@/styles/InnerPages.module.css";

const HOW_WE_HELP_CARDS = [
  {
    badge: "Step 01 • Free Visit",
    title: "Free On-Site Inspection in Dubai",
    desc: "Our engineer visits your office to check your current setup and give you honest, plain-English advice.",
    image: "/images/process-step-1.jpg",
  },
  {
    badge: "Step 02 • Genuine Stock",
    title: "Right Hardware From Our Warehouse",
    desc: "We supply 100% original equipment with official UAE warranty directly from our Burdubai stock.",
    image: "/images/company/huawei-ekit-award.jpg",
  },
  {
    badge: "Step 03 • Full Care",
    title: "Clean Installation & 24/7 Support",
    desc: "We install, test, and label everything neatly and stay available 24/7 whenever your team needs help.",
    image: "/images/service-managed-it.jpg",
  },
];

export function generateStaticParams() {
  return BLOG_POSTS_DATA.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS_DATA.find((p) => p.slug === slug);
  if (!post) {
    return { title: "Article Not Found | CATS Computers L.L.C" };
  }
  return {
    title: `${post.title} | CATS Computers L.L.C Blog`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS_DATA.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS_DATA.filter((p) => p.slug !== post.slug);

  return (
    <main className={styles.pageMain}>
      {/* ==================== SECTION 1: HERO BANNER ==================== */}
      <PageBanner
        eyebrow={`${post.category} • ${post.readTime}`}
        title={post.title}
        subtitle={`Published on ${post.date} by ${post.author} (${post.authorRole})`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blogs", href: "/blogs" },
          { label: post.category },
        ]}
        bgImage={post.image}
        primaryCtaText="Book Free Office IT Visit"
        primaryCtaHref="/contact"
        secondaryCtaText="Back to All Guides"
        secondaryCtaHref="/blogs"
      />

      {/* ==================== SECTION 2: FLOATING 4-CARD SUMMARY STRIP ==================== */}
      <section className={styles.floatingStripSection}>
        <div className={styles.floatingStripGrid}>
          <div className={styles.floatingStripCard}>
            <div className={styles.floatingStripNum}>01</div>
            <div className={styles.floatingStripBody}>
              <span className={styles.floatingStripTag}>Topic</span>
              <h2 className={styles.floatingStripTitle}>{post.category}</h2>
              <p className={styles.floatingStripDesc}>Practical guide for Dubai &amp; UAE businesses.</p>
            </div>
          </div>
          <div className={styles.floatingStripCard}>
            <div className={styles.floatingStripNum}>02</div>
            <div className={styles.floatingStripBody}>
              <span className={styles.floatingStripTag}>Reading Time</span>
              <h2 className={styles.floatingStripTitle}>{post.readTime}</h2>
              <p className={styles.floatingStripDesc}>Written in clear, easy-to-understand language.</p>
            </div>
          </div>
          <div className={styles.floatingStripCard}>
            <div className={styles.floatingStripNum}>03</div>
            <div className={styles.floatingStripBody}>
              <span className={styles.floatingStripTag}>Verified By</span>
              <h2 className={styles.floatingStripTitle}>{post.author}</h2>
              <p className={styles.floatingStripDesc}>{post.authorRole} — Burdubai HQ.</p>
            </div>
          </div>
          <div className={styles.floatingStripCard}>
            <div className={styles.floatingStripNum}>04</div>
            <div className={styles.floatingStripBody}>
              <span className={styles.floatingStripTag}>Need Help?</span>
              <h2 className={styles.floatingStripTitle}>Free Site Survey</h2>
              <p className={styles.floatingStripDesc}>Our engineers can set this up for your office.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 3: EXECUTIVE TAKEAWAYS & COVER IMAGE SPLIT ==================== */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.splitRow}>
            <div>
              <div className={styles.pillBadgeLight}>
                <span className={styles.pillDot} />
                <span>Quick Summary</span>
              </div>
              <h2 className={styles.sectionTitleLight}>
                Key Takeaways From This Guide.
              </h2>
              <p className={styles.cardTextLight}>{post.excerpt}</p>
              <ul className={styles.checkList}>
                {post.keyTakeaways.map((item) => (
                  <li key={item} className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.imageShowcaseWrap}>
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 992px) 100vw, 600px"
                className={styles.imageShowcaseImg}
              />
              <div className={styles.floatingStatBadge}>
                <span className={styles.floatingStatValue}>{post.category}</span>
                <span className={styles.floatingStatLabel}>
                  CATS Computers Engineering Guide • Dubai
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 4: COMPLETE ARTICLE BODY ==================== */}
      <section className={styles.sectionLight}>
        <div className={styles.containerNarrow}>
          <div className={styles.legalCard}>
            {post.sections.map((sec, idx) => (
              <div key={sec.heading} className={styles.legalBlock}>
                <span className={styles.tagPill} style={{ display: "inline-block", marginBottom: "10px" }}>
                  Part 0{idx + 1}
                </span>
                <h2 className={styles.legalHeading}>{sec.heading}</h2>
                <p className={styles.legalText}>{sec.body}</p>
              </div>
            ))}

            <div style={{ marginTop: "32px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link href="/contact" className={styles.submitBtn}>
                <span>Talk to Our Dubai Engineers</span>
                <span>→</span>
              </Link>
              <Link href="/blogs" className={styles.filterBtn}>
                ← Back to All Articles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 5: COMMON MISTAKES VS BEST PRACTICES ==================== */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.pillBadgeLight}>
              <span className={styles.pillDot} />
              <span>Quick Comparison</span>
            </div>
            <h2 className={styles.sectionTitleLight}>
              What to Avoid vs. What Works Best.
            </h2>
          </div>

          <div className={styles.comparisonGrid}>
            <div className={styles.comparisonCardProblem}>
              <div className={styles.mediaCardThumb} style={{ height: "195px" }}>
                <Image
                  src="/images/about-engineer-left.jpg"
                  alt="Common Mistakes to Avoid"
                  fill
                  sizes="(max-width: 992px) 100vw, 600px"
                  className={styles.mediaCardImg}
                />
                <span className={styles.mediaCardTopBadge}>Mistakes to Avoid</span>
              </div>
              <div className={styles.mediaCardBody}>
                <h3 className={styles.cardTitleLight}>Short-Term Fixes That Cause Trouble</h3>
                <ul className={styles.problemList}>
                  <li className={styles.problemItem}>
                    <span className={styles.problemIcon}>✕</span>
                    <span>Buying consumer-grade hardware without official UAE warranty</span>
                  </li>
                  <li className={styles.problemItem}>
                    <span className={styles.problemIcon}>✕</span>
                    <span>Skipping cable labeling, testing, and regular off-site backups</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.comparisonCardSolution}>
              <div className={styles.mediaCardThumb} style={{ height: "195px" }}>
                <Image
                  src="/images/hero-huawei-elite.jpg"
                  alt="Recommended Best Practices"
                  fill
                  sizes="(max-width: 992px) 100vw, 600px"
                  className={styles.mediaCardImg}
                />
                <span className={styles.mediaCardTopBadge}>Recommended Best Practice</span>
              </div>
              <div className={styles.mediaCardBody}>
                <h3 className={styles.cardTitleDark}>Long-Term Reliability &amp; Peace of Mind</h3>
                <ul className={styles.checkList} style={{ marginTop: "18px", marginBottom: 0 }}>
                  <li className={styles.checkItemDark}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Use genuine business-grade hardware sized properly for your team</span>
                  </li>
                  <li className={styles.checkItemDark}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Keep systems updated and monitored under a proactive AMC plan</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 6: HOW CATS CAN HELP YOU IMPLEMENT THIS ==================== */}
      <section className={styles.sectionDark}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.pillBadgeDark}>
              <span className={styles.pillDot} />
              <span>Ready to Upgrade?</span>
            </div>
            <h2 className={styles.sectionTitleDark}>
              How Our Dubai Team Sets This Up for You.
            </h2>
          </div>

          <div className={styles.grid3}>
            {HOW_WE_HELP_CARDS.map((card) => (
              <article
                key={card.title}
                className={styles.mediaCard}
                style={{
                  background: "rgba(10, 25, 78, 0.72)",
                  borderColor: "rgba(96, 165, 250, 0.24)",
                }}
              >
                <div className={styles.mediaCardThumb} style={{ height: "190px" }}>
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 992px) 100vw, 420px"
                    className={styles.mediaCardImg}
                  />
                  <span className={styles.mediaCardTopBadge}>{card.badge}</span>
                </div>
                <div className={styles.mediaCardBody}>
                  <h3 className={styles.cardTitleDark}>{card.title}</h3>
                  <p className={styles.cardTextDark} style={{ marginBottom: 0 }}>
                    {card.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 7: MORE TECHNICAL GUIDES ==================== */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.pillBadgeLight}>
              <span className={styles.pillDot} />
              <span>Keep Reading</span>
            </div>
            <h2 className={styles.sectionTitleLight}>
              More Helpful Guides From Our Desk.
            </h2>
          </div>

          <div className={styles.grid3}>
            {relatedPosts.map((rel) => (
              <article key={rel.slug} className={styles.mediaCard}>
                <div className={styles.mediaCardThumb} style={{ height: "200px" }}>
                  <Image
                    src={rel.image}
                    alt={rel.title}
                    fill
                    sizes="(max-width: 992px) 100vw, 420px"
                    className={styles.mediaCardImg}
                  />
                  <span className={styles.mediaCardTopBadge}>{rel.category}</span>
                </div>
                <div className={styles.mediaCardBody}>
                  <div>
                    <h3 className={styles.cardTitleLight} style={{ fontSize: "18px" }}>
                      {rel.title}
                    </h3>
                    <p className={styles.cardTextLight}>{rel.excerpt}</p>
                  </div>
                  <Link href={`/blogs/${rel.slug}`} className={styles.cardLink}>
                    <span>Read Article</span>
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 8: BRANDS & CTA ==================== */}
      <TrustedBrandsSection />
      <CtaBanner />
    </main>
  );
}
