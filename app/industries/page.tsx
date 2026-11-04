import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner/PageBanner";
import IndustrySolutions from "@/components/IndustrySolutions/IndustrySolutions";
import TrustedBrandsSection from "@/components/TrustedBrandsSection/TrustedBrandsSection";
import ConsultationSection from "@/components/ConsultationSection/ConsultationSection";
import { INDUSTRIES_DATA } from "@/data/siteData";
import styles from "@/styles/InnerPages.module.css";

export const metadata: Metadata = {
  title: "Industries We Serve | CATS Computers L.L.C — Dubai, UAE",
  description:
    "See how CATS Computers L.L.C sets up reliable Wi-Fi, servers, CCTV, and 24/7 IT support for offices, warehouses, clinics, financial firms, hotels, and retail shops in Dubai.",
};

const SECTOR_HIGHLIGHTS = [
  {
    num: "01",
    tag: "Offices & Towers",
    title: "200+ Corporate HQs",
    desc: "Fast Wi-Fi 6/7, Microsoft 365 email, and smart meeting rooms across Business Bay & DIFC.",
  },
  {
    num: "02",
    tag: "JAFZA & Al Quoz",
    title: "85+ Warehouses",
    desc: "Long-range Wi-Fi for barcode scanners, outdoor fiber cables, and 4K loading-bay CCTV.",
  },
  {
    num: "03",
    tag: "Clinics & Hotels",
    title: "99.99% Uptime Care",
    desc: "Always-on networks for patient records, hotel guest rooms, and restaurant POS billing.",
  },
  {
    num: "04",
    tag: "Retail & Trading",
    title: "300+ Shops Connected",
    desc: "Connecting multiple showrooms, cash counters, and Tally/ERP servers into one live system.",
  },
];

const ROLLOUT_STEPS = [
  {
    step: "01",
    title: "Free On-Site Facility Check",
    desc: "We visit your office, clinic, hotel, or warehouse in Dubai to measure Wi-Fi coverage, cable paths, and camera angles.",
    image: "/images/process-step-1.jpg",
  },
  {
    step: "02",
    title: "Industry-Fit Design & Quote",
    desc: "We select the right hardware for your environment — whether that is rugged warehouse Wi-Fi or quiet boardroom AV.",
    image: "/images/process-step-2.jpg",
  },
  {
    step: "03",
    title: "After-Hours / Zero-Disruption Setup",
    desc: "We install and switch over your systems without stopping your cash counters, reception desk, or warehouse dispatch.",
    image: "/images/process-step-3.jpg",
  },
  {
    step: "04",
    title: "24/7 Sector-Specific AMC Support",
    desc: "Our Dubai helpdesk monitors your system and dispatches engineers quickly whenever your branch needs help.",
    image: "/images/process-step-4.jpg",
  },
];

const COMPLIANCE_CARDS = [
  {
    badge: "Surveillance Standards",
    title: "Clear 31–90 Day CCTV Recording",
    desc: "High-definition IP cameras and NVR storage sized properly for UAE commercial, warehouse, and retail security standards.",
    image: "/images/company/ruijie-cctv-discussion.jpg",
  },
  {
    badge: "Data & Finance Safety",
    title: "Firewall & Ransomware Protection",
    desc: "Keeping patient records, financial accounts, and company files safe with Fortinet/Sophos firewalls and daily backups.",
    image: "/images/card-cybersecurity.jpg",
  },
  {
    badge: "Multi-Branch Connectivity",
    title: "Safe Branch-to-Branch Links",
    desc: "Secure VPN and fiber links so your head office, warehouse, and retail showrooms share live billing and inventory data.",
    image: "/images/company/huawei-ekit-team.jpg",
  },
];

