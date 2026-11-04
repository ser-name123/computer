export interface ServiceCapability {
  title: string;
  description: string;
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  slug: string;
  id: string;
  category: "Core IT Services" | "Hardware & Security Solutions";
  title: string;
  shortTitle: string;
  badge: string;
  badgeTone: "blue" | "cyan" | "emerald" | "amber" | "purple";
  tagline: string;
  shortDescription: string;
  heroDescription: string;
  overviewParagraphs: [string, string];
  heroImage: string;
  featureImage: string;
  metrics: { value: string; label: string }[];
  capabilities: ServiceCapability[];
  deliverables: string[];
  vendors: string[];
  processSteps: ServiceProcessStep[];
  faqs: ServiceFaq[];
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    slug: "it-infrastructure-solutions",
    id: "01",
    category: "Core IT Services",
    title: "IT Infrastructure Solutions",
    shortTitle: "IT Infrastructure",
    badge: "Turnkey",
    badgeTone: "blue",
    tagline: "End-to-End Server Room Buildouts, Rack Integration & Enterprise IT Setup",
    shortDescription:
      "Complete server room buildouts, rack integration & enterprise hardware setup designed for 99.99% business continuity.",
    heroDescription:
      "From greenfield office fit-outs in Dubai to multi-site data center upgrades across the UAE, CATS Computers architects, supplies, and deploys resilient IT infrastructure engineered to scale.",
    overviewParagraphs: [
      "Modern businesses in the UAE demand rock-solid IT foundations that eliminate bottlenecks and unplanned downtime. At CATS Computers L.L.C, we design and commission complete enterprise IT infrastructure — from precision server racks, UPS power protection, and environmental monitoring to high-availability compute clusters and active directory environments.",
      "As an authorized distribution and integration partner for over 30 global technology brands, our certified engineers handle every phase in-house: site survey, heat/load calculation, hardware procurement, physical rack dressing, OS provisioning, and post-deployment validation.",
    ],
    heroImage: "/images/service-managed-it.jpg",
    featureImage: "/images/about-engineer-left.jpg",
    metrics: [
      { value: "99.99%", label: "Target Uptime Architecture" },
      { value: "500+", label: "UAE Offices Commissioned" },
      { value: "30+", label: "Authorized OEM Vendors" },
      { value: "24/7", label: "On-Site & Remote SLA" },
    ],
    capabilities: [
      {
        title: "Server Room & Data Center Fit-Out",
        description:
          "42U/47U acoustic & ventilated cabinets, hot/cold aisle containment, precision cooling, PDU power distribution, and smart UPS backup.",
      },
      {
        title: "New Office Turnkey IT Setup",
        description:
          "Complete day-one IT readiness for new Dubai offices, retail branches, and warehouses — internet circuits, Wi-Fi, workstations, and printers.",
      },
      {
        title: "Active Directory & Identity Management",
        description:
          "Centralized Windows Server domain controllers, group policies, role-based access control, and hybrid Azure AD synchronization.",
      },
      {
        title: "Hardware Procurement & Asset Lifecycle",
        description:
          "Genuine commercial desktops, laptops, workstations, and peripherals from Dell, HP, and Lenovo with official UAE warranty.",
      },
      {
        title: "Environmental & Power Monitoring",
        description:
          "Real-time temperature, humidity, water-leak, and UPS battery health alerts delivered directly to your IT dashboard.",
      },
      {
        title: "IT Relocation & Office Migration",
        description:
          "Zero-data-loss weekend office IT relocations including safe server de-racking, transport, re-cabling, and Monday-morning readiness.",
      },
    ],
    deliverables: [
      "Comprehensive Physical & Logical Network Topology Diagrams",
      "Clean, Color-Coded & Labeled Patch Panels and Server Racks",
      "Redundant UPS Power Sizing & Failover Verification",
      "Full Asset Inventory Register & Warranty Documentation",
      "Post-Implementation Sign-Off & Administrator Training",
    ],
    vendors: ["Huawei eKit", "Dell Technologies", "Hewlett Packard Enterprise", "Lenovo", "Cisco", "APC", "Microsoft"],
    processSteps: [
      {
        step: "01",
        title: "Site Survey & Capacity Audit",
        description: "On-site inspection of floor plans, user density, power loads, and telecom demarcation points.",
      },
      {
        step: "02",
        title: "Architecture & BOQ Design",
        description: "Vendor-certified bill of materials (BOQ) and CAD rack/cabling layout tailored to your budget.",
      },
      {
        step: "03",
        title: "Staging, Racking & Deployment",
        description: "Pre-configuration in our Burdubai lab followed by clean on-site installation and cable dressing.",
      },
      {
        step: "04",
        title: "Testing, Handover & 24/7 AMC",
        description: "Rigorous stress-testing, complete documentation handover, and continuous proactive monitoring.",
      },
    ],
    faqs: [
      {
        question: "How quickly can you set up IT infrastructure for a new office in Dubai?",
        answer:
          "Because we maintain ready stock of switches, routers, cabinets, and cabling at our Burdubai warehouse, standard office setups (20–100 users) are typically completed within 3 to 7 working days.",
      },
      {
        question: "Do you coordinate with DU and Etisalat (e&) for new leased lines?",
        answer:
          "Yes, our engineers coordinate directly with ISP technicians for fiber termination, static IP configuration, and firewall WAN cutover.",
      },
    ],
  },
  {
    slug: "networking-and-structured-cabling",
    id: "02",
    category: "Core IT Services",
    title: "Networking & Structured Cabling",
    shortTitle: "Networking & Cabling",
    badge: "Popular",
    badgeTone: "cyan",
    tagline: "High-Speed Fiber Optic, Cat6/Cat6A Cabling, Enterprise Switching & Wi-Fi 6/7",
    shortDescription:
      "High-speed Fiber Optic, Cat6/Cat6A cabling, enterprise switching & seamless Wi-Fi 6/7 coverage across multi-floor facilities.",
    heroDescription:
      "As an Authorized Huawei eKit Elite Distribution Partner and Ruijie Reyee Golden Distributor in the UAE, we engineer ultra-fast, zero-dead-zone wired and wireless networks.",
    overviewParagraphs: [
      "A slow or unstable network cripples productivity across every department. CATS Computers designs and installs standards-compliant structured cabling (Cat6, Cat6A, Single-Mode & Multi-Mode Fiber Optic) paired with enterprise-grade L2/L3 PoE+ switches, SD-WAN routers, and high-density Wi-Fi 6/7 access points.",
      "Every cable drop we install is Fluke-tested, certified, and neatly dressed with machine-printed labels. Whether you operate a 5-story corporate tower, a high-bay logistics warehouse in JAFZA, or a luxury hotel, we deliver seamless roaming and multi-gigabit throughput.",
    ],
    heroImage: "/images/hero-huawei-elite.jpg",
    featureImage: "/images/card-cloud-solutions.jpg",
    metrics: [
      { value: "10 Gbps", label: "Core Fiber Backbone Speeds" },
      { value: "100%", label: "Fluke DTX/DSX Certified Drops" },
      { value: "Zero", label: "Wi-Fi Dead Zones Guaranteed" },
      { value: "25-Yr", label: "Structured Cabling Warranty" },
    ],
    capabilities: [
      {
        title: "Cat6 / Cat6A Copper Structured Cabling",
        description:
          "End-to-end PVC and LSZH (Low Smoke Zero Halogen) horizontal cabling, keystone termination, patch panels, and floor boxes.",
      },
      {
        title: "Fiber Optic Splicing & Backbone Links",
        description:
          "OM3/OM4 Multi-Mode and OS2 Single-Mode indoor/outdoor armored fiber optic pulling, fusion splicing, and OTDR testing.",
      },
      {
        title: "Enterprise Core & Access Switching",
        description:
          "VLAN segmentation, QoS voice prioritization, link aggregation (LACP), and PoE+ power budgets using Huawei eKit, Ruijie, Cisco & Aruba.",
      },
      {
        title: "High-Density Wi-Fi 6 & Wi-Fi 7 Heatmapping",
        description:
          "Predictive RF heatmaps, cloud-managed ceiling/wall-plate access points, captive guest portals, and seamless fast roaming.",
      },
      {
        title: "Multi-Branch SD-WAN & VPN Interconnect",
        description:
          "Secure site-to-site IPsec VPNs and intelligent dual-ISP load balancing across all your UAE and global branches.",
      },
      {
        title: "Messy Server Rack Rectification & Re-Dressing",
        description:
          "Transforming tangled 'spaghetti' communication cabinets into clean, airflow-optimized, color-coded enterprise racks over a single weekend.",
      },
    ],
    deliverables: [
      "Fluke Networks Pass/Fail Certification Reports for Every Port",
      " predictive & Post-Deployment Wi-Fi Heatmap Survey",
      "VLAN, Subnet & IP Addressing Architecture Matrix",
      "Neat Velcro Cable Management & Labeled Faceplates",
      "Cloud Network Controller Access & Mobile App Onboarding",
    ],
    vendors: ["Huawei eKit", "Ruijie", "Reyee", "Cisco", "Aruba Networks", "Ubiquiti", "TP-Link Omada"],
    processSteps: [
      {
        step: "01",
        title: "RF Heatmap & Pathway Survey",
        description: "Measuring wall attenuation, cable tray pathways, and rack distances on-site.",
      },
      {
        step: "02",
        title: "Containment, Pulling & Splicing",
        description: "Installing GI trunking/conduits, pulling LSZH cables, and fusion-splicing fiber cores.",
      },
      {
        step: "03",
        title: "Switch, Router & AP Provisioning",
        description: "Configuring VLANs, guest/corporate SSIDs, firewall rules, and cloud management.",
      },
      {
        step: "04",
        title: "Fluke Certification & Sign-Off",
        description: "Testing every node for crosstalk/insertion loss and delivering full as-built drawings.",
      },
    ],
    faqs: [
      {
        question: "Can you clean up and re-dress our existing messy network rack without downtime during business hours?",
        answer:
          "Absolutely. We perform rack rectification and re-patching during Friday evenings or weekends so your team experiences zero disruption during working hours.",
      },
      {
        question: "Why choose Huawei eKit or Ruijie Reyee for enterprise networking?",
        answer:
          "Both offer enterprise-grade reliability, lifetime free cloud management, AI-driven Wi-Fi optimization, and significantly lower total cost of ownership — backed by our official UAE distributor stock and warranty.",
      },
    ],
  },
  {
    slug: "cybersecurity-solutions",
    id: "03",
    category: "Core IT Services",
    title: "Cybersecurity Solutions",
    shortTitle: "Cybersecurity",
    badge: "Zero-Trust",
    badgeTone: "emerald",
    tagline: "Next-Gen Firewalls, Endpoint EDR/XDR, Email Security & Zero-Trust Defense",
    shortDescription:
      "Next-Gen Firewalls (Fortinet, Sophos, SonicWall), endpoint protection, ransomware defense & secure remote VPNs.",
    heroDescription:
      "Protect your enterprise data, financial assets, and customer trust in Dubai with multi-layered cybersecurity architectures engineered to stop modern ransomware and phishing attacks.",
    overviewParagraphs: [
      "Cyber threats targeting UAE enterprises have grown exponentially in sophistication. A single unpatched vulnerability or phishing email can lock critical databases and halt operations. CATS Computers implements defense-in-depth security frameworks combining Next-Generation Firewalls (NGFW), AI-driven Endpoint Detection & Response (EDR), and secure email gateways.",
      "We partner with global cybersecurity leaders — Fortinet, Sophos, SonicWall, Kaspersky, and ESET — to deliver synchronized threat intelligence, automated incident isolation, and strict compliance with UAE data protection regulations.",
    ],
    heroImage: "/images/card-cybersecurity.jpg",
    featureImage: "/images/card-cybersecurity.jpg",
    metrics: [
      { value: "24/7", label: "Real-Time Threat Prevention" },
      { value: "99.9%", label: "Ransomware & Phishing Block Rate" },
      { value: "Zero", label: "Unauthorized Lateral Movement" },
      { value: "100%", label: "UAE Compliance Ready" },
    ],
    capabilities: [
      {
        title: "Next-Generation Firewalls (NGFW) & UTM",
        description:
          "Deep packet inspection, Intrusion Prevention (IPS), web filtering, application control, and SSL VPN using FortiGate, Sophos XGS & SonicWall.",
      },
      {
        title: "Endpoint Protection, EDR & XDR",
        description:
          "Centralized cloud-managed anti-malware, behavioral ransomware rollback, and USB device control with Kaspersky, ESET & Sophos Intercept X.",
      },
      {
        title: "Email Security & Anti-Phishing Gateways",
        description:
          "DMARC/DKIM/SPF enforcement, business email compromise (BEC) protection, and sandboxing for Microsoft 365 and Google Workspace.",
      },
      {
        title: "Zero-Trust Network Access (ZTNA) & MFA",
        description:
          "Multi-factor authentication, role-based VPN access, and strict micro-segmentation between guest, IoT, and finance VLANs.",
      },
      {
        title: "Vulnerability Assessment & Security Audit",
        description:
          "Comprehensive internal and external network scanning, firewall rule hardening, and actionable remediation roadmaps.",
      },
      {
        title: "Immutable Ransomware Backup & Disaster Recovery",
        description:
          "Air-gapped and immutable local/cloud backups via Veeam, Synology, and Acronis for rapid recovery within minutes.",
      },
    ],
    deliverables: [
      "Comprehensive Network & Firewall Security Audit Report",
      "Hardened NGFW Policy Matrix & IPS Signature Tuning",
      "Centralized Endpoint Security Console Deployment",
      "Encrypted Remote Worker SSL/IPsec VPN Profiles",
      "Incident Response & Ransomware Recovery Playbook",
    ],
    vendors: ["Fortinet", "Sophos", "SonicWall", "Kaspersky", "ESET", "Veeam", "Microsoft Defender"],
    processSteps: [
      {
        step: "01",
        title: "Threat & Vulnerability Audit",
        description: "Scanning perimeter firewalls, open ports, endpoints, and email domains for exposure.",
      },
      {
        step: "02",
        title: "Zero-Trust Policy Design",
        description: "Defining least-privilege access rules, VLAN isolation, and MFA requirements.",
      },
      {
        step: "03",
        title: "NGFW & EDR Deployment",
        description: "Installing hardware firewalls in HA pairs and rolling out endpoint agents silently.",
      },
      {
        step: "04",
        title: "Continuous Monitoring & Patching",
        description: "Proactive firmware updates, threat log reviews, and quarterly security posture reports.",
      },
    ],
    faqs: [
      {
        question: "Which firewall brand is best for our Dubai office — Fortinet, Sophos, or SonicWall?",
        answer:
          "All three are enterprise leaders. FortiGate excels in high-throughput SD-WAN and multi-branch setups; Sophos XGS offers synchronized security with Intercept X endpoints; SonicWall provides outstanding value for SMEs. We size the exact model based on your internet speed and user count.",
      },
      {
        question: "Can you protect our remote staff working from home or traveling?",
        answer:
          "Yes, we deploy encrypted SSL VPN clients with Multi-Factor Authentication (MFA) and cloud-managed EDR agents that protect laptops anywhere in the world.",
      },
    ],
  },
  {
    slug: "cloud-services-and-virtualization",
    id: "04",
    category: "Core IT Services",
    title: "Cloud Services & Virtualization",
    shortTitle: "Cloud & Virtualization",
    badge: "Scalable",
    badgeTone: "purple",
    tagline: "Microsoft 365, Google Workspace, AWS, Server Virtualization & Hybrid Cloud",
    shortDescription:
      "Microsoft 365, Google Workspace, AWS, VMware/Hyper-V virtualization & hybrid cloud continuity.",
    heroDescription:
      "Modernize your workloads, empower hybrid teams, and eliminate single points of hardware failure with enterprise virtualization and cloud migration services.",
    overviewParagraphs: [
      "Whether you are migrating legacy on-premise Exchange servers to Microsoft 365, consolidating physical servers with VMware vSphere or Microsoft Hyper-V, or scaling workloads on AWS and Azure, CATS Computers ensures a seamless, zero-downtime transition.",
      "Our cloud architects design cost-optimized hybrid environments that keep latency-sensitive applications local while leveraging the elasticity, global collaboration, and off-site disaster recovery of the cloud.",
    ],
    heroImage: "/images/card-cloud-solutions.jpg",
    featureImage: "/images/card-cloud-solutions.jpg",
    metrics: [
      { value: "Zero", label: "Email & Data Migration Loss" },
      { value: "40%", label: "Average Infrastructure Cost Savings" },
      { value: "15 Min", label: " Disaster Recovery RPO/RTO" },
      { value: "99.99%", label: "Cloud SLA Availability" },
    ],
    capabilities: [
      {
        title: "Microsoft 365 & SharePoint Migration",
        description:
          "Seamless mailbox migration, Teams collaboration setup, OneDrive/SharePoint document governance, and licensing optimization.",
      },
      {
        title: "Google Workspace Enterprise Deployment",
        description:
          "Custom domain email provisioning, Shared Drives, Google Vault archiving, and mobile device management.",
      },
      {
        title: "Server Virtualization (VMware & Hyper-V)",
        description:
          "Consolidating multiple physical workloads onto high-availability hypervisor clusters with live vMotion failover.",
      },
      {
        title: "AWS & Microsoft Azure Cloud Architecture",
        description:
          "Virtual private clouds (VPC), EC2/Azure VMs, managed SQL databases, S3 storage, and site-to-cloud VPN tunnels.",
      },
      {
        title: "Cloud Backup & Disaster Recovery (DRaaS)",
        description:
          "Automated encrypted off-site replication using Veeam, Acronis, and Synology C2 for instant business continuity.",
      },
      {
        title: "Remote Desktop (RDS) & Virtual Desktop (VDI)",
        description:
          "Secure browser and client access to ERP, accounting (Tally, SAP, Sage), and CAD apps from any device.",
      },
    ],
    deliverables: [
      "Cloud Readiness & TCO Cost-Benefit Assessment",
      "Zero-Downtime Cutover & Mailbox Migration Plan",
      "Multi-Factor Authentication & Conditional Access Setup",
      "Automated Daily Cloud Backup & Restore Verification",
      "Monthly Licensing & Cloud Spend Optimization",
    ],
    vendors: ["Microsoft", "Google Workspace", "Amazon Web Services", "Veeam", "VMware", "Synology"],
    processSteps: [
      {
        step: "01",
        title: "Workload & Licensing Audit",
        description: "Evaluating current servers, mailboxes, storage volumes, and compliance requirements.",
      },
      {
        step: "02",
        title: "Sandbox & Pre-Stage Sync",
        description: "Configuring cloud tenants and syncing data in the background while staff work normally.",
      },
      {
        step: "03",
        title: "Seamless Cutover & DNS Switch",
        description: "Final delta sync and DNS cutover with zero lost emails or operational downtime.",
      },
      {
        step: "04",
        title: "User Onboarding & Governance",
        description: "Assisting every employee with device setup, security policies, and cloud backup.",
      },
    ],
    faqs: [
      {
        question: "Will our team lose access to emails during a Microsoft 365 migration?",
        answer:
          "No. We pre-stage all mailbox data in advance and perform the final MX record cutover after hours, ensuring 100% continuity with zero lost emails.",
      },
      {
        question: "Can we host our accounting or ERP software in the cloud for multi-branch access?",
        answer:
          "Yes, we deploy secure Windows Server RDS/Cloud environments with encrypted VPN/MFA so authorized staff can access Tally, QuickBooks, SAP, or custom ERPs from anywhere.",
      },
    ],
  },
  {
    slug: "software-and-web-development",
    id: "05",
    category: "Core IT Services",
    title: "Software & Web Development",
    shortTitle: "Software Development",
    badge: "Custom",
    badgeTone: "blue",
    tagline: "Custom ERP/CRM Applications, Business Automation & Modern Web Platforms",
    shortDescription:
      "Tailored ERP/CRM applications, workflow automation & high-performance corporate web platforms.",
    heroDescription:
      "Transform manual spreadsheets and disconnected workflows into unified, high-speed custom software, web portals, and enterprise applications built around your exact business logic.",
    overviewParagraphs: [
      "Off-the-shelf software rarely fits every nuance of a growing UAE enterprise. CATS Computers combines deep infrastructure expertise with full-stack software engineering to build custom ERP modules, CRM portals, inventory/warehouse systems, and high-converting corporate websites.",
      "Every application we build is engineered for security, speed, mobile responsiveness, and seamless API integration with your existing accounting, biometric attendance, telephony, and cloud platforms.",
    ],
    heroImage: "/images/service-software-dev.jpg",
    featureImage: "/images/case-study-dev-pair.jpg",
    metrics: [
      { value: "3x", label: "Faster Internal Workflow Speed" },
      { value: "99.9%", label: "Application Uptime & Security" },
      { value: "100%", label: "Custom Tailored to Your SOPs" },
      { value: "API", label: "Seamless ERP & Hardware Sync" },
    ],
    capabilities: [
      {
        title: "Custom ERP & Operations Portals",
        description:
          "Tailored procurement, inventory, HR/payroll, fleet management, and billing modules designed around your UAE workflows.",
      },
      {
        title: "CRM & Sales Pipeline Automation",
        description:
          "Lead capture, automated WhatsApp/email follow-ups, quotation generators, and real-time executive analytics dashboards.",
      },
      {
        title: "Enterprise Web Design & Next.js Portals",
        description:
          "Ultra-fast, SEO-optimized corporate websites, B2B distributor portals, and e-commerce platforms.",
      },
      {
        title: "Hardware & Biometric API Integrations",
        description:
          "Bridging ZKTeco/Hikvision attendance devices, barcode scanners, and IP PBX systems directly into your HR and CRM software.",
      },
      {
        title: "Legacy Application Modernization",
        description:
          "Upgrading slow, outdated desktop databases into secure, modern browser-based cloud applications.",
      },
      {
        title: "Ongoing Maintenance, Hosting & DevSecOps",
        description:
          "Managed cloud hosting, automated CI/CD deployments, SSL management, and continuous feature enhancements.",
      },
    ],
    deliverables: [
      "Interactive UI/UX Wireframes & System Architecture Blueprint",
      "Clean, Documented & Scalable Full-Stack Codebase",
      "Role-Based Access Control & Audit Logging",
      "End-to-End QA Testing & Security Penetration Checks",
      "Staff Training, User Manuals & Ongoing SLA Support",
    ],
    vendors: ["Microsoft .NET", "Next.js / React", "Node.js", "PostgreSQL / SQL Server", "AWS", "REST / GraphQL APIs"],
    processSteps: [
      {
        step: "01",
        title: "Discovery & Process Mapping",
        description: "Workshop with your department heads to map pain points, data flows, and KPIs.",
      },
      {
        step: "02",
        title: "UI/UX Prototype & Architecture",
        description: "Interactive clickable prototypes and database schema approval before coding.",
      },
      {
        step: "03",
        title: "Agile Development & API Sync",
        description: "Iterative sprints with regular live demos and integration with existing systems.",
      },
      {
        step: "04",
        title: "UAT, Go-Live & Continuous Care",
        description: "User acceptance testing, smooth production launch, and dedicated support.",
      },
    ],
    faqs: [
      {
        question: "Can you integrate our biometric attendance machines directly with our payroll/HR software?",
        answer:
          "Yes! We build custom middleware and APIs that automatically sync attendance logs from Hikvision, ZKTeco, and Suprema terminals into your HR/ERP database in real time.",
      },
      {
        question: "Do we own the source code of custom software developed for our company?",
        answer:
          "Yes, upon project completion, full intellectual property and source code ownership are transferred to your organization as agreed in the project scope.",
      },
    ],
  },
  {
    slug: "it-support-and-managed-amc",
    id: "06",
    category: "Core IT Services",
    title: "IT Support & Managed AMC",
    shortTitle: "Managed IT & AMC",
    badge: "24/7 SLA",
    badgeTone: "amber",
    tagline: "Proactive Annual Maintenance Contracts (AMC), Helpdesk & Dedicated Engineers",
    shortDescription:
      "Dedicated Annual Maintenance Contracts (AMC), instant remote helpdesk & rapid on-site engineers across Dubai & UAE.",
    heroDescription:
      "Stop waiting for IT systems to break. Our Comprehensive IT AMC and Managed Services give your business a full department of certified network, server, security, and desktop engineers at a predictable fixed cost.",
    overviewParagraphs: [
      "Hiring and retaining an in-house team of specialists covering networking, firewalls, servers, cloud, CCTV, and IP telephony is costly and complex. With a CATS Computers Annual Maintenance Contract (AMC), you gain immediate access to our entire Burdubai engineering team — backed by guaranteed SLA response times.",
      "We combine 24/7 automated health monitoring, scheduled preventive maintenance visits, unlimited remote helpdesk support, and rapid on-site engineer dispatch anywhere in Dubai and the UAE.",
    ],
    heroImage: "/images/hero-bg.jpg",
    featureImage: "/images/company/team-group-1.jpg",
    metrics: [
      { value: "< 15m", label: "Remote Helpdesk Response Time" },
      { value: "< 2 Hr", label: "Emergency On-Site Dubai Dispatch" },
      { value: "98.7%", label: "First-Contact Issue Resolution" },
      { value: "24/7", label: "Proactive Server & Firewall Watch" },
    ],
    capabilities: [
      {
        title: "Comprehensive & Non-Comprehensive IT AMC",
        description:
          "Flexible SLA tiers covering servers, firewalls, switches, Wi-Fi, CCTV, PABX, printers, and user workstations.",
      },
      {
        title: "Instant Remote Helpdesk & Ticketing",
        description:
          "Fast remote troubleshooting via phone, WhatsApp, email, and encrypted remote support for day-to-day user issues.",
      },
      {
        title: "Scheduled Preventive Maintenance Visits",
        description:
          "Monthly/quarterly on-site health checks, server dust cleaning, backup restore drills, and firmware patching.",
      },
      {
        title: "Resident / Outsourced IT Engineers",
        description:
          "Full-time or part-time dedicated CATS engineers stationed at your Dubai office with full back-office escalation support.",
      },
      {
        title: "Vendor & ISP Escalation Management",
        description:
          "We act as your single point of contact — managing DU/Etisalat tickets, hardware warranties, and software renewals.",
      },
      {
        title: "vCIO Quarterly Technology Reviews",
        description:
          "Executive IT health reports, lifecycle replacement planning, and cybersecurity risk assessments.",
      },
    ],
    deliverables: [
      "Guaranteed SLA Response & Resolution Time Matrix",
      "Complete IT Asset Tagging & Documentation Book",
      "24/7 Server, Firewall & Backup Health Monitoring",
      "Monthly Preventive Maintenance & Ticket Summary Reports",
      "Dedicated Account Manager & Escalation Hotline",
    ],
    vendors: ["All 30+ Global IT Vendors", "Huawei", "Cisco", "Fortinet", "Microsoft", "Dell", "HP", "Hikvision"],
    processSteps: [
      {
        step: "01",
        title: "Free Initial IT Infrastructure Audit",
        description: "Inspecting your current servers, network, security, backups, and pain points.",
      },
      {
        step: "02",
        title: "Onboarding, Tagging & Stabilizing",
        description: "Labeling all assets, fixing immediate bottlenecks, and deploying monitoring agents.",
      },
      {
        step: "03",
        title: "Proactive Care & Rapid Support",
        description: "Instant helpdesk support, scheduled preventive visits, and daily backup checks.",
      },
      {
        step: "04",
        title: "Quarterly Review & Optimization",
        description: "Reviewing SLA metrics and planning smooth upgrades as your company grows.",
      },
    ],
    faqs: [
      {
        question: "What is included in your IT Annual Maintenance Contract (AMC)?",
        answer:
          "Our AMC includes unlimited remote helpdesk support, scheduled preventive maintenance visits, emergency on-site callouts, 24/7 server/firewall monitoring, backup verification, and vendor coordination.",
      },
      {
        question: "Can you take over support for an IT setup installed by another vendor?",
        answer:
          "Yes! We begin every AMC with a thorough audit and documentation phase, mapping out your existing passwords, topologies, and configurations so we can manage and optimize them seamlessly.",
      },
    ],
  },
  {
    slug: "cctv-and-surveillance-systems",
    id: "07",
    category: "Hardware & Security Solutions",
    title: "CCTV & Surveillance Systems",
    shortTitle: "CCTV & Surveillance",
    badge: "AI Vision",
    badgeTone: "cyan",
    tagline: "High-Definition IP Cameras, NVR Storage & AI Video Analytics",
    shortDescription:
      "High-definition IP cameras, redundant NVR storage & smart AI video analytics (Hikvision, Dahua, UNV, Imou).",
    heroDescription:
      "Secure your offices, warehouses, retail showrooms, and residential buildings across the UAE with crystal-clear 4K IP surveillance, night-color technology, and mobile remote viewing.",
    overviewParagraphs: [
      "Modern physical security goes far beyond grainy recordings. CATS Computers supplies, installs, and maintains intelligent IP CCTV surveillance systems featuring 4K Ultra-HD resolution, ColorVu/Full-Color night vision, ANPR license plate recognition, and AI perimeter intrusion alerts.",
      "We partner with world-leading surveillance manufacturers — Hikvision, Dahua, Uniview (UNV), and Imou — to deliver reliable multi-site monitoring, high-retention RAID NVR storage, and regulatory-compliant camera layouts.",
    ],
    heroImage: "/images/industry-manufacturing.jpg",
    featureImage: "/images/why-choose-executive.jpg",
    metrics: [
      { value: "4K UHD", label: "Crystal-Clear IP Video Clarity" },
      { value: "30–180d", label: "Continuous NVR Storage Retention" },
      { value: "24/7", label: "Full-Color Night Vision & AI Alerts" },
      { value: "Mobile", label: "Encrypted Live Viewing Anywhere" },
    ],
    capabilities: [
      {
        title: "Indoor & Outdoor IP Dome / Bullet / PTZ Cameras",
        description:
          "Weatherproof IP67 and vandal-proof IK10 cameras with motorized varifocal lenses and 360° pan-tilt-zoom tracking.",
      },
      {
        title: "AI Video Analytics & Perimeter Protection",
        description:
          "Human/vehicle classification, line-crossing alerts, loitering detection, people counting, and ANPR gate integration.",
      },
      {
        title: "Enterprise NVR & RAID Video Storage",
        description:
          "Redundant Network Video Recorders with surveillance-grade WD Purple / Seagate SkyHawk drives for 30, 90, or 180+ days retention.",
      },
      {
        title: "Multi-Branch Central Monitoring (VMS)",
        description:
          "Unified video wall and control room software to view all your UAE branches, warehouses, and retail stores on one screen.",
      },
      {
        title: "Mobile App & Encrypted Remote Access",
        description:
          "Instant push notifications and live playback on iOS/Android smartphones for business owners and security managers.",
      },
      {
        title: "CCTV Annual Maintenance & Health Checks",
        description:
          "Regular lens cleaning, angle adjustment, hard drive health verification, and time-sync audits.",
      },
    ],
    deliverables: [
      "Camera Field-of-View & Blind-Spot Coverage Layout",
      "Storage Bandwidth & Retention Calculation Sheet",
      "Dedicated PoE Surveillance VLAN & NVR Rack Setup",
      "Configured Mobile & Desktop Viewing Apps",
      "Preventive CCTV Maintenance & Compliance Support",
    ],
    vendors: ["Hikvision", "Dahua", "UNV (Uniview)", "Imou", "Western Digital", "Seagate"],
    processSteps: [
      {
        step: "01",
        title: "Blind-Spot & Lighting Survey",
        description: "Walking your premises to identify entry points, cash counters, loading bays, and lighting conditions.",
      },
      {
        step: "02",
        title: "Camera & Storage Sizing",
        description: "Selecting optimal focal lengths, IR/ColorVu sensors, PoE switches, and HDD terabytes.",
      },
      {
        step: "03",
        title: "Clean Cabling & Mounting",
        description: "Concealed conduit cabling, weatherproof junction boxes, and precision camera aiming.",
      },
      {
        step: "04",
        title: "VMS Setup & Handover",
        description: "Configuring motion/AI zones, recording schedules, and mobile viewing permissions.",
      },
    ],
    faqs: [
      {
        question: "Can I view all my office and warehouse cameras live on my phone while traveling abroad?",
        answer:
          "Yes, we configure encrypted cloud P2P and VPN viewing apps on your smartphone and laptop with role-based permissions and instant motion alerts.",
      },
      {
        question: "How many days of recording storage can you configure?",
        answer:
          "We size NVR hard drives using H.265+ compression to meet your exact requirement — typically 31 days, 60 days, 90 days, or 180+ days of continuous 24/7 recording.",
      },
    ],
  },
  {
    slug: "access-control-and-biometrics",
    id: "08",
    category: "Hardware & Security Solutions",
    title: "Access Control & Biometrics",
    shortTitle: "Access Control",
    badge: "Smart Entry",
    badgeTone: "emerald",
    tagline: "Facial Recognition Terminals, Time Attendance & Automated Door Security",
    shortDescription:
      "Touchless facial recognition terminals, fingerprint time attendance, magnetic door locks & turnstile barriers.",
    heroDescription:
      "Automate employee time-attendance tracking and secure restricted zones in your facility with high-speed AI facial recognition, fingerprint biometrics, and smart RFID access control.",
    overviewParagraphs: [
      "Controlling who enters your server rooms, executive floors, warehouses, and offices — while accurately tracking staff attendance and shift overtime — is essential for modern UAE operations. CATS Computers delivers integrated Access Control and Biometric Time-Attendance systems.",
      "From touchless AI facial recognition terminals that verify employees in under 0.2 seconds to multi-door controller panels, electromagnetic locks, emergency break-glass integration, and cloud HR attendance reports, we provide complete turnkey installation.",
    ],
    heroImage: "/images/about-team-right.jpg",
    featureImage: "/images/process-step-2.jpg",
    metrics: [
      { value: "< 0.2s", label: "Touchless Facial Recognition Speed" },
      { value: "100%", label: "Automated Shift & Overtime Reports" },
      { value: "Fire-Safe", label: "Fail-Safe Emergency Release Integration" },
      { value: "Multi-Site", label: "Centralized Cloud Attendance Sync" },
    ],
    capabilities: [
      {
        title: "AI Facial Recognition & Palm Vein Terminals",
        description:
          "Hygienic, touchless biometric verification with anti-spoofing live face detection even in low light.",
      },
      {
        title: "Fingerprint & Smart RFID Card Access",
        description:
          "Encrypted Mifare/HID proximity cards, keyfobs, PIN codes, and optical/capacitive fingerprint readers.",
      },
      {
        title: "Electromagnetic Locks, Drop Bolts & Exit Buttons",
        description:
          "Heavy-duty 600lb/1200lb EM locks for glass, wooden, and metal doors with touchless IR exit sensors.",
      },
      {
        title: "Time Attendance & Shift Management Software",
        description:
          "Automated late-in, early-out, overtime, leave tracking, and direct export to Excel, Tally, and ERP payroll.",
      },
      {
        title: "Fire Alarm Interlock & Emergency Break-Glass",
        description:
          "Automatic fail-safe door release linked to your building fire alarm panel for complete life-safety compliance.",
      },
      {
        title: "Turnstiles, Flap Barriers & Parking Boom Gates",
        description:
          "High-throughput lobby speed gates and ANPR/UHF vehicle parking barriers for commercial buildings.",
      },
    ],
    deliverables: [
      "Door-by-Door Locking Hardware & Power Supply Specification",
      "Clean Concealed Door Frame Cabling & Bracket Mounting",
      "Fire Alarm Panel Fail-Safe Interlock Verification",
      "Configured Time-Attendance Software & Shift Rules",
      "HR Administrator Training & Employee Enrollment Support",
    ],
    vendors: ["Hikvision", "Dahua", "ZKTeco", "Suprema", "HID Global"],
    processSteps: [
      {
        step: "01",
        title: "Door Type & Security Audit",
        description: "Inspecting frameless glass, aluminum, wooden, or fire-rated doors for proper bracket selection.",
      },
      {
        step: "02",
        title: "Lock, Reader & PSU Installation",
        description: "Mounting magnetic locks, biometric terminals, exit buttons, and battery-backed power supplies.",
      },
      {
        step: "03",
        title: "Software & Shift Configuration",
        description: "Setting up departments, shift timetables, grace periods, and multi-branch sync.",
      },
      {
        step: "04",
        title: "Staff Enrollment & HR Handover",
        description: "Enrolling staff faces/fingerprints and training HR teams on one-click payroll reporting.",
      },
    ],
    faqs: [
      {
        question: "Can we consolidate attendance logs from multiple UAE branches into one central HR dashboard?",
        answer:
          "Yes, we configure cloud-enabled and VPN-linked attendance servers so your head office HR team can view real-time check-ins across all branches.",
      },
      {
        question: "Do your magnetic door locks unlock automatically during a power outage or fire alarm?",
        answer:
          "Yes. Every access control system we install includes battery backup for power dips plus a direct fire-alarm relay and emergency break-glass unit for instant fail-safe egress.",
      },
    ],
  },
  {
    slug: "servers-nas-and-backup-storage",
    id: "09",
    category: "Hardware & Security Solutions",
    title: "Servers, NAS & Backup Storage",
    shortTitle: "Servers & Storage",
    badge: "Enterprise",
    badgeTone: "blue",
    tagline: "Dell, HP & Lenovo Enterprise Servers with Synology, QNAP & Veeam Storage",
    shortDescription:
      "Dell, HP & Lenovo rack/tower servers with Synology, QNAP & Veeam high-availability storage.",
    heroDescription:
      "Power your mission-critical databases, ERP applications, and shared file repositories with enterprise-grade rack/tower servers, RAID NAS arrays, and automated disaster recovery.",
    overviewParagraphs: [
      "As data volumes grow and applications become more demanding, consumer-grade storage and aging servers put your entire business at risk. CATS Computers sizing, supplies, and configures enterprise servers from Dell PowerEdge, HPE ProLiant, and Lenovo ThinkSystem alongside high-speed NAS/SAN storage from Synology and QNAP.",
      "We architect fault-tolerant RAID arrays, hot-spare drives, dual redundant power supplies, and automated 3-2-1 backup pipelines using Veeam — ensuring your company data remains fast, centralized, and recoverable under any scenario.",
    ],
    heroImage: "/images/about-team-right.jpg",
    featureImage: "/images/case-study-boardroom.jpg",
    metrics: [
      { value: "RAID", label: "Zero-Downtime Drive Redundancy" },
      { value: "3-2-1", label: "Golden Backup Rule Architecture" },
      { value: "10GbE", label: "High-Speed NAS/SAN Throughput" },
      { value: "Official", label: "UAE Next-Business-Day OEM Warranty" },
    ],
    capabilities: [
      {
        title: "Dell PowerEdge, HPE ProLiant & Lenovo Servers",
        description:
          "Custom-configured tower and 1U/2U rack servers with Intel Xeon processors, ECC RAM, and hardware RAID controllers.",
      },
      {
        title: "Synology & QNAP Enterprise NAS Storage",
        description:
          "Centralized departmental file sharing, role-based folder permissions, active directory integration, and snapshot replication.",
      },
      {
        title: "Veeam Backup & Replication Architecture",
        description:
          "Automated image-level VM and physical server backups with instant VM recovery and immutable ransomware protection.",
      },
      {
        title: "Storage Area Networks (SAN) & High-Availability",
        description:
          "Dual-controller shared storage over iSCSI/Fiber Channel for zero-downtime hypervisor clustering.",
      },
      {
        title: "Server OS, SQL & ERP Environment Setup",
        description:
          "Windows Server 2022/2025, Linux, SQL Server, Remote Desktop Services (RDS), and automated health alerts.",
      },
      {
        title: "Server Health Upgrades & Legacy Data Migration",
        description:
          "Upgrading RAM/NVMe SSDs and migrating aging servers to modern hardware with zero data loss.",
      },
    ],
    deliverables: [
      "Custom Server & Storage Sizing Proposal (IOPS, RAM, RAID)",
      "Physical Racking, Dual-PSU Wiring & iDRAC/iLO Out-of-Band Setup",
      "Configured Active Directory / File Share Permission Matrix",
      "Automated Local + Cloud 3-2-1 Backup Schedule",
      "Simulated Disaster Recovery Restore Test Report",
    ],
    vendors: ["Dell Technologies", "HP / HPE", "Lenovo", "Synology", "QNAP", "Veeam", "Microsoft"],
    processSteps: [
      {
        step: "01",
        title: "IOPS & Capacity Sizing",
        description: "Calculating concurrent users, database growth rates, and retention requirements.",
      },
      {
        step: "02",
        title: "Hardware Assembly & RAID Burn-In",
        description: "Installing enterprise SAS/NVMe drives, configuring RAID 5/6/10, and updating firmware.",
      },
      {
        step: "03",
        title: "Hypervisor, OS & Share Migration",
        description: "Deploying virtual machines, folder ACL permissions, and migrating existing company data.",
      },
      {
        step: "04",
        title: "Backup Automation & DR Drill",
        description: "Configuring Veeam/Snapshot jobs and testing live file/VM restoration.",
      },
    ],
    faqs: [
      {
        question: "Should we buy a dedicated Windows Server or a Synology/QNAP NAS?",
        answer:
          "If you primarily need centralized file sharing, folder permissions, and automated backups, a Synology or QNAP NAS is ideal. If you run Active Directory, SQL databases, Tally/SAP ERP, or multiple virtual machines, an HPE/Dell/Lenovo Server paired with a NAS for backup is the best architecture.",
      },
      {
        question: "What happens if a hard drive fails inside our server or NAS?",
        answer:
          "Because we configure enterprise RAID (RAID 5, 6, or 10) with hot-swap bays and instant email alerts, your system keeps running without any data loss or downtime while the faulty drive is replaced.",
      },
    ],
  },
  {
    slug: "ip-telephony-and-pbx-systems",
    id: "10",
    category: "Hardware & Security Solutions",
    title: "IP Telephony & PBX Systems",
    shortTitle: "Telephony & IP Comms",
    badge: "Unified VoIP",
    badgeTone: "purple",
    tagline: "Enterprise IP PBX, Call Center Solutions & Unified Voice Communications",
    shortDescription:
      "Crystal-clear enterprise voice with Avaya, Grandstream, Yeastar & Yealink IP phones and mobile softphones.",
    heroDescription:
      "Unify your reception, sales, customer service, and remote branches under one intelligent IP PBX system with IVR auto-attendants, call recording, CRM pop-ups, and smartphone extensions.",
    overviewParagraphs: [
      "Clear, professional business communication is the front door to your company. CATS Computers designs and deploys modern IP Telephony and Unified Communications (UC) systems using Avaya, Grandstream, Yeastar, and Yealink — replacing rigid analog telephone lines with flexible SIP trunks and PoE IP desk phones.",
      "Whether you need a 10-extension office phone system or a 200-seat multi-branch call center with real-time wallboards, call recording, and CRM integration, our voice engineers deliver crystal-clear HD audio.",
    ],
    heroImage: "/images/case-study-boardroom.jpg",
    featureImage: "/images/consultation-team.jpg",
    metrics: [
      { value: "HD Voice", label: "Crystal-Clear PoE & Wi-Fi Calling" },
      { value: "Zero", label: "Inter-Branch Call Charges" },
      { value: "100%", label: "Automated Call Recording & Logs" },
      { value: "Mobile", label: "Office Extension on iOS/Android" },
    ],
    capabilities: [
      {
        title: "IP PBX Appliance & Cloud PBX Deployment",
        description:
          "Yeastar P-Series, Grandstream UCM, and Avaya IP Office systems with multi-level IVR voice menus.",
      },
      {
        title: "Executive & Receptionist HD IP Phones",
        description:
          "Color-screen PoE desk phones, wireless DECT handsets, and busy-lamp-field (BLF) operator consoles from Yealink, Avaya & Grandstream.",
      },
      {
        title: "Mobile Softphone & Hybrid Work Extensions",
        description:
          "Make and receive official office landline calls from your smartphone or laptop anywhere in the world via Linkus/Wave apps.",
      },
      {
        title: "Call Center Queues, Wallboards & Recording",
        description:
          "Ring groups, skill-based routing, whisper/barge-in coaching, SLA call metrics, and automatic call recording.",
      },
      {
        title: "Multi-Branch PBX Interconnection",
        description:
          "Free 3-digit extension dialing between your Dubai head office, warehouse, and international offices.",
      },
      {
        title: "CRM, Intercom & Door Phone Integration",
        description:
          "Pop up customer records on incoming calls and unlock office doors directly from your desk IP phone.",
      },
    ],
    deliverables: [
      "Custom Call-Flow, IVR Greeting & Ring-Group Architecture",
      "DU / Etisalat SIP Trunk & ISDN Gateway Configuration",
      "Voice VLAN & QoS Bandwidth Prioritization on Switches",
      "Configured Desk Phones, Softphones & Call Recording Storage",
      "Receptionist & Supervisor Call-Analytics Training",
    ],
    vendors: ["Grandstream", "Yeastar", "Avaya", "Yealink", "Poly"],
    processSteps: [
      {
        step: "01",
        title: "Call-Flow & Line Assessment",
        description: "Mapping your DU/Etisalat lines, department extensions, working hours, and IVR scripts.",
      },
      {
        step: "02",
        title: "Voice VLAN & PBX Staging",
        description: "Configuring QoS voice prioritization, SIP trunks, security firewalls, and extension profiles.",
      },
      {
        step: "03",
        title: "Phone Deployment & Number Porting",
        description: "Plugging in PoE desk phones, recording studio IVR prompts, and testing inbound/outbound routing.",
      },
      {
        step: "04",
        title: "Softphone Onboarding & Training",
        description: "Setting up mobile extensions and training receptionists on call transfers and reports.",
      },
    ],
    faqs: [
      {
        question: "Can our sales team answer office landline calls on their mobile phones when out of the office?",
        answer:
          "Yes! With Yeastar Linkus or Grandstream Wave mobile apps, your office extension rings simultaneously on your desk phone and smartphone.",
      },
      {
        question: "Does your IP PBX system work with existing DU and Etisalat landline numbers?",
        answer:
          "Yes, we connect directly to DU and Etisalat SIP trunks, ISDN PRI lines, or analog FXO lines while keeping all your existing company phone numbers.",
      },
    ],
  },
  {
    slug: "av-and-boardroom-conferencing",
    id: "11",
    category: "Hardware & Security Solutions",
    title: "AV & Boardroom Conferencing",
    shortTitle: "AV Conferencing",
    badge: "4K Rooms",
    badgeTone: "blue",
    tagline: "Smart Meeting Rooms, 4K Video Bars, Interactive Panels & Wireless Casting",
    shortDescription:
      "Interactive smart panels, meeting room audio & one-touch Zoom/Teams video conferencing (Logitech, Poly, Yealink).",
    heroDescription:
      "Turn your huddle spaces, executive boardrooms, and training halls into effortless one-touch collaboration rooms certified for Microsoft Teams, Zoom, and Google Meet.",
    overviewParagraphs: [
      "Nothing delays an executive meeting faster than tangled HDMI cables, echoing microphones, or cameras that only show half the table. CATS Computers designs and installs turnkey Audio-Visual (AV) and Boardroom Conferencing solutions in Dubai.",
      "Using industry-leading hardware from Logitech, Poly, Yealink, and Huawei IdeaHub, we deliver AI auto-framing 4K cameras, beamforming ceiling/table microphones, 65\"–98\" interactive 4K touchscreens, and one-click wireless screen sharing.",
    ],
    heroImage: "/images/case-study-cloud-migration.jpg",
    featureImage: "/images/process-step-1.jpg",
    metrics: [
      { value: "1-Touch", label: "Instant Teams / Zoom Meeting Join" },
      { value: "4K AI", label: "Auto-Framing Speaker Tracking" },
      { value: "Wireless", label: "Zero-Cable 4K Screen Sharing" },
      { value: "360°", label: "Noise-Canceling Beamforming Audio" },
    ],
    capabilities: [
      {
        title: "Microsoft Teams & Zoom Certified Room Systems",
        description:
          "Dedicated tabletop touch controllers (Logitech Rally Bar, Tap, Poly Studio, Yealink MVC) for one-touch meeting launch.",
      },
      {
        title: "Interactive 4K Smart Boards & Digital Signage",
        description:
          "65\", 75\", 86\", and 98\" multi-touch interactive flat panels with digital whiteboarding and dual-OS computing.",
      },
      {
        title: "AI Auto-Framing Cameras & Expansion Mics",
        description:
          "Intelligent speaker tracking, group framing, and daisy-chained tabletop or ceiling microphones for long boardroom tables.",
      },
      {
        title: "Wireless Presentation & BYOD Casting",
        description:
          "Share laptops, tablets, and phones in 4K via AirPlay, Miracast, or USB-C dongles without messy table cables.",
      },
      {
        title: "Meeting Room Booking Panels",
        description:
          "Outside-the-door LED status touch panels synced with Microsoft 365 and Google Calendar to prevent double-booking.",
      },
      {
        title: "Townhall, Classroom & Multi-Zone Audio",
        description:
          "Commercial ceiling speakers, wireless lapel/handheld microphones, amplifiers, and laser projection systems.",
      },
    ],
    deliverables: [
      "Room Acoustic & Camera Sightline Design Layout",
      "Concealed Under-Table & In-Wall AV Conduit Cabling",
      "Tabletop Touch Controller & Calendar Room Resource Setup",
      "Calibrated Audio Echo Cancellation & AI Framing",
      "Quick-Start Visual Guide Placed in Every Meeting Room",
    ],
    vendors: ["Logitech", "Poly", "Yealink", "Huawei", "Microsoft Teams Rooms", "Zoom Rooms"],
    processSteps: [
      {
        step: "01",
        title: "Room Size & Acoustic Survey",
        description: "Measuring table length, seating capacity, glass reflections, and display mounting walls.",
      },
      {
        step: "02",
        title: "AV Kit & Display Selection",
        description: "Matching the right video bar, mic pods, touch controller, and interactive screen to each room.",
      },
      {
        step: "03",
        title: "Concealed Mounting & Wiring",
        description: "Routing optical HDMI/CAT6 cables through floor boxes for a clutter-free boardroom table.",
      },
      {
        step: "04",
        title: "Cloud Room Sync & Demo",
        description: "Linking Microsoft 365/Zoom room calendars and walking your team through one-touch meetings.",
      },
    ],
    faqs: [
      {
        question: "Can one boardroom system support Microsoft Teams, Zoom, and Google Meet?",
        answer:
          "Yes! We configure BYOD (Bring Your Own Device) and cross-platform interop modes so your room works seamlessly whether you host on Teams, Zoom, Webex, or Google Meet.",
      },
      {
        question: "Can you hide all the cables between our boardroom table and the wall TV?",
        answer:
          "Yes, our technicians route active optical cables through floor boxes and concealed conduits so the table remains 100% clean.",
      },
    ],
  },
  {
    slug: "huawei-ekit-and-ruijie-reyee",
    id: "12",
    category: "Hardware & Security Solutions",
    title: "Huawei eKit & Ruijie Reyee Distribution",
    shortTitle: "Huawei eKit & Ruijie",
    badge: "Golden ADP",
    badgeTone: "amber",
    tagline: "Authorized UAE Elite Partner for Huawei eKit & Golden Distributor for Ruijie Reyee",
    shortDescription:
      "Official UAE distributor for genuine Huawei eKit & Ruijie Reyee enterprise switches, optical gateways & cloud Wi-Fi.",
    heroDescription:
      "Source 100% genuine Huawei eKit and Ruijie Reyee enterprise networking hardware directly from CATS Computers L.L.C — awarded Top Performing Authorized Distribution Partner in the UAE.",
    overviewParagraphs: [
      "CATS Computers L.L.C is proud to serve as an Official Huawei Enterprise BG Authorized Elite Distribution Partner for Data Communication in the UAE and a Ruijie Reyee Golden Distributor (Awarded Top Performing ADP of 2024).",
      "Whether you are a business upgrading your corporate network or an IT system integrator sourcing wholesale project quantities in Dubai, we provide immediate Burdubai warehouse stock, competitive distributor pricing, pre-sales BOM design, and full official UAE warranty support.",
    ],
    heroImage: "/images/hero-ruijie-golden.jpg",
    featureImage: "/images/company/huawei-ekit-award.jpg",
    metrics: [
      { value: "Elite", label: "Huawei eKit UAE Distribution Partner" },
      { value: "2024", label: "Ruijie Reyee Top Performing ADP Award" },
      { value: "Ready", label: "Immediate Dubai Warehouse Stock" },
      { value: "Free", label: "Lifetime Cloud App Management" },
    ],
    capabilities: [
      {
        title: "Huawei eKit SME & Enterprise Switching",
        description:
          "Managed L2/L3 Gigabit and 10G PoE+ switches engineered for ultra-low latency and app-based cloud commissioning.",
      },
      {
        title: "Huawei eKit Wi-Fi 6 / Wi-Fi 7 & Optical Gateways",
        description:
          "High-density ceiling APs, wall-plate hospitality APs, and all-in-one optical routing gateways.",
      },
      {
        title: "Ruijie & Reyee Cloud-Managed Switches",
        description:
          "Smart PoE switches with CCTV loop prevention, one-click VLAN provisioning, and remote port reboot via Ruijie Cloud.",
      },
      {
        title: "Ruijie Reyee Enterprise Routers & Mesh Wi-Fi",
        description:
          "Multi-WAN load-balancing gateways, outdoor long-range wireless bridges, and high-capacity ceiling APs.",
      },
      {
        title: "B2B Reseller, Integrator & Project Pricing",
        description:
          "Special volume pricing, deal registration support, and fast delivery across Dubai, Abu Dhabi, Sharjah, and GCC.",
      },
      {
        title: "Pre-Sales Topology Design & Turnkey Deployment",
        description:
          "Free bill-of-quantities (BOQ) sizing by vendor-certified engineers plus optional full installation.",
      },
    ],
    deliverables: [
      "100% Genuine UAE Stock with Official Manufacturer Serial Numbers",
      "Same-Day / Next-Day Dispatch from Burdubai, Dubai",
      "Free Pre-Sales Network Topology & BOM Sizing",
      "Huawei eKit & Ruijie Cloud App Project Handover",
      "Direct Authorized Distributor Warranty & RMA Support",
    ],
    vendors: ["Huawei eKit", "Ruijie Networks", "Reyee"],
    processSteps: [
      {
        step: "01",
        title: "Requirement or BOM Submission",
        description: "Share your floor plan, port count, or model list with our distribution desk.",
      },
      {
        step: "02",
        title: "Authorized Quote & Stock Allocation",
        description: "Receive competitive distributor pricing and instant stock reservation from our Dubai warehouse.",
      },
      {
        step: "03",
        title: "Fast Delivery or Turnkey Install",
        description: "Immediate pickup/delivery in the UAE or full on-site installation by our certified team.",
      },
      {
        step: "04",
        title: "Cloud Onboarding & Warranty Care",
        description: "QR-code cloud topology onboarding and local UAE warranty backing.",
      },
    ],
    faqs: [
      {
        question: "Do you supply Huawei eKit and Ruijie Reyee hardware to both end-user businesses and IT resellers?",
        answer:
          "Yes! As an Authorized Elite/Golden Distributor in Dubai, we supply both commercial end-users (with full installation and AMC) and B2B system integrators/resellers at wholesale distributor pricing.",
      },
      {
        question: "Is there any recurring license fee for Huawei eKit or Ruijie Cloud management?",
        answer:
          "No — both Huawei eKit and Ruijie Reyee include free lifetime cloud management via web portal and mobile app with zero annual subscription fees.",
      },
    ],
  },
];

