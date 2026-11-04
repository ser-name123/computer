"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TrustedBrandsSection from "@/components/TrustedBrandsSection/TrustedBrandsSection";
import ConsultationSection from "@/components/ConsultationSection/ConsultationSection";
import styles from "./LandingPage.module.css";

const NEED_CHIPS = [
  "New Office IT Setup",
  "24/7 IT AMC Contract",
  "Huawei / Ruijie Wi-Fi 6/7",
  "4K CCTV & Biometrics",
  "Servers, NAS & Cloud",
  "Firewall & Security",
];

const BLUEPRINT_PROFILES = [
  {
    id: "office",
    label: "Corporate Office",
    badge: "Recommended for Dubai Offices",
    title: "High-Speed Corporate Office IT Blueprint",
    description:
      "Designed for zero video-call drops, clean server racks, secure firewall protection, and 15-minute remote helpdesk care.",
    image: "/images/case-study-boardroom.jpg",
    coreStack: "Huawei eKit / Ruijie PoE+ Switches & Wi-Fi 6/7 APs",
    securityStack: "FortiGate / Sophos Firewall + Endpoint Antivirus",
    storageStack: "Synology NAS / Microsoft 365 Cloud + Veeam Backup",
    setupTime: "3 to 5 Working Days (Or Weekend Cutover)",
  },
  {
    id: "warehouse",
    label: "Warehouse & Logistics",
    badge: "JAFZA & Industrial Ready",
    title: "Long-Range Warehouse RF & 4K Surveillance Blueprint",
    description:
      "Built for high-ceiling steel racking so barcode scanners never disconnect and every loading bay is watched in 4K.",
    image: "/images/industry-manufacturing.jpg",
    coreStack: "Armored Fiber Backbone + Directional High-Gain Wi-Fi",
    securityStack: "Hikvision / UNV 4K AI Perimeter CCTV + NVR Raid",
    storageStack: "Biometric Gate Time-Attendance + Multi-Site VPN",
    setupTime: "5 to 7 Working Days (Zero Dispatch Downtime)",
  },
  {
    id: "clinic",
    label: "Clinic, Hotel & Retail",
    badge: "24/7 Guest & Patient Care",
    title: "Always-On Hospitality, Clinic & Retail Blueprint",
    description:
      "Separate high-speed Guest Wi-Fi, protected POS/reception networks, HD IP phones, and 24/7 emergency SLA coverage.",
    image: "/images/consultation-team.jpg",
    coreStack: "Cloud-Managed Ceiling Wi-Fi + VLAN Traffic Isolation",
    securityStack: "Smart CCTV + Facial Recognition Door Access Control",
    storageStack: "Yeastar / Avaya IP PBX Phones + Daily Cloud Backup",
    setupTime: "2 to 4 Working Days (Overnight Installation)",
  },
  {
    id: "enterprise",
    label: "Multi-Branch Enterprise",
    badge: "100+ Users High-Availability",
    title: "Redundant Multi-Branch Enterprise IT Blueprint",
    description:
      "Dual-ISP failover, virtualized Dell/HPE server clusters, SD-WAN branch interconnect, and dedicated L3 AMC engineers.",
    image: "/images/hero-huawei-elite.jpg",
    coreStack: "10Gbps Fiber Core Switching + Dual HA Firewalls",
    securityStack: "Zero-Trust EDR + Immutable Air-Gapped Disaster Recovery",
    storageStack: "Dell PowerEdge / HPE ProLiant Cluster + Veeam 3-2-1",
    setupTime: "Custom Phased Rollout with Dedicated Project Manager",
  },
];

const TEAM_SIZES = [
  {
    id: "small",
    label: "1 – 25 Staff",
    sla: "< 15 Min Remote • Next-Day / 4-Hr On-Site",
    apCount: "2 – 4 Wi-Fi 6 APs + 24-Port PoE Switch",
  },
  {
    id: "medium",
    label: "25 – 100 Staff",
    sla: "< 15 Min Remote • 2-Hour Dubai On-Site SLA",
    apCount: "6 – 14 Wi-Fi 6/7 APs + Core Rack Stack",
  },
  {
    id: "large",
    label: "100 – 250+ Staff",
    sla: "24/7 Priority NOC • < 2-Hour Emergency Dispatch",
    apCount: "10Gbps Redundant Core + HA Server Cluster",
  },
  {
    id: "multi",
    label: "Multi-Branch UAE",
    sla: "Dedicated Account Engineer + All-Emirates SLA",
    apCount: "SD-WAN Interconnect + Central Cloud Controller",
  },
];

const ARCHITECTURE_LAYERS = [
  {
    num: "01",
    title: "Core Server Room, Firewalls & Clean Rack Dressing",
    shortDesc:
      "Neatly dressed 42U server cabinets, dual-ISP firewalls, UPS battery backup, and automated local + cloud backups.",
    fullTitle: "Layer 01 — The Heart of Your Office: Clean, Cool & Protected Server Racks",
    fullDesc:
      "We turn messy, unlabeled wiring closets into enterprise-grade server rooms. Every cable is Fluke-certified and labeled, protected by Next-Gen Firewalls and online UPS power.",
    image: "/images/about-engineer-left.jpg",
    hotspotLeft: "Fluke-Certified Cat6A & Fiber Patching",
    hotspotRight: "99.98% Uptime Redundant Core",
    chips: ["Dell / HPE Rack Servers", "FortiGate / Sophos NGFW", "Synology NAS + Veeam", "APC Online UPS"],
  },
  {
    num: "02",
    title: "Seamless Wi-Fi 6/7 & High-Speed Office Switching",
    shortDesc:
      "Zero dead zones across glass boardrooms, executive cabins, and open desks using Huawei eKit & Ruijie Reyee.",
    fullTitle: "Layer 02 — Fast, Drop-Free Wi-Fi 6/7 Across Every Corner",
    fullDesc:
      "Using heatmaps of your Dubai floor plan, we place ceiling Wi-Fi 6/7 access points and PoE+ switches so video calls never freeze when you walk from your desk to the meeting room.",
    image: "/images/hero-huawei-elite.jpg",
    hotspotLeft: "Official Huawei eKit & Ruijie Stock",
    hotspotRight: "Separate Guest, Staff & Voice VLANs",
    chips: ["Huawei eKit Wi-Fi 6/7", "Ruijie Reyee Cloud Switches", "10Gbps Fiber Uplinks", "Zero License Fees"],
  },
  {
    num: "03",
    title: "4K AI CCTV Surveillance & Biometric Door Access",
    shortDesc:
      "Watch your office or warehouse live on your phone and automate staff attendance with face/fingerprint terminals.",
    fullTitle: "Layer 03 — Smart 24/7 Physical Security & Attendance",
    fullDesc:
      "High-definition IP cameras with night vision and smart motion alerts, paired with facial-recognition door locks that automatically sync staff check-in times with HR & payroll.",
    image: "/images/blog-cyber-servers.jpg",
    hotspotLeft: "SIRA-Compliant HD Video Retention",
    hotspotRight: "Live iOS & Android Remote Viewing",
    chips: ["Hikvision / Dahua / UNV 4K", "ZKTeco Face Recognition", "Magnetic Door Locks", "HR Attendance Sync"],
  },
  {
    num: "04",
    title: "4K Smart Boardrooms, IP Telephony & Cloud Email",
    shortDesc:
      "One-touch Zoom/Teams meeting rooms, crystal-clear IP desk phones, and Microsoft 365 / Google Workspace.",
    fullTitle: "Layer 04 — Effortless Meetings, Calls & Cloud Collaboration",
    fullDesc:
      "Start boardroom video calls in one touch with 86-inch interactive 4K displays, connect all branches with free 3-digit IP phone extensions, and keep company emails safe in the cloud.",
    image: "/images/service-ai-automation.jpg",
    hotspotLeft: "One-Touch Teams & Zoom Rooms",
    hotspotRight: "Mobile Softphone Extensions",
    chips: ["Huawei IdeaHub / Logitech", "Yeastar / Avaya IP PBX", "Microsoft 365 & SharePoint", "Wireless 4K Casting"],
  },
];