export default function IndustriesPage() {
  return (
    <main className={styles.pageMain}>
      {/* ==================== SECTION 1: HERO BANNER ==================== */}
      <PageBanner
        eyebrow="SOLUTIONS FOR EVERY BUSINESS TYPE — UAE"
        title="Industries We Serve Across Dubai & the UAE."
        subtitle="A high-ceiling warehouse in JAFZA needs very different Wi-Fi and cameras than a medical clinic or a corporate office in Business Bay. We design and support IT setups built specifically for your type of business."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industries We Serve" }]}
        bgImage="/images/industry-manufacturing.jpg"
        primaryCtaText="Book a Free Site Visit"
        primaryCtaHref="/contact"
        secondaryCtaText="See Real Case Studies"
        secondaryCtaHref="/case-studies"
        metrics={[
          { value: "6+", label: "Core Industries Served" },
          { value: "500+", label: "UAE Sites Connected" },
          { value: "100%", label: "Tailored To Your Space" },
          { value: "24/7", label: "Local Dubai Support" },
        ]}
      />

      {/* ==================== SECTION 2: FLOATING 4-CARD INDUSTRY STRIP ==================== */}
      <section className={styles.floatingStripSection}>
        <div className={styles.floatingStripGrid}>
          {SECTOR_HIGHLIGHTS.map((item) => (
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

      {/* ==================== SECTION 3: 6 DETAILED INDUSTRY CARDS ==================== */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.pillBadgeLight}>
              <span className={styles.pillDot} />
              <span>Built for Your Sector</span>
            </div>
            <h2 className={styles.sectionTitleLight}>
              IT Solutions Designed for How Your Business Works.
            </h2>
            <p className={styles.sectionSubtitleLight}>
              Find your industry below to see the common problems we solve and the exact solutions we set up.
            </p>
          </div>

          <div className={styles.grid2}>
            {INDUSTRIES_DATA.map((ind) => (
              <article key={ind.id} className={styles.mediaCard}>
                <div className={styles.mediaCardThumb} style={{ height: "250px" }}>
                  <Image
                    src={ind.image}
                    alt={ind.name}
                    fill
                    sizes="(max-width: 992px) 100vw, 640px"
                    className={styles.mediaCardImg}
                  />
                  <span className={styles.mediaCardTopBadge}>
                    {ind.id} • {ind.badge}
                  </span>
                </div>
                <div className={styles.mediaCardBody}>
                  <div>
                    <div className={styles.cardBadgeRow}>
                      <span className={styles.tagPill}>
                        {ind.statValue} {ind.statLabel}
                      </span>
                    </div>
                    <h3 className={styles.cardTitleLight}>{ind.name}</h3>
                    <p className={styles.cardTextLight}>{ind.description}</p>

                    <strong
                      style={{
                        display: "block",
                        fontSize: "13px",
                        color: "#0b132b",
                        marginBottom: "8px",
                      }}
                    >
                      Everyday Challenges We Solve:
                    </strong>
                    <ul className={styles.checkList} style={{ margin: "0 0 18px" }}>
                      {ind.challengesSolved.map((ch) => (
                        <li key={ch} className={styles.checkItem} style={{ fontSize: "13.5px" }}>
                          <span className={styles.checkIcon}>✓</span>
                          <span>{ch}</span>
                        </li>
                      ))}
                    </ul>

                    <div className={styles.vendorCluster} style={{ marginBottom: "22px" }}>
                      {ind.recommendedSolutions.map((sol) => (
                        <span key={sol} className={styles.vendorChip}>
                          {sol}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link href="/contact" className={styles.cardLink}>
                    <span>Get a Quote for {ind.name.split(",")[0]}</span>
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 4: GENERIC IT VS INDUSTRY-TAILORED IT ==================== */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.pillBadgeLight}>
              <span className={styles.pillDot} />
              <span>Why Right Sizing Matters</span>
            </div>
            <h2 className={styles.sectionTitleLight}>
              Why Home-Grade Equipment Fails in Busy Workplaces.
            </h2>
            <p className={styles.sectionSubtitleLight}>
              We match the right hardware to your building type so you never waste money or suffer dead zones.
            </p>
          </div>

          <div className={styles.comparisonGrid}>
            <div className={styles.comparisonCardProblem}>
              <div className={styles.mediaCardThumb} style={{ height: "205px" }}>
                <Image
                  src="/images/about-engineer-left.jpg"
                  alt="One-Size-Fits-All IT Problems"
                  fill
                  sizes="(max-width: 992px) 100vw, 600px"
                  className={styles.mediaCardImg}
                />
                <span className={styles.mediaCardTopBadge}>Generic Office Routers</span>
              </div>
              <div className={styles.mediaCardBody}>
                <div>
                  <h3 className={styles.cardTitleLight}>Wrong Hardware for the Job</h3>
                  <ul className={styles.problemList}>
                    <li className={styles.problemItem}>
                      <span className={styles.problemIcon}>✕</span>
                      <span>Standard office Wi-Fi cannot reach between tall steel warehouse racks</span>
                    </li>
                    <li className={styles.problemItem}>
                      <span className={styles.problemIcon}>✕</span>
                      <span>Guest Wi-Fi shares the same network as private accounting computers</span>
                    </li>
                    <li className={styles.problemItem}>
                      <span className={styles.problemIcon}>✕</span>
                      <span>Indoor cables get damaged quickly in outdoor yards or loading bays</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.comparisonCardSolution}>
              <div className={styles.mediaCardThumb} style={{ height: "205px" }}>
                <Image
                  src="/images/industry-manufacturing.jpg"
                  alt="Industry Tailored IT by CATS Computers"
                  fill
                  sizes="(max-width: 992px) 100vw, 600px"
                  className={styles.mediaCardImg}
                />
                <span className={styles.mediaCardTopBadge}>CATS Custom Sector Design</span>
              </div>
              <div className={styles.mediaCardBody}>
                <div>
                  <h3 className={styles.cardTitleDark}>Built Specifically for Your Environment</h3>
                  <ul className={styles.checkList} style={{ marginTop: "18px", marginBottom: 0 }}>
                    <li className={styles.checkItemDark}>
                      <span className={styles.checkIcon}>✓</span>
                      <span>Directional high-gain APs for warehouses &amp; in-room wall APs for hotels</span>
                    </li>
                    <li className={styles.checkItemDark}>
                      <span className={styles.checkIcon}>✓</span>
                      <span>Separate, safe networks for guests, CCTV cameras, and finance staff</span>
                    </li>
                    <li className={styles.checkItemDark}>
                      <span className={styles.checkIcon}>✓</span>
                      <span>Weatherproof outdoor cameras and armored fiber cables that last for years</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 5: INTERACTIVE INDUSTRY SOLUTIONS SHOWCASE ==================== */}
      <IndustrySolutions />

      {/* ==================== SECTION 6: 4-STEP SECTOR ROLLOUT WORKFLOW ==================== */}
      <section className={styles.sectionDark}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.pillBadgeDark}>
              <span className={styles.pillDot} />
              <span>Zero Business Disruption</span>
            </div>
            <h2 className={styles.sectionTitleDark}>
              How We Upgrade Your Facility Without Stopping Work.
            </h2>
            <p className={styles.sectionSubtitleDark}>
              Whether you run a busy clinic, a hotel, or a logistics hub, we plan every step around your working hours.
            </p>
          </div>

          <div className={styles.grid4}>
            {ROLLOUT_STEPS.map((s) => (
              <div
                key={s.step}
                className={styles.mediaCard}
                style={{
                  background: "rgba(10, 25, 78, 0.72)",
                  borderColor: "rgba(96, 165, 250, 0.24)",
                }}
              >
                <div className={styles.mediaCardThumb} style={{ height: "165px" }}>
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 992px) 100vw, 320px"
                    className={styles.mediaCardImg}
                  />
                  <span className={styles.mediaCardTopBadge}>STEP {s.step}</span>
                </div>
                <div className={styles.mediaCardBody} style={{ padding: "22px" }}>
                  <div>
                    <h3 className={styles.cardTitleDark}>{s.title}</h3>
                    <p className={styles.cardTextDark} style={{ marginBottom: 0 }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 7: COMPLIANCE & SECURITY STANDARDS ==================== */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.pillBadgeLight}>
              <span className={styles.pillDot} />
              <span>Safe &amp; Compliant</span>
            </div>
            <h2 className={styles.sectionTitleLight}>
              Built to Meet UAE Security &amp; Business Standards.
            </h2>
          </div>

          <div className={styles.grid3}>
            {COMPLIANCE_CARDS.map((card) => (
              <article key={card.title} className={styles.mediaCard}>
                <div className={styles.mediaCardThumb} style={{ height: "200px" }}>
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
                  <div>
                    <h3 className={styles.cardTitleLight}>{card.title}</h3>
                    <p className={styles.cardTextLight} style={{ marginBottom: 0 }}>
                      {card.desc}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 8: 30+ TRUSTED BRANDS ==================== */}
      <TrustedBrandsSection />

      {/* ==================== SECTION 9: CONSULTATION FORM ==================== */}
      <ConsultationSection />
    </main>
  );
}
