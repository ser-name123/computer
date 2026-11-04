"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner/PageBanner";
import CtaBanner from "@/components/CtaBanner/CtaBanner";
import styles from "@/styles/AdvancedLegalFaq.module.css";

const TERMS_SECTIONS = [
  { id: "terms-01", num: "01", label: "Scope & Commercial Agreement" },
  { id: "terms-02", num: "02", label: "Quotations, LPOs & Billing" },
  { id: "terms-03", num: "03", label: "Hardware Supply & OEM Warranties" },
  { id: "terms-04", num: "04", label: "Turnkey Project Execution" },
  { id: "terms-05", num: "05", label: "IT AMC & SLA Response Matrix" },
  { id: "terms-06", num: "06", label: "Liability & UAE Governing Law" },
];

export default function TermsAndConditionsPage() {
  const [activeId, setActiveId] = useState("terms-01");

  const scrollToSection = (id: string) => {
    setActiveId(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className={styles.pageWrapper}>
      <PageBanner
        eyebrow="COMMERCIAL & SLA GOVERNANCE — DUBAI, UAE"
        title="Enterprise Terms & Conditions."
        subtitle="Clear, transparent commercial terms governing authorized hardware supply, turnkey IT project execution, and 24/7 Annual Maintenance Contracts (AMC) across Dubai and the UAE."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms & Conditions" },
        ]}
        bgImage="/images/case-study-boardroom.jpg"
        primaryCtaText="Request Custom AMC / SOW"
        primaryCtaHref="/contact"
        secondaryCtaText="View Privacy Policy"
        secondaryCtaHref="/privacy-policy"
        metrics={[
          { value: "100%", label: "Genuine OEM Warranty" },
          { value: "< 15m", label: "Remote SLA Target" },
          { value: "Fluke", label: "Certified Handover" },
          { value: "Dubai", label: "Governing Jurisdiction" },
        ]}
      />

      {/* ==================== TOP 4 GLASSMORPHIC COMMERCIAL HIGHLIGHT CARDS ==================== */}
      <section className={styles.trustStripSection}>
        <div className={styles.trustStripContainer}>
          <div className={styles.trustCard}>
            <div className={styles.trustIconBox}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                <path d="M20 7h-9" />
                <path d="M14 17H5" />
                <circle cx="17" cy="17" r="3" />
                <circle cx="7" cy="7" r="3" />
              </svg>
            </div>
            <div className={styles.trustCardBody}>
              <span className={styles.trustCardBadge}>Authorized Supply</span>
              <h3 className={styles.trustCardTitle}>100% Genuine UAE Channels</h3>
              <p className={styles.trustCardDesc}>
                All hardware is sourced strictly through authorized Middle East distributor channels with official vendor warranties.
              </p>
            </div>
          </div>

          <div className={styles.trustCard}>
            <div className={styles.trustIconBox}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <div className={styles.trustCardBody}>
              <span className={styles.trustCardBadge}>Turnkey Standard</span>
              <h3 className={styles.trustCardTitle}>Fluke Certified Sign-Off</h3>
              <p className={styles.trustCardDesc}>
                Structured cabling and server room deployments include formal Fluke test reports and network topology diagrams.
              </p>
            </div>
          </div>

          <div className={styles.trustCard}>
            <div className={styles.trustIconBox}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                <circle cx="12" cy="12" r="9" />
                <polyline points="12 7 12 12 15 14" />
              </svg>
            </div>
            <div className={styles.trustCardBody}>
              <span className={styles.trustCardBadge}>Guaranteed Uptime</span>
              <h3 className={styles.trustCardTitle}>24/7 SLA Response Matrix</h3>
              <p className={styles.trustCardDesc}>
                Backed by &lt;15-minute remote triage and rapid on-site engineer dispatch across Dubai commercial zones.
              </p>
            </div>
          </div>

          <div className={styles.trustCard}>
            <div className={styles.trustIconBox}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div className={styles.trustCardBody}>
              <span className={styles.trustCardBadge}>Legal Framework</span>
              <h3 className={styles.trustCardTitle}>UAE Commercial Law</h3>
              <p className={styles.trustCardDesc}>
                All LPOs, SOWs, and Master Service Agreements are governed by the laws of the Emirate of Dubai and the UAE.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MAIN 2-COLUMN WORKSPACE ==================== */}
      <section className={styles.workspaceSection}>
        <div className={styles.workspaceContainer}>
          {/* Left Sticky Sidebar */}
          <aside className={styles.stickySidebar}>
            <div className={styles.navPanel}>
              <div className={styles.navPanelHeader}>
                <span className={styles.navPanelTitle}>Contractual Index</span>
                <span className={styles.versionPill}>MSA v4.2</span>
              </div>
              <ul className={styles.tocList}>
                {TERMS_SECTIONS.map((sec) => (
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
                  src="/images/company/huawei-ekit-award.jpg"
                  alt="CATS Computers Authorized Commercial & AMC Desk"
                  fill
                  sizes="320px"
                  className={styles.sidebarMediaImg}
                />
              </div>
              <div className={styles.sidebarStatusRow}>
                <span className={styles.livePulse} />
                <span>Commercial &amp; AMC Desk</span>
              </div>
              <h3 className={styles.sidebarDarkTitle}>
                Need a Custom Master Service Agreement or LPO Registration?
              </h3>
              <p className={styles.sidebarDarkText}>
                Our commercial desk works directly with UAE procurement and legal teams for custom SLAs, vendor onboarding, and multi-branch AMC contracts.
              </p>
              <div className={styles.sidebarContactList}>
                <div className={styles.sidebarContactItem}>
                  <span>✉</span>
                  <span>info@catscomputers.com</span>
                </div>
                <div className={styles.sidebarContactItem}>
                  <span>☎</span>
                  <span>+971 4 227 3378 (Burdubai Desk)</span>
                </div>
                <div className={styles.sidebarContactItem}>
                  <span>✓</span>
                  <span>UAE TRN &amp; Trade License Ready</span>
                </div>
              </div>
              <Link href="/contact" className={styles.sidebarBtn}>
                <span>Request Custom AMC / SOW</span>
                <span>→</span>
              </Link>
            </div>
          </aside>

          {/* Right Detailed Clauses Stream */}
          <div className={styles.contentStream}>
            {/* Clause 01 */}
            <article id="terms-01" className={styles.clauseCard}>
              <div className={styles.clauseHeader}>
                <div className={styles.clauseHeaderLeft}>
                  <div className={styles.clauseNumBox}>01</div>
                  <div>
                    <span className={styles.clauseCategoryTag}>Contractual Hierarchy</span>
                    <h2 className={styles.clauseTitle}>Scope of Services &amp; Agreement Structure</h2>
                  </div>
                </div>
                <span className={styles.clauseBadge}>Binding B2B Framework</span>
              </div>

              <div className={styles.clauseFeatureBanner}>
                <Image
                  src="/images/hero-huawei-elite.jpg"
                  alt="CATS Computers Enterprise IT & Distribution Scope"
                  fill
                  sizes="(max-width: 992px) 100vw, 900px"
                  className={styles.clauseFeatureImg}
                />
                <div className={styles.clauseFeatureOverlay}>
                  <span className={styles.clauseFeatureBadge}>Dubai &amp; UAE Operations</span>
                  <span className={styles.clauseFeatureCaption}>
                    Authorized Hardware Supply, Turnkey Infrastructure Projects &amp; 24/7 Managed IT AMC
                  </span>
                </div>
              </div>

              <p className={styles.clauseParagraph}>
                These Terms &amp; Conditions govern the use of the <strong>CATS Computers L.L.C</strong> (Computer Accessories &amp; Technical Services) website and establish the baseline commercial framework for all hardware distribution, turnkey IT infrastructure deployments, and Annual Maintenance Contracts (AMC) across the United Arab Emirates.
              </p>

              <div className={styles.clauseSubGrid}>
                <div className={styles.clauseSubBox}>
                  <h3 className={styles.clauseSubTitle}>
                    <span className={styles.clauseSubDot} />
                    Order of Precedence
                  </h3>
                  <p className={styles.clauseSubText}>
                    Where a client executes a signed Master Service Agreement (MSA), IT AMC Contract, or Project Statement of Work (SOW), the specific provisions in that signed document take precedence over these general terms.
                  </p>
                </div>
                <div className={styles.clauseSubBox}>
                  <h3 className={styles.clauseSubTitle}>
                    <span className={styles.clauseSubDot} />
                    LPO &amp; Quotation Acceptance
                  </h3>
                  <p className={styles.clauseSubText}>
                    Issuance of a formal Local Purchase Order (LPO) or written acceptance of a CATS Computers commercial quotation constitutes binding acceptance of these Terms &amp; Conditions.
                  </p>
                </div>
              </div>
            </article>

            {/* Clause 02 */}
            <article id="terms-02" className={styles.clauseCard}>
              <div className={styles.clauseHeader}>
                <div className={styles.clauseHeaderLeft}>
                  <div className={styles.clauseNumBox}>02</div>
                  <div>
                    <span className={styles.clauseCategoryTag}>Commercial &amp; Procurement</span>
                    <h2 className={styles.clauseTitle}>Quotations, LPOs &amp; Payment Milestones</h2>
                  </div>
                </div>
                <span className={styles.clauseBadge}>AED • UAE VAT Compliant</span>
              </div>

              <p className={styles.clauseParagraph}>
                Because enterprise networking, server storage, and licensing pricing depend on global vendor allocations and authorized distributor stock in Dubai, all commercial proposals follow clear validity and mobilization milestones:
              </p>

              <div className={styles.clauseSubGrid}>
                <div className={styles.clauseSubBox}>
                  <h3 className={styles.clauseSubTitle}>
                    <span className={styles.clauseSubDot} />
                    14-Day Quotation Validity
                  </h3>
                  <p className={styles.clauseSubText}>
                    Unless explicitly stated otherwise on the commercial proforma, quotations are valid for 14 calendar days and remain subject to distributor stock availability at LPO receipt.
                  </p>
                </div>
                <div className={styles.clauseSubBox}>
                  <h3 className={styles.clauseSubTitle}>
                    <span className={styles.clauseSubDot} />
                    5% UAE VAT Invoicing
                  </h3>
                  <p className={styles.clauseSubText}>
                    All prices are quoted in UAE Dirhams (AED) and are subject to the statutory 5% UAE Value Added Tax (VAT), itemized separately on official Federal Tax Invoices.
                  </p>
                </div>
                <div className={styles.clauseSubBox}>
                  <h3 className={styles.clauseSubTitle}>
                    <span className={styles.clauseSubDot} />
                    Project Mobilization Milestones
                  </h3>
                  <p className={styles.clauseSubText}>
                    Turnkey infrastructure projects require an advance mobilization milestone upon LPO issuance, progress billing upon hardware delivery, and final settlement upon sign-off.
                  </p>
                </div>
                <div className={styles.clauseSubBox}>
                  <h3 className={styles.clauseSubTitle}>
                    <span className={styles.clauseSubDot} />
                    Title &amp; Ownership Retention
                  </h3>
                  <p className={styles.clauseSubText}>
                    Legal title to supplied hardware, licenses, and equipment remains vested in CATS Computers L.L.C until full and final settlement of the corresponding Tax Invoice.
                  </p>
                </div>
              </div>
            </article>

            {/* Clause 03 */}
            <article id="terms-03" className={styles.clauseCard}>
              <div className={styles.clauseHeader}>
                <div className={styles.clauseHeaderLeft}>
                  <div className={styles.clauseNumBox}>03</div>
                  <div>
                    <span className={styles.clauseCategoryTag}>Authorized Distribution</span>
                    <h2 className={styles.clauseTitle}>Hardware Supply, RMA &amp; Official OEM Warranties</h2>
                  </div>
                </div>
                <span className={styles.clauseBadge}>30+ Global Vendors</span>
              </div>

              <p className={styles.clauseParagraph}>
                As an official partner for 30+ global technology brands — including <strong>Huawei eKit, Ruijie / Reyee, Cisco, Fortinet, Sophos, Dell, HP, Lenovo, Hikvision, and Dahua</strong> — CATS Computers supplies 100% genuine UAE-channel hardware.
              </p>

              <div className={styles.clauseSubGrid}>
                <div className={styles.clauseSubBox}>
                  <h3 className={styles.clauseSubTitle}>
                    <span className={styles.clauseSubDot} />
                    Manufacturer RMA Coverage
                  </h3>
                  <p className={styles.clauseSubText}>
                    All hardware carries the official manufacturer warranty (1-year, 3-year, or 5-year NBD/Return-to-Bench depending on SKU). We assist AMC clients with end-to-end RMA logging.
                  </p>
                </div>
                <div className={styles.clauseSubBox}>
                  <h3 className={styles.clauseSubTitle}>
                    <span className={styles.clauseSubDot} />
                    Custom CTO &amp; Licensing Orders
                  </h3>
                  <p className={styles.clauseSubText}>
                    Configure-to-Order (CTO) servers, special-import fiber switches, and activated software/firewall subscriptions (FortiGuard, Sophos, Microsoft 365) are non-refundable once provisioned.
                  </p>
                </div>
              </div>

              <div className={styles.calloutAlert}>
                <p className={styles.calloutText}>
                  <strong>Warranty Exclusions:</strong> OEM warranties do not cover physical damage, liquid ingress, unauthorized third-party firmware modifications, or electrical surge damage where uncertified power/UPS infrastructure was used.
                </p>
              </div>
            </article>

            {/* Clause 04 */}
            <article id="terms-04" className={styles.clauseCard}>
              <div className={styles.clauseHeader}>
                <div className={styles.clauseHeaderLeft}>
                  <div className={styles.clauseNumBox}>04</div>
                  <div>
                    <span className={styles.clauseCategoryTag}>Engineering &amp; Deployment</span>
                    <h2 className={styles.clauseTitle}>Turnkey Project Execution &amp; Site Readiness</h2>
                  </div>
                </div>
                <span className={styles.clauseBadge}>Fluke Certified</span>
              </div>

              <p className={styles.clauseParagraph}>
                To ensure smooth, on-schedule execution of structured cabling, server room buildouts, CCTV installations, and Wi-Fi rollouts, both parties agree to the following operational responsibilities:
              </p>

              <div className={styles.clauseSubGrid}>
                <div className={styles.clauseSubBox}>
                  <h3 className={styles.clauseSubTitle}>
                    <span className={styles.clauseSubDot} />
                    Permits, Gate Passes &amp; Access
                  </h3>
                  <p className={styles.clauseSubText}>
                    The client shall facilitate building management NOC/work permits, security gate passes, and safe access to MDF/IDF server rooms for CATS engineers during agreed working hours.
                  </p>
                </div>
                <div className={styles.clauseSubBox}>
                  <h3 className={styles.clauseSubTitle}>
                    <span className={styles.clauseSubDot} />
                    Civil Works &amp; MEP Readiness
                  </h3>
                  <p className={styles.clauseSubText}>
                    Unless explicitly included in our Bill of Quantities (BOQ), civil core-cutting, containment tray installation, dedicated electrical power, and server room HVAC cooling are provided by the client&apos;s MEP contractor.
                  </p>
                </div>
              </div>
            </article>

            {/* Clause 05 */}
            <article id="terms-05" className={styles.clauseCard}>
              <div className={styles.clauseHeader}>
                <div className={styles.clauseHeaderLeft}>
                  <div className={styles.clauseNumBox}>05</div>
                  <div>
                    <span className={styles.clauseCategoryTag}>Managed IT Services</span>
                    <h2 className={styles.clauseTitle}>IT AMC &amp; SLA Response Matrix</h2>
                  </div>
                </div>
                <span className={styles.clauseBadge}>24/7 SLA Backed</span>
              </div>

              <p className={styles.clauseParagraph}>
                Clients subscribed to a CATS Computers Annual Maintenance Contract (AMC) receive priority remote helpdesk, scheduled preventive maintenance, and rapid on-site engineering dispatch based on incident severity:
              </p>

              <div className={styles.matrixTableWrap}>
                <table className={styles.matrixTable}>
                  <thead>
                    <tr>
                      <th>Priority Level</th>
                      <th>Incident Classification</th>
                      <th>Remote Response SLA</th>
                      <th>On-Site Dispatch (Dubai)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span className={styles.slaPillFast}>P1 • Critical</span>
                      </td>
                      <td>Complete server outage, firewall down, or total office network/internet blackout</td>
                      <td>&lt; 15 Minutes (24/7)</td>
                      <td>Within 2 Hours</td>
                    </tr>
                    <tr>
                      <td>
                        <span className={styles.slaPillFast}>P2 • High</span>
                      </td>
                      <td>Degraded Wi-Fi zone, single switch/AP failure, VPN/telephony disruption, or CCTV NVR alert</td>
                      <td>&lt; 30 Minutes</td>
                      <td>Within 4 Hours</td>
                    </tr>
                    <tr>
                      <td>
                        <span className={styles.slaPillFast}>P3 • Medium</span>
                      </td>
                      <td>Individual workstation issue, printer/scanner fault, email profile setup, or user access change</td>
                      <td>&lt; 1 Hour</td>
                      <td>Next Business Day</td>
                    </tr>
                    <tr>
                      <td>
                        <span className={styles.slaPillFast}>P4 • Scheduled</span>
                      </td>
                      <td>Preventive maintenance audits, firmware patching, backup verification &amp; health reporting</td>
                      <td>Pre-Scheduled Window</td>
                      <td>Monthly / Quarterly On-Site</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>

            {/* Clause 06 */}
            <article id="terms-06" className={styles.clauseCard}>
              <div className={styles.clauseHeader}>
                <div className={styles.clauseHeaderLeft}>
                  <div className={styles.clauseNumBox}>06</div>
                  <div>
                    <span className={styles.clauseCategoryTag}>Legal &amp; Dispute Resolution</span>
                    <h2 className={styles.clauseTitle}>Limitation of Liability &amp; UAE Governing Law</h2>
                  </div>
                </div>
                <span className={styles.clauseBadge}>Dubai Courts</span>
              </div>

              <p className={styles.clauseParagraph}>
                CATS Computers engineers every system for maximum resilience and security; however, standard enterprise risk allocation applies across all engagements:
              </p>

              <div className={styles.clauseSubGrid}>
                <div className={styles.clauseSubBox}>
                  <h3 className={styles.clauseSubTitle}>
                    <span className={styles.clauseSubDot} />
                    Indirect &amp; Third-Party Outages
                  </h3>
                  <p className={styles.clauseSubText}>
                    Neither party shall be liable for indirect or consequential losses, or for third-party telecom/ISP or global cloud provider outages outside our physical control.
                  </p>
                </div>
                <div className={styles.clauseSubBox}>
                  <h3 className={styles.clauseSubTitle}>
                    <span className={styles.clauseSubDot} />
                    Governing Law &amp; Jurisdiction
                  </h3>
                  <p className={styles.clauseSubText}>
                    These Terms &amp; Conditions and any resulting commercial agreements are governed by the federal laws of the United Arab Emirates and the laws of the Emirate of Dubai.
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