const DUBAI_CASE_PLAYBOOKS = [
  {
    location: "Business Bay, Dubai",
    metric: "10Gbps Core • 0 Downtime",
    title: "4-Floor Corporate HQ Upgraded in One Weekend",
    summary:
      "Replaced unstable switches and dead-zone routers with a Huawei eKit 10Gbps core, 38 Wi-Fi 6 APs, and dual FortiGate firewalls for 250+ employees.",
    quote:
      "“CATS completed the entire 4-floor cutover over Saturday and Sunday. On Monday morning, our Wi-Fi speed tripled and video calls haven't dropped once.”",
    author: "Tariq Al Mansoori — COO, Al Mansoori Holdings",
    image: "/images/case-study-boardroom.jpg",
  },
  {
    location: "JAFZA Free Zone, Dubai",
    metric: "180,000 Sq.Ft. • 100% RF Coverage",
    title: "Industrial Logistics Hub Wireless & 120 4K Cameras",
    summary:
      "Engineered armored single-mode fiber and high-gain Ruijie Reyee directional Wi-Fi across 12m-high steel racking so barcode scanners never disconnect.",
    quote:
      "“Our warehouse dispatch speed improved immediately because handheld scanners stay connected across every aisle and loading bay.”",
    author: "Rajesh Menon — Head of IT, GulfStream Logistics",
    image: "/images/industry-manufacturing.jpg",
  },
  {
    location: "DIFC & Sharjah",
    metric: "< 10 Min Average Ticket Speed",
    title: "5 Multi-Branch Clinics Unified Under One 24/7 AMC",
    summary:
      "Connected 5 healthcare branches with Microsoft 365, HPE ProLiant servers, Yeastar IP PBX phones, and 24/7 managed IT support under one SLA.",
    quote:
      "“Having CATS as our IT AMC partner feels like having a 20-person IT department on speed dial. 95% of tickets are solved in under 10 minutes.”",
    author: "Dr. Khalid Siddiqui — Medical Director",
    image: "/images/consultation-team.jpg",
  },
];

const FAST_TRACK_ROADMAP = [
  {
    time: "Step 01 • Hour 0 – 4",
    title: "Free On-Site Dubai Survey",
    desc: "Our senior engineer visits your Dubai office or warehouse to inspect your floor plan, server room, and Wi-Fi coverage at zero cost.",
    deliverable: "Deliverable: Physical Site & RF Check",
    image: "/images/company/team-group-1.jpg",
  },
  {
    time: "Step 02 • Within 24 Hours",
    title: "Clear BOQ & Network Plan",
    desc: "You receive an easy-to-read proposal with exact genuine hardware models, transparent distributor pricing, and a timeline.",
    deliverable: "Deliverable: Fixed-Price BOQ & Topology",
    image: "/images/blog-cloud-engineers.jpg",
  },
  {
    time: "Step 03 • Day 2 – 5",
    title: "Clean Setup & Rack Dressing",
    desc: "Our Burdubai field team pulls cables neatly, mounts Wi-Fi & cameras, configures firewalls, and labels every port — even over weekends.",
    deliverable: "Deliverable: Fluke-Tested Handover",
    image: "/images/about-engineer-left.jpg",
  },
  {
    time: "Step 04 • 365 Days / 24×7",
    title: "15-Min Remote & 2-Hr On-Site Care",
    desc: "After handover, our Dubai NOC monitors your backups and firewalls 24/7 and supports your staff within 15 minutes.",
    deliverable: "Deliverable: Signed Annual SLA Guarantee",
    image: "/images/service-managed-it.jpg",
  },
];

const LANDING_FAQS = [
  {
    q: "Is the on-site Dubai IT survey and quotation really 100% free?",
    a: "Yes! Our certified engineers will visit your office, showroom, or warehouse anywhere in Dubai to inspect your existing server rack, check Wi-Fi dead zones, or review your floor plan — completely free and with zero obligation.",
  },
  {
    q: "Can you take over and fix an existing messy server room built by another vendor?",
    a: "Absolutely. Over 60% of our new AMC clients come to us with undocumented, tangled server cabinets left behind by previous contractors. We perform a weekend Rack Rectification & Audit, label every cable, recover admin passwords, and stabilize your network.",
  },
  {
    q: "How fast do you respond when our office has an urgent IT issue?",
    a: "For AMC clients, our remote helpdesk engineers connect within 15 minutes to solve daily staff issues. If a hardware or network emergency requires physical presence, our Burdubai field team is dispatched to your Dubai site within 2 hours.",
  },
  {
    q: "Are your Huawei eKit, Ruijie, Fortinet, and Dell products covered by official UAE warranty?",
    a: "100%. CATS Computers L.L.C is an Official Huawei eKit Authorized Elite Distribution Partner and Ruijie Reyee Golden Distributor (Top ADP 2024) in the UAE. Every piece of hardware we supply is genuine UAE channel stock with direct manufacturer warranty.",
  },
  {
    q: "Can you do the installation over the weekend so our office work doesn't stop?",
    a: "Yes. For live offices, clinics, and retail businesses, we schedule major cabling, firewall cutovers, and server migrations after working hours or over the weekend so your team walks in on Monday morning with zero downtime.",
  },
];

