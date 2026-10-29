"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./HeroSection.module.css";

interface HeroSlide {
  id: number;
  ratingText: string;
  headlineLines: [string, string, string];
  description: string;
  ctaText: string;
  customersCount: string;
  badgeLabel: string;
  bgImage: string;
  bgAlt: string;
  cardImage: string;
  cardAlt: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    ratingText: "Huawei eKit Authorized Elite Distribution Partner — UAE",
    headlineLines: [
      "Huawei eKit",
      "Elite Distribution",
      "Partner.",
    ],
    description:
      "Official Huawei Enterprise BG Authorized Elite Distribution Partner for Data Communication in the UAE — delivering enterprise switches, optical networking, and smart office IT.",
    ctaText: "Explore Huawei eKit",
    customersCount: "30",
    badgeLabel: "Global Tech Partners",
    bgImage: "/images/hero-huawei-elite.jpg",
    bgAlt: "CATS Computers — Huawei eKit Authorized Elite Distribution Partner",
    cardImage: "/images/company/huawei-ekit-award.jpg",
    cardAlt: "Huawei Authorized Elite Distribution Partner Plaque — CATS Computers L.L.C",
  },
  {
    id: 2,
    ratingText: "Ruijie Reyee Golden Distributor — Top Performing ADP 2024",
    headlineLines: [
      "Ruijie Reyee",
      "Golden Distributor",
      "In the UAE.",
    ],
    description:
      "Awarded Top Performing Authorized Distribution Partner (ADP) of 2024. We supply and deploy genuine Ruijie & Reyee enterprise switches, cloud routers, and high-speed Wi-Fi.",
    ctaText: "View Ruijie Solutions",
    customersCount: "2024",
    badgeLabel: "Top ADP Award Winner",
    bgImage: "/images/hero-ruijie-golden.jpg",
    bgAlt: "CATS Computers — Ruijie Reyee Golden Distributor Showroom",
    cardImage: "/images/company/award-ruijie-adp-2024-b.jpg",
    cardAlt: "CATS Computers receiving Ruijie Reyee Top Performing ADP 2024 Award",
  },
  {
    id: 3,
    ratingText: "Complete IT Infrastructure & Managed Services — Dubai, UAE",
    headlineLines: [
      "Integrating Technology.",
      "Empowering Your",
      "Business.",
    ],
    description:
      "CATS Computers gives you complete IT support in one place — networks, servers, security, cloud, and software. Safe, simple, and ready to grow with your business.",
    ctaText: "Explore Services",
    customersCount: "12",
    badgeLabel: "Core IT Services",
    bgImage: "/images/hero-bg.jpg",
    bgAlt: "CATS Computers Enterprise IT Solutions Team",
    cardImage: "/images/company/team-group-1.jpg",
    cardAlt: "CATS Computers L.L.C Expert Team",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const leftVectorsRef = useRef<HTMLDivElement | null>(null);
  const floatingCardWrapRef = useRef<HTMLDivElement | null>(null);
  const parallaxRafRef = useRef<number>(0);

  const handleNextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleSelectSlide = (idx: number) => {
    if (isAnimating || idx === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(idx);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  useEffect(() => {
    if (isPaused) return;
    const autoTimer = setInterval(() => {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6200);
    return () => clearInterval(autoTimer);
  }, [isPaused]);

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    const px = nx * 16;
    const py = ny * 12;

    cancelAnimationFrame(parallaxRafRef.current);
    parallaxRafRef.current = requestAnimationFrame(() => {
      if (leftVectorsRef.current) {
        leftVectorsRef.current.style.transform = `translate3d(${(px * -0.45).toFixed(2)}px, ${(py * -0.45).toFixed(2)}px, 0)`;
      }
      if (floatingCardWrapRef.current) {
        floatingCardWrapRef.current.style.transform = `translate3d(${(px * 0.7).toFixed(2)}px, ${(py * 0.7).toFixed(2)}px, 0)`;
      }
    });
  };

  const handleHeroMouseLeave = () => {
    cancelAnimationFrame(parallaxRafRef.current);
    if (leftVectorsRef.current) {
      leftVectorsRef.current.style.transform = "translate3d(0px, 0px, 0)";
    }
    if (floatingCardWrapRef.current) {
      floatingCardWrapRef.current.style.transform = "translate3d(0px, 0px, 0)";
    }
    setIsPaused(false);
  };

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <div className={styles.heroWrapper}>
      {/* ==================== MAIN HERO CONTAINER ==================== */}
      <section
        className={styles.heroSection}
        onMouseMove={handleHeroMouseMove}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={handleHeroMouseLeave}
      >
        {/* Background Image + Multi-layered Cinematic Blending (Dynamic per Slide) */}
        <div className={styles.heroBgContainer}>
          {HERO_SLIDES.map((slide, idx) => (
            <Image
              key={slide.id}
              src={slide.bgImage}
              alt={slide.bgAlt}
              fill
              priority={idx === 0}
              sizes="100vw"
              className={`${styles.heroBgImage} ${
                idx === currentSlide
                  ? styles.heroBgImageActive
                  : styles.heroBgImageHidden
              }`}
            />
          ))}
          <div className={styles.heroGradientOverlay} />
          <div className={styles.heroRadialGlow} />
        </div>

        {/* Left & Right Geometric Tech Shards */}
        <div
          ref={leftVectorsRef}
          className={styles.leftTechVectors}
          aria-hidden="true"
        >
          {/* Top-left diagonal bars */}
          <svg
            className={styles.topLeftSvg}
            viewBox="0 0 380 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-60 120L140 -80H235L35 120H-60Z"
              fill="url(#leftTopGrad1)"
              fillOpacity="0.55"
            />
            <path
              d="M-40 240L240 -40H310L30 240H-40Z"
              fill="url(#leftTopGrad2)"
              fillOpacity="0.4"
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
              <linearGradient id="leftTopGrad1" x1="0" y1="0" x2="220" y2="120" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1b45d6" />
                <stop offset="1" stopColor="#04103b" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="leftTopGrad2" x1="0" y1="0" x2="280" y2="220" gradientUnits="userSpaceOnUse">
                <stop stopColor="#12319c" />
                <stop offset="1" stopColor="#030b2c" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Subtle Left Center Crosshair X */}
          <div className={styles.leftCrossMark}>
            <span />
            <span />
          </div>

          {/* Bottom-left geometric diagonal blocks */}
          <svg
            className={styles.bottomLeftSvg}
            viewBox="0 0 420 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-80 60L80 60L320 300L160 300L-80 60Z"
              fill="url(#leftBotGrad1)"
              fillOpacity="0.65"
            />
            <path
              d="M-50 180L50 180L250 380L150 380L-50 180Z"
              fill="url(#leftBotGrad2)"
              fillOpacity="0.75"
            />
            <line
              x1="5"
              y1="205"
              x2="180"
              y2="380"
              stroke="rgba(96, 150, 255, 0.45)"
              strokeWidth="1.5"
            />
            <defs>
              <linearGradient id="leftBotGrad1" x1="-40" y1="60" x2="280" y2="300" gradientUnits="userSpaceOnUse">
                <stop stopColor="#112f96" />
                <stop offset="1" stopColor="#040d33" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="leftBotGrad2" x1="-20" y1="180" x2="220" y2="380" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1e49db" />
                <stop offset="1" stopColor="#051140" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Bottom-Right Diagonal Geometric Shards & Dot Grid */}
        <div className={styles.rightTechVectors} aria-hidden="true">
          <svg
            className={styles.bottomRightSvg}
            viewBox="0 0 460 420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M480 40L150 420H330L480 245V40Z"
              fill="url(#rightBotGrad1)"
              fillOpacity="0.92"
            />
            <path
              d="M490 190L295 420H470L490 395V190Z"
              fill="url(#rightBotGrad2)"
              fillOpacity="0.88"
            />
            <line
              x1="465"
              y1="15"
              x2="130"
              y2="405"
              stroke="rgba(255, 255, 255, 0.45)"
              strokeWidth="1.2"
            />
            <line
              x1="475"
              y1="165"
              x2="255"
              y2="420"
              stroke="rgba(120, 175, 255, 0.4)"
              strokeWidth="1.2"
            />
            <defs>
              <linearGradient id="rightBotGrad1" x1="380" y1="110" x2="210" y2="410" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0c267a" />
                <stop offset="1" stopColor="#030a24" />
              </linearGradient>
              <linearGradient id="rightBotGrad2" x1="450" y1="240" x2="320" y2="420" gradientUnits="userSpaceOnUse">
                <stop stopColor="#061958" />
                <stop offset="0.6" stopColor="#072c6c" />
                <stop offset="1" stopColor="#041030" />
              </linearGradient>
            </defs>
          </svg>

          {/* 7x2 Dot Matrix Grid at Bottom Right */}
          <div className={styles.dotMatrix}>
            {Array.from({ length: 14 }).map((_, idx) => (
              <span key={idx} className={styles.dotItem} />
            ))}
          </div>
        </div>

        {/* Spacer for the Global Translucent Navbar Overlay */}
        <div className={styles.heroHeaderSpacer} aria-hidden="true" />

        {/* ==================== HERO MAIN CONTENT AREA ==================== */}
        <div className={styles.heroContentContainer}>
          <div
            className={`${styles.heroLeftColumn} ${
              isAnimating ? styles.slideTransition : ""
            }`}
          >
            {/* Rating Pill Row */}
            <div className={styles.ratingRow}>
              <div className={styles.avatarStack}>
                <div className={styles.avatarCircle} style={{ background: "linear-gradient(135deg, #f59e0b, #78350f)" }}>
                  <svg viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="13" r="6" fill="#fde68a" />
                    <path d="M6 34C6 26.5 11 22 18 22C25 22 30 26.5 30 34" fill="#fcd34d" />
                  </svg>
                </div>
                <div className={styles.avatarCircle} style={{ background: "linear-gradient(135deg, #3b82f6, #1e3a8a)" }}>
                  <svg viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="13" r="6" fill="#bfdbfe" />
                    <path d="M6 34C6 26.5 11 22 18 22C25 22 30 26.5 30 34" fill="#93c5fd" />
                  </svg>
                </div>
                <div className={styles.avatarCircle} style={{ background: "linear-gradient(135deg, #10b981, #064e3b)" }}>
                  <svg viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="13" r="6" fill="#a7f3d0" />
                    <path d="M6 34C6 26.5 11 22 18 22C25 22 30 26.5 30 34" fill="#6ee7b7" />
                  </svg>
                </div>
                <div className={styles.avatarCircle} style={{ background: "linear-gradient(135deg, #ec4899, #831843)" }}>
                  <svg viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="13" r="6" fill="#fbcfe8" />
                    <path d="M6 34C6 26.5 11 22 18 22C25 22 30 26.5 30 34" fill="#f9a8d4" />
                  </svg>
                </div>
              </div>

              <div className={styles.starsGroup} aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    width="15"
                    height="15"
                    viewBox="0 0 20 20"
                    fill="#fbbf24"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <span className={styles.ratingLabel}>{activeSlide.ratingText}</span>
            </div>

            {/* Main Hero Headline */}
            <h1 className={styles.heroTitle}>
              <span>{activeSlide.headlineLines[0]}</span>
              <span>{activeSlide.headlineLines[1]}</span>
              <span>{activeSlide.headlineLines[2]}</span>
            </h1>

            {/* Subtitle Description */}
            <p className={styles.heroSubtitle}>{activeSlide.description}</p>

            {/* Primary CTA Button + Interactive Slide Pills */}
            <div className={styles.ctaRow}>
              <a href="#discover" className={styles.discoverBtn}>
                <span className={styles.discoverBtnText}>{activeSlide.ctaText}</span>
                <span className={styles.discoverBtnIconBox}>
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

              <div className={styles.slideIndicators} role="tablist" aria-label="Hero slides">
                {HERO_SLIDES.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    role="tab"
                    aria-selected={idx === currentSlide}
                    onClick={() => handleSelectSlide(idx)}
                    className={`${styles.slideDotBtn} ${
                      idx === currentSlide ? styles.slideDotBtnActive : ""
                    }`}
                  >
                    <span className={styles.slideDotNum}>0{s.id}</span>
                    <span className={styles.slideDotTrack}>
                      <span className={styles.slideDotFill} />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side Floating Controls & Award/Team Card */}
          <div className={styles.heroRightColumn}>
            {/* Slider Navigation Arrows */}
            <div className={styles.sliderControls}>
              <button
                type="button"
                onClick={handlePrevSlide}
                className={styles.sliderArrowBtn}
                aria-label="Previous slide"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M19 12H5M5 12L11 6M5 12L11 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={handleNextSlide}
                className={styles.sliderArrowBtn}
                aria-label="Next slide"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Floating Award/Partners Card */}
            <div
              ref={floatingCardWrapRef}
              className={styles.floatingCardWrapper}
            >
              <div className={styles.floatingCard}>
                <Image
                  key={activeSlide.cardImage}
                  src={activeSlide.cardImage}
                  alt={activeSlide.cardAlt}
                  fill
                  sizes="300px"
                  className={styles.floatingCardBg}
                />
                <div className={styles.floatingCardOverlay} />

                <div className={styles.floatingCardContent}>
                  <span className={styles.floatingCardTitle}>
                    {activeSlide.badgeLabel}
                  </span>
                  <div className={styles.floatingCardMetrics}>
                    <span className={styles.metricsNumber}>
                      {activeSlide.customersCount}
                      <strong className={styles.metricsPlus}>+</strong>
                    </span>

                    <div className={styles.cardMiniAvatars}>
                      <span
                        className={styles.miniAvatar}
                        style={{ background: "linear-gradient(135deg, #38bdf8, #1d4ed8)" }}
                      >
                        <svg viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="9" r="4" fill="#e0f2fe" />
                          <path d="M4 22C4 17 7.5 14 12 14C16.5 14 20 17 20 22" fill="#bae6fd" />
                        </svg>
                      </span>
                      <span
                        className={styles.miniAvatar}
                        style={{ background: "linear-gradient(135deg, #fbbf24, #b45309)" }}
                      >
                        <svg viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="9" r="4" fill="#fef3c7" />
                          <path d="M4 22C4 17 7.5 14 12 14C16.5 14 20 17 20 22" fill="#fde68a" />
                        </svg>
                      </span>
                      <span
                        className={styles.miniAvatar}
                        style={{ background: "linear-gradient(135deg, #34d399, #047857)" }}
                      >
                        <svg viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="9" r="4" fill="#d1fae5" />
                          <path d="M4 22C4 17 7.5 14 12 14C16.5 14 20 17 20 22" fill="#a7f3d0" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.cornerTechBadge} title="Certified Partner">
                <span className={styles.cornerSpark} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
