"use client";

import React from "react";
import Image from "next/image";
import styles from "./WhyChooseUs.module.css";

interface ReasonCard {
  id: string;
  titleLines: [string, string];
  description: string;
  icon: "customer" | "marketing" | "experience" | "support";
}

const REASON_CARDS: ReasonCard[] = [
  {
    id: "certified-professionals",
    titleLines: ["Skilled", "Team"],
    description:
      "Our certified team knows networks, security, cloud and software inside out.",
    icon: "experience",
  },
  {
    id: "customized-solutions",
    titleLines: ["Made For", "You"],
    description:
      "We build every solution around your needs, your budget and your goals.",
    icon: "customer",
  },
  {
    id: "best-practices",
    titleLines: ["Done The", "Right Way"],
    description:
      "We follow the best and safest ways of working on every single job.",
    icon: "marketing",
  },
  {
    id: "support-24-7",
    titleLines: ["24/7", "Support"],
    description:
      "We're here day and night to keep your IT running with no downtime.",
    icon: "support",
  },
];

const CHART_BARS = [
  { month: "Oct", totalPct: 52, activePct: 34 },
  { month: "Nov", totalPct: 78, activePct: 56 },
  { month: "Dec", totalPct: 92, activePct: 68 },
  { month: "Jan", totalPct: 60, activePct: 40 },
  { month: "Feb", totalPct: 74, activePct: 50 },
  { month: "Mar", totalPct: 64, activePct: 42 },
];

function ReasonIcon({ type }: { type: ReasonCard["icon"] }) {
  switch (type) {
    case "customer":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="8.5" stroke="#0f172a" strokeWidth="1.5" strokeDasharray="3 2" />
          <circle cx="12" cy="10" r="2.6" fill="#0f172a" />
          <path
            d="M7.8 16.8C8.6 14.8 10.1 13.8 12 13.8C13.9 13.8 15.4 14.8 16.2 16.8"
            stroke="#0f172a"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <line x1="12" y1="2" x2="12" y2="4.5" stroke="#2557ff" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="12" y1="19.5" x2="12" y2="22" stroke="#2557ff" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="2" y1="12" x2="4.5" y2="12" stroke="#2557ff" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="19.5" y1="12" x2="22" y2="12" stroke="#2557ff" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );

    case "marketing":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="4" y="4" width="16" height="11.5" rx="1.8" stroke="#0f172a" strokeWidth="1.6" />
          <line x1="3" y1="4" x2="21" y2="4" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M8 12V9.5M12 12V7.5M16 12V8.5" stroke="#2557ff" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M9 19.5L12 15.5L15 19.5" stroke="#0f172a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="12" y1="15.5" x2="12" y2="20" stroke="#0f172a" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );

    case "experience":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          {/* 3 Stars + Laurel/Hands */}
          <circle cx="12" cy="9" r="3" fill="#0f172a" />
          <path d="M12 3.5L12.8 5.2L14.6 5.4L13.3 6.6L13.6 8.4L12 7.5L10.4 8.4L10.7 6.6L9.4 5.4L11.2 5.2L12 3.5Z" fill="#2557ff" />
          <path
            d="M6.5 13.5C6.5 16.5 8.8 19 12 19C15.2 19 17.5 16.5 17.5 13.5"
            stroke="#0f172a"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="M5 11.5L7.5 14M19 11.5L16.5 14"
            stroke="#2557ff"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );

    case "support":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12V15.5C19.5 16.6 18.6 17.5 17.5 17.5H15.5"
            stroke="#0f172a"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <rect x="3.5" y="11.5" width="3" height="5" rx="1.5" fill="#2557ff" />
          <rect x="17.5" y="11.5" width="3" height="5" rx="1.5" fill="#2557ff" />
          <text
            x="12"
            y="14.5"
            textAnchor="middle"
            fill="#0f172a"
            fontSize="6.8"
            fontWeight="800"
          >
            24
          </text>
          <circle cx="13.5" cy="18.5" r="1.3" fill="#0f172a" />
        </svg>
      );
  }
}

