"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner/PageBanner";
import CtaBanner from "@/components/CtaBanner/CtaBanner";
import styles from "@/styles/AdvancedLegalFaq.module.css";

interface FaqItem {
  id: string;
  number: string;
  category: string;
  question: string;
  answer: string;
  relatedService: {
    label: string;
    href: string;
  };
}

const ADVANCED_FAQS: FaqItem[] = [
  {
    id: "faq-1",
    number: "Q01",
    category: "IT AMC & 24/7 Support",
    question: "What is included in a CATS Computers IT Annual Maintenance Contract (AMC)?",
    answer:
      "Our enterprise IT AMC covers unlimited remote helpdesk support, scheduled on-site preventive maintenance visits, 24/7 critical server and firewall monitoring, regular OS/firmware patching, backup health verification, and priority emergency engineer dispatch across Dubai and the UAE.",
    relatedService: { label: "Explore IT Support & AMC", href: "/services/it-support-and-managed-amc" },
  },
  {
    id: "faq-2",
    number: "Q02",
    category: "IT AMC & 24/7 Support",
    question: "How fast can your engineers reach our office in Dubai during a critical outage?",
    answer:
      "For Priority-1 (P1) critical outages—such as a server down, firewall failure, or complete office internet blackout—our helpdesk initiates remote diagnostics within 15 minutes and dispatches a certified field engineer to your Dubai location within 2 hours.",
    relatedService: { label: "View SLA Support Tiers", href: "/services/it-support-and-managed-amc" },
  },
  {
    id: "faq-3",
    number: "Q03",
    category: "IT AMC & 24/7 Support",
    question: "Can you take over an existing IT setup that was installed by another vendor?",
    answer:
      "Yes. Over 65% of our new AMC clients transition to us from previous vendors. We begin with a comprehensive IT Infrastructure & Security Audit—documenting all IP schemas, firewall rules, switch topologies, rack cabling, and license expirations—before onboarding your system smoothly.",
    relatedService: { label: "Book an IT Infrastructure Audit", href: "/contact" },
  },
  {
    id: "faq-4",
    number: "Q04",
    category: "Networking & Wi-Fi",
    question: "Do you provide complete turnkey IT setup for new office fit-outs in Dubai?",
    answer:
      "Absolutely. We work directly with your interior fit-out contractor and MEP team from day one—delivering Cat6/Cat6A and Fiber Optic structured cabling, Fluke testing, server rack dressing, enterprise Wi-Fi 6/7 heatmapping, IP telephony, biometric access control, and CCTV installation.",
    relatedService: { label: "Explore Structured Cabling & Networking", href: "/services/networking-and-structured-cabling" },
  },
  {
    id: "faq-5",
    number: "Q05",
    category: "Networking & Wi-Fi",
    question: "What is the difference between Huawei eKit, Ruijie/Reyee, and Cisco for office Wi-Fi & switching?",
    answer:
      "As an official Huawei eKit Elite Partner, Ruijie Golden Partner, and Cisco specialist, we match the hardware to your exact workload and budget. Huawei eKit and Ruijie offer exceptional cloud-managed Wi-Fi 6/7 performance with zero recurring controller license fees, while Cisco suits global compliance mandates.",
    relatedService: { label: "Explore Huawei eKit & Ruijie Solutions", href: "/services/huawei-ekit-and-ruijie-reyee" },
  },
  {
    id: "faq-6",
    number: "Q06",
    category: "Networking & Wi-Fi",
    question: "Do you certify your Cat6, Cat6A, and Fiber Optic cabling installations?",
    answer:
      "Yes. Every structured cabling project we execute is tested node-by-node using calibrated Fluke Networks certification analyzers. You receive a full PDF Fluke test report, numbered patch panel schedules, and CAD network layout drawings upon project sign-off.",
    relatedService: { label: "View Structured Cabling Standards", href: "/services/networking-and-structured-cabling" },
  },
  {
    id: "faq-7",
    number: "Q07",
    category: "Cybersecurity & Cloud",
    question: "Which enterprise firewalls and cybersecurity platforms do you deploy and manage?",
    answer:
      "We deploy, harden, and manage Next-Generation Firewalls (NGFW) and XDR/EDR endpoint security from Fortinet (FortiGate), Sophos (XGS & Intercept X), SonicWall, and Kaspersky/ESET—configuring Zero-Trust SSL/IPsec VPNs, SD-WAN failover, web filtering, and ransomware containment.",
    relatedService: { label: "Explore Cybersecurity Solutions", href: "/services/cybersecurity-solutions" },
  },
  {
    id: "faq-8",
    number: "Q08",
    category: "Cybersecurity & Cloud",
    question: "Can you migrate our company email and files to Microsoft 365, Google Workspace, or Azure/AWS?",
    answer:
      "Yes. Our cloud engineers execute zero-downtime migrations from legacy on-premise Exchange, cPanel/IMAP, or file servers to Microsoft 365 (Exchange Online, SharePoint, OneDrive, Teams), Google Workspace, AWS, or Microsoft Azure—complete with MFA, DKIM/DMARC security, and automated cloud backups.",
    relatedService: { label: "Explore Cloud & Virtualization", href: "/services/cloud-services-and-virtualization" },
  },
  {
    id: "faq-9",
    number: "Q09",
    category: "Cybersecurity & Cloud",
    question: "How do you protect our company data against ransomware and accidental deletion?",
    answer:
      "We implement the industry-standard 3-2-1-1 backup architecture using Veeam, Acronis, Synology NAS, and encrypted cloud vaults. Even if an endpoint is compromised, immutable off-site snapshots allow us to restore your virtual machines and databases rapidly.",
    relatedService: { label: "Explore Servers, NAS & Backup Storage", href: "/services/servers-nas-and-backup-storage" },
  },
  {
    id: "faq-10",
    number: "Q10",
    category: "CCTV, Hardware & Distribution",
    question: "Are your CCTV and security systems compliant with Dubai regulatory standards?",
    answer:
      "Yes. We design and install high-definition IP CCTV surveillance systems (Hikvision, Dahua, UNV) featuring 31+ days continuous recording retention, AI perimeter analytics, ANPR license plate recognition, and strict network VLAN isolation in accordance with UAE guidelines.",
    relatedService: { label: "Explore CCTV & Surveillance Systems", href: "/services/cctv-and-surveillance-systems" },
  },
  {
    id: "faq-11",
    number: "Q11",
    category: "CCTV, Hardware & Distribution",
    question: "Are all servers, laptops, and networking products covered by genuine UAE manufacturer warranties?",
    answer:
      "100%. Every server (Dell PowerEdge, HPE ProLiant, Lenovo ThinkSystem), workstation, firewall, switch, and UPS supplied by CATS Computers is sourced exclusively through official UAE authorized distribution channels with genuine OEM serial registration and local warranty coverage.",
    relatedService: { label: "Explore IT Infrastructure Solutions", href: "/services/it-infrastructure-solutions" },
  },
  {
    id: "faq-12",
    number: "Q12",
    category: "General & Commercial",
    question: "Do you offer a free on-site IT survey in Dubai before providing a quotation?",
    answer:
      "Yes! For office fit-outs, structured cabling, Wi-Fi upgrades, CCTV projects, and IT AMC contracts across Dubai, our senior solutions architects perform a complimentary on-site physical inspection and Floor Plan assessment so your BOQ is 100% accurate with zero hidden surprises.",
    relatedService: { label: "Schedule Free Site Survey", href: "/contact" },
  },
];

