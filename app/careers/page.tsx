"use client";

import React, { useState } from "react";
import Image from "next/image";
import PageBanner from "@/components/PageBanner/PageBanner";
import TrustedBrandsSection from "@/components/TrustedBrandsSection/TrustedBrandsSection";
import CtaBanner from "@/components/CtaBanner/CtaBanner";
import { CAREERS_DATA } from "@/data/siteData";
import styles from "@/styles/InnerPages.module.css";

const CAREER_HIGHLIGHTS = [
  {
    num: "01",
    tag: "Tax-Free Package",
    title: "Competitive UAE Salary",
    desc: "On-time tax-free salary, project bonuses, UAE medical insurance, and annual leave.",
  },
  {
    num: "02",
    tag: "Free Training",
    title: "Sponsored Certifications",
    desc: "We pay for your official Huawei, Ruijie, Fortinet, Sophos & Microsoft exams.",
  },
  {
    num: "03",
    tag: "Central Location",
    title: "Burdubai Headquarters",
    desc: "Easy metro & bus access right on Al Musallah Street in the heart of Dubai.",
  },
  {
    num: "04",
    tag: "Great Culture",
    title: "Supportive Senior Team",
    desc: "Learn hands-on from friendly senior engineers on real Dubai business projects.",
  },
];

const BENEFITS = [
  {
    id: "01",
    tag: "Skill Growth",
    title: "Free Brand Certifications",
    desc: "We sponsor your official exams across Huawei eKit, Ruijie, Cisco, Fortinet, Sophos, and Microsoft so your career grows fast.",
    image: "/images/company/huawei-ekit-award.jpg",
  },
  {
    id: "02",
    tag: "Exciting Work",
    title: "Real Dubai Projects",
    desc: "Work on modern corporate offices, warehouses, clinics, and hotels across the UAE — never boring, repetitive tasks.",
    image: "/images/company/ruijie-cctv-discussion.jpg",
  },
  {
    id: "03",
    tag: "Fair Rewards",
    title: "On-Time Salary & Bonuses",
    desc: "Competitive tax-free UAE salary, performance incentives, full medical insurance, and annual flight ticket allowance.",
    image: "/images/company/huawei-reception.jpg",
  },
  {
    id: "04",
    tag: "Friendly Team",
    title: "Respectful Workplace",
    desc: "Work in a friendly, team-first environment where managers listen, help solve problems, and celebrate wins together.",
    image: "/images/company/team-group-2.jpg",
  },
];

const HIRING_STEPS = [
  {
    step: "01",
    title: "Send Your CV Online",
    desc: "Fill out the quick form below or email your CV to info@catscomputers.com — it takes less than 2 minutes.",
    image: "/images/process-step-1.jpg",
  },
  {
    step: "02",
    title: "Friendly 15-Min Phone Chat",
    desc: "Our Dubai HR & technical coordinator calls you for a quick, friendly chat about your experience and goals.",
    image: "/images/process-step-2.jpg",
  },
  {
    step: "03",
    title: "Meet Our Team in Burdubai",
    desc: "Visit our Al Musallah Street office to meet our senior engineers and see our showroom and lab in person.",
    image: "/images/process-step-3.jpg",
  },
  {
    step: "04",
    title: "Fast Offer & Onboarding",
    desc: "Receive a clear offer letter, smooth UAE visa processing, and a warm welcome to the CATS family.",
    image: "/images/process-step-4.jpg",
  },
];

