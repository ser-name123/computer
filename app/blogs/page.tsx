import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner/PageBanner";
import TrustedBrandsSection from "@/components/TrustedBrandsSection/TrustedBrandsSection";
import CtaBanner from "@/components/CtaBanner/CtaBanner";
import { BLOG_POSTS_DATA } from "@/data/siteData";
import styles from "@/styles/InnerPages.module.css";

export const metadata: Metadata = {
  title: "IT Guides & Helpful Tips | CATS Computers L.L.C — Dubai, UAE",
  description:
    "Easy-to-understand IT guides on office Wi-Fi, Huawei eKit, Ruijie Reyee, data backup, cybersecurity, and IT AMC in Dubai from CATS Computers L.L.C.",
};

const BLOG_HIGHLIGHTS = [
  {
    num: "01",
    tag: "Plain English",
    title: "Easy-to-Read Guides",
    desc: "Written in simple, clear language for business owners and office managers in the UAE.",
  },
  {
    num: "02",
    tag: "Wi-Fi & Cabling",
    title: "Fix Slow Office Internet",
    desc: "Practical tips to stop dropped video calls and eliminate Wi-Fi dead zones.",
  },
  {
    num: "03",
    tag: "Data Protection",
    title: "Keep Company Files Safe",
    desc: "Simple checklists to protect your accounting data and emails from hackers.",
  },
  {
    num: "04",
    tag: "Cost Saving",
    title: "Smart Hardware Buying",
    desc: "How to choose reliable switches, servers, and cameras without overspending.",
  },
];

const QUICK_CHECKLISTS = [
  {
    badge: "Checklist 01",
    title: "Moving to a New Office in Dubai?",
    desc: "Check these 3 things at least 2 weeks before moving day so your team can work from morning one:",
    image: "/images/company/huawei-reception.jpg",
    points: [
      "Book your DU or e& (Etisalat) internet line early",
      "Test all floor network points & ceiling Wi-Fi spots",
      "Set up door access cards & CCTV before furniture arrives",
    ],
  },
  {
    badge: "Checklist 02",
    title: "Is Your Company Data Truly Safe?",
    desc: "Ask your team these 3 simple questions today to make sure a virus or crash won't stop your business:",
    image: "/images/card-cybersecurity.jpg",
    points: [
      "Do we have an automatic daily backup outside the office?",
      "Have we tested restoring a file in the last 30 days?",
      "Is Multi-Factor Authentication (MFA) turned on for all emails?",
    ],
  },
  {
    badge: "Checklist 03",
    title: "Why Is Our Office Wi-Fi Slow?",
    desc: "Most slow office internet isn't the ISP's fault — it usually comes down to these 3 easy fixes:",
    image: "/images/hero-huawei-elite.jpg",
    points: [
      "Replace home routers with ceiling Wi-Fi 6 business access points",
      "Separate guest mobile phones from office work laptops",
      "Replace damaged, bent patch cables inside your network rack",
    ],
  },
];

const TOPIC_HUBS = [
  {
    step: "01",
    title: "Office Wi-Fi & Networking",
    desc: "Learn how Huawei eKit and Ruijie cloud Wi-Fi keep offices and warehouses connected.",
    image: "/images/process-step-1.jpg",
  },
  {
    step: "02",
    title: "Cybersecurity & Firewalls",
    desc: "Simple ways to block phishing emails, ransomware, and unauthorized access.",
    image: "/images/process-step-2.jpg",
  },
  {
    step: "03",
    title: "Cloud Emails & Backup",
    desc: "Moving smoothly to Microsoft 365, Google Workspace, and automatic cloud backups.",
    image: "/images/process-step-3.jpg",
  },
  {
    step: "04",
    title: "CCTV, Phones & Smart Rooms",
    desc: "Choosing clear 4K cameras, biometric doors, and one-touch meeting room screens.",
    image: "/images/process-step-4.jpg",
  },
];

