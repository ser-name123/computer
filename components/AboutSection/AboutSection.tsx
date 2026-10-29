"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const [yearsCount, setYearsCount] = useState(30);

  useEffect(() => {
    const el = badgeRef.current;
    if (!el) return;
    let animated = false;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !animated) {
          animated = true;
          const duration = 1200;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setYearsCount(Math.max(1, Math.round(eased * 30)));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.aboutWrapper} id="about" aria-labelledby="about-heading">
      {/* ==================== DECORATIVE BACKGROUND VECTORS ==================== */}
      {/* Bottom-Left Flowing Topographic Contour Waves */}
      <div className={styles.leftWaveVectors} aria-hidden="true">
        <svg
          viewBox="0 0 260 560"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.leftWaveSvg}
        >
          {Array.from({ length: 14 }).map((_, i) => {
            const offset = i * 9;
            return (
              <path
                key={i}
                d={`M${-60 + offset * 0.4} ${20 + offset} C ${40 + offset * 0.7} ${
                  130 + offset * 0.5
                }, ${15 + offset * 0.8} ${290 + offset * 0.4}, ${95 + offset} ${
                  420 + offset * 0.3
                } C ${150 + offset} ${500 + offset * 0.2}, ${190 + offset} ${
                  550
                }, ${240 + offset} 580`}
                stroke="rgba(148, 163, 184, 0.22)"
                strokeWidth="1"
              />
            );
          })}
        </svg>
      </div>

      {/* Top-Right Subtle Architectural Wireframe Grid */}
      <div className={styles.rightGridVectors} aria-hidden="true">
        <svg
          viewBox="0 0 360 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.rightGridSvg}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <React.Fragment key={i}>
              <line
                x1={80 + i * 24}
                y1="0"
                x2={80 + i * 24}
                y2="320"
                stroke="rgba(37, 99, 235, 0.05)"
                strokeWidth="1"
              />
              <line
                x1="40"
                y1={40 + i * 24}
                x2="360"
                y2={40 + i * 24}
                stroke="rgba(37, 99, 235, 0.05)"
                strokeWidth="1"
              />
            </React.Fragment>
          ))}
        </svg>
      </div>

      {/* ==================== MAIN 2-COLUMN CONTENT CONTAINER ==================== */}
      <div className={styles.aboutContainer}>
        {/* LEFT COLUMN: Text, Features & CTA */}
        <div className={styles.leftContent}>
          {/* Top Pill Badge */}
          <div className={styles.sectionBadge}>
            <span className={styles.badgeDot} />
            <span>About CATS Computers</span>
            <span className={styles.badgeDot} />
          </div>

          {/* Main Section Heading */}
          <h2 id="about-heading" className={styles.sectionTitle}>
            <span>Complete IT Solutions</span>
            <span>To Help Your Business</span>
            <span>Grow.</span>
          </h2>

          {/* Main Description */}
          <p className={styles.sectionDescription}>
            CATS Computers is a trusted IT company in Dubai. We take care of your
            networks, servers, security, cloud and software — all in one place. From
            planning to setup to support, we build the right system for your business.
          </p>

          {/* Feature List Items */}
          <div className={styles.featureList}>
            {/* Feature 1: Custom Technology Solutions */}
            <div className={styles.featureItem}>
              <div className={styles.featureIconCircle}>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  {/* Top Server Unit */}
                  <rect
                    x="5"
                    y="5"
                    width="18"
                    height="5.5"
                    rx="1.2"
                    stroke="#0f172a"
                    strokeWidth="1.6"
                  />
                  <circle cx="8" cy="7.75" r="0.9" fill="#2557ff" />
                  <circle cx="11" cy="7.75" r="0.9" fill="#2557ff" />
                  <line
                    x1="15"
                    y1="7.75"
                    x2="20"
                    y2="7.75"
                    stroke="#0f172a"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />

                  {/* Bottom Server Unit */}
                  <rect
                    x="5"
                    y="12.5"
                    width="18"
                    height="5.5"
                    rx="1.2"
                    stroke="#0f172a"
                    strokeWidth="1.6"
                  />
                  <circle cx="8" cy="15.25" r="0.9" fill="#2557ff" />
                  <circle cx="11" cy="15.25" r="0.9" fill="#2557ff" />
                  <line
                    x1="15"
                    y1="15.25"
                    x2="20"
                    y2="15.25"
                    stroke="#0f172a"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />

                  {/* Bottom Network Node Connectors */}
                  <line
                    x1="14"
                    y1="18"
                    x2="14"
                    y2="22.5"
                    stroke="#2557ff"
                    strokeWidth="1.6"
                  />
                  <line
                    x1="7"
                    y1="22.5"
                    x2="21"
                    y2="22.5"
                    stroke="#0f172a"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="14"
                    cy="22.5"
                    r="2"
                    fill="#ffffff"
                    stroke="#2557ff"
                    strokeWidth="1.6"
                  />
                </svg>
              </div>
              <div className={styles.featureTextGroup}>
                <h3 className={styles.featureTitle}>Made For Your Needs</h3>
                <p className={styles.featureDesc}>
                  We build each solution around your needs, budget and goals — safe,
                  simple and ready to grow with you.
                </p>
              </div>
            </div>

            {/* Feature 2: Experienced IT Professionals */}
            <div className={styles.featureItem}>
              <div className={styles.featureIconCircle}>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  {/* Engineer Helmet / Hardhat */}
                  <path
                    d="M9 11C9 8.23858 11.2386 6 14 6C16.7614 6 19 8.23858 19 11"
                    stroke="#2557ff"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M14 4.5V8"
                    stroke="#2557ff"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <line
                    x1="7.5"
                    y1="11.2"
                    x2="20.5"
                    y2="11.2"
                    stroke="#0f172a"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  {/* Face */}
                  <path
                    d="M10.2 11.5V13.2C10.2 15.3 11.9 17 14 17C16.1 17 17.8 15.3 17.8 13.2V11.5"
                    stroke="#0f172a"
                    strokeWidth="1.6"
                  />
                  {/* Shoulders & Collar */}
                  <path
                    d="M7 23V21.2C7 19.2 8.8 17.8 11 17.8H17C19.2 17.8 21 19.2 21 21.2V23"
                    stroke="#0f172a"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M11.5 17.8L14 21L16.5 17.8"
                    stroke="#2557ff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={styles.featureTextGroup}>
                <h3 className={styles.featureTitle}>Skilled, Certified Team</h3>
                <p className={styles.featureDesc}>
                  Our certified experts know networks, security, cloud and software —
                  and follow the best ways of working on every job.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button: Know About Us */}
          <div className={styles.ctaRow}>
            <a href="#more-about" className={styles.knowAboutBtn}>
              <span className={styles.knowAboutBtnText}>Know About Us</span>
              <span className={styles.knowAboutBtnIcon}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
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

        {/* RIGHT COLUMN: Staggered Dual-Image Collage + 32+ Badge + CEO Card */}
        <div className={styles.rightCollage}>
          {/* Left Lower Image: Engineer with Laptop at Server Rack */}
          <div className={styles.leftPhotoCard}>
            <Image
              src="/images/about-engineer-left.jpg"
              alt="IT Network Engineer working in Server Room"
              fill
              sizes="(max-width: 768px) 100vw, 290px"
              className={styles.collagePhoto}
            />
          </div>

          {/* Right Higher Image Wrapper: Executives + 32+ Folded Ribbon + CEO Pill */}
          <div className={styles.rightPhotoWrapper}>
            {/* 3D Folded Blue Experience Badge ("32+ Years of Experience") */}
            <div ref={badgeRef} className={styles.experienceBadge}>
              {/* Top-left 3D dark-blue ribbon fold triangle */}
              <span className={styles.ribbonFold} aria-hidden="true" />

              <div className={styles.experienceBadgeBody}>
                <span className={styles.experienceYears}>{yearsCount}+</span>
                <span className={styles.experienceDivider} />
                <span className={styles.experienceLabel}>Global Solution Partners</span>
              </div>
            </div>

            {/* Right Photo Card */}
            <div className={styles.rightPhotoCard}>
              <Image
                src="/images/about-team-right.jpg"
                alt="IT Executives Reviewing Operations on Tablet"
                fill
                sizes="(max-width: 768px) 100vw, 290px"
                className={styles.collagePhoto}
              />
            </div>

            {/* Bottom Floating CEO Card ("Kristin Watson - CEO & Founder") */}
            <div className={styles.ceoCard}>
              <div className={styles.ceoAvatarsGroup}>
                <div className={styles.ceoPhotoCircle}>
                  <Image
                    src="/images/company/team-group-1.jpg"
                    alt="CATS Computers Expert Team"
                    fill
                    sizes="48px"
                    className={styles.ceoAvatarImg}
                  />
                </div>
                <a
                  href="tel:+97142273378"
                  className={styles.ceoPhoneCircle}
                  aria-label="Call CATS Computers"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>

              <div className={styles.ceoMeta}>
                <strong className={styles.ceoName}>Our Expert Team</strong>
                <span className={styles.ceoRole}>Certified Professionals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

