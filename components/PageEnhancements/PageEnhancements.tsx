"use client";

import React, { useEffect, useRef } from "react";
import styles from "./PageEnhancements.module.css";

const RADIUS = 21;
const CIRCUMFERENCE = Number((2 * Math.PI * RADIUS).toFixed(2));

export default function PageEnhancements() {
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const scrollBtnRef = useRef<HTMLButtonElement | null>(null);
  const ringFillRef = useRef<SVGCircleElement | null>(null);

  useEffect(() => {
    let rafId = 0;
    let initTimerId: ReturnType<typeof setTimeout> | null = null;
    let observer: IntersectionObserver | null = null;
    let isButtonShown = false;
    let revealTargets: HTMLElement[] = [];
    let allStaggerNodes: HTMLElement[] = [];

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

    // Wait until after React hydration completes before attaching data-* attributes
    initTimerId = setTimeout(() => {
      revealTargets = Array.from(
        document.querySelectorAll<HTMLElement>(
          "main > section:not(#work-process), body > footer"
        )
      );

      revealTargets.forEach((section) => {
        section.setAttribute("data-agy-reveal", "true");

        const staggerChildren = section.querySelectorAll<HTMLElement>(
          'article:not([class*="feedItem"]), button[class*="industryRowBtn"], div[class*="statItem"], div[class*="contactItemCard"], footer div[class*="Col"]'
        );
        staggerChildren.forEach((child, idx) => {
          child.setAttribute("data-agy-stagger", String(idx % 8));
          allStaggerNodes.push(child);
        });
      });

      observer = new IntersectionObserver(
        (entries) => {
          const vh = window.innerHeight;
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.setAttribute("data-agy-revealed", "true");
            } else if (entry.boundingClientRect.top >= vh) {
              entry.target.removeAttribute("data-agy-revealed");
            }
          });
        },
        {
          threshold: [0, 0.08],
          rootMargin: "0px 0px -36px 0px",
        }
      );

      revealTargets.forEach((el) => observer?.observe(el));
      updateScrollMetrics();
    }, 60);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      if (initTimerId) clearTimeout(initTimerId);
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      observer?.disconnect();
      revealTargets.forEach((el) => {
        el.removeAttribute("data-agy-reveal");
        el.removeAttribute("data-agy-revealed");
      });
      allStaggerNodes.forEach((child) => {
        child.removeAttribute("data-agy-stagger");
      });
    };
  }, []);

  return (
    <>
      {/* Top Laser Scroll Progress Bar */}
      <div className={styles.topProgressContainer} aria-hidden="true">
        <div
          ref={progressBarRef}
          className={styles.topProgressBar}
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      {/* Floating Scroll Progress Ring & Back-to-Top Button */}
      <button
        ref={scrollBtnRef}
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={styles.floatingScrollBtn}
        aria-label="Scroll to top"
      >
        <svg className={styles.progressRingSvg} viewBox="0 0 48 48">
          <circle
            className={styles.progressRingTrack}
            cx="24"
            cy="24"
            r={RADIUS}
          />
          <circle
            ref={ringFillRef}
            className={styles.progressRingFill}
            cx="24"
            cy="24"
            r={RADIUS}
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={CIRCUMFERENCE}
          />
        </svg>
        <svg
          className={styles.arrowIcon}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 19V5M12 5L6 11M12 5L18 11"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </>
  );
}
