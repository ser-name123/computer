"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import styles from "./ComprehensiveServices.module.css";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  iconType: "ai" | "cloud" | "cyber";
}

const SERVICES_LIST: ServiceItem[] = [
  {
    id: "it-infrastructure",
    title: "IT Infrastructure Solutions",
    description:
      "We plan, supply and set up your full IT setup — servers, storage, firewalls, switches and computers — built to work fast and stay reliable.",
    imageSrc: "/images/about-engineer-left.jpg",
    imageAlt: "IT Infrastructure Engineer at Server Rack",
    iconType: "cloud",
  },
  {
    id: "networking-cabling",
    title: "Networking & Cabling",
    description:
      "We set up neat cabling, fiber and Wi-Fi networks that give you fast, stable and secure internet across your whole office.",
    imageSrc: "/images/blog-cloud-engineers.jpg",
    imageAlt: "Network Engineers Deploying Structured Cabling",
    iconType: "cloud",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Solutions",
    description:
      "We protect your business from hackers and viruses with firewalls, device security, email safety and constant monitoring.",
    imageSrc: "/images/card-cybersecurity.jpg",
    imageAlt: "Cybersecurity Analysts Monitoring Threat Defense",
    iconType: "cyber",
  },
  {
    id: "cloud-virtualization",
    title: "Cloud & Virtualization",
    description:
      "We move your business to the cloud (Azure, AWS or private) and set up backups and recovery so your data is always safe.",
    imageSrc: "/images/card-cloud-solutions.jpg",
    imageAlt: "Cloud Solutions Consultants Reviewing Architecture",
    iconType: "cloud",
  },
  {
    id: "software-automation",
    title: "Software & Automation",
    description:
      "We build custom software, mobile apps and automation that fit your business and take away slow, manual work.",
    imageSrc: "/images/service-software-dev.jpg",
    imageAlt: "Software Development Team at Work",
    iconType: "ai",
  },
  {
    id: "managed-services",
    title: "IT Support & Managed Services",
    description:
      "We watch over your systems day and night and fix problems fast — on-site or remote — so your IT keeps running without downtime.",
    imageSrc: "/images/service-managed-it.jpg",
    imageAlt: "Managed IT Support Engineer",
    iconType: "cloud",
  },
  {
    id: "cctv-security",
    title: "CCTV & Security Systems",
    description:
      "We install smart CCTV cameras you can watch from anywhere, keeping your place safe with clear video and live monitoring.",
    imageSrc: "/images/blog-cyber-servers.jpg",
    imageAlt: "CCTV and Surveillance Systems",
    iconType: "cyber",
  },
  {
    id: "access-control",
    title: "Access Control & Attendance",
    description:
      "We set up fingerprint, card and smart entry systems that control who comes in and track staff attendance with ease.",
    imageSrc: "/images/card-ai-robot.jpg",
    imageAlt: "Access Control and Time Attendance Systems",
    iconType: "cyber",
  },
  {
    id: "servers-storage",
    title: "Servers, Storage & Backup",
    description:
      "We supply strong servers and storage, and set up backups so you never lose your important business data.",
    imageSrc: "/images/blog-cpu-chip.jpg",
    imageAlt: "Enterprise Servers and Storage Hardware",
    iconType: "cloud",
  },
  {
    id: "telephony-av",
    title: "Phone & Video Systems",
    description:
      "We set up office phone systems and clear video meeting rooms using trusted brands like Cisco, Yeastar, Avaya and Logitech.",
    imageSrc: "/images/service-ai-automation.jpg",
    imageAlt: "Telephony and AV Conferencing Solutions",
    iconType: "ai",
  },
];

