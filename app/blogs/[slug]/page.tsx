import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import TrustedBrandsSection from "@/components/TrustedBrandsSection/TrustedBrandsSection";
import CtaBanner from "@/components/CtaBanner/CtaBanner";
import { BLOG_POSTS_DATA } from "@/data/siteData";
import styles from "../BlogsPage.module.css";

export function generateStaticParams() {
  return BLOG_POSTS_DATA.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS_DATA.find((p) => p.slug === slug);
  if (!post) {
    return { title: "Article Not Found | CATS Computers L.L.C" };
  }
  return {
    title: `${post.title} | CATS Computers L.L.C Blog`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS_DATA.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS_DATA.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main className={styles.blogsPage}>
      {/* ==================== 1. EDITORIAL ARTICLE HEADER ==================== */}
      <section className={styles.magazineHero}>
        <div className={styles.container}>
          <div className={styles.magPill}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/blogs">Blogs &amp; IT Guides</Link>
            <span>/</span>
            <span>{post.category}</span>
          </div>

          <h1 className={styles.magTitle} style={{ maxWidth: "960px", marginBottom: "18px" }}>
            {post.title}
          </h1>

          <p style={{ fontSize: "16px", color: "#cbd5e1", margin: 0 }}>
            Published on <strong>{post.date}</strong> • Written by{" "}
            <strong>{post.author}</strong> ({post.authorRole}) • ⏱ {post.readTime}
          </p>
        </div>
      </section>

      {/* ==================== 2. 2-COLUMN EDITORIAL READER WORKSPACE ==================== */}
      <section className={styles.readerWorkspace}>
        <div className={styles.container}>
          <div className={styles.readerGrid}>
            {/* Left Sticky Author & Key Takeaways Sidebar */}
            <aside className={styles.readerSidebar}>
              <div className={styles.authorBox}>
                <div
                  style={{
                    position: "relative",
                    height: "165px",
                    borderRadius: "14px",
                    overflow: "hidden",
                    marginBottom: "16px",
                  }}
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="300px"
                    className={styles.coverImg}
                  />
                </div>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    color: "#1254ff",
                  }}
                >
                  Verified By
                </span>
                <h3 style={{ fontSize: "18px", fontWeight: 600, margin: "4px 0" }}>
                  {post.author}
                </h3>
                <p style={{ fontSize: "13px", color: "#64748b", margin: "0 0 16px" }}>
                  {post.authorRole} — CATS Computers L.L.C, Burdubai
                </p>

                <Link
                  href="/contact"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "12px 16px",
                    borderRadius: "12px",
                    background: "#1254ff",
                    color: "#ffffff",
                    fontSize: "13.5px",
                    fontWeight: 500,
                    textDecoration: "none",
                  }}
                >
                  Ask Our Engineers About This →
                </Link>
              </div>

              <div className={styles.authorBox}>
                <h4 style={{ fontSize: "14px", fontWeight: 600, margin: "0 0 12px" }}>
                  Quick Key Takeaways
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "10px" }}>
                  {post.keyTakeaways.map((pt) => (
                    <li
                      key={pt}
                      style={{
                        display: "flex",
                        gap: "8px",
                        fontSize: "13px",
                        color: "#334155",
                        lineHeight: 1.5,
                      }}
                    >
                      <span style={{ color: "#1254ff", fontWeight: 600 }}>✓</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Right Main Article Stream */}
            <article className={styles.articleStreamCard}>
              <div
                style={{
                  position: "relative",
                  height: "340px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  marginBottom: "32px",
                }}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  priority
                  sizes="(max-width: 1080px) 100vw, 820px"
                  className={styles.coverImg}
                />
              </div>

              <p
                style={{
                  fontSize: "17.5px",
                  lineHeight: 1.75,
                  color: "#1e293b",
                  fontWeight: 500,
                  marginBottom: "32px",
                }}
              >
                {post.excerpt}
              </p>

              {post.sections.map((sec, idx) => (
                <div key={sec.heading} className={styles.chapterBlock}>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "4px 11px",
                      borderRadius: "999px",
                      background: "rgba(18, 84, 255, 0.09)",
                      color: "#1254ff",
                      fontSize: "11.5px",
                      fontWeight: 600,
                      marginBottom: "10px",
                    }}
                  >
                    Part 0{idx + 1}
                  </span>
                  <h2 style={{ fontSize: "24px", fontWeight: 600, margin: "0 0 12px" }}>
                    {sec.heading}
                  </h2>
                  <p style={{ fontSize: "15.5px", lineHeight: 1.78, color: "#475569", margin: 0 }}>
                    {sec.body}
                  </p>
                </div>
              ))}
            </article>
          </div>
        </div>
      </section>

      {/* ==================== 3. MORE ARTICLES ==================== */}
      <section className={styles.articlesSection} style={{ paddingTop: 0 }}>
        <div className={styles.container}>
          <h2 style={{ fontSize: "28px", fontWeight: 600, marginBottom: "24px" }}>
            More Helpful Dubai IT Guides
          </h2>
          <div className={styles.editorialGrid}>
            {relatedPosts.map((rel) => (
              <article key={rel.slug} className={styles.articleCard}>
                <div className={styles.articleThumb}>
                  <Image
                    src={rel.image}
                    alt={rel.title}
                    fill
                    sizes="400px"
                    className={styles.coverImg}
                  />
                  <span className={styles.articleCatBadge}>{rel.category}</span>
                </div>
                <div className={styles.articleBody}>
                  <div>
                    <h3 className={styles.articleTitle}>{rel.title}</h3>
                    <p className={styles.articleExcerpt}>{rel.excerpt}</p>
                  </div>
                  <Link href={`/blogs/${rel.slug}`} className={styles.readGuideLink}>
                    <span>Read Guide</span>
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TrustedBrandsSection />
      <CtaBanner />
    </main>
  );
}
