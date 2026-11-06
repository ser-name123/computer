"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SERVICES_DATA } from "@/data/siteData";
import styles from "./ContactPage.module.css";

const INQUIRY_MODES = [
  "Free Site Survey",
  "Hardware / BOQ Quote",
  "24/7 IT AMC Plan",
] as const;

const DEPARTMENTS = [
  {
    badge: "Pre-Sales & Surveys",
    title: "Turnkey Projects Desk",
    desc: "Book a complimentary floor-plan check in Dubai for office Wi-Fi, cabling, CCTV, or server room setup.",
  },
  {
    badge: "Wholesale Stock",
    title: "B2B Distribution Desk",
    desc: "Request dealer or bulk pricing for Huawei eKit, Ruijie Reyee, switches, firewalls, and servers.",
  },
  {
    badge: "24/7 SLA Support",
    title: "AMC Emergency Helpdesk",
    desc: "15-minute remote troubleshooting and 2-hour on-site field engineer dispatch for contracted clients.",
  },
  {
    badge: "LPOs & Billing",
    title: "Commercial & Accounts",
    desc: "Fast UAE VAT invoicing, vendor registration documents, trade license copies, and mutual NDAs.",
  },
];

export default function ContactPage() {
  const [mode, setMode] = useState<string>("Free Site Survey");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className={styles.contactPage}>
      {/* ==================== 1. SPLIT-SCREEN EXECUTIVE CONTACT COMMAND HERO ==================== */}
      <section className={styles.commandHero}>
        <div className={styles.container}>
          <div className={styles.commandGrid}>
            {/* Left Direct Channels & Showroom Preview */}
            <div>
              <div className={styles.statusBadge}>
                <span>● Burdubai Desk Online</span>
                <span>•</span>
                <span>Response Under 30 Minutes</span>
              </div>

              <h1 className={styles.heroTitle}>
                Speak Directly With Our Dubai Engineers &amp; Distribution Desk.
              </h1>

              <p className={styles.heroLead}>
                Whether you want a free on-site survey for your new office, an itemized Annual
                Maintenance Contract (AMC) quote, or ready stock from our Burdubai warehouse — reach
                out below.
              </p>

              <div className={styles.directChannelsStack}>
                <a href="tel:+97142273378" className={styles.channelBar}>
                  <div className={styles.channelIcon}>📞</div>
                  <div>
                    <span className={styles.channelTag}>Direct Landline &amp; Support Desk</span>
                    <span className={styles.channelVal}>+971 4 227 3378</span>
                    <span className={styles.channelSub}>
                      Mon – Sat (9:00 AM – 6:00 PM) • 24/7 AMC Emergency Line
                    </span>
                  </div>
                </a>

                <a href="tel:+971552273378" className={styles.channelBar}>
                  <div className={styles.channelIcon}>💬</div>
                  <div>
                    <span className={styles.channelTag}>Fast Mobile &amp; WhatsApp Desk</span>
                    <span className={styles.channelVal}>+971 55 227 3378</span>
                    <span className={styles.channelSub}>
                      Share your floor plan or hardware part numbers on WhatsApp
                    </span>
                  </div>
                </a>

                <a href="mailto:info@catscomputers.com" className={styles.channelBar}>
                  <div className={styles.channelIcon}>✉️</div>
                  <div>
                    <span className={styles.channelTag}>Send BOQ / RFQ by Email</span>
                    <span className={styles.channelVal}>info@catscomputers.com</span>
                    <span className={styles.channelSub}>
                      Itemized UAE Dirham (AED) quotation within 30–60 minutes
                    </span>
                  </div>
                </a>
              </div>

              <div className={styles.showroomMiniBanner}>
                <div className={styles.showroomMiniPhoto}>
                  <Image
                    src="/images/company/huawei-reception.jpg"
                    alt="CATS Computers Burdubai Showroom"
                    fill
                    sizes="140px"
                    className={styles.coverImg}
                  />
                </div>
                <div>
                  <strong style={{ display: "block", fontSize: "14.5px", marginBottom: "4px" }}>
                    Visit Our Burdubai Showroom &amp; Lab
                  </strong>
                  <span style={{ fontSize: "13px", color: "#cbd5e1", lineHeight: 1.45 }}>
                    Office No #6, Water Tank Building, Al Musallah Street, Burdubai, Dubai, UAE
                  </span>
                </div>
              </div>
            </div>

            {/* Right Interactive 3-Mode Inquiry Form Card */}
            <form onSubmit={handleSubmit} className={styles.inquiryCard}>
              <div className={styles.modeTabs}>
                {INQUIRY_MODES.map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => {
                      setMode(m);
                      setSubmitted(false);
                    }}
                    className={`${styles.modeTabBtn} ${
                      mode === m ? styles.modeTabBtnActive : ""
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>

              <h2 className={styles.formTitle}>Request Your {mode}</h2>
              <p className={styles.formSub}>
                Fill in your details below and a senior engineer in Burdubai will call or email you
                shortly.
              </p>

              <div className={styles.row2}>
                <div>
                  <label className={styles.label}>Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className={styles.input}
                  />
                </div>
                <div>
                  <label className={styles.label}>Company Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your company in UAE"
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.row2}>
                <div>
                  <label className={styles.label}>Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.ae"
                    className={styles.input}
                  />
                </div>
                <div>
                  <label className={styles.label}>Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 000 0000"
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.row2}>
                <div>
                  <label className={styles.label}>Primary Service Needed</label>
                  <select className={styles.select} defaultValue={SERVICES_DATA[0].title}>
                    {SERVICES_DATA.map((s) => (
                      <option key={s.slug} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Wholesale Hardware Quote">
                      Wholesale Hardware Distribution Quote
                    </option>
                  </select>
                </div>
                <div>
                  <label className={styles.label}>Location in UAE</label>
                  <select className={styles.select} defaultValue="Dubai">
                    <option value="Dubai">Dubai</option>
                    <option value="Abu Dhabi">Abu Dhabi</option>
                    <option value="Sharjah">Sharjah</option>
                    <option value="Northern Emirates">Ajman / Northern Emirates</option>
                  </select>
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>
                  Tell Us About Your Office Size or Requirement *
                </label>
                <textarea
                  required
                  placeholder="Share number of staff, Wi-Fi/CCTV/server needs, or part numbers..."
                  className={styles.textarea}
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                Send {mode} Request to Dubai Desk →
              </button>

              {submitted && (
                <div className={styles.confirmBox}>
                  ✓ Thank you! Your <strong>{mode}</strong> request has been logged with our
                  Burdubai engineering desk. For urgent help, call{" "}
                  <strong>+971 4 227 3378</strong>.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ==================== 2. BURDUBAI SHOWROOM & MAP HUB ==================== */}
      <section className={styles.mapHubSection}>
        <div className={styles.container}>
          <div className={styles.mapHubCard}>
            <div className={styles.mapInfoSide}>
              <div>
                <span className={styles.deptBadge}>Headquarters &amp; Warehouse</span>
                <h2 style={{ fontSize: "28px", fontWeight: 600, margin: "0 0 10px" }}>
                  Visit Us on Al Musallah Street, Burdubai.
                </h2>
                <p style={{ fontSize: "15px", lineHeight: 1.68, color: "#475569", margin: 0 }}>
                  Come see live Huawei eKit &amp; Ruijie Reyee demo racks, pick up hardware orders on
                  the same day, or sit down with our project engineers over coffee.
                </p>

                <div className={styles.mapDirectionsGrid}>
                  <div className={styles.directionBox}>
                    <strong>📍 Building &amp; Street</strong>
                    <span>Office No #6, Water Tank Building, Al Musallah St, Burdubai</span>
                  </div>
                  <div className={styles.directionBox}>
                    <strong>🚇 Nearest Metro</strong>
                    <span>Walking distance from Sharaf DG &amp; Al Fahidi Metro Stations</span>
                  </div>
                  <div className={styles.directionBox}>
                    <strong>🕘 Showroom Hours</strong>
                    <span>Monday to Saturday: 9:00 AM – 6:00 PM</span>
                  </div>
                  <div className={styles.directionBox}>
                    <strong>🚚 UAE Dispatch</strong>
                    <span>Same-day Dubai delivery &amp; next-day courier across UAE</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.mapFrameSide}>
              <iframe
                title="CATS Computers L.L.C — Al Musallah Street, Burdubai, Dubai"
                src="https://www.google.com/maps?q=Al+Musallah+Street+Bur+Dubai+UAE&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "420px" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3. 4-DEPARTMENT DIRECTORY ==================== */}
      <section className={styles.deptSection}>
        <div className={styles.container}>
          <div className={styles.deptGrid}>
            {DEPARTMENTS.map((d) => (
              <div key={d.title} className={styles.deptCard}>
                <span className={styles.deptBadge}>{d.badge}</span>
                <h3 className={styles.deptTitle}>{d.title}</h3>
                <p className={styles.deptDesc}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