function ServiceIcon({ type }: { type: ServiceItem["iconType"] }) {
  if (type === "ai") {
    return (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        {/* Left Brain Hemisphere */}
        <path
          d="M13 6.5C13 5.4 12.1 4.5 11 4.5C9.9 4.5 9 5.3 8.9 6.4C7.4 6.7 6.3 8 6.3 9.6C6.3 10.3 6.5 11 6.9 11.5C6.1 12.2 5.6 13.2 5.6 14.3C5.6 15.6 6.3 16.7 7.3 17.3C7.1 17.9 7 18.5 7 19.1C7 21 8.5 22.5 10.4 22.5C11.8 22.5 13 21.5 13 20.1V6.5Z"
          stroke="#ffffff"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 10.5C10.5 10.5 11.2 11.2 11.2 12.2M9.2 15.5C10.3 15.5 11 14.8 11 13.8"
          stroke="#ffffff"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        {/* Right Digital Circuit Nodes */}
        <line x1="15" y1="8.5" x2="18.5" y2="8.5" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="20.5" cy="8.5" r="1.8" stroke="#ffffff" strokeWidth="1.5" />

        <line x1="15" y1="13.5" x2="20" y2="13.5" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="22" cy="13.5" r="1.8" stroke="#ffffff" strokeWidth="1.5" />

        <line x1="15" y1="18.5" x2="18.5" y2="18.5" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="20.5" cy="18.5" r="1.8" stroke="#ffffff" strokeWidth="1.5" />
      </svg>
    );
  }

  if (type === "cloud") {
    return (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        {/* Cloud Outline */}
        <path
          d="M8.5 18.5H7.2C5.2 18.5 3.6 16.9 3.6 14.9C3.6 13.1 4.9 11.6 6.6 11.3C7.1 8.1 9.9 5.6 13.3 5.6C16.9 5.6 19.9 8.4 20.1 12C21.9 12.3 23.3 13.9 23.3 15.8C23.3 17.5 22.1 18.5 20.4 18.5H19.2"
          stroke="#ffffff"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Database Cylinder Stack Inside/Below Cloud */}
        <ellipse cx="13.5" cy="15.2" rx="4.2" ry="1.6" stroke="#ffffff" strokeWidth="1.5" />
        <path
          d="M9.3 15.2V18.4C9.3 19.3 11.2 20 13.5 20C15.8 20 17.7 19.3 17.7 18.4V15.2"
          stroke="#ffffff"
          strokeWidth="1.5"
        />
        <path
          d="M9.3 18.4V21.4C9.3 22.3 11.2 23 13.5 23C15.8 23 17.7 22.3 17.7 21.4V18.4"
          stroke="#ffffff"
          strokeWidth="1.5"
        />
      </svg>
    );
  }

  return (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      {/* Globe Grid */}
      <path
        d="M14 21.5C9.3 21.5 5.5 17.7 5.5 13C5.5 8.3 9.3 4.5 14 4.5C18.7 4.5 22.5 8.3 22.5 13"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M5.8 13H15M14 4.5C11.8 6.8 10.8 9.8 10.8 13C10.8 16.2 11.8 19.2 14 21.5M14 4.5C16.2 6.8 17.2 9.8 17.2 11.5"
        stroke="#ffffff"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* Security Shield Bottom-Right */}
      <path
        d="M18.8 13.2L23.2 14.8V18.2C23.2 20.9 21.3 22.8 18.8 23.6C16.3 22.8 14.4 20.9 14.4 18.2V14.8L18.8 13.2Z"
        fill="#ffffff"
        stroke="#1254ff"
        strokeWidth="0.6"
      />
    </svg>
  );
}

const TOTAL_SLIDES = SERVICES_LIST.length;
// Render 3 sets for seamless infinite loop in both directions
const EXTENDED_SERVICES = [
  ...SERVICES_LIST.map((item) => ({ ...item, cloneKey: `prev-${item.id}` })),
  ...SERVICES_LIST.map((item) => ({ ...item, cloneKey: `curr-${item.id}` })),
  ...SERVICES_LIST.map((item) => ({ ...item, cloneKey: `next-${item.id}` })),
];

