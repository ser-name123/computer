"use client";

import React from "react";
import styles from "./TrustedBrandsSection.module.css";

interface PartnerLogo {
  id: string;
  name: string;
  render: () => React.ReactNode;
}

const PARTNER_LOGOS: PartnerLogo[] = [
  {
    id: "huawei-ekit",
    name: "HUAWEI eKit",
    render: () => (
      <svg height="36" viewBox="0 0 196 42" fill="none" aria-label="HUAWEI eKit">
        {/* Red Huawei Petal/Ribbon Mark */}
        <path d="M18 4L6 19.5C5.2 20.6 5.6 22 6.8 22.4L13.5 24.5L22.5 8.5C21.5 5.8 19.5 4 18 4Z" fill="#e60012" />
        <path d="M25.5 11.5L13.2 28.5C12.4 29.6 12.9 31.2 14.2 31.5L21 33.2L30 16.5C29 14 27 12.2 25.5 11.5Z" fill="#c7000b" />
        <path d="M29.8 22L21.5 35.5C20.9 36.5 21.6 37.8 22.8 37.8H28.5L33.5 27.5C32.8 25 31.2 23 29.8 22Z" fill="#e60012" />
        <text x="40" y="28" fill="#111827" fontSize="19" fontWeight="800" fontFamily="Arial, sans-serif" letterSpacing="0.4">
          HUAWEI
        </text>
        <text x="128" y="28" fill="#111827" fontSize="18.5" fontWeight="600" fontFamily="Arial, sans-serif">
          eKit
        </text>
      </svg>
    ),
  },
  {
    id: "cisco",
    name: "Cisco",
    render: () => (
      <svg height="40" viewBox="0 0 116 44" fill="none" aria-label="Cisco">
        {/* 9 vertical bridge bars */}
        <rect x="14" y="10" width="3.2" height="8" rx="1.6" fill="#00bceb" />
        <rect x="25" y="5" width="3.2" height="13" rx="1.6" fill="#00bceb" />
        <rect x="36" y="2" width="3.2" height="18" rx="1.6" fill="#00bceb" />
        <rect x="47" y="6" width="3.2" height="12" rx="1.6" fill="#00bceb" />
        <rect x="58" y="10" width="3.2" height="8" rx="1.6" fill="#00bceb" />
        <rect x="69" y="6" width="3.2" height="12" rx="1.6" fill="#00bceb" />
        <rect x="80" y="2" width="3.2" height="18" rx="1.6" fill="#00bceb" />
        <rect x="91" y="5" width="3.2" height="13" rx="1.6" fill="#00bceb" />
        <rect x="102" y="10" width="3.2" height="8" rx="1.6" fill="#00bceb" />
        <text x="58" y="38" textAnchor="middle" fill="#00bceb" fontSize="18.5" fontWeight="800" fontFamily="Arial, sans-serif" letterSpacing="2.2">
          CISCO
        </text>
      </svg>
    ),
  },
  {
    id: "ruijie",
    name: "Ruijie",
    render: () => (
      <svg height="36" viewBox="0 0 132 40" fill="none" aria-label="Ruijie">
        <text
          x="6"
          y="30"
          fill="#d71920"
          fontSize="31"
          fontWeight="900"
          fontStyle="italic"
          fontFamily="Arial, sans-serif"
          letterSpacing="-0.5"
        >
          Ruijie
        </text>
      </svg>
    ),
  },
  {
    id: "reyee",
    name: "Reyee",
    render: () => (
      <svg height="36" viewBox="0 0 128 40" fill="none" aria-label="Reyee">
        <text
          x="6"
          y="29"
          fill="#1b4f9c"
          fontSize="29"
          fontWeight="800"
          fontFamily="Arial, sans-serif"
          letterSpacing="0.5"
        >
          Reyee
        </text>
      </svg>
    ),
  },
  {
    id: "aruba",
    name: "Aruba Networks",
    render: () => (
      <svg height="40" viewBox="0 0 132 44" fill="none" aria-label="Aruba Networks">
        <text x="66" y="25" textAnchor="middle" fill="#ff8300" fontSize="28" fontWeight="800" fontFamily="Arial, sans-serif" letterSpacing="-0.5">
          aruba
        </text>
        <text x="66" y="39" textAnchor="middle" fill="#4b5563" fontSize="8.5" fontWeight="600" fontFamily="Arial, sans-serif" letterSpacing="3.2">
          NETWORKS
        </text>
      </svg>
    ),
  },
  {
    id: "tp-link",
    name: "TP-Link",
    render: () => (
      <svg height="38" viewBox="0 0 146 42" fill="none" aria-label="TP-Link">
        {/* Teal geometric loop + stem */}
        <path
          d="M22 6C13.7 6 7 12.7 7 21H14.5C14.5 16.8 17.8 13.5 22 13.5C26.2 13.5 29.5 16.8 29.5 21C29.5 25.2 26.2 28.5 22 28.5H19V36H22C30.3 36 37 29.3 37 21C37 12.7 30.3 6 22 6Z"
          fill="#00b9c5"
        />
        <rect x="7" y="24" width="9" height="14" rx="1.8" fill="#00b9c5" />
        <text x="46" y="29" fill="#111827" fontSize="23" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="-0.4">
          tp-link
        </text>
      </svg>
    ),
  },
  {
    id: "ubiquiti",
    name: "Ubiquiti Networks",
    render: () => (
      <svg height="42" viewBox="0 0 128 46" fill="none" aria-label="Ubiquiti Networks">
        {/* U Shield */}
        <path d="M52 4V16C52 21.5 56.5 26 62 26C67.5 26 72 21.5 72 16V4H66V16C66 18.2 64.2 20 62 20C59.8 20 58 18.2 58 16V4H52Z" fill="#111827" />
        <rect x="52" y="4" width="6" height="8" fill="#0096d6" />
        <text x="64" y="36" textAnchor="middle" fill="#4b5563" fontSize="11.5" fontWeight="600" fontFamily="Arial, sans-serif" letterSpacing="2">
          UBIQUITI
        </text>
        <text x="64" y="44" textAnchor="middle" fill="#6b7280" fontSize="6.5" fontWeight="600" fontFamily="Arial, sans-serif" letterSpacing="3">
          NETWORKS
        </text>
      </svg>
    ),
  },
  {
    id: "kaspersky",
    name: "Kaspersky",
    render: () => (
      <svg height="36" viewBox="0 0 156 40" fill="none" aria-label="Kaspersky">
        <text x="6" y="28" fill="#00a88e" fontSize="25" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="-0.3">
          kaspersky
        </text>
      </svg>
    ),
  },
  {
    id: "fortinet",
    name: "Fortinet",
    render: () => (
      <svg height="36" viewBox="0 0 182 40" fill="none" aria-label="Fortinet">
        <text x="4" y="28" fill="#111827" fontSize="22" fontWeight="900" fontFamily="Arial, sans-serif">
          F
        </text>
        {/* Red 8-block O icon */}
        <g fill="#ee3124">
          <rect x="22" y="11" width="6" height="4.5" rx="1" />
          <rect x="30" y="11" width="6" height="4.5" rx="1" />
          <rect x="38" y="11" width="6" height="4.5" rx="1" />
          <rect x="22" y="17.5" width="6" height="4.5" rx="1" />
          <rect x="38" y="17.5" width="6" height="4.5" rx="1" />
          <rect x="22" y="24" width="6" height="4.5" rx="1" />
          <rect x="30" y="24" width="6" height="4.5" rx="1" />
          <rect x="38" y="24" width="6" height="4.5" rx="1" />
        </g>
        <text x="48" y="28" fill="#111827" fontSize="22" fontWeight="900" fontFamily="Arial, sans-serif" letterSpacing="1.2">
          RTINET
        </text>
      </svg>
    ),
  },
  {
    id: "sophos",
    name: "Sophos",
    render: () => (
      <svg height="36" viewBox="0 0 144 40" fill="none" aria-label="Sophos">
        <text x="6" y="28" fill="#005bc8" fontSize="24" fontWeight="900" fontFamily="Arial, sans-serif" letterSpacing="1.4">
          SOPHOS
        </text>
      </svg>
    ),
  },
  {
    id: "sonicwall",
    name: "SonicWall",
    render: () => (
      <svg height="38" viewBox="0 0 170 42" fill="none" aria-label="SonicWall">
        <path
          d="M78 9C112 4 152 6 162 14C166 17 156 23 144 27C152 21 154 16 149 13C140 8 106 8 78 9Z"
          fill="#d61f45"
        />
        <text
          x="6"
          y="30"
          fill="#0d2240"
          fontSize="20.5"
          fontWeight="900"
          fontStyle="italic"
          fontFamily="Arial, sans-serif"
          letterSpacing="0.5"
        >
          SONICWALL
        </text>
      </svg>
    ),
  },
  {
    id: "eset",
    name: "ESET",
    render: () => (
      <svg height="36" viewBox="0 0 108 40" fill="none" aria-label="ESET">
        <rect x="4" y="6" width="96" height="28" rx="14" fill="#00828b" stroke="#0f4c5c" strokeWidth="1.5" />
        <text x="52" y="26" textAnchor="middle" fill="#ffffff" fontSize="20" fontWeight="800" fontFamily="Arial, sans-serif" letterSpacing="1.5">
          eseT
        </text>
      </svg>
    ),
  },
  {
    id: "microsoft",
    name: "Microsoft",
    render: () => (
      <svg height="36" viewBox="0 0 166 40" fill="none" aria-label="Microsoft">
        <rect x="4" y="8" width="11" height="11" fill="#f25022" />
        <rect x="17" y="8" width="11" height="11" fill="#7fba00" />
        <rect x="4" y="21" width="11" height="11" fill="#00a4ef" />
        <rect x="17" y="21" width="11" height="11" fill="#ffb900" />
        <text x="36" y="27" fill="#5e5e5e" fontSize="22" fontWeight="700" fontFamily="Segoe UI, Arial, sans-serif">
          Microsoft
        </text>
      </svg>
    ),
  },
  {
    id: "google-workspace",
    name: "Google Workspace",
    render: () => (
      <svg height="36" viewBox="0 0 232 40" fill="none" aria-label="Google Workspace">
        <text x="4" y="27" fontSize="21.5" fontWeight="700" fontFamily="Arial, sans-serif">
          <tspan fill="#4285F4">G</tspan>
          <tspan fill="#EA4335">o</tspan>
          <tspan fill="#FBBC05">o</tspan>
          <tspan fill="#4285F4">g</tspan>
          <tspan fill="#34A853">l</tspan>
          <tspan fill="#EA4335">e</tspan>
          <tspan fill="#5f6368" fontWeight="500"> Workspace</tspan>
        </text>
      </svg>
    ),
  },
  {
    id: "aws",
    name: "AWS",
    render: () => (
      <svg height="40" viewBox="0 0 92 44" fill="none" aria-label="AWS">
        <text x="46" y="25" textAnchor="middle" fill="#232f3e" fontSize="26" fontWeight="800" fontFamily="Arial, sans-serif">
          aws
        </text>
        <path
          d="M16 31C30 39 58 39 74 30"
          stroke="#ff9900"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M69 27L76 29.5L72.5 36"
          stroke="#ff9900"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "dell",
    name: "Dell",
    render: () => (
      <svg height="36" viewBox="0 0 112 40" fill="none" aria-label="Dell">
        <text x="8" y="29" fill="#007db8" fontSize="28" fontWeight="900" fontFamily="Arial Black, Arial, sans-serif" letterSpacing="1">
          DELL
        </text>
      </svg>
    ),
  },
  {
    id: "hp",
    name: "HP",
    render: () => (
      <svg height="40" viewBox="0 0 54 44" fill="none" aria-label="HP">
        <circle cx="27" cy="22" r="19" fill="#0096d6" />
        <text
          x="26"
          y="29"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="23"
          fontWeight="800"
          fontStyle="italic"
          fontFamily="Arial, sans-serif"
        >
          hp
        </text>
      </svg>
    ),
  },
  {
    id: "lenovo",
    name: "Lenovo",
    render: () => (
      <svg height="36" viewBox="0 0 124 40" fill="none" aria-label="Lenovo">
        <rect x="4" y="6" width="116" height="28" rx="2" fill="#e2231a" />
        <text x="62" y="26" textAnchor="middle" fill="#ffffff" fontSize="21" fontWeight="800" fontFamily="Arial, sans-serif" letterSpacing="0.5">
          Lenovo
        </text>
      </svg>
    ),
  },
  {
    id: "qnap",
    name: "QNAP",
    render: () => (
      <svg height="36" viewBox="0 0 126 40" fill="none" aria-label="QNAP">
        <text x="8" y="29" fill="#122d69" fontSize="27" fontWeight="900" fontFamily="Arial Black, Arial, sans-serif" letterSpacing="1.2">
          QNAP
        </text>
        <path d="M18 24L32 30H22L18 24Z" fill="#e60012" />
      </svg>
    ),
  },
  {
    id: "veeam",
    name: "Veeam",
    render: () => (
      <svg height="36" viewBox="0 0 112 40" fill="none" aria-label="Veeam">
        <rect x="4" y="5" width="104" height="30" rx="3" fill="#00b336" />
        <text x="56" y="26" textAnchor="middle" fill="#ffffff" fontSize="18" fontWeight="800" fontFamily="Arial, sans-serif" letterSpacing="1.5">
          VEEAM
        </text>
      </svg>
    ),
  },
  {
    id: "synology",
    name: "Synology",
    render: () => (
      <svg height="36" viewBox="0 0 138 40" fill="none" aria-label="Synology">
        <text x="6" y="28" fill="#374151" fontSize="24" fontWeight="700" fontFamily="Georgia, serif">
          Synology®
        </text>
      </svg>
    ),
  },
  {
    id: "grandstream",
    name: "Grandstream",
    render: () => (
      <svg height="38" viewBox="0 0 198 42" fill="none" aria-label="Grandstream">
        <path d="M8 10C18 6 28 10 30 18C22 14 14 15 10 21C14 26 22 27 29 24L25 33C14 34 6 26 8 10Z" fill="#1e4b7a" />
        <path d="M12 12C19 10 26 12 28 17C21 15 15 16 12 19V12Z" fill="#0096d6" />
        <text x="38" y="24" fill="#1e4b7a" fontSize="16.5" fontWeight="800" fontFamily="Arial, sans-serif" letterSpacing="1.4">
          GRANDSTREAM
        </text>
        <text x="38" y="34" fill="#64748b" fontSize="7" fontWeight="600" fontFamily="Arial, sans-serif" letterSpacing="2.4">
          CONNECTING THE WORLD
        </text>
      </svg>
    ),
  },
  {
    id: "yeastar",
    name: "Yeastar",
    render: () => (
      <svg height="36" viewBox="0 0 142 40" fill="none" aria-label="Yeastar">
        {/* 5-petal colorful icon */}
        <ellipse cx="18" cy="12" rx="3.2" ry="6" fill="#0096d6" />
        <ellipse cx="11" cy="19" rx="6" ry="3.2" fill="#8dc63f" />
        <ellipse cx="25" cy="19" rx="6" ry="3.2" fill="#f7941d" />
        <ellipse cx="14" cy="27" rx="3.2" ry="6" transform="rotate(25 14 27)" fill="#0072bc" />
        <ellipse cx="22" cy="27" rx="3.2" ry="6" transform="rotate(-25 22 27)" fill="#00a651" />
        <text x="36" y="28" fill="#1f2937" fontSize="22" fontWeight="800" fontFamily="Arial, sans-serif">
          Yeastar
        </text>
      </svg>
    ),
  },
  {
    id: "avaya",
    name: "Avaya",
    render: () => (
      <svg height="36" viewBox="0 0 132 40" fill="none" aria-label="Avaya">
        <text x="6" y="29" fill="#da291c" fontSize="26" fontWeight="900" fontFamily="Arial, sans-serif" letterSpacing="2">
          AVAYA
        </text>
      </svg>
    ),
  },
  {
    id: "logitech",
    name: "Logitech",
    render: () => (
      <svg height="36" viewBox="0 0 128 40" fill="none" aria-label="Logitech">
        <text x="6" y="28" fill="#111827" fontSize="24" fontWeight="800" fontFamily="Arial, sans-serif" letterSpacing="-0.5">
          logitech
        </text>
      </svg>
    ),
  },
  {
    id: "yealink",
    name: "Yealink",
    render: () => (
      <svg height="36" viewBox="0 0 128 40" fill="none" aria-label="Yealink">
        <text x="6" y="28" fill="#466c65" fontSize="24" fontWeight="900" fontFamily="Arial, sans-serif" letterSpacing="-0.3">
          Yealink
        </text>
      </svg>
    ),
  },
  {
    id: "poly",
    name: "Poly",
    render: () => (
      <svg height="38" viewBox="0 0 112 42" fill="none" aria-label="Poly">
        {/* Orange propeller mark */}
        <circle cx="20" cy="21" r="6.5" stroke="#f34c19" strokeWidth="3.2" />
        <path d="M14 7V21M14 21L6 29M26 21L34 25" stroke="#f34c19" strokeWidth="3.2" strokeLinecap="round" />
        <text x="42" y="27" fill="#0b1f3a" fontSize="23" fontWeight="800" fontFamily="Arial, sans-serif">
          poly
        </text>
      </svg>
    ),
  },
  {
    id: "unv",
    name: "UNV Uniview",
    render: () => (
      <svg height="40" viewBox="0 0 106 44" fill="none" aria-label="UNV Uniview Technologies">
        <text x="8" y="27" fill="#111827" fontSize="27" fontWeight="800" fontFamily="Arial, sans-serif">
          unv
        </text>
        <circle cx="67" cy="11" r="2.8" fill="#e60012" />
        <text x="8" y="39" fill="#4b5563" fontSize="7.5" fontWeight="600" fontFamily="Arial, sans-serif">
          Uniview Technologies
        </text>
      </svg>
    ),
  },
  {
    id: "hikvision",
    name: "Hikvision",
    render: () => (
      <svg height="36" viewBox="0 0 168 40" fill="none" aria-label="Hikvision">
        <text x="6" y="28" fontSize="23" fontWeight="900" fontStyle="italic" fontFamily="Arial, sans-serif" letterSpacing="0.6">
          <tspan fill="#d71920">HIK</tspan>
          <tspan fill="#6d6e71">VISION</tspan>
        </text>
      </svg>
    ),
  },
  {
    id: "dahua",
    name: "Dahua Technology",
    render: () => (
      <svg height="40" viewBox="0 0 138 44" fill="none" aria-label="Dahua Technology">
        <text x="8" y="27" fontSize="24" fontWeight="900" fontStyle="italic" fontFamily="Arial, sans-serif">
          <tspan fill="#d71920">a</tspan>
          <tspan fill="#111827">lhua</tspan>
        </text>
        <path d="M6 20C6 11 16 7 25 11" stroke="#d71920" strokeWidth="2.4" strokeLinecap="round" />
        <text x="26" y="38" fill="#374151" fontSize="7.5" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="2">
          TECHNOLOGY
        </text>
      </svg>
    ),
  },
  {
    id: "imou",
    name: "Imou",
    render: () => (
      <svg height="36" viewBox="0 0 112 40" fill="none" aria-label="Imou">
        <text x="8" y="29" fill="#f59e0b" fontSize="27" fontWeight="900" fontFamily="Arial Rounded MT Bold, Arial, sans-serif" letterSpacing="1">
          Imou
        </text>
      </svg>
    ),
  },
];

export default function TrustedBrandsSection() {
  return (
    <section className={styles.brandsSection} id="partners" aria-label="Our Solution Partners">
      {/* Top Full-Width Divider Line with Centered Pill Badge */}
      <div className={styles.topDividerBar}>
        <div className={styles.pillBadge}>
          <span>We partner with </span>
          <strong className={styles.highlightCount}>30+</strong>
          <span> of the world&apos;s top tech brands</span>
        </div>
      </div>

      {/* Infinite Smooth Marquee Colored Logos Strip Between Top & Bottom Divider Lines */}
      <div className={styles.logosBand}>
        <div className={styles.marqueeTrack}>
          {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logo, idx) => (
            <div key={`${logo.id}-${idx}`} className={styles.brandItem} title={logo.name}>
              {logo.render()}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
