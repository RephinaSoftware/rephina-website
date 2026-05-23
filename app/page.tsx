import Link from "next/link";
import Container from "@/components/Container";
import CtaSection from "@/components/CtaSection";
import CodeBlock from "@/components/CodeBlock";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import { services, pillars, process, stats, stack } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StackMarquee />
      <Capabilities />
      <Process />
      <Pillars />
      <CtaSection />
    </>
  );
}

/* ─────────── Hero ─────────── */

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 bg-grid" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/4 -z-10 h-[420px] w-[800px] -translate-x-1/2 rounded-full bg-accent-500/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute top-20 right-0 -z-10 h-[420px] w-[700px] translate-x-1/4 rounded-full bg-sky-400/15 blur-3xl"
      />

      <Container className="relative pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full glass-light px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-800">
                <span className="dot-live" />
                accepting projects · 2026
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-[2.5rem] font-semibold leading-[1.05] tracking-tight text-ink-900 sm:text-6xl lg:text-[4rem]">
                Enterprise quality
                <br />
                at <span className="gradient-text">SME scale.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg text-ink-600 sm:text-xl">
                A South African software partner for SMEs, startups and
                freelancers. Custom software, AI integration, Microsoft
                Power Platform and modern web — built for SA business reality.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-900 px-6 py-3 text-sm font-medium text-white shadow-sm shadow-brand-900/20 transition hover:bg-brand-800"
                >
                  Start a project
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/80 px-6 py-3 text-sm font-medium text-ink-800 backdrop-blur transition hover:border-ink-300 hover:bg-white"
                >
                  Browse services
                </Link>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-200/70 bg-ink-200/70 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label} className="bg-white/80 p-4 backdrop-blur">
                    <dt className="font-mono text-2xl font-semibold tracking-tight text-brand-900">
                      {s.value}
                    </dt>
                    <dd className="mt-1 text-xs text-ink-600">{s.label}</dd>
                  </div>
                ))}
              </dl>
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
    <section className="relative overflow-hidden border-y border-ink-100 bg-white py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
      <div className="relative">
        <div className="marquee gap-10 px-10">
          {items.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="shrink-0 whitespace-nowrap font-mono text-sm text-ink-400"
            >
              {tech}
              <span className="ml-10 text-ink-300">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── Capabilities (dark glass cards) ─────────── */

function Capabilities() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-950 py-24 text-white sm:py-32">
      <div className="absolute inset-0 bg-grid-dark opacity-50" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute -top-40 right-1/3 h-[500px] w-[500px] rounded-full bg-accent-500/15 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-sky-400/15 blur-[140px]"
      />

      <Container className="relative">
        <Reveal>
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-white/70">
              <span className="dot-live" />
              capabilities
            </span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
              Six ways we turn technology into ROI.
            </h2>
            <p className="mt-4 max-w-xl text-ink-300">
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
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl glass-dark p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent-500/10"
              >
                {/* hover glow line at top */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-accent-400 ring-1 ring-white/10 transition group-hover:bg-accent-500 group-hover:text-brand-950 group-hover:ring-accent-300">
                    <ServiceIcon name={s.icon} />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">
                  {s.short}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.14em] text-accent-400">
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
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/5"
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
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid opacity-70" aria-hidden="true" />
      <Container className="relative">
        <Reveal>
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full glass-light px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-800">
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
              <Reveal key={step.step} delay={i * 100} as="li">
                <div className="relative h-full rounded-2xl border border-ink-100 bg-white/80 p-6 backdrop-blur transition hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/[0.04]">
                  {/* number badge sitting on the timeline */}
                  <div className="relative -mt-12 mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-ink-200 bg-white font-mono text-sm font-semibold text-brand-900 shadow-sm">
                    {step.step}
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
    <section className="relative overflow-hidden bg-ink-50/50 py-24 sm:py-32">
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <span className="inline-flex items-center gap-2 rounded-full glass-light px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-800">
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
                <div className="group relative h-full overflow-hidden rounded-2xl border border-ink-100 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-900/[0.04]">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-700">
                      {String(i + 1).padStart(2, "0")} / 04
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