export interface IndustryItem {
  id: string;
  slug: string;
  name: string;
  badge: string;
  summary: string;
  description: string;
  image: string;
  challengesSolved: string[];
  recommendedSolutions: string[];
  statValue: string;
  statLabel: string;
}

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "01",
    slug: "corporate-and-commercial-enterprises",
    name: "Corporate & Commercial Enterprises",
    badge: "Multi-Branch IT",
    summary: "High-speed Wi-Fi 6/7, Microsoft 365, NGFW security, and 4K boardrooms for modern UAE headquarters.",
    description:
      "We power multi-floor corporate offices across Business Bay, DIFC, Downtown Dubai, and Sheikh Zayed Road with redundant fiber backbones, zero-trust firewalls, and 24/7 managed IT AMC.",
    image: "/images/hero-bg.jpg",
    challengesSolved: [
      "Eliminating Wi-Fi dead zones and dropped Teams/Zoom calls across glass-walled floors",
      "Securing confidential financial & client documents with role-based AD and NGFW",
      "Providing sub-15-minute helpdesk support for busy executives",
    ],
    recommendedSolutions: [
      "Huawei eKit / Ruijie Wi-Fi 6 & Core Switching",
      "FortiGate / Sophos Next-Gen Firewalls",
      "Logitech & Poly 4K Boardroom Conferencing",
      "24/7 Comprehensive IT AMC",
    ],
    statValue: "200+",
    statLabel: "Corporate Offices Supported",
  },
  {
    id: "02",
    slug: "logistics-shipping-and-warehousing",
    name: "Logistics, Shipping & Warehousing",
    badge: "Long-Range RF & CCTV",
    summary: "High-bay warehouse Wi-Fi for barcode scanners, outdoor fiber links, and 4K perimeter CCTV.",
    description:
      "From JAFZA and Dubai South to Al Quoz and Sharjah industrial zones, we build ruggedized wireless networks that keep handheld WMS scanners connected across every aisle and loading bay.",
    image: "/images/industry-manufacturing.jpg",
    challengesSolved: [
      "Seamless roaming for handheld barcode scanners across 12m+ high steel racking",
      "Armored fiber optic interconnects between office blocks, gatehouses, and warehouses",
      "24/7 AI perimeter CCTV and biometric access control for high-value inventory",
    ],
    recommendedSolutions: [
      "Directional High-Gain Warehouse Wi-Fi APs",
      "Armored Single-Mode Fiber Optic Cabling",
      "Hikvision / Dahua 4K AI CCTV & ANPR Gates",
      "Multi-Site SD-WAN & IP Telephony",
    ],
    statValue: "85+",
    statLabel: "Warehouses & Yards Connected",
  },
  {
    id: "03",
    slug: "healthcare-clinics-and-pharmacies",
    name: "Healthcare, Clinics & Medical Centers",
    badge: "HIPAA / NABIDH Ready",
    summary: "Always-on HIS/EMR servers, strict patient data cybersecurity, and hygienic touchless biometrics.",
    description:
      "Medical centers and specialty clinics rely on zero-downtime networks for patient records, PACS imaging, insurance portals, and IP reception queues.",
    image: "/images/about-team-right.jpg",
    challengesSolved: [
      "High-availability server & NAS storage for Electronic Medical Records (EMR)",
      "Network segmentation between guest patient Wi-Fi and clinical diagnostic devices",
      "Touchless facial recognition attendance and nurse-station IP telephony",
    ],
    recommendedSolutions: [
      "Redundant Dell/HPE Servers & Synology Backup",
      "Zero-Trust Firewall & Endpoint Encryption",
      "Touchless AI Facial Recognition Access",
      "High-Density Guest & Clinical Wi-Fi",
    ],
    statValue: "99.99%",
    statLabel: "Clinical Network Uptime",
  },
  {
    id: "04",
    slug: "banking-finance-and-fintech",
    name: "Finance, Accounting & Legal Firms",
    badge: "Zero-Trust Security",
    summary: "Bank-grade perimeter defense, immutable ransomware backups, and encrypted remote work.",
    description:
      "Financial brokerages, audit firms, and legal practices in Dubai trust CATS Computers to safeguard sensitive transactions, client portfolios, and compliance archives.",
    image: "/images/case-study-boardroom.jpg",
    challengesSolved: [
      "Multi-layered defense against phishing, ransomware, and data exfiltration",
      "Immutable 3-2-1 local and cloud backups with instant VM recovery",
      "Encrypted MFA VPN access for partners and auditors working remotely",
    ],
    recommendedSolutions: [
      "HA Dual-Firewall Clusters (Fortinet / Sophos)",
      "Veeam Immutable Backup & Disaster Recovery",
      "Microsoft 365 Security Hardening & DLP",
      "Biometric Server Room Access Control",
    ],
    statValue: "100%",
    statLabel: "Audit & Security Compliance",
  },
  {
    id: "05",
    slug: "hospitality-hotels-and-restaurants",
    name: "Hospitality, Hotels & F&B Chains",
    badge: "Guest Experience IT",
    summary: "In-room wall-plate Wi-Fi, POS network reliability, IP PBX hospitality phones, and 4K surveillance.",
    description:
      "Deliver 5-star guest connectivity and uninterrupted POS/PMS operations across hotels, serviced apartments, and multi-outlet restaurant groups in the UAE.",
    image: "/images/hero-ruijie-golden.jpg",
    challengesSolved: [
      "Dedicated wall-plate Wi-Fi 6 APs in every guest room with captive portal login",
      "Isolated, always-on VLANs for POS terminals, kitchen printers, and payment gateways",
      "Unified IP PBX wake-up calls, room extensions, and 24/7 CCTV coverage",
    ],
    recommendedSolutions: [
      "Huawei eKit / Ruijie Wall-Plate Hospitality APs",
      "Grandstream / Yeastar Hospitality IP PBX",
      "4K ColorVu CCTV Surveillance",
      "24/7 Priority Hospitality AMC",
    ],
    statValue: "15,000+",
    statLabel: "Guest Rooms & POS Nodes",
  },
  {
    id: "06",
    slug: "retail-showrooms-and-trading",
    name: "Retail Showrooms & Trading Groups",
    badge: "Omnichannel Retail",
    summary: "Multi-showroom VPN connectivity, ERP/Tally cloud hosting, footfall CCTV, and IP voice.",
    description:
      "From Burdubai and Deira wholesale trading hubs to luxury mall showrooms, we connect your head office, retail branches, and warehouses into one real-time network.",
    image: "/images/hero-huawei-elite.jpg",
    challengesSolved: [
      "Real-time inventory and billing sync across multiple retail showrooms and warehouses",
      "High-definition CCTV over cash counters and display zones with mobile viewing",
      "Centralized cloud hosting for Tally, ERP, and POS databases",
    ],
    recommendedSolutions: [
      "Multi-Branch SD-WAN & VPN Routers",
      "Centralized ERP / Tally Server Virtualization",
      "AI People-Counting & Cash-Counter CCTV",
      "Unified Multi-Branch IP Telephony",
    ],
    statValue: "300+",
    statLabel: "Retail & Trading Outlets",
  },
];

export interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  clientType: string;
  location: string;
  category: "Networking" | "Cybersecurity" | "Infrastructure" | "Surveillance & AV";
  image: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: { value: string; label: string }[];
  technologies: string[];
}

export const CASE_STUDIES_DATA: CaseStudyItem[] = [
  {
    id: "01",
    slug: "huawei-ekit-10gbps-campus-network-dubai",
    title: "10Gbps Huawei eKit Core Network & Wi-Fi 6 Upgrade for 4-Floor Corporate HQ",
    clientType: "Leading Regional Trading & Holding Group (350+ Staff)",
    location: "Business Bay, Dubai",
    category: "Networking",
    image: "/images/hero-huawei-elite.jpg",
    challenge:
      "The client suffered from frequent Wi-Fi drops in glass boardrooms, slow file transfers across floors, and four tangled legacy wiring closets with zero documentation.",
    solution:
      "CATS Computers deployed an OM4 10Gbps fiber backbone across all 4 floors, installed Huawei eKit L3 PoE+ core and access switches, mounted 42 high-density Wi-Fi 6 ceiling APs, and completely re-dressed all server racks over a single weekend.",
    results: [
      "10x increase in internal server-to-workstation transfer speeds",
      "Seamless roaming across all 4 floors with zero dropped Teams calls",
      "100% Fluke-certified and labeled Cat6A & Fiber infrastructure",
    ],
    metrics: [
      { value: "10 Gbps", label: "Core Backbone Throughput" },
      { value: "0 hrs", label: "Business-Hours Downtime" },
    ],
    technologies: ["Huawei eKit", "OM4 Fiber Optic", "Cat6A LSZH", "Fluke Certification"],
  },
  {
    id: "02",
    slug: "jafza-logistics-warehouse-ruijie-wifi-cctv",
    title: "High-Bay Warehouse Wireless Coverage & 120-Camera 4K AI Surveillance",
    clientType: "3PL Logistics & Freight Forwarding Hub (180,000 sq. ft.)",
    location: "JAFZA (Jebel Ali Free Zone), Dubai",
    category: "Surveillance & AV",
    challenge:
      "Handheld barcode scanners lost connectivity between 14-meter steel storage racks, delaying shipment dispatch, while legacy analog cameras had blind spots at loading docks.",
    solution:
      "Engineered a Ruijie Reyee directional high-gain Wi-Fi 6 network with outdoor armored fiber links, alongside 120 Hikvision 4K ColorVu IP cameras, ANPR gate cameras, and a redundant RAID-6 NVR control room.",
    image: "/images/case-study-dev-pair.jpg",
    results: [
      "100% real-time WMS barcode scanner coverage across all 18 aisles",
      "90-day continuous 4K video retention with automated truck license plate logging",
      "Unified cloud management of all switches and APs via Ruijie Cloud",
    ],
    metrics: [
      { value: "180k", label: "Sq. Ft. Seamless RF Coverage" },
      { value: "120+", label: "4K AI IP Cameras Deployed" },
    ],
    technologies: ["Ruijie Reyee", "Hikvision 4K ColorVu", "Armored Fiber", "RAID-6 NVR"],
  },
  {
    id: "03",
    slug: "zero-trust-cybersecurity-fortinet-veeam-finance",
    title: "High-Availability FortiGate Firewall Cluster & Immutable Veeam Disaster Recovery",
    clientType: "Multi-Branch Financial Advisory & Audit Firm",
    location: "DIFC & Burdubai, Dubai",
    category: "Cybersecurity",
    image: "/images/case-study-cloud-migration.jpg",
    challenge:
      "The firm needed strict regulatory compliance, protection against ransomware, and encrypted remote access for 90 auditors working across client sites in the UAE.",
    solution:
      "Implemented dual FortiGate Next-Gen Firewalls in active-passive HA, deployed Sophos Intercept X EDR across all laptops, migrated workloads to Dell PowerEdge virtualization, and configured Veeam 3-2-1 immutable local + cloud backups.",
    results: [
      "Zero security incidents and 100% pass rate on external compliance audits",
      "Sub-10-minute virtual machine recovery time objective (RTO)",
      "MFA-protected SSL VPN for 90+ hybrid and field auditors",
    ],
    metrics: [
      { value: "99.99%", label: "HA Firewall Uptime" },
      { value: "< 10m", label: "Disaster Recovery RTO" },
    ],
    technologies: ["Fortinet HA", "Sophos EDR", "Dell PowerEdge", "Veeam Backup", "Synology NAS"],
  },
  {
    id: "04",
    slug: "smart-boardrooms-and-yeastar-ip-pbx-deployment",
    title: "Multi-Branch Yeastar IP PBX & 8 Smart 4K Microsoft Teams Boardrooms",
    clientType: "Real Estate Development & Contracting Group",
    location: "Sheikh Zayed Road, Dubai",
    category: "Surveillance & AV",
    image: "/images/case-study-boardroom.jpg",
    challenge:
      "High inter-branch phone bills, missed reception calls, and complex meeting room setups that required IT staff assistance before every client presentation.",
    solution:
      "Deployed a Yeastar P-Series PBX with 160 Yealink color IP phones and Linkus mobile softphones across 3 offices, and equipped 8 meeting rooms with Logitech Rally Bars, 86\" 4K interactive panels, and one-touch Teams controllers.",
    results: [
      "45% reduction in monthly telecom expenses with free inter-branch calling",
      "One-touch instant launch for all executive Zoom & Teams meetings",
      "Full call recording and CRM pop-up integration for the sales desk",
    ],
    metrics: [
      { value: "160+", label: "Unified IP & Mobile Extensions" },
      { value: "8 Rooms", label: "4K One-Touch Boardrooms" },
    ],
    technologies: ["Yeastar PBX", "Yealink IP Phones", "Logitech Rally", "86\" 4K Interactive Panels"],
  },
  {
    id: "05",
    slug: "microsoft-365-hybrid-cloud-migration-healthcare",
    title: "Zero-Downtime Microsoft 365 Migration & Server Virtualization for Medical Group",
    clientType: "Multi-Specialty Healthcare Group (5 Clinics)",
    location: "Dubai & Sharjah",
    category: "Infrastructure",
    image: "/images/about-engineer-left.jpg",
    challenge:
      "Aging on-premise mail servers and fragmented clinic file shares caused slow patient check-ins and email synchronization issues.",
    solution:
      "Migrated 280 mailboxes to Microsoft 365 with Defender email security, deployed HPE ProLiant hypervisor servers for the HIS/EMR database, and linked all 5 clinics over encrypted SD-WAN tunnels.",
    results: [
      "Zero lost emails or clinic downtime during weekend cutover",
      "Instant insurance and patient record lookup across all 5 branches",
      "Centralized 24/7 proactive monitoring under a CATS Comprehensive AMC",
    ],
    metrics: [
      { value: "280+", label: "Mailboxes Migrated Seamlessly" },
      { value: "5 Sites", label: "SD-WAN Interconnected Clinics" },
    ],
    technologies: ["Microsoft 365", "HPE ProLiant", "VMware", "SD-WAN", "24/7 Managed AMC"],
  },
  {
    id: "06",
    slug: "hospitality-wifi-and-biometric-access-dubai",
    title: "Turnkey Hospitality Wi-Fi 6, IP Telephony & Biometric Access for Boutique Hotel",
    clientType: "4-Star Executive Hotel & Serviced Suites (140 Keys)",
    location: "Burdubai, Dubai",
    category: "Networking",
    image: "/images/hero-ruijie-golden.jpg",
    challenge:
      "Guests complained of weak Wi-Fi in corner suites, while back-of-house staff doors and time attendance were still managed with physical keys and paper logs.",
    solution:
      "Installed 140 in-room wall-plate Wi-Fi 6 APs with PoE passthrough for IP room phones, upgraded the core switching fabric, and deployed ZKTeco facial recognition attendance and magnetic door access across 18 staff zones.",
    results: [
      "Guest Wi-Fi satisfaction scores jumped from 3.1★ to 4.9★ within 30 days",
      "Automated HR shift and overtime payroll calculation for 95 hotel staff",
      "Single-cable PoE delivery for both in-room Wi-Fi and guest IP phones",
    ],
    metrics: [
      { value: "140+", label: "In-Room Wall-Plate Wi-Fi 6 APs" },
      { value: "4.9 ★", label: "Post-Upgrade Guest Wi-Fi Rating" },
    ],
    technologies: ["Wall-Plate Wi-Fi 6", "Grandstream Hospitality PBX", "Facial Biometrics", "Cat6 Cabling"],
  },
];