const ROLE_IMAGES = [
  "/images/hero-huawei-elite.jpg",
  "/images/card-cybersecurity.jpg",
  "/images/company/ruijie-cctv-discussion.jpg",
  "/images/consultation-team.jpg",
];

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<string>(CAREERS_DATA[0].title);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className={styles.pageMain}>
      {/* ==================== SECTION 1: HERO BANNER ==================== */}
      <PageBanner
        eyebrow="JOIN OUR DUBAI TEAM — CAREERS AT CATS"
        title="Grow Your IT Career With a Friendly, Winning Team in Dubai."
        subtitle="We are always looking for talented network engineers, CCTV & ELV technicians, IT support specialists, and B2B sales consultants to join our Burdubai headquarters."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
        bgImage="/images/company/team-group-1.jpg"
        primaryCtaText="See Open Jobs"
        primaryCtaHref="#openings"
        secondaryCtaText="Apply in 2 Minutes"
        secondaryCtaHref="#apply-form"
        metrics={[
          { value: "4+", label: "Open Dubai Positions" },
          { value: "100%", label: "Sponsored Brand Exams" },
          { value: "Burdubai", label: "Metro-Friendly HQ" },
          { value: "30+", label: "Global Tech Brands" },
        ]}
      />

      {/* ==================== SECTION 2: FLOATING 4-CARD CAREER STRIP ==================== */}
      <section className={styles.floatingStripSection}>
        <div className={styles.floatingStripGrid}>
          {CAREER_HIGHLIGHTS.map((item) => (
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

      {/* ==================== SECTION 3: LIFE AT CATS SPLIT SHOWCASE ==================== */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.splitRow}>
            <div>
              <div className={styles.pillBadgeLight}>
                <span className={styles.pillDot} />
                <span>Our Work Culture</span>
              </div>
              <h2 className={styles.sectionTitleLight}>
                A Workplace Where Your Skills Are Valued &amp; Respected.
              </h2>
              <p className={styles.cardTextLight}>
                At CATS Computers L.L.C, we believe happy engineers deliver the best service to clients. When you join our Burdubai office, you work with genuine enterprise hardware, supportive teammates, and managers who help you succeed.
              </p>
              <ul className={styles.checkList}>
                <li className={styles.checkItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Hands-on lab access to the latest Huawei eKit, Ruijie, Fortinet &amp; server gear</span>
                </li>
                <li className={styles.checkItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Clear career path from Field Engineer to Senior Solutions Architect</span>
                </li>
                <li className={styles.checkItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Direct recognition and bonuses when projects are completed cleanly</span>
                </li>
              </ul>
            </div>

            <div className={styles.imageShowcaseWrap}>
              <Image
                src="/images/company/team-group-2.jpg"
                alt="CATS Computers Team Culture in Dubai"
                fill
                sizes="(max-width: 992px) 100vw, 600px"
                className={styles.imageShowcaseImg}
              />
              <div className={styles.floatingStatBadge}>
                <span className={styles.floatingStatValue}>Team First</span>
                <span className={styles.floatingStatLabel}>
                  Supportive Leadership &amp; Hands-On Learning in Dubai
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 4: 4 BENEFITS & PERKS (WITH IMAGES) ==================== */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.pillBadgeLight}>
              <span className={styles.pillDot} />
              <span>Perks &amp; Benefits</span>
            </div>
            <h2 className={styles.sectionTitleLight}>
              Why Engineers &amp; Consultants Love Working Here.
            </h2>
          </div>

          <div className={styles.grid4}>
            {BENEFITS.map((b) => (
              <div key={b.id} className={styles.mediaCard}>
                <div className={styles.mediaCardThumb} style={{ height: "175px" }}>
                  <Image
                    src={b.image}
                    alt={b.title}
                    fill
                    sizes="(max-width: 992px) 100vw, 320px"
                    className={styles.mediaCardImg}
                  />
                  <span className={styles.mediaCardTopBadge}>
                    {b.id} • {b.tag}
                  </span>
                </div>
                <div className={styles.mediaCardBody} style={{ padding: "22px" }}>
                  <div>
                    <h3 className={styles.cardTitleLight}>{b.title}</h3>
                    <p className={styles.cardTextLight} style={{ marginBottom: 0 }}>
                      {b.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 5: TYPICAL IT JOBS VS WORKING AT CATS ==================== */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.pillBadgeLight}>
              <span className={styles.pillDot} />
              <span>Why Switch to CATS?</span>
            </div>
            <h2 className={styles.sectionTitleLight}>
              How Working at CATS Compares to Ordinary IT Jobs.
            </h2>
          </div>

          <div className={styles.comparisonGrid}>
            <div className={styles.comparisonCardProblem}>
              <div className={styles.mediaCardThumb} style={{ height: "200px" }}>
                <Image
                  src="/images/about-engineer-left.jpg"
                  alt="Typical Job Frustrations"
                  fill
                  sizes="(max-width: 992px) 100vw, 600px"
                  className={styles.mediaCardImg}
                />
                <span className={styles.mediaCardTopBadge}>Ordinary IT Jobs</span>
              </div>
              <div className={styles.mediaCardBody}>
                <h3 className={styles.cardTitleLight}>Stuck Doing the Same Routine</h3>
                <ul className={styles.problemList}>
                  <li className={styles.problemItem}>
                    <span className={styles.problemIcon}>✕</span>
                    <span>Sent to job sites without proper testing tools or spare parts</span>
                  </li>
                  <li className={styles.problemItem}>
                    <span className={styles.problemIcon}>✕</span>
                    <span>No training budget or support for new vendor certifications</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.comparisonCardSolution}>
              <div className={styles.mediaCardThumb} style={{ height: "200px" }}>
                <Image
                  src="/images/company/huawei-ekit-team.jpg"
                  alt="Career Growth at CATS Computers"
                  fill
                  sizes="(max-width: 992px) 100vw, 600px"
                  className={styles.mediaCardImg}
                />
                <span className={styles.mediaCardTopBadge}>Life at CATS Computers</span>
              </div>
              <div className={styles.mediaCardBody}>
                <h3 className={styles.cardTitleDark}>Equipped to Succeed Every Day</h3>
                <ul className={styles.checkList} style={{ marginTop: "18px", marginBottom: 0 }}>
                  <li className={styles.checkItemDark}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Full Fluke testers, lab staging, and senior L3 backup on every project</span>
                  </li>
                  <li className={styles.checkItemDark}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Sponsored vendor training and fast recognition for great work</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 6: OPEN POSITIONS (WITH IMAGES) ==================== */}
      <section id="openings" className={styles.sectionLight}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.pillBadgeLight}>
              <span className={styles.pillDot} />
              <span>Current Openings — Dubai</span>
            </div>
            <h2 className={styles.sectionTitleLight}>
              Open Positions at Our Burdubai Headquarters.
            </h2>
          </div>

          <div className={styles.grid2}>
            {CAREERS_DATA.map((job, idx) => (
              <article key={job.id} className={styles.mediaCard}>
                <div className={styles.mediaCardThumb} style={{ height: "220px" }}>
                  <Image
                    src={ROLE_IMAGES[idx % ROLE_IMAGES.length]}
                    alt={job.title}
                    fill
                    sizes="(max-width: 992px) 100vw, 600px"
                    className={styles.mediaCardImg}
                  />
                  <span className={styles.mediaCardTopBadge}>
                    {job.department} • {job.location}
                  </span>
                </div>
                <div className={styles.mediaCardBody}>
                  <div>
                    <div className={styles.cardBadgeRow}>
                      <span className={styles.tagPill}>{job.department}</span>
                      <span className={styles.numBadge}>
                        {job.type} • {job.experience}
                      </span>
                    </div>
                    <h3 className={styles.cardTitleLight}>{job.title}</h3>
                    <p className={styles.cardTextLight}>{job.summary}</p>

                    <strong style={{ display: "block", fontSize: "13px", marginBottom: "8px" }}>
                      What You Will Do:
                    </strong>
                    <ul className={styles.checkList} style={{ margin: "0 0 16px" }}>
                      {job.responsibilities.map((r) => (
                        <li key={r} className={styles.checkItem} style={{ fontSize: "13.5px" }}>
                          <span className={styles.checkIcon}>✓</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>

                    <strong style={{ display: "block", fontSize: "13px", marginBottom: "8px" }}>
                      What We Look For:
                    </strong>
                    <ul className={styles.checkList} style={{ margin: "0 0 22px" }}>
                      {job.requirements.map((req) => (
                        <li key={req} className={styles.checkItem} style={{ fontSize: "13.5px" }}>
                          <span className={styles.checkIcon}>✓</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#apply-form"
                    onClick={() => setSelectedRole(job.title)}
                    className={styles.cardLink}
                  >
                    <span>Apply for {job.title}</span>
                    <span>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 7: 4-STEP HIRING PROCESS ==================== */}
      <section className={styles.sectionDark}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.pillBadgeDark}>
              <span className={styles.pillDot} />
              <span>Simple Hiring Process</span>
            </div>
            <h2 className={styles.sectionTitleDark}>
              4 Easy Steps From Application to Joining Us.
            </h2>
          </div>

          <div className={styles.grid4}>
            {HIRING_STEPS.map((s) => (
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

      {/* ==================== SECTION 8: APPLICATION FORM + TEAM SHOWCASE ==================== */}
      <section id="apply-form" className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.splitRow} style={{ alignItems: "stretch" }}>
            <form onSubmit={handleSubmit} className={styles.formCard}>
              <div className={styles.pillBadgeLight}>
                <span className={styles.pillDot} />
                <span>Quick Application</span>
              </div>
              <h2 className={styles.sectionTitleLight} style={{ fontSize: "28px" }}>
                Send Us Your Application.
              </h2>
              <p className={styles.cardTextLight}>
                Fill out the form below or email your CV to{" "}
                <a href="mailto:info@catscomputers.com" style={{ color: "#1254ff", fontWeight: 500 }}>
                  info@catscomputers.com
                </a>
                .
              </p>

              <div className={styles.formGrid2}>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className={styles.formInput}
                  />
                </div>
              </div>

              <div className={styles.formGrid2}>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Phone / WhatsApp Number (UAE) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 000 0000"
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Position Applying For *</label>
                  <select
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className={styles.formSelect}
                  >
                    {CAREERS_DATA.map((j) => (
                      <option key={j.id} value={j.title}>
                        {j.title}
                      </option>
                    ))}
                    <option value="General Application">General IT / Sales Application</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGrid2}>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Years of UAE Experience</label>
                  <input
                    type="text"
                    placeholder="e.g., 4 Years in Dubai"
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>LinkedIn Profile Link (Optional)</label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/..."
                    className={styles.formInput}
                  />
                </div>
              </div>

              <div className={styles.formField}>
                <label className={styles.formLabel}>
                  Tell Us Briefly About Your Skills &amp; Experience *
                </label>
                <textarea
                  required
                  placeholder="Share your experience with Wi-Fi, switches, servers, firewalls, CCTV, or B2B IT sales..."
                  className={styles.formTextarea}
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                <span>Submit Application</span>
                <span>→</span>
              </button>

              {submitted && (
                <div className={styles.successBanner}>
                  Thank you! Your application for <strong>{selectedRole}</strong> has been received by our Dubai HR Desk. You can also email your PDF CV to{" "}
                  <strong>info@catscomputers.com</strong>.
                </div>
              )}
            </form>

            <div className={styles.imageShowcaseWrap} style={{ minHeight: "520px" }}>
              <Image
                src="/images/company/huawei-ekit-team.jpg"
                alt="CATS Computers Engineering & Distribution Team in Dubai"
                fill
                sizes="(max-width: 992px) 100vw, 560px"
                className={styles.imageShowcaseImg}
              />
              <div className={styles.floatingStatBadge}>
                <span className={styles.floatingStatValue}>Burdubai HQ</span>
                <span className={styles.floatingStatLabel}>
                  Al Musallah Street • Certified Multi-Vendor Team
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 9: BRANDS & CTA ==================== */}
      <TrustedBrandsSection />
      <CtaBanner />
    </main>
  );
}
