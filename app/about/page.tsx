import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner/PageBanner";
import TrustedBrandsSection from "@/components/TrustedBrandsSection/TrustedBrandsSection";
import CtaBanner from "@/components/CtaBanner/CtaBanner";
import styles from "@/styles/InnerPages.module.css";

export const metadata: Metadata = {
  title: "About Us | CATS Computers L.L.C — Complete IT & Hardware Partner in Dubai",
  description:
    "Learn about CATS Computers L.L.C in Burdubai, Dubai — your friendly, one-stop partner for office Wi-Fi, servers, cybersecurity, CCTV, genuine hardware, and 24/7 IT support.",
};

const QUICK_HIGHLIGHTS = [
  {
    num: "01",
    tag: "Official UAE Partner",
    title: "100% Genuine Products",
    desc: "Direct partner for Huawei eKit, Ruijie Reyee & 30+ global brands with official UAE warranty.",
  },
  {
    num: "02",
    tag: "One-Stop Solution",
    title: "Everything Under One Roof",
    desc: "From cabling, Wi-Fi, and CCTV to servers, cloud emails, and computers — no need to hire 5 vendors.",
  },
  {
    num: "03",
    tag: "Fast Local Support",
    title: "15-Minute Remote Help",
    desc: "Friendly engineers based in Burdubai ready to fix issues remotely in 15 mins or visit your site fast.",
  },
  {
    num: "04",
    tag: "Proven Track Record",
    title: "500+ Happy UAE Clients",
    desc: "Trusted by offices, warehouses, clinics, hotels, and retail shops across Dubai and the UAE.",
  },
];

const CORE_PILLARS = [
  {
    id: "01",
    tag: "Authorized Distribution",
    title: "Huawei eKit Elite & Ruijie Golden Partner",
    desc: "We buy directly from official brand channels. That means you always get 100% original equipment, fair wholesale prices, ready Dubai stock, and full manufacturer warranty.",
    image: "/images/company/huawei-ekit-team.jpg",
  },
  {
    id: "02",
    tag: "In-House Engineering",
    title: "Complete Office IT Setup From A to Z",
    desc: "Moving into a new office or upgrading an old one? Our own team handles cable pulling, Wi-Fi, server racks, firewalls, CCTV cameras, door access, and office phones.",
    image: "/images/company/ruijie-cctv-discussion.jpg",
  },
  {
    id: "03",
    tag: "Peace of Mind",
    title: "24/7 Annual Maintenance (AMC) Care",
    desc: "We don't disappear after installation. Our AMC support team checks your systems every month, keeps backups safe, and helps your staff whenever a computer or printer acts up.",
    image: "/images/service-managed-it.jpg",
  },
];

const JOURNEY_STEPS = [
  {
    step: "01",
    title: "Free Office Visit & Listening",
    desc: "Our engineer visits your Dubai office or warehouse for free, checks your floor plan, and listens to what your team actually needs.",
    image: "/images/process-step-1.jpg",
  },
  {
    step: "02",
    title: "Simple, Honest Quotation",
    desc: "We give you a clear, easy-to-read quote with genuine hardware options that fit your budget — zero hidden charges.",
    image: "/images/process-step-2.jpg",
  },
  {
    step: "03",
    title: "Clean & Neat Installation",
    desc: "We install and label every cable, switch, camera, and server neatly without disturbing your daily office work.",
    image: "/images/process-step-3.jpg",
  },
  {
    step: "04",
    title: "Testing, Training & Ongoing Support",
    desc: "We test every connection, show your team how to use the system easily, and stay available 24/7 whenever you call.",
    image: "/images/process-step-4.jpg",
  },
];

const AWARDS_LIST = [
  {
    badge: "Huawei Enterprise — UAE",
    title: "Authorized Elite Distribution Partner (Huawei eKit)",
    description:
      "Awarded by Huawei for supplying and setting up high-speed business Wi-Fi, switches, and smart office networks across the UAE.",
    image: "/images/company/huawei-ekit-award.jpg",
  },
  {
    badge: "Ruijie Reyee — UAE",
    title: "Top Performing Golden Partner (ADP) 2024",
    description:
      "Recognized as a leading UAE distributor and installer for Ruijie & Reyee cloud-managed networking and warehouse Wi-Fi.",
    image: "/images/company/award-ruijie-adp-2024-b.jpg",
  },
  {
    badge: "Our Burdubai Team",
    title: "Certified, Friendly Engineers in Dubai",
    description:
      "Our showroom and service center on Al Musallah Street, Burdubai is home to trained network, security, and support specialists.",
    image: "/images/company/team-group-1.jpg",
  },
];

