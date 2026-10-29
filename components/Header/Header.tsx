"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import CatsLogo from "@/components/CatsLogo/CatsLogo";
import styles from "./Header.module.css";

export interface MegaMenuItem {
  title: string;
  badge: string;
  badgeTone?: "blue" | "cyan" | "emerald" | "amber" | "purple";
  description: string;
  href: string;
  icon:
    | "server"
    | "network"
    | "shield"
    | "cloud"
    | "code"
    | "support"
    | "cctv"
    | "access"
    | "storage"
    | "phone"
    | "av"
    | "partner";
}

export interface MegaMenuSpotlight {
  tag: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  metrics: [string, string];
  ctaText: string;
  ctaHref: string;
}

export interface NavItem {
  label: string;
  href: string;
  hasDropdown: boolean;
  active?: boolean;
  eyebrow?: string;
  heading?: string;
  viewAllText?: string;
  viewAllHref?: string;
  megaItems?: MegaMenuItem[];
  spotlight?: MegaMenuSpotlight;
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    href: "/",
    hasDropdown: false,
    active: true,
  },
  {
    label: "About",
    href: "/#about",
    hasDropdown: false,
  },
  {
    label: "Services",
    href: "/#services",
    hasDropdown: true,
    eyebrow: "END-TO-END IT CAPABILITIES",
    heading: "Enterprise IT Services",
    viewAllText: "Explore All 12 Services",
    viewAllHref: "/#services",
    megaItems: [
      {
        title: "IT Infrastructure Solutions",
        badge: "Turnkey",
        badgeTone: "blue",
        description:
          "Complete server room buildouts, rack integration & enterprise hardware setup.",
        href: "/#services",
        icon: "server",
      },
      {
        title: "Networking & Structured Cabling",
        badge: "Popular",
        badgeTone: "cyan",
        description:
          "High-speed Fiber Optic, Cat6/Cat6A cabling, enterprise switching & Wi-Fi 6/7.",
        href: "/#services",
        icon: "network",
      },
      {
        title: "Cybersecurity Solutions",
        badge: "Zero-Trust",
        badgeTone: "emerald",
        description:
          "Next-Gen Firewalls (Fortinet, Sophos, SonicWall), endpoint protection & VPNs.",
        href: "/#services",
        icon: "shield",
      },
      {
        title: "Cloud & Virtualization",
        badge: "Scalable",
        badgeTone: "purple",
        description:
          "Microsoft 365, Google Workspace, AWS, VMware & hybrid cloud continuity.",
        href: "/#services",
        icon: "cloud",
      },
      {
        title: "Software & Web Development",
        badge: "Custom",
        badgeTone: "blue",
        description:
          "Tailored ERP/CRM applications, business automation & modern web platforms.",
        href: "/#services",
        icon: "code",
      },
      {
        title: "IT Support & Managed AMC",
        badge: "24/7 SLA",
        badgeTone: "amber",
        description:
          "Dedicated Annual Maintenance Contracts, remote helpdesk & on-site engineers.",
        href: "/#services",
        icon: "support",
      },
    ],
    spotlight: {
      tag: "HUAWEI eKIT ELITE PARTNER",
      title: "Managed IT & Annual Maintenance (AMC)",
      description:
        "Certified multi-vendor engineers delivering 99.9% uptime for businesses across Dubai & the UAE.",
      image: "/images/company/huawei-ekit-award.jpg",
      imageAlt:
        "Huawei Authorized Elite Distribution Partner — CATS Computers L.L.C",
      metrics: ["30+ Tech Vendors", "24/7 Rapid SLA"],
      ctaText: "Book Free IT Audit",
      ctaHref: "/#contact",
    },
  },
  {
    label: "Solutions",
    href: "/#solutions",
    hasDropdown: true,
    eyebrow: "HARDWARE & SECURITY ECOSYSTEM",
    heading: "Turnkey Industry Solutions",
    viewAllText: "View All Solutions",
    viewAllHref: "/#solutions",
    megaItems: [
      {
        title: "CCTV & Surveillance Systems",
        badge: "AI Vision",
        badgeTone: "cyan",
        description:
          "High-definition IP cameras, NVR storage & smart video analytics (Hikvision, Dahua, UNV).",
        href: "/#solutions",
        icon: "cctv",
      },
      {
        title: "Access Control & Biometrics",
        badge: "Smart Entry",
        badgeTone: "emerald",
        description:
          "Facial recognition terminals, fingerprint time attendance & automated gate barriers.",
        href: "/#solutions",
        icon: "access",
      },
      {
        title: "Servers, NAS & Backup Storage",
        badge: "Enterprise",
        badgeTone: "blue",
        description:
          "Dell, HP & Lenovo rack servers with Synology, QNAP & Veeam disaster recovery.",
        href: "/#solutions",
        icon: "storage",
      },
      {
        title: "IP Telephony & PBX Comms",
        badge: "Unified VoIP",
        badgeTone: "purple",
        description:
          "Crystal-clear enterprise voice with Avaya, Grandstream, Yeastar & Yealink IP phones.",
        href: "/#solutions",
        icon: "phone",
      },
      {
        title: "AV & Boardroom Conferencing",
        badge: "4K Rooms",
        badgeTone: "blue",
        description:
          "Interactive smart panels, meeting room audio & wireless casting (Logitech, Poly).",
        href: "/#solutions",
        icon: "av",
      },
      {
        title: "Huawei eKit & Ruijie Reyee",
        badge: "Golden ADP",
        badgeTone: "amber",
        description:
          "Official UAE distributor for genuine enterprise switches, optical gateways & cloud Wi-Fi.",
        href: "/#partners",
        icon: "partner",
      },
    ],
    spotlight: {
      tag: "TOP PERFORMING ADP 2024",
      title: "Ruijie Reyee Golden Distributor UAE",
      description:
        "Genuine enterprise networking, cloud switches & high-density Wi-Fi with official UAE warranty.",
      image: "/images/company/award-ruijie-adp-2024-b.jpg",
      imageAlt:
        "Ruijie Reyee Top Performing ADP 2024 Award — CATS Computers L.L.C",
      metrics: ["Ready Dubai Stock", "Official Warranty"],
      ctaText: "Request Hardware Quote",
      ctaHref: "/#contact",
    },
  },
  {
    label: "Partners",
    href: "/#partners",
    hasDropdown: false,
  },
  {
    label: "Contact Us",
    href: "/#contact",
    hasDropdown: false,
  },
];

