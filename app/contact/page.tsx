"use client";

import React, { useState } from "react";
import Image from "next/image";
import PageBanner from "@/components/PageBanner/PageBanner";
import { SERVICES_DATA } from "@/data/siteData";
import styles from "@/styles/InnerPages.module.css";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className={styles.pageMain}>
      <PageBanner
        eyebrow="GET IN TOUCH — BURDUBAI, DUBAI, UAE"
        title="Speak With Our Certified IT Engineers & Distribution Desk."
        subtitle="Whether you need a free on-site IT audit, an Annual Maintenance Contract (AMC) proposal, or wholesale Huawei eKit & Ruijie Reyee hardware pricing — our Dubai team responds within 30 minutes."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
        bgImage="/images/consultation-team.jpg"
        primaryCtaText="Call +971 4 227 3378"
        primaryCtaHref="tel:+97142273378"
        secondaryCtaText="Email info@catscomputers.com"
        secondaryCtaHref="mailto:info@catscomputers.com"
        metrics={[
          { value: "< 30m", label: "Proposal & Quote Turnaround" },
          { value: "< 15m", label: "Remote Helpdesk Response" },
          { value: "Burdubai", label: "Showroom & Warehouse Hub" },
          { value: "24/7", label: "AMC Emergency Support" },
        ]}
      />

      {/* ==================== 4 DIRECT CONTACT CARDS (WITH IMAGES) ==================== */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.grid4}>
            <div className={styles.mediaCard}>
              <div className={styles.mediaCardThumb} style={{ height: "160px" }}>
                <Image
                  src="/images/company/huawei-reception.jpg"
                  alt="CATS Computers Head Office & Showroom in Burdubai"
                  fill
                  sizes="(max-width: 992px) 100vw, 320px"
                  className={styles.mediaCardImg}
                />
                <span className={styles.mediaCardTopBadge}>Head Office &amp; Showroom</span>
              </div>
              <div className={styles.mediaCardBody} style={{ padding: "22px" }}>
                <div>
                  <h3 className={styles.cardTitleLight}>Burdubai, Dubai</h3>
                  <p className={styles.cardTextLight} style={{ marginBottom: 0 }}>
                    Office No #6, Water Tank Building, Al Musallah Street, Burdubai, Dubai, UAE — P.O. Box 118562
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.mediaCard}>
              <div className={styles.mediaCardThumb} style={{ height: "160px" }}>
                <Image
                  src="/images/consultation-team.jpg"
                  alt="Direct Phone & WhatsApp Engineering Desk"
                  fill
                  sizes="(max-width: 992px) 100vw, 320px"
                  className={styles.mediaCardImg}
                />
                <span className={styles.mediaCardTopBadge}>Direct Phone &amp; WhatsApp</span>
              </div>
              <div className={styles.mediaCardBody} style={{ padding: "22px" }}>
                <div>
                  <h3 className={styles.cardTitleLight}>Call Our Desk</h3>
                  <p className={styles.cardTextLight} style={{ marginBottom: 0 }}>
                    Landline:{" "}
                    <a href="tel:+97142273378" style={{ color: "#1254ff", fontWeight: 500 }}>
                      +971 4 227 3378
                    </a>
                    <br />
                    Mobile / WhatsApp:{" "}
                    <a href="tel:+971552273378" style={{ color: "#1254ff", fontWeight: 500 }}>
                      +971 55 227 3378
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.mediaCard}>
              <div className={styles.mediaCardThumb} style={{ height: "160px" }}>
                <Image
                  src="/images/company/ruijie-partner-lobby.jpg"
                  alt="Send Your BOQ & RFQ to CATS Computers"
                  fill
                  sizes="(max-width: 992px) 100vw, 320px"
                  className={styles.mediaCardImg}
                />
                <span className={styles.mediaCardTopBadge}>Email &amp; RFQs</span>
              </div>
              <div className={styles.mediaCardBody} style={{ padding: "22px" }}>
                <div>
                  <h3 className={styles.cardTitleLight}>Send Your BOQ</h3>
                  <p className={styles.cardTextLight} style={{ marginBottom: 0 }}>
                    Sales &amp; Support:{" "}
                    <a
                      href="mailto:info@catscomputers.com"
                      style={{ color: "#1254ff", fontWeight: 500 }}
                    >
                      info@catscomputers.com
                    </a>
                    <br />
                    Fast turnaround on project BOQs &amp; distributor quotes.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.mediaCard}>
              <div className={styles.mediaCardThumb} style={{ height: "160px" }}>
                <Image
                  src="/images/service-managed-it.jpg"
                  alt="24/7 AMC Emergency Support Desk"
                  fill
                  sizes="(max-width: 992px) 100vw, 320px"
                  className={styles.mediaCardImg}
                />
                <span className={styles.mediaCardTopBadge}>Working Hours</span>
              </div>
              <div className={styles.mediaCardBody} style={{ padding: "22px" }}>
                <div>
                  <h3 className={styles.cardTitleLight}>6 Days + 24/7 AMC</h3>
                  <p className={styles.cardTextLight} style={{ marginBottom: 0 }}>
                    Mon – Sat: 9:00 AM to 6:00 PM
                    <br />
                    <strong style={{ color: "#10b981" }}>
                      24/7 Emergency SLA Coverage for AMC Clients
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SPLIT FORM + SHOWROOM IMAGE & MAP ==================== */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <div className={styles.splitRow} style={{ alignItems: "stretch" }}>
            <form onSubmit={handleSubmit} className={styles.formCard}>
              <div className={styles.pillBadgeLight}>
                <span className={styles.pillDot} />
                <span>Request a Free Consultation or Quote</span>
              </div>
              <h2 className={styles.sectionTitleLight} style={{ fontSize: "28px" }}>
                Tell Us About Your IT Project or Hardware Requirement.
              </h2>
              <p className={styles.cardTextLight}>
                Fill out the form below and a certified CATS engineer or account manager will contact you promptly.
              </p>

              <div className={styles.formGrid2}>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Company Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Organization / Company"
                    className={styles.formInput}
                  />
                </div>
              </div>

              <div className={styles.formGrid2}>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.ae"
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 000 0000"
                    className={styles.formInput}
                  />
                </div>
              </div>

              <div className={styles.formGrid2}>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Service or Solution Needed *</label>
                  <select className={styles.formSelect} defaultValue={SERVICES_DATA[0].title}>
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
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Location in UAE</label>
                  <select className={styles.formSelect} defaultValue="Dubai">
                    <option value="Dubai">Dubai</option>
                    <option value="Abu Dhabi">Abu Dhabi</option>
                    <option value="Sharjah">Sharjah</option>
                    <option value="Ajman / Northern Emirates">
                      Ajman / Northern Emirates
                    </option>
                    <option value="International / GCC">International / GCC</option>
                  </select>
                </div>
              </div>

              <div className={styles.formField}>
                <label className={styles.formLabel}>Project Details or BOM List *</label>
                <textarea
                  required
                  placeholder="Share your office size, number of users, hardware models needed, or current IT challenges..."
                  className={styles.formTextarea}
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                <span>Send Inquiry to Dubai Desk</span>
                <span>→</span>
              </button>

              {submitted && (
                <div className={styles.successBanner}>
                  Thank you! Your inquiry has been logged with our Dubai engineering desk. For urgent assistance, call{" "}
                  <strong>+971 4 227 3378</strong>.
                </div>
              )}
            </form>

            {/* Showroom Image Card + Map */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div
                className={styles.mediaCard}
                style={{
                  background: "linear-gradient(160deg, #020924 0%, #071952 100%)",
                  borderColor: "rgba(96, 165, 250, 0.25)",
                }}
              >
                <div className={styles.mediaCardThumb} style={{ height: "190px" }}>
                  <Image
                    src="/images/company/huawei-ekit-team.jpg"
                    alt="CATS Computers Burdubai Showroom & Engineering Center"
                    fill
                    sizes="(max-width: 992px) 100vw, 560px"
                    className={styles.mediaCardImg}
                  />
                  <span className={styles.mediaCardTopBadge}>Authorized UAE Distribution Hub</span>
                </div>
                <div className={styles.mediaCardBody} style={{ padding: "26px 28px" }}>
                  <div>
                    <h3 className={styles.cardTitleDark} style={{ fontSize: "22px" }}>
                      Visit Our Burdubai Showroom &amp; Engineering Center
                    </h3>
                    <p className={styles.cardTextDark}>
                      Located in the heart of Dubai&apos;s IT district on Al Musallah Street, our facility houses live Huawei eKit &amp; Ruijie Reyee demo racks, pre-staging labs, and ready warehouse stock.
                    </p>
                    <ul className={styles.checkList} style={{ marginBottom: 0 }}>
                      <li className={styles.checkItemDark}>
                        <span className={styles.checkIcon}>✓</span>
                        <span>Same-day hardware pickup &amp; UAE-wide courier dispatch</span>
                      </li>
                      <li className={styles.checkItemDark}>
                        <span className={styles.checkIcon}>✓</span>
                        <span>Free on-site network &amp; CCTV site surveys across Dubai</span>
                      </li>
                      <li className={styles.checkItemDark}>
                        <span className={styles.checkIcon}>✓</span>
                        <span>Direct manufacturer warranty &amp; RMA desk</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                style={{
                  flex: 1,
                  minHeight: "280px",
                  borderRadius: "18px",
                  overflow: "hidden",
                  border: "1px solid rgba(15, 23, 42, 0.1)",
                  boxShadow: "0 16px 40px rgba(15, 23, 42, 0.08)",
                }}
              >
                <iframe
                  title="CATS Computers L.L.C — Al Musallah Street, Burdubai, Dubai"
                  src="https://www.google.com/maps?q=Al+Musallah+Street+Bur+Dubai+UAE&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "280px" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
