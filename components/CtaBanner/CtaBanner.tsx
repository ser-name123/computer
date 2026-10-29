"use client";

import React from "react";
import Image from "next/image";
import styles from "./CtaBanner.module.css";

export default function CtaBanner() {
  return (
    <section className={styles.ctaSection} aria-labelledby="cta-banner-heading">
      {/* ==================== SPLIT BACKGROUND & DECORATIVE VECTORS ==================== */}
      <div className={styles.topHalfBg} aria-hidden="true">
        {/* Subtle Contour Waves on Top-Right */}
        <svg
          className={styles.topRightWaves}
          viewBox="0 0 380 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.from({ length: 8 }).map((_, i) => {
            const offset = i * 16;
            return (
              <path
                key={i}
                d={`M${120 + offset * 0.5} -10 C ${140 + offset * 0.6} ${
                  70 + offset * 0.3
                }, ${240 + offset * 0.4} ${120 + offset * 0.2}, 400 ${
                  140 + offset * 0.2
                }`}
                stroke="rgba(148, 163, 184, 0.2)"
                strokeWidth="1"
              />
            );
          })}
        </svg>
      </div>

      {/* Bottom-Right Angled Geometric Circuit Wireframe */}
      <div className={styles.bottomRightWireframe} aria-hidden="true">
        <svg viewBox="0 0 260 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g stroke="rgba(148, 163, 184, 0.26)" strokeWidth="1">
            <rect
              x="70"
              y="60"
              width="120"
              height="90"
              rx="8"
              transform="rotate(-18 70 60)"
            />
            <rect
              x="105"
              y="80"
              width="110"
              height="85"
              rx="8"
              transform="rotate(-18 105 80)"
            />
            <line x1="40" y1="150" x2="220" y2="90" />
            <line x1="90" y1="30" x2="150" y2="210" />
            <circle cx="96" cy="131" r="2.5" fill="rgba(148, 163, 184, 0.4)" />
            <circle cx="136" cy="118" r="2.5" fill="rgba(148, 163, 184, 0.4)" />
            <circle cx="118" cy="84" r="2.5" fill="rgba(148, 163, 184, 0.4)" />
          </g>
        </svg>
      </div>

      {/* ==================== MAIN ROYAL-BLUE CTA BANNER CARD ==================== */}
      <div className={styles.container}>
        <div className={styles.bannerCard}>
          {/* Left Engineer Photo with Smooth Electric-Blue Blending */}
          <div className={styles.leftPhotoArea}>
            <Image
              src="/images/cta-banner-engineer.jpg"
              alt="IT Systems Architect Holding Tablet in Server Room"
              fill
              sizes="(max-width: 768px) 100vw, 440px"
              className={styles.engineerImg}
            />
            <div className={styles.photoLeftVignette} />
            <div className={styles.photoRightFade} />
          </div>

          {/* Center-Right Content + Circular "Let's Talk!" Button */}
          <div className={styles.bannerContent}>
            <div className={styles.textBlock}>
              <h2 id="cta-banner-heading" className={styles.bannerHeading}>
                <span>Integrating Technology.</span>
                <span>Empowering</span>
                <span>Your Business.</span>
              </h2>

              <p className={styles.bannerDescription}>
                From planning to setup to support, CATS Computers gives you safe,
                reliable IT that is built for your business and easy to use.
              </p>
            </div>

            <div className={styles.ctaCircleWrap}>
              <a href="#contact" className={styles.letsTalkCircleBtn}>
                <span className={styles.letsTalkText}>Let&apos;s Talk!</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

