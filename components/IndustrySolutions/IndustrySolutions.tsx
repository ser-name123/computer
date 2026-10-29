"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./IndustrySolutions.module.css";

interface IndustryItem {
  number: string;
  title: string;
  icon:
    | "manufacturing"
    | "media"
    | "government"
    | "finance"
    | "automotive"
    | "telecom";
  column: "left" | "right";
  imageSrc: string;
  imageAlt: string;
  badgeText: string;
  headlineLines: [string, string, string];
  description: string;
  statValue: string;
  statLabel: string;
  ctaText: string;
}

const INDUSTRIES: IndustryItem[] = [
  {
    number: "01",
    title: "Corporate & Enterprise",
    icon: "finance",
    column: "left",
    imageSrc: "/images/case-study-boardroom.jpg",
    imageAlt: "Corporate Enterprise IT Infrastructure",
    badgeText: "Industry Solutions • 01",
    headlineLines: [
      "Reliable IT for",
      "Corporate &",
      "Office Teams",
    ],
    description:
      "We set up and look after your office IT — networks, security and support — so your team can work smoothly every day.",
    statValue: "24/7",
    statLabel: "Managed Support",
    ctaText: "Explore Corporate IT",
  },
  {
    number: "02",
    title: "Retail & Commerce",
    icon: "media",
    column: "left",
    imageSrc: "/images/case-study-cloud-migration.jpg",
    imageAlt: "Retail and Commerce Technology Solutions",
    badgeText: "Industry Solutions • 02",
    headlineLines: [
      "Safe, Connected",
      "Systems for Shops",
      "& Stores",
    ],
    description:
      "We give shops fast networks, CCTV cameras and entry systems that keep your store safe, connected and running without trouble.",
    statValue: "Secure",
    statLabel: "POS & Networks",
    ctaText: "Explore Retail IT",
  },
  {
    number: "03",
    title: "Hospitality & Tourism",
    icon: "telecom",
    column: "left",
    imageSrc: "/images/consultation-team.jpg",
    imageAlt: "Hospitality Technology and Connectivity Solutions",
    badgeText: "Industry Solutions • 03",
    headlineLines: [
      "Smooth Wi-Fi &",
      "Phones for Hotels",
      "& Tourism",
    ],
    description:
      "We set up strong Wi-Fi, phone systems and meeting-room tech that give your guests a smooth stay and keep your team connected.",
    statValue: "Seamless",
    statLabel: "Guest Connectivity",
    ctaText: "Explore Hospitality IT",
  },
  {
    number: "04",
    title: "Industrial & Manufacturing",
    icon: "manufacturing",
    column: "right",
    imageSrc: "/images/industry-manufacturing.jpg",
    imageAlt: "Industrial and Manufacturing IT Infrastructure",
    badgeText: "Industry Solutions • 04",
    headlineLines: [
      "Strong IT & CCTV",
      "for Factories &",
      "Warehouses",
    ],
    description:
      "We provide strong servers, backups, cabling and CCTV that keep factories and warehouses safe, stable and always running.",
    statValue: "Reliable",
    statLabel: "Infrastructure",
    ctaText: "Explore Industrial IT",
  },
  {
    number: "05",
    title: "Government & Public Sector",
    icon: "government",
    column: "right",
    imageSrc: "/images/blog-cyber-servers.jpg",
    imageAlt: "Government and Public Sector Secure IT Systems",
    badgeText: "Industry Solutions • 05",
    headlineLines: [
      "Secure IT for",
      "Government &",
      "Public Offices",
    ],
    description:
      "We build safe, well-managed IT systems for government offices — with strong security that protects data and keeps services running.",
    statValue: "Compliant",
    statLabel: "Secure Systems",
    ctaText: "Explore Public Sector IT",
  },
];

