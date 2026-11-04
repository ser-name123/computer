import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageBanner from "@/components/PageBanner/PageBanner";
import WorkProcessSection from "@/components/WorkProcessSection/WorkProcessSection";
import ConsultationSection from "@/components/ConsultationSection/ConsultationSection";
import TrustedBrandsSection from "@/components/TrustedBrandsSection/TrustedBrandsSection";
import { SERVICES_DATA } from "@/data/siteData";
import styles from "@/styles/InnerPages.module.css";

export const metadata: Metadata = {
  title: "Our Services & Solutions | CATS Computers L.L.C — Dubai, UAE",
  description:
    "Explore all 12 easy-to-understand IT services and hardware solutions from CATS Computers in Dubai — office Wi-Fi, cabling, CCTV, servers, cloud email, and 24/7 AMC support.",
};

const SERVICE_PROMISES = [
  {
    num: "01",
    tag: "Zero Cost Visit",
    title: "Free On-Site Survey",
    desc: "We visit your Dubai office or warehouse for free to check your layout before quoting.",
  },
  {
    num: "02",
    tag: "Ready Dubai Stock",
    title: "Fast Installation",
    desc: "Switches, Wi-Fi APs, cables, and cameras are in stock at our Burdubai hub for quick setup.",
  },
  {
    num: "03",
    tag: "Certified Quality",
    title: "Neat & Labeled Work",
    desc: "Every cable and rack is neatly dressed, labeled, and tested so it works reliably for years.",
  },
  {
    num: "04",
    tag: "Always Available",
    title: "24/7 Friendly Support",
    desc: "Quick 15-minute remote help and fast on-site engineer visits whenever your team needs us.",
  },
];

const AMC_PACKAGES = [
  {
    badge: "Starter Care",
    title: "On-Call & Preventive IT Support",
    desc: "Ideal for smaller offices (5–20 staff) that need monthly system health checks, remote troubleshooting, and priority call-out rates.",
    image: "/images/about-engineer-left.jpg",
    points: [
      "Unlimited business-hours remote helpdesk",
      "Scheduled monthly on-site preventive checkup",
      "Antivirus, Windows & firewall update checks",
    ],
  },
  {
    badge: "Most Popular",
    title: "Comprehensive Annual AMC",
    desc: "Complete peace of mind for growing companies (20–150 staff) with unlimited remote & on-site engineer visits included in one fixed annual fee.",
    image: "/images/service-managed-it.jpg",
    points: [
      "15-minute remote response & fast on-site visits",
      "Full care for servers, Wi-Fi, PCs, printers & CCTV",
      "Daily backup verification & vendor warranty handling",
    ],
  },
  {
    badge: "Enterprise 24/7",
    title: "Multi-Branch & 24/7 Critical SLA",
    desc: "Built for multi-branch companies, clinics, hotels, and warehouses that run 24/7 and need round-the-clock monitoring and spare hardware.",
    image: "/images/hero-huawei-elite.jpg",
    points: [
      "24/7/365 emergency support & 2-hour Dubai dispatch",
      "Dedicated account engineer & quarterly IT reviews",
      "Standby loaner switches/firewalls during warranty claims",
    ],
  },
];

