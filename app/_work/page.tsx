import Link from "next/link";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import CtaSection from "@/components/CtaSection";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Our Work — Case studies & client stories",
  description:
    "Project case studies from Rephina Software Solutions. Real outcomes for South African SMEs and startups.",
};

const placeholderCases = [
  { sector: "hospitality", title: "Booking & deposit system for a boutique guesthouse", impact: "Cut admin time by 70% and stopped no-shows with deposits.", stack: ["next.js", "stripe", "postgres"] },
  { sector: "professional", title: "Client intake portal for a SA law firm", impact: "Onboarding time down from 2 days to 45 minutes.", stack: ["power apps", "sharepoint", "automate"] },
  { sector: "e-commerce", title: "WooCommerce relaunch for a wellness brand", impact: "Mobile conversion up 38% in the first 60 days.", stack: ["woocommerce", "payfast", "wordpress"] },
];

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="work"
        title="Case studies coming soon."
        description="Young company, long résumé. Our founding team has shipped enterprise systems, SaaS products and e-commerce platforms across SA. The cases below are illustrative — your project could be the first published here."
      />

      <section className="relative py-20">
        <div className="absolute inset-0 bg-grid opacity-50" aria-hidden="true" />
        <Container className="relative">
          <div className="grid gap-6 md:grid-cols-3">
            {placeholderCases.map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white/80 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/[0.06]">
                  {/* visual placeholder area */}
                  <div className="relative h-44 overflow-hidden bg-brand-950">
                    <div className="absolute inset-0 bg-grid-dark opacity-50" />
                    <div
                      aria-hidden="true"
                      className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent-500/25 blur-3xl"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-sky-400/25 blur-3xl"
                    />
                    <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/80">
                      <span className="" />
                      {c.sector}
                    </span>
                    <span className="absolute right-5 top-5 font-mono text-[10px] text-white/40">
                      case · {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="absolute bottom-5 left-5 right-5 font-mono text-[11px] text-white/40">
                      {c.stack.join(" · ")}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold text-ink-900">
                      {c.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-ink-600">{c.impact}</p>
                    <span className="mt-5 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
                      full case study coming soon
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={250}>
            <div className="mt-16 relative overflow-hidden rounded-3xl border border-dashed border-ink-200 bg-white/60 p-10 text-center backdrop-blur">
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-accent-500/10 blur-3xl"
              />
              <h2 className="relative text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
                Be our next case study.
              </h2>
              <p className="relative mx-auto mt-3 max-w-xl text-ink-600">
                Early partners get our most senior attention and feature
                placement on this page once we ship. If you&apos;re ready to
                build something real, let&apos;s talk.
              </p>
              <Link
                href="/contact"
                className="relative mt-6 inline-flex items-center gap-2 rounded-full bg-brand-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-brand-800"
              >
                Start a project
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaSection
        title="Want references and previous work?"
        description="We can share private examples and put you in touch with past clients on request. Just ask."
        primaryLabel="Ask for references"
      />
    </>
  );
}
