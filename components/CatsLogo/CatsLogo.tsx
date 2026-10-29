import React from "react";

interface CatsLogoProps {
  idPrefix?: string;
  height?: number;
  className?: string;
}

export default function CatsLogo({
  idPrefix = "cats-logo",
  height = 48,
  className,
}: CatsLogoProps) {
  const wordFill = `${idPrefix}-word-fill`;
  const wordBevel = `${idPrefix}-word-bevel`;
  const dropShadow = `${idPrefix}-shadow`;

  return (
    <svg
      height={height}
      viewBox="0 0 282 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="CATS — Computer Accessories & Technical Services"
    >
      <defs>
        {/* Exact Metallic Cyan-Blue -> Deep Navy Vertical Gradient from Original Logo */}
        <linearGradient id={wordFill} x1="175" y1="8" x2="175" y2="51" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#35a7e0" />
          <stop offset="22%" stopColor="#2682c7" />
          <stop offset="38%" stopColor="#1b488c" />
          <stop offset="72%" stopColor="#203b75" />
          <stop offset="100%" stopColor="#26529c" />
        </linearGradient>

        {/* Crisp Silver-White Outer Bevel Rim */}
        <linearGradient id={wordBevel} x1="175" y1="6" x2="175" y2="53" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="50%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>

        <filter id={dropShadow} x="-10%" y="-10%" width="120%" height="125%">
          <feDropShadow dx="0" dy="1.8" stdDeviation="1.6" floodColor="#020820" floodOpacity="0.7" />
        </filter>
      </defs>

      {/* ==================== LEFT: REAL EXTRACTED 3D "C" EMBLEM ==================== */}
      <image
        href="/images/cats-emblem.png"
        x="2"
        y="3"
        width="64"
        height="66"
        preserveAspectRatio="xMidYMid meet"
      />

      {/* ==================== RIGHT TOP: THICK FUTURISTIC "cats" WORDMARK (EXACT PIXEL TRACE) ==================== */}
      <g
        filter={`url(#${dropShadow})`}
        fill={`url(#${wordFill})`}
        stroke={`url(#${wordBevel})`}
        strokeWidth="1.5"
        strokeLinejoin="round"
      >
        {/* "c" — x: 74..118, y: 8..50 (15px thick left curve, 9.5px thick top/bottom bars) */}
        <path d="M113 8H92C79.5 8 73 15.8 73 29C73 42.2 79.5 50 92 50H113C116 50 118 48 118 45.2C118 42.4 116 40.5 113 40.5H94.5C89.2 40.5 87.5 36.8 87.5 29C87.5 21.2 89.2 17.5 94.5 17.5H113C116 17.5 118 15.6 118 12.8C118 10 116 8 113 8Z" />

        {/* "a" — x: 122..170, y: 8..50 (14.5px thick stems, 9px bars, bottom bowl + right stem foot) */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M128 8H154C164.5 8 170 13.5 170 23.5V45.2C170 48 168 50 165 50H160.5C157.8 50 156 48.2 156 45.8V44.8C152.5 48.4 147.5 50 140.5 50C128.5 50 122 44.2 122 35.2C122 26.2 128.5 21 141 21H155.5V19.8C155.5 17.8 153.8 17 149.5 17H128C125 17 123 15.2 123 12.5C123 9.8 125 8 128 8ZM155.5 28.8H142.5C137.5 28.8 135.8 30.8 135.8 35C135.8 39.2 137.8 41.2 143 41.2C149.5 41.2 155.5 39.2 155.5 35.5V28.8Z"
        />

        {/* "T" — x: 173..221, y: 8..50 (9.5px top bar, 15px thick center vertical stem) */}
        <path d="M178 8H216C219 8 221 10 221 12.8C221 15.6 219 17.5 216 17.5H204.5V45C204.5 48 202.2 50 199 50H195C191.8 50 189.5 48 189.5 45V17.5H178C175 17.5 173 15.6 173 12.8C173 10 175 8 178 8Z" />

        {/* "s" — x: 224..272, y: 8..50 (14px thick curves, 9.5px top/mid/bottom bars) */}
        <path d="M266.5 8H238.5C228.5 8 224 12.8 224 20.2C224 27.8 228.8 32.5 239 32.5H255.5C257.8 32.5 258.8 33.8 258.8 36.5C258.8 39.2 257.5 40.5 254.5 40.5H229.5C226.5 40.5 224.5 42.4 224.5 45.2C224.5 48 226.5 50 229.5 50H257.5C267.8 50 272.5 45 272.5 36.8C272.5 28.5 267.8 24 257.2 24H240.5C238.2 24 237.2 22.8 237.2 20.5C237.2 18.2 238.5 17.2 241.5 17.2H266.5C269.5 17.2 271.5 15.4 271.5 12.6C271.5 9.8 269.5 8 266.5 8Z" />
      </g>

      {/* ==================== RIGHT BOTTOM: DIVIDER LINE + TAGLINE ==================== */}
      <line
        x1="73"
        y1="56.5"
        x2="272"
        y2="56.5"
        stroke="rgba(203, 213, 225, 0.55)"
        strokeWidth="1"
      />
      <text
        x="172.5"
        y="66.5"
        textAnchor="middle"
        fill="#e2e8f0"
        fontSize="6.95"
        fontWeight="700"
        fontFamily="Arial, Helvetica, sans-serif"
        letterSpacing="0.42"
      >
        COMPUTER ACCESSORIES &amp; TECHNICAL SERVICES
      </text>
    </svg>
  );
}
