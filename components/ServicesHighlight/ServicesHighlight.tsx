"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./ServicesHighlight.module.css";

interface ServiceCardData {
  id: string;
  variant: "blue-photo" | "solid-blue-cutout" | "dark-mono-photo";
  titleLines: [string, string];
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const SERVICE_CARDS: ServiceCardData[] = [
  {
    id: "software-development",
    variant: "blue-photo",
    titleLines: ["SOFTWARE DEV &", "AUTOMATION"],
    description:
      "We build custom software, mobile apps, and automation that fit your business and take away slow, manual work.",
    imageSrc: "/images/service-software-dev.jpg",
    imageAlt: "CATS Computers Software Development Team",
  },
  {
    id: "cloud-virtualization",
    variant: "solid-blue-cutout",
    titleLines: ["CLOUD &", "VIRTUALIZATION"],
    description:
      "We move your business to the cloud (Azure, AWS, or private) and set up backups and recovery so your data is always safe.",
    imageSrc: "/images/service-ai-automation.jpg",
    imageAlt: "CATS Computers Cloud and Virtualization Services",
  },
  {
    id: "managed-it",
    variant: "dark-mono-photo",
    titleLines: ["24/7 MANAGED IT", "SUPPORT"],
    description:
      "We watch over your systems day and night and fix issues fast — on-site or remote — so your IT keeps running without downtime.",
    imageSrc: "/images/service-managed-it.jpg",
    imageAlt: "CATS Computers Managed IT Support Engineer",
  },
];

export default function ServicesHighlight() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className={styles.sectionWrapper} aria-label="Core IT Services">
      {/* ==================== TOP HALFTONE DOTTED TRANSITION STRIP ==================== */}
      <div className={styles.halftoneStrip} aria-hidden="true">
        <svg
          className={styles.halftoneSvg}
          width="100%"
          height="66"
           xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="optitechHalftoneDots"
              x="0"
              y="0"
              width="18"
              height="66"
              patternUnits="userSpaceOnUse"
            >
              {/* 5 rows of dots decreasing in radius from top to bottom */}
              <circle cx="9" cy="7" r="4.6" fill="#041b4d" />
              <circle cx="9" cy="20" r="3.6" fill="#041b4d" />
              <circle cx="9" cy="32" r="2.8" fill="#041b4d" />
              <circle cx="9" cy="43" r="2.0" fill="#041b4d" />
              <circle cx="9" cy="53" r="1.25" fill="#041b4d" />
            </pattern>
          </defs>
          <rect width="100%" height="66" fill="url(#optitechHalftoneDots)" />
        </svg>
      </div>

      {/* ==================== 3-COLUMN FEATURE CARDS CONTAINER ==================== */}
      <div className={styles.cardsContainer}>
        <div className={styles.cardsGrid}>
          {SERVICE_CARDS.map((card) => {
            const isHovered = hoveredId === card.id;

            return (
              <article
                key={card.id}
                className={`${styles.serviceCard} ${
                  card.variant === "blue-photo"
                    ? styles.cardBluePhoto
                    : card.variant === "solid-blue-cutout"
                    ? styles.cardSolidBlue
                    : styles.cardDarkMono
                } ${isHovered ? styles.cardHovered : ""}`}
                onMouseEnter={() => setHoveredId(card.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Background or Cutout Graphic Depending on Card Variant */}
                {card.variant === "solid-blue-cutout" ? (
                  <>
                    {/* Subtle ambient glow inside the electric blue card */}
                    <div className={styles.solidBlueGlow} aria-hidden="true" />

                    {/* Circular Pinwheel / Segmented Tech Cutout Emblem on Top-Right */}
                    <div className={styles.cutoutEmblemWrap}>
                      <div className={styles.cutoutCircleImageWrap}>
                        <Image
                          src={card.imageSrc}
                          alt={card.imageAlt}
                          fill
                          sizes="240px"
                          className={styles.cutoutInnerPhoto}
                        />
                      </div>

                      {/* Precision Geometric Pinwheel Overlay matching the exact reference shape */}
                      <svg
                        className={styles.cutoutMaskOverlay}
                        viewBox="0 0 200 200"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        {/* Center solid blue square */}
                        <rect x="70" y="70" width="60" height="60" fill="#1254ff" />

                        {/* 4 pinwheel arms extending from the center square to the outer ring */}
                        {/* Top vertical slot */}
                        <rect x="92" y="0" width="16" height="72" fill="#1254ff" />
                        {/* Bottom vertical slot */}
                        <rect x="92" y="128" width="16" height="72" fill="#1254ff" />
                        {/* Left-bottom horizontal slot */}
                        <rect x="0" y="114" width="72" height="16" fill="#1254ff" />
                        {/* Right-top horizontal slot */}
                        <rect x="128" y="70" width="72" height="16" fill="#1254ff" />
                      </svg>
                    </div>
                  </>
                ) : (
                  <div className={styles.cardBgWrap}>
                    <Image
                      src={card.imageSrc}
                      alt={card.imageAlt}
                      fill
                      sizes="(max-width: 992px) 100vw, 400px"
                      className={styles.cardBgPhoto}
                    />
                    <div
                      className={
                        card.variant === "blue-photo"
                          ? styles.bluePhotoOverlay
                          : styles.darkMonoOverlay
                      }
                    />
                  </div>
                )}

                {/* Card Text Content (Bottom-Aligned) */}
                <div className={styles.cardContent}>
                  <div className={styles.titleRow}>
                    <h3 className={styles.cardTitle}>
                      <span>{card.titleLines[0]}</span>
                      <span>{card.titleLines[1]}</span>
                    </h3>

                    <span className={styles.hoverArrowBadge} aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M3.5 10.5L10.5 3.5M10.5 3.5H4.5M10.5 3.5V9.5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>

                  <div className={styles.cardDivider} />

                  <p className={styles.cardDescription}>{card.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