export default function ServicesPage() {
  const coreServices = SERVICES_DATA.filter((s) => s.category === "Core IT Services");
  const hardwareSolutions = SERVICES_DATA.filter(
    (s) => s.category === "Hardware & Security Solutions"
  );

  return (
    <main className={styles.pageMain}>
      {/* ==================== SECTION 1: HERO BANNER ==================== */}
      <PageBanner
        eyebrow="ALL 12 IT SERVICES & SOLUTIONS — DUBAI, UAE"
        title="Complete Office IT, Security & Hardware Solutions."
        subtitle="Whether you are setting up a brand-new office, fixing slow Wi-Fi, installing CCTV and door access, or looking for a reliable 24/7 IT maintenance partner — we handle everything under one roof."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        bgImage="/images/hero-bg.jpg"
        primaryCtaText="Book Free Site Survey"
        primaryCtaHref="/contact"
        secondaryCtaText="See Our Past Projects"
        secondaryCtaHref="/case-studies"
        metrics={[
          { value: "12+", label: "Complete IT Solutions" },
          { value: "30+", label: "Official Hardware Brands" },
          { value: "< 15m", label: "Remote Helpdesk Speed" },
          { value: "99.9%", label: "Smooth Office Uptime" },
        ]}
      />

      {/* ==================== SECTION 2: FLOATING 4-CARD PROMISE STRIP ==================== */}
      <section className={styles.floatingStripSection}>
        <div className={styles.floatingStripGrid}>
          {SERVICE_PROMISES.map((item) => (
            <div key={item.num} className={styles.floatingStripCard}>
              <div className={styles.floatingStripNum}>{item.num}</div>
              <div className={styles.floatingStripBody}>
                <span className={styles.floatingStripTag}>{item.tag}</span>
                <h2 className={styles.floatingStripTitle}>{item.title}</h2>
                <p className={styles.floatingStripDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== SECTION 3: PART 1 — CORE IT SERVICES (6) ==================== */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.pillBadgeLight}>
              <span className={styles.pillDot} />
              <span>01 — Core Office IT Services</span>
            </div>
            <h2 className={styles.sectionTitleLight}>
              Networking, Wi-Fi, Cybersecurity, Cloud &amp; 24/7 IT Support.
            </h2>
            <p className={styles.sectionSubtitleLight}>
              Click any service below to see in simple terms what is included, how we install it, and which brands we use.
            </p>
          </div>

          <div className={styles.grid3}>
            {coreServices.map((service) => (
              <article key={service.slug} className={styles.mediaCard}>
                <div className={styles.mediaCardThumb}>
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    sizes="(max-width: 992px) 100vw, 420px"
                    className={styles.mediaCardImg}
                  />
                  <span className={styles.mediaCardTopBadge}>
                    {service.id} • {service.badge}
                  </span>
                </div>
                <div className={styles.mediaCardBody}>
                  <div>
                    <h3 className={styles.cardTitleLight}>{service.title}</h3>
                    <p className={styles.cardTextLight}>{service.shortDescription}</p>
                    <div className={styles.vendorCluster} style={{ marginBottom: "20px" }}>
                      {service.vendors.slice(0, 3).map((v) => (
                        <span key={v} className={styles.vendorChip}>
                          {v}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link href={`/services/${service.slug}`} className={styles.cardLink}>
                    <span>Explore {service.shortTitle}</span>
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 4: PART 2 — HARDWARE & SECURITY SOLUTIONS (6) ==================== */}
      <section className={styles.sectionDark}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.pillBadgeDark}>
              <span className={styles.pillDot} />
              <span>02 — Hardware, Security &amp; Smart Office</span>
            </div>
            <h2 className={styles.sectionTitleDark}>
              CCTV Cameras, Biometric Doors, Servers, Office Phones &amp; Meeting Rooms.
            </h2>
            <p className={styles.sectionSubtitleDark}>
              Original equipment supplied from our Burdubai warehouse and neatly installed by our own technicians.
            </p>
          </div>

          <div className={styles.grid3}>
            {hardwareSolutions.map((service) => (
              <article
                key={service.slug}
                className={styles.mediaCard}
                style={{
                  background: "rgba(10, 25, 78, 0.72)",
                  borderColor: "rgba(96, 165, 250, 0.24)",
                }}
              >
                <div className={styles.mediaCardThumb}>
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    sizes="(max-width: 992px) 100vw, 420px"
                    className={styles.mediaCardImg}
                  />
                  <span className={styles.mediaCardTopBadge}>
                    {service.id} • {service.badge}
                  </span>
                </div>
                <div className={styles.mediaCardBody}>
                  <div>
                    <h3 className={styles.cardTitleDark}>{service.title}</h3>
                    <p className={styles.cardTextDark}>{service.shortDescription}</p>
                    <div className={styles.vendorCluster} style={{ marginBottom: "22px" }}>
                      {service.vendors.slice(0, 3).map((v) => (
                        <span key={v} className={styles.vendorChipDark}>
                          {v}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link href={`/services/${service.slug}`} className={styles.cardLinkDark}>
                    <span>View Solution Details</span>
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 5: WHY ONE-STOP IT BEATS MULTIPLE VENDORS ==================== */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.pillBadgeLight}>
              <span className={styles.pillDot} />
              <span>Why Choose One Partner?</span>
            </div>
            <h2 className={styles.sectionTitleLight}>
              Stop Dealing With 5 Different Vendors for Your Office IT.
            </h2>
            <p className={styles.sectionSubtitleLight}>
              When one team handles your cabling, Wi-Fi, cameras, phones, and servers, everything works together smoothly.
            </p>
          </div>

          <div className={styles.comparisonGrid}>
            <div className={styles.comparisonCardProblem}>
              <div className={styles.mediaCardThumb} style={{ height: "210px" }}>
                <Image
                  src="/images/case-study-cloud-migration.jpg"
                  alt="Multiple Separate Vendors Problem"
                  fill
                  sizes="(max-width: 992px) 100vw, 620px"
                  className={styles.mediaCardImg}
                />
                <span className={styles.mediaCardTopBadge}>The Old Way (Multiple Vendors)</span>
              </div>
              <div className={styles.mediaCardBody}>
                <div>
                  <h3 className={styles.cardTitleLight}>Blame Games &amp; Project Delays</h3>
                  <ul className={styles.problemList}>
                    <li className={styles.problemItem}>
                      <span className={styles.problemIcon}>✕</span>
                      <span>The CCTV guy blames the network guy when cameras disconnect</span>
                    </li>
                    <li className={styles.problemItem}>
                      <span className={styles.problemIcon}>✕</span>
                      <span>Different invoices, warranties, and support numbers to track</span>
                    </li>
                    <li className={styles.problemItem}>
                      <span className={styles.problemIcon}>✕</span>
                      <span>Grey-market hardware with no official UAE warranty support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.comparisonCardSolution}>
              <div className={styles.mediaCardThumb} style={{ height: "210px" }}>
                <Image
                  src="/images/company/huawei-ekit-team.jpg"
                  alt="Single Point of Accountability with CATS"
                  fill
                  sizes="(max-width: 992px) 100vw, 620px"
                  className={styles.mediaCardImg}
                />
                <span className={styles.mediaCardTopBadge}>The CATS Way (All-In-One)</span>
              </div>
              <div className={styles.mediaCardBody}>
                <div>
                  <h3 className={styles.cardTitleDark}>One Team. One Number. Zero Stress.</h3>
                  <ul className={styles.checkList} style={{ marginTop: "18px", marginBottom: 0 }}>
                    <li className={styles.checkItemDark}>
                      <span className={styles.checkIcon}>✓</span>
                      <span>Single point of responsibility for your entire office technology</span>
                    </li>
                    <li className={styles.checkItemDark}>
                      <span className={styles.checkIcon}>✓</span>
                      <span>One clean quotation, one project manager, and on-time handover</span>
                    </li>
                    <li className={styles.checkItemDark}>
                      <span className={styles.checkIcon}>✓</span>
                      <span>100% genuine UAE distributor stock with direct warranty care</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 6: FLEXIBLE AMC & SUPPORT PLANS ==================== */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.pillBadgeLight}>
              <span className={styles.pillDot} />
              <span>Flexible Support Options</span>
            </div>
            <h2 className={styles.sectionTitleLight}>
              Support Models Tailored to Your Office Size.
            </h2>
            <p className={styles.sectionSubtitleLight}>
              Whether you need a one-time installation or year-round IT care, we have a simple plan for you.
            </p>
          </div>

          <div className={styles.grid3}>
            {AMC_PACKAGES.map((pkg) => (
              <article key={pkg.title} className={styles.mediaCard}>
                <div className={styles.mediaCardThumb} style={{ height: "205px" }}>
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    sizes="(max-width: 992px) 100vw, 420px"
                    className={styles.mediaCardImg}
                  />
                  <span className={styles.mediaCardTopBadge}>{pkg.badge}</span>
                </div>
                <div className={styles.mediaCardBody}>
                  <div>
                    <h3 className={styles.cardTitleLight}>{pkg.title}</h3>
                    <p className={styles.cardTextLight}>{pkg.desc}</p>
                    <ul className={styles.checkList} style={{ margin: "0 0 20px" }}>
                      {pkg.points.map((pt) => (
                        <li key={pt} className={styles.checkItem} style={{ fontSize: "13.5px" }}>
                          <span className={styles.checkIcon}>✓</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/contact" className={styles.cardLink}>
                    <span>Request Plan Quote</span>
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 7: 4-STEP WORK PROCESS ==================== */}
      <WorkProcessSection />

      {/* ==================== SECTION 8: 30+ TRUSTED BRANDS ==================== */}
      <TrustedBrandsSection />

      {/* ==================== SECTION 9: CONSULTATION FORM ==================== */}
      <ConsultationSection />
    </main>
  );
}
