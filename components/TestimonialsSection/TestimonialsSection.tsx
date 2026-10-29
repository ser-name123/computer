"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./TestimonialsSection.module.css";

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  photo: string;
  avatarBg?: string;
  avatarPos?: string;
}

const FEATURED_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "integrity",
    name: "Honest & Clear",
    role: "Our Core Value",
    quote:
      "We are honest and clear in everything we do. Clients trust us because we do exactly what we promise — no shortcuts, no surprises.",
    avatar: "/images/company/team-group-1.jpg",
    photo: "/images/case-study-boardroom.jpg",
  },
  {
    id: "customer-centric",
    name: "You Come First",
    role: "Our Core Value",
    quote:
      "We start by understanding your needs and goals. We care about real, long-lasting relationships — not just one-time deals.",
    avatar: "/images/company/team-group-2.jpg",
    photo: "/images/consultation-team.jpg",
  },
  {
    id: "innovation",
    name: "Always Improving",
    role: "Our Core Value",
    quote:
      "Technology changes fast, and so do we. We keep learning new tools and ways of working, so you always get the latest and best.",
    avatar: "/images/company/huawei-ekit-team.jpg",
    photo: "/images/service-software-dev.jpg",
  },
  {
    id: "quality",
    name: "Top Quality",
    role: "Our Core Value",
    quote:
      "We keep our quality high on every job. Everything we set up — networks, security or cloud — is stable, safe and built to last.",
    avatar: "/images/company/ruijie-cctv-discussion.jpg",
    photo: "/images/card-cloud-solutions.jpg",
  },
  {
    id: "security-first",
    name: "Safety First",
    role: "Our Core Value",
    quote:
      "Online threats are growing every day, so we put safety first in everything we do — keeping your data and systems protected at all times.",
    avatar: "/images/company/huawei-reception.jpg",
    photo: "/images/card-cybersecurity.jpg",
  },
];

// Duplicated list for seamless infinite bottom-to-top vertical scroll
const MARQUEE_TESTIMONIALS = [
  ...FEATURED_TESTIMONIALS.slice(1),
  FEATURED_TESTIMONIALS[0],
];

function QuoteMarkIcon() {
  return (
    <svg
      width="28"
      height="22"
      viewBox="0 0 32 24"
      fill="none"
      className={styles.quoteIcon}
      aria-hidden="true"
    >
      <path
        d="M0 0H12.5V11.8L6.8 24H0.8L5.2 12.2H0V0ZM19.5 0H32V11.8L26.3 24H20.3L24.7 12.2H19.5V0Z"
        fill="#94a3b8"
        fillOpacity="0.65"
      />
    </svg>
  );
}

