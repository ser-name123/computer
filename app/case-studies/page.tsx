"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner/PageBanner";
import TrustedBrandsSection from "@/components/TrustedBrandsSection/TrustedBrandsSection";
import CtaBanner from "@/components/CtaBanner/CtaBanner";
import { CASE_STUDIES_DATA } from "@/data/siteData";
import styles from "@/styles/InnerPages.module.css";

const CATEGORIES = [
  "All Projects",
  "Networking",
  "Cybersecurity",
  "Infrastructure",
  "Surveillance & AV",
] as const;

const PORTFOLIO_HIGHLIGHTS = [
  {
    num: "01",
    tag: "Proven Experience",
    title: "500+ UAE Projects",
    desc: "Offices, warehouses, clinics, and hotels completed across Dubai, Sharjah & Abu Dhabi.",
  },
  {
    num: "02",
    tag: "Smooth Execution",
    title: "Zero Work Disruption",
    desc: "We schedule major switchovers on weekends or evenings so your staff never lose work time.",
  },
  {
    num: "03",
    tag: "Certified Quality",
    title: "100% Tested Cabling",
    desc: "Every network point is Fluke-tested, neatly dressed, and clearly labeled before handover.",
  },
  {
    num: "04",
    tag: "Long-Term Care",
    title: "98.7% AMC Renewal",
    desc: "Almost every project client stays with us year after year for ongoing maintenance.",
  },
];

const DELIVERY_STEPS = [
  {
    step: "01",
    title: "Free Site Visit & Floor Plan Check",
    desc: "We walk through your site in Dubai, check cable paths and Wi-Fi coverage, and note all requirements.",
    image: "/images/process-step-1.jpg",
  },
  {
    step: "02",
    title: "Clear Quote & Pre-Configuration",
    desc: "Once approved, we unbox and pre-configure your routers, switches, and servers in our Burdubai lab.",
    image: "/images/process-step-2.jpg",
  },
  {
    step: "03",
    title: "Neat On-Site Installation",
    desc: "Our technicians pull cables, mount cameras and Wi-Fi APs, and organize your server rack cleanly.",
    image: "/images/process-step-3.jpg",
  },
  {
    step: "04",
    title: "Testing, Handover & 24/7 Support",
    desc: "We test every connection, hand over simple network diagrams, and start your support coverage.",
    image: "/images/process-step-4.jpg",
  },
];

