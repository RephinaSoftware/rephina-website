import Link from "next/link";
import Container from "@/components/Container";
import CtaSection from "@/components/CtaSection";
import CodeBlock from "@/components/CodeBlock";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import SectionDivider from "@/components/SectionDivider";
import { services, pillars, process, stack } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StackMarquee />
      <Capabilities />
      <SectionDivider color="blue" />
      <Process />
      <SectionDivider color="yellow" />
      <Pillars />
      <SectionDivider color="lightblue" />
      <CtaSection />
    </>
  );
}

/* ─────────── Hero ─────────── */

function Hero() {
  return (
    <section className="relative">
      <Container className="relative pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal>
              <h1 className="text-[2.5rem] font-semibold leading-[1.05] tracking-tight text-ink-900 sm:text-6xl lg:text-[4rem]">
                Enterprise quality
                <br />
                at <span className="gradient-text">SME scale.</span>
              </h1>
            </Reveal>

            <Reveal delay={80}>
              <p className="mt-6 max-w-xl text-lg text-ink-600 sm:text-xl">
                A South African software partner for SMEs and startups —
                custom software, AI and modern web, built for real business needs.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="btn-glow group inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-brand-950 transition hover:bg-accent-400"
                >
                  Start a project
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full glass-light px-6 py-3 text-sm font-medium text-ink-800 shadow-sm transition hover:text-brand-900"
                >
                  Browse services
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="flex justify-center lg:justify-end">
            <CodeBlock />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ─────────── Tech stack marquee ─────────── */

function StackMarquee() {
  // duplicate so the loop has seamless content
  const items = [...stack, ...stack];
  return (
    <section
      aria-label="Technologies we work with"
      className="relative overflow-hidden border-y border-ink-200/60 bg-white/55 py-7 backdrop-blur-sm"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
      <div className="relative">
        <div className="marquee items-center gap-12 px-12">
          {items.map((tech, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={`${tech.name}-${i}`}
              src={`/logos/${tech.file}`}
              alt={tech.name}
              title={tech.name}
              loading="lazy"
              className="h-7 w-auto shrink-0 opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── Capabilities (dark glass cards) ─────────── */

function Capabilities() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container className="relative">
        <Reveal>
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full glass-light px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-800 shadow-sm">
              <span className="" />
              Our Services
            </span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
              Six ways we help you build better software.
            </h2>
            <p className="mt-4 max-w-xl text-ink-600">
              Full-stack capability under one roof — one team instead of
              stitched-together vendors.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={60 + i * 60}>
              <Link
                href={`/services#${s.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl glass-light p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/[0.06]"
              >
                {/* hover glow line at top */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-950 text-accent-400 shadow-sm shadow-brand-900/20 transition group-hover:bg-accent-500 group-hover:text-brand-950">
                    <ServiceIcon name={s.icon} />
                  </span>
                  <span className="rounded-full border border-ink-200 bg-white/70 px-2.5 py-1 text-[11px] font-medium text-ink-600">
                    {s.tag}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-ink-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {s.short}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.14em] text-accent-700">
                  learn more
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={180}>
          <div className="mt-12 flex justify-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full glass-light px-5 py-2.5 text-sm font-medium text-ink-800 shadow-sm transition hover:text-brand-900"
            >
              See full service catalogue
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ─────────── Process (timeline with mono numbering) ─────────── */

function Process() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container className="relative">
        <Reveal>
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full glass-light px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-800 shadow-sm">
              process
            </span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
              Transparent by design.
            </h2>
            <p className="mt-4 max-w-xl text-ink-600">
              Working software every 1–2 weeks. No mystery, no surprise
              invoices, no throwing it over the wall at launch.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-16">
          {/* connecting line — desktop */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent lg:block"
          />
          <ol className="grid gap-6 lg:grid-cols-4">
            {process.map((step, i) => (
              <Reveal key={step.title} delay={i * 100} as="li">
                <div className="relative h-full rounded-2xl glass-light p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-900/[0.05]">
                  {/* icon badge sitting on the timeline */}
                  <div className="relative -mt-12 mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-ink-200 bg-brand-950 text-accent-400 shadow-sm">
                    <ServiceIcon name={step.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-ink-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

/* ─────────── Why Rephina (pillars + quote) ─────────── */

function Pillars() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <span className="inline-flex items-center gap-2 rounded-full glass-light px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-800 shadow-sm">
                why rephina
              </span>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
                Built for the gap big firms ignore.
              </h2>
              <p className="mt-4 text-ink-600">
                Large consultancies are too expensive. Overseas outsourcing
                misses the context. Freelancers can&apos;t carry complex
                work. We sit in the middle on purpose.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-800 hover:text-brand-900"
              >
                Read our story
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="group relative h-full overflow-hidden rounded-2xl glass-light p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-900/[0.06]">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-950 text-accent-400 shadow-sm shadow-brand-900/20">
                      <ServiceIcon name={p.icon} className="h-5 w-5" />
                    </span>
                    <span className="h-1 w-12 rounded-full bg-ink-100 transition group-hover:bg-accent-400" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-ink-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
