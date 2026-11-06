"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TrustedBrandsSection from "@/components/TrustedBrandsSection/TrustedBrandsSection";
import CtaBanner from "@/components/CtaBanner/CtaBanner";
import { BLOG_POSTS_DATA } from "@/data/siteData";
import styles from "./BlogsPage.module.css";

const QUICK_CHECKLISTS = [
  {
    tab: "01. New Office Move-In Check",
    title: "Moving Into a New Dubai Office? Check These 3 Things First",
    desc: "Complete these 3 steps at least 14 days before your staff move in so your internet, Wi-Fi, and doors work on morning one:",
    image: "/images/company/huawei-reception.jpg",
    points: [
      "Book your DU or e& (Etisalat) business fiber line early",
      "Test all floor network ports & ceiling Wi-Fi 6/7 spots with a Fluke tester",
      "Mount biometric door access & 4K CCTV cameras before furniture arrives",
    ],
  },
  {
    tab: "02. Ransomware & Backup Check",
    title: "Is Your Accounting & Company Data Safe From Viruses?",
    desc: "Ask your team these 3 simple questions today to make sure a hard-drive crash or virus can never stop your business:",
    image: "/images/card-cybersecurity.jpg",
    points: [
      "Do we have an automatic daily backup saved both on a NAS and in the cloud?",
      "Have we tested restoring a backup file in the last 30 days?",
      "Is Multi-Factor Authentication (MFA) active on all Microsoft 365 emails?",
    ],
  },
  {
    tab: "03. Fix Slow Office Wi-Fi",
    title: "Why Does Our Office Wi-Fi Drop During Video Calls?",
    desc: "In 90% of Dubai offices, slow internet is caused by indoor Wi-Fi dead zones rather than the ISP line:",
    image: "/images/hero-huawei-elite.jpg",
    points: [
      "Replace home routers with ceiling-mounted Huawei eKit or Ruijie Wi-Fi 6/7 APs",
      "Separate guest mobile phones onto a safe Guest VLAN away from work laptops",
      "Replace bent, unlabeled patch cables inside your server rack",
    ],
  },
];