const CONTRACTOR_BENEFITS = [
  {
    badge: "For Business Owners",
    title: "Move In On Time With Working IT",
    desc: "Your internet, Wi-Fi, phones, doors, and cameras are 100% ready on day one when your staff walk in.",
    image: "/images/company/huawei-reception.jpg",
  },
  {
    badge: "For Fit-Out Contractors",
    title: "Smooth Coordination With MEP Teams",
    desc: "We work closely with your interior fit-out and electrical teams so cable trays and floor boxes line up properly.",
    image: "/images/company/ruijie-cctv-discussion.jpg",
  },
  {
    badge: "For IT Managers",
    title: "Clean Racks & Complete Diagrams",
    desc: "No more guessing which cable goes where — every patch panel, port, and IP address is clearly documented.",
    image: "/images/company/huawei-ekit-team.jpg",
  },
];

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Projects");
  const flagshipStudy = CASE_STUDIES_DATA[0];

  const filteredStudies =
    selectedCategory === "All Projects"
      ? CASE_STUDIES_DATA
      : CASE_STUDIES_DATA.filter((item) => item.category === selectedCategory);

  return (
    <main className={styles.pageMain}>
      {/* ==================== SECTION 1: HERO BANNER ==================== */}
      <PageBanner
        eyebrow="REAL PROJECTS ACROSS DUBAI & THE UAE"
        title="Portfolio & Client Case Studies."
        subtitle="See real examples of how CATS Computers L.L.C has fixed slow Wi-Fi, cleaned up messy server rooms, installed 4K CCTV, and upgraded office IT for businesses across the UAE."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Portfolio & Case Studies" }]}
        bgImage="/images/case-study-dev-pair.jpg"
        primaryCtaText="Discuss Your Project"
        primaryCtaHref="/contact"
        secondaryCtaText="Explore All Services"
        secondaryCtaHref="/services"
        metrics={[
          { value: "500+", label: "UAE Projects Completed" },
          { value: "100%", label: "On-Time Handover" },
          { value: "99.9%", label: "Smooth Uptime After Setup" },
          { value: "30+", label: "Official Brands Installed" },
        ]}
      />

      {/* ==================== SECTION 2: FLOATING 4-CARD PROJECT STRIP ==================== */}
      <section className={styles.floatingStripSection}>
        <div className={styles.floatingStripGrid}>
          {PORTFOLIO_HIGHLIGHTS.map((item) => (
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

      {/* ==================== SECTION 3: FLAGSHIP PROJECT SPOTLIGHT ==================== */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.splitRow}>
            <div className={styles.imageShowcaseWrap}>
              <Image
                src={flagshipStudy.image}
                alt={flagshipStudy.title}
                fill
                sizes="(max-width: 992px) 100vw, 620px"
                className={styles.imageShowcaseImg}
              />
              <div className={styles.floatingStatBadge}>
                <span className={styles.floatingStatValue}>10 Gbps Speed</span>
                <span className={styles.floatingStatLabel}>
                  Completed Over 1 Weekend With Zero Office Downtime
                </span>
              </div>
            </div>

            <div>
              <div className={styles.pillBadgeLight}>
                <span className={styles.pillDot} />
                <span>Featured Flagship Project — {flagshipStudy.location}</span>
              </div>
              <h2 className={styles.sectionTitleLight}>{flagshipStudy.title}</h2>
              <p className={styles.cardTextLight}>
                <strong>The Problem:</strong> {flagshipStudy.challenge}
              </p>
              <p className={styles.cardTextLight}>
                <strong>How We Solved It:</strong> {flagshipStudy.solution}
              </p>

              <ul className={styles.checkList}>
                {flagshipStudy.results.map((res) => (
                  <li key={res} className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>{res}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className={styles.submitBtn}>
                <span>Request a Similar Upgrade</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 4: FILTERABLE CASE STUDIES GRID ==================== */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.pillBadgeLight}>
              <span className={styles.pillDot} />
              <span>Real Work, Clear Results</span>
            </div>
            <h2 className={styles.sectionTitleLight}>
              Explore Our Recent Dubai &amp; UAE Installations.
            </h2>
            <p className={styles.sectionSubtitleLight}>
              Click any category tab below to see what the client needed, what we installed, and the final result.
            </p>
          </div>

          <div className={styles.filterBar}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`${styles.filterBtn} ${
                  selectedCategory === cat ? styles.filterBtnActive : ""
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className={styles.grid2}>
            {filteredStudies.map((study) => (
              <article key={study.slug} className={styles.mediaCard}>
                <div className={styles.mediaCardThumb} style={{ height: "260px" }}>
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    sizes="(max-width: 992px) 100vw, 640px"
                    className={styles.mediaCardImg}
                  />
                  <span className={styles.mediaCardTopBadge}>
                    {study.id} • {study.category}
                  </span>
                </div>

                <div className={styles.mediaCardBody}>
                  <div>
                    <div className={styles.cardBadgeRow}>
                      <span className={styles.tagPill}>{study.location}</span>
                      <span className={styles.numBadge}>{study.clientType}</span>
                    </div>

                    <h3 className={styles.cardTitleLight}>{study.title}</h3>

                    <p className={styles.cardTextLight} style={{ marginBottom: "12px" }}>
                      <strong>What Was Wrong:</strong> {study.challenge}
                    </p>
                    <p className={styles.cardTextLight} style={{ marginBottom: "16px" }}>
                      <strong>What We Did:</strong> {study.solution}
                    </p>

                    <ul className={styles.checkList} style={{ margin: "0 0 18px" }}>
                      {study.results.map((res) => (
                        <li key={res} className={styles.checkItem} style={{ fontSize: "13.5px" }}>
                          <span className={styles.checkIcon}>✓</span>
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>

                    <div className={styles.vendorCluster} style={{ marginBottom: "22px" }}>
                      {study.technologies.map((tech) => (
                        <span key={tech} className={styles.vendorChip}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link href="/contact" className={styles.cardLink}>
                    <span>Get a Quote for a Similar Setup</span>
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 5: BEFORE VS AFTER SERVER RACK & WIFI ==================== */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.pillBadgeLight}>
              <span className={styles.pillDot} />
              <span>Visible Quality</span>
            </div>
            <h2 className={styles.sectionTitleLight}>
              The Difference Between Messy Wiring &amp; Professional Work.
            </h2>
            <p className={styles.sectionSubtitleLight}>
              We take pride in leaving every server room and office looking neat, organized, and easy to manage.
            </p>
          </div>

          <div className={styles.comparisonGrid}>
            <div className={styles.comparisonCardProblem}>
              <div className={styles.mediaCardThumb} style={{ height: "205px" }}>
                <Image
                  src="/images/about-engineer-left.jpg"
                  alt="Before Rack Cleanup"
                  fill
                  sizes="(max-width: 992px) 100vw, 600px"
                  className={styles.mediaCardImg}
                />
                <span className={styles.mediaCardTopBadge}>Before We Step In</span>
              </div>
              <div className={styles.mediaCardBody}>
                <div>
                  <h3 className={styles.cardTitleLight}>Tangled Racks &amp; Blind Spots</h3>
                  <ul className={styles.problemList}>
                    <li className={styles.problemItem}>
                      <span className={styles.problemIcon}>✕</span>
                      <span>Unlabeled cables hanging in front of switches blocking airflow</span>
                    </li>
                    <li className={styles.problemItem}>
                      <span className={styles.problemIcon}>✕</span>
                      <span>Hours wasted trying to trace a single dead network port</span>
                    </li>
                    <li className={styles.problemItem}>
                      <span className={styles.problemIcon}>✕</span>
                      <span>Overheating equipment and frequent random disconnections</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.comparisonCardSolution}>
              <div className={styles.mediaCardThumb} style={{ height: "205px" }}>
                <Image
                  src="/images/case-study-boardroom.jpg"
                  alt="After CATS Rack Dressing & Setup"
                  fill
                  sizes="(max-width: 992px) 100vw, 600px"
                  className={styles.mediaCardImg}
                />
                <span className={styles.mediaCardTopBadge}>After CATS Handover</span>
              </div>
              <div className={styles.mediaCardBody}>
                <div>
                  <h3 className={styles.cardTitleDark}>Clean, Labeled &amp; Certified</h3>
                  <ul className={styles.checkList} style={{ marginTop: "18px", marginBottom: 0 }}>
                    <li className={styles.checkItemDark}>
                      <span className={styles.checkIcon}>✓</span>
                      <span>Color-coded patch cords with machine-printed port labels</span>
                    </li>
                    <li className={styles.checkItemDark}>
                      <span className={styles.checkIcon}>✓</span>
                      <span>Fluke test reports proving every cable runs at 100% speed</span>
                    </li>
                    <li className={styles.checkItemDark}>
                      <span className={styles.checkIcon}>✓</span>
                      <span>Proper UPS battery backup and cool, tidy rack cabinets</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 6: 4-STEP PROJECT EXECUTION ==================== */}
      <section className={styles.sectionDark}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.pillBadgeDark}>
              <span className={styles.pillDot} />
              <span>How We Deliver</span>
            </div>
            <h2 className={styles.sectionTitleDark}>
              Our Simple 4-Step Project Execution Plan.
            </h2>
          </div>

          <div className={styles.grid4}>
            {DELIVERY_STEPS.map((s) => (
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

      {/* ==================== SECTION 7: WHO BENEFITS FROM OUR TURNKEY PROJECTS ==================== */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.pillBadgeLight}>
              <span className={styles.pillDot} />
              <span>Built for Everyone</span>
            </div>
            <h2 className={styles.sectionTitleLight}>
              Why Owners, Fit-Out Teams &amp; IT Managers Love Working With Us.
            </h2>
          </div>

          <div className={styles.grid3}>
            {CONTRACTOR_BENEFITS.map((item) => (
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
                    <p className={styles.cardTextLight} style={{ marginBottom: 0 }}>
                      {item.desc}
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

      {/* ==================== SECTION 9: CTA BANNER ==================== */}
      <CtaBanner />
    </main>
  );
}
