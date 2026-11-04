import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./PageBanner.module.css";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BannerMetric {
  value: string;
  label: string;
}

interface PageBannerProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  breadcrumbs: BreadcrumbItem[];
  bgImage?: string;
  metrics?: BannerMetric[];
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export default function PageBanner({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  bgImage = "/images/hero-bg.jpg",
  metrics,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
}: PageBannerProps) {
  return (
    <section className={styles.bannerSection}>
      {/* Background Image + Multi-layered Royal Navy Overlay */}
      <div className={styles.bgContainer} aria-hidden="true">
        <Image
          src={bgImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
        <div className={styles.gradientOverlay} />
        <div className={styles.radialGlow} />
      </div>

      {/* Left & Right Geometric Tech Shards */}
      <div className={styles.techVectors} aria-hidden="true">
        <svg
          className={styles.topLeftSvg}
          viewBox="0 0 380 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-60 120L140 -80H235L35 120H-60Z"
            fill="url(#bannerLeftGrad1)"
            fillOpacity="0.5"
          />
          <path
            d="M-40 240L240 -40H310L30 240H-40Z"
            fill="url(#bannerLeftGrad2)"
            fillOpacity="0.35"
          />
          <line
            x1="-20"
            y1="195"
            x2="215"
            y2="-40"
            stroke="rgba(79, 134, 255, 0.35)"
            strokeWidth="1.5"
          />
          <defs>
            <linearGradient
              id="bannerLeftGrad1"
              x1="0"
              y1="0"
              x2="220"
              y2="120"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1b45d6" />
              <stop offset="1" stopColor="#04103b" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="bannerLeftGrad2"
              x1="0"
              y1="0"
              x2="280"
              y2="220"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#12319c" />
              <stop offset="1" stopColor="#030b2c" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          className={styles.bottomRightSvg}
          viewBox="0 0 460 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M480 40L150 420H330L480 245V40Z"
            fill="url(#bannerRightGrad1)"
            fillOpacity="0.88"
          />
          <path
            d="M490 190L295 420H470L490 395V190Z"
            fill="url(#bannerRightGrad2)"
            fillOpacity="0.82"
          />
          <line
            x1="465"
            y1="15"
            x2="130"
            y2="405"
            stroke="rgba(255, 255, 255, 0.35)"
            strokeWidth="1.2"
          />
          <defs>
            <linearGradient
              id="bannerRightGrad1"
              x1="380"
              y1="110"
              x2="210"
              y2="410"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0c267a" />
              <stop offset="1" stopColor="#030a24" />
            </linearGradient>
            <linearGradient
              id="bannerRightGrad2"
              x1="450"
              y1="240"
              x2="320"
              y2="420"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#061958" />
              <stop offset="0.6" stopColor="#072c6c" />
              <stop offset="1" stopColor="#041030" />
            </linearGradient>
          </defs>
        </svg>

        <div className={styles.dotMatrix}>
          {Array.from({ length: 14 }).map((_, idx) => (
            <span key={idx} className={styles.dotItem} />
          ))}
        </div>
      </div>

      {/* Spacer for Global Translucent Navbar */}
      <div className={styles.headerSpacer} aria-hidden="true" />

      <div className={styles.bannerContainer}>
        <div className={styles.bannerMain}>
          {/* Breadcrumbs */}
          <nav className={styles.breadcrumbNav} aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <React.Fragment key={`${crumb.label}-${idx}`}>
                  {crumb.href && !isLast ? (
                    <Link href={crumb.href} className={styles.breadcrumbLink}>
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className={styles.breadcrumbCurrent}>{crumb.label}</span>
                  )}
                  {!isLast && <span className={styles.breadcrumbSep}>/</span>}
                </React.Fragment>
              );
            })}
          </nav>

          {/* Eyebrow Pill */}
          <div className={styles.eyebrowPill}>
            <span className={styles.eyebrowDot} />
            <span>{eyebrow}</span>
          </div>

          {/* Page Heading */}
          <h1 className={styles.bannerTitle}>{title}</h1>

          {/* Subtitle */}
          <p className={styles.bannerSubtitle}>{subtitle}</p>

          {/* Optional CTA Buttons */}
          {(primaryCtaText || secondaryCtaText) && (
            <div className={styles.ctaRow}>
              {primaryCtaText && primaryCtaHref && (
                <Link href={primaryCtaHref} className={styles.primaryBtn}>
                  <span>{primaryCtaText}</span>
                  <span className={styles.primaryBtnIcon}>
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
                </Link>
              )}
              {secondaryCtaText && secondaryCtaHref && (
                <Link href={secondaryCtaHref} className={styles.secondaryBtn}>
                  <span>{secondaryCtaText}</span>
                </Link>
              )}
            </div>
          )}
        </div>

        {/* Right Side Metrics Glass Card */}
        {metrics && metrics.length > 0 && (
          <div className={styles.metricsCard}>
            {metrics.map((metric, idx) => (
              <div key={idx} className={styles.metricItem}>
                <span className={styles.metricValue}>{metric.value}</span>
                <span className={styles.metricLabel}>{metric.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

