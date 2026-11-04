import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./not-found.module.css";

const QUICK_DESTINATIONS = [
  {
    tag: "12 Core Services",
    title: "Explore All IT Services",
    description:
      "Browse our complete range of networking, server, cybersecurity, cloud, CCTV, and managed AMC services.",
    href: "/services",
    linkLabel: "View All Services",
    image: "/images/about-engineer-left.jpg",
  },
  {
    tag: "Authorized Partner",
    title: "Huawei eKit & Ruijie Reyee",
    description:
      "Official UAE Elite & Golden distributor for enterprise switches, optical gateways, and high-speed Wi-Fi.",
    href: "/services/huawei-ekit-and-ruijie-reyee",
    linkLabel: "Explore Hardware Stock",
    image: "/images/company/huawei-ekit-award.jpg",
  },
  {
    tag: "About CATS Dubai",
    title: "Our Company & Story",
    description:
      "Meet our certified Dubai engineering team and see why 500+ UAE businesses trust CATS Computers L.L.C.",
    href: "/about",
    linkLabel: "Read About Us",
    image: "/images/company/team-group-1.jpg",
  },
  {
    tag: "Verified Projects",
    title: "Portfolio & Case Studies",
    description:
      "See real IT setups we delivered for Dubai corporate offices, JAFZA warehouses, clinics, and retail chains.",
    href: "/case-studies",
    linkLabel: "View Case Studies",
    image: "/images/case-study-boardroom.jpg",
  },
  {
    tag: "Quick Answers",
    title: "FAQ & Help Center",
    description:
      "Find instant answers about our 24/7 AMC response times, official hardware warranties, and site surveys.",
    href: "/faq",
    linkLabel: "Visit FAQ Page",
    image: "/images/blog-cloud-engineers.jpg",
  },
  {
    tag: "24/7 Dubai Desk",
    title: "Contact Us & Free IT Audit",
    description:
      "Need urgent IT support or a custom quotation? Speak directly with our Burdubai engineering desk today.",
    href: "/contact",
    linkLabel: "Get In Touch",
    image: "/images/consultation-team.jpg",
  },
];

export default function NotFound() {
  return (
    <main className={styles.notFoundMain}>
      {/* ==================== DARK NAVY CYBER 404 HERO ==================== */}
      <section className={styles.heroStage} aria-labelledby="not-found-heading">
        <div className={styles.cyberGridOverlay} aria-hidden="true" />
        <div className={styles.glowOrbLeft} aria-hidden="true" />
        <div className={styles.glowOrbRight} aria-hidden="true" />

        <div className={styles.container}>
          <div className={styles.heroGrid}>
            {/* Left Column: 404 Code, Clear Message & Primary Actions */}
            <div className={styles.leftCol}>
              <div className={styles.statusPill}>
                <span className={styles.pulseDot} />
                <span>Error 404 • Route Connection Not Found</span>
              </div>

              <div className={styles.giantCodeWrap}>
                <span className={styles.giantCode}>404</span>
                <span className={styles.codeFloatingTag}>PORT_UNPLUGGED</span>
              </div>

              <h1 id="not-found-heading" className={styles.heroTitle}>
                Looks Like This Cable Is{" "}
                <span className={styles.heroTitleAccent}>Unplugged.</span>
              </h1>

              <p className={styles.heroDescription}>
                The page you are looking for might have been moved, renamed, or is
                temporarily unavailable. Don&apos;t worry — our network is 100% online
                and you can jump right back using the buttons below.
              </p>

              <div className={styles.ctaRow}>
                <Link href="/" className={styles.primaryBtn}>
                  <span>Back to Home Page</span>
                  <span className={styles.primaryBtnIcon}>
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path
                        d="M3.5 10.5L10.5 3.5M10.5 3.5H4.5M10.5 3.5V9.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>

                <Link href="/services" className={styles.secondaryBtn}>
                  <span>Explore All 12 Services</span>
                </Link>

                <Link href="/contact" className={styles.secondaryBtn}>
                  <span>Contact Dubai Desk</span>
                </Link>
              </div>

              {/* Network Telemetry Diagnostic Strip */}
              <div className={styles.DiagnosticStrip}>
                <div className={styles.diagItem}>
                  <span className={styles.diagLabel}>SYSTEM STATUS</span>
                  <span className={styles.diagValue}>All Systems Online</span>
                </div>
                <div className={styles.diagItem}>
                  <span className={styles.diagLabel}>SUPPORT DESK</span>
                  <span className={styles.diagValue}>24/7 Dubai NOC</span>
                </div>
                <div className={styles.diagItem}>
                  <span className={styles.diagLabel}>DIRECT LINE</span>
                  <span className={styles.diagValue}>+971 4 227 3378</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Engineer Card */}
            <div className={styles.rightCol}>
              <div className={styles.visualFrame}>
                <div className={styles.visualImageWrap}>
                  <Image
                    src="/images/cta-banner-engineer.jpg"
                    alt="CATS Computers IT Engineer Checking Network Routing"
                    fill
                    priority
                    sizes="(max-width: 992px) 100vw, 560px"
                    className={styles.visualImg}
                  />
                  <div className={styles.visualOverlay} />
                </div>

                <div className={styles.floatingTopBadge}>
                  <span className={styles.greenDot} />
                  <span>CATS 24/7 Helpdesk Active — Burdubai, Dubai</span>
                </div>

                <div className={styles.visualBottomCard}>
                  <div className={styles.visualBottomText}>
                    <h3>Need Immediate IT Assistance?</h3>
                    <p>
                      Our certified engineers in Dubai are ready to help you find the
                      right hardware or service.
                    </p>
                  </div>
                  <a href="tel:+97142273378" className={styles.callNowChip}>
                    <span>Call +971 4 227 3378</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== QUICK NAVIGATION DESTINATIONS ==================== */}
      <section className={styles.quickLinksSection} aria-labelledby="quick-links-heading">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>
              <span>Quick Navigation Hub</span>
            </div>
            <h2 id="quick-links-heading" className={styles.sectionTitle}>
              Where Would You Like to Go Next?
            </h2>
            <p className={styles.sectionSubtitle}>
              Pick any of our main pages below to continue exploring CATS Computers L.L.C.
            </p>
          </div>

          <div className={styles.cardsGrid}>
            {QUICK_DESTINATIONS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={styles.destCard}
                style={{ textDecoration: "none" }}
              >
                <div className={styles.destThumb}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 992px) 100vw, 420px"
                    className={styles.destImg}
                  />
                  <span className={styles.destTag}>{item.tag}</span>
                </div>

                <div className={styles.destBody}>
                  <div>
                    <h3 className={styles.destTitle}>{item.title}</h3>
                    <p className={styles.destDesc}>{item.description}</p>
                  </div>

                  <span className={styles.destLinkRow}>
                    <span>{item.linkLabel}</span>
                    <span>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