function IndustryIcon({
  type,
  active,
}: {
  type: IndustryItem["icon"];
  active: boolean;
}) {
  const strokeColor = active ? "#ffffff" : "#64748b";
  const fillColor = active ? "#ffffff" : "#64748b";

  switch (type) {
    case "manufacturing":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M3 21V8L9 12V8L15 12V5H21V21H3Z"
            stroke={strokeColor}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="7" y="15" width="2.5" height="3" fill={fillColor} />
          <rect x="11.5" y="15" width="2.5" height="3" fill={fillColor} />
          <rect x="16" y="15" width="2.5" height="3" fill={fillColor} />
        </svg>
      );

    case "media":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M8.5 3.5L12 7L15.5 3.5"
            stroke={strokeColor}
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="4"
            y="7"
            width="16"
            height="13"
            rx="6"
            fill={active ? "rgba(255,255,255,0.2)" : "rgba(100,116,139,0.18)"}
            stroke={strokeColor}
            strokeWidth="1.7"
          />
          <path d="M10.5 11L14.5 13.5L10.5 16V11Z" fill={fillColor} />
        </svg>
      );

    case "government":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M3 9.5L12 4L21 9.5H3Z"
            stroke={strokeColor}
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <line x1="6" y1="10" x2="6" y2="18" stroke={strokeColor} strokeWidth="1.7" />
          <line x1="10" y1="10" x2="10" y2="18" stroke={strokeColor} strokeWidth="1.7" />
          <line x1="14" y1="10" x2="14" y2="18" stroke={strokeColor} strokeWidth="1.7" />
          <line x1="18" y1="10" x2="18" y2="18" stroke={strokeColor} strokeWidth="1.7" />
          <line x1="3" y1="20" x2="21" y2="20" stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );

    case "finance":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M9 6H15L16.5 3.5H7.5L9 6Z"
            stroke={strokeColor}
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M6 15.5C6 11 8.5 6 12 6C15.5 6 18 11 18 15.5C18 18.8 15.5 20.5 12 20.5C8.5 20.5 6 18.8 6 15.5Z"
            stroke={strokeColor}
            strokeWidth="1.6"
          />
          <path
            d="M12 10.5V16.5M10.2 12.2C10.2 11.4 11 11 12 11C13 11 13.8 11.4 13.8 12.2C13.8 13 13 13.3 12 13.5C11 13.7 10.2 14 10.2 14.8C10.2 15.6 11 16 12 16C13 16 13.8 15.6 13.8 14.8"
            stroke={strokeColor}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case "automotive":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="9.5" cy="10.5" r="3.5" stroke={strokeColor} strokeWidth="1.6" />
          <path
            d="M9.5 5.5V7M9.5 14V15.5M4.5 10.5H6M13 10.5H14.5"
            stroke={strokeColor}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M16.5 6.5V18.5M14.5 8.5L16.5 6.5L18.5 8.5"
            stroke={strokeColor}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line x1="6" y1="18.5" x2="13" y2="18.5" stroke={strokeColor} strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );

    case "telecom":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M14.5 5.5C17 5.5 19 7.5 19 10M14.5 8.2C15.5 8.2 16.3 9 16.3 10"
            stroke={strokeColor}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M7.5 9.5C5.5 11.5 5.5 14.8 7.5 16.8C9.5 18.8 12.8 18.8 14.8 16.8L7.5 9.5Z"
            stroke={strokeColor}
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M9 17.5L6.5 20.5H14.5L12 17.5"
            stroke={strokeColor}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