const CATEGORIES = [
  "All Questions",
  "IT AMC & 24/7 Support",
  "Networking & Wi-Fi",
  "Cybersecurity & Cloud",
  "CCTV, Hardware & Distribution",
  "General & Commercial",
];

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All Questions");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIds, setOpenIds] = useState<string[]>(["faq-1", "faq-4"]);

  const filteredFaqs = useMemo(() => {
    return ADVANCED_FAQS.filter((item) => {
      const matchesCategory =
        activeCategory === "All Questions" || item.category === activeCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const countByCategory = (cat: string) => {
    if (cat === "All Questions") return ADVANCED_FAQS.length;
    return ADVANCED_FAQS.filter((item) => item.category === cat).length;
  };

  return (
    <main className={styles.pageWrapper}>
      <PageBanner
        eyebrow="TECHNICAL KNOWLEDGE HUB — DUBAI, UAE"
        title="Frequently Asked Questions."
        subtitle="Instant, transparent answers from our Dubai L3 systems architects covering 24/7 IT AMC contracts, structured cabling, cybersecurity, cloud migrations, and authorized hardware supply."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
        bgImage="/images/consultation-team.jpg"
        primaryCtaText="Ask an IT Architect"
        primaryCtaHref="/contact"
        secondaryCtaText="Explore All 12 Services"
        secondaryCtaHref="/services"
        metrics={[
          { value: "< 15m", label: "Remote SLA Response" },
          { value: "< 2h", label: "On-Site Dubai Dispatch" },
          { value: "30+", label: "Authorized OEM Brands" },
          { value: "Free", label: "On-Site Dubai Survey" },
        ]}
      />

      {/* ==================== TOP 4 GLASSMORPHIC SUPPORT HIGHLIGHT CARDS ==================== */}
      <section className={styles.trustStripSection}>
        <div className={styles.trustStripContainer}>
          <div className={styles.trustCard}>
            <div className={styles.trustIconBox}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div className={styles.trustCardBody}>
              <span className={styles.trustCardBadge}>Rapid Triage</span>
              <h3 className={styles.trustCardTitle}>&lt;15 Min Remote Helpdesk</h3>
              <p className={styles.trustCardDesc}>
                Direct access to L2/L3 engineers in Burdubai with instant remote session diagnostics.
              </p>
            </div>
          </div>

          <div className={styles.trustCard}>
            <div className={styles.trustIconBox}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <div className={styles.trustCardBody}>
              <span className={styles.trustCardBadge}>Field Engineering</span>
              <h3 className={styles.trustCardTitle}>&lt;2 Hr On-Site Dispatch</h3>
              <p className={styles.trustCardDesc}>
                Dedicated field vehicles stationed in Dubai for emergency server, firewall, and network recovery.
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
              <span className={styles.trustCardBadge}>Official Partner</span>
              <h3 className={styles.trustCardTitle}>Huawei eKit &amp; Ruijie</h3>
              <p className={styles.trustCardDesc}>
                Authorized UAE partner for 30+ global networking, server, CCTV, and cybersecurity vendors.
              </p>
            </div>
          </div>

          <div className={styles.trustCard}>
            <div className={styles.trustIconBox}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </div>
            <div className={styles.trustCardBody}>
              <span className={styles.trustCardBadge}>Zero Obligation</span>
              <h3 className={styles.trustCardTitle}>Free Site Survey &amp; BOQ</h3>
              <p className={styles.trustCardDesc}>
                Complimentary physical site inspection and floor-plan Wi-Fi/cabling assessment across Dubai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MAIN 2-COLUMN INTERACTIVE FAQ WORKSPACE ==================== */}
      <section className={styles.workspaceSection}>
        <div className={styles.workspaceContainer}>
          {/* Left Sticky Category Jumper & Direct Engineer Escalation Card */}
          <aside className={styles.stickySidebar}>
            <div className={styles.navPanel}>
              <div className={styles.navPanelHeader}>
                <span className={styles.navPanelTitle}>Knowledge Categories</span>
                <span className={styles.versionPill}>{ADVANCED_FAQS.length} Q&amp;As</span>
              </div>
              <ul className={styles.tocList}>
                {CATEGORIES.map((cat, idx) => {
                  const isActive = activeCategory === cat;
                  return (
                    <li key={cat}>
                      <button
                        type="button"
                        onClick={() => setActiveCategory(cat)}
                        className={`${styles.tocLink} ${isActive ? styles.tocLinkActive : ""}`}
                      >
                        <span className={styles.tocLeft}>
                          <span className={styles.tocNum}>0{idx + 1}</span>
                          <span>{cat}</span>
                        </span>
                        <span className={styles.tocCountBadge}>{countByCategory(cat)}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className={styles.sidebarDarkCard}>
              <div className={styles.sidebarMediaWrap}>
                <Image
                  src="/images/company/team-group-1.jpg"
                  alt="CATS Computers L3 Solutions Architect Desk in Dubai"
                  fill
                  sizes="320px"
                  className={styles.sidebarMediaImg}
                />
              </div>
              <div className={styles.sidebarStatusRow}>
                <span className={styles.livePulse} />
                <span>L3 Solutions Architect Desk</span>
              </div>
              <h3 className={styles.sidebarDarkTitle}>
                Have a Custom Technical Question?
              </h3>
              <p className={styles.sidebarDarkText}>
                Speak directly with our Dubai systems engineers for custom BOQ sizing, server virtualization specs, or multi-branch SD-WAN architecture.
              </p>
              <div className={styles.sidebarContactList}>
                <div className={styles.sidebarContactItem}>
                  <span>☎</span>
                  <span>+971 4 227 3378 (24/7 Desk)</span>
                </div>
                <div className={styles.sidebarContactItem}>
                  <span>✉</span>
                  <span>info@catscomputers.com</span>
                </div>
                <div className={styles.sidebarContactItem}>
                  <span>📍</span>
                  <span>Al Musallah St, Burdubai, UAE</span>
                </div>
              </div>
              <Link href="/contact" className={styles.sidebarBtn}>
                <span>Ask an IT Architect</span>
                <span>→</span>
              </Link>
            </div>
          </aside>

          {/* Right Interactive Search, Filter & Expandable FAQ Cards */}
          <div className={styles.contentStream}>
            {/* Interactive Search & Filter Hero Card */}
            <div className={styles.faqSearchHero}>
              <div className={styles.searchInputWrap}>
                <svg
                  className={styles.searchSvg}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search questions by keyword (e.g. AMC SLA, Fluke test, Huawei eKit, Fortinet, CCTV, Microsoft 365)..."
                  className={styles.faqSearchInput}
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className={styles.clearSearchBtn}
                  >
                    Clear ✕
                  </button>
                )}
              </div>

              <div className={styles.faqPillsRow}>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`${styles.faqFilterPill} ${
                      activeCategory === cat ? styles.faqFilterPillActive : ""
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Accordion List */}
            {filteredFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <article
                  key={faq.id}
                  className={`${styles.faqCard} ${isOpen ? styles.faqCardOpen : ""}`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className={styles.faqTrigger}
                    aria-expanded={isOpen}
                  >
                    <div className={styles.faqTriggerLeft}>
                      <div className={styles.faqQBadge}>{faq.number}</div>
                      <div>
                        <span className={styles.clauseCategoryTag}>{faq.category}</span>
                        <h2 className={styles.faqQuestionText}>{faq.question}</h2>
                      </div>
                    </div>
                    <div className={styles.faqToggleCircle}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </button>

                  {isOpen && (
                    <div className={styles.faqAnswerWrap}>
                      <p className={styles.faqAnswerText}>{faq.answer}</p>

                      <div className={styles.faqAnswerFooter}>
                        <span className={styles.faqMetaTag}>
                          ✓ Verified by CATS L3 Engineering Desk — Dubai, UAE
                        </span>
                        <Link href={faq.relatedService.href} className={styles.faqActionLink}>
                          <span>{faq.relatedService.label}</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
