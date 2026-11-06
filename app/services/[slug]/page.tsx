import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import TrustedBrandsSection from "@/components/TrustedBrandsSection/TrustedBrandsSection";
import CtaBanner from "@/components/CtaBanner/CtaBanner";
import { SERVICES_DATA } from "@/data/siteData";
import styles from "./ServiceDetail.module.css";

const STEP_IMAGES = [
  "/images/process-step-1.jpg",
  "/images/process-step-2.jpg",
  "/images/process-step-3.jpg",
  "/images/process-step-4.jpg",
];

const CAPABILITY_IMAGES = [
  "/images/service-managed-it.jpg",
  "/images/card-cloud-solutions.jpg",
  "/images/card-cybersecurity.jpg",
  "/images/about-engineer-left.jpg",
  "/images/about-team-right.jpg",
  "/images/case-study-boardroom.jpg",
];

export function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  if (!service) {
    return { title: "Service Not Found | CATS Computers L.L.C" };
  }
  return {
    title: `${service.title} in Dubai | CATS Computers L.L.C`,
    description: service.heroDescription,
  };
}

export default async function IndividualServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className={styles.detailPage}>
      {/* ==================== 1. SPLIT PRODUCT/SERVICE DATASHEET HERO ==================== */}
      <section className={styles.datasheetHero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div>
              <div className={styles.crumbRow}>
                <Link href="/">Home</Link>
                <span>/</span>
                <Link href="/services">Services</Link>
                <span>/</span>
                <span>{service.shortTitle}</span>
              </div>

              <h1 className={styles.serviceTitle}>{service.title}</h1>
              <p className={styles.serviceLead}>{service.heroDescription}</p>

              <div className={styles.vendorStrip}>
                {service.vendors.map((v) => (
                  <span key={v} className={styles.vendorBadge}>
                    ✓ {v}
                  </span>
                ))}
              </div>

              <div className={styles.ctaRow}>
                <Link href="/contact" className={styles.primaryCta}>
                  <span>Book Free Dubai Site Survey</span>
                  <span>→</span>
                </Link>
                <a href="tel:+97142273378" className={styles.secondaryCta}>
                  <span>Call +971 4 227 3378</span>
                </a>
              </div>
            </div>

            {/* Right Framed Photo + 4 Telemetry KPI Boxes */}
            <div className={styles.heroVisualBox}>
              <div className={styles.heroImageFrame}>
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  priority
                  sizes="(max-width: 1080px) 100vw, 560px"
                  className={styles.coverImg}
                />
              </div>

              <div className={styles.metricsRow4}>
                {service.metrics.map((m) => (
                  <div key={m.label} className={styles.metricMiniCard}>
                    <strong>{m.value}</strong>
                    <span>{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 2. STICKY 2-COLUMN BLUEPRINT WORKSPACE ==================== */}
      <section className={styles.blueprintWorkspace}>
        <div className={styles.container}>
          <div className={styles.workspaceGrid}>
            {/* Left Sticky Sidebar: All 12 Services Switcher + Direct Engineer Card */}
            <aside className={styles.leftSidebar}>
              <div className={styles.serviceSwitcherCard}>
                <h2 className={styles.switcherHeading}>All 12 Turnkey Solutions</h2>
                <ul className={styles.switcherList}>
                  {SERVICES_DATA.map((item) => {
                    const isActive = item.slug === service.slug;
                    return (
                      <li key={item.slug}>
                        <Link
                          href={`/services/${item.slug}`}
                          className={`${styles.switcherLink} ${isActive ? styles.switcherLinkActive : ""
                            }`}
                        >
                          <span>
                            {item.id}. {item.shortTitle}
                          </span>
                          <span>→</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className={styles.directEngineerCard}>
                <div className={styles.engineerPhoto}>
                  <Image
                    src="/images/company/team-group-1.jpg"
                    alt="CATS Computers Burdubai Engineering Desk"
                    fill
                    sizes="300px"
                    className={styles.coverImg}
                  />
                </div>
                <h3 className={styles.engineerTitle}>Need a Free Site Visit in Dubai?</h3>
                <p className={styles.engineerSub}>
                  Our engineer visits your office or warehouse at zero cost to inspect your layout
                  and prepare an itemized quote.
                </p>
                <Link href="/contact" className={styles.engineerCallBtn}>
                  <span>Schedule Free Survey</span>
                  <span>→</span>
                </Link>
              </div>
            </aside>

            {/* Right Deep-Dive Stream */}
            <div className={styles.rightStream}>
              {/* Panel 1: Overview & Deliverables */}
              <div className={styles.blueprintPanel}>
                <span className={styles.panelTag}>
                  Solution Blueprint #{service.id} • {service.badge}
                </span>
                <h2 className={styles.panelHeading}>{service.tagline}</h2>
                <p className={styles.panelText}>{service.overviewParagraphs[0]}</p>
                <p className={styles.panelText}>{service.overviewParagraphs[1]}</p>

                <div className={styles.overviewSplit}>
                  <div className={styles.deliverablesBox}>
                    {service.deliverables.map((item) => (
                      <div key={item} className={styles.deliverableRow}>
                        <span style={{ color: "#1254ff", fontWeight: 600 }}>✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.overviewPhoto}>
                    <Image
                      src={service.featureImage}
                      alt={service.title}
                      fill
                      sizes="420px"
                      className={styles.coverImg}
                    />
                  </div>
                </div>
              </div>

              {/* Panel 2: 6 Included Capabilities */}
              <div className={styles.blueprintPanel}>
                <span className={styles.panelTag}>What We Set Up For You</span>
                <h2 className={styles.panelHeading}>
                  6 Complete Capabilities Included in {service.shortTitle}.
                </h2>

                <div className={styles.capabilitiesGrid}>
                  {service.capabilities.map((cap, idx) => (
                    <div key={cap.title} className={styles.capabilityTile}>
                      <div className={styles.capThumb}>
                        <Image
                          src={CAPABILITY_IMAGES[idx % CAPABILITY_IMAGES.length]}
                          alt={cap.title}
                          fill
                          sizes="130px"
                          className={styles.coverImg}
                        />
                      </div>
                      <div>
                        <span className={styles.capNum}>Module 0{idx + 1}</span>
                        <h3 className={styles.capTitle}>{cap.title}</h3>
                        <p className={styles.capDesc}>{cap.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Panel 3: Connected 4-Step Installation Timeline */}
              <div className={styles.blueprintPanel}>
                <span className={styles.panelTag}>Step-by-Step Execution</span>
                <h2 className={styles.panelHeading}>
                  How We Install &amp; Hand Over Your {service.shortTitle}.
                </h2>

                <div className={styles.timelineList}>
                  {service.processSteps.map((step, idx) => (
                    <div key={step.step} className={styles.timelineStep}>
                      <div className={styles.timelineCircle}>{step.step}</div>
                      <div>
                        <h3 className={styles.timelineTitle}>{step.title}</h3>
                        <p className={styles.timelineDesc}>{step.description}</p>
                      </div>
                      <div className={styles.timelineThumb}>
                        <Image
                          src={STEP_IMAGES[idx % STEP_IMAGES.length]}
                          alt={step.title}
                          fill
                          sizes="180px"
                          className={styles.coverImg}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Panel 4: Common Questions */}
              <div className={styles.blueprintPanel}>
                <span className={styles.panelTag}>Frequently Asked Questions</span>
                <h2 className={styles.panelHeading}>
                  Quick Answers About {service.shortTitle} in Dubai.
                </h2>

                <div className={styles.faqStack}>
                  {service.faqs.map((faq) => (
                    <div key={faq.question} className={styles.faqBox}>
                      <h3 className={styles.faqQ}>{faq.question}</h3>
                      <p className={styles.faqA}>{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustedBrandsSection />
      <CtaBanner />
    </main>
  );
}
