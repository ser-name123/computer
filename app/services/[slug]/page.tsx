import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner/PageBanner";
import TrustedBrandsSection from "@/components/TrustedBrandsSection/TrustedBrandsSection";
import CtaBanner from "@/components/CtaBanner/CtaBanner";
import { SERVICES_DATA } from "@/data/siteData";
import styles from "@/styles/InnerPages.module.css";

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

const WHY_CATS_CARDS = [
  {
    badge: "100% Genuine Stock",
    title: "Official UAE Brand Warranty",
    desc: "We supply original equipment directly from authorized UAE distributor channels — no grey-market parts or warranty headaches.",
    image: "/images/company/huawei-ekit-award.jpg",
  },
  {
    badge: "Clean & Certified",
    title: "Neat Setup With Zero Downtime",
    desc: "Our engineers pre-configure hardware in our Burdubai lab and install everything cleanly without disrupting your staff.",
    image: "/images/company/ruijie-cctv-discussion.jpg",
  },
  {
    badge: "24/7 Local Care",
    title: "Fast Remote & On-Site Support",
    desc: "Whenever your team needs help, our Dubai helpdesk connects remotely within 15 minutes or dispatches a field engineer.",
    image: "/images/company/team-group-1.jpg",
  },
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

  const relatedServices = SERVICES_DATA.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <main className={styles.pageMain}>
      {/* ==================== SECTION 1: HERO BANNER ==================== */}
      <PageBanner
        eyebrow={`${service.category.toUpperCase()} • ${service.badge.toUpperCase()}`}
        title={service.title}
        subtitle={service.heroDescription}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.shortTitle },
        ]}
        bgImage={service.heroImage}
        primaryCtaText="Book Free Site Survey & Quote"
        primaryCtaHref="/contact"
        secondaryCtaText="Call +971 4 227 3378"
        secondaryCtaHref="tel:+97142273378"
        metrics={service.metrics}
      />

      {/* ==================== SECTION 2: FLOATING 4-CARD SERVICE PROMISE STRIP ==================== */}
      <section className={styles.floatingStripSection}>
        <div className={styles.floatingStripGrid}>
          <div className={styles.floatingStripCard}>
            <div className={styles.floatingStripNum}>01</div>
            <div className={styles.floatingStripBody}>
              <span className={styles.floatingStripTag}>Free Assessment</span>
              <h2 className={styles.floatingStripTitle}>Free Dubai Site Visit</h2>
              <p className={styles.floatingStripDesc}>
                Our engineer inspects your office layout and requirements at zero cost before quoting.
              </p>
            </div>
          </div>
          <div className={styles.floatingStripCard}>
            <div className={styles.floatingStripNum}>02</div>
            <div className={styles.floatingStripBody}>
              <span className={styles.floatingStripTag}>Original Brands</span>
              <h2 className={styles.floatingStripTitle}>Genuine UAE Warranty</h2>
              <p className={styles.floatingStripDesc}>
                Supplied directly from official distributor stock at our Burdubai warehouse.
              </p>
            </div>
          </div>
          <div className={styles.floatingStripCard}>
            <div className={styles.floatingStripNum}>03</div>
            <div className={styles.floatingStripBody}>
              <span className={styles.floatingStripTag}>Clean Handover</span>
              <h2 className={styles.floatingStripTitle}>Tested &amp; Labeled Setup</h2>
              <p className={styles.floatingStripDesc}>
                Neat installation with full testing reports, clear labels, and staff walkthrough.
              </p>
            </div>
          </div>
          <div className={styles.floatingStripCard}>
            <div className={styles.floatingStripNum}>04</div>
            <div className={styles.floatingStripBody}>
              <span className={styles.floatingStripTag}>Always Covered</span>
              <h2 className={styles.floatingStripTitle}>24/7 AMC Support Ready</h2>
              <p className={styles.floatingStripDesc}>
                Backed by 15-minute remote helpdesk and rapid on-site engineer dispatch across Dubai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 3: OVERVIEW & DELIVERABLES SPLIT ==================== */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.splitRow}>
            <div>
              <div className={styles.pillBadgeLight}>
                <span className={styles.pillDot} />
                <span>How We Help — {service.id}</span>
              </div>
              <h2 className={styles.sectionTitleLight}>{service.tagline}</h2>
              <p className={styles.cardTextLight}>{service.overviewParagraphs[0]}</p>
              <p className={styles.cardTextLight}>{service.overviewParagraphs[1]}</p>

              <h3 className={styles.cardTitleLight} style={{ marginTop: "24px" }}>
                What You Get With Every Project:
              </h3>
              <ul className={styles.checkList}>
                {service.deliverables.map((item) => (
                  <li key={item} className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: "22px" }}>
                <span className={styles.formLabel} style={{ display: "block", marginBottom: "8px" }}>
                  Official Technology Brands We Use:
                </span>
                <div className={styles.vendorCluster}>
                  {service.vendors.map((vendor) => (
                    <span key={vendor} className={styles.vendorChip}>
                      {vendor}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.imageShowcaseWrap}>
              <Image
                src={service.featureImage}
                alt={service.title}
                fill
                sizes="(max-width: 992px) 100vw, 600px"
                className={styles.imageShowcaseImg}
              />
              <div className={styles.floatingStatBadge}>
                <span className={styles.floatingStatValue}>
                  {service.metrics[0]?.value}
                </span>
                <span className={styles.floatingStatLabel}>
                  {service.metrics[0]?.label} — Certified UAE Execution
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 4: 6 CORE CAPABILITIES GRID (WITH IMAGES) ==================== */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.pillBadgeLight}>
              <span className={styles.pillDot} />
              <span>What&apos;s Included</span>
            </div>
            <h2 className={styles.sectionTitleLight}>
              Complete {service.shortTitle} Solutions.
            </h2>
            <p className={styles.sectionSubtitleLight}>
              Everything is handled in-house by our Dubai engineers so your system works smoothly from day one.
            </p>
          </div>

          <div className={styles.grid3}>
            {service.capabilities.map((cap, idx) => (
              <article key={cap.title} className={styles.mediaCard}>
                <div className={styles.mediaCardThumb} style={{ height: "195px" }}>
                  <Image
                    src={CAPABILITY_IMAGES[idx % CAPABILITY_IMAGES.length]}
                    alt={cap.title}
                    fill
                    sizes="(max-width: 992px) 100vw, 400px"
                    className={styles.mediaCardImg}
                  />
                  <span className={styles.mediaCardTopBadge}>
                    0{idx + 1} • {service.badge}
                  </span>
                </div>
                <div className={styles.mediaCardBody}>
                  <div>
                    <h3 className={styles.cardTitleLight}>{cap.title}</h3>
                    <p className={styles.cardTextLight} style={{ marginBottom: 0 }}>
                      {cap.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 5: BEFORE VS AFTER COMPARISON BENTO ==================== */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.pillBadgeLight}>
              <span className={styles.pillDot} />
              <span>Real Business Impact</span>
            </div>
            <h2 className={styles.sectionTitleLight}>
              Common Problems We Fix vs. Your New Setup.
            </h2>
            <p className={styles.sectionSubtitleLight}>
              Here is how upgrading your {service.shortTitle.toLowerCase()} with CATS Computers transforms daily work for your staff.
            </p>
          </div>

          <div className={styles.comparisonGrid}>
            <div className={styles.comparisonCardProblem}>
              <div className={styles.mediaCardThumb} style={{ height: "200px" }}>
                <Image
                  src="/images/case-study-dev-pair.jpg"
                  alt="Before Upgrading"
                  fill
                  sizes="(max-width: 992px) 100vw, 600px"
                  className={styles.mediaCardImg}
                />
                <span className={styles.mediaCardTopBadge}>Before CATS Upgrade</span>
              </div>
              <div className={styles.mediaCardBody}>
                <div>
                  <h3 className={styles.cardTitleLight}>Daily Slowdowns &amp; Risks</h3>
                  <ul className={styles.problemList}>
                    <li className={styles.problemItem}>
                      <span className={styles.problemIcon}>✕</span>
                      <span>Unplanned disconnections and slow performance during busy hours</span>
                    </li>
                    <li className={styles.problemItem}>
                      <span className={styles.problemIcon}>✕</span>
                      <span>Messy wiring, missing documentation, and hard-to-find faults</span>
                    </li>
                    <li className={styles.problemItem}>
                      <span className={styles.problemIcon}>✕</span>
                      <span>Slow vendor response when your team needs urgent help</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.comparisonCardSolution}>
              <div className={styles.mediaCardThumb} style={{ height: "200px" }}>
                <Image
                  src={service.heroImage}
                  alt="After CATS Upgrade"
                  fill
                  sizes="(max-width: 992px) 100vw, 600px"
                  className={styles.mediaCardImg}
                />
                <span className={styles.mediaCardTopBadge}>After CATS Installation</span>
              </div>
              <div className={styles.mediaCardBody}>
                <div>
                  <h3 className={styles.cardTitleDark}>Fast, Clean &amp; Worry-Free</h3>
                  <ul className={styles.checkList} style={{ marginTop: "18px", marginBottom: 0 }}>
                    <li className={styles.checkItemDark}>
                      <span className={styles.checkIcon}>✓</span>
                      <span>Rock-solid speed and reliability built for growing teams</span>
                    </li>
                    <li className={styles.checkItemDark}>
                      <span className={styles.checkIcon}>✓</span>
                      <span>Neatly labeled equipment with complete handover diagrams</span>
                    </li>
                    <li className={styles.checkItemDark}>
                      <span className={styles.checkIcon}>✓</span>
                      <span>15-minute remote helpdesk &amp; on-site Dubai engineer care</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 6: 4-STEP DEPLOYMENT WORKFLOW (WITH IMAGES) ==================== */}
      <section className={styles.sectionDark}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.pillBadgeDark}>
              <span className={styles.pillDot} />
              <span>Simple 4-Step Delivery</span>
            </div>
            <h2 className={styles.sectionTitleDark}>
              How We Set Up Your {service.shortTitle}.
            </h2>
            <p className={styles.sectionSubtitleDark}>
              A clear, step-by-step process so your project finishes on time and within budget.
            </p>
          </div>

          <div className={styles.grid4}>
            {service.processSteps.map((step, idx) => (
              <div
                key={step.step}
                className={styles.mediaCard}
                style={{
                  background: "rgba(10, 25, 78, 0.72)",
                  borderColor: "rgba(96, 165, 250, 0.24)",
                }}
              >
                <div className={styles.mediaCardThumb} style={{ height: "165px" }}>
                  <Image
                    src={STEP_IMAGES[idx % STEP_IMAGES.length]}
                    alt={step.title}
                    fill
                    sizes="(max-width: 992px) 100vw, 320px"
                    className={styles.mediaCardImg}
                  />
                  <span className={styles.mediaCardTopBadge}>STEP {step.step}</span>
                </div>
                <div className={styles.mediaCardBody} style={{ padding: "22px" }}>
                  <div>
                    <h3 className={styles.cardTitleDark}>{step.title}</h3>
                    <p className={styles.cardTextDark} style={{ marginBottom: 0 }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 7: WHY CHOOSE CATS FOR THIS SERVICE ==================== */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.pillBadgeLight}>
              <span className={styles.pillDot} />
              <span>Why Businesses Trust Us</span>
            </div>
            <h2 className={styles.sectionTitleLight}>
              Why Choose CATS Computers in Dubai?
            </h2>
          </div>

          <div className={styles.grid3}>
            {WHY_CATS_CARDS.map((card) => (
              <article key={card.title} className={styles.mediaCard}>
                <div className={styles.mediaCardThumb} style={{ height: "200px" }}>
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 992px) 100vw, 420px"
                    className={styles.mediaCardImg}
                  />
                  <span className={styles.mediaCardTopBadge}>{card.badge}</span>
                </div>
                <div className={styles.mediaCardBody}>
                  <div>
                    <h3 className={styles.cardTitleLight}>{card.title}</h3>
                    <p className={styles.cardTextLight} style={{ marginBottom: 0 }}>
                      {card.desc}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 8: SERVICE FAQS & RELATED SERVICES ==================== */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.splitRow} style={{ alignItems: "flex-start" }}>
            <div>
              <div className={styles.pillBadgeLight}>
                <span className={styles.pillDot} />
                <span>Common Questions</span>
              </div>
              <h2 className={styles.sectionTitleLight}>
                Quick Answers About {service.shortTitle}.
              </h2>
              <div className={styles.accordionList} style={{ marginTop: "24px" }}>
                {service.faqs.map((faq) => (
                  <div key={faq.question} className={`${styles.accordionItem} ${styles.accordionItemOpen}`}>
                    <div className={styles.accordionTrigger} style={{ cursor: "default" }}>
                      <span>{faq.question}</span>
                    </div>
                    <div className={styles.accordionBody}>{faq.answer}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className={styles.pillBadgeLight}>
                <span className={styles.pillDot} />
                <span>Explore More</span>
              </div>
              <h2 className={styles.sectionTitleLight}>
                Other Services You May Need.
              </h2>
              <div className={styles.accordionList} style={{ marginTop: "24px" }}>
                {relatedServices.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/services/${rel.slug}`}
                    className={styles.mediaCard}
                    style={{ textDecoration: "none" }}
                  >
                    <div className={styles.mediaCardThumb} style={{ height: "150px" }}>
                      <Image
                        src={rel.heroImage}
                        alt={rel.title}
                        fill
                        sizes="(max-width: 992px) 100vw, 480px"
                        className={styles.mediaCardImg}
                      />
                      <span className={styles.mediaCardTopBadge}>
                        {rel.id} • {rel.badge}
                      </span>
                    </div>
                    <div className={styles.mediaCardBody} style={{ padding: "20px 24px" }}>
                      <h3 className={styles.cardTitleLight} style={{ fontSize: "18px", marginBottom: "6px" }}>
                        {rel.title}
                      </h3>
                      <p className={styles.cardTextLight} style={{ marginBottom: "10px", fontSize: "13.5px" }}>
                        {rel.shortDescription}
                      </p>
                      <span className={styles.cardLink}>
                        <span>View Service</span>
                        <span>→</span>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 9: BRANDS & CTA BANNER ==================== */}
      <TrustedBrandsSection />
      <CtaBanner />
    </main>
  );
}
