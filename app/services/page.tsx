"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import WorkProcessSection from "@/components/WorkProcessSection/WorkProcessSection";
import ConsultationSection from "@/components/ConsultationSection/ConsultationSection";
import TrustedBrandsSection from "@/components/TrustedBrandsSection/TrustedBrandsSection";
import { SERVICES_DATA } from "@/data/siteData";
import styles from "./ServicesPage.module.css";

const FILTER_TABS = [
  "All 12 Solutions",
  "Core IT Services",
  "Hardware & Security Solutions",
] as const;

const AMC_PACKAGES = [
  {
    badge: "Starter Care • 5–20 Staff",
    title: "Preventive & On-Call IT Plan",
    desc: "Ideal for boutique offices and startups in Dubai that need monthly preventive checkups and fast remote help.",
    image: "/images/about-engineer-left.jpg",
    featured: false,
    points: [
      "Unlimited business-hours remote helpdesk",
      "Scheduled monthly on-site preventive inspection",
      "Antivirus, Windows & firewall security updates",
      "Priority on-site call-out rates across Dubai",
    ],
  },
  {
    badge: "Most Popular • 20–150 Staff",
    title: "Comprehensive Annual IT AMC",
    desc: "Complete worry-free coverage with unlimited remote & on-site engineer visits included in one fixed annual fee.",
    image: "/images/service-managed-it.jpg",
    featured: true,
    points: [
      "15-minute remote response & unlimited on-site visits",
      "Full care for servers, Wi-Fi, PCs, printers & CCTV",
      "Daily cloud & NAS backup health verification",
      "Direct manufacturer warranty & RMA handling",
    ],
  },
  {
    badge: "Enterprise 24/7 • Multi-Branch",
    title: "24/7 Mission-Critical SLA",
    desc: "Built for multi-branch groups, clinics, hotels, and warehouses that operate around the clock.",
    image: "/images/hero-huawei-elite.jpg",
    featured: false,
    points: [
      "24/7/365 emergency support & 2-hour Dubai dispatch",
      "Dedicated senior account architect & quarterly audits",
      "Standby loaner switches/firewalls during warranty claims",
      "Multi-branch VPN, SD-WAN & cloud server management",
    ],
  },
];