export default function WhyChooseUs() {
  return (
    <section
      className={styles.whySection}
      id="why-choose-us"
      aria-labelledby="why-choose-heading"
    >
      {/* ==================== TOP-LEFT FLOWING RIBBON WAVES ==================== */}
      <div className={styles.topLeftWaves} aria-hidden="true">
        <svg viewBox="0 0 340 420" fill="none" xmlns="http://www.w3.org/2000/svg">
          {Array.from({ length: 18 }).map((_, i) => {
            const step = i * 6.5;
            return (
              <path
                key={i}
                d={`M${-40 + step * 0.3} ${-20 + step} C ${90 + step * 0.5} ${
                  10 + step * 0.8
                }, ${210 - step * 0.4} ${75 + step * 0.6}, ${120 - step * 0.5} ${
                  195 + step * 0.5
                } C ${50 - step * 0.3} ${280 + step * 0.4}, ${10 - step * 0.2} ${
                  350 + step * 0.3
                }, -30 ${410 + step * 0.2}`}
                stroke="rgba(99, 132, 214, 0.22)"
                strokeWidth="1"
              />
            );
          })}
        </svg>
      </div>

      {/* ==================== BOTTOM-LEFT PERSPECTIVE FLOOR GRID ==================== */}
      <div className={styles.bottomLeftGrid} aria-hidden="true">
        <svg viewBox="0 0 600 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          {Array.from({ length: 9 }).map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={30 + i * 24}
              x2="580"
              y2={30 + i * 24}
              stroke="rgba(148, 163, 184, 0.14)"
              strokeWidth="1"
            />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <line
              key={`v-${i}`}
              x1={40 + i * 58}
              y1="20"
              x2={-20 + i * 62}
              y2="240"
              stroke="rgba(148, 163, 184, 0.14)"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      {/* ==================== RIGHT DOTTED HALFTONE SPHERE MESH ==================== */}
      <div className={styles.rightDottedSphere} aria-hidden="true">
        <svg viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg">
          {Array.from({ length: 14 }).map((_, row) =>
            Array.from({ length: 16 }).map((__, col) => {
              const angle = (row / 14) * Math.PI;
              const lon = (col / 16) * Math.PI;
              const cx = (190 + Math.cos(lon) * Math.sin(angle) * 155).toFixed(2);
              const cy = (190 + Math.cos(angle) * 145).toFixed(2);
              const r = Math.max(0.8, 1.2 + Math.sin(angle) * Math.sin(lon) * 2.4).toFixed(2);
              return (
                <circle
                  key={`${row}-${col}`}
                  cx={cx}
                  cy={cy}
                  r={r}
                  fill="rgba(148, 163, 184, 0.32)"
                />
              );
            })
          )}
        </svg>
      </div>

      {/* ==================== BOTTOM-RIGHT ROYAL BLUE DUOTONE PHOTO PANEL ==================== */}
      <div className={styles.bottomRightBluePanel} aria-hidden="true">
        <Image
          src="/images/service-software-dev.jpg"
          alt=""
          fill
          sizes="45vw"
          className={styles.bluePanelPhoto}
        />
        <div className={styles.bluePanelColorOverlay} />
      </div>

      {/* ==================== MAIN CONTENT CONTAINER ==================== */}
      <div className={styles.container}>
        {/* TOP 2-COLUMN AREA */}
        <div className={styles.topRow}>
          {/* Left Text Column */}
          <div className={styles.leftColumn}>
            <div className={styles.whyBadge}>
              <span className={styles.badgeDot} />
              <span>Why Choose Us</span>
              <span className={styles.badgeDot} />
            </div>

            <h2 id="why-choose-heading" className={styles.sectionTitle}>
              <span>Why Businesses Choose</span>
              <span>CATS Computers for</span>
              <span>Their IT.</span>
            </h2>

            <p className={styles.sectionDescription}>
              From planning to setup to support — we do it all in one place. Offices,
              shops, hotels, factories and government teams trust us to keep their IT
              safe and running every day.
            </p>

            <a href="#contact" className={styles.getInTouchBtn}>
              <span className={styles.btnText}>Get In Touch</span>
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

          {/* Right Executive Portrait & Floating UI Cards */}
          <div className={styles.rightVisualArea}>
            {/* Executive Portrait */}
            <div className={styles.executiveImageBox}>
              <Image
                src="/images/company/ruijie-cctv-discussion.jpg"
                alt="CATS Computers team reviewing a Ruijie Reyee CCTV solution"
                fill
                sizes="(max-width: 992px) 100vw, 520px"
                className={styles.executiveImg}
              />
            </div>

            {/* Floating Card 1: "6000+ Happy Users" (Left of shoulder) */}
            <div className={styles.happyUsersFloatingCard}>
              <div className={styles.usersAvatarRow}>
                <span
                  className={styles.userAvatarDot}
                  style={{ background: "linear-gradient(135deg, #f59e0b, #78350f)" }}
                >
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="9" r="4" fill="#fde68a" />
                    <path d="M4 22C4 17 7.5 14 12 14C16.5 14 20 17 20 22" fill="#fcd34d" />
                  </svg>
                </span>
                <span
                  className={styles.userAvatarDot}
                  style={{ background: "linear-gradient(135deg, #3b82f6, #1e3a8a)" }}
                >
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="9" r="4" fill="#bfdbfe" />
                    <path d="M4 22C4 17 7.5 14 12 14C16.5 14 20 17 20 22" fill="#93c5fd" />
                  </svg>
                </span>
                <span
                  className={styles.userAvatarDot}
                  style={{ background: "linear-gradient(135deg, #10b981, #064e3b)" }}
                >
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="9" r="4" fill="#a7f3d0" />
                    <path d="M4 22C4 17 7.5 14 12 14C16.5 14 20 17 20 22" fill="#6ee7b7" />
                  </svg>
                </span>
                <span
                  className={styles.userAvatarDot}
                  style={{ background: "linear-gradient(135deg, #0ea5e9, #0c4a6e)" }}
                >
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="9" r="4" fill="#bae6fd" />
                    <path d="M4 22C4 17 7.5 14 12 14C16.5 14 20 17 20 22" fill="#7dd3fc" />
                  </svg>
                </span>
              </div>
              <div className={styles.happyUsersText}>
                <strong>30+</strong> Partner Brands
              </div>
            </div>

            {/* Floating Card 2: "$1234.40" Analytics Bar Chart (Right of shoulder) */}
            <div className={styles.analyticsFloatingCard}>
              <div className={styles.analyticsHeader}>
                <div>
                  <div className={styles.analyticsAmount}>24/7</div>
                  <div className={styles.analyticsDate}>Support & Monitoring</div>
                </div>
                <span className={styles.yearlyPill}>Yearly ⌄</span>
              </div>

              <div className={styles.barsArea}>
                {/* Floating tooltip pill over the first bars */}
                <span className={styles.barTooltip}>Uptime</span>

                {CHART_BARS.map((bar) => (
                  <div key={bar.month} className={styles.barCol}>
                    <div className={styles.barTrack}>
                      <div
                        className={styles.barFillTop}
                        style={{ height: `${bar.totalPct}%` }}
                      >
                        <div
                          className={styles.barFillBottom}
                          style={{ height: `${bar.activePct}%` }}
                        />
                      </div>
                    </div>
                    <span className={styles.barMonth}>{bar.month}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM 4 FEATURE CARDS ROW */}
        <div className={styles.cardsGrid}>
          {REASON_CARDS.map((card) => (
            <article key={card.id} className={styles.reasonCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIconCircle}>
                  <ReasonIcon type={card.icon} />
                </div>
                <h3 className={styles.cardTitle}>
                  <span>{card.titleLines[0]}</span>
                  <span>{card.titleLines[1]}</span>
                </h3>
              </div>

              <p className={styles.cardDescription}>{card.description}</p>
            </article>
          ))}
        </div>
      </div>

      {/* ==================== BOTTOM LIGHT-BLUE HALFTONE DOTTED STRIP ==================== */}
      <div className={styles.bottomHalftoneStrip} aria-hidden="true">
        <svg className={styles.halftoneSvg} width="100%" height="58" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="whyChooseBottomDots"
              x="0"
              y="0"
              width="18"
              height="58"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="9" cy="8" r="4.2" fill="#cbd8f0" />
              <circle cx="9" cy="20" r="3.4" fill="#cbd8f0" />
              <circle cx="9" cy="31" r="2.6" fill="#cbd8f0" />
              <circle cx="9" cy="41" r="1.9" fill="#cbd8f0" />
              <circle cx="9" cy="50" r="1.2" fill="#cbd8f0" />
            </pattern>
          </defs>
          <rect width="100%" height="58" fill="url(#whyChooseBottomDots)" />
        </svg>
      </div>
    </section>
  );
}