export default function AboutPage() {
  return (
    <main className={styles.pageMain}>
      {/* ==================== SECTION 1: HERO BANNER ==================== */}
      <PageBanner
        eyebrow="ABOUT CATS COMPUTERS L.L.C — DUBAI, UAE"
        title="Making Office IT Simple, Fast & Reliable."
        subtitle="Based on Al Musallah Street in Burdubai, CATS Computers L.L.C helps businesses across Dubai and the UAE set up fast Wi-Fi, secure servers, clear CCTV, genuine hardware, and worry-free 24/7 IT support — all under one roof."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        bgImage="/images/hero-huawei-elite.jpg"
        primaryCtaText="Explore Our Services"
        primaryCtaHref="/services"
        secondaryCtaText="Talk to Our Dubai Team"
        secondaryCtaHref="/contact"
        metrics={[
          { value: "30+", label: "Official Tech Brands" },
          { value: "12+", label: "Complete IT Services" },
          { value: "500+", label: "UAE Offices Supported" },
          { value: "24/7", label: "Friendly Helpdesk" },
        ]}
      />

      {/* ==================== SECTION 2: FLOATING 4-CARD HIGHLIGHT STRIP ==================== */}
      <section className={styles.floatingStripSection}>
        <div className={styles.floatingStripGrid}>
          {QUICK_HIGHLIGHTS.map((item) => (
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

      {/* ==================== SECTION 3: WHO WE ARE & STORY SPLIT ==================== */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.splitRow}>
            <div>
              <div className={styles.pillBadgeLight}>
                <span className={styles.pillDot} />
                <span>Who We Are</span>
              </div>
              <h2 className={styles.sectionTitleLight}>
                Your Friendly, One-Stop IT &amp; Hardware Partner in Dubai.
              </h2>
              <p className={styles.cardTextLight}>
                Running a business in the UAE is busy enough — you shouldn&apos;t have to worry about slow Wi-Fi, messy server cables, lost files, or calling five different contractors when the internet stops working.
              </p>
              <p className={styles.cardTextLight}>
                At <strong>CATS Computers L.L.C</strong> (Computer Accessories &amp; Technical Services), we take complete care of your office technology. Because we are both an <strong>authorized hardware distributor</strong> in Burdubai and a <strong>hands-on engineering team</strong>, you get genuine equipment at fair prices and expert installation from the same trusted company.
              </p>

              <ul className={styles.checkList}>
                <li className={styles.checkItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>
                    <strong>Official Brand Partner:</strong> Authorized Huawei eKit Elite Partner &amp; Ruijie Reyee Golden Distributor in the UAE
                  </span>
                </li>
                <li className={styles.checkItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>
                    <strong>Plain-English Advice:</strong> We explain everything clearly without confusing technical jargon
                  </span>
                </li>
                <li className={styles.checkItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>
                    <strong>Right Here in Burdubai:</strong> Water Tank Building, Al Musallah Street — ready stock and fast engineer dispatch
                  </span>
                </li>
              </ul>
            </div>

            <div className={styles.imageShowcaseWrap}>
              <Image
                src="/images/company/team-group-1.jpg"
                alt="CATS Computers L.L.C Team in Dubai"
                fill
                sizes="(max-width: 992px) 100vw, 600px"
                className={styles.imageShowcaseImg}
              />
              <div className={styles.floatingStatBadge}>
                <span className={styles.floatingStatValue}>100% Genuine</span>
                <span className={styles.floatingStatLabel}>
                  Official UAE Warranty &amp; In-House Dubai Engineers
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 4: BEFORE VS AFTER COMPARISON BENTO ==================== */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.pillBadgeLight}>
              <span className={styles.pillDot} />
              <span>The CATS Difference</span>
            </div>
            <h2 className={styles.sectionTitleLight}>
              How We Turn Office IT Headaches Into Total Peace of Mind.
            </h2>
            <p className={styles.sectionSubtitleLight}>
              See why hundreds of UAE companies switch from freelance technicians to a structured partnership with CATS Computers.
            </p>
          </div>

          <div className={styles.comparisonGrid}>
            {/* Left: Without CATS */}
            <div className={styles.comparisonCardProblem}>
              <div className={styles.mediaCardThumb} style={{ height: "210px" }}>
                <Image
                  src="/images/about-engineer-left.jpg"
                  alt="Common Office IT Challenges"
                  fill
                  sizes="(max-width: 992px) 100vw, 620px"
                  className={styles.mediaCardImg}
                />
                <span className={styles.mediaCardTopBadge}>Without a Dedicated Partner</span>
              </div>
              <div className={styles.mediaCardBody}>
                <div>
                  <h3 className={styles.cardTitleLight}>Common Office IT Frustrations</h3>
                  <p className={styles.cardTextLight} style={{ marginBottom: "8px" }}>
                    Many businesses struggle with unreliable setups that slow down daily work:
                  </p>
                  <ul className={styles.problemList}>
                    <li className={styles.problemItem}>
                      <span className={styles.problemIcon}>✕</span>
                      <span>Wi-Fi drops during important Zoom or Teams meetings</span>
                    </li>
                    <li className={styles.problemItem}>
                      <span className={styles.problemIcon}>✕</span>
                      <span>Tangled &ldquo;spaghetti&rdquo; server racks with unlabeled cables</span>
                    </li>
                    <li className={styles.problemItem}>
                      <span className={styles.problemIcon}>✕</span>
                      <span>Waiting days for a technician to show up when a server fails</span>
                    </li>
                    <li className={styles.problemItem}>
                      <span className={styles.problemIcon}>✕</span>
                      <span>No proper data backup if a computer crashes or gets a virus</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right: With CATS */}
            <div className={styles.comparisonCardSolution}>
              <div className={styles.mediaCardThumb} style={{ height: "210px" }}>
                <Image
                  src="/images/hero-huawei-elite.jpg"
                  alt="With CATS Computers Dubai"
                  fill
                  sizes="(max-width: 992px) 100vw, 620px"
                  className={styles.mediaCardImg}
                />
                <span className={styles.mediaCardTopBadge}>With CATS Computers L.L.C</span>
              </div>
              <div className={styles.mediaCardBody}>
                <div>
                  <h3 className={styles.cardTitleDark}>Smooth, Worry-Free Business IT</h3>
                  <p className={styles.cardTextDark} style={{ marginBottom: "8px" }}>
                    We build clean, fast systems and look after them all year round:
                  </p>
                  <ul className={styles.checkList} style={{ marginTop: "18px", marginBottom: 0 }}>
                    <li className={styles.checkItemDark}>
                      <span className={styles.checkIcon}>✓</span>
                      <span>Full-bar Wi-Fi 6/7 in every room, corner, and warehouse aisle</span>
                    </li>
                    <li className={styles.checkItemDark}>
                      <span className={styles.checkIcon}>✓</span>
                      <span>Neat, color-coded, Fluke-tested cabling with full diagrams</span>
                    </li>
                    <li className={styles.checkItemDark}>
                      <span className={styles.checkIcon}>✓</span>
                      <span>15-minute remote helpdesk &amp; rapid on-site engineer visits</span>
                    </li>
                    <li className={styles.checkItemDark}>
                      <span className={styles.checkIcon}>✓</span>
                      <span>Automated daily backups &amp; strong firewall security</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 5: 3 CORE PILLARS + MISSION & VISION ==================== */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.pillBadgeLight}>
              <span className={styles.pillDot} />
              <span>Our Foundation</span>
            </div>
            <h2 className={styles.sectionTitleLight}>
              Three Reasons UAE Businesses Stay With Us for Years.
            </h2>
            <p className={styles.sectionSubtitleLight}>
              We combine direct distributor pricing with caring, responsive local support.
            </p>
          </div>

          <div className={styles.grid3}>
            {CORE_PILLARS.map((item) => (
              <article key={item.id} className={styles.mediaCard}>
                <div className={styles.mediaCardThumb} style={{ height: "215px" }}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 992px) 100vw, 420px"
                    className={styles.mediaCardImg}
                  />
                  <span className={styles.mediaCardTopBadge}>
                    {item.id} • {item.tag}
                  </span>
                </div>
                <div className={styles.mediaCardBody}>
                  <div>
                    <h3 className={styles.cardTitleLight}>{item.title}</h3>
                    <p className={styles.cardTextLight}>{item.desc}</p>
                  </div>
                  <Link href="/services" className={styles.cardLink}>
                    <span>See Our Services</span>
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.grid2} style={{ marginTop: "32px" }}>
            <div className={styles.mediaCard}>
              <div className={styles.mediaCardThumb} style={{ height: "220px" }}>
                <Image
                  src="/images/company/huawei-reception.jpg"
                  alt="Our Mission — CATS Computers Dubai"
                  fill
                  sizes="(max-width: 992px) 100vw, 600px"
                  className={styles.mediaCardImg}
                />
                <span className={styles.mediaCardTopBadge}>Our Mission</span>
              </div>
              <div className={styles.mediaCardBody}>
                <h3 className={styles.cardTitleLight}>
                  Helping You Focus on Your Business, Not IT Problems
                </h3>
                <p className={styles.cardTextLight} style={{ marginBottom: 0 }}>
                  Our mission is simple: to give every client in the UAE fast networks, safe data, and friendly support so your team can work smoothly every single day without technology delays.
                </p>
              </div>
            </div>

            <div className={styles.mediaCard}>
              <div className={styles.mediaCardThumb} style={{ height: "220px" }}>
                <Image
                  src="/images/company/ruijie-partner-lobby.jpg"
                  alt="Our Vision — CATS Computers Dubai"
                  fill
                  sizes="(max-width: 992px) 100vw, 600px"
                  className={styles.mediaCardImg}
                />
                <span className={styles.mediaCardTopBadge}>Our Vision</span>
              </div>
              <div className={styles.mediaCardBody}>
                <h3 className={styles.cardTitleLight}>
                  Dubai&apos;s Most Trusted All-in-One Technology Partner
                </h3>
                <p className={styles.cardTextLight} style={{ marginBottom: 0 }}>
                  To be the first name UAE businesses call whenever they open a new branch, upgrade their Wi-Fi or security, or need genuine IT hardware delivered and installed on time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 6: HOW WE WORK WITH YOU (4 STEPS) ==================== */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.pillBadgeLight}>
              <span className={styles.pillDot} />
              <span>Simple 4-Step Process</span>
            </div>
            <h2 className={styles.sectionTitleLight}>
              How We Work With You From Day One.
            </h2>
            <p className={styles.sectionSubtitleLight}>
              No complicated procedures — just four clear steps from your first call to a working system.
            </p>
          </div>

          <div className={styles.grid4}>
            {JOURNEY_STEPS.map((s) => (
              <article key={s.step} className={styles.mediaCard}>
                <div className={styles.mediaCardThumb} style={{ height: "175px" }}>
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 992px) 100vw, 320px"
                    className={styles.mediaCardImg}
                  />
                  <span className={styles.mediaCardTopBadge}>STEP {s.step}</span>
                </div>
                <div className={styles.mediaCardBody} style={{ padding: "22px" }}>
                  <div>
                    <h3 className={styles.cardTitleLight}>{s.title}</h3>
                    <p className={styles.cardTextLight} style={{ marginBottom: 0 }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 7: AWARDS & RECOGNITION GALLERY ==================== */}
      <section className={styles.sectionDark}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.pillBadgeDark}>
              <span className={styles.pillDot} />
              <span>Awards &amp; Official Recognition</span>
            </div>
            <h2 className={styles.sectionTitleDark}>
              Recognized By Global Technology Leaders.
            </h2>
            <p className={styles.sectionSubtitleDark}>
              Our official distributor awards prove that you are working with an authorized, certified team in Dubai.
            </p>
          </div>

          <div className={styles.grid3}>
            {AWARDS_LIST.map((award) => (
              <article
                key={award.title}
                className={styles.mediaCard}
                style={{
                  background: "rgba(10, 25, 78, 0.72)",
                  borderColor: "rgba(96, 165, 250, 0.25)",
                }}
              >
                <div className={styles.mediaCardThumb} style={{ height: "250px" }}>
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    sizes="(max-width: 992px) 100vw, 420px"
                    className={styles.mediaCardImg}
                  />
                  <span className={styles.mediaCardTopBadge}>{award.badge}</span>
                </div>
                <div className={styles.mediaCardBody}>
                  <div>
                    <h3 className={styles.cardTitleDark}>{award.title}</h3>
                    <p className={styles.cardTextDark} style={{ marginBottom: 0 }}>
                      {award.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 8: 30+ TRUSTED BRANDS ==================== */}
      <TrustedBrandsSection />

      {/* ==================== SECTION 9: CTA BANNER ==================== */}
      <CtaBanner />
    </main>
  );
}