function PixelMapDecor({ side }: { side: "left" | "right" }) {
  const coords = [
    [2, 4], [3, 4], [4, 4], [2, 5], [3, 5], [5, 5], [6, 5],
    [1, 6], [2, 6], [3, 6], [4, 6], [5, 6], [7, 6], [8, 6],
    [2, 7], [3, 7], [4, 7], [5, 7], [6, 7], [7, 7], [8, 7], [9, 7],
    [3, 8], [4, 8], [5, 8], [6, 8], [7, 8], [8, 8], [10, 8],
    [1, 9], [2, 9], [4, 9], [5, 9], [6, 9], [7, 9], [9, 9],
    [2, 10], [3, 10], [5, 10], [6, 10], [8, 10],
    [4, 11], [5, 11], [6, 11], [7, 11],
    [3, 13], [4, 13], [5, 13], [7, 13], [8, 13],
    [2, 14], [3, 14], [4, 14], [5, 14], [6, 14], [7, 14],
    [3, 15], [4, 15], [5, 15], [6, 15],
    [4, 16], [5, 16], [7, 16],
  ];

  return (
    <div
      className={`${styles.pixelMapSide} ${
        side === "left" ? styles.pixelMapLeft : styles.pixelMapRight
      }`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 180 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        {coords.map(([x, y], idx) => (
          <circle
            key={idx}
            cx={x * 14}
            cy={y * 14}
            r="2.4"
            fill="rgba(148, 163, 184, 0.25)"
          />
        ))}
      </svg>
    </div>
  );
}

export default function TestimonialsSection() {
  const [selectedId, setSelectedId] = useState<string>("integrity");
  const activeReview =
    FEATURED_TESTIMONIALS.find((item) => item.id === selectedId) ??
    FEATURED_TESTIMONIALS[0];

  return (
    <section
      className={styles.testimonialsSection}
      id="testimonials"
      aria-labelledby="testimonials-heading"
    >
      {/* Left & Right Dotted World Map Clusters */}
      <PixelMapDecor side="left" />
      <PixelMapDecor side="right" />

      <div className={styles.container}>
        {/* ==================== CENTERED HEADER ==================== */}
        <div className={styles.headerBlock}>
          <div className={styles.testimonialsBadge}>
            <span className={styles.badgeDot} />
            <span>Our Core Values</span>
            <span className={styles.badgeDot} />
          </div>

          <h2 id="testimonials-heading" className={styles.sectionTitle}>
            <span>The Values That Drive Everything</span>
            <span>We Do.</span>
          </h2>
        </div>

        {/* ==================== 2-COLUMN CONTENT GRID ==================== */}
        <div className={styles.mainGrid}>
          {/* LEFT COLUMN: Featured Photo Card + Real Results Heading + 3 Stats Bar */}
          <div className={styles.leftColumn}>
            {/* Featured Photo with Overlapping White Testimonial Card */}
            <div className={styles.featuredPhotoBox}>
              <Image
                src={activeReview.photo}
                alt="CATS Computers technology solutions in action"
                fill
                sizes="(max-width: 992px) 100vw, 480px"
                className={styles.featuredPhoto}
              />

              {/* Inner White Quote Card */}
              <article className={styles.featuredQuoteCard}>
                <p className={styles.quoteParagraph}>
                  &ldquo;{activeReview.quote}&rdquo;
                </p>

                <div className={styles.authorRow}>
                  <div className={styles.authorLeft}>
                    <div className={styles.authorAvatar}>
                      <Image
                        src={activeReview.avatar}
                        alt={activeReview.name}
                        fill
                        sizes="40px"
                        className={styles.avatarImg}
                      />
                    </div>
                    <div className={styles.authorMeta}>
                      <strong className={styles.authorName}>{activeReview.name}</strong>
                      <span className={styles.authorRole}>
                        {activeReview.role}
                      </span>
                    </div>
                  </div>

                  <QuoteMarkIcon />
                </div>
              </article>
            </div>

            {/* Middle Italic Subheading */}
            <h3 className={styles.realResultsTitle}>
              <strong className={styles.realResultsDark}>Built on Trust, </strong>
              <span className={styles.realResultsMuted}>Driven by Quality</span>
            </h3>

            {/* Bottom 3-Column Metrics Box */}
            <div className={styles.statsCard}>
              <div className={styles.statItem}>
                <div className={styles.statValue}>
                  <span className={styles.statDark}>30</span>
                  <span className={styles.statBlue}>+</span>
                </div>
                <span className={styles.statLabel}>Partner Brands</span>
              </div>

              <div className={styles.statItem}>
                <div className={styles.statValue}>
                  <span className={styles.statDark}>12</span>
                  <span className={styles.statBlue}>+</span>
                </div>
                <span className={styles.statLabel}>Core IT Services</span>
              </div>

              <div className={styles.statItem}>
                <div className={styles.statValue}>
                  <span className={styles.statDark}>24/7</span>
                </div>
                <span className={styles.statLabel}>Support &amp; AMC</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Slow Continuous Bottom-to-Top Auto-Sliding Testimonials Feed */}
          <div className={styles.rightFeedCard}>
            <div className={styles.feedViewport}>
              <div className={styles.feedMarqueeTrack}>
                {[0, 1].map((copyIdx) => (
                  <div
                    key={`feed-copy-${copyIdx}`}
                    className={styles.feedMarqueeGroup}
                    aria-hidden={copyIdx === 1}
                  >
                    {MARQUEE_TESTIMONIALS.map((item) => {
                      const isSelected = selectedId === item.id;
                      return (
                        <React.Fragment key={`${copyIdx}-${item.id}`}>
                          <article
                            onClick={() => setSelectedId(item.id)}
                            className={`${styles.feedItem} ${
                              isSelected ? styles.feedItemSelected : ""
                            }`}
                            title="Click to feature this value"
                          >
                            <p className={styles.quoteParagraph}>
                              &ldquo;{item.quote}&rdquo;
                            </p>

                            <div className={styles.authorRow}>
                              <div className={styles.authorLeft}>
                                <div
                                  className={styles.authorAvatar}
                                  style={
                                    item.avatarBg
                                      ? { backgroundColor: item.avatarBg }
                                      : undefined
                                  }
                                >
                                  <Image
                                    src={item.avatar}
                                    alt={item.name}
                                    fill
                                    sizes="40px"
                                    className={styles.avatarImg}
                                    style={
                                      item.avatarPos
                                        ? { objectPosition: item.avatarPos }
                                        : undefined
                                    }
                                  />
                                </div>
                                <div className={styles.authorMeta}>
                                  <strong className={styles.authorName}>
                                    {item.name}
                                  </strong>
                                  <span className={styles.authorRole}>
                                    {item.role}
                                  </span>
                                </div>
                              </div>

                              <QuoteMarkIcon />
                            </div>
                          </article>

                          <div className={styles.feedDivider} />
                        </React.Fragment>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