export default function ComprehensiveServices() {
  // Start at the middle set (index = TOTAL_SLIDES)
  const [trackIndex, setTrackIndex] = useState(TOTAL_SLIDES);
  const [enableTransition, setEnableTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCards, setVisibleCards] = useState(4);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const dragStartXRef = useRef<number | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateVisibleCards = () => {
      const w = window.innerWidth;
      if (w <= 600) {
        setVisibleCards(1);
      } else if (w <= 1150) {
        setVisibleCards(2);
      } else if (w <= 1440) {
        setVisibleCards(3);
      } else {
        setVisibleCards(4);
      }
    };
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards, { passive: true });
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const handleNext = useCallback(() => {
    setEnableTransition(true);
    setTrackIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setEnableTransition(true);
    setTrackIndex((prev) => prev - 1);
  }, []);

  // Seamless infinite wrap-around when transition completes
  const handleTransitionEnd = () => {
    if (trackIndex >= TOTAL_SLIDES * 2) {
      setEnableTransition(false);
      setTrackIndex(trackIndex - TOTAL_SLIDES);
    } else if (trackIndex < TOTAL_SLIDES) {
      setEnableTransition(false);
      setTrackIndex(trackIndex + TOTAL_SLIDES);
    }
  };

  // Re-enable smooth transition after instant wrap-around reset
  useEffect(() => {
    if (!enableTransition) {
      const id = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
        });
      });
      return () => cancelAnimationFrame(id);
    }
  }, [enableTransition]);

  // Auto-slide every 3.8s unless hovered or dragging
  useEffect(() => {
    if (isPaused || isDragging) return;
    const timer = setInterval(() => {
      handleNext();
    }, 3800);
    return () => clearInterval(timer);
  }, [isPaused, isDragging, handleNext]);

  // Pointer drag / swipe handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0 && e.pointerType === "mouse") return;
    dragStartXRef.current = e.clientX;
    setIsDragging(true);
    setDragOffset(0);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || dragStartXRef.current === null) return;
    const deltaX = e.clientX - dragStartXRef.current;
    setDragOffset(deltaX);
  };

  const handlePointerUpOrCancel = () => {
    if (!isDragging) return;
    const threshold = 55;
    if (dragOffset <= -threshold) {
      handleNext();
    } else if (dragOffset >= threshold) {
      handlePrev();
    }
    dragStartXRef.current = null;
    setIsDragging(false);
    setDragOffset(0);
  };

  const activeDotIndex =
    ((trackIndex % TOTAL_SLIDES) + TOTAL_SLIDES) % TOTAL_SLIDES;

  const slideWidthPercent = 100 / visibleCards;
  const translatePercent = -(trackIndex * slideWidthPercent);

  return (
    <section
      className={styles.servicesSection}
      id="services"
      aria-labelledby="services-heading"
    >
      {/* ==================== TOP HALFTONE DOTTED STRIP ==================== */}
      <div className={styles.topHalftoneWrap} aria-hidden="true">
        <svg
          className={styles.halftoneSvg}
          width="100%"
          height="64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="servicesTopDots"
              x="0"
              y="0"
              width="18"
              height="64"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="9" cy="7" r="4.5" fill="#dce7ff" />
              <circle cx="9" cy="19" r="3.5" fill="#dce7ff" fillOpacity="0.92" />
              <circle cx="9" cy="30" r="2.7" fill="#dce7ff" fillOpacity="0.82" />
              <circle cx="9" cy="40" r="1.9" fill="#dce7ff" fillOpacity="0.72" />
              <circle cx="9" cy="49" r="1.2" fill="#dce7ff" fillOpacity="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="64" fill="url(#servicesTopDots)" />
        </svg>
      </div>

      {/* ==================== LEFT-SIDE DUOTONE BACKGROUND PHOTO PANEL ==================== */}
      <div className={styles.leftPhotoPanel} aria-hidden="true">
        <Image
          src="/images/services-left-panel.jpg"
          alt=""
          fill
          sizes="32vw"
          className={styles.leftPanelImg}
        />
        <div className={styles.leftPanelBlueTint} />
      </div>

      {/* ==================== MAIN CONTENT + STEPPED CUTOUT TRAY ==================== */}
      <div className={styles.mainLayout}>
        {/* Header Area (Right of the left photo panel) */}
        <div className={styles.headerArea}>
          <div className={styles.headerLeft}>
            <div className={styles.ourServicesBadge}>
              <span className={styles.badgeDot} />
              <span>Our Services</span>
              <span className={styles.badgeDot} />
            </div>

            <h2 id="services-heading" className={styles.sectionTitle}>
              <span>Everything Your Business</span>
              <span>Needs for IT</span>
            </h2>
          </div>

          <div className={styles.headerRight}>
            <div className={styles.sliderNavGroup}>
              <button
                type="button"
                onClick={handlePrev}
                className={styles.sliderNavBtn}
                aria-label="Previous service slide"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M19 12H5M5 12L11 6M5 12L11 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={handleNext}
                className={styles.sliderNavBtn}
                aria-label="Next service slide"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <a href="#all-services" className={styles.viewAllBtn}>
              <span className={styles.viewAllBtnText}>View All Services</span>
              <span className={styles.viewAllBtnIcon}>
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

        {/* Stepped Dark-Navy Cutout Tray Containing the Sliding Service Cards */}
        <div
          className={styles.cardsCutoutTray}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            handlePointerUpOrCancel();
          }}
        >
          <div
            ref={viewportRef}
            className={`${styles.carouselViewport} ${
              isDragging ? styles.carouselDragging : ""
            }`}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUpOrCancel}
            onPointerCancel={handlePointerUpOrCancel}
          >
            <div
              className={styles.carouselTrack}
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform: `translate3d(calc(${translatePercent.toFixed(4)}% + ${dragOffset.toFixed(1)}px), 0, 0)`,
                transition:
                  enableTransition && !isDragging
                    ? "transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)"
                    : "none",
              }}
            >
              {EXTENDED_SERVICES.map((item) => (
                <div
                  key={item.cloneKey}
                  className={styles.carouselSlide}
                  style={{ flex: `0 0 ${slideWidthPercent.toFixed(4)}%` }}
                >
                  <article className={styles.serviceCard}>
                    {/* Card Top Image + Overlapping Blue Icon Square */}
                    <div className={styles.cardImageWrapper}>
                      <div className={styles.cardImageInner}>
                        <Image
                          src={item.imageSrc}
                          alt={item.imageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, 320px"
                          className={styles.cardImg}
                          draggable={false}
                        />
                      </div>

                      {/* Overlapping Royal Blue Icon Badge */}
                      <div className={styles.cardIconBadge}>
                        <ServiceIcon type={item.iconType} />
                      </div>
                    </div>

                    {/* Card Body Copy */}
                    <div className={styles.cardBody}>
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                      <p className={styles.cardDescription}>{item.description}</p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Carousel Progress Dots */}
          <div className={styles.carouselDots} role="tablist" aria-label="Services slides">
            {SERVICES_LIST.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={activeDotIndex === idx}
                aria-label={`Slide ${idx + 1}: ${item.title}`}
                onClick={() => {
                  setEnableTransition(true);
                  setTrackIndex(TOTAL_SLIDES + idx);
                }}
                className={`${styles.carouselDot} ${
                  activeDotIndex === idx ? styles.carouselDotActive : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ==================== BOTTOM HALFTONE DOTTED STRIP ==================== */}
      <div className={styles.bottomHalftoneWrap} aria-hidden="true">
        <svg
          className={styles.halftoneSvg}
          width="100%"
          height="64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="servicesBottomDots"
              x="0"
              y="0"
              width="18"
              height="64"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="9" cy="15" r="1.2" fill="#dce7ff" fillOpacity="0.6" />
              <circle cx="9" cy="24" r="1.9" fill="#dce7ff" fillOpacity="0.72" />
              <circle cx="9" cy="34" r="2.7" fill="#dce7ff" fillOpacity="0.82" />
              <circle cx="9" cy="45" r="3.5" fill="#dce7ff" fillOpacity="0.92" />
              <circle cx="9" cy="57" r="4.5" fill="#dce7ff" />
            </pattern>
          </defs>
          <rect width="100%" height="64" fill="url(#servicesBottomDots)" />
        </svg>
      </div>
    </section>
  );
}
