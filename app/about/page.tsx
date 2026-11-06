import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TrustedBrandsSection from "@/components/TrustedBrandsSection/TrustedBrandsSection";
import CtaBanner from "@/components/CtaBanner/CtaBanner";
import styles from "./AboutPage.module.css";

export const metadata: Metadata = {
  title: "About Us | CATS Computers L.L.C — Complete IT & Hardware Partner in Dubai",
  description:
    "Learn about CATS Computers L.L.C in Burdubai, Dubai — your friendly, one-stop partner for office Wi-Fi, servers, cybersecurity, CCTV, genuine hardware, and 24/7 IT support.",
};

const RIBBON_STATS = [
  {
    value: "30+",
    label: "Official Tech Brands",
    sub: "Direct UAE Warranty Stock",
    image: "/images/company/huawei-ekit-award.jpg",
  },
  {
    value: "500+",
    label: "UAE Offices & Sites",
    sub: "Dubai, Abu Dhabi & Sharjah",
    image: "/images/company/team-group-1.jpg",
  },
  {
    value: "< 15m",
    label: "Remote Helpdesk",
    sub: "Fast Friendly Troubleshooting",
    image: "/images/service-managed-it.jpg",
  },
  {
    value: "24/7",
    label: "Annual AMC Care",
    sub: "98.7% Client Renewal Rate",
    image: "/images/company/ruijie-cctv-discussion.jpg",
  },
];

const AWARDS_LIST = [
  {
    badge: "Huawei Enterprise — UAE",
    title: "Authorized Elite Distribution Partner (Huawei eKit)",
    description:
      "Awarded by Huawei for supplying and setting up high-speed business Wi-Fi, switches, and smart office networks across the UAE.",
    image: "/images/company/huawei-ekit-award.jpg",
  },
  {
    badge: "Ruijie Reyee — UAE",
    title: "Top Performing Golden Partner (ADP) 2024",
    description:
      "Recognized as a leading UAE distributor and installer for Ruijie & Reyee cloud-managed networking and warehouse Wi-Fi.",
    image: "/images/company/award-ruijie-adp-2024-b.jpg",
  },
  {
    badge: "Burdubai Headquarters",
    title: "Certified Multi-Vendor Engineering & Support Team",
    description:
      "Our showroom, lab, and warehouse on Al Musallah Street house certified network, security, and server specialists ready to help.",
    image: "/images/company/team-group-2.jpg",
  },
];