export default function BlogsPage() {
  const featuredPost = BLOG_POSTS_DATA[0];

  return (
    <main className={styles.pageMain}>
      {/* ==================== SECTION 1: HERO BANNER ==================== */}
      <PageBanner
        eyebrow="SIMPLE IT GUIDES & HELPFUL TIPS — DUBAI"
        title="Easy-to-Understand IT Guides for Your Business."
        subtitle="Practical, jargon-free articles written by our Dubai engineers to help you make smart decisions about office Wi-Fi, data safety, hardware, and IT support."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blogs & Insights" }]}
        bgImage="/images/blog-cpu-chip.jpg"
        primaryCtaText="Ask Our Engineers a Question"
        primaryCtaHref="/contact"
        secondaryCtaText="Explore Our Services"
        secondaryCtaHref="/services"
        metrics={[
          { value: "100%", label: "Easy Plain-English Guides" },
          { value: "Free", label: "Office IT Checklists" },
          { value: "30+", label: "Brands Covered" },
          { value: "24/7", label: "Expert Advice Desk" },
        ]}
      />

      {/* ==================== SECTION 2: FLOATING 4-CARD KNOWLEDGE STRIP ==================== */}
      <section className={styles.floatingStripSection}>
        <div className={styles.floatingStripGrid}>
          {BLOG_HIGHLIGHTS.map((item) => (
            <div key={item.num} className={styles.floatingStripCard}>
              <div className={styles.floatingStripNum}>{item.num}</div>
              <div className={styles.floatingStripBody}>
                <span className={styles.floatingStripTag}>{item.tag}</span>
                <h2 className={styles.floatingStripTitle}>{item.title}</h2>
                <p className={styles.floatingStripDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== SECTION 3: FEATURED ARTICLE SPOTLIGHT ==================== */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.splitRow}>
            <div className={styles.imageShowcaseWrap}>
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                sizes="(max-width: 992px) 100vw, 640px"
                className={styles.imageShowcaseImg}
              />
              <div className={styles.floatingStatBadge}>
                <span className={styles.floatingStatValue}>{featuredPost.category}</span>
                <span className={styles.floatingStatLabel}>
                  {featuredPost.date} • {featuredPost.readTime}
                </span>
              </div>
            </div>

            <div>
              <div className={styles.pillBadgeLight}>
                <span className={styles.pillDot} />
                <span>Featured Business Guide</span>
              </div>
              <h2 className={styles.sectionTitleLight}>{featuredPost.title}</h2>
              <p className={styles.cardTextLight}>{featuredPost.excerpt}</p>

              <ul className={styles.checkList}>
                {featuredPost.keyTakeaways.map((pt) => (
                  <li key={pt} className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <Link href={`/blogs/${featuredPost.slug}`} className={styles.submitBtn}>
                <span>Read Full Guide</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 4: ALL BLOG ARTICLES GRID ==================== */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.pillBadgeLight}>
              <span className={styles.pillDot} />
              <span>All Helpful Articles</span>
            </div>
            <h2 className={styles.sectionTitleLight}>
              Latest Guides From Our Dubai Engineering Team.
            </h2>
            <p className={styles.sectionSubtitleLight}>
              Click any article below for clear, step-by-step advice you can use in your office right away.
            </p>
          </div>

          <div className={styles.grid2}>
            {BLOG_POSTS_DATA.map((post) => (
              <article key={post.slug} className={styles.mediaCard}>
                <div className={styles.mediaCardThumb} style={{ height: "240px" }}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 992px) 100vw, 600px"
                    className={styles.mediaCardImg}
                  />
                  <span className={styles.mediaCardTopBadge}>{post.category}</span>
                </div>
                <div className={styles.mediaCardBody}>
                  <div>
                    <div className={styles.cardBadgeRow}>
                      <span className={styles.numBadge}>{post.date}</span>
                      <span className={styles.tagPill}>{post.readTime}</span>
                    </div>
                    <h3 className={styles.cardTitleLight}>{post.title}</h3>
                    <p className={styles.cardTextLight}>{post.excerpt}</p>
                  </div>
                  <Link href={`/blogs/${post.slug}`} className={styles.cardLink}>
                    <span>Read Complete Guide</span>
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 5: 3 QUICK OFFICE IT CHECKLISTS ==================== */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.pillBadgeLight}>
              <span className={styles.pillDot} />
              <span>Quick Action Checklists</span>
            </div>
            <h2 className={styles.sectionTitleLight}>
              3 Simple IT Checklists Every Dubai Office Should Follow.
            </h2>
            <p className={styles.sectionSubtitleLight}>
              Save time and avoid common technology mistakes with these quick 3-point checks.
            </p>
          </div>

          <div className={styles.grid3}>
            {QUICK_CHECKLISTS.map((item) => (
              <article key={item.title} className={styles.mediaCard}>
                <div className={styles.mediaCardThumb} style={{ height: "200px" }}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 992px) 100vw, 420px"
                    className={styles.mediaCardImg}
                  />
                  <span className={styles.mediaCardTopBadge}>{item.badge}</span>
                </div>
                <div className={styles.mediaCardBody}>
                  <div>
                    <h3 className={styles.cardTitleLight}>{item.title}</h3>
                    <p className={styles.cardTextLight}>{item.desc}</p>
                    <ul className={styles.checkList} style={{ margin: "0 0 18px" }}>
                      {item.points.map((pt) => (
                        <li key={pt} className={styles.checkItem} style={{ fontSize: "13.5px" }}>
                          <span className={styles.checkIcon}>✓</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/contact" className={styles.cardLink}>
                    <span>Get Free Help With This</span>
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 6: COMMON IT MYTHS VS REALITY ==================== */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.pillBadgeLight}>
              <span className={styles.pillDot} />
              <span>Myths vs. Reality</span>
            </div>
            <h2 className={styles.sectionTitleLight}>
              Common Office IT Myths That Cost Businesses Money.
            </h2>
          </div>

          <div className={styles.comparisonGrid}>
            <div className={styles.comparisonCardProblem}>
              <div className={styles.mediaCardThumb} style={{ height: "200px" }}>
                <Image
                  src="/images/blog-cloud-engineers.jpg"
                  alt="Common Office IT Myths"
                  fill
                  sizes="(max-width: 992px) 100vw, 600px"
                  className={styles.mediaCardImg}
                />
                <span className={styles.mediaCardTopBadge}>Common Myths</span>
              </div>
              <div className={styles.mediaCardBody}>
                <div>
                  <h3 className={styles.cardTitleLight}>What Many People Assume</h3>
                  <ul className={styles.problemList}>
                    <li className={styles.problemItem}>
                      <span className={styles.problemIcon}>✕</span>
                      <span>&ldquo;A faster internet package alone will fix our slow office Wi-Fi.&rdquo;</span>
                    </li>
                    <li className={styles.problemItem}>
                      <span className={styles.problemIcon}>✕</span>
                      <span>&ldquo;Hackers only target huge banks, not small or medium Dubai companies.&rdquo;</span>
                    </li>
                    <li className={styles.problemItem}>
                      <span className={styles.problemIcon}>✕</span>
                      <span>&ldquo;Calling a technician only when something breaks is cheaper than an AMC.&rdquo;</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.comparisonCardSolution}>
              <div className={styles.mediaCardThumb} style={{ height: "200px" }}>
                <Image
                  src="/images/blog-cyber-servers.jpg"
                  alt="Real IT Facts"
                  fill
                  sizes="(max-width: 992px) 100vw, 600px"
                  className={styles.mediaCardImg}
                />
                <span className={styles.mediaCardTopBadge}>The Real Truth</span>
              </div>
              <div className={styles.mediaCardBody}>
                <div>
                  <h3 className={styles.cardTitleDark}>What Actually Works</h3>
                  <ul className={styles.checkList} style={{ marginTop: "18px", marginBottom: 0 }}>
                    <li className={styles.checkItemDark}>
                      <span className={styles.checkIcon}>✓</span>
                      <span>Proper ceiling Wi-Fi 6 access points and clean cabling make internet fast</span>
                    </li>
                    <li className={styles.checkItemDark}>
                      <span className={styles.checkIcon}>✓</span>
                      <span>Automated phishing emails target SMEs daily — a firewall &amp; backup save you</span>
                    </li>
                    <li className={styles.checkItemDark}>
                      <span className={styles.checkIcon}>✓</span>
                      <span>Monthly preventive AMC care stops expensive downtime before it happens</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 7: 4 TOPIC HUBS ==================== */}
      <section className={styles.sectionDark}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.pillBadgeDark}>
              <span className={styles.pillDot} />
              <span>Browse Topics</span>
            </div>
            <h2 className={styles.sectionTitleDark}>
              Core Topics Covered by Our Engineers.
            </h2>
          </div>

          <div className={styles.grid4}>
            {TOPIC_HUBS.map((t) => (
              <div
                key={t.step}
                className={styles.mediaCard}
                style={{
                  background: "rgba(10, 25, 78, 0.72)",
                  borderColor: "rgba(96, 165, 250, 0.24)",
                }}
              >
                <div className={styles.mediaCardThumb} style={{ height: "165px" }}>
                  <Image
                    src={t.image}
                    alt={t.title}
                    fill
                    sizes="(max-width: 992px) 100vw, 320px"
                    className={styles.mediaCardImg}
                  />
                  <span className={styles.mediaCardTopBadge}>TOPIC {t.step}</span>
                </div>
                <div className={styles.mediaCardBody} style={{ padding: "22px" }}>
                  <div>
                    <h3 className={styles.cardTitleDark}>{t.title}</h3>
                    <p className={styles.cardTextDark} style={{ marginBottom: 0 }}>
                      {t.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 8: 30+ TRUSTED BRANDS ==================== */}
      <TrustedBrandsSection />

      {/* ==================== SECTION 9: CTA BANNER ==================== */}
      <CtaBanner />
    </main>
  );
}