function renderMegaIcon(icon: MegaMenuItem["icon"]) {
  switch (icon) {
    case "server":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="4" width="18" height="6" rx="2" stroke="currentColor" strokeWidth="1.75" />
          <rect x="3" y="14" width="18" height="6" rx="2" stroke="currentColor" strokeWidth="1.75" />
          <circle cx="7" cy="7" r="1" fill="currentColor" />
          <circle cx="7" cy="17" r="1" fill="currentColor" />
          <path d="M11 7H17M11 17H17" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    case "network":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.75" />
          <circle cx="5" cy="19" r="2.5" stroke="currentColor" strokeWidth="1.75" />
          <circle cx="19" cy="19" r="2.5" stroke="currentColor" strokeWidth="1.75" />
          <path d="M12 7.5V12M12 12L6.5 16.8M12 12L17.5 16.8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    case "shield":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 3L4 6.5V11.8C4 16.8 7.4 20.9 12 22C16.6 20.9 20 16.8 20 11.8V6.5L12 3Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
          <path d="M9 12.2L11 14.2L15.2 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "cloud":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6.5 19H17.5C20 19 21.8 17.2 21.8 14.8C21.8 12.6 20.2 10.8 18 10.6C17.4 6.9 14.2 4.2 10.5 4.5C7.2 4.8 4.6 7.5 4.5 10.8C2.9 11.4 2 13 2 14.8C2 17.1 4 19 6.5 19Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
          <path d="M12 11V16M12 11L9.8 13.2M12 11L14.2 13.2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "code":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M8 9L4 12L8 15M16 9L20 12L16 15M13.5 6.5L10.5 17.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "support":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 13V11C4 6.58 7.58 3 12 3C16.42 3 20 6.58 20 11V13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          <rect x="3" y="13" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
          <rect x="17" y="13" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
          <path d="M19 19C19 20.66 16.5 21.5 13 21.5H11" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    case "cctv":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 10.5L16.5 5.5L19.5 11.5L7.5 15.5L3 10.5Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
          <path d="M6 14L4 20H9" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="14.5" cy="9.5" r="1.4" fill="currentColor" />
        </svg>
      );
    case "access":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="5" y="3" width="14" height="18" rx="3" stroke="currentColor" strokeWidth="1.75" />
          <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.75" />
          <path d="M9 16.5C9.8 15.3 10.8 14.8 12 14.8C13.2 14.8 14.2 15.3 15 16.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    case "storage":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <ellipse cx="12" cy="6" rx="8" ry="3" stroke="currentColor" strokeWidth="1.75" />
          <path d="M4 6V12C4 13.66 7.58 15 12 15C16.42 15 20 13.66 20 12V6" stroke="currentColor" strokeWidth="1.75" />
          <path d="M4 12V18C4 19.66 7.58 21 12 21C16.42 21 20 19.66 20 18V12" stroke="currentColor" strokeWidth="1.75" />
        </svg>
      );
    case "phone":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M19.5 16.2V18.8C19.5 19.9 18.6 20.8 17.5 20.7C10.1 20.1 3.9 13.9 3.3 6.5C3.2 5.4 4.1 4.5 5.2 4.5H7.8C8.6 4.5 9.3 5 9.5 5.8L10.3 8.8C10.5 9.5 10.2 10.2 9.6 10.6L8.2 11.7C9.4 13.9 11.1 15.6 13.3 16.8L14.4 15.4C14.8 14.8 15.5 14.5 16.2 14.7L19.2 15.5C19.4 15.7 19.5 15.9 19.5 16.2Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
          <path d="M14.5 4.8C16.8 5.2 18.8 7.2 19.2 9.5M14.5 8.2C15.4 8.5 16.2 9.3 16.5 10.2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    case "av":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="2.5" y="4.5" width="14" height="11" rx="2" stroke="currentColor" strokeWidth="1.75" />
          <path d="M16.5 8.5L21.5 6V14L16.5 11.5" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
          <path d="M6.5 19.5H12.5M9.5 15.5V19.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    case "partner":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 2.8L14.6 8L20.3 8.8L16.2 12.8L17.2 18.5L12 15.8L6.8 18.5L7.8 12.8L3.7 8.8L9.4 8L12 2.8Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
        </svg>
      );
  }
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(null);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const closeMegaTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleOpenMega = (label: string, hasDropdown: boolean) => {
    if (closeMegaTimerRef.current) {
      clearTimeout(closeMegaTimerRef.current);
      closeMegaTimerRef.current = null;
    }
    if (hasDropdown) {
      setActiveMega(label);
    } else {
      setActiveMega(null);
    }
  };

  const handleScheduleCloseMega = () => {
    if (closeMegaTimerRef.current) {
      clearTimeout(closeMegaTimerRef.current);
    }
    closeMegaTimerRef.current = setTimeout(() => {
      setActiveMega(null);
    }, 260);
  };

  const handleCancelCloseMega = () => {
    if (closeMegaTimerRef.current) {
      clearTimeout(closeMegaTimerRef.current);
      closeMegaTimerRef.current = null;
    }
  };

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 36;
      setIsScrolled((prev) => (prev !== next ? next : prev));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (closeMegaTimerRef.current) {
        clearTimeout(closeMegaTimerRef.current);
      }
    };
  }, []);

  const toggleMobileSubmenu = (label: string) => {
    setMobileExpandedItem((prev) => (prev === label ? null : label));
  };

  return (
    <div className={styles.headerRoot}>
      {/* ==================== TOP UTILITY BAR ==================== */}
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          {/* Social Links Left */}
          <div className={styles.socialGroup}>
            <a href="#instagram" className={styles.socialLink}>
              <span>Instagram</span>
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path
                  d="M2.5 9.5L9.5 2.5M9.5 2.5H3.5M9.5 2.5V8.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <span className={styles.topDivider} />
            <a href="#facebook" className={styles.socialLink}>
              <span>Facebook</span>
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path
                  d="M2.5 9.5L9.5 2.5M9.5 2.5H3.5M9.5 2.5V8.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <span className={styles.topDivider} />
            <a href="#linkedin" className={styles.socialLink}>
              <span>LinkedIn</span>
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path
                  d="M2.5 9.5L9.5 2.5M9.5 2.5H3.5M9.5 2.5V8.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Contact Info Right */}
          <div className={styles.contactGroup}>
            <a href="mailto:info@catscomputers.com" className={styles.contactItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect
                  x="2"
                  y="4"
                  width="20"
                  height="16"
                  rx="3"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="M22 7L13.03 12.7C12.41 13.09 11.59 13.09 10.97 12.7L2 7"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
              <span>info@catscomputers.com</span>
            </a>
            <span className={styles.topDivider} />
            <a href="tel:+97142273378" className={styles.contactItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>+971 4 227 3378</span>
            </a>
            <span className={styles.topDivider} />
            <div className={styles.contactItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.8" />
              </svg>
              <span>Water Tank Building, Al Musallah Street, Burdubai, Dubai, UAE</span>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== MAIN NAVIGATION BAR ==================== */}
      <div className={styles.navbarOverlaySlot}>
        <header
          className={`${styles.navbar} ${isScrolled ? styles.navbarScrolled : ""}`}
        >
          <div className={styles.navbarInner}>
            {/* Left group: Brand Logo + Navigation Links */}
            <div className={styles.navLeftGroup}>
              <Link
                href="/"
                className={styles.brandLogo}
                aria-label="CATS — Computer Accessories & Technical Services"
              >
                <CatsLogo idPrefix="navbar-cats" height={46} />
              </Link>

              {/* Navigation Menu */}
              <nav
                className={styles.navLinks}
                aria-label="Main Navigation"
                onMouseLeave={handleScheduleCloseMega}
              >
                {NAV_ITEMS.map((item) => {
                  const isMegaOpen = activeMega === item.label;
                  return (
                    <div
                      key={item.label}
                      className={`${styles.navItemWrapper} ${
                        isMegaOpen ? styles.navItemWrapperOpen : ""
                      }`}
                      onMouseEnter={() => handleOpenMega(item.label, item.hasDropdown)}
                    >
                      <Link
                        href={item.href}
                        className={`${styles.navLink} ${
                          item.active || isMegaOpen ? styles.navLinkActive : ""
                        }`}
                      >
                        <span>{item.label}</span>
                        {item.hasDropdown && (
                          <span className={styles.dropdownCornerIcon} aria-hidden="true" />
                        )}
                      </Link>

                      {item.hasDropdown && item.megaItems && (
                        <div
                          className={`${styles.megaMenu} ${
                            isMegaOpen ? styles.megaMenuOpen : ""
                          }`}
                          role="region"
                          aria-label={`${item.label} Mega Menu`}
                          onMouseEnter={handleCancelCloseMega}
                          onMouseLeave={handleScheduleCloseMega}
                          onClick={() => setActiveMega(null)}
                        >
                          <div className={styles.megaMenuSurface}>
                            <div className={styles.megaMenuTopGlow} aria-hidden="true" />

                            <div className={styles.megaMenuBody}>
                              {/* Left / Main Multi-Column Grid */}
                              <div className={styles.megaMainCol}>
                                <div className={styles.megaHeaderRow}>
                                  <div className={styles.megaHeaderLeft}>
                                    <span className={styles.megaEyebrow}>
                                      <span className={styles.megaEyebrowDot} />
                                      {item.eyebrow}
                                    </span>
                                    <h3 className={styles.megaHeading}>{item.heading}</h3>
                                  </div>
                                  {item.viewAllText && (
                                    <Link
                                      href={item.viewAllHref || item.href}
                                      className={styles.megaViewAllLink}
                                    >
                                      <span>{item.viewAllText}</span>
                                      <svg
                                        width="13"
                                        height="13"
                                        viewBox="0 0 14 14"
                                        fill="none"
                                        aria-hidden="true"
                                      >
                                        <path
                                          d="M3.5 10.5L10.5 3.5M10.5 3.5H4.5M10.5 3.5V9.5"
                                          stroke="currentColor"
                                          strokeWidth="1.6"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </Link>
                                  )}
                                </div>

                                <div className={styles.megaGrid}>
                                  {item.megaItems.map((sub) => (
                                    <Link
                                      key={sub.title}
                                      href={sub.href}
                                      className={styles.megaCard}
                                    >
                                      <div className={styles.megaCardIconBox}>
                                        {renderMegaIcon(sub.icon)}
                                      </div>
                                      <div className={styles.megaCardContent}>
                                        <div className={styles.megaCardTitleRow}>
                                          <span className={styles.megaCardTitle}>
                                            {sub.title}
                                          </span>
                                          <span
                                            className={`${styles.megaBadge} ${
                                              sub.badgeTone
                                                ? styles[`megaBadge_${sub.badgeTone}`]
                                                : ""
                                            }`}
                                          >
                                            {sub.badge}
                                          </span>
                                        </div>
                                        <p className={styles.megaCardDesc}>
                                          {sub.description}
                                        </p>
                                      </div>
                                      <span className={styles.megaCardArrow} aria-hidden="true">
                                        <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                                          <path
                                            d="M3.5 10.5L10.5 3.5M10.5 3.5H4.8M10.5 3.5V9.2"
                                            stroke="currentColor"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                        </svg>
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              {/* Right Featured Spotlight Card */}
                              {item.spotlight && (
                                <div className={styles.megaSpotlightCol}>
                                  <div className={styles.megaSpotlightCard}>
                                    <div className={styles.megaSpotlightImageWrap}>
                                      <Image
                                        src={item.spotlight.image}
                                        alt={item.spotlight.imageAlt}
                                        fill
                                        sizes="280px"
                                        className={styles.megaSpotlightImage}
                                      />
                                      <div className={styles.megaSpotlightImageOverlay} />
                                      <span className={styles.megaSpotlightTag}>
                                        <span className={styles.megaSpotlightTagDot} />
                                        {item.spotlight.tag}
                                      </span>
                                    </div>

                                    <div className={styles.megaSpotlightContent}>
                                      <h4 className={styles.megaSpotlightTitle}>
                                        {item.spotlight.title}
                                      </h4>
                                      <p className={styles.megaSpotlightDesc}>
                                        {item.spotlight.description}
                                      </p>

                                      <div className={styles.megaSpotlightMetrics}>
                                        {item.spotlight.metrics.map((m) => (
                                          <span key={m} className={styles.megaMetricPill}>
                                            <svg
                                              width="11"
                                              height="11"
                                              viewBox="0 0 16 16"
                                              fill="none"
                                              aria-hidden="true"
                                            >
                                              <path
                                                d="M13.3 4.3L6.5 11.1L2.7 7.3"
                                                stroke="#38bdf8"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                              />
                                            </svg>
                                            {m}
                                          </span>
                                        ))}
                                      </div>

                                      <Link
                                        href={item.spotlight.ctaHref}
                                        className={styles.megaSpotlightBtn}
                                      >
                                        <span>{item.spotlight.ctaText}</span>
                                        <svg
                                          width="13"
                                          height="13"
                                          viewBox="0 0 14 14"
                                          fill="none"
                                          aria-hidden="true"
                                        >
                                          <path
                                            d="M3.5 10.5L10.5 3.5M10.5 3.5H4.5M10.5 3.5V9.5"
                                            stroke="currentColor"
                                            strokeWidth="1.7"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                        </svg>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Bottom Mega Menu Quick Contact / Action Strip */}
                            <div className={styles.megaFooterBar}>
                              <div className={styles.megaFooterLeft}>
                                <span className={styles.megaLiveDot} />
                                <span>
                                  Need custom IT architecture or rapid support in Dubai? Speak with our certified engineers.
                                </span>
                              </div>
                              <div className={styles.megaFooterActions}>
                                <a href="tel:+97142273378" className={styles.megaFooterActionLink}>
                                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path
                                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
                                      stroke="currentColor"
                                      strokeWidth="1.9"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                  <span>+971 4 227 3378</span>
                                </a>
                                <span className={styles.megaFooterDivider} />
                                <a
                                  href="mailto:info@catscomputers.com"
                                  className={styles.megaFooterActionLink}
                                >
                                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <rect
                                      x="2"
                                      y="4"
                                      width="20"
                                      height="16"
                                      rx="3"
                                      stroke="currentColor"
                                      strokeWidth="1.9"
                                    />
                                    <path
                                      d="M22 7L12 13L2 7"
                                      stroke="currentColor"
                                      strokeWidth="1.9"
                                      strokeLinecap="round"
                                    />
                                  </svg>
                                  <span>info@catscomputers.com</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>
            </div>

            {/* Right Action Group: Search, Get In Touch CTA, Yellow Grid Icon */}
            <div className={styles.navActions}>
              {/* Search Box */}
              <div
                className={`${styles.searchBox} ${
                  searchOpen ? styles.searchBoxFocused : ""
                }`}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={styles.searchIcon}
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M20 20L16.5 16.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search ..."
                  value={searchQuery}
                  onFocus={() => setSearchOpen(true)}
                  onBlur={() => setSearchOpen(false)}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.searchInput}
                  aria-label="Search site"
                />
              </div>

              {/* Get In Touch CTA */}
              <Link href="/#contact" className={styles.getInTouchBtn}>
                Get In Touch
              </Link>

              {/* Yellow 3x3 Dot Grid Offcanvas Trigger */}
              <button
                type="button"
                className={styles.gridMenuBtn}
                onClick={() => setDrawerOpen(true)}
                aria-label="Open Quick Info Drawer"
              >
                <span className={styles.gridDots}>
                  {Array.from({ length: 9 }).map((_, idx) => (
                    <i key={idx} className={styles.gridDot} />
                  ))}
                </span>
              </button>

              {/* Mobile Hamburger Trigger */}
              <button
                type="button"
                className={styles.mobileMenuBtn}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Mobile Navigation"
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          {mobileMenuOpen && (
            <div className={styles.mobileNavDropdown}>
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className={styles.mobileNavItemBlock}>
                  <div className={styles.mobileNavRow}>
                    <Link
                      href={item.href}
                      className={styles.mobileNavLink}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.hasDropdown && item.megaItems && (
                      <button
                        type="button"
                        className={styles.mobileExpandBtn}
                        onClick={() => toggleMobileSubmenu(item.label)}
                        aria-label={`Toggle ${item.label} submenu`}
                      >
                        {mobileExpandedItem === item.label ? "−" : "+"}
                      </button>
                    )}
                  </div>

                  {item.hasDropdown &&
                    item.megaItems &&
                    mobileExpandedItem === item.label && (
                      <div className={styles.mobileSubGrid}>
                        {item.megaItems.map((sub) => (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            className={styles.mobileSubCard}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <span className={styles.mobileSubIcon}>
                              {renderMegaIcon(sub.icon)}
                            </span>
                            <div>
                              <div className={styles.mobileSubTitle}>{sub.title}</div>
                              <div className={styles.mobileSubDesc}>{sub.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                </div>
              ))}
            </div>
          )}
        </header>
      </div>

      {/* ==================== QUICK INFO OFFCANVAS DRAWER ==================== */}
      {drawerOpen && (
        <div className={styles.drawerBackdrop} onClick={() => setDrawerOpen(false)}>
          <aside
            className={styles.drawerPanel}
            onClick={(e) => e.stopPropagation()}
            aria-label="Company Info Panel"
          >
            <div className={styles.drawerHeader}>
              <CatsLogo idPrefix="drawer-cats" height={40} />
              <button
                type="button"
                className={styles.drawerCloseBtn}
                onClick={() => setDrawerOpen(false)}
                aria-label="Close drawer"
              >
                ✕
              </button>
            </div>
            <p className={styles.drawerDescription}>
              CATS Computers is a trusted IT company in Dubai. We handle your networks, servers, security, cloud, and software — all in one place.
            </p>
            <div className={styles.drawerInfoList}>
              <div>
                <strong>Email</strong>
                <p>info@catscomputers.com</p>
              </div>
              <div>
                <strong>Phone</strong>
                <p>+971 4 227 3378</p>
              </div>
              <div>
                <strong>Headquarters</strong>
                <p>Water Tank Building, Al Musallah Street, Burdubai, Dubai, UAE</p>
              </div>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}