function CircuitBoardDecor({ side }: { side: "left" | "right" }) {
  return (
    <div
      className={`${styles.circuitSide} ${
        side === "left" ? styles.circuitLeft : styles.circuitRight
      }`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 240 680"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.circuitSvg}
      >
        {/* Top Microchip Socket */}
        <g stroke="#cbd5e1" strokeWidth="1.2" opacity="0.55">
          <rect x="20" y="24" width="54" height="54" rx="4" fill="#eef4fc" />
          <rect x="30" y="34" width="34" height="34" rx="2" />
          {/* Top & Bottom Chip Pins */}
          {Array.from({ length: 6 }).map((_, i) => (
            <React.Fragment key={`top-chip-${i}`}>
              <line x1={28 + i * 7.5} y1="14" x2={28 + i * 7.5} y2="24" strokeWidth="1.8" />
              <line x1={28 + i * 7.5} y1="78" x2={28 + i * 7.5} y2="88" strokeWidth="1.8" />
              <line x1="10" y1={32 + i * 7.5} x2="20" y2={32 + i * 7.5} strokeWidth="1.8" />
              <line x1="74" y1={32 + i * 7.5} x2="84" y2={32 + i * 7.5} strokeWidth="1.8" />
            </React.Fragment>
          ))}
          {/* Circuit Traces Extending from Top Chip */}
          <path d="M84 44H130L155 69H210" />
          <circle cx="214" cy="69" r="3.5" fill="#cbd5e1" />
          <path d="M84 60H112L135 83V140" />
          <circle cx="135" cy="144" r="3" />
          <path d="M47 88V165L78 196H130" />
          <rect x="132" y="191" width="10" height="10" rx="2" fill="#cbd5e1" />
        </g>

        {/* Middle Circuit Nodes & Traces */}
        <g stroke="#cbd5e1" strokeWidth="1.2" opacity="0.45">
          <path d="M0 240H48L72 264V350L44 378H12" />
          <circle cx="72" cy="305" r="4" fill="#cbd5e1" />
          <path d="M76 305H124L146 327H185" />
          <circle cx="189" cy="327" r="3.5" />
          {/* Pin Array Bar */}
          {Array.from({ length: 7 }).map((_, i) => (
            <rect
              key={`mid-pad-${i}`}
              x={88 + i * 7}
              y="246"
              width="3.5"
              height="9"
              rx="1"
              fill="#cbd5e1"
              stroke="none"
            />
          ))}
        </g>

        {/* Bottom Microchip Socket */}
        <g stroke="#cbd5e1" strokeWidth="1.2" opacity="0.55">
          <rect x="20" y="576" width="54" height="54" rx="4" fill="#eef4fc" />
          <rect x="30" y="586" width="34" height="34" rx="2" />
          {Array.from({ length: 6 }).map((_, i) => (
            <React.Fragment key={`bot-chip-${i}`}>
              <line x1={28 + i * 7.5} y1="566" x2={28 + i * 7.5} y2="576" strokeWidth="1.8" />
              <line x1={28 + i * 7.5} y1="630" x2={28 + i * 7.5} y2="640" strokeWidth="1.8" />
              <line x1="10" y1={584 + i * 7.5} x2="20" y2={584 + i * 7.5} strokeWidth="1.8" />
              <line x1="74" y1={584 + i * 7.5} x2="84" y2={584 + i * 7.5} strokeWidth="1.8" />
            </React.Fragment>
          ))}
          <path d="M84 596H135L162 569H215" />
          <circle cx="219" cy="569" r="3.5" fill="#cbd5e1" />
          <path d="M47 566V500L82 465H148" />
          <circle cx="152" cy="465" r="3.5" />
        </g>

        {/* Animated Electric-Blue Data Packets Flowing Along Circuit Traces */}
        <g
          stroke="#2563eb"
          strokeWidth="1.6"
          strokeLinecap="round"
          className={styles.circuitPulseGroup}
        >
          <path d="M84 44H130L155 69H210" className={styles.circuitPulsePath} />
          <path d="M0 240H48L72 264V350L44 378H12" className={styles.circuitPulsePathAlt} />
          <path d="M84 596H135L162 569H215" className={styles.circuitPulsePath} />
        </g>
      </svg>
    </div>
  );
}

export default function IndustrySolutions() {
  const [activeNumber, setActiveNumber] = useState<string>("01");

  const activeIndustry =
    INDUSTRIES.find((item) => item.number === activeNumber) ?? INDUSTRIES[0];

  const leftItems = INDUSTRIES.filter((item) => item.column === "left");
  const rightItems = INDUSTRIES.filter((item) => item.column === "right");

  return (
    <section
      className={styles.industrySection}
      id="industry-solutions"
      aria-labelledby="industry-heading"
    >
      {/* Left & Right Motherboard / Microchip Circuitry Backgrounds */}
      <CircuitBoardDecor side="left" />
      <CircuitBoardDecor side="right" />

      <div className={styles.container}>
        {/* ==================== TOP ROW: PHOTO LEFT + HEADING & CTA RIGHT ==================== */}
        <div className={styles.topRow}>
          {/* Left Featured Industry Image (Changes dynamically based on clicked industry) */}
          <div className={styles.featuredImageCard}>
            {INDUSTRIES.map((item) => {
              const isCurrent = item.number === activeIndustry.number;
              return (
                <div
                  key={item.number}
                  className={`${styles.featuredImgLayer} ${
                    isCurrent ? styles.featuredImgLayerActive : ""
                  }`}
                  aria-hidden={!isCurrent}
                >
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 992px) 100vw, 540px"
                    className={styles.featuredImg}
                  />
                </div>
              );
            })}

            {/* Live Industry Metric Overlay Pill on Image */}
            <div className={styles.imageOverlayBadge} key={`stat-${activeIndustry.number}`}>
              <span className={styles.overlayStatValue}>{activeIndustry.statValue}</span>
              <span className={styles.overlayStatLabel}>{activeIndustry.statLabel}</span>
            </div>
          </div>

          {/* Right Centered Header & CTA (Changes dynamically based on clicked industry) */}
          <div className={styles.headerBlock} key={`content-${activeIndustry.number}`}>
            <div className={styles.industryBadge}>
              <span className={styles.badgeDot} />
              <span>{activeIndustry.badgeText}</span>
              <span className={styles.badgeDot} />
            </div>

            <h2 id="industry-heading" className={styles.sectionTitle}>
              <span>{activeIndustry.headlineLines[0]}</span>
              <span>{activeIndustry.headlineLines[1]}</span>
              <span>{activeIndustry.headlineLines[2]}</span>
            </h2>

            <p className={styles.industryDescription}>{activeIndustry.description}</p>

            <a href={`#industry-${activeIndustry.number}`} className={styles.discoverBtn}>
              <span className={styles.discoverBtnText}>{activeIndustry.ctaText}</span>
              <span className={styles.discoverBtnIcon}>
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

        {/* ==================== BOTTOM ROW: 2-COLUMN INTERACTIVE LIST (01 - 06) ==================== */}
        <div className={styles.industryColumns} role="tablist" aria-label="Business Industries">
          {/* Left Column (01, 02, 03) */}
          <div className={styles.industryCol}>
            {leftItems.map((item) => {
              const isActive = activeNumber === item.number;
              return (
                <button
                  key={item.number}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveNumber(item.number)}
                  className={`${styles.industryRowBtn} ${
                    isActive ? styles.industryRowActive : ""
                  }`}
                >
                  <span className={styles.rowNumber}>{item.number}</span>

                  <span className={styles.rowCenterGroup}>
                    <IndustryIcon type={item.icon} active={isActive} />
                    <span className={styles.rowTitle}>{item.title}</span>
                  </span>

                  <span className={styles.rowArrow} aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M3.5 10.5L10.5 3.5M10.5 3.5H4.5M10.5 3.5V9.5"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column (04, 05, 06) */}
          <div className={styles.industryCol}>
            {rightItems.map((item) => {
              const isActive = activeNumber === item.number;
              return (
                <button
                  key={item.number}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveNumber(item.number)}
                  className={`${styles.industryRowBtn} ${
                    isActive ? styles.industryRowActive : ""
                  }`}
                >
                  <span className={styles.rowNumber}>{item.number}</span>

                  <span className={styles.rowCenterGroup}>
                    <IndustryIcon type={item.icon} active={isActive} />
                    <span className={styles.rowTitle}>{item.title}</span>
                  </span>

                  <span className={styles.rowArrow} aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M3.5 10.5L10.5 3.5M10.5 3.5H4.5M10.5 3.5V9.5"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
