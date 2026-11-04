import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner/PageBanner";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import TrustedBrandsSection from "@/components/TrustedBrandsSection/TrustedBrandsSection";
import CtaBanner from "@/components/CtaBanner/CtaBanner";
import { TESTIMONIALS_DATA } from "@/data/siteData";
import styles from "@/styles/InnerPages.module.css";

export const metadata: Metadata = {
  title: "Client Success Stories & Reviews | CATS Computers L.L.C — Dubai",
  description:
    "Read real client reviews and easy-to-understand IT success stories from Dubai offices, JAFZA warehouses, clinics, and shops working with CATS Computers L.L.C.",
};

const TRUST_HIGHLIGHTS = [
  {
    num: "01",
    tag: "Top Rated",
    title: "4.9 / 5 Client Rating",
    desc: "Loved by business owners, office managers, and IT heads across Dubai and the UAE.",
  },
  {
    num: "02",
    tag: "Long-Term Trust",
    title: "98.7% AMC Renewal",
    desc: "Almost every client renews their annual support contract with us year after year.",
  },
  {
    num: "03",
    tag: "Fast Helpdesk",
    title: "15-Min Remote Help",
    desc: "No waiting in long ticket queues — our Dubai engineers pick up the phone and fix issues fast.",
  },
  {
    num: "04",
    tag: "Proven Scale",
    title: "500+ Happy Clients",
    desc: "Supporting offices, warehouses, medical centers, hotels, and retail groups across the UAE.",
  },
];

const STORY_IMAGES = [
  "/images/hero-huawei-elite.jpg",
  "/images/industry-manufacturing.jpg",
  "/images/case-study-cloud-migration.jpg",
  "/images/about-team-right.jpg",
  "/images/case-study-boardroom.jpg",
  "/images/company/award-ruijie-adp-2024-b.jpg",
];

const CLIENT_GUARANTEES = [
  {
    step: "01",
    title: "100% Genuine UAE Hardware",
    desc: "Every switch, router, server, and camera we supply is original and backed by official manufacturer warranty.",
    image: "/images/process-step-1.jpg",
  },
  {
    step: "02",
    title: "Clear, Honest Pricing",
    desc: "Itemized quotations in plain English so you know exactly what you are paying for — zero surprise extras.",
    image: "/images/process-step-2.jpg",
  },
  {
    step: "03",
    title: "Neat & Labeled Installation",
    desc: "We leave your server rack and office spotless, with every cable tested and clearly labeled.",
    image: "/images/process-step-3.jpg",
  },
  {
    step: "04",
    title: "Friendly Engineers Who Care",
    desc: "Our team treats your office with respect and explains things clearly without technical attitude.",
    image: "/images/process-step-4.jpg",
  },
];

