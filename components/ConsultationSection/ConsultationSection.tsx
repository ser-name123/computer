"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./ConsultationSection.module.css";

export default function ConsultationSection() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFullName("");
      setPhone("");
      setEmail("");
      setService("");
      setMessage("");
      setSubmitted(false);
    }, 3500);
  };

  return (
    <section
      className={styles.consultationSection}
      id="contact"
      aria-labelledby="consultation-heading"
    >
      <div className={styles.splitLayout}>
        {/* ==================== LEFT COLUMN: ROYAL BLUE FORM PANEL ==================== */}
        <div className={styles.leftFormPanel}>
          {/* Starry Dust & Sparkle Glints Overlay */}
          <div className={styles.starryOverlay} aria-hidden="true">
            <span className={styles.sparkleGlint} style={{ top: "11%", left: "34%" }} />
            <span className={styles.sparkleGlint} style={{ top: "86%", right: "14%" }} />
            <span className={styles.sparkleGlint} style={{ top: "48%", right: "8%" }} />
          </div>

          {/* Bottom-Left 3D Curved Sphere Highlight */}
          <div className={styles.bottomLeftSphere} aria-hidden="true" />

          <div className={styles.formContentInner}>
            {/* Top Pill Badge */}
            <div className={styles.aboutBadge}>
              <span className={styles.badgeDot} />
              <span>Get In Touch</span>
              <span className={styles.badgeDot} />
            </div>

            {/* Heading */}
            <h2 id="consultation-heading" className={styles.sectionTitle}>
              Book Your Free IT Consultation.
            </h2>

            {/* Subtitle */}
            <p className={styles.sectionSubtitle}>
              Tell us what you need, and our team will help you plan the right IT for
              your business — simple, safe and stress-free.
            </p>

            {/* Consultation Form */}
            <form className={styles.consultForm} onSubmit={handleSubmit}>
              <div className={styles.inputRow}>
                <input
                  type="text"
                  required
                  placeholder="Full Name*"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={styles.textInput}
                  aria-label="Full Name"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone Number*"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={styles.textInput}
                  aria-label="Phone Number"
                />
              </div>

              <div className={styles.inputRow}>
                <input
                  type="email"
                  required
                  placeholder="Email Address*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.textInput}
                  aria-label="Email Address"
                />

                <div className={styles.selectWrapper}>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className={styles.selectInput}
                    aria-label="Service need support?"
                  >
                    <option value="">Which service do you need?</option>
                    <option value="it-infrastructure">IT Setup &amp; Infrastructure</option>
                    <option value="networking">Networking &amp; Cabling</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="cloud">Cloud &amp; Backups</option>
                    <option value="software">Software &amp; Automation</option>
                    <option value="managed-it">IT Support</option>
                    <option value="cctv">CCTV &amp; Security</option>
                    <option value="telephony">Phone &amp; Video Systems</option>
                    <option value="amc">Yearly IT Care (AMC)</option>
                  </select>
                  <span className={styles.selectChevron} aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M3 4.5L6 7.5L9 4.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <textarea
                rows={5}
                placeholder="Write your message here ..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={styles.textareaInput}
                aria-label="Write your message here"
              />

              <button type="submit" className={styles.submitMintBtn}>
                {submitted
                  ? "✓ Request Sent Successfully!"
                  : "Get My Free IT Advice"}
              </button>
            </form>
          </div>
        </div>

        {/* ==================== RIGHT COLUMN: SERVER ROOM PHOTO + TECH SHARDS ==================== */}
        <div className={styles.rightPhotoPanel}>
          <Image
            src="/images/company/team-group-2.jpg"
            alt="CATS Computers team at a technology partner event"
            fill
            sizes="(max-width: 992px) 100vw, 60vw"
            className={styles.rightPhoto}
          />

          {/* Bottom-Right Diagonal Geometric Shards & 7x2 Dot Matrix */}
          <div className={styles.bottomRightTechOverlay} aria-hidden="true">
            <svg
              className={styles.shardsSvg}
              viewBox="0 0 460 390"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Main Royal-Blue Diagonal Bar */}
              <path
                d="M460 10L115 390H250L460 158V10Z"
                fill="url(#consultShardBlue)"
                fillOpacity="0.88"
              />
              {/* Dark Navy & Emerald-Teal Lower Diagonal Wedge */}
              <path
                d="M460 145L235 390H415L460 340V145Z"
                fill="url(#consultShardDarkTeal)"
                fillOpacity="0.92"
              />
              {/* Inner Translucent Teal-Cyan Accent Bar */}
              <path
                d="M460 220L305 390H385L460 308V220Z"
                fill="rgba(45, 212, 191, 0.25)"
              />
              {/* Crisp White Diagonal Accent Lines */}
              <line
                x1="460"
                y1="-15"
                x2="415"
                y2="35"
                stroke="rgba(255, 255, 255, 0.7)"
                strokeWidth="1.2"
              />
              <line
                x1="448"
                y1="115"
                x2="198"
                y2="390"
                stroke="rgba(255, 255, 255, 0.85)"
                strokeWidth="1.3"
              />
              <line
                x1="452"
                y1="265"
                x2="338"
                y2="390"
                stroke="rgba(255, 255, 255, 0.85)"
                strokeWidth="1.3"
              />

              <defs>
                <linearGradient
                  id="consultShardBlue"
                  x1="420"
                  y1="40"
                  x2="150"
                  y2="380"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0e45cc" />
                  <stop offset="1" stopColor="#1b56db" stopOpacity="0.72" />
                </linearGradient>
                <linearGradient
                  id="consultShardDarkTeal"
                  x1="440"
                  y1="180"
                  x2="260"
                  y2="390"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#071d54" />
                  <stop offset="0.55" stopColor="#082c4c" />
                  <stop offset="1" stopColor="#051329" />
                </linearGradient>
              </defs>
            </svg>

            {/* 7x2 White Dot Matrix */}
            <div className={styles.dotMatrix}>
              {Array.from({ length: 14 }).map((_, i) => (
                <span key={i} className={styles.dotItem} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