export interface BlogPostItem {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  image: string;
  excerpt: string;
  keyTakeaways: string[];
  sections: { heading: string; body: string }[];
}

export const BLOG_POSTS_DATA: BlogPostItem[] = [
  {
    slug: "huawei-ekit-vs-traditional-networking-uae-enterprises",
    title: "Why UAE Enterprises Are Upgrading to Huawei eKit & Wi-Fi 6/7 Architectures",
    category: "Enterprise Networking",
    date: "October 24, 2026",
    readTime: "5 Min Read",
    author: "CATS Network Engineering Team",
    authorRole: "Huawei eKit Elite Partner Specialists",
    image: "/images/blog-cpu-chip.jpg",
    excerpt:
      "Discover how Huawei eKit's cloud-managed switches, optical gateways, and high-density Wi-Fi 6/7 access points deliver enterprise throughput with zero recurring license fees.",
    keyTakeaways: [
      "QR-code cloud provisioning cuts new office network deployment time by 60%",
      "Intelligent PoE+ management and AI roaming eliminate video call drops",
      "Official UAE distributor warranty and local Dubai stock ensure zero supply delays",
    ],
    sections: [
      {
        heading: "The Shift Toward Cloud-Managed SME & Enterprise Networks",
        body: "For years, businesses in Dubai had to choose between expensive, license-heavy enterprise hardware or consumer-grade routers that crashed under heavy load. Huawei eKit bridges that gap by bringing Huawei's carrier-grade hardware reliability to commercial enterprises, offices, hotels, and retail chains — with lifetime free cloud management.",
      },
      {
        heading: " Eliminating Dead Zones in Modern Glass-Walled Dubai Offices",
        body: "Modern office towers in Business Bay and DIFC feature floor-to-ceiling glass partitions and high device density. By combining Fluke-certified Cat6A cabling with Huawei eKit smart antenna Wi-Fi 6/7 access points, our engineers guarantee seamless fast roaming as employees walk from their desks into boardrooms.",
      },
      {
        heading: "Source Genuine Huawei eKit Hardware in Dubai",
        body: "As an Official Huawei Enterprise BG Authorized Elite Distribution Partner in the UAE, CATS Computers L.L.C maintains ready stock in Burdubai and provides complete pre-sales topology design, installation, and 24/7 AMC support.",
      },
    ],
  },
  {
    slug: "ransomware-defense-zero-trust-checklist-dubai-businesses",
    title: "The Complete 2026 Zero-Trust Cybersecurity & Ransomware Defense Checklist for UAE Companies",
    category: "Cybersecurity",
    date: "October 18, 2026",
    readTime: "6 Min Read",
    author: "CATS Cybersecurity Practice",
    authorRole: "Certified Fortinet & Sophos Engineers",
    image: "/images/blog-cloud-engineers.jpg",
    excerpt:
      "A practical 5-layer security blueprint combining Next-Generation Firewalls, EDR endpoint protection, VLAN micro-segmentation, and 3-2-1 immutable backups.",
    keyTakeaways: [
      "Why traditional antivirus alone cannot stop modern credential-theft ransomware",
      "Isolating CCTV, biometric, and guest Wi-Fi traffic from your finance & ERP servers",
      "How immutable Veeam & Synology backups guarantee recovery in under 15 minutes",
    ],
    sections: [
      {
        heading: "Why Perimeter Firewalls Need Synchronized Endpoint Defense",
        body: "Modern cyber attacks rarely use brute force alone — they target employee inboxes with sophisticated phishing and exploit unpatched laptops working outside the office. Deploying a Next-Generation Firewall (FortiGate, Sophos XGS, or SonicWall) paired with synchronized EDR (Endpoint Detection & Response) ensures compromised devices are isolated automatically before lateral movement occurs.",
      },
      {
        heading: "The Golden 3-2-1-1-0 Backup Rule",
        body: "Even with world-class perimeter security, every enterprise must maintain three copies of critical data on two different media types, with one copy off-site in the cloud and one copy air-gapped/immutable. Our engineers test backup restorations monthly so you never face ransom demands.",
      },
    ],
  },
  {
    slug: "how-to-choose-the-right-it-amc-partner-in-dubai",
    title: "How to Choose the Right IT Annual Maintenance Contract (AMC) Partner in Dubai",
    category: "Managed IT & AMC",
    date: "October 10, 2026",
    readTime: "4 Min Read",
    author: "CATS Managed Services Desk",
    authorRole: "24/7 Enterprise Support Team",
    image: "/images/blog-cyber-servers.jpg",
    excerpt:
      "What separates a reactive 'break-fix' technician from a proactive Managed IT AMC partner that prevents downtime before your staff even notices?",
    keyTakeaways: [
      "Look for guaranteed SLA response times (<15 min remote, <2 hr on-site in Dubai)",
      "Ensure your AMC covers firewalls, servers, Wi-Fi, CCTV, PABX, and vendor coordination",
      "Demand complete network documentation and scheduled preventive maintenance visits",
    ],
    sections: [
      {
        heading: "The Hidden Cost of Reactive IT Support",
        body: "When a server RAID array degrades or a firewall license expires without warning, an hour of company-wide downtime costs far more than an entire year of proactive maintenance. A true IT AMC partner monitors server disk health, UPS batteries, and daily backups 24/7.",
      },
      {
        heading: "One Single Point of Contact for All Your Technology",
        body: "Instead of juggling separate vendors for networking, CCTV, IP phones, servers, and Microsoft 365, CATS Computers handles your entire IT ecosystem under one transparent SLA — backed by 30+ global vendor partnerships.",
      },
    ],
  },
  {
    slug: "ruijie-reyee-cloud-networking-guide-warehouses-hotels",
    title: "Ruijie Reyee Cloud Networking: The Smart Choice for UAE Warehouses, Hotels & Multi-Branch Retail",
    category: "Hardware Distribution",
    date: "September 28, 2026",
    readTime: "5 Min Read",
    author: "CATS Distribution Division",
    authorRole: "Ruijie Reyee Golden Distributor UAE (Top ADP 2024)",
    image: "/images/hero-ruijie-golden.jpg",
    excerpt:
      "Why system integrators and IT managers across the UAE rely on Ruijie & Reyee switches, routers, and access points for self-organizing cloud networks.",
    keyTakeaways: [
      "One-click CCTV VLAN & PoE loop prevention built directly into Reyee switches",
      "Remote port reboot and live topology health from the Ruijie Cloud mobile app",
      "Awarded Top Performing Authorized Distribution Partner (ADP) 2024 in the UAE",
    ],
    sections: [
      {
        heading: "Self-Organizing Networks With Zero Cloud Controller Fees",
        body: "Ruijie Reyee hardware automatically discovers switches, gateways, and access points on the network, generating a live visual topology within minutes. If a CCTV camera freezes at a remote warehouse, an administrator can reboot that specific PoE port directly from their smartphone.",
      },
    ],
  },
];

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-Time" | "On-Site (Dubai)";
  experience: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
}