export default function ServicesPage() {
  const [selectedTab, setSelectedTab] = useState<string>("All 12 Solutions");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((service) => {
      const matchesTab =
        selectedTab === "All 12 Solutions" || service.category === selectedTab;
      const q = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !q ||
        service.title.toLowerCase().includes(q) ||
        service.shortDescription.toLowerCase().includes(q) ||
        service.vendors.some((v) => v.toLowerCase().includes(q));
      return matchesTab && matchesQuery;
    });
  }, [selectedTab, searchQuery]);

  return (
    <main className={styles.servicesPage}>
      {/* ==================== 1. INTERACTIVE CATALOG COMMAND HERO ==================== */}
      <section className={styles.catalogHero}>
        <div className={styles.container}>
          <div className={styles.catalogHeroTop}>
            <div>
              <div className={styles.breadcrumbPill}>
                <Link href="/">Home</Link>
                <span>/</span>
                <span>All 12 IT Services &amp; Hardware Solutions</span>
              </div>
              <h1 className={styles.heroHeadline}>
                Interactive Catalog of Our 12 Turnkey Office IT &amp; Hardware Solutions.
              </h1>
              <p className={styles.heroSubtext}>
                Filter by category or search by brand below. Every solution includes a free on-site
                Dubai survey, genuine UAE distributor hardware from our Burdubai warehouse, neat
                installation, and 24/7 AMC support.
              </p>
            </div>

            {/* Right SLA Scorecard */}
            <div className={styles.heroSlaCard}>
              <div className={styles.heroSlaHeader}>
                <span className={styles.heroSlaTitle}>Dubai Delivery Benchmarks</span>
                <span className={styles.liveDotBadge}>● Burdubai Hub Ready</span>
              </div>
              <div className={styles.heroSlaGrid}>
                <div className={styles.heroSlaBox}>
                  <strong>12 Solutions</strong>
                  <span>Complete A-to-Z Office IT</span>
                </div>
                <div className={styles.heroSlaBox}>
                  <strong>30+ Brands</strong>
                  <span>Official UAE Warranty Stock</span>
                </div>
                <div className={styles.heroSlaBox}>
                  <strong>&lt; 15 Mins</strong>
                  <span>Remote Engineer Response</span>
                </div>
                <div className={styles.heroSlaBox}>
                  <strong>Free Survey</strong>
                  <span>On-Site Dubai Inspection</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Search & Category Filter Bar */}
          <div className={styles.filterDock}>
            <div className={styles.tabGroup}>
              {FILTER_TABS.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setSelectedTab(tab)}
                  className={`${styles.tabBtn} ${
                    selectedTab === tab ? styles.tabBtnActive : ""
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className={styles.searchBox}>
              <span className={styles.searchIcon}>🔍</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search service or brand (e.g. Wi-Fi, CCTV, Huawei, AMC)..."
                className={styles.searchInput}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 2. HORIZONTAL ARCHITECTURAL SERVICE LEDGER ==================== */}
      <section className={styles.ledgerSection}>
        <div className={styles.container}>
          <div className={styles.ledgerList}>
            {filteredServices.map((service) => (
              <article key={service.slug} className={styles.serviceRowCard}>
                {/* Left Photo */}
                <div className={styles.rowThumbWrap}>
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1080px) 100vw, 320px"
                    className={styles.rowImg}
                  />
                  <span className={styles.rowNumberBadge}>
                    Solution #{service.id} • {service.badge}
                  </span>
                </div>

                {/* Center Info & Deliverables */}
                <div className={styles.rowCenter}>
                  <span className={styles.rowCategoryTag}>{service.category}</span>
                  <h2 className={styles.rowTitle}>{service.title}</h2>
                  <p className={styles.rowDesc}>{service.shortDescription}</p>

                  <div className={styles.deliverablesMiniGrid}>
                    {service.deliverables.slice(0, 4).map((del) => (
                      <div key={del} className={styles.deliverableMiniItem}>
                        <span className={styles.miniCheck}>✓</span>
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Brands & Action */}
                <div className={styles.rowRight}>
                  <div>
                    <span className={styles.vendorGroupLabel}>Authorized Brands Used</span>
                    <div className={styles.vendorPillsWrap}>
                      {service.vendors.map((v) => (
                        <span key={v} className={styles.vendorPill}>
                          {v}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link href={`/services/${service.slug}`} className={styles.rowActionBtn}>
                    <span>Open {service.shortTitle} Blueprint</span>
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 3. 3-TIER AMC SUPPORT COMPARISON MATRIX ==================== */}
      <section className={styles.amcMatrixSection}>
        <div className={styles.container}>
          <div className={styles.amcHeader}>
            <span className={styles.breadcrumbPill}>Year-Round Peace of Mind</span>
            <h2 className={styles.amcTitle}>
              Compare Our 3 Annual Maintenance (AMC) Support Tiers.
            </h2>
            <p className={styles.amcSub}>
              Choose a one-time project installation or pair your office with our friendly 24/7
              Dubai support desk.
            </p>
          </div>

          <div className={styles.amcTiersGrid}>
            {AMC_PACKAGES.map((pkg) => (
              <div
                key={pkg.title}
                className={`${styles.amcTierCard} ${
                  pkg.featured ? styles.amcTierFeatured : ""
                }`}
              >
                <div>
                  <div className={styles.tierPhotoStrip}>
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      sizes="(max-width: 1080px) 100vw, 400px"
                      className={styles.rowImg}
                    />
                  </div>
                  <span className={styles.tierBadge}>{pkg.badge}</span>
                  <h3 className={styles.tierName}>{pkg.title}</h3>
                  <p className={styles.tierAudience}>{pkg.desc}</p>

                  <ul className={styles.tierFeatures}>
                    {pkg.points.map((pt) => (
                      <li key={pt}>
                        <span>✓</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/contact" className={styles.tierBtn}>
                  <span>Request {pkg.title} Quote</span>
                  <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 4. STICKY 4-STEP WORK PROCESS, BRANDS & CONSULTATION ==================== */}
      <WorkProcessSection />
      <TrustedBrandsSection />
      <ConsultationSection />
    </main>
  );
}
