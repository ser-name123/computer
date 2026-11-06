"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import IndustrySolutions from "@/components/IndustrySolutions/IndustrySolutions";
import TrustedBrandsSection from "@/components/TrustedBrandsSection/TrustedBrandsSection";
import ConsultationSection from "@/components/ConsultationSection/ConsultationSection";
import { INDUSTRIES_DATA } from "@/data/siteData";
import styles from "./IndustriesPage.module.css";

export default function IndustriesPage() {
  const [activeSectorId, setActiveSectorId] = useState<string>(INDUSTRIES_DATA[0].id);

  const handleSelectSector = (id: string) => {
    setActiveSectorId(id);
    const el = document.getElementById(`sector-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <main className={styles.industriesPage}>
      {/* ==================== 1. ARCHITECTURAL 6-TILE SECTOR HERO ==================== */}
      <section className={styles.sectorHero}>
        <div className={styles.container}>
          <div className={styles.heroTop}>
            <div className={styles.crumbBadge}>
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Industries We Serve Across Dubai &amp; UAE</span>
            </div>
            <h1 className={styles.heroTitle}>
              IT &amp; Security Systems Engineered for Your Exact Facility Type.
            </h1>
            <p className={styles.heroDesc}>
              A high-ceiling warehouse in JAFZA needs very different Wi-Fi and cameras than a
              medical clinic or a corporate tower in Business Bay. Select your business type below
              to see how we build for your space.
            </p>
          </div>

          <div className={styles.heroSectorTiles}>
            {INDUSTRIES_DATA.map((ind) => (
              <button
                key={ind.id}
                type="button"
                onClick={() => handleSelectSector(ind.id)}
                className={`${styles.sectorTileBtn} ${
                  activeSectorId === ind.id ? styles.sectorTileBtnActive : ""
                }`}
              >
                <div className={styles.tileThumb}>
                  <Image
                    src={ind.image}
                    alt={ind.name}
                    fill
                    sizes="200px"
                    className={styles.coverImg}
                  />
                </div>
                <span className={styles.tileStat}>{ind.statValue}</span>
                <span className={styles.tileName}>{ind.name.split(",")[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 2. WIDE 3-COLUMN EXECUTIVE SECTOR DOSSIERS ==================== */}
      <section className={styles.dossiersSection}>
        <div className={styles.container}>
          <div className={styles.dossierStack}>
            {INDUSTRIES_DATA.map((ind) => (
              <article
                key={ind.id}
                id={`sector-${ind.id}`}
                className={`${styles.dossierCard} ${
                  activeSectorId === ind.id ? styles.dossierCardHighlighted : ""
                }`}
              >
                {/* Col 1: Photo + Stat Overlay */}
                <div className={styles.dossierPhotoWrap}>
                  <Image
                    src={ind.image}
                    alt={ind.name}
                    fill
                    sizes="(max-width: 1120px) 100vw, 360px"
                    className={styles.coverImg}
                  />
                  <div className={styles.dossierStatBadge}>
                    <strong>{ind.statValue}</strong>
                    <span>{ind.statLabel}</span>
                  </div>
                </div>

                {/* Col 2: Sector Overview & Challenges Solved */}
                <div className={styles.dossierMiddle}>
                  <span className={styles.dossierTag}>
                    Sector Dossier #{ind.id} • {ind.badge}
                  </span>
                  <h2 className={styles.dossierTitle}>{ind.name}</h2>
                  <p className={styles.dossierDesc}>{ind.description}</p>

                  <div className={styles.challengesTitle}>Everyday Problems We Solve:</div>
                  <ul className={styles.challengesList}>
                    {ind.challengesSolved.map((ch) => (
                      <li key={ch}>
                        <span style={{ color: "#1254ff", fontWeight: 600 }}>✓</span>
                        <span>{ch}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Col 3: Recommended Hardware & IT Stack */}
                <div className={styles.dossierRight}>
                  <div>
                    <div className={styles.stackTitle}>Recommended Technology Stack</div>
                    <div className={styles.stackChips}>
                      {ind.recommendedSolutions.map((sol) => (
                        <span key={sol} className={styles.stackChip}>
                          {sol}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link href="/contact" className={styles.dossierCta}>
                    <span>Book Free Facility Survey</span>
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 3. FACILITY HARDWARE SIZING MATRIX TABLE ==================== */}
      <section className={styles.matrixSection}>
        <div className={styles.container}>
          <div className={styles.matrixHeader}>
            <span className={styles.crumbBadge} style={{ background: "rgba(18,84,255,0.1)", color: "#1254ff" }}>
              Engineering Comparison
            </span>
            <h2 className={styles.matrixTitle}>
              How We Match the Right Hardware to Each Building Type.
            </h2>
            <p className={styles.matrixSub}>
              See why generic home-grade routers fail in busy workplaces and what our Dubai
              engineers install instead.
            </p>
          </div>

          <div className={styles.tableScroll}>
            <table className={styles.sizingTable}>
              <thead>
                <tr>
                  <th>Facility Type</th>
                  <th>Wi-Fi Architecture</th>
                  <th>Cabling &amp; Backbone</th>
                  <th>CCTV &amp; Access Standard</th>
                  <th>Recommended AMC Tier</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.sectorCell}>Corporate Offices &amp; Towers</td>
                  <td>Ceiling Wi-Fi 6/7 High-Density APs</td>
                  <td>Fluke-Certified Cat6A &amp; Clean Rack</td>
                  <td>Lobby Face Terminal &amp; 4K Dome Cameras</td>
                  <td>Comprehensive Annual AMC</td>
                </tr>
                <tr>
                  <td className={styles.sectorCell}>Warehouses &amp; JAFZA Hubs</td>
                  <td>Long-Range Directional &amp; IP67 Outdoor APs</td>
                  <td>Armored Multi-Core Fiber Optic Links</td>
                  <td>AI Loading-Bay Bullet Cameras (90-Day NVR)</td>
                  <td>24/7 Mission-Critical SLA</td>
                </tr>
                <tr>
                  <td className={styles.sectorCell}>Clinics &amp; Medical Centers</td>
                  <td>Segmented Doctor, Lab &amp; Guest VLAN Wi-Fi</td>
                  <td>Low-Smoke Zero-Halogen (LSZH) Cat6A</td>
                  <td>Strict Privacy Zones &amp; Encrypted NAS Backup</td>
                  <td>24/7 Priority Clinical SLA</td>
                </tr>
                <tr>
                  <td className={styles.sectorCell}>Hotels, Cafes &amp; Retail Chains</td>
                  <td>In-Wall Room APs &amp; Captive Guest Portal</td>
                  <td>PoE+ Switches for POS, Phones &amp; Sound</td>
                  <td>Cash-Counter 4K Cameras &amp; Central HQ View</td>
                  <td>Multi-Branch Retail AMC</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ==================== 4. INTERACTIVE SECTOR SHOWCASE, BRANDS & CONSULTATION ==================== */}
      <IndustrySolutions />
      <TrustedBrandsSection />
      <ConsultationSection />
    </main>
  );
}
