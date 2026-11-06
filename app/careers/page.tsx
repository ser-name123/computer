"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TrustedBrandsSection from "@/components/TrustedBrandsSection/TrustedBrandsSection";
import CtaBanner from "@/components/CtaBanner/CtaBanner";
import { CAREERS_DATA } from "@/data/siteData";
import styles from "./CareersPage.module.css";

const ROLE_IMAGES = [
  "/images/hero-huawei-elite.jpg",
  "/images/card-cybersecurity.jpg",
  "/images/company/ruijie-cctv-discussion.jpg",
  "/images/consultation-team.jpg",
];

export default function CareersPage() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const activeJob = CAREERS_DATA[selectedIdx];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className={styles.careersPage}>
      {/* ==================== 1. 4-PHOTO TEAM MOSAIC HERO ==================== */}
      <section className={styles.talentHero}>
        <div className={styles.container}>
          <div className={styles.heroSplit}>
            <div>
              <div className={styles.hiringPill}>
                <span>● Hiring Now in Burdubai, Dubai</span>
                <span>•</span>
                <span>{CAREERS_DATA.length} Open Roles</span>
              </div>

              <h1 className={styles.heroTitle}>
                Build Your IT Career With a Friendly, Winning Team in the Heart of Dubai.
              </h1>

              <p className={styles.heroLead}>
                Join CATS Computers L.L.C at our Al Musallah Street headquarters in Burdubai. Work
                hands-on with genuine Huawei eKit, Ruijie, Fortinet, and enterprise server hardware
                while we sponsor your official certifications.
              </p>

              <div className={styles.perksMiniGrid}>
                <div className={styles.perkMiniPill}>
                  <strong>Tax-Free UAE Package</strong>
                  On-time salary, bonuses &amp; medical insurance
                </div>
                <div className={styles.perkMiniPill}>
                  <strong>100% Free Brand Exams</strong>
                  Sponsored Huawei, Ruijie, Fortinet &amp; Sophos certs
                </div>
                <div className={styles.perkMiniPill}>
                  <strong>Metro-Friendly Burdubai HQ</strong>
                  Easy access on Al Musallah Street
                </div>
                <div className={styles.perkMiniPill}>
                  <strong>Hands-On Lab &amp; Tools</strong>
                  Fluke testers &amp; senior L3 mentorship
                </div>
              </div>
            </div>

            {/* Right 2x2 Team Photo Mosaic */}
            <div className={styles.teamMosaic}>
              <div className={styles.mosaicFrame}>
                <Image
                  src="/images/company/team-group-1.jpg"
                  alt="CATS Computers Burdubai Engineering Team"
                  fill
                  priority
                  sizes="280px"
                  className={styles.coverImg}
                />
              </div>
              <div className={styles.mosaicFrame}>
                <Image
                  src="/images/company/team-group-2.jpg"
                  alt="CATS Computers Showroom & Support Team"
                  fill
                  sizes="280px"
                  className={styles.coverImg}
                />
              </div>
              <div className={styles.mosaicFrame}>
                <Image
                  src="/images/company/huawei-ekit-team.jpg"
                  alt="Huawei eKit Authorized Team in Dubai"
                  fill
                  sizes="280px"
                  className={styles.coverImg}
                />
              </div>
              <div className={styles.mosaicFrame}>
                <Image
                  src="/images/company/ruijie-cctv-discussion.jpg"
                  alt="In-House Technical Planning Session"
                  fill
                  sizes="280px"
                  className={styles.coverImg}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 2. 3-COLUMN MASTER-DETAIL INTERACTIVE JOB BOARD ==================== */}
      <section className={styles.boardSection}>
        <div className={styles.container}>
          <div className={styles.boardHeader}>
            <span
              style={{
                fontSize: "12px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#1254ff",
              }}
            >
              Interactive Dubai Job Board
            </span>
            <h2 className={styles.boardTitle}>
              Select an Open Position Below to View Details &amp; Apply in 2 Minutes.
            </h2>
          </div>

          <div className={styles.boardWorkspace}>
            {/* Left Column: Clickable Role Tabs */}
            <div className={styles.roleListCol}>
              {CAREERS_DATA.map((job, idx) => (
                <button
                  key={job.id}
                  type="button"
                  onClick={() => {
                    setSelectedIdx(idx);
                    setSubmitted(false);
                  }}
                  className={`${styles.roleTabBtn} ${
                    selectedIdx === idx ? styles.roleTabBtnActive : ""
                  }`}
                >
                  <span className={styles.roleDept}>{job.department}</span>
                  <h3 className={styles.roleName}>{job.title}</h3>
                  <div className={styles.roleMeta}>
                    📍 {job.location} • {job.type} ({job.experience})
                  </div>
                </button>
              ))}
            </div>

            {/* Center Column: Selected Job Full Description */}
            <div className={styles.jobDetailCard}>
              <div className={styles.jobBannerPhoto}>
                <Image
                  src={ROLE_IMAGES[selectedIdx % ROLE_IMAGES.length]}
                  alt={activeJob.title}
                  fill
                  sizes="540px"
                  className={styles.coverImg}
                />
              </div>

              <span className={styles.roleDept}>
                {activeJob.department} • {activeJob.location} • {activeJob.experience}
              </span>
              <h2 className={styles.jobTitle}>{activeJob.title}</h2>
              <p className={styles.jobSummary}>{activeJob.summary}</p>

              <h3 className={styles.jobListHeading}>What You Will Do:</h3>
              <ul className={styles.jobBulletList}>
                {activeJob.responsibilities.map((r) => (
                  <li key={r}>
                    <span style={{ color: "#1254ff", fontWeight: 600 }}>✓</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>

              <h3 className={styles.jobListHeading}>What We Look For:</h3>
              <ul className={styles.jobBulletList} style={{ marginBottom: 0 }}>
                {activeJob.requirements.map((req) => (
                  <li key={req}>
                    <span style={{ color: "#1254ff", fontWeight: 600 }}>✓</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Instant Application Form */}
            <form onSubmit={handleSubmit} className={styles.applyCard}>
              <h3 className={styles.applyHeading}>Quick Apply Now</h3>
              <p className={styles.applySub}>
                Applying for: <strong style={{ color: "#1254ff" }}>{activeJob.title}</strong>
              </p>

              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className={styles.fieldInput}
                />
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className={styles.fieldInput}
                />
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>UAE Mobile / WhatsApp *</label>
                <input
                  type="tel"
                  required
                  placeholder="+971 50 000 0000"
                  className={styles.fieldInput}
                />
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Years of UAE Experience</label>
                <input
                  type="text"
                  placeholder="e.g. 3 Years in Dubai"
                  className={styles.fieldInput}
                />
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Brief Summary of Your Skills *</label>
                <textarea
                  required
                  placeholder="Mention brands & systems you have worked with..."
                  className={styles.fieldTextarea}
                />
              </div>

              <button type="submit" className={styles.applySubmitBtn}>
                Submit Application for {activeJob.title.split(" ")[0]} Role →
              </button>

              {submitted && (
                <div className={styles.successMsg}>
                  ✓ Application received for <strong>{activeJob.title}</strong>! You can also email
                  your CV to <strong>info@catscomputers.com</strong>.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <TrustedBrandsSection />
      <CtaBanner />
    </main>
  );
}
