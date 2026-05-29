// Single source of truth for site copy.

export const company = {
  name: "Rephina Software Solutions",
  shortName: "Rephina",
  legalName: "Rephina Software Solutions (Pty) Ltd",
  registration: "2026/250285/07",
  location: "South Africa",
  email: "info@rephinasoftware.com",
  phone: "071 927 9462",
  phoneE164: "+27719279462",
  tagline: "Build · Automate · Grow.",
  positioning: "Enterprise quality at SME scale and budget.",
  mission:
    "To democratize access to professional software development and AI technology for South African SMEs, startups and freelancers — enabling small businesses to compete effectively, operate efficiently and grow sustainably.",
  vision:
    "To become South Africa's most trusted technology partner for small businesses, recognised for making enterprise-grade software accessible, affordable and impactful for companies at every stage of growth.",
};

export const services = [
  {
    slug: "custom-software",
    title: "Custom Software",
    tag: "Build",
    short: "Full-stack web apps, APIs and mobile apps built for your workflow.",
    icon: "code",
    bullets: [
      "Full-stack web applications",
      "Backend systems & API development",
      "Cross-platform mobile apps (iOS + Android)",
      "Integrations with PayFast, PayGate, Ozow",
      "Database design & migrations",
    ],
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    tag: "Automate",
    short: "Practical AI that saves hours — WhatsApp bots, generative AI, process automation.",
    icon: "spark",
    bullets: [
      "WhatsApp & web AI chatbots",
      "Generative AI (OpenAI, Claude) integration",
      "AI transformation consulting",
      "Business process automation",
      "Document & content automation",
    ],
  },
  {
    slug: "power-platform",
    title: "Power Platform",
    tag: "Low-code",
    short: "Enterprise-grade business apps for a fraction of custom-development cost.",
    icon: "platform",
    bullets: [
      "Power Apps for mobile & field teams",
      "Power Automate workflows",
      "SharePoint & Microsoft 365 integration",
      "Approval, inspection & CRM apps",
      "Training & enablement",
    ],
  },
  {
    slug: "web-saas",
    title: "Web, E-com & SaaS",
    tag: "Web",
    short: "From a marketing site to a multi-tenant SaaS product — done right.",
    icon: "globe",
    bullets: [
      "WordPress & WooCommerce e-commerce",
      "Marketing websites with SEO",
      "Web applications & dashboards",
      "SaaS MVP development",
      "Hosting on Xneelo, Hetzner, Azure, AWS",
    ],
  },
  {
    slug: "consulting",
    title: "Consulting",
    tag: "Advisory",
    short: "Fractional CTO, technology assessments and digital transformation roadmaps.",
    icon: "compass",
    bullets: [
      "Technology needs assessment",
      "Digital transformation roadmaps",
      "Fractional CTO services",
      "Vendor & tool evaluation",
      "Team training & enablement",
    ],
  },
  {
    slug: "support",
    title: "Support",
    tag: "Care",
    short: "Ongoing care, hosting, security patches and priority response — month-to-month.",
    icon: "shield",
    bullets: [
      "Monthly maintenance retainers",
      "Hosting & infrastructure management",
      "Security updates & monitoring",
      "Bug fixes & feature enhancements",
      "Priority response times",
    ],
  },
];

export const pillars = [
  {
    title: "Accessibility first",
    icon: "spark",
    body: "Pricing in Rands. Flexible payment terms. Phased delivery so a small budget today doesn't block big ambitions tomorrow.",
  },
  {
    title: "Local context",
    icon: "globe",
    body: "South African team for South African businesses. We know POPIA, load-shedding, PayFast, and what it costs to run a business here.",
  },
  {
    title: "Enterprise quality",
    icon: "shield",
    body: "Code review, automated tests, security best practice and production-grade hosting — the same standards used by large firms.",
  },
  {
    title: "Long partnership",
    icon: "heart",
    body: "We educate, train and stay with you long after launch. Most project clients move into ongoing support partnerships.",
  },
];

export const process = [
  {
    icon: "compass",
    title: "Discovery",
    body: "Stakeholder interviews, clear scope, realistic timeline. 1–2 weeks before any code is written.",
  },
  {
    icon: "code",
    title: "Agile build",
    body: "1–2 week sprints with weekly demos. You see real progress, not slide decks.",
  },
  {
    icon: "rocket",
    title: "Launch",
    body: "Deployment, data migration, user training, go-live support. We don't throw it over the wall.",
  },
  {
    icon: "heart",
    title: "Partnership",
    body: "Monthly support retainers, feature iterations and strategic guidance as you grow.",
  },
];

// Tech stack we work in — surfaced as a logo marquee on the home page.
// Logo files live in /public/logos.
export const stack = [
  { name: "React", file: "react.svg" },
  { name: "Next.js", file: "nextjs.svg" },
  { name: "TypeScript", file: "typescript.svg" },
  { name: "Node.js", file: "nodejs.svg" },
  { name: "Python", file: "python.svg" },
  { name: "Tailwind CSS", file: "tailwindcss.svg" },
  { name: "PostgreSQL", file: "postgresql.svg" },
  { name: "MongoDB", file: "mongodb.svg" },
  { name: "Power Apps", file: "powerapps.svg" },
  { name: "Power Automate", file: "powerautomate.svg" },
  { name: "OpenAI", file: "openai.svg" },
  { name: "Claude", file: "claude.svg" },
  { name: "WordPress", file: "wordpress.svg" },
  { name: "WooCommerce", file: "woocommerce.svg" },
  { name: "Cloudflare", file: "cloudflare.svg" },
  { name: "Azure", file: "azure.svg" },
  { name: "AWS", file: "aws.svg" },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const faqs = [
  {
    q: "Do you work with clients anywhere in South Africa?",
    a: "Yes. We deliver remotely across South Africa — Johannesburg, Cape Town, Durban, Pretoria, Port Elizabeth and beyond — with the same time zone, language and business context. In-person sessions can be arranged for larger engagements.",
  },
  {
    q: "What size of project do you take on?",
    a: "Anything from a single-page marketing site for a freelancer to a multi-tenant SaaS platform. We're explicitly built for SMEs, startups and freelancers — not large corporates — so the engagement model flexes with your scale and budget.",
  },
  {
    q: "Will I be locked in?",
    a: "No. You own the code, the hosting accounts and the data. Our contracts make this explicit. We win business by being good partners, not by holding clients hostage.",
  },
  {
    q: "Do you build with AI?",
    a: "Yes — practically. We integrate OpenAI / Claude for chatbots, document automation, content generation and customer service augmentation. We focus on AI use cases that pay back inside 6 months, not science projects.",
  },
  {
    q: "How fast can you start?",
    a: "Most engagements kick off within 1–2 weeks of contract signing. Simple websites typically launch in 2–3 weeks. Custom apps run 6–12 weeks depending on scope.",
  },
  {
    q: "How do payment terms work?",
    a: "We offer milestone billing, phased implementation (MVP first, expand later) and monthly installments for larger projects. We'll structure something that respects your cash flow during scoping.",
  },
];
