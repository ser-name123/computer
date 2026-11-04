"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import styles from "./PageEnhancements.module.css";

const RADIUS = 21;
const CIRCUMFERENCE = Number((2 * Math.PI * RADIUS).toFixed(2));

export default function PageEnhancements() {
  const pathname = usePathname();
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const scrollBtnRef = useRef<HTMLButtonElement | null>(null);
  const ringFillRef = useRef<SVGCircleElement | null>(null);

  useEffect(() => {
    // Instantly snap to top on route navigation without smooth-scroll animation
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    let rafId = 0;
    let isButtonShown = false;

    const updateScrollMetrics = () => {
      const scrollTop = window.scrollY;
      const vh = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - vh;
      const fraction =
        docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;

      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${fraction.toFixed(4)})`;
      }

      if (ringFillRef.current) {
        const dashOffset = (CIRCUMFERENCE * (1 - fraction)).toFixed(2);
        ringFillRef.current.style.strokeDashoffset = dashOffset;
      }

      const shouldShow = scrollTop > 380;
      if (shouldShow !== isButtonShown && scrollBtnRef.current) {
        isButtonShown = shouldShow;
        scrollBtnRef.current.classList.toggle(
          styles.floatingScrollBtnVisible,
          shouldShow
        );
      }
    };

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateScrollMetrics);
    };

    updateScrollMetrics();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [pathname]);

  return (
    <>
      {/* Top Laser Scroll Progress Bar */}
      <div className={styles.topProgressContainer} aria-hidden="true">
        <div
          ref={progressBarRef}
          className={styles.topProgressBar}
          style={{ transform: "scaleX(0)" }}
        >
          <span className={styles.topProgressComet} />
        </div>
      </div>

      {/* Floating Scroll-to-Top Orb with Circular Progress Ring */}
      <button
        ref={scrollBtnRef}
        type="button"
        className={styles.floatingScrollBtn}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll back to top"
      >
        <span className={styles.scrollBtnPulse} aria-hidden="true" />
        <svg
          className={styles.progressRingSvg}
          width="50"
          height="50"
          viewBox="0 0 50 50"
          aria-hidden="true"
        >
          <circle
            className={styles.progressRingTrack}
            cx="25"
            cy="25"
            r={RADIUS}
          />
          <circle
            ref={ringFillRef}
            className={styles.progressRingFill}
            cx="25"
            cy="25"
            r={RADIUS}
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={CIRCUMFERENCE}
          />
        </svg>
        <span className={styles.scrollArrowIcon} aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 19V5M12 5L6 11M12 5L18 11"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
    </>
  );
}