export const CAREERS_DATA: JobOpening[] = [
  {
    id: "net-sec-eng",
    title: "Senior Network & Security Engineer (L2/L3)",
    department: "Enterprise Networking & Cybersecurity",
    location: "Burdubai, Dubai, UAE",
    type: "Full-Time",
    experience: "3–6 Years UAE Experience",
    summary:
      "Lead turnkey deployments of Huawei eKit, Ruijie, Cisco switches/Wi-Fi, and Fortinet/Sophos Next-Generation Firewalls for enterprise clients across Dubai.",
    responsibilities: [
      "Design and configure VLANs, routing, SD-WAN, HA firewalls, and high-density Wi-Fi 6/7 networks",
      "Perform on-site commissioning, Fluke validation, and L3 escalation troubleshooting",
      "Conduct cybersecurity audits and firewall rule hardening for AMC clients",
    ],
    requirements: [
      "CCNA/CCNP, HCIA/HCIP, NSE4, or Sophos Certified Architect credentials",
      "Hands-on experience with Huawei eKit, Ruijie, Fortinet, Sophos, and Ubiquiti",
      "Valid UAE driving license is a strong advantage",
    ],
  },
  {
    id: "sys-cloud-admin",
    title: "Systems, Virtualization & Cloud Engineer",
    department: "Servers, Storage & Cloud",
    location: "Burdubai, Dubai, UAE",
    type: "Full-Time",
    experience: "3–5 Years Experience",
    summary:
      "Deploy and manage Dell/HPE servers, VMware/Hyper-V clusters, Synology/QNAP NAS storage, Veeam backups, and Microsoft 365 migrations.",
    responsibilities: [
      "Configure Windows Server Active Directory, Group Policy, RDS, and hypervisor clusters",
      "Execute zero-downtime Microsoft 365 and Google Workspace email/SharePoint migrations",
      "Monitor and test Veeam and Synology 3-2-1 backup pipelines for AMC customers",
    ],
    requirements: [
      "Strong expertise in Windows Server 2019/2022, VMware vSphere, Hyper-V, and Microsoft 365",
      "Hands-on familiarity with Dell iDRAC, HPE iLO, Synology DSM, and Veeam",
      "Excellent client communication and documentation skills",
    ],
  },
  {
    id: "elv-cctv-tech",
    title: "ELV, CCTV & Structured Cabling Technician",
    department: "Security & Field Operations",
    location: "Burdubai, Dubai, UAE",
    type: "Full-Time",
    experience: "2–5 Years UAE Experience",
    summary:
      "Install and commission IP CCTV cameras, biometric access control, structured Cat6/Cat6A cabling, fiber splicing, and smart boardroom AV systems.",
    responsibilities: [
      "Install and terminate Cat6/Cat6A patch panels, faceplates, and server cabinets neatly",
      "Mount and configure Hikvision/Dahua IP cameras, NVRs, ZKTeco biometrics, and magnetic locks",
      "Perform Fluke cable testing and rack re-dressing projects",
    ],
    requirements: [
      "Proven track record in ELV, CCTV, access control, and structured cabling in the UAE",
      "High attention to clean cable management and safety standards",
      "Ability to read floor plans and work collaboratively in project teams",
    ],
  },
  {
    id: "it-sales-acct-mgr",
    title: "B2B IT Solutions & Channel Sales Executive",
    department: "Enterprise Sales & Distribution",
    location: "Burdubai, Dubai, UAE",
    type: "Full-Time",
    experience: "2–5 Years UAE IT Sales Experience",
    summary:
      "Drive enterprise IT project sales, AMC contracts, and wholesale distribution of Huawei eKit & Ruijie Reyee networking hardware across the UAE.",
    responsibilities: [
      "Identify and close B2B opportunities for turnkey IT setups, AMC contracts, and hardware supply",
      "Build long-term relationships with system integrators, resellers, and corporate IT managers",
      "Collaborate with pre-sales engineers to prepare accurate BOQs and proposals",
    ],
    requirements: [
      "2+ years of B2B IT hardware, networking, or managed services sales in the UAE",
      "Familiarity with Huawei, Ruijie, Cisco, Fortinet, Dell, HP, and Hikvision portfolios",
      "Strong negotiation skills and UAE driving license preferred",
    ],
  },
];

