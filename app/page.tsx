import Link from "next/link";
import Container from "@/components/Container";
import CtaSection from "@/components/CtaSection";
import ServiceIcon from "@/components/ServiceIcon";
import { services, pillars, process, industries, stats, company } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <Stats />
      <Pillars />
      <Process />
      <Industries />
      <CtaSection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-circuit opacity-70"
      />
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 -z-10 h-[600px] w-[1100px] -translate-x-1/2 rounded-[60%] bg-gradient-to-br from-brand-100 via-white to-accent-50 blur-3xl"
      />
      <Container className="relative pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-ink-700 shadow-sm backdrop-blur transition hover:border-brand-300 hover:text-brand-800"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-500" />
            Now accepting new SME partners for 2026
            <span aria-hidden="true">→</span>
          </Link>

          <h1 className="mt-7 text-4xl font-semibold tracking-tight text-ink-900 sm:text-6xl">
            Enterprise quality
            <br />
            at{" "}
            <span className="gradient-text">SME scale and budget.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-600 sm:text-xl">
            Rephina is a South African software partner for SMEs, startups
            and freelancers. Custom software, AI integration, Microsoft
            Power Platform and modern web — built for South African
            business reality.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-800 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-brand-900"
            >
              Book a free consultation
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-6 py-3 text-sm font-medium text-ink-800 transition hover:border-ink-300 hover:bg-ink-50"
            >
              Explore our services
            </Link>
          </div>

          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.32em] text-ink-500">
            <span className="text-brand-800">Build</span>
            <span className="mx-2 text-sky-400">·</span>
            <span className="text-sky-500">Automate</span>
            <span className="mx-2 text-accent-500">·</span>
            <span className="text-accent-600">Grow</span>
          </p>
        </div>
      </Container>
    </section>
  );
}

function TrustStrip() {
  const items = [
    "Custom Software",
    "AI Integration",
    "Power Platform",
    "WordPress & WooCommerce",
    "Mobile Apps",
    "SaaS MVPs",
    "Fractional CTO",
  ];
  return (
    <section className="border-y border-ink-100 bg-white">
      <Container className="py-6">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-ink-500">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-400">
            What we build
          </span>
          {items.map((item) => (
            <span key={item} className="font-medium text-ink-700">
              {item}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Services() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <span className="inline-flex items-center rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-800">
              What we do
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
              Six ways we turn
              <br />
              technology into ROI.
            </h2>
            <p className="mt-4 text-ink-600">
              Full-stack capability under one roof — so SME clients work with
              one team instead of stitching vendors together.
            </p>
            <Link
              href="/services"
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-800 hover:text-brand-900"
            >
              See all services
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services#${s.slug}`}
                className="group relative flex flex-col rounded-2xl border border-ink-100 bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-800/5"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-800 transition group-hover:bg-brand-800 group-hover:text-white">
                  <ServiceIcon name={s.icon} />
                </span>
                <h3 className="mt-5 text-base font-semibold text-ink-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {s.short}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-brand-800 opacity-0 transition group-hover:opacity-100">
                  Learn more <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Stats() {
  return (
    <section className="bg-brand-900 text-white">
      <Container className="py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-400">
          {company.tagline}
        </p>
        <div className="mt-8 grid gap-10 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-semibold tracking-tight sm:text-5xl">
                {stat.value}
              </div>
              <p className="mt-3 text-sm text-ink-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Pillars() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent-800">
            Why Rephina
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            We're built for South African SMEs — not enterprises pretending to
            care about you.
          </h2>
          <p className="mt-4 text-ink-600">
            Large firms are too expensive. Overseas outsourcing misses the
            context. Freelancers can't carry complex work. We sit in the gap
            on purpose.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="relative rounded-2xl border border-ink-100 bg-white p-6"
            >
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-800 text-xs font-semibold text-white">
                {(i + 1).toString().padStart(2, "0")}
              </div>
              <h3 className="mt-5 text-base font-semibold text-ink-900">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Process() {
  return (
    <section className="bg-ink-50/60 py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-800">
            How we work
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            A delivery process designed
            <br />
            for transparency.
          </h2>
          <p className="mt-4 text-ink-600">
            You see working software every 1–2 weeks. No mystery, no surprise
            invoices, no "throw it over the wall" handoffs at launch.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step) => (
            <li
              key={step.step}
              className="relative rounded-2xl bg-white p-6 shadow-sm shadow-ink-900/[0.04] ring-1 ring-ink-100"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-800">
                {step.step}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-ink-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function Industries() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent-800">
              Industries we serve
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
              Vertical experience across the SA SME landscape.
            </h2>
            <p className="mt-4 text-ink-600">
              From a single landing page for a freelancer to a multi-tenant
              business system — our delivery model flexes across eight core
              industries.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-800 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-brand-900"
            >
              Tell us about your business
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="flex flex-col items-start gap-3 rounded-xl border border-ink-100 bg-white p-4"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-800">
                  <ServiceIcon name={ind.icon} className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text-ink-800">
                  {ind.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
