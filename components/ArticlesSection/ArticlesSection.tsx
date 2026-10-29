"use client";

import React from "react";
import Image from "next/image";
import styles from "./ArticlesSection.module.css";

interface ArticleCardData {
  id: string;
  category: string;
  date: string;
  titleLines: [string, string];
  author: string;
  readTime: string;
  imageSrc: string;
  imageAlt: string;
}

const ARTICLES_LIST: ArticleCardData[] = [
  {
    id: "huawei-ekit-summit",
    category: "Huawei eKit",
    date: "2024",
    titleLines: ["At the Huawei eKit", "Partner Summit."],
    author: "CATS Computers",
    readTime: "Highlight",
    imageSrc: "/images/company/huawei-ekit-team.jpg",
    imageAlt: "CATS Computers team at the Huawei eKit partner summit",
  },
  {
    id: "ruijie-adp-2024",
    category: "Ruijie Reyee",
    date: "2024",
    titleLines: [
      "Top Partner of 2024",
      "— Ruijie Reyee.",
    ],
    author: "CATS Computers",
    readTime: "Award",
    imageSrc: "/images/company/award-ruijie-adp-2024-b.jpg",
    imageAlt: "CATS Computers receiving the Ruijie Reyee Top Performing ADP 2024 award",
  },
  {
    id: "partner-program",
    category: "Partnerships",
    date: "2024",
    titleLines: [
      "Growing Our Partnerships",
      "With Top Tech Brands.",
    ],
    author: "CATS Computers",
    readTime: "Highlight",
    imageSrc: "/images/company/ruijie-partner-lobby.jpg",
    imageAlt: "CATS Computers at a Ruijie Reyee partner program event",
  },
];

export default function ArticlesSection() {
  return (
    <section
      className={styles.articlesSection}
      id="highlights"
      aria-labelledby="articles-heading"
    >
      <div className={styles.outerContainer}>
        <div className={styles.innerRoundedBox}>
          {/* ==================== HEADER ROW ==================== */}
          <div className={styles.headerRow}>
            <div className={styles.headerLeft}>
              <div className={styles.articlesBadge}>
                <span className={styles.badgeDot} />
                <span>Events &amp; Highlights</span>
                <span className={styles.badgeDot} />
              </div>

              <h2 id="articles-heading" className={styles.sectionTitle}>
                <span>Moments from Our</span>
                <span>Events &amp; Awards.</span>
              </h2>
            </div>

            <div className={styles.headerRight}>
              <a href="#partners" className={styles.viewAllBtn}>
                <span className={styles.btnText}>View All Highlights</span>
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

          {/* ==================== 3 BLOG CARDS GRID ==================== */}
          <div className={styles.cardsGrid}>
            {ARTICLES_LIST.map((article) => (
              <article key={article.id} className={styles.articleCard}>
                {/* Image Wrapper + Overlapping Dual Category/Date Pill */}
                <div className={styles.imageWrapper}>
                  <div className={styles.imageInner}>
                    <Image
                      src={article.imageSrc}
                      alt={article.imageAlt}
                      fill
                      sizes="(max-width: 900px) 100vw, 320px"
                      className={styles.articleImg}
                    />
                  </div>

                  {/* Overlapping Dual Pill Badge at Bottom-Left */}
                  <div className={styles.dualPillBadge}>
                    <span className={styles.categoryLabel}>
                      {article.category}
                    </span>
                    <span className={styles.datePill}>{article.date}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className={styles.cardBody}>
                  <h3 className={styles.articleTitle}>
                    <a href={`#${article.id}`} className={styles.titleLink}>
                      <span>{article.titleLines[0]}</span>
                      <span>{article.titleLines[1]}</span>
                    </a>
                  </h3>

                  <div className={styles.cardDivider} />

                  {/* Meta Footer Row */}
                  <div className={styles.metaRow}>
                    <div className={styles.metaItem}>
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <circle
                          cx="12"
                          cy="8"
                          r="4"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        />
                        <path
                          d="M5 20C5 16.5 8 14 12 14C16 14 19 16.5 19 20"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span>{article.author}</span>
                    </div>

                    <div className={styles.metaItem}>
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="9"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        />
                        <path
                          d="M12 7.5V12L15 14"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

