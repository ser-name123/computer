"use client";

import React from "react";
import styles from "./PricingSection.module.css";

interface PricingPlan {
  id: string;
  name: string;
  scopeLabel: string;
  tagline: string;
  buttonText: string;
  featured?: boolean;
  features: string[];
}

const PRICING_PLANS: PricingPlan[] = [
  {
    id: "project",
    name: "One-Time Project",
    scopeLabel: "Custom Scope",
    tagline: "We plan, supply and set up a complete project for you — start to finish.",
    buttonText: "Request a Quote",
    features: [
      "IT setup planning & supply",
      "Networking & cabling",
      "CCTV & access control",
      "Servers, storage & backup",
      "Full installation & setup",
      "Handover & easy guides",
    ],
  },
  {
    id: "managed",
    name: "Yearly IT Care (AMC)",
    scopeLabel: "Yearly Plan",
    tagline: "Regular care and support that keeps your IT working without trouble.",
    buttonText: "Talk to Our Team",
    featured: true,
    features: [
      "24/7 monitoring & remote help",
      "On-site support & upkeep",
      "Updates & speed tuning",
      "Security & device protection",
      "Covers hardware, software & network",
      "Fast response & simple reports",
    ],
  },
  {
    id: "partnership",
    name: "Long-Term IT Partner",
    scopeLabel: "Tailored",
    tagline: "A long-term tech partner that grows and manages your IT with you.",
    buttonText: "Contact Sales",
    features: [
      "Cloud services & backups",
      "Custom software & automation",
      "Phone & video systems",
      "Setup across many locations",
      "A dedicated project manager",
      "Certified experts for every need",
    ],
  },
];

function SparkleBulletIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      className={styles.sparkleIcon}
      aria-hidden="true"
    >
      <path
        d="M8 1L9.6 6.4L15 8L9.6 9.6L8 15L6.4 9.6L1 8L6.4 6.4L8 1Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PricingSection() {
  return (
    <section className={styles.pricingSection} id="pricing" aria-labelledby="pricing-heading">
      {/* ==================== TOP HALFTONE DOTTED STRIP ==================== */}
      <div className={styles.topHalftoneWrap} aria-hidden="true">
        <svg className={styles.halftoneSvg} width="100%" height="64" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="pricingTopDots"
              x="0"
              y="0"
              width="18"
              height="64"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="9" cy="7" r="4.5" fill="#dce7ff" />
              <circle cx="9" cy="19" r="3.5" fill="#dce7ff" fillOpacity="0.9" />
              <circle cx="9" cy="30" r="2.7" fill="#dce7ff" fillOpacity="0.8" />
              <circle cx="9" cy="40" r="1.9" fill="#dce7ff" fillOpacity="0.68" />
              <circle cx="9" cy="49" r="1.2" fill="#dce7ff" fillOpacity="0.55" />
            </pattern>
          </defs>
          <rect width="100%" height="64" fill="url(#pricingTopDots)" />
        </svg>
      </div>

      {/* ==================== AMBIENT LIGHT RAYS & CONTOUR WAVES ==================== */}
      <div className={styles.ambientBeams} aria-hidden="true">
        <div className={styles.beamTopLeft} />
        <div className={styles.beamCenterRight} />

        {/* Subtle Flowing Wave Lines at Bottom Corners */}
        <svg
          className={styles.bottomWavesSvg}
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.from({ length: 12 }).map((_, idx) => {
            const dy = idx * 8;
            return (
              <React.Fragment key={idx}>
                <path
                  d={`M-80 ${180 + dy} C 80 ${190 + dy}, 210 ${240 + dy}, 340 ${330 + dy}`}
                  stroke="rgba(59, 130, 246, 0.12)"
                  strokeWidth="1"
                />
                <path
                  d={`M980 ${330 + dy} C 1120 ${210 + dy}, 1290 ${180 + dy}, 1520 ${230 + dy}`}
                  stroke="rgba(59, 130, 246, 0.12)"
                  strokeWidth="1"
                />
              </React.Fragment>
            );
          })}
        </svg>
      </div>

      {/* ==================== MAIN PRICING CONTENT CONTAINER ==================== */}
      <div className={styles.container}>
        {/* Centered Header */}
        <div className={styles.headerBlock}>
          <div className={styles.pricingBadge}>
            <span className={styles.badgeDot} />
            <span>Engagement Models</span>
            <span className={styles.badgeDot} />
          </div>

          <h2 id="pricing-heading" className={styles.sectionTitle}>
            <span>Flexible Ways to Work</span>
            <span>With CATS Computers.</span>
          </h2>

          <p className={styles.sectionSubtitle}>
            We work with you in the way that suits you best — a one-time project, a
            yearly support plan, or a long-term IT partner. You only pay for what you
            need, and we give you a price made just for you.
          </p>
        </div>

        {/* 3 Engagement Model Cards Grid */}
        <div className={styles.cardsGrid}>
          {PRICING_PLANS.map((plan) => {
            return (
              <article
                key={plan.id}
                className={`${styles.pricingCard} ${
                  plan.featured ? styles.pricingCardFeatured : ""
                }`}
              >
                {/* Top Inner Box with Corner Glow */}
                <div className={styles.cardTopBox}>
                  <div className={styles.cardTopCornerGlow} aria-hidden="true" />

                  <h3 className={styles.planName}>{plan.name}</h3>

                  <div className={styles.priceRow}>
                    <span className={styles.priceAmount}>{plan.scopeLabel}</span>
                    <span className={styles.billingCycle}>pricing</span>
                  </div>

                  <p className={styles.planTagline}>{plan.tagline}</p>
                </div>

                {/* Full-Width CTA Button */}
                <a href={`#${plan.id}`} className={styles.planCtaBtn}>
                  {plan.buttonText}
                </a>

                {/* Bottom Features List */}
                <div className={styles.featuresZone}>
                  <span className={styles.includedLabel}>What&apos;s Included:</span>

                  <ul className={styles.featureList}>
                    {plan.features.map((feat) => (
                      <li key={feat} className={styles.featureListItem}>
                        <SparkleBulletIcon />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Featured Center Card Bottom-Right Electric Aura + Halftone Mesh */}
                {plan.featured && (
                  <div className={styles.featuredBottomGlow} aria-hidden="true" />
                )}
              </article>
            );
          })}
        </div>

        {/* Bottom Guarantee & Monthly/Annually Toggle Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.guaranteesList}>
            {/* Item 1: Get 30 day free trial */}
            <div className={styles.guaranteeItem}>
              <span className={styles.guaranteeIconCircle}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="17" rx="3" stroke="currentColor" strokeWidth="1.8" />
                  <line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth="1.8" />
                  <path
                    d="M9 14.5L11 16.5L15.5 12"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>Certified professionals</span>
            </div>

            {/* Item 2: No any hidden fees pay */}
            <div className={styles.guaranteeItem}>
              <span className={styles.guaranteeIconCircle}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M9 6H15L16.5 3.5H7.5L9 6Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 15.5C6 11 8.5 6 12 6C15.5 6 18 11 18 15.5C18 18.8 15.5 20.5 12 20.5C8.5 20.5 6 18.8 6 15.5Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path d="M12 11V16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </span>
              <span>Industry best practices</span>
            </div>

            {/* Item 3: You can cancel anytime */}
            <div className={styles.guaranteeItem}>
              <span className={styles.guaranteeIconCircle}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                  <path
                    d="M12 7.5V12L15 14"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>24/7 support, minimal downtime</span>
            </div>
          </div>

          {/* Right CTA Box */}
          <div className={styles.billingToggleBox}>
            <a href="#contact" className={styles.planCtaBtn}>
              Get a Tailored Quote
            </a>
          </div>
        </div>
      </div>

      {/* ==================== BOTTOM HALFTONE DOTTED STRIP ==================== */}
      <div className={styles.bottomHalftoneWrap} aria-hidden="true">
        <svg className={styles.halftoneSvg} width="100%" height="64" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="pricingBottomDots"
              x="0"
              y="0"
              width="18"
              height="64"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="9" cy="15" r="1.2" fill="#dce7ff" fillOpacity="0.55" />
              <circle cx="9" cy="24" r="1.9" fill="#dce7ff" fillOpacity="0.68" />
              <circle cx="9" cy="34" r="2.7" fill="#dce7ff" fillOpacity="0.8" />
              <circle cx="9" cy="45" r="3.5" fill="#dce7ff" fillOpacity="0.9" />
              <circle cx="9" cy="57" r="4.5" fill="#dce7ff" />
            </pattern>
          </defs>
          <rect width="100%" height="64" fill="url(#pricingBottomDots)" />
        </svg>
      </div>
    </section>
  );
}

