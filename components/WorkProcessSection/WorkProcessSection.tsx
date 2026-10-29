"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./WorkProcessSection.module.css";

interface ProcessStep {
  number: string;
  theme: "light" | "dark";
  titleLines: [string, string];
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    theme: "light",
    titleLines: ["Talk", "And Plan"],
    description:
      "We sit with you to understand what you need, then make a clear, simple plan.",
    imageSrc: "/images/process-step-1.jpg",
    imageAlt: "IT Consultation and Requirement Assessment",
  },
  {
    number: "02",
    theme: "dark",
    titleLines: ["Design", "And Supply"],
    description:
      "Our experts design the right solution and bring you the best hardware and software for the job.",
    imageSrc: "/images/process-step-2.jpg",
    imageAlt: "Solution Design and Technology Supply",
  },
  {
    number: "03",
    theme: "light",
    titleLines: ["Install", "And Set Up"],
    description:
      "We install and set up everything the right way, so it is safe and ready to use from day one.",
    imageSrc: "/images/process-step-3.jpg",
    imageAlt: "Installing and setting up IT systems",
  },
  {
    number: "04",
    theme: "dark",
    titleLines: ["Support", "And Care"],
    description:
      "After setup, we keep watching and supporting your systems day and night, so nothing stops.",
    imageSrc: "/images/process-step-4.jpg",
    imageAlt: "24/7 Support and Annual Maintenance",
  },
];

