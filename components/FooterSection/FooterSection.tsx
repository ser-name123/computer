"use client";

import React, { useState } from "react";
import CatsLogo from "@/components/CatsLogo/CatsLogo";
import styles from "./FooterSection.module.css";

const USEFUL_LINKS = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Industry Solutions", href: "#industry-solutions" },
  { label: "Awards & Recognition", href: "#case-studies", badge: "New" },
  { label: "Our Partners", href: "#partners" },
  { label: "Contact Us", href: "#contact" },
];

const OUR_SERVICES = [
  "IT Infrastructure Solutions",
  "Networking & Structured Cabling",
  "Cybersecurity Solutions",
  "Cloud Services & Virtualization",
  "CCTV & Security Systems",
  "Telephony & AV Conferencing",
  "IT Support & Managed Services",
];

export default function FooterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className={styles.footer} id="contact-us">
      {/* Top Glowing Divider Line */}
      <div className={styles.topGlowBorder} aria-hidden="true" />

      {/* ==================== PLEXUS / CONSTELLATION NETWORK MESH BACKGROUND ==================== */}
      <div className={styles.plexusBg} aria-hidden="true">
        <svg
          viewBox="0 0 1440 680"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.plexusSvg}
        >
          <defs>
            <radialGradient id="footerGlowLeft" cx="20%" cy="25%" r="50%">
              <stop offset="0%" stopColor="rgba(18, 84, 255, 0.24)" />
              <stop offset="100%" stopColor="rgba(2, 9, 34, 0)" />
            </radialGradient>
            <radialGradient id="footerGlowRight" cx="82%" cy="70%" r="48%">
              <stop offset="0%" stopColor="rgba(56, 189, 248, 0.16)" />
              <stop offset="100%" stopColor="rgba(2, 9, 34, 0)" />
            </radialGradient>
          </defs>

          <rect width="1440" height="680" fill="url(#footerGlowLeft)" />
          <rect width="1440" height="680" fill="url(#footerGlowRight)" />

          {/* Low-poly interconnected network triangles */}
          <g stroke="rgba(59, 130, 246, 0.15)" strokeWidth="1">
            <path d="M-40 340L110 230L240 360L80 480L-40 340Z" />
            <path d="M110 230L310 190L240 360L420 430L290 560L80 480" />
            <path d="M310 190L520 260L420 430L640 390L530 570L290 560" />
            <path d="M520 260L760 220L640 390L860 460L720 600L530 570" />
            <path d="M760 220L980 280L860 460L1090 380L990 580L720 600" />
            <path d="M980 280L1210 180L1090 380L1320 440L1190 590L990 580" />
            <path d="M1210 180L1480 250L1320 440L1510 540" />
            <line x1="240" y1="360" x2="520" y2="260" />
            <line x1="640" y1="390" x2="980" y2="280" />
            <line x1="860" y1="460" x2="1210" y2="180" />
          </g>

          {/* Subtle dark-blue polygon fills */}
          <polygon
            points="80,480 240,360 290,560"
            fill="rgba(15, 35, 95, 0.22)"
          />
          <polygon
            points="640,390 860,460 720,600"
            fill="rgba(15, 35, 95, 0.22)"
          />
          <polygon
            points="1090,380 1210,180 1320,440"
            fill="rgba(15, 35, 95, 0.18)"
          />

          {/* Glowing Orange/Gold & Cyan/Blue Vertex Nodes */}
          <circle cx="110" cy="230" r="3" fill="#f97316" fillOpacity="0.6" />
          <circle cx="240" cy="360" r="3.5" fill="#fb923c" fillOpacity="0.65" />
          <circle cx="80" cy="480" r="2.5" fill="#3b82f6" fillOpacity="0.65" />
          <circle cx="310" cy="190" r="2.5" fill="#3b82f6" fillOpacity="0.55" />
          <circle cx="420" cy="430" r="3.5" fill="#f97316" fillOpacity="0.6" />
          <circle cx="520" cy="260" r="3" fill="#38bdf8" fillOpacity="0.6" />
          <circle cx="640" cy="390" r="3" fill="#fb923c" fillOpacity="0.6" />
          <circle cx="720" cy="600" r="4" fill="#f97316" fillOpacity="0.7" />
          <circle cx="860" cy="460" r="3" fill="#3b82f6" fillOpacity="0.6" />
          <circle cx="980" cy="280" r="3.5" fill="#f97316" fillOpacity="0.55" />
          <circle cx="1090" cy="380" r="3" fill="#38bdf8" fillOpacity="0.6" />
          <circle cx="1210" cy="180" r="3.5" fill="#fb923c" fillOpacity="0.6" />
          <circle cx="1320" cy="440" r="3" fill="#f97316" fillOpacity="0.6" />
        </svg>
      </div>

      {/* ==================== MAIN FOOTER CONTAINER ==================== */}
      <div className={styles.container}>
        {/* TOP ROW: Giant Faded "Optitech" Watermark + Right Executive CTA Card */}
        <div className={styles.topRow}>
          <div className={styles.watermarkWrap} aria-hidden="true">
            <span className={styles.watermarkWord}>CATS</span>
            <span className={styles.watermarkSub}>
              IT • NETWORKING • SECURITY • CLOUD
            </span>
          </div>

          <div className={styles.topCtaBlock}>
            <div className={styles.ctaStatusPill}>
              <span className={styles.ctaPulseDot} />
              <span>Authorized Elite Distribution Partner</span>
            </div>

            <h2 className={styles.ctaHeading}>
              <span>Let&apos;s Plan Your IT</span>
              <span>—Start Today!</span>
            </h2>

            <div className={styles.ctaActionsRow}>
              <a href="#contact" className={styles.bookConsultBtn}>
                <span className={styles.btnText}>Book a Consultation</span>
                <span className={styles.btnIconBox}>
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
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>

              <a href="tel:+97142273378" className={styles.quickCallPill}>
                <span className={styles.callIconCircle}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className={styles.callMeta}>
                  <small>24/7 Expert Desk</small>
                  <strong>+971 4 227 3378</strong>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Subtle Horizontal Gradient Separator */}
        <div className={styles.middleDivider} />

        {/* MIDDLE 4-COLUMN GRID */}
        <div className={styles.columnsGrid}>
          {/* Column 1: Brand Logo, Description, Newsletter & Social Icons */}
          <div className={styles.brandCol}>
            <a href="#top" className={styles.footerBrandLogo} aria-label="CATS — Computer Accessories & Technical Services">
              <CatsLogo idPrefix="footer-cats" height={50} />
            </a>

            <p className={styles.brandDescription}>
              CATS Computers is a trusted IT company in Dubai. We take care of your
              networks, security, cloud and software — all in one place. Integrating
              Technology. Empowering Business.
            </p>

            {/* Newsletter Subscription Box */}
            <form className={styles.newsletterForm} onSubmit={handleSubscribe}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={
                  subscribed
                    ? "✓ Subscribed to Tech Insights!"
                    : "Enter work email for updates..."
                }
                className={styles.newsletterInput}
                aria-label="Subscribe to newsletter"
              />
              <button
                type="submit"
                className={styles.newsletterBtn}
                aria-label="Subscribe"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3.5 10.5L10.5 3.5M10.5 3.5H4.5M10.5 3.5V9.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>

            <div className={styles.socialRow}>
              {/* Facebook */}
              <a
                href="#facebook"
                className={styles.socialCircleBtn}
                aria-label="Facebook"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#linkedin"
                className={styles.socialCircleBtn}
                aria-label="LinkedIn"
              >
                <span className={styles.socialTextIcon}>in</span>
              </a>

              {/* X (Twitter) */}
              <a
                href="#twitter"
                className={styles.socialCircleBtn}
                aria-label="X Twitter"
              >
                <svg width="13.5" height="13.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#instagram"
                className={styles.socialCircleBtn}
                aria-label="Instagram"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div className={styles.linksCol}>
            <h3 className={styles.colHeading}>Useful Links</h3>
            <ul className={styles.linkList}>
              {USEFUL_LINKS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className={styles.footerLink}>
                    <span className={styles.linkChevron}>›</span>
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className={styles.linkBadge}>{item.badge}</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className={styles.linksCol}>
            <h3 className={styles.colHeading}>Our Services</h3>
            <ul className={styles.linkList}>
              {OUR_SERVICES.map((service) => (
                <li key={service}>
                  <a href="#services" className={styles.footerServiceLink}>
                    <span className={styles.serviceBullet} />
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div className={styles.contactCol}>
            <h3 className={styles.colHeading}>Get in Touch</h3>

            <div className={styles.contactCardsList}>
              <div className={styles.contactItemCard}>
                <span className={styles.contactIconBox}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                </span>
                <div className={styles.contactBlock}>
                  <span className={styles.contactLabel}>Head Office</span>
                  <p className={styles.contactValue}>
                    Office No #6, Water Tank Building, Al Musallah Street,
                    <br />
                    Burdubai, Dubai, UAE — P.O. Box 118562
                  </p>
                </div>
              </div>

              <div className={styles.contactItemCard}>
                <span className={styles.contactIconBox}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                    <path
                      d="M12 7V12L15 14"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <div className={styles.contactBlock}>
                  <span className={styles.contactLabel}>Working Hours</span>
                  <p className={styles.contactValue}>
                    Mon – Sat: 9:00 AM to 6:00 PM
                    <br />
                    <small className={styles.contactSubNote}>24/7 Support &amp; AMC Coverage</small>
                  </p>
                </div>
              </div>

              <div className={styles.contactItemCard}>
                <span className={styles.contactIconBox}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
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
                </span>
                <div className={styles.contactBlock}>
                  <span className={styles.contactLabel}>Direct Contact</span>
                  <p className={styles.contactValue}>
                    <a href="tel:+97142273378">+971 4 227 3378</a>
                    <br />
                    <a href="tel:+971552273378">+971 55 227 3378</a>
                    <br />
                    <a href="mailto:info@catscomputers.com">info@catscomputers.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== BOTTOM COPYRIGHT & STATUS BAR ==================== */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomBarInner}>
          <p className={styles.copyrightText}>
            © 2026 <span className={styles.brandGreen}>CATS Computers L.L.C</span> — IT
            Solutions, Networking, Cybersecurity &amp; Cloud. All Rights Reserved.
          </p>

          <div className={styles.legalLinks}>
            <a href="#privacy">Privacy Policy</a>
            <span className={styles.legalDivider} />
            <a href="#terms">Terms &amp; Conditions</a>
            <span className={styles.legalDivider} />
            <a href="#support">Support Center</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