export interface FaqCategory {
  category: string;
  items: { question: string; answer: string }[];
}

export const FAQ_DATA: FaqCategory[] = [
  {
    category: "General & Company",
    items: [
      {
        question: "Where is CATS Computers L.L.C located in Dubai?",
        answer:
          "Our head office, showroom, and distribution center are located at Office No #6, Water Tank Building, Al Musallah Street, Burdubai, Dubai, UAE (P.O. Box 118562). We serve clients across Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain.",
      },
      {
        question: "Is CATS Computers an authorized distributor for Huawei eKit and Ruijie Reyee?",
        answer:
          "Yes! CATS Computers L.L.C is an Official Huawei Enterprise BG Authorized Elite Distribution Partner for Data Communication in the UAE and an Official Ruijie Reyee Golden Distributor (Awarded Top Performing Authorized Distribution Partner of 2024).",
      },
      {
        question: "Do you handle both hardware supply and complete on-site installation?",
        answer:
          "Yes. We supply 100% genuine hardware from 30+ global technology brands AND provide complete turnkey engineering — including site survey, structured cabling, rack dressing, configuration, testing, and 24/7 Annual Maintenance Contracts (AMC).",
      },
    ],
  },
  {
    category: "IT AMC & 24/7 Managed Support",
    items: [
      {
        question: "What is your response time for emergency IT support in Dubai?",
        answer:
          "For AMC clients, our remote helpdesk responds in under 15 minutes, and our on-site field engineers are dispatched across Dubai within 2 hours for critical server or network emergencies.",
      },
      {
        question: "What is the difference between a Comprehensive and Non-Comprehensive IT AMC?",
        answer:
          "Both include unlimited remote support, scheduled preventive maintenance visits, and emergency on-site engineer callouts. A Comprehensive AMC additionally covers replacement of faulty covered hardware components, whereas a Non-Comprehensive AMC covers all engineering labor while replacement parts are billed as needed.",
      },
      {
        question: "Can you audit and clean up our existing undocumented server room?",
        answer:
          "Yes! Many of our long-term clients started with a weekend Server Rack Rectification & IT Audit where we re-dress messy cabling, label every port, recover admin credentials, and deliver a complete network topology diagram.",
      },
    ],
  },
  {
    category: "Networking, Security & Cloud",
    items: [
      {
        question: "How do you guarantee zero Wi-Fi dead zones in large offices or warehouses?",
        answer:
          "We perform predictive and on-site RF heatmap surveys to calculate wall attenuation and interference, then deploy enterprise Wi-Fi 6/7 access points (Huawei eKit, Ruijie, Aruba, Ubiquiti) with seamless fast-roaming controllers.",
      },
      {
        question: "Can you migrate our company emails to Microsoft 365 or Google Workspace without losing old emails?",
        answer:
          "100%. We pre-stage and synchronize all historical emails, folders, contacts, and calendars in the background before switching the live domain, resulting in zero data loss and zero business-hours downtime.",
      },
      {
        question: "How do you protect our servers and NAS from ransomware?",
        answer:
          "We implement a multi-layered Zero-Trust architecture: Next-Gen Firewalls (Fortinet/Sophos), Endpoint EDR (Sophos/Kaspersky/ESET), strict VLAN segmentation, and 3-2-1 immutable backups via Veeam and Synology.",
      },
    ],
  },
];

