import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import TrustedBrandsSection from "@/components/TrustedBrandsSection/TrustedBrandsSection";
import CtaBanner from "@/components/CtaBanner/CtaBanner";
import { TESTIMONIALS_DATA } from "@/data/siteData";
import styles from "./TestimonialsPage.module.css";

export const metadata: Metadata = {
  title: "Client Success Stories & Reviews | CATS Computers L.L.C — Dubai",
  description:
    "Read real client reviews and easy-to-understand IT success stories from Dubai offices, JAFZA warehouses, clinics, and shops working with CATS Computers L.L.C.",
};

const STORY_IMAGES = [
  "/images/hero-huawei-elite.jpg",
  "/images/industry-manufacturing.jpg",
  "/images/case-study-cloud-migration.jpg",
  "/images/about-team-right.jpg",
  "/images/case-study-boardroom.jpg",
  "/images/company/award-ruijie-adp-2024-b.jpg",
];

const SCORE_METRICS = [
  { label: "15-Minute Remote Helpdesk Speed", pct: "99%" },
  { label: "100% Genuine UAE Distributor Hardware", pct: "100%" },
  { label: "Neat & Labeled Cabling Handover", pct: "99%" },
  { label: "Annual AMC Contract Renewal Rate", pct: "98.7%" },
];

export default function TestimonialsPage() {
  return (
    <main className={styles.testimonialsPage}>
      {/* ==================== 1. RATING SCORECARD SPLIT HERO ==================== */}
      <section className={styles.ratingHero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div>
              <div className={styles.goldRatingPill}>
                <span>★★★★★</span>
                <span>4.9 / 5.0 Verified UAE Client Rating</span>
              </div>

              <h1 className={styles.heroTitle}>
                Why 500+ Businesses Across Dubai &amp; the UAE Stay With Us Year After Year.
              </h1>

              <p className={styles.heroLead}>
                Over 65% of our new clients come to us through word-of-mouth referrals. Read real
                reviews from business owners, clinic directors, and IT managers across Business Bay,
                JAFZA, DIFC, and Burdubai.
              </p>

              <div className={styles.heroBtns}>
                <Link href="/contact" className={styles.primaryBtn}>
                  <span>Book a Free Site Visit</span>
                  <span>→</span>
                </Link>
                <Link href="/case-studies" className={styles.secondaryBtn}>
                  <span>View Project Case Studies</span>
                </Link>
              </div>
            </div>

            {/* Right Rating Breakdown Scorecard */}
            <div className={styles.scorecardBox}>
              <div className={styles.scorecardTop}>
                <div className={styles.bigScoreCircle}>
                  <strong>4.9</strong>
                  <span>OUT OF 5.0</span>
                </div>
                <div>
                  <div className={styles.scorecardStars}>★★★★★</div>
                  <strong style={{ fontSize: "18px", display: "block" }}>
                    98.7% Annual AMC Retention
                  </strong>
                  <span style={{ fontSize: "13px", color: "#cbd5e1" }}>
                    Based on 500+ corporate offices, warehouses &amp; clinics in UAE
                  </span>
                </div>
              </div>

              <div className={styles.scoreBarsList}>
                {SCORE_METRICS.map((m) => (
                  <div key={m.label} className={styles.scoreBarItem}>
                    <div className={styles.scoreBarMeta}>
                      <span>{m.label}</span>
                      <strong>{m.pct}</strong>
                    </div>
                    <div className={styles.scoreBarTrack}>
                      <div className={styles.scoreBarFill} style={{ width: m.pct }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 2. 3-COLUMN EXECUTIVE WALL OF LOVE ==================== */}
      <section className={styles.wallSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Verified Client Voices</span>
            <h2 className={styles.sectionTitle}>
              What Business Owners &amp; IT Leaders Say About Working With Us.
            </h2>
            <p className={styles.sectionSub}>
              Every review below reflects a real installation or ongoing 24/7 AMC support contract
              in the UAE.
            </p>
          </div>

          <div className={styles.quoteWallGrid}>
            {TESTIMONIALS_DATA.map((story, idx) => (
              <article key={story.id} className={styles.quoteCard}>
                <div className={styles.quotePhotoHeader}>
                  <Image
                    src={STORY_IMAGES[idx % STORY_IMAGES.length]}
                    alt={`${story.company} — ${story.impactMetric}`}
                    fill
                    sizes="(max-width: 1080px) 100vw, 420px"
                    className={styles.coverImg}
                  />
                  <span className={styles.quoteImpactBadge}>✓ {story.impactMetric}</span>
                </div>

                <div className={styles.quoteBody}>
                  <div>
                    <div className={styles.starsRow}>{"★".repeat(story.rating)}</div>
                    <p className={styles.quoteText}>&ldquo;{story.quote}&rdquo;</p>
                    <div className={styles.servicesChips}>
                      {story.servicesUsed.map((srv) => (
                        <span key={srv} className={styles.srvChip}>
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.authorFooter}>
                    <div>
                      <span className={styles.authorName}>{story.author}</span>
                      <span className={styles.authorRole}>
                        {story.role} — {story.company}
                      </span>
                    </div>
                    <span className={styles.locationPill}>📍 {story.location}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 3. INTERACTIVE CAROUSEL, BRANDS & CTA ==================== */}
      <TestimonialsSection />
      <TrustedBrandsSection />
      <CtaBanner />
    </main>
  );
}