export default function TestimonialsPage() {
  return (
    <main className={styles.pageMain}>
      {/* ==================== SECTION 1: HERO BANNER ==================== */}
      <PageBanner
        eyebrow="CLIENT SUCCESS STORIES & REVIEWS — UAE"
        title="Trusted by 500+ Businesses Across Dubai & the UAE."
        subtitle="See what real business owners, operations managers, and IT directors say about working with CATS Computers L.L.C for their office Wi-Fi, servers, CCTV, and 24/7 support."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Success Stories & Testimonials" },
        ]}
        bgImage="/images/hero-ruijie-golden.jpg"
        primaryCtaText="Become Our Next Happy Client"
        primaryCtaHref="/contact"
        secondaryCtaText="See Project Case Studies"
        secondaryCtaHref="/case-studies"
        metrics={[
          { value: "4.9 / 5", label: "Average Client Rating" },
          { value: "98.7%", label: "Annual AMC Renewal Rate" },
          { value: "500+", label: "UAE Businesses Served" },
          { value: "< 15m", label: "Average Helpdesk Speed" },
        ]}
      />

      {/* ==================== SECTION 2: FLOATING 4-CARD TRUST STRIP ==================== */}
      <section className={styles.floatingStripSection}>
        <div className={styles.floatingStripGrid}>
          {TRUST_HIGHLIGHTS.map((item) => (
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

      {/* ==================== SECTION 3: FEATURED CLIENT IMPACT SPOTLIGHT ==================== */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.splitRow}>
            <div className={styles.imageShowcaseWrap}>
              <Image
                src="/images/happy-customers-card.jpg"
                alt="Happy UAE Enterprise Clients — CATS Computers"
                fill
                sizes="(max-width: 992px) 100vw, 600px"
                className={styles.imageShowcaseImg}
              />
              <div className={styles.floatingStatBadge}>
                <span className={styles.floatingStatValue}>98.7% Retention</span>
                <span className={styles.floatingStatLabel}>
                  Clients Stay With Us Because We Answer Fast &amp; Fix Issues Right
                </span>
              </div>
            </div>

            <div>
              <div className={styles.pillBadgeLight}>
                <span className={styles.pillDot} />
                <span>Why Clients Recommend Us</span>
              </div>
              <h2 className={styles.sectionTitleLight}>
                Real Peace of Mind for Busy UAE Teams.
              </h2>
              <p className={styles.cardTextLight}>
                Over 65% of our new clients come to us through word-of-mouth referrals or after feeling frustrated with slow, unresponsive IT vendors.
              </p>
              <p className={styles.cardTextLight}>
                From the first free site visit in Dubai to years of trouble-free AMC support, our focus is simple: keep your Wi-Fi fast, your data backed up, and your staff smiling.
              </p>
              <ul className={styles.checkList}>
                <li className={styles.checkItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Direct access to friendly engineers in Burdubai — no call-center runaround</span>
                </li>
                <li className={styles.checkItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Weekend &amp; evening upgrades so your business never loses working hours</span>
                </li>
                <li className={styles.checkItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>One reliable team for networking, servers, CCTV, phones, and hardware</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 4: 6 DETAILED SUCCESS STORIES GRID (WITH IMAGES) ==================== */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.pillBadgeLight}>
              <span className={styles.pillDot} />
              <span>Verified UAE Client Reviews</span>
            </div>
            <h2 className={styles.sectionTitleLight}>
              What Business Owners &amp; IT Leaders Say About Us.
            </h2>
            <p className={styles.sectionSubtitleLight}>
              Honest feedback from companies across Business Bay, JAFZA, DIFC, Burdubai, and Sharjah.
            </p>
          </div>

          <div className={styles.grid2}>
            {TESTIMONIALS_DATA.map((story, idx) => (
              <article key={story.id} className={styles.mediaCard}>
                <div className={styles.mediaCardThumb} style={{ height: "215px" }}>
                  <Image
                    src={STORY_IMAGES[idx % STORY_IMAGES.length]}
                    alt={`${story.company} — ${story.impactMetric}`}
                    fill
                    sizes="(max-width: 992px) 100vw, 600px"
                    className={styles.mediaCardImg}
                  />
                  <span className={styles.mediaCardTopBadge}>
                    {story.location} • {story.impactMetric}
                  </span>
                </div>

                <div className={styles.mediaCardBody}>
                  <div>
                    <div className={styles.cardBadgeRow}>
                      <span className={styles.tagPill}>{story.impactMetric}</span>
                      <span style={{ color: "#f59e0b", fontSize: "15px", letterSpacing: "2px" }}>
                        {"★".repeat(story.rating)}
                      </span>
                    </div>

                    <p
                      className={styles.cardTextLight}
                      style={{
                        fontSize: "15.5px",
                        color: "#1e293b",
                        fontStyle: "italic",
                        marginBottom: "20px",
                      }}
                    >
                      &ldquo;{story.quote}&rdquo;
                    </p>

                    <div className={styles.vendorCluster} style={{ marginBottom: "20px" }}>
                      {story.servicesUsed.map((srv) => (
                        <span key={srv} className={styles.vendorChip}>
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    style={{
                      paddingTop: "16px",
                      borderTop: "1px solid rgba(15, 23, 42, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "12px",
                    }}
                  >
                    <div>
                      <strong style={{ display: "block", fontSize: "15px", color: "#0b132b" }}>
                        {story.author}
                      </strong>
                      <span style={{ fontSize: "13px", color: "#64748b" }}>
                        {story.role} — {story.company}
                      </span>
                    </div>
                    <span className={styles.numBadge}>{story.location}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "42px" }}>
            <Link href="/case-studies" className={styles.submitBtn}>
              <span>Explore Full Project Case Studies</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 5: PREVIOUS VENDOR VS CATS COMPUTERS ==================== */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.pillBadgeLight}>
              <span className={styles.pillDot} />
              <span>Why Clients Switch</span>
            </div>
            <h2 className={styles.sectionTitleLight}>
              What Clients Experienced Before vs. After Switching to CATS.
            </h2>
          </div>

          <div className={styles.comparisonGrid}>
            <div className={styles.comparisonCardProblem}>
              <div className={styles.mediaCardThumb} style={{ height: "200px" }}>
                <Image
                  src="/images/about-engineer-left.jpg"
                  alt="With Previous IT Vendor"
                  fill
                  sizes="(max-width: 992px) 100vw, 600px"
                  className={styles.mediaCardImg}
                />
                <span className={styles.mediaCardTopBadge}>With Previous Vendors</span>
              </div>
              <div className={styles.mediaCardBody}>
                <h3 className={styles.cardTitleLight}>Slow Replies &amp; Repeated Faults</h3>
                <ul className={styles.problemList}>
                  <li className={styles.problemItem}>
                    <span className={styles.problemIcon}>✕</span>
                    <span>Waiting 2–3 days just to get a simple printer or email issue fixed</span>
                  </li>
                  <li className={styles.problemItem}>
                    <span className={styles.problemIcon}>✕</span>
                    <span>Same Wi-Fi and server problems coming back every week</span>
                  </li>
                  <li className={styles.problemItem}>
                    <span className={styles.problemIcon}>✕</span>
                    <span>No monthly preventive visits even after paying for an AMC</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.comparisonCardSolution}>
              <div className={styles.mediaCardThumb} style={{ height: "200px" }}>
                <Image
                  src="/images/company/team-group-1.jpg"
                  alt="After Switching to CATS Computers"
                  fill
                  sizes="(max-width: 992px) 100vw, 600px"
                  className={styles.mediaCardImg}
                />
                <span className={styles.mediaCardTopBadge}>After Switching to CATS</span>
              </div>
              <div className={styles.mediaCardBody}>
                <h3 className={styles.cardTitleDark}>Fast Action &amp; Permanent Fixes</h3>
                <ul className={styles.checkList} style={{ marginTop: "18px", marginBottom: 0 }}>
                  <li className={styles.checkItemDark}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Remote engineer connects within 15 minutes of your call or WhatsApp</span>
                  </li>
                  <li className={styles.checkItemDark}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Root-cause fixes with genuine hardware so problems stay solved</span>
                  </li>
                  <li className={styles.checkItemDark}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Scheduled monthly on-site health checks and clear health reports</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 6: 4 GUARANTEES EVERY CLIENT GETS ==================== */}
      <section className={styles.sectionDark}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.pillBadgeDark}>
              <span className={styles.pillDot} />
              <span>Our 4 Client Guarantees</span>
            </div>
            <h2 className={styles.sectionTitleDark}>
              What We Promise Every Business We Work With.
            </h2>
          </div>

          <div className={styles.grid4}>
            {CLIENT_GUARANTEES.map((g) => (
              <div
                key={g.step}
                className={styles.mediaCard}
                style={{
                  background: "rgba(10, 25, 78, 0.72)",
                  borderColor: "rgba(96, 165, 250, 0.24)",
                }}
              >
                <div className={styles.mediaCardThumb} style={{ height: "165px" }}>
                  <Image
                    src={g.image}
                    alt={g.title}
                    fill
                    sizes="(max-width: 992px) 100vw, 320px"
                    className={styles.mediaCardImg}
                  />
                  <span className={styles.mediaCardTopBadge}>PROMISE {g.step}</span>
                </div>
                <div className={styles.mediaCardBody} style={{ padding: "22px" }}>
                  <div>
                    <h3 className={styles.cardTitleDark}>{g.title}</h3>
                    <p className={styles.cardTextDark} style={{ marginBottom: 0 }}>
                      {g.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 7: INTERACTIVE TESTIMONIALS CAROUSEL ==================== */}
      <TestimonialsSection />

      {/* ==================== SECTION 8: 30+ TRUSTED BRANDS ==================== */}
      <TrustedBrandsSection />

      {/* ==================== SECTION 9: CTA BANNER ==================== */}
      <CtaBanner />
    </main>
  );
}