export interface TestimonialStory {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  location: string;
  rating: number;
  impactMetric: string;
  servicesUsed: string[];
}

export const TESTIMONIALS_DATA: TestimonialStory[] = [
  {
    id: "t1",
    quote:
      "CATS Computers completely transformed our 4-floor corporate headquarters in Business Bay. They replaced our unstable legacy switches with a 10Gbps Huawei eKit core and Wi-Fi 6 network over a single weekend — zero downtime on Monday morning.",
    author: "Tariq Al Mansoori",
    role: "Chief Operations Officer",
    company: "Al Mansoori Commercial Holdings",
    industry: "Corporate Enterprise",
    location: "Business Bay, Dubai",
    rating: 5,
    impactMetric: "10Gbps Core & Zero Wi-Fi Drops",
    servicesUsed: ["Huawei eKit", "Structured Cabling", "24/7 IT AMC"],
  },
  {
    id: "t2",
    quote:
      "Across our 180,000 sq. ft. JAFZA logistics warehouse, handheld barcode scanners used to disconnect constantly. CATS deployed Ruijie Reyee high-gain wireless and 120 Hikvision 4K cameras. Our dispatch speed improved immediately.",
    author: "Rajesh Menon",
    role: "Head of IT & Supply Chain",
    company: "GulfStream Freight & Logistics L.L.C",
    industry: "Logistics & Warehousing",
    location: "JAFZA, Dubai",
    rating: 5,
    impactMetric: "100% Warehouse RF Coverage",
    servicesUsed: ["Ruijie Reyee Wi-Fi", "4K AI CCTV", "Fiber Optic"],
  },
  {
    id: "t3",
    quote:
      "Having CATS Computers as our IT AMC partner feels like having a 20-person enterprise IT department on speed dial. Their remote helpdesk resolves 95% of staff tickets within 10 minutes, and our FortiGate + Veeam setup passed our financial audit with flying colors.",
    author: "Sarah Jenkins",
    role: "Managing Partner",
    company: "Apex Capital & Advisory",
    industry: "Finance & Advisory",
    location: "DIFC, Dubai",
    rating: 5,
    impactMetric: "< 10 Min Average Ticket Resolution",
    servicesUsed: ["Cybersecurity", "Veeam Backup", "Managed AMC"],
  },
  {
    id: "t4",
    quote:
      "We connected 5 medical clinics across Dubai and Sharjah with CATS Computers. They handled our Microsoft 365 migration, HPE server virtualization, biometric attendance, and Yeastar IP PBX under one roof with exceptional professionalism.",
    author: "Dr. Khalid Siddiqui",
    role: "Medical Director",
    company: "Noor Al Shifa Healthcare Group",
    industry: "Healthcare",
    location: "Dubai & Sharjah",
    rating: 5,
    impactMetric: "5 Clinics Unified on Zero-Downtime Cloud",
    servicesUsed: ["Microsoft 365", "HPE Servers", "IP Telephony"],
  },
  {
    id: "t5",
    quote:
      "As an IT system integrator in the UAE, sourcing Huawei eKit and Ruijie Reyee hardware from CATS Computers in Burdubai has been a game changer. Genuine stock, instant dispatch, and their pre-sales engineers always help validate complex BOMs.",
    author: "Imran Qureshi",
    role: "Technical Director",
    company: "NextWave System Integrators",
    industry: "B2B Channel Partner",
    location: "Burdubai, Dubai",
    rating: 5,
    impactMetric: "Same-Day Distributor Stock Dispatch",
    servicesUsed: ["Huawei eKit Distribution", "Ruijie Golden ADP"],
  },
  {
    id: "t6",
    quote:
      "Our executive boardrooms used to have cables everywhere. CATS installed Logitech Rally video bars, 86-inch interactive 4K panels, and one-touch Microsoft Teams controllers. Now every client meeting starts in one second.",
    author: "Elena Rostova",
    role: "VP of Corporate Affairs",
    company: "Emaar Square Consulting",
    industry: "Real Estate & Consulting",
    location: "Downtown Dubai",
    rating: 5,
    impactMetric: "8 Smart 4K Boardrooms Commissioned",
    servicesUsed: ["AV Conferencing", "Access Control", "Structured Cabling"],
  },
];

