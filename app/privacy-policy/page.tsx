"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner/CtaBanner";
import styles from "@/styles/AdvancedLegalFaq.module.css";

const PRIVACY_SECTIONS = [
  { id: "sec-01", num: "01", label: "Scope & Corporate Identity" },
  { id: "sec-02", num: "02", label: "Categories of Data Collected" },
  { id: "sec-03", num: "03", label: "Data Usage & OEM Matrix" },
  { id: "sec-04", num: "04", label: "AMC & Network Confidentiality" },
  { id: "sec-05", num: "05", label: "Data Retention & Encryption" },
  { id: "sec-06", num: "06", label: "Your UAE Data Rights & DPO" },
];

export default function PrivacyPolicyPage() {
  const [activeId, setActiveId] = useState("sec-01");

  const scrollToSection = (id: string) => {
    setActiveId(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className={styles.pageWrapper}>
      <section className={styles.privacyVaultHero}>
        <div className={styles.privacyHeroGrid}>
          <div>
            <div className={styles.faqHeroBadge}>
              <span>🛡️ UAE Federal Decree-Law No. 45 Aligned</span>
            </div>
            <h1 className={styles.faqHeroTitle} style={{ textAlign: "left" }}>
              Enterprise Privacy &amp; Network Data Protection Vault.
            </h1>
            <p className={styles.faqHeroSub} style={{ textAlign: "left", marginBottom: 0 }}>
              How CATS Computers L.L.C safeguards your company floor plans, server credentials,
              commercial BOQs, and personal data under strict mutual NDA and AES-256 encryption.
            </p>
          </div>

          <div className={styles.privacyVaultCard}>
            <div style={{ fontSize: "12px", textTransform: "uppercase", color: "#6ee7b7", marginBottom: "10px" }}>
              ● Security &amp; Confidentiality Status
            </div>
            <h2 style={{ fontSize: "20px", fontWeight: 600, margin: "0 0 12px" }}>
              100% Zero-Monetization &amp; NDA Protection
            </h2>
            <p style={{ fontSize: "13.5px", color: "#cbd5e1", lineHeight: 1.6, margin: "0 0 16px" }}>
              All client network topologies, IP tables, and AMC credentials are stored inside an
              encrypted Dubai vault and never shared with external marketers.
            </p>
            <Link href="/contact" className={styles.sidebarBtn}>
              <span>Request a Signed Mutual NDA</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== TOP 4 GLASSMORPHIC TRUST CARDS ==================== */}
      <section className={styles.trustStripSection}>
        <div className={styles.trustStripContainer}>
          <div className={styles.trustCard}>
            <div className={styles.trustIconBox}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3L4 6.5V11.8C4 16.8 7.4 20.9 12 22C16.6 20.9 20 16.8 20 11.8V6.5L12 3Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="M9 12.2L11 14.2L15.2 10"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className={styles.trustCardBody}>
              <span className={styles.trustCardBadge}>Strict Confidentiality</span>
              <h3 className={styles.trustCardTitle}>NDA-Backed Topologies</h3>
              <p className={styles.trustCardDesc}>
                All client floor plans, IP schemas, and firewall rules are protected under strict non-disclosure protocols.
              </p>
            </div>
          </div>

          <div className={styles.trustCard}>
            <div className={styles.trustIconBox}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect x="4" y="11" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
                <path d="M8 11V7a4 4 0 018 0v4" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </div>
            <div className={styles.trustCardBody}>
              <span className={styles.trustCardBadge}>Zero Monetization</span>
              <h3 className={styles.trustCardTitle}>No Data Selling Ever</h3>
              <p className={styles.trustCardDesc}>
                We never sell, rent, or trade corporate contact lists, BOQs, or client telemetry to external marketers.
              </p>
            </div>
          </div>

          <div className={styles.trustCard}>
            <div className={styles.trustIconBox}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
            <div className={styles.trustCardBody}>
              <span className={styles.trustCardBadge}>Audited Support</span>
              <h3 className={styles.trustCardTitle}>Consent-Only Remote SLA</h3>
              <p className={styles.trustCardDesc}>
                AMC remote troubleshooting sessions require explicit user approval and are logged for security.
              </p>
            </div>
          </div>

          <div className={styles.trustCard}>
            <div className={styles.trustIconBox}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12 2.8L14.6 8L20.3 8.8L16.2 12.8L17.2 18.5L12 15.8L6.8 18.5L7.8 12.8L3.7 8.8L9.4 8L12 2.8Z" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </div>
            <div className={styles.trustCardBody}>
              <span className={styles.trustCardBadge}>UAE PDPL Aligned</span>
              <h3 className={styles.trustCardTitle}>Federal Decree-Law No. 45</h3>
              <p className={styles.trustCardDesc}>
                Designed around United Arab Emirates Personal Data Protection Law and DIFC/ADGM best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 2-COLUMN INTERACTIVE WORKSPACE ==================== */}
      <section className={styles.workspaceSection}>
        <div className={styles.workspaceContainer}>
          {/* Left Sticky Sidebar */}
          <aside className={styles.stickySidebar}>
            <div className={styles.navPanel}>
              <div className={styles.navPanelHeader}>
                <span className={styles.navPanelTitle}>Policy Navigation</span>
                <span className={styles.versionPill}>v4.2 • Oct 2026</span>
              </div>
              <ul className={styles.tocList}>
                {PRIVACY_SECTIONS.map((sec) => (
                  <li key={sec.id}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(sec.id)}
                      className={`${styles.tocLink} ${
                        activeId === sec.id ? styles.tocLinkActive : ""
                      }`}
                    >
                      <span className={styles.tocLeft}>
                        <span className={styles.tocNum}>{sec.num}</span>
                        <span>{sec.label}</span>
                      </span>
                      <span>→</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.sidebarDarkCard}>
              <div className={styles.sidebarMediaWrap}>
                <Image
                  src="/images/card-cybersecurity.jpg"
                  alt="CATS Computers Data Protection & NDA Desk"
                  fill
                  sizes="320px"
                  className={styles.sidebarMediaImg}
                />
              </div>
              <div className={styles.sidebarStatusRow}>
                <span className={styles.livePulse} />
                <span>Dubai Data Compliance Desk</span>
              </div>
              <h3 className={styles.sidebarDarkTitle}>
                Need a Signed Mutual NDA Before Sharing Your Floor Plan?
              </h3>
              <p className={styles.sidebarDarkText}>
                Our Burdubai legal and pre-sales engineering desk executes standard or custom Non-Disclosure Agreements within 2 business hours.
              </p>
              <div className={styles.sidebarContactList}>
                <div className={styles.sidebarContactItem}>
                  <span>📞</span>
                  <span>+971 4 227 3378</span>
                </div>
                <div className={styles.sidebarContactItem}>
                  <span>✉️</span>
                  <span>info@catscomputers.com</span>
                </div>
                <div className={styles.sidebarContactItem}>
                  <span>📍</span>
                  <span>Al Musallah St, Burdubai, Dubai</span>
                </div>
              </div>
              <Link href="/contact" className={styles.sidebarBtn}>
                <span>Request NDA or Audit</span>
                <span>→</span>
              </Link>
            </div>
          </aside>

          {/* Right Clause Cards Stream */}
          <div className={styles.contentStream}>
            {/* SECTION 01 */}
            <article id="sec-01" className={styles.clauseCard}>
              <div className={styles.clauseHeader}>
                <div className={styles.clauseHeaderLeft}>
                  <span className={styles.clauseNumBox}>01</span>
                  <div>
                    <span className={styles.clauseCategoryTag}>Corporate Governance</span>
                    <h2 className={styles.clauseTitle}>Scope &amp; Corporate Identity</h2>
                  </div>
                </div>
                <span className={styles.clauseBadge}>Mandatory Scope</span>
              </div>
              <p className={styles.clauseParagraph}>
                CATS Computers L.L.C (&ldquo;CATS Computers&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), registered in the Emirate of Dubai and headquartered at <strong>Office No #6, Water Tank Building, Al Musallah Street, Burdubai, Dubai, United Arab Emirates (P.O. Box 118562)</strong>, respects your privacy and is committed to protecting all corporate and personal information processed across our operations.
              </p>
              <p className={styles.clauseParagraph} style={{ marginBottom: 0 }}>
                This policy governs data collected through our website, B2B distribution portal, pre-sales site surveys, turnkey IT infrastructure deployments, and 24/7 Annual Maintenance Contract (AMC) operations across the UAE.
              </p>
            </article>

            {/* SECTION 02 */}
            <article id="sec-02" className={styles.clauseCard}>
              <div className={styles.clauseHeader}>
                <div className={styles.clauseHeaderLeft}>
                  <span className={styles.clauseNumBox}>02</span>
                  <div>
                    <span className={styles.clauseCategoryTag}>Data Inventory</span>
                    <h2 className={styles.clauseTitle}>Categories of Information We Collect</h2>
                  </div>
                </div>
                <span className={styles.clauseBadge}>Minimized Collection</span>
              </div>
              <p className={styles.clauseParagraph}>
                We adhere to the principle of data minimization — collecting only the specific business and technical data required to design, supply, and support your enterprise IT environment:
              </p>

              <div className={styles.clauseSubGrid}>
                <div className={styles.clauseSubBox}>
                  <div className={styles.clauseSubTitle}>
                    <span className={styles.clauseSubDot} />
                    <span>B2B Contact &amp; Commercial Data</span>
                  </div>
                  <p className={styles.clauseSubText}>
                    Full name, designation, company name, trade license details (for credit/reseller onboarding), work email, and UAE telephone/WhatsApp numbers.
                  </p>
                </div>

                <div className={styles.clauseSubBox}>
                  <div className={styles.clauseSubTitle}>
                    <span className={styles.clauseSubDot} />
                    <span>Site Survey &amp; Architecture Data</span>
                  </div>
                  <p className={styles.clauseSubText}>
                    CAD floor plans, rack layouts, VLAN/IP addressing tables, and bill of quantities (BOQs) shared for project engineering.
                  </p>
                </div>

                <div className={styles.clauseSubBox}>
                  <div className={styles.clauseSubTitle}>
                    <span className={styles.clauseSubDot} />
                    <span>AMC &amp; System Health Telemetry</span>
                  </div>
                  <p className={styles.clauseSubText}>
                    Server disk SMART status, UPS load metrics, firewall uptime alerts, and backup completion logs for contracted AMC clients.
                  </p>
                </div>

                <div className={styles.clauseSubBox}>
                  <div className={styles.clauseSubTitle}>
                    <span className={styles.clauseSubDot} />
                    <span>Recruitment &amp; Career Profiles</span>
                  </div>
                  <p className={styles.clauseSubText}>
                    Candidate CVs, technical certification records, and employment history submitted via our Dubai Careers portal.
                  </p>
                </div>
              </div>
            </article>

            {/* SECTION 03 */}
            <article id="sec-03" className={styles.clauseCard}>
              <div className={styles.clauseHeader}>
                <div className={styles.clauseHeaderLeft}>
                  <span className={styles.clauseNumBox}>03</span>
                  <div>
                    <span className={styles.clauseCategoryTag}>Transparency Matrix</span>
                    <h2 className={styles.clauseTitle}>How We Process Data &amp; OEM Warranty Sharing</h2>
                  </div>
                </div>
                <span className={styles.clauseBadge}>Zero Ad-Tracking</span>
              </div>
              <p className={styles.clauseParagraph}>
                As an Authorized Huawei eKit Elite Distribution Partner, Ruijie Reyee Golden Distributor, and multi-vendor integrator, certain B2B license activations require registering end-user organization details directly with the manufacturer:
              </p>

              <div className={styles.matrixTableWrap}>
                <table className={styles.matrixTable}>
                  <thead>
                    <tr>
                      <th>Data Category</th>
                      <th>Primary Purpose</th>
                      <th>Authorized Sharing Scope</th>
                      <th>Protection Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Client Contact &amp; RFQ</strong></td>
                      <td>BOQ Quotation, LPO Invoicing &amp; Delivery</td>
                      <td>Internal CATS Sales &amp; Logistics Only</td>
                      <td><span className={styles.slaPillFast}>Encrypted CRM</span></td>
                    </tr>
                    <tr>
                      <td><strong>OEM License / Serial Info</strong></td>
                      <td>Official UAE Warranty &amp; UTM Activation</td>
                      <td>Huawei, Ruijie, Fortinet, Sophos, Microsoft, Dell/HP</td>
                      <td><span className={styles.slaPillFast}>Vendor Portal SSL</span></td>
                    </tr>
                    <tr>
                      <td><strong>Network Diagrams &amp; Configs</strong></td>
                      <td>Turnkey Commissioning &amp; 24/7 AMC Support</td>
                      <td>Assigned L2/L3 CATS Engineers Only</td>
                      <td><span className={styles.slaPillFast}>AES-256 Vault</span></td>
                    </tr>
                    <tr>
                      <td><strong>CCTV &amp; Biometric Logs</strong></td>
                      <td>On-Premise Client Physical Security</td>
                      <td>Stored 100% on Client NVR/Server (Zero Cloud Copy)</td>
                      <td><span className={styles.slaPillFast}>Client Air-Gapped</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>

            {/* SECTION 04 */}
            <article id="sec-04" className={styles.clauseCard}>
              <div className={styles.clauseHeader}>
                <div className={styles.clauseHeaderLeft}>
                  <span className={styles.clauseNumBox}>04</span>
                  <div>
                    <span className={styles.clauseCategoryTag}>Managed Services Security</span>
                    <h2 className={styles.clauseTitle}>AMC Remote Support &amp; Credential Vaulting</h2>
                  </div>
                </div>
                <span className={styles.clauseBadge}>ISO / Zero-Trust Aligned</span>
              </div>
              <p className={styles.clauseParagraph}>
                When CATS Computers L.L.C manages your IT infrastructure under an Annual Maintenance Contract (AMC), we enforce strict operational security controls:
              </p>
              <div className={styles.calloutAlert}>
                <div className={styles.calloutText}>
                  <strong>Security Protocol:</strong> Administrative credentials for client firewalls, domain controllers, and cloud tenants are stored exclusively in an encrypted, MFA-protected enterprise password vault with role-based access logs. Remote desktop sessions (AnyDesk / TeamViewer Enterprise / VPN) are initiated only upon ticket creation and client consent.
                </div>
              </div>
            </article>

            {/* SECTION 05 */}
            <article id="sec-05" className={styles.clauseCard}>
              <div className={styles.clauseHeader}>
                <div className={styles.clauseHeaderLeft}>
                  <span className={styles.clauseNumBox}>05</span>
                  <div>
                    <span className={styles.clauseCategoryTag}>Lifecycle Governance</span>
                    <h2 className={styles.clauseTitle}>Data Retention &amp; Secure Disposal</h2>
                  </div>
                </div>
                <span className={styles.clauseBadge}>DoD 5220.22-M Wipe</span>
              </div>
              <p className={styles.clauseParagraph} style={{ marginBottom: 0 }}>
                Commercial tax invoices and LPO records are retained for the statutory period mandated by UAE Federal Tax Authority (FTA) regulations. Upon termination or completion of an AMC contract, all vaulted administrative credentials and topology documentation are handed over to the client&apos;s designated IT representative and purged from our active support systems. When decommissioning legacy client servers or hard drives, we offer certified multi-pass cryptographic data sanitization.
              </p>
            </article>

            {/* SECTION 06 */}
            <article id="sec-06" className={styles.clauseCard}>
              <div className={styles.clauseHeader}>
                <div className={styles.clauseHeaderLeft}>
                  <span className={styles.clauseNumBox}>06</span>
                  <div>
                    <span className={styles.clauseCategoryTag}>Data Subject Rights</span>
                    <h2 className={styles.clauseTitle}>Your Rights &amp; Dubai Compliance Contact</h2>
                  </div>
                </div>
                <span className={styles.clauseBadge}>Direct Escalation</span>
              </div>
              <p className={styles.clauseParagraph}>
                Under UAE data protection principles, you have the right to request a copy of the corporate or personal contact data we hold, request immediate correction of inaccurate records, or revoke marketing communications at any time.
              </p>
              <div className={styles.clauseSubGrid} style={{ marginBottom: 0 }}>
                <div className={styles.clauseSubBox}>
                  <div className={styles.clauseSubTitle}>
                    <span className={styles.clauseSubDot} />
                    <span>Headquarters Address</span>
                  </div>
                  <p className={styles.clauseSubText}>
                    Office No #6, Water Tank Building, Al Musallah Street, Burdubai, Dubai, UAE — P.O. Box 118562
                  </p>
                </div>
                <div className={styles.clauseSubBox}>
                  <div className={styles.clauseSubTitle}>
                    <span className={styles.clauseSubDot} />
                    <span>Compliance &amp; Legal Desk</span>
                  </div>
                  <p className={styles.clauseSubText}>
                    Email: <strong>info@catscomputers.com</strong>
                    <br />
                    Telephone: <strong>+971 4 227 3378</strong>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