export default function BlogsPage() {
  const [activeCheckIdx, setActiveCheckIdx] = useState(0);
  const featuredPost = BLOG_POSTS_DATA[0];
  const activeChecklist = QUICK_CHECKLISTS[activeCheckIdx];

  return (
    <main className={styles.blogsPage}>
      {/* ==================== 1. EDITORIAL TECH MAGAZINE COVER HERO ==================== */}
      <section className={styles.magazineHero}>
        <div className={styles.container}>
          <div className={styles.magHeaderRow}>
            <div>
              <div className={styles.magPill}>
                <Link href="/">Home</Link>
                <span>/</span>
                <span>Dubai IT Magazine &amp; Plain-English Guides</span>
              </div>
              <h1 className={styles.magTitle}>
                Practical IT Guides Written by Our Dubai Engineers.
              </h1>
            </div>
          </div>

          <div className={styles.magHeroGrid}>
            {/* Left Featured Cover Story */}
            <div className={styles.coverStoryCard}>
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                priority
                sizes="(max-width: 1080px) 100vw, 760px"
                className={styles.coverImg}
              />
              <div className={styles.coverStoryOverlay} />
              <div className={styles.coverStoryContent}>
                <span className={styles.coverTag}>
                  Featured Cover Guide • {featuredPost.category}
                </span>
                <h2 className={styles.coverHeadline}>{featuredPost.title}</h2>
                <p className={styles.coverExcerpt}>{featuredPost.excerpt}</p>
                <Link href={`/blogs/${featuredPost.slug}`} className={styles.coverBtn}>
                  <span>Read Cover Story ({featuredPost.readTime})</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Right Trending Guides Desk */}
            <aside className={styles.trendingDesk}>
              <div>
                <h3 className={styles.trendingHeading}>Trending Dubai IT Guides</h3>
                <div className={styles.trendingList}>
                  {BLOG_POSTS_DATA.map((post, idx) => (
                    <Link
                      key={post.slug}
                      href={`/blogs/${post.slug}`}
                      className={styles.trendingItem}
                    >
                      <span className={styles.trendingNum}>0{idx + 1}</span>
                      <div>
                        <span className={styles.trendingTitle}>{post.title}</span>
                        <span className={styles.trendingMeta}>
                          {post.category} • {post.readTime}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ==================== 2. ALL EDITORIAL ARTICLES 3-COLUMN GRID ==================== */}
      <section className={styles.articlesSection}>
        <div className={styles.container}>
          <div className={styles.editorialGrid}>
            {BLOG_POSTS_DATA.map((post) => (
              <article key={post.slug} className={styles.articleCard}>
                <div className={styles.articleThumb}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 1080px) 100vw, 420px"
                    className={styles.coverImg}
                  />
                  <span className={styles.articleCatBadge}>{post.category}</span>
                </div>

                <div className={styles.articleBody}>
                  <div>
                    <div className={styles.articleMetaRow}>
                      <span>{post.date}</span>
                      <span>⏱ {post.readTime}</span>
                    </div>
                    <h2 className={styles.articleTitle}>{post.title}</h2>
                    <p className={styles.articleExcerpt}>{post.excerpt}</p>

                    {post.keyTakeaways[0] && (
                      <div className={styles.takeawayMini}>
                        <strong>Key Tip:</strong> {post.keyTakeaways[0]}
                      </div>
                    )}
                  </div>

                  <Link href={`/blogs/${post.slug}`} className={styles.readGuideLink}>
                    <span>Read Full Article</span>
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 3. INTERACTIVE 3-TAB OFFICE IT CHECKLIST WIDGET ==================== */}
      <section className={styles.checklistSection}>
        <div className={styles.container}>
          <div style={{ marginBottom: "24px" }}>
            <span
              className={styles.magPill}
              style={{ background: "rgba(18,84,255,0.09)", color: "#1254ff" }}
            >
              Interactive 60-Second Self-Check
            </span>
            <h2 style={{ fontSize: "clamp(26px, 3.2vw, 38px)", fontWeight: 600, margin: 0 }}>
              3 Quick Checklists Every Dubai Office Manager Can Use Today.
            </h2>
          </div>

          <div className={styles.checklistTabs}>
            {QUICK_CHECKLISTS.map((item, idx) => (
              <button
                key={item.tab}
                type="button"
                onClick={() => setActiveCheckIdx(idx)}
                className={`${styles.checkTabBtn} ${
                  activeCheckIdx === idx ? styles.checkTabBtnActive : ""
                }`}
              >
                {item.tab}
              </button>
            ))}
          </div>

          <div className={styles.checklistPanel}>
            <div>
              <h3 style={{ fontSize: "26px", fontWeight: 600, margin: "0 0 12px" }}>
                {activeChecklist.title}
              </h3>
              <p style={{ fontSize: "15.5px", color: "#cbd5e1", lineHeight: 1.68, margin: "0 0 20px" }}>
                {activeChecklist.desc}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "grid", gap: "12px" }}>
                {activeChecklist.points.map((pt) => (
                  <li key={pt} style={{ display: "flex", gap: "10px", fontSize: "14.5px" }}>
                    <span style={{ color: "#38bdf8", fontWeight: 600 }}>✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className={styles.coverBtn}>
                <span>Get Free Help From Our Dubai Engineers</span>
                <span>→</span>
              </Link>
            </div>

            <div className={styles.checklistPhoto}>
              <Image
                src={activeChecklist.image}
                alt={activeChecklist.title}
                fill
                sizes="480px"
                className={styles.coverImg}
              />
            </div>
          </div>
        </div>
      </section>

      <TrustedBrandsSection />
      <CtaBanner />
    </main>
  );
}
