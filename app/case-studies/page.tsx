"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TrustedBrandsSection from "@/components/TrustedBrandsSection/TrustedBrandsSection";
import CtaBanner from "@/components/CtaBanner/CtaBanner";
import { CASE_STUDIES_DATA } from "@/data/siteData";
import styles from "./CaseStudiesPage.module.css";

const CATEGORIES = [
  "All Projects",
  "Networking",
  "Cybersecurity",
  "Infrastructure",
  "Surveillance & AV",
] as const;

const HANDOVER_DOCS = [
  {
    num: "Deliverable 01",
    title: "Fluke Cable Test PDF Report",
    desc: "Every Cat6/Cat6A and fiber point is tested with a Fluke analyzer so you have proof of 100% speed.",
    image: "/images/process-step-1.jpg",
  },
  {
    num: "Deliverable 02",
    title: "Color-Coded & Labeled Rack",
    desc: "Neat server rack dressing with machine-printed labels on every patch panel port and cable.",
    image: "/images/case-study-boardroom.jpg",
  },
  {
    num: "Deliverable 03",
    title: "As-Built Network Diagram",
    desc: "Clear floor-plan layout showing Wi-Fi AP locations, camera angles, VLANs, and IP addresses.",
    image: "/images/process-step-2.jpg",
  },
  {
    num: "Deliverable 04",
    title: "Official UAE Warranty Pack",
    desc: "Registered serial numbers and official manufacturer warranty certificates for all supplied hardware.",
    image: "/images/company/huawei-ekit-award.jpg",
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
    <main className={styles.portfolioPage}>
      {/* ==================== 1. PORTFOLIO SHOWCASE HERO ==================== */}
      <section className={styles.portfolioHero}>
        <div className={styles.container}>
          <div className={styles.heroSplit}>
            <div>
              <div className={styles.crumbTag}>
                <Link href="/">Home</Link>
                <span>/</span>
                <span>Portfolio &amp; Completed UAE Case Studies</span>
              </div>
              <h1 className={styles.heroTitle}>
                500+ Real Office, Warehouse &amp; Clinic IT Projects Across the UAE.
              </h1>
              <p className={styles.heroLead}>
                Explore our completed engineering dossiers below. Each project shows the exact
                problem the client faced, the hardware our Dubai team installed, and the final
                result.
              </p>

              <div className={styles.heroFilterRow}>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`${styles.filterPill} ${
                      selectedCategory === cat ? styles.filterPillActive : ""
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Featured Flagship Card */}
            <div className={styles.flagshipCard}>
              <div className={styles.flagshipPhoto}>
                <Image
                  src={flagshipStudy.image}
                  alt={flagshipStudy.title}
                  fill
                  priority
                  sizes="(max-width: 1120px) 100vw, 540px"
                  className={styles.coverImg}
                />
                <span className={styles.flagshipOverlayPill}>
                  ★ Flagship Project • {flagshipStudy.location}
                </span>
              </div>
              <div className={styles.flagshipBody}>
                <h2 className={styles.flagshipTitle}>{flagshipStudy.title}</h2>
                <p className={styles.flagshipMeta}>{flagshipStudy.solution}</p>
                <div className={styles.flagshipKpis}>
                  <div className={styles.flagshipKpiBox}>
                    <strong>10 Gbps</strong>
                    <span>Core Fiber Speed</span>
                  </div>
                  <div className={styles.flagshipKpiBox}>
                    <strong>0 Mins</strong>
                    <span>Work Disruption</span>
                  </div>
                  <div className={styles.flagshipKpiBox}>
                    <strong>99.99%</strong>
                    <span>Verified Uptime</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 2. STRUCTURED 3-STAGE PROJECT DOSSIER FILES ==================== */}
      <section className={styles.dossierSection}>
        <div className={styles.container}>
          <div className={styles.dossierList}>
            {filteredStudies.map((study) => (
              <article key={study.slug} className={styles.caseDossier}>
                {/* Dark Top Dossier Bar */}
                <div className={styles.caseTopHeader}>
                  <div className={styles.caseHeaderLeft}>
                    <span className={styles.caseNum}>CASE #{study.id}</span>
                    <h2 className={styles.caseTitle}>{study.title}</h2>
                  </div>
                  <span className={styles.caseLocationBadge}>
                    📍 {study.location} • {study.clientType}
                  </span>
                </div>

                {/* Main Photo + 3 Stage Breakdown */}
                <div className={styles.caseBodyGrid}>
                  <div className={styles.casePhotoWrap}>
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      sizes="(max-width: 1120px) 100vw, 380px"
                      className={styles.coverImg}
                    />
                  </div>

                  <div className={styles.caseStagesGrid}>
                    {/* Stage 1: Problem */}
                    <div className={`${styles.stageBox} ${styles.stageProblem}`}>
                      <div>
                        <span className={styles.stageLabel} style={{ color: "#dc2626" }}>
                          01 • Client Challenge
                        </span>
                        <p className={styles.stageText}>{study.challenge}</p>
                      </div>
                    </div>

                    {/* Stage 2: Solution */}
                    <div className={`${styles.stageBox} ${styles.stageSolution}`}>
                      <div>
                        <span className={styles.stageLabel} style={{ color: "#1254ff" }}>
                          02 • What CATS Installed
                        </span>
                        <p className={styles.stageText}>{study.solution}</p>
                      </div>
                    </div>

                    {/* Stage 3: Results */}
                    <div className={`${styles.stageBox} ${styles.stageResults}`}>
                      <div>
                        <span className={styles.stageLabel} style={{ color: "#059669" }}>
                          03 • Verified Results
                        </span>
                        <ul className={styles.resultCheckList}>
                          {study.results.map((res) => (
                            <li key={res}>
                              <span>✓</span>
                              <span>{res}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Hardware Stack Bar */}
                <div className={styles.techStackBar}>
                  <div className={styles.techChips}>
                    {study.technologies.map((tech) => (
                      <span key={tech} className={styles.techChip}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link href="/contact" className={styles.caseQuoteLink}>
                    Request a Similar Setup for Your Office →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 3. PROJECT HANDOVER DELIVERABLES ==================== */}
      <section className={styles.handoverSection}>
        <div className={styles.container}>
          <div style={{ maxWidth: "740px" }}>
            <span className={styles.crumbTag}>Complete Documentation</span>
            <h2 style={{ fontSize: "clamp(28px, 3.4vw, 40px)", fontWeight: 600, margin: "0 0 12px" }}>
              4 Handover Documents You Receive With Every Completed Project.
            </h2>
            <p style={{ fontSize: "16px", color: "#cbd5e1", margin: 0, lineHeight: 1.65 }}>
              We never leave you guessing how your network is wired. Every installation includes a
              complete engineering sign-off pack.
            </p>
          </div>

          <div className={styles.handoverGrid}>
            {HANDOVER_DOCS.map((doc) => (
              <div key={doc.title} className={styles.handoverCard}>
                <div className={styles.handoverThumb}>
                  <Image
                    src={doc.image}
                    alt={doc.title}
                    fill
                    sizes="300px"
                    className={styles.coverImg}
                  />
                </div>
                <div className={styles.handoverBody}>
                  <span className={styles.handoverNum}>{doc.num}</span>
                  <h3 className={styles.handoverTitle}>{doc.title}</h3>
                  <p className={styles.handoverDesc}>{doc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustedBrandsSection />
      <CtaBanner />
    </main>
  );
}