function clamp(val: number, min: number, max: number) {
  return Math.max(min, Math.min(max, val));
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function StepCubeIcon() {
  return (
    <span className={styles.stepIconCircle} aria-hidden="true">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2.5L20.5 7.5V16.5L12 21.5L3.5 16.5V7.5L12 2.5Z"
          stroke="#ffffff"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M3.8 7.8L12 12.5L20.2 7.8M12 12.5V21.2"
          stroke="#ffffff"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function WorkProcessSection() {
  const trackRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const calloutRef = useRef<HTMLDivElement | null>(null);
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth <= 992);
    };
    checkViewport();
    window.addEventListener("resize", checkViewport, { passive: true });
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  useEffect(() => {
    if (isMobile) {
      cardRefs.current.forEach((el) => {
        if (!el) return;
        el.style.transform = "";
        el.style.opacity = "";
        el.style.zIndex = "";
        el.style.pointerEvents = "";
      });
      if (calloutRef.current) {
        calloutRef.current.style.opacity = "";
        calloutRef.current.style.transform = "";
      }
      return;
    }

    let rafId = 0;
    let targetProgress = 0;
    let currentProgress = 0;
    let isTicking = false;

    const applyProgressToDom = (progress: number) => {
      const p2 = easeOutCubic(clamp((progress - 0.03) / 0.21, 0, 1));
      const p3 = easeOutCubic(clamp((progress - 0.25) / 0.21, 0, 1));
      const p4 = easeOutCubic(clamp((progress - 0.47) / 0.21, 0, 1));
      const spreadProgress = easeInOutCubic(clamp((progress - 0.69) / 0.22, 0, 1));

      const nextStage =
        spreadProgress > 0.4 ? 4 : p4 > 0.45 ? 3 : p3 > 0.45 ? 2 : p2 > 0.45 ? 1 : 0;
      setActiveStageIndex((prev) => (prev !== nextStage ? nextStage : prev));

      for (let index = 0; index < 4; index++) {
        const el = cardRefs.current[index];
        if (!el) continue;

        const entryProgress =
          index === 0 ? 1 : index === 1 ? p2 : index === 2 ? p3 : p4;

        const centerShiftCols = (1.5 - index) * (1 - spreadProgress);
        const pctShift = (centerShiftCols * 100).toFixed(3);
        const pxGapShift = (centerShiftCols * 22).toFixed(2);

        const cardsStackedAbove =
          (index < 1 ? p2 : 0) + (index < 2 ? p3 : 0) + (index < 3 ? p4 : 0);

        const peekUpY = -Math.min(cardsStackedAbove, 1.5) * 10 * (1 - spreadProgress);
        const slideInY = (1 - entryProgress) * 350;
        const totalY = (peekUpY + slideInY).toFixed(2);

        const scaleVal = (
          1 -
          Math.min(cardsStackedAbove, 2) * 0.02 * (1 - spreadProgress)
        ).toFixed(4);

        const enterTiltX = ((1 - entryProgress) * 18).toFixed(2);
        const stackFanDeg = (
          (index % 2 === 0 ? -1.4 : 1.4) *
          Math.min(cardsStackedAbove, 1.2) *
          (1 - spreadProgress)
        ).toFixed(2);

        const opacityVal = index === 0 ? 1 : clamp(entryProgress * 1.35, 0, 1);

        el.style.transform = `perspective(1200px) translate3d(calc(${pctShift}% + ${pxGapShift}px), ${totalY}px, 0) scale(${scaleVal}) rotateX(${enterTiltX}deg) rotateZ(${stackFanDeg}deg)`;
        el.style.opacity = opacityVal.toFixed(3);
        el.style.zIndex = String(10 + index);
        el.style.pointerEvents = opacityVal < 0.2 ? "none" : "auto";
      }

      if (calloutRef.current) {
        calloutRef.current.style.opacity = spreadProgress.toFixed(3);
        calloutRef.current.style.transform = `translate3d(0, ${((1 - spreadProgress) * 16).toFixed(1)}px, 0)`;
      }
    };

    const readTargetProgress = () => {
      if (!trackRef.current) return 0;
      const rect = trackRef.current.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;
      if (scrollableDistance <= 0) return 1;
      return clamp(-rect.top / scrollableDistance, 0, 1);
    };

    const tick = () => {
      const diff = targetProgress - currentProgress;
      if (Math.abs(diff) > 0.0005) {
        currentProgress += diff * 0.26;
        applyProgressToDom(currentProgress);
        rafId = requestAnimationFrame(tick);
      } else {
        currentProgress = targetProgress;
        applyProgressToDom(currentProgress);
        isTicking = false;
      }
    };

    const onScrollOrResize = () => {
      targetProgress = readTargetProgress();
      if (!isTicking) {
        isTicking = true;
        rafId = requestAnimationFrame(tick);
      }
    };

    targetProgress = readTargetProgress();
    currentProgress = targetProgress;
    applyProgressToDom(currentProgress);

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [isMobile]);

  const scrollToStage = (targetProgress: number) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const trackTopDoc = window.scrollY + rect.top;
    const scrollableDistance = rect.height - window.innerHeight;
    if (scrollableDistance <= 0) return;
    window.scrollTo({
      top: trackTopDoc + scrollableDistance * targetProgress,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={trackRef}
      className={styles.scrollTrack}
      id="work-process"
      aria-labelledby="work-process-heading"
    >
      <div className={styles.stickyStage}>
        {/* Top-Right Subtle Node Lines */}
        <div className={styles.topRightNodes} aria-hidden="true">
          <svg viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g stroke="rgba(148, 163, 184, 0.24)" strokeWidth="1">
              <path d="M120 0L85 65H145L110 135" />
              <path d="M180 10L140 85H210" />
              <circle cx="85" cy="65" r="2.5" fill="rgba(148, 163, 184, 0.4)" />
              <circle cx="110" cy="135" r="2.5" fill="rgba(148, 163, 184, 0.4)" />
              <circle cx="140" cy="85" r="2.5" fill="rgba(148, 163, 184, 0.4)" />
            </g>
          </svg>
        </div>

        {/* Bottom-Left Geometric Circuit Traces */}
        <div className={styles.bottomLeftCircuit} aria-hidden="true">
          <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g stroke="rgba(148, 163, 184, 0.28)" strokeWidth="1.1">
              <path d="M18 220V140C18 134 22 130 28 130H88C94 130 98 126 98 120V70" />
              <path d="M54 220V96C54 90 58 86 64 86H136C142 86 146 90 146 96V220" />
              <path d="M114 220V156C114 150 118 146 124 146H192C198 146 202 150 202 156V220" />
              <path d="M174 220V116C174 110 178 106 184 106H244" />
              <circle cx="98" cy="70" r="3" fill="rgba(148, 163, 184, 0.45)" />
              <circle cx="54" cy="145" r="3" fill="rgba(148, 163, 184, 0.45)" />
              <circle cx="146" cy="128" r="3" fill="rgba(148, 163, 184, 0.45)" />
              <circle cx="244" cy="106" r="3" fill="rgba(148, 163, 184, 0.45)" />
            </g>
          </svg>
        </div>

        {/* Main Content Container */}
        <div className={styles.container}>
          {/* Centered Header */}
          <div className={styles.headerBlock}>
            <div className={styles.processBadge}>
              <span className={styles.badgeDot} />
              <span>Work Process</span>
              <span className={styles.badgeDot} />
            </div>

            <h2 id="work-process-heading" className={styles.sectionTitle}>
              <span>How We Work, From</span>
              <span>Plan to Support</span>
            </h2>

            {/* Interactive Scroll Stage Indicator */}
            {!isMobile && (
              <div className={styles.stageTimeline} aria-label="Process steps progress">
                {[
                  { label: "01", progress: 0.01 },
                  { label: "02", progress: 0.24 },
                  { label: "03", progress: 0.46 },
                  { label: "04", progress: 0.68 },
                  { label: "All Steps", progress: 0.92 },
                ].map((stage, i) => (
                  <button
                    key={stage.label}
                    type="button"
                    onClick={() => scrollToStage(stage.progress)}
                    className={`${styles.stagePill} ${
                      activeStageIndex === i ? styles.stagePillActive : ""
                    }`}
                  >
                    {stage.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 4-Card Stage (Stacks 01 -> 04 in center on scroll, then spreads into 4 columns) */}
          <div className={styles.cardsStage}>
            {PROCESS_STEPS.map((step, idx) => (
              <article
                key={step.number}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                className={`${styles.processCard} ${
                  step.theme === "dark" ? styles.cardDark : styles.cardLight
                }`}
              >
                {/* Top Step Row */}
                <div className={styles.cardTopRow}>
                  <StepCubeIcon />
                  <span className={styles.stepNumText}>
                    <strong>{step.number}</strong> Step
                  </span>
                </div>

                {/* Subtle Gradient Divider Line */}
                <div className={styles.stepDivider} />

                {/* Step Heading & Description */}
                <div className={styles.cardTextContent}>
                  <h3 className={styles.stepTitle}>
                    <span>{step.titleLines[0]}</span>
                    <span>{step.titleLines[1]}</span>
                  </h3>

                  <p className={styles.stepDescription}>{step.description}</p>
                </div>

                {/* Bottom Rounded Photo */}
                <div className={styles.stepImageWrap}>
                  <Image
                    src={step.imageSrc}
                    alt={step.imageAlt}
                    fill
                    sizes="(max-width: 992px) 100vw, 270px"
                    className={styles.stepImg}
                  />
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Callout Line (Fades in as all 4 cards spread out) */}
          <div ref={calloutRef} className={styles.bottomCallout}>
            <span>Let&apos;s plan your IT together. </span>
            <a href="#contact" className={styles.quoteLink}>
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