export default function LandingPage() {
  const [selectedChips, setSelectedChips] = useState<string[]>([
    "New Office IT Setup",
    "24/7 IT AMC Contract",
  ]);
  const [heroSubmitted, setHeroSubmitted] = useState(false);
  const [selectedProfileIdx, setSelectedProfileIdx] = useState(0);
  const [selectedSizeIdx, setSelectedSizeIdx] = useState(1);
  const [activeLayerIdx, setActiveLayerIdx] = useState(0);
  const [openFaqIdx, setOpenFaqIdx] = useState<number>(0);

  const toggleChip = (chip: string) => {
    setSelectedChips((prev) =>
      prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]
    );
  };

  const handleHeroSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setHeroSubmitted(true);
    setTimeout(() => setHeroSubmitted(false), 5000);
    e.currentTarget.reset();
  };

  const activeProfile = BLUEPRINT_PROFILES[selectedProfileIdx];
  const activeSize = TEAM_SIZES[selectedSizeIdx];
  const activeLayer = ARCHITECTURE_LAYERS[activeLayerIdx];

  return (
    <main className={styles.landingMain}>
      {/* ==================== SECTION 1: COMMAND-CENTER CONVERSION HERO ==================== */}
      <section className={styles.heroStage} aria-labelledby="lp-hero-heading">
        <div className={styles.heroCyberGrid} aria-hidden="true" />
        <div className={styles.heroGlowLeft} aria-hidden="true" />
        <div className={styles.heroGlowRight} aria-hidden="true" />

        <div className={styles.container}>
          <div className={styles.heroGrid}>
            {/* Left Column: High-Impact Copy, Value Pills & 3-Photo Proof Stack */}
            <div className={styles.heroLeft}>
              <div className={styles.liveStatusBadge}>
                <span className={styles.liveGreenDot} />
                <span>Dubai Engineering Desk Online • Free On-Site IT Survey Available Today</span>
              </div>

              <h1 id="lp-hero-heading" className={styles.heroHeadline}>
                Upgrade Your Office IT, Wi-Fi &amp; Security With{" "}
                <span className={styles.heroHeadlineHighlight}>
                  One Trusted Dubai Team.
                </span>
              </h1>

              <p className={styles.heroLead}>
                No more slow Wi-Fi, messy server cabinets, or chasing four different
                vendors. As an Official Huawei eKit Elite &amp; Ruijie Golden Distributor
                in Burdubai, we supply genuine hardware, install everything neatly, and
                support your team 24/7.
              </p>

              <div className={styles.heroValuePills}>
                <span className={styles.valuePill}>
                  <span className={styles.valuePillCheck}>✓</span>
                  <span>Free Dubai Site Survey &amp; BOQ</span>
                </span>
                <span className={styles.valuePill}>
                  <span className={styles.valuePillCheck}>✓</span>
                  <span>15-Min Remote &amp; 2-Hr On-Site SLA</span>
                </span>
                <span className={styles.valuePill}>
                  <span className={styles.valuePillCheck}>✓</span>
                  <span>Direct Distributor Hardware Pricing</span>
                </span>
              </div>

              {/* 3 Real Company Proof Mini-Cards */}
              <div className={styles.heroProofGallery}>
                <div className={styles.heroMiniCard}>
                  <Image
                    src="/images/company/huawei-ekit-award.jpg"
                    alt="Huawei Authorized Elite Distribution Partner UAE"
                    fill
                    sizes="220px"
                    className={styles.heroMiniImg}
                  />
                  <div className={styles.heroMiniCaption}>Huawei eKit Elite Partner</div>
                </div>
                <div className={styles.heroMiniCard}>
                  <Image
                    src="/images/company/award-ruijie-adp-2024-b.jpg"
                    alt="Ruijie Reyee Top ADP 2024 Award"
                    fill
                    sizes="220px"
                    className={styles.heroMiniImg}
                  />
                  <div className={styles.heroMiniCaption}>Ruijie Top ADP 2024 Winner</div>
                </div>
                <div className={styles.heroMiniCard}>
                  <Image
                    src="/images/company/team-group-1.jpg"
                    alt="CATS Computers Certified Dubai Team"
                    fill
                    sizes="220px"
                    className={styles.heroMiniImg}
                  />
                  <div className={styles.heroMiniCaption}>Certified Burdubai Engineers</div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Glassmorphic 60-Second Audit & Quote Console */}
            <div className={styles.consoleCard}>
              <div className={styles.consoleTopBanner}>
                <Image
                  src="/images/hero-huawei-elite.jpg"
                  alt="CATS Computers IT Command Console"
                  fill
                  priority
                  sizes="540px"
                  className={styles.consoleBannerImg}
                />
                <div className={styles.consoleBannerOverlay}>
                  <span className={styles.consoleBannerTag}>
                    FAST-TRACK DUBAI DESK • ZERO OBLIGATION
                  </span>
                  <h2 className={styles.consoleBannerTitle}>
                    Claim Your Free On-Site IT Audit &amp; Quote
                  </h2>
                </div>
              </div>

              <form className={styles.consoleBody} onSubmit={handleHeroSubmit}>
                <span className={styles.consoleFieldLabel}>
                  1. Tap What You Need Help With (Select One or More):
                </span>
                <div className={styles.chipSelectorGrid}>
                  {NEED_CHIPS.map((chip) => {
                    const active = selectedChips.includes(chip);
                    return (
                      <button
                        key={chip}
                        type="button"
                        onClick={() => toggleChip(chip)}
                        className={`${styles.needChip} ${
                          active ? styles.needChipActive : ""
                        }`}
                      >
                        {active ? `✓ ${chip}` : `+ ${chip}`}
                      </button>
                    );
                  })}
                </div>

                <span className={styles.consoleFieldLabel}>
                  2. Enter Your Contact Details for a 15-Minute Callback:
                </span>
                <div className={styles.consoleInputsGrid}>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name *"
                    className={styles.consoleInput}
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Mobile / WhatsApp *"
                    className={styles.consoleInput}
                  />
                  <input
                    type="email"
                    required
                    placeholder="Work Email Address *"
                    className={styles.consoleInput}
                  />
                  <input
                    type="text"
                    placeholder="Company & Area (e.g. Business Bay)"
                    className={styles.consoleInput}
                  />
                </div>

                <button type="submit" className={styles.consoleSubmitBtn}>
                  <span>
                    {heroSubmitted
                      ? "✓ Audit Request Received! Our Engineer Will Call You Now"
                      : "Book My Free Site Survey & Get Quote →"}
                  </span>
                </button>

                <div className={styles.consoleFooterMeta}>
                  <span>🔒 100% Confidential &amp; NDA Protected</span>
                  <span>📞 Direct Line: +971 4 227 3378</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 2: FLOATING PHOTO TELEMETRY RIBBON ==================== */}
      <section className={styles.telemetryRibbon} aria-label="Verified Performance Metrics">
        <div className={styles.container}>
          <div className={styles.telemetryBar}>
            {[
              {
                val: "< 15 Mins",
                lbl: "Remote Helpdesk Response",
                img: "/images/service-managed-it.jpg",
              },
              {
                val: "2 Hours",
                lbl: "On-Site Engineer in Dubai",
                img: "/images/about-engineer-left.jpg",
              },
              {
                val: "30+ Brands",
                lbl: "Ready Burdubai Stock",
                img: "/images/blog-cpu-chip.jpg",
              },
              {
                val: "500+ Offices",
                lbl: "Protected Across the UAE",
                img: "/images/case-study-boardroom.jpg",
              },
            ].map((item) => (
              <div key={item.val} className={styles.telemetryItem}>
                <div className={styles.telemetryThumb}>
                  <Image
                    src={item.img}
                    alt={item.lbl}
                    fill
                    sizes="64px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <div className={styles.telemetryVal}>{item.val}</div>
                  <div className={styles.telemetryLbl}>{item.lbl}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 3: ASYMMETRIC BENTO ARCHITECTURE SHOWCASE ==================== */}
      <section className={styles.bentoSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderRow}>
            <div>
              <div className={styles.eyebrowPill}>
                <span className={styles.eyebrowDot} />
                <span>All-In-One Technology Partner</span>
              </div>
              <h2 className={styles.sectionHeading}>
                Everything Your Office Needs, Built to Work Together.
              </h2>
            </div>
            <p className={styles.sectionSubtext}>
              Instead of hiring separate contractors for cabling, Wi-Fi, CCTV, servers,
              and support, get a single engineered ecosystem from CATS Computers.
            </p>
          </div>

          <div className={styles.bentoGrid}>
            {/* Tall Featured Bento Card (Left 5 Columns, 2 Rows) */}
            <article className={styles.bentoCardTall}>
              <Image
                src="/images/hero-ruijie-golden.jpg"
                alt="Turnkey Office IT and Huawei eKit / Ruijie Networking"
                fill
                sizes="(max-width: 1100px) 100vw, 580px"
                className={styles.bentoBgImg}
              />
              <div className={styles.bentoTallOverlay} />
              <div className={styles.bentoTallContent}>
                <span className={styles.bentoFloatingPill}>
                  ★ #1 Most Requested in Dubai
                </span>
                <h3 className={styles.bentoTallTitle}>
                  Turnkey Office IT Setup &amp; High-Speed Wi-Fi 6/7
                </h3>
                <p className={styles.bentoTallDesc}>
                  Moving into a new office or expanding your floor? We design and install
                  Fluke-certified Cat6A/Fiber cabling, clean server racks, and
                  zero-dead-zone Huawei eKit &amp; Ruijie Wi-Fi over a single weekend.
                </p>
                <Link
                  href="/services/networking-and-structured-cabling"
                  className={styles.consoleSubmitBtn}
                  style={{ width: "fit-content", padding: "11px 20px", textDecoration: "none" }}
                >
                  <span>Explore Networking &amp; Cabling →</span>
                </Link>
              </div>
            </article>

            {/* Wide Bento Card 1 (Right 7 Columns, Row 1) */}
            <article className={styles.bentoCardWide}>
              <div className={styles.bentoWideImgWrap}>
                <Image
                  src="/images/service-managed-it.jpg"
                  alt="24/7 Managed IT AMC Support Dubai"
                  fill
                  sizes="420px"
                  className={styles.bentoBgImg}
                />
              </div>
              <div className={styles.bentoWideBody}>
                <div className={styles.eyebrowPill} style={{ width: "fit-content" }}>
                  <span>24/7 SLA Care</span>
                </div>
                <h3 className={styles.bentoItemTitle}>
                  Annual Maintenance Contracts (IT AMC)
                </h3>
                <p className={styles.bentoItemDesc}>
                  Unlimited remote support in under 15 minutes, scheduled monthly
                  preventive visits, and fast on-site engineer dispatch across Dubai.
                </p>
                <Link href="/services/it-support-and-managed-amc" className={styles.bentoArrowLink}>
                  <span>Compare AMC Plans</span>
                  <span>→</span>
                </Link>
              </div>
            </article>

            {/* Wide Bento Card 2 (Right 7 Columns, Row 2) */}
            <article className={styles.bentoCardWide}>
              <div className={styles.bentoWideImgWrap}>
                <Image
                  src="/images/card-cybersecurity.jpg"
                  alt="Zero-Trust Cybersecurity & Next-Gen Firewalls"
                  fill
                  sizes="420px"
                  className={styles.bentoBgImg}
                />
              </div>
              <div className={styles.bentoWideBody}>
                <div className={styles.eyebrowPill} style={{ width: "fit-content" }}>
                  <span>Zero-Trust Defense</span>
                </div>
                <h3 className={styles.bentoItemTitle}>
                  Next-Gen Firewalls, Ransomware Defense &amp; Backups
                </h3>
                <p className={styles.bentoItemDesc}>
                  Protect your financial data and files with Fortinet/Sophos firewalls,
                  endpoint security, and automated 3-2-1 Veeam &amp; Synology backups.
                </p>
                <Link href="/services/cybersecurity-solutions" className={styles.bentoArrowLink}>
                  <span>Explore Cybersecurity</span>
                  <span>→</span>
                </Link>
              </div>
            </article>

            {/* Bottom 3 Bento Cards (4 Columns Each) */}
            <article className={styles.bentoCardThird}>
              <div className={styles.bentoThirdImgWrap}>
                <Image
                  src="/images/blog-cyber-servers.jpg"
                  alt="4K AI CCTV & Biometric Access Control"
                  fill
                  sizes="400px"
                  className={styles.bentoBgImg}
                />
              </div>
              <div className={styles.bentoThirdBody}>
                <div>
                  <h3 className={styles.bentoItemTitle}>4K CCTV &amp; Biometric Entry</h3>
                  <p className={styles.bentoItemDesc}>
                    Smart IP cameras with mobile viewing plus face/fingerprint door access
                    synced directly with HR time-attendance.
                  </p>
                </div>
                <Link href="/services/cctv-and-surveillance-systems" className={styles.bentoArrowLink}>
                  <span>View CCTV &amp; Access Control →</span>
                </Link>
              </div>
            </article>

            <article className={styles.bentoCardThird}>
              <div className={styles.bentoThirdImgWrap}>
                <Image
                  src="/images/about-team-right.jpg"
                  alt="Enterprise Servers, NAS Storage & Cloud"
                  fill
                  sizes="400px"
                  className={styles.bentoBgImg}
                />
              </div>
              <div className={styles.bentoThirdBody}>
                <div>
                  <h3 className={styles.bentoItemTitle}>Servers, NAS &amp; Cloud Email</h3>
                  <p className={styles.bentoItemDesc}>
                    Dell &amp; HPE rack servers, Synology NAS shared storage, and
                    zero-downtime Microsoft 365 &amp; Google Workspace migrations.
                  </p>
                </div>
                <Link href="/services/servers-nas-and-backup-storage" className={styles.bentoArrowLink}>
                  <span>View Server &amp; Cloud Solutions →</span>
                </Link>
              </div>
            </article>

            <article className={styles.bentoCardThird}>
              <div className={styles.bentoThirdImgWrap}>
                <Image
                  src="/images/service-ai-automation.jpg"
                  alt="IP Telephony & 4K Smart Boardrooms"
                  fill
                  sizes="400px"
                  className={styles.bentoBgImg}
                />
              </div>
              <div className={styles.bentoThirdBody}>
                <div>
                  <h3 className={styles.bentoItemTitle}>IP PBX Phones &amp; 4K Boardrooms</h3>
                  <p className={styles.bentoItemDesc}>
                    Crystal-clear Yeastar, Avaya &amp; Grandstream office phones and
                    one-touch Logitech &amp; Huawei IdeaHub meeting rooms.
                  </p>
                </div>
                <Link href="/services/ip-telephony-and-pbx-systems" className={styles.bentoArrowLink}>
                  <span>View Telephony &amp; AV →</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 4: INTERACTIVE IT ARCHITECTURE CONFIGURATOR ==================== */}
      <section className={styles.configuratorSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderRow}>
            <div>
              <div
                className={styles.eyebrowPill}
                style={{
                  background: "rgba(56, 189, 248, 0.14)",
                  borderColor: "rgba(56, 189, 248, 0.35)",
                  color: "#7dd3fc",
                }}
              >
                <span>Interactive Architecture Builder</span>
              </div>
              <h2 className={styles.sectionHeading} style={{ color: "#ffffff" }}>
                Build Your Custom Office IT Blueprint in 2 Clicks.
              </h2>
            </div>
            <p className={styles.sectionSubtext} style={{ color: "rgba(226, 232, 240, 0.8)" }}>
              Select your workplace type and team size on the left to see our recommended
              hardware stack, SLA speed, and setup timeline on the right.
            </p>
          </div>

          <div className={styles.configGrid}>
            {/* Left Controls */}
            <div className={styles.configControlsPanel}>
              <div>
                <div className={styles.configStepBlock}>
                  <span className={styles.configStepLabel}>
                    STEP 01 • SELECT YOUR WORKPLACE TYPE
                  </span>
                  <div className={styles.configOptionsRow}>
                    {BLUEPRINT_PROFILES.map((prof, idx) => (
                      <button
                        key={prof.id}
                        type="button"
                        onClick={() => setSelectedProfileIdx(idx)}
                        className={`${styles.configOptionBtn} ${
                          selectedProfileIdx === idx ? styles.configOptionBtnActive : ""
                        }`}
                      >
                        <span>{prof.label}</span>
                        <span>{selectedProfileIdx === idx ? "●" : "○"}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className={styles.configStepBlock} style={{ marginBottom: 0 }}>
                  <span className={styles.configStepLabel}>
                    STEP 02 • SELECT YOUR STAFF / OFFICE SIZE
                  </span>
                  <div className={styles.configOptionsRow}>
                    {TEAM_SIZES.map((sz, idx) => (
                      <button
                        key={sz.id}
                        type="button"
                        onClick={() => setSelectedSizeIdx(idx)}
                        className={`${styles.configOptionBtn} ${
                          selectedSizeIdx === idx ? styles.configOptionBtnActive : ""
                        }`}
                      >
                        <span>{sz.label}</span>
                        <span>{selectedSizeIdx === idx ? "●" : "○"}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div
                style={{
                  marginTop: "28px",
                  padding: "18px 20px",
                  borderRadius: "16px",
                  background: "rgba(2, 8, 30, 0.6)",
                  border: "1px solid rgba(56, 189, 248, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "14px",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <div style={{ fontSize: "12px", color: "#38bdf8" }}>
                    INCLUDED WITH EVERY BLUEPRINT
                  </div>
                  <div style={{ fontSize: "14px", color: "#ffffff", marginTop: "3px" }}>
                    Free Dubai On-Site Survey + Full Network Diagram + Official UAE Warranty
                  </div>
                </div>
                <a
                  href="tel:+97142273378"
                  style={{
                    padding: "9px 16px",
                    borderRadius: "999px",
                    background: "rgba(56, 189, 248, 0.18)",
                    color: "#7dd3fc",
                    fontSize: "12.5px",
                    fontWeight: 500,
                  }}
                >
                  Call +971 4 227 3378
                </a>
              </div>
            </div>

            {/* Right Dynamic Blueprint Output Card */}
            <div className={styles.configOutputCard}>
              <div className={styles.configOutputVisual}>
                <Image
                  key={activeProfile.image}
                  src={activeProfile.image}
                  alt={activeProfile.title}
                  fill
                  sizes="620px"
                  style={{ objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(2,8,32,0.15) 0%, rgba(2,8,32,0.85) 100%)",
                  }}
                />
                <div className={styles.configOutputBadgeBar}>
                  <span className={styles.configOutputPill}>{activeProfile.badge}</span>
                  <span className={styles.configOutputPill}>{activeSize.label}</span>
                </div>
              </div>

              <div className={styles.configOutputBody}>
                <div>
                  <h3 style={{ fontSize: "24px", fontWeight: 500, color: "#0b132b" }}>
                    {activeProfile.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#475569",
                      lineHeight: 1.62,
                      marginTop: "8px",
                    }}
                  >
                    {activeProfile.description}
                  </p>

                  <div className={styles.configSpecGrid}>
                    <div className={styles.configSpecBox}>
                      <div className={styles.configSpecKey}>Recommended Network</div>
                      <div className={styles.configSpecVal}>{activeProfile.coreStack}</div>
                    </div>
                    <div className={styles.configSpecBox}>
                      <div className={styles.configSpecKey}>Capacity &amp; Hardware</div>
                      <div className={styles.configSpecVal}>{activeSize.apCount}</div>
                    </div>
                    <div className={styles.configSpecBox}>
                      <div className={styles.configSpecKey}>Security &amp; Continuity</div>
                      <div className={styles.configSpecVal}>{activeProfile.securityStack}</div>
                    </div>
                    <div className={styles.configSpecBox}>
                      <div className={styles.configSpecKey}>Guaranteed SLA Speed</div>
                      <div className={styles.configSpecVal}>{activeSize.sla}</div>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "14px",
                    flexWrap: "wrap",
                  }}
                >
                  <span style={{ fontSize: "13px", color: "#1254ff", fontWeight: 500 }}>
                    ⏱ Est. Deployment: {activeProfile.setupTime}
                  </span>
                  <Link
                    href="/contact"
                    className={styles.consoleSubmitBtn}
                    style={{ width: "auto", padding: "12px 24px", textDecoration: "none" }}
                  >
                    <span>Get Exact Quote for This Blueprint →</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 5: INTERACTIVE 4-LAYER ARCHITECTURE EXPLORER ==================== */}
      <section className={styles.archExplorerSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderRow}>
            <div>
              <div className={styles.eyebrowPill}>
                <span className={styles.eyebrowDot} />
                <span>4-Layer Office Technology Stack</span>
              </div>
              <h2 className={styles.sectionHeading}>
                Explore Every Layer of a CATS Smart Office.
              </h2>
            </div>
            <p className={styles.sectionSubtext}>
              Click through the 4 layers below to see how we engineer your server room,
              Wi-Fi, security cameras, and meeting rooms into one seamless system.
            </p>
          </div>

          <div className={styles.archExplorerGrid}>
            {/* Left Clickable Layer Tabs */}
            <div className={styles.archTabsStack}>
              {ARCHITECTURE_LAYERS.map((layer, idx) => {
                const isActive = activeLayerIdx === idx;
                return (
                  <button
                    key={layer.num}
                    type="button"
                    onClick={() => setActiveLayerIdx(idx)}
                    className={`${styles.archLayerBtn} ${
                      isActive ? styles.archLayerBtnActive : ""
                    }`}
                  >
                    <span className={styles.archLayerNum}>{layer.num}</span>
                    <div>
                      <div className={styles.archLayerTitle}>{layer.title}</div>
                      <p className={styles.archLayerSub}>{layer.shortDesc}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Interactive Visual Viewport */}
            <div className={styles.archStageCard}>
              <Image
                key={activeLayer.image}
                src={activeLayer.image}
                alt={activeLayer.fullTitle}
                fill
                sizes="680px"
                style={{ objectFit: "cover" }}
              />
              <div className={styles.archStageOverlay} />

              <div className={styles.archStageTopRow}>
                <span className={styles.archHotspotPill}>
                  <span className={styles.liveGreenDot} />
                  <span>{activeLayer.hotspotLeft}</span>
                </span>
                <span className={styles.archHotspotPill}>
                  <span>⚡ {activeLayer.hotspotRight}</span>
                </span>
              </div>

              <div className={styles.archStageBottomBox}>
                <h3 style={{ fontSize: "24px", fontWeight: 500, color: "#ffffff" }}>
                  {activeLayer.fullTitle}
                </h3>
                <p
                  style={{
                    fontSize: "14.2px",
                    lineHeight: 1.66,
                    color: "rgba(226, 232, 240, 0.88)",
                    marginTop: "8px",
                  }}
                >
                  {activeLayer.fullDesc}
                </p>

                <div className={styles.archHardwarePills}>
                  {activeLayer.chips.map((ch) => (
                    <span key={ch} className={styles.archHardwareChip}>
                      ✓ {ch}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 6: BEFORE VS AFTER TRANSFORMATION ==================== */}
      <section className={styles.transformSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderRow}>
            <div>
              <div className={styles.eyebrowPill}>
                <span className={styles.eyebrowDot} />
                <span>Real Office Transformation</span>
              </div>
              <h2 className={styles.sectionHeading}>
                See How We Turn IT Chaos Into Clean, Fast Reliability.
              </h2>
            </div>
            <p className={styles.sectionSubtext}>
              Most offices come to us frustrated by slow Wi-Fi, tangled server rooms, and
              slow support. Here is what changes in your first week with CATS.
            </p>
          </div>

          <div className={styles.transformDualGrid}>
            {/* Before Card */}
            <div className={styles.transformCardBefore}>
              <div className={styles.transformPhotoWrap}>
                <Image
                  src="/images/case-study-cloud-migration.jpg"
                  alt="Before CATS Computers — Unmanaged IT"
                  fill
                  sizes="620px"
                  style={{ objectFit: "cover" }}
                />
                <span className={styles.transformStatusTagBad}>
                  ✕ BEFORE: Unmanaged Multi-Vendor IT
                </span>
              </div>
              <div className={styles.transformCardBody}>
                <h3 style={{ fontSize: "22px", fontWeight: 500, color: "#7f1d1d" }}>
                  Dropped Calls, Tangled Racks &amp; Slow Support
                </h3>
                <div className={styles.transformRowItem} style={{ color: "#7f1d1d" }}>
                  <span>✕</span>
                  <span>
                    <strong>Wi-Fi Dead Zones:</strong> Zoom/Teams calls freeze whenever
                    staff walk into boardrooms or corner offices.
                  </span>
                </div>
                <div className={styles.transformRowItem} style={{ color: "#7f1d1d" }}>
                  <span>✕</span>
                  <span>
                    <strong>Messy Server Cabinets:</strong> Unlabeled cables where
                    unplugging one wire takes down the whole office.
                  </span>
                </div>
                <div className={styles.transformRowItem} style={{ color: "#7f1d1d" }}>
                  <span>✕</span>
                  <span>
                    <strong>Vendor Blame Games:</strong> The CCTV vendor blames the
                    network guy, and nobody fixes the problem.
                  </span>
                </div>
              </div>
            </div>

            {/* After Card */}
            <div className={styles.transformCardAfter}>
              <div className={styles.transformPhotoWrap}>
                <Image
                  src="/images/company/ruijie-cctv-discussion.jpg"
                  alt="After CATS Computers — Engineered IT Ecosystem"
                  fill
                  sizes="620px"
                  style={{ objectFit: "cover" }}
                />
                <span className={styles.transformStatusTagGood}>
                  ✓ AFTER: Engineered &amp; Managed by CATS Dubai
                </span>
              </div>
              <div className={styles.transformCardBody}>
                <h3 style={{ fontSize: "22px", fontWeight: 500, color: "#ffffff" }}>
                  10Gbps Speed, Labeled Racks &amp; 15-Minute Care
                </h3>
                <div className={styles.transformRowItem} style={{ color: "#e2e8f0" }}>
                  <span style={{ color: "#34d399", fontWeight: 700 }}>✓</span>
                  <span>
                    <strong>Seamless Wi-Fi 6/7 Roaming:</strong> Heatmap-verified Huawei
                    eKit &amp; Ruijie coverage across every desk and room.
                  </span>
                </div>
                <div className={styles.transformRowItem} style={{ color: "#e2e8f0" }}>
                  <span style={{ color: "#34d399", fontWeight: 700 }}>✓</span>
                  <span>
                    <strong>Fluke-Tested &amp; Labeled Racks:</strong> Clean patch panels,
                    documented network diagrams, and battery backup.
                  </span>
                </div>
                <div className={styles.transformRowItem} style={{ color: "#e2e8f0" }}>
                  <span style={{ color: "#34d399", fontWeight: 700 }}>✓</span>
                  <span>
                    <strong>One Number for Everything:</strong> 15-minute remote helpdesk
                    and 2-hour Dubai on-site visits under one SLA.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 7: DARK-NAVY VERIFIED DUBAI CASE PLAYBOOK ==================== */}
      <section className={styles.casePlaybookSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderRow}>
            <div>
              <div
                className={styles.eyebrowPill}
                style={{
                  background: "rgba(56, 189, 248, 0.14)",
                  borderColor: "rgba(56, 189, 248, 0.35)",
                  color: "#7dd3fc",
                }}
              >
                <span>Verified Dubai Deliveries</span>
              </div>
              <h2 className={styles.sectionHeading} style={{ color: "#ffffff" }}>
                Real Results Delivered Across Dubai &amp; the UAE.
              </h2>
            </div>
            <p className={styles.sectionSubtext} style={{ color: "rgba(226, 232, 240, 0.8)" }}>
              See how corporate headquarters, JAFZA logistics hubs, and healthcare groups
              upgraded their technology with CATS Computers.
            </p>
          </div>

          <div className={styles.casePlaybookGrid}>
            {DUBAI_CASE_PLAYBOOKS.map((item) => (
              <article key={item.title} className={styles.casePlayCard}>
                <div className={styles.casePlayThumb}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="420px"
                    style={{ objectFit: "cover" }}
                  />
                  <span className={styles.casePlayLocationTag}>📍 {item.location}</span>
                </div>

                <div className={styles.casePlayBody}>
                  <div>
                    <span className={styles.casePlayMetricBar}>✓ {item.metric}</span>
                    <h3 style={{ fontSize: "20px", fontWeight: 500, color: "#ffffff" }}>
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "13.6px",
                        lineHeight: 1.62,
                        color: "rgba(226, 232, 240, 0.82)",
                        marginTop: "8px",
                      }}
                    >
                      {item.summary}
                    </p>
                  </div>

                  <div className={styles.casePlayQuote}>
                    <p>{item.quote}</p>
                    <strong
                      style={{
                        display: "block",
                        marginTop: "8px",
                        color: "#38bdf8",
                        fontStyle: "normal",
                      }}
                    >
                      — {item.author}
                    </strong>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 8: 3-TIER EXECUTIVE PACKAGE MATRIX ==================== */}
      <section className={styles.packagesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderRow}>
            <div>
              <div className={styles.eyebrowPill}>
                <span className={styles.eyebrowDot} />
                <span>Clear &amp; Flexible Packages</span>
              </div>
              <h2 className={styles.sectionHeading}>
                Choose Your Turnkey IT or Annual AMC Plan.
              </h2>
            </div>
            <p className={styles.sectionSubtext}>
              Every package includes genuine UAE-warranted hardware, certified
              installation, and friendly Dubai support.
            </p>
          </div>

          <div className={styles.packagesMatrix}>
            {/* Tier 1 */}
            <article className={styles.packageTierCard}>
              <div className={styles.packagePhotoHeader}>
                <Image
                  src="/images/blog-cloud-engineers.jpg"
                  alt="Starter Office IT Package"
                  fill
                  sizes="420px"
                  style={{ objectFit: "cover" }}
                />
                <span className={styles.packageRibbon}>Up to 25 Staff</span>
              </div>
              <div className={styles.packageBody}>
                <div>
                  <h3 style={{ fontSize: "22px", fontWeight: 500 }}>
                    Smart Office Starter Pack
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#475569", marginTop: "6px" }}>
                    Perfect for new offices, clinics, and retail outlets needing fast
                    Wi-Fi, CCTV, and essential support.
                  </p>
                  <div className={styles.packageSlaBox}>
                    ⚡ SLA: Unlimited Remote Help + Monthly Preventive Visit
                  </div>
                  <ul className={styles.packageChecklist}>
                    <li className={styles.packageCheckItem}>
                      <span style={{ color: "#1254ff" }}>✓</span>
                      <span>Huawei eKit / Ruijie Gateway, PoE Switch &amp; Wi-Fi 6 APs</span>
                    </li>
                    <li className={styles.packageCheckItem}>
                      <span style={{ color: "#1254ff" }}>✓</span>
                      <span>4 to 8 HD IP CCTV Cameras with Mobile App Viewing</span>
                    </li>
                    <li className={styles.packageCheckItem}>
                      <span style={{ color: "#1254ff" }}>✓</span>
                      <span>Biometric Face/Fingerprint Door Access &amp; Attendance</span>
                    </li>
                    <li className={styles.packageCheckItem}>
                      <span style={{ color: "#1254ff" }}>✓</span>
                      <span>Microsoft 365 Business Email &amp; Printer Setup</span>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className={styles.consoleSubmitBtn}
                  style={{ textDecoration: "none" }}
                >
                  <span>Request Starter Quote →</span>
                </Link>
              </div>
            </article>

            {/* Tier 2 (Featured Elevated Card) */}
            <article className={styles.packageTierCardFeatured}>
              <div className={styles.packagePhotoHeader}>
                <Image
                  src="/images/about-engineer-left.jpg"
                  alt="Complete Corporate IT & 24/7 AMC Package"
                  fill
                  sizes="420px"
                  style={{ objectFit: "cover" }}
                />
                <span
                  className={styles.packageRibbon}
                  style={{ background: "#38bdf8", color: "#020824", fontWeight: 600 }}
                >
                  ★ MOST POPULAR (25–100 Staff)
                </span>
              </div>
              <div className={styles.packageBody}>
                <div>
                  <h3 style={{ fontSize: "23px", fontWeight: 500, color: "#ffffff" }}>
                    Corporate Growth &amp; 24/7 AMC Pack
                  </h3>
                  <p
                    style={{
                      fontSize: "13.5px",
                      color: "rgba(226, 232, 240, 0.82)",
                      marginTop: "6px",
                    }}
                  >
                    Complete networking, firewall security, server backup, and unlimited
                    on-site + remote AMC support.
                  </p>
                  <div className={styles.packageSlaBox}>
                    ⚡ SLA: &lt; 15 Min Remote + 2-Hour On-Site Dispatch in Dubai
                  </div>
                  <ul className={styles.packageChecklist}>
                    <li className={styles.packageCheckItem}>
                      <span style={{ color: "#38bdf8" }}>✓</span>
                      <span>Full Cat6A Cabling, Managed Core Switches &amp; Wi-Fi 6/7</span>
                    </li>
                    <li className={styles.packageCheckItem}>
                      <span style={{ color: "#38bdf8" }}>✓</span>
                      <span>FortiGate / Sophos Next-Gen Firewall &amp; Endpoint EDR</span>
                    </li>
                    <li className={styles.packageCheckItem}>
                      <span style={{ color: "#38bdf8" }}>✓</span>
                      <span>Dell / HPE Server or Synology NAS + Automated Cloud Backup</span>
                    </li>
                    <li className={styles.packageCheckItem}>
                      <span style={{ color: "#38bdf8" }}>✓</span>
                      <span>Unlimited Remote &amp; On-Site Engineer Callouts All Year</span>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className={styles.consoleSubmitBtn}
                  style={{ textDecoration: "none" }}
                >
                  <span>Claim Corporate Package Quote →</span>
                </Link>
              </div>
            </article>

            {/* Tier 3 */}
            <article className={styles.packageTierCard}>
              <div className={styles.packagePhotoHeader}>
                <Image
                  src="/images/company/huawei-ekit-team.jpg"
                  alt="Enterprise Multi-Branch Turnkey IT Package"
                  fill
                  sizes="420px"
                  style={{ objectFit: "cover" }}
                />
                <span className={styles.packageRibbon}>100+ Staff &amp; Multi-Site</span>
              </div>
              <div className={styles.packageBody}>
                <div>
                  <h3 style={{ fontSize: "22px", fontWeight: 500 }}>
                    Enterprise 24/7 Mission-Critical
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#475569", marginTop: "6px" }}>
                    High-availability server clusters, 10Gbps fiber optics, multi-branch
                    SD-WAN, and priority 24/7/365 NOC care.
                  </p>
                  <div className={styles.packageSlaBox}>
                    ⚡ SLA: 24/7/365 Priority NOC + Standby Loaner Hardware
                  </div>
                  <ul className={styles.packageChecklist}>
                    <li className={styles.packageCheckItem}>
                      <span style={{ color: "#1254ff" }}>✓</span>
                      <span>10Gbps Fiber Backbone &amp; High-Availability Dual Firewalls</span>
                    </li>
                    <li className={styles.packageCheckItem}>
                      <span style={{ color: "#1254ff" }}>✓</span>
                      <span>VMware / Hyper-V Server Clustering &amp; Veeam DR</span>
                    </li>
                    <li className={styles.packageCheckItem}>
                      <span style={{ color: "#1254ff" }}>✓</span>
                      <span>Multi-Branch VPN, IP PBX Telephony &amp; 4K Boardrooms</span>
                    </li>
                    <li className={styles.packageCheckItem}>
                      <span style={{ color: "#1254ff" }}>✓</span>
                      <span>Dedicated Account Manager &amp; Quarterly Security Audits</span>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className={styles.consoleSubmitBtn}
                  style={{ textDecoration: "none" }}
                >
                  <span>Book Enterprise Consultation →</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 9: 72-HOUR FAST-TRACK DEPLOYMENT ROADMAP ==================== */}
      <section className={styles.roadmapSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderRow}>
            <div>
              <div className={styles.eyebrowPill}>
                <span className={styles.eyebrowDot} />
                <span>Fast &amp; Zero-Disruption Rollout</span>
              </div>
              <h2 className={styles.sectionHeading}>
                From Free Site Survey to Live IT in Days, Not Weeks.
              </h2>
            </div>
            <p className={styles.sectionSubtext}>
              Because we hold ready stock in Burdubai and use our own in-house engineers,
              your project starts immediately without subcontractor delays.
            </p>
          </div>

          <div className={styles.roadmapGrid}>
            {FAST_TRACK_ROADMAP.map((step) => (
              <article key={step.title} className={styles.roadmapCard}>
                <div className={styles.roadmapPhoto}>
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="340px"
                    style={{ objectFit: "cover" }}
                  />
                  <span className={styles.roadmapTimePill}>{step.time}</span>
                </div>
                <div className={styles.roadmapBody}>
                  <div>
                    <h3 style={{ fontSize: "18.5px", fontWeight: 500, color: "#0b132b" }}>
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "13.5px",
                        lineHeight: 1.6,
                        color: "#475569",
                        marginTop: "8px",
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>
                  <div className={styles.roadmapDeliverable}>✓ {step.deliverable}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 10: AUTHORIZED DISTRIBUTOR VAULT ==================== */}
      <section className={styles.vaultSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderRow}>
            <div>
              <div className={styles.eyebrowPill}>
                <span className={styles.eyebrowDot} />
                <span>Verified Dubai Credentials</span>
              </div>
              <h2 className={styles.sectionHeading}>
                Official UAE Awards &amp; Burdubai Showroom Stock.
              </h2>
            </div>
            <p className={styles.sectionSubtext}>
              We are an officially recognized distribution and engineering partner — giving
              you genuine UAE warranty and direct distributor pricing.
            </p>
          </div>

          <div className={styles.vaultGrid}>
            {[
              {
                tag: "Huawei Enterprise BG",
                title: "Huawei eKit Elite Partner",
                desc: "Official UAE Authorized Elite Distribution Partner for Data Communication switches, optical gateways, and Wi-Fi 6/7.",
                img: "/images/company/huawei-ekit-award.jpg",
              },
              {
                tag: "Top ADP Winner 2024",
                title: "Ruijie Reyee Golden Distributor",
                desc: "Awarded Top Performing Authorized Distribution Partner of 2024 for cloud-managed networking across the UAE.",
                img: "/images/company/award-ruijie-adp-2024-b.jpg",
              },
              {
                tag: "Executive Summit",
                title: "Huawei eKit Partner Summit",
                desc: "Our leadership and engineering team collaborating directly with Huawei regional directors in Dubai.",
                img: "/images/company/huawei-ekit-team.jpg",
              },
              {
                tag: "Burdubai Headquarters",
                title: "Ready Stock & Engineering Hub",
                desc: "Located at Water Tank Building, Al Musallah Street, Burdubai with ready stock for immediate project dispatch.",
                img: "/images/company/ruijie-partner-lobby.jpg",
              },
            ].map((card) => (
              <article key={card.title} className={styles.vaultCard}>
                <div className={styles.vaultThumb}>
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    sizes="340px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.vaultBody}>
                  <span className={styles.vaultTag}>{card.tag}</span>
                  <h3 className={styles.vaultTitle}>{card.title}</h3>
                  <p className={styles.vaultDesc}>{card.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 11: INTERACTIVE BUYER FAQ & GUARANTEE HUB ==================== */}
      <section className={styles.faqHubSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderRow}>
            <div>
              <div className={styles.eyebrowPill}>
                <span className={styles.eyebrowDot} />
                <span>Clear Answers Before You Decide</span>
              </div>
              <h2 className={styles.sectionHeading}>
                Common Questions About Our Dubai IT &amp; AMC Offer.
              </h2>
            </div>
            <p className={styles.sectionSubtext}>
              Everything you need to know about our free site surveys, SLA response speeds,
              and genuine UAE hardware warranties.
            </p>
          </div>

          <div className={styles.faqHubGrid}>
            {/* Left Visual Support Guarantee Card */}
            <div className={styles.faqGuaranteeCard}>
              <div className={styles.faqGuaranteePhoto}>
                <Image
                  src="/images/cta-banner-engineer.jpg"
                  alt="CATS Computers 24/7 Dubai Support Guarantee"
                  fill
                  sizes="520px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.faqGuaranteeBody}>
                <span
                  style={{
                    fontSize: "11.5px",
                    fontFamily: "var(--font-geist-mono), monospace",
                    color: "#38bdf8",
                    letterSpacing: "0.05em",
                  }}
                >
                  DIRECT DUBAI ENGINEERING DESK
                </span>
                <h3 style={{ fontSize: "23px", fontWeight: 500, margin: "8px 0 10px" }}>
                  Still Have a Specific Question About Your Floor Plan?
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.65,
                    color: "rgba(226, 232, 240, 0.84)",
                    marginBottom: "20px",
                  }}
                >
                  Speak directly with a senior network &amp; security engineer in Burdubai —
                  no call-center scripts, just clear technical advice.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  <a
                    href="tel:+97142273378"
                    className={styles.consoleSubmitBtn}
                    style={{ width: "auto", padding: "12px 20px", textDecoration: "none" }}
                  >
                    <span>📞 Call +971 4 227 3378</span>
                  </a>
                  <Link
                    href="/contact"
                    style={{
                      padding: "12px 20px",
                      borderRadius: "12px",
                      border: "1px solid rgba(148, 163, 184, 0.35)",
                      color: "#ffffff",
                      fontSize: "13.5px",
                      fontWeight: 500,
                      textDecoration: "none",
                    }}
                  >
                    Send Floor Plan / BOQ →
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Interactive FAQ Accordion */}
            <div className={styles.faqAccordionStack}>
              {LANDING_FAQS.map((item, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div
                    key={item.q}
                    className={`${styles.faqItemCard} ${
                      isOpen ? styles.faqItemCardOpen : ""
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIdx(isOpen ? -1 : idx)}
                      className={styles.faqQuestionBtn}
                    >
                      <span>{item.q}</span>
                      <span className={styles.faqToggleCircle}>
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && <div className={styles.faqAnswerBox}>{item.a}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 12: 24/7 DUBAI NOC & LIVE SLA COMMAND CENTER ==================== */}
      <section className={styles.nocCommandSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderRow}>
            <div>
              <div
                className={styles.eyebrowPill}
                style={{
                  background: "rgba(56, 189, 248, 0.14)",
                  borderColor: "rgba(56, 189, 248, 0.35)",
                  color: "#7dd3fc",
                }}
              >
                <span className={styles.liveGreenDot} />
                <span>24/7/365 Dubai NOC &amp; Proactive Monitoring</span>
              </div>
              <h2 className={styles.sectionHeading} style={{ color: "#ffffff" }}>
                We Watch Over Your Systems Day &amp; Night So You Never Stop.
              </h2>
            </div>
            <p className={styles.sectionSubtext} style={{ color: "rgba(226, 232, 240, 0.82)" }}>
              Instead of waiting for something to break, our Burdubai Network Operations
              Center (NOC) monitors your servers, backups, and firewalls 24 hours a day.
            </p>
          </div>

          <div className={styles.nocCommandGrid}>
            {/* Left 2x2 Protection Modules Grid */}
            <div className={styles.nocModulesGrid}>
              {[
                {
                  status: "LIVE • 24/7 WATCH",
                  title: "Server & Disk Health Alerts",
                  desc: "We get instant alerts if a server hard drive, power supply, or cooling fan shows early warning signs.",
                  img: "/images/process-step-4.jpg",
                },
                {
                  status: "DAILY • VERIFIED",
                  title: "3-2-1 Backup & Recovery Checks",
                  desc: "Every morning we verify your local NAS and cloud backups so your company files are 100% recoverable.",
                  img: "/images/process-step-3.jpg",
                },
                {
                  status: "ZERO-TRUST • ACTIVE",
                  title: "Firewall & Ransomware Shield",
                  desc: "Continuous security patches, VPN monitoring, and threat blocking across all office laptops and servers.",
                  img: "/images/card-cybersecurity.jpg",
                },
                {
                  status: "< 2 HR • DUBAI SLA",
                  title: "Rapid On-Site Engineer Dispatch",
                  desc: "If remote support isn't enough, our Burdubai field engineer arrives at your Dubai office within 2 hours.",
                  img: "/images/process-step-1.jpg",
                },
              ].map((mod) => (
                <article key={mod.title} className={styles.nocModuleCard}>
                  <div className={styles.nocModuleThumb}>
                    <Image
                      src={mod.img}
                      alt={mod.title}
                      fill
                      sizes="320px"
                      style={{ objectFit: "cover" }}
                    />
                    <span className={styles.nocLivePill}>
                      <span className={styles.liveGreenDot} />
                      <span>{mod.status}</span>
                    </span>
                  </div>
                  <div className={styles.nocModuleBody}>
                    <h3 className={styles.nocModuleTitle}>{mod.title}</h3>
                    <p className={styles.nocModuleDesc}>{mod.desc}</p>
                  </div>
                </article>
              ))}
            </div>

            {/* Right Live NOC Command Dashboard Card */}
            <div className={styles.nocRightDashboard}>
              <div className={styles.nocHeroScreen}>
                <Image
                  src="/images/process-step-2.jpg"
                  alt="CATS Computers 24/7 Dubai NOC Engineers"
                  fill
                  sizes="560px"
                  style={{ objectFit: "cover" }}
                />
                <div className={styles.nocScreenOverlay}>
                  <span
                    style={{
                      fontSize: "11px",
                      fontFamily: "var(--font-geist-mono), monospace",
                      color: "#34d399",
                      letterSpacing: "0.06em",
                    }}
                  >
                    ● SYSTEM TELEMETRY: ALL DUBAI NODES HEALTHY
                  </span>
                  <h3 style={{ fontSize: "23px", fontWeight: 500, color: "#ffffff", marginTop: "6px" }}>
                    Dedicated Account Engineer + Standby Loaner Hardware
                  </h3>
                </div>
              </div>

              <div className={styles.nocTelemetryCounters}>
                <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#cbd5e1" }}>
                  If a covered switch or firewall ever needs a manufacturer warranty claim,
                  we install a standby loaner unit from our Burdubai warehouse so your
                  office never experiences downtime.
                </p>

                <div className={styles.nocCounterGrid}>
                  <div className={styles.nocCounterBox}>
                    <div className={styles.nocCounterVal}>&lt; 15m</div>
                    <div className={styles.nocCounterLbl}>Remote Ticket SLA</div>
                  </div>
                  <div className={styles.nocCounterBox}>
                    <div className={styles.nocCounterVal}>2 Hrs</div>
                    <div className={styles.nocCounterLbl}>Dubai Field Visit</div>
                  </div>
                  <div className={styles.nocCounterBox}>
                    <div className={styles.nocCounterVal}>98.7%</div>
                    <div className={styles.nocCounterLbl}>AMC Renewal Rate</div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className={styles.consoleSubmitBtn}
                  style={{ textDecoration: "none" }}
                >
                  <span>Activate 24/7 IT Care for Your Office →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 13: 30+ BRANDS & CONSULTATION DESK ==================== */}
      <TrustedBrandsSection />
      <ConsultationSection />
    </main>
  );
}