export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      {/* ==================== 1. ASYMMETRIC EDITORIAL SPLIT HERO ==================== */}
      <section className={styles.editorialHero}>
        <div className={styles.container}>
          <div className={styles.editorialHeroGrid}>
            <div>
              <div className={styles.heroBreadcrumb}>
                <Link href="/">Home</Link>
                <span>/</span>
                <span>About CATS Computers L.L.C</span>
              </div>

              <h1 className={styles.heroTitle}>
                Dubai&apos;s One-Stop Partner for{" "}
                <span className={styles.heroHighlight}>
                  Genuine Hardware &amp; Worry-Free Office IT.
                </span>
              </h1>

              <p className={styles.heroLead}>
                At <strong>CATS Computers L.L.C</strong> (Computer Accessories &amp; Technical
                Services), we combine an authorized IT hardware warehouse in Burdubai with our own
                in-house team of friendly network, security, and support engineers.
              </p>

              <div className={styles.hqLocationCard}>
                <div className={styles.hqPinCircle}>📍</div>
                <div className={styles.hqLocationText}>
                  <strong>Burdubai Showroom, Lab &amp; Distribution Hub</strong>
                  <span>
                    Office No #6, Water Tank Building, Al Musallah Street, Burdubai, Dubai, UAE
                  </span>
                </div>
              </div>

              <div className={styles.heroCtaGroup}>
                <Link href="/services" className={styles.primaryBtn}>
                  <span>Explore All 12 IT Services</span>
                  <span>→</span>
                </Link>
                <Link href="/contact" className={styles.secondaryBtn}>
                  <span>Visit or Call Our Dubai Team</span>
                </Link>
              </div>
            </div>

            {/* Right Overlapping Photo Collage */}
            <div className={styles.heroCollage}>
              <div className={styles.mainPhotoFrame}>
                <Image
                  src="/images/company/team-group-1.jpg"
                  alt="CATS Computers L.L.C Team in Burdubai, Dubai"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className={styles.collageImg}
                />
              </div>

              <div className={styles.secondaryPhotoFrame}>
                <Image
                  src="/images/company/huawei-ekit-team.jpg"
                  alt="CATS Computers Authorized Distribution & Engineering"
                  fill
                  sizes="340px"
                  className={styles.collageImg}
                />
              </div>

              <div className={styles.collageBadge}>
                <strong>100% Genuine</strong>
                <span>Authorized Huawei eKit Elite &amp; Ruijie Golden Partner in UAE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 2. ARCHITECTURAL PHOTO STATS RIBBON ==================== */}
      <section className={styles.statsRibbon}>
        <div className={styles.container}>
          <div className={styles.statsRibbonGrid}>
            {RIBBON_STATS.map((item) => (
              <div key={item.label} className={styles.statRibbonItem}>
                <div className={styles.statThumb}>
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    sizes="60px"
                    className={styles.collageImg}
                  />
                </div>
                <div>
                  <div className={styles.statVal}>{item.value}</div>
                  <div className={styles.statLabel}>{item.label}</div>
                  <div className={styles.statSub}>{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 3. ZIG-ZAG EDITORIAL STORY CHAPTERS ==================== */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.eyebrow}>Our Story &amp; Approach</div>
            <h2 className={styles.sectionTitle}>
              Why We Built a Company That Supplies the Box AND Installs It Right.
            </h2>
            <p className={styles.sectionSubtitle}>
              Most businesses in Dubai face a frustrating choice: buy hardware from a box-mover who
              offers zero installation help, or hire a freelance technician who buys overpriced parts.
              We solved both problems under one roof.
            </p>
          </div>

          {/* Chapter 01 */}
          <div className={styles.chapterRow}>
            <div className={styles.chapterPhotoWrap}>
              <Image
                src="/images/company/huawei-reception.jpg"
                alt="Direct Hardware Distribution in Burdubai"
                fill
                sizes="(max-width: 1024px) 100vw, 580px"
                className={styles.collageImg}
              />
            </div>
            <div>
              <span className={styles.chapterNumberTag}>Chapter 01 • Direct Distribution</span>
              <h3 className={styles.chapterHeading}>
                Official Brand Stock at Fair Wholesale Prices
              </h3>
              <p className={styles.chapterText}>
                From our warehouse on Al Musallah Street in Burdubai, we stock and distribute
                100% genuine routers, switches, Wi-Fi 6/7 access points, firewalls, servers, and CCTV
                systems from 30+ global manufacturers.
              </p>
              <ul className={styles.chapterPoints}>
                <li>
                  <span className={styles.pointDot}>✓</span>
                  <span>Authorized Huawei eKit Elite &amp; Ruijie Reyee Golden Partner</span>
                </li>
                <li>
                  <span className={styles.pointDot}>✓</span>
                  <span>Official UAE serial numbers with direct manufacturer warranty</span>
                </li>
                <li>
                  <span className={styles.pointDot}>✓</span>
                  <span>Ready stock in Dubai — no waiting weeks for overseas shipping</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Chapter 02 (Dark Reverse) */}
          <div className={`${styles.chapterRow} ${styles.chapterRowReverse}`}>
            <div>
              <span className={styles.chapterNumberTag}>Chapter 02 • Turnkey Engineering</span>
              <h3 className={styles.chapterHeading} style={{ color: "#ffffff" }}>
                One In-House Team for Your Entire Office Setup
              </h3>
              <p className={styles.chapterText} style={{ color: "#cbd5e1" }}>
                Whether you are moving into a new office in Business Bay or upgrading a large
                warehouse in JAFZA, our own salaried engineers pull the cables, dress the server
                rack, mount the cameras, and configure your cloud emails.
              </p>
              <ul className={styles.chapterPoints}>
                <li>
                  <span className={styles.pointDot}>✓</span>
                  <span>Fluke-certified Cat6/Cat6A &amp; fiber cabling with neat labeling</span>
                </li>
                <li>
                  <span className={styles.pointDot}>✓</span>
                  <span>Pre-staged in our Burdubai lab for zero-downtime weekend cutovers</span>
                </li>
                <li>
                  <span className={styles.pointDot}>✓</span>
                  <span>Year-round 24/7 AMC support with 15-minute remote response</span>
                </li>
              </ul>
            </div>
            <div className={styles.chapterPhotoWrap}>
              <Image
                src="/images/company/ruijie-cctv-discussion.jpg"
                alt="In-House Dubai Engineering Team"
                fill
                sizes="(max-width: 1024px) 100vw, 580px"
                className={styles.collageImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 4. INSIDE OUR BURDUBAI SHOWROOM & LAB BENTO MOSAIC ==================== */}
      <section className={styles.bentoLabSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.eyebrow}>Inside Our Burdubai Facility</div>
            <h2 className={styles.sectionTitle}>
              Take a Look Inside Our Dubai Showroom, Testing Lab &amp; Support Desk.
            </h2>
            <p className={styles.sectionSubtitle}>
              We welcome clients and fit-out partners to visit our Al Musallah Street center any
              time to see live equipment demos before making a decision.
            </p>
          </div>

          <div className={styles.bentoMosaicGrid}>
            {/* Left Tall Card */}
            <div className={styles.bentoTallCard}>
              <Image
                src="/images/hero-huawei-elite.jpg"
                alt="CATS Computers Live Huawei eKit & Ruijie Demo Center"
                fill
                sizes="(max-width: 1024px) 100vw, 680px"
                className={styles.collageImg}
              />
              <div className={styles.bentoTallOverlay} />
              <div className={styles.bentoTallContent}>
                <span className={styles.chapterNumberTag}>Live Demo Center • Burdubai</span>
                <h3 style={{ fontSize: "26px", fontWeight: 600, margin: "0 0 10px" }}>
                  Live Huawei eKit, Ruijie &amp; Smart Boardroom Experience Zone
                </h3>
                <p style={{ fontSize: "15px", lineHeight: 1.65, color: "#dbeafe", margin: 0 }}>
                  Test our cloud-managed switches, Wi-Fi 7 access points, 4K interactive IdeaHub
                  screens, and AI CCTV cameras in person with our engineers.
                </p>
              </div>
            </div>

            {/* Right 3 Stacked Horizontal Cards */}
            <div className={styles.bentoRightStack}>
              <div className={styles.bentoHorizontalCard}>
                <div className={styles.bentoHorizontalThumb}>
                  <Image
                    src="/images/company/ruijie-partner-lobby.jpg"
                    alt="Pre-Configuration & Staging Lab"
                    fill
                    sizes="180px"
                    className={styles.collageImg}
                  />
                </div>
                <div>
                  <span className={styles.bentoCardTag}>01 • Pre-Staging Lab</span>
                  <h3 className={styles.bentoCardTitle}>Pre-Configured Before Delivery</h3>
                  <p className={styles.bentoCardDesc}>
                    We unbox, update firmware, and configure VLANs and firewall rules in our lab so
                    on-site installation is fast and clean.
                  </p>
                </div>
              </div>

              <div className={styles.bentoHorizontalCard}>
                <div className={styles.bentoHorizontalThumb}>
                  <Image
                    src="/images/service-managed-it.jpg"
                    alt="24/7 Remote Helpdesk & NOC"
                    fill
                    sizes="180px"
                    className={styles.collageImg}
                  />
                </div>
                <div>
                  <span className={styles.bentoCardTag}>02 • 24/7 Support Desk</span>
                  <h3 className={styles.bentoCardTitle}>15-Minute Remote Helpdesk</h3>
                  <p className={styles.bentoCardDesc}>
                    Our support engineers monitor server health, daily backups, and firewall alerts
                    around the clock for AMC clients.
                  </p>
                </div>
              </div>

              <div className={styles.bentoHorizontalCard}>
                <div className={styles.bentoHorizontalThumb}>
                  <Image
                    src="/images/case-study-boardroom.jpg"
                    alt="Ready Warehouse Stock & Spare Units"
                    fill
                    sizes="180px"
                    className={styles.collageImg}
                  />
                </div>
                <div>
                  <span className={styles.bentoCardTag}>03 • Ready Dubai Stock</span>
                  <h3 className={styles.bentoCardTitle}>Same-Day Hardware Dispatch</h3>
                  <p className={styles.bentoCardDesc}>
                    With switches, cables, cameras, and standby loaner units in stock, your business
                    never waits weeks for parts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 5. OFFICIAL TROPHY & AWARDS PEDESTAL ==================== */}
      <section className={styles.awardsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div
              className={styles.eyebrow}
              style={{
                background: "rgba(56, 189, 248, 0.14)",
                borderColor: "rgba(56, 189, 248, 0.35)",
                color: "#7dd3fc",
              }}
            >
              Official Recognition
            </div>
            <h2 className={styles.sectionTitle} style={{ color: "#ffffff" }}>
              Awarded By Global Technology Leaders in the UAE.
            </h2>
            <p className={styles.sectionSubtitle} style={{ color: "#cbd5e1" }}>
              Our official distributor trophies confirm that you are dealing directly with an
              authorized, certified partner.
            </p>
          </div>

          <div className={styles.awardsPedestalGrid}>
            {AWARDS_LIST.map((award) => (
              <article key={award.title} className={styles.awardPedestalCard}>
                <div className={styles.awardPhotoFrame}>
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className={styles.collageImg}
                  />
                  <span className={styles.awardGoldRibbon}>★ {award.badge}</span>
                </div>
                <div className={styles.awardBody}>
                  <div>
                    <h3 className={styles.awardTitle}>{award.title}</h3>
                    <p className={styles.awardDesc}>{award.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 6. MISSION, VISION & PROMISE TRIAD ==================== */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <div className={styles.valuesTriad}>
            <div className={styles.valueBox}>
              <div className={styles.valueNum}>01 / MISSION</div>
              <h3 className={styles.valueTitle}>Keep Your Office Running Without IT Stress</h3>
              <p className={styles.valueText}>
                To deliver fast Wi-Fi, safe servers, neat cabling, and friendly 24/7 support so
                business owners in the UAE can focus 100% on growing their company.
              </p>
            </div>

            <div className={styles.valueBox}>
              <div className={styles.valueNum}>02 / VISION</div>
              <h3 className={styles.valueTitle}>Dubai&apos;s Most Trusted All-in-One Tech Partner</h3>
              <p className={styles.valueText}>
                To be the first team UAE businesses call whenever they open a new branch, upgrade
                their security, or need genuine hardware delivered and installed on time.
              </p>
            </div>

            <div className={styles.valueBox}>
              <div className={styles.valueNum}>03 / PROMISE</div>
              <h3 className={styles.valueTitle}>Honest Advice &amp; Zero Hidden Charges</h3>
              <p className={styles.valueText}>
                We explain every solution in plain English, recommend only what your space actually
                needs, and stand behind our work 24 hours a day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 7. 30+ TRUSTED BRANDS & CTA ==================== */}
      <TrustedBrandsSection />
      <CtaBanner />
    </main>
  );
}
