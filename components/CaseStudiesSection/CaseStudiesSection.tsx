"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./CaseStudiesSection.module.css";

interface CaseStudyData {
  index: number;
  tags: string[];
  titleLines: [string, string];
  description: string;
  featuredImg: string;
}

const CASE_STUDIES: CaseStudyData[] = [
  {
    index: 1,
    tags: ["Huawei", "eKit", "Award"],
    titleLines: ["Huawei Authorized", "Elite Distribution Partner"],
    description:
      "Huawei named us an Authorized Elite Distribution Partner for data communication in the UAE.",
    featuredImg: "/images/company/huawei-ekit-award.jpg",
  },
  {
    index: 2,
    tags: ["Ruijie Reyee", "TLM", "Award"],
    titleLines: ["Top Performing ADP", "of 2024 — Ruijie Reyee"],
    description:
      "TLM Distribution and Ruijie Reyee named us their Top Performing Partner of 2024 for great growth.",
    featuredImg: "/images/company/award-ruijie-adp-2024-a.jpg",
  },
  {
    index: 3,
    tags: ["Ruijie Reyee", "Recognition", "2024"],
    titleLines: ["Award Presentation", "— Ruijie Reyee"],
    description:
      "Our team on stage receiving the Top Performing Partner 2024 award from Ruijie Reyee.",
    featuredImg: "/images/company/award-ruijie-adp-2024-b.jpg",
  },
  {
    index: 4,
    tags: ["Huawei eKit", "Partnership", "Summit"],
    titleLines: ["Huawei eKit Partner", "Summit"],
    description:
      "Our team at the Huawei eKit summit, growing our networking partnership with Huawei.",
    featuredImg: "/images/company/huawei-ekit-team.jpg",
  },
  {
    index: 5,
    tags: ["Ruijie Reyee", "CCTV", "Solutions"],
    titleLines: ["Latest CCTV", "Solutions"],
    description:
      "Learning Ruijie Reyee's newest CCTV solutions so we can offer the best security to our clients.",
    featuredImg: "/images/company/ruijie-cctv-discussion.jpg",
  },
  {
    index: 6,
    tags: ["Partner Program", "Ruijie", "Reyee"],
    titleLines: ["Active in Top", "Partner Programs"],
    description:
      "We stay active in top partner programs to keep our team up to date with the latest tech.",
    featuredImg: "/images/company/ruijie-partner-lobby.jpg",
  },
  {
    index: 7,
    tags: ["Huawei", "Enterprise", "Partner"],
    titleLines: ["Huawei", "Partnership"],
    description:
      "Building a strong partnership with Huawei to bring trusted technology to businesses in the region.",
    featuredImg: "/images/company/huawei-reception.jpg",
  },
];

const TOTAL = CASE_STUDIES.length;

function getWrappedCase(baseIdx: number, offset: number): { item: CaseStudyData; idx: number } {
  const idx = ((baseIdx + offset) % TOTAL + TOTAL) % TOTAL;
  return { item: CASE_STUDIES[idx], idx };
}

export default function CaseStudiesSection() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [slideDir, setSlideDir] = useState<"next" | "prev">("next");
  const [animKey, setAnimKey] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setSlideDir("next");
    setCurrentIdx((prev) => (prev + 1) % TOTAL);
    setAnimKey((k) => k + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setSlideDir("prev");
    setCurrentIdx((prev) => (prev - 1 + TOTAL) % TOTAL);
    setAnimKey((k) => k + 1);
  }, []);

  const handleSelectIdx = (targetIdx: number, dir: "next" | "prev") => {
    if (targetIdx === currentIdx) return;
    setSlideDir(dir);
    setCurrentIdx(targetIdx);
    setAnimKey((k) => k + 1);
  };

  // Auto-slide every 3.6 seconds so cards & bottom counter (01/7 -> 07/7) keep sliding smoothly
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 3600);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  const activeCase = CASE_STUDIES[currentIdx];
  const formattedNumber = String(activeCase.index).padStart(2, "0");

  // 2 thumbnails to the left of the active center card, 3 thumbnails to the right
  const leftThumbs = [
    getWrappedCase(currentIdx, -2),
    getWrappedCase(currentIdx, -1),
  ];
  const rightThumbs = [
    getWrappedCase(currentIdx, 1),
    getWrappedCase(currentIdx, 2),
    getWrappedCase(currentIdx, 3),
  ];

  const dirAnimClass =
    slideDir === "next" ? styles.slideEnterNext : styles.slideEnterPrev;

  return (
    <section
      className={styles.caseStudiesSection}
      id="case-studies"
      aria-labelledby="case-studies-heading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ==================== TOP-LEFT FLOWING CONTOUR WAVES ==================== */}
      <div className={styles.topLeftContours} aria-hidden="true">
        <svg viewBox="0 0 540 520" fill="none" xmlns="http://www.w3.org/2000/svg">
          {Array.from({ length: 12 }).map((_, i) => {
            const offset = i * 16;
            return (
              <path
                key={i}
                d={`M-40 ${40 + offset} C ${120 + offset * 0.6} ${
                  80 + offset * 0.4
                }, ${280 - offset * 0.5} ${10 + offset * 0.7}, ${480 - offset * 0.4} ${
                  -30 + offset * 0.3
                }`}
                stroke="rgba(148, 163, 184, 0.22)"
                strokeWidth="1"
              />
            );
          })}
          {Array.from({ length: 8 }).map((_, i) => {
            const offset = i * 18;
            return (
              <path
                key={`vert-${i}`}
                d={`M${-20 + offset * 0.5} ${140 + offset} C ${75 + offset * 0.4} ${
                  250 + offset * 0.3
                }, ${25 + offset * 0.5} ${380 + offset * 0.2}, ${90 + offset * 0.6} 520`}
                stroke="rgba(148, 163, 184, 0.18)"
                strokeWidth="1"
              />
            );
          })}
        </svg>
      </div>

      {/* ==================== MAIN CONTENT WRAPPER ==================== */}
      <div className={styles.mainWrapper}>
        {/* TOP HEADER ROW: Badge on Left, Heading Aligned Above Center Featured Card */}
        <div className={styles.headerRow}>
          <div className={styles.headerBadgeCol}>
            <div className={styles.caseBadge}>
              <span className={styles.badgeDot} />
              <span>Awards &amp; Recognition</span>
              <span className={styles.badgeDot} />
            </div>
          </div>

          <div className={styles.headerTitleCol}>
            <h2 id="case-studies-heading" className={styles.sectionTitle}>
              <span>Recognized by the World&apos;s Leading</span>
              <span>Technology Brands</span>
            </h2>
          </div>
        </div>

        {/* ASYMMETRIC GALLERY + CONTROLS GRID */}
        <div className={styles.galleryGrid}>
          {/* ==================== LEFT COLUMN (2 Sliding Thumbnails + Live Counter) ==================== */}
          <div className={styles.leftColumn}>
            <div
              key={`left-${animKey}`}
              className={`${styles.leftThumbnailsRow} ${dirAnimClass}`}
            >
              {leftThumbs.map(({ item, idx }) => (
                <div
                  key={`left-thumb-${item.index}`}
                  className={styles.thumbCard}
                  onClick={() => handleSelectIdx(idx, "prev")}
                  title={item.titleLines.join(" ")}
                >
                  <Image
                    src={item.featuredImg}
                    alt={item.titleLines.join(" ")}
                    fill
                    sizes="220px"
                    className={styles.thumbImg}
                  />
                  <div className={styles.thumbBadgeOverlay}>
                    <span>0{item.index}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Slider Counter: ← 01/7 → */}
            <div className={styles.sliderPaginationRow}>
              <button
                type="button"
                onClick={handlePrev}
                className={styles.longArrowBtn}
                aria-label="Previous case study"
              >
                <svg width="36" height="14" viewBox="0 0 36 14" fill="none" aria-hidden="true">
                  <line x1="35" y1="7" x2="2" y2="7" stroke="currentColor" strokeWidth="1.3" />
                  <path
                    d="M6.5 2.5L2 7L6.5 11.5"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className={styles.slideCounterText} aria-live="polite">
                <strong
                  key={`num-${currentIdx}`}
                  className={`${styles.currentSlideNum} ${styles.counterFlip}`}
                >
                  {formattedNumber}
                </strong>
                <span className={styles.totalSlideNum}>/{TOTAL}</span>
              </div>

              <button
                type="button"
                onClick={handleNext}
                className={styles.longArrowBtn}
                aria-label="Next case study"
              >
                <svg width="36" height="14" viewBox="0 0 36 14" fill="none" aria-hidden="true">
                  <line x1="1" y1="7" x2="34" y2="7" stroke="currentColor" strokeWidth="1.3" />
                  <path
                    d="M29.5 2.5L34 7L29.5 11.5"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* ==================== CENTER COLUMN (Tall Featured Case Study Card) ==================== */}
          <article
            key={`center-${animKey}`}
            className={`${styles.featuredCard} ${dirAnimClass}`}
          >
            <Image
              src={activeCase.featuredImg}
              alt={activeCase.titleLines.join(" ")}
              fill
              sizes="(max-width: 992px) 100vw, 395px"
              className={styles.featuredCardBg}
            />
            <div className={styles.featuredCardOverlay} />

            {/* Top-Left Category Tags */}
            <div className={styles.featuredTagsRow}>
              {activeCase.tags.map((tag) => (
                <span key={tag} className={styles.tagPill}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Bottom Content & Action Bar */}
            <div className={styles.featuredBottomContent}>
              <h3 className={styles.featuredTitle}>
                <span>{activeCase.titleLines[0]}</span>
                <span>{activeCase.titleLines[1]}</span>
              </h3>

              <p className={styles.featuredDescription}>{activeCase.description}</p>

              <a href="#partners" className={styles.projectDetailsBar}>
                <span className={styles.detailsBarLabel}>View Achievement</span>
                <span className={styles.detailsBarArrowBox}>
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path
                      d="M3.5 10.5L10.5 3.5M10.5 3.5H4.5M10.5 3.5V9.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </article>

          {/* ==================== RIGHT COLUMN (3 Sliding Thumbnails + Summary & CTA) ==================== */}
          <div className={styles.rightColumn}>
            <div
              key={`right-${animKey}`}
              className={`${styles.rightThumbnailsRow} ${dirAnimClass}`}
            >
              {rightThumbs.map(({ item, idx }, i) => (
                <div
                  key={`right-thumb-${item.index}`}
                  className={`${styles.thumbCard} ${
                    i === 2 ? styles.edgeThumbCard : ""
                  }`}
                  onClick={() => handleSelectIdx(idx, "next")}
                  title={item.titleLines.join(" ")}
                >
                  <Image
                    src={item.featuredImg}
                    alt={item.titleLines.join(" ")}
                    fill
                    sizes="220px"
                    className={styles.thumbImg}
                  />
                  <div className={styles.thumbBadgeOverlay}>
                    <span>0{item.index}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Portfolio Summary & View All Projects Button */}
            <div className={styles.rightSummaryBlock}>
              <p className={styles.portfolioParagraph}>
                We are proud partners of the world&apos;s top tech brands — Huawei, Ruijie
                Reyee, Cisco, Microsoft, AWS and many more.
              </p>

              <a href="#partners" className={styles.viewAllProjectsBtn}>
                <span className={styles.btnText}>Our Partners</span>
                <span className={styles.btnIconBox}>
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path
                      d="M3.5 10.5L10.5 3.5M10.5 3.5H4.5M10.5 3.5V9.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
