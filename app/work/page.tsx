import Link from "next/link";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import CtaSection from "@/components/CtaSection";

export const metadata = {
  title: "Our Work — Case studies & client stories",
  description:
    "Project case studies from Rephina Software Solutions. Real outcomes for South African SMEs and startups.",
};

const placeholderCases = [
  {
    sector: "Hospitality",
    title: "Booking & deposit system for a boutique guesthouse",
    impact: "Cut admin time by 70% and stopped no-shows with deposits.",
  },
  {
    sector: "Professional services",
    title: "Client intake portal for a SA law firm",
    impact: "Onboarding time down from 2 days to 45 minutes.",
  },
  {
    sector: "E-commerce",
    title: "WooCommerce relaunch for a wellness brand",
    impact: "Mobile conversion up 38% in the first 60 days.",
  },
];

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="Case studies coming soon."
        description="We're a young company with a long résumé. Our founding team has shipped enterprise systems, SaaS products and e-commerce platforms across SA. The case studies below are illustrative of what we deliver — your project could be the first published one on this page."
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {placeholderCases.map((c, i) => (
              <article
                key={c.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white"
              >
                <div className="relative h-44 overflow-hidden bg-gradient-to-br from-brand-100 via-white to-accent-50">
                  <div className="absolute inset-0 bg-circuit opacity-70" />
                  <span className="absolute left-5 top-5 inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink-700 backdrop-blur">
                    {c.sector}
                  </span>
                  <span className="absolute right-5 top-5 text-xs font-mono text-ink-500">
                    Case {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-ink-900">
                    {c.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-ink-600">{c.impact}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">
                    Full case study coming soon
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-dashed border-ink-200 bg-ink-50/60 p-10 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
              Be our next case study.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-ink-600">
              Early partners get our most senior attention and feature
              placement on this page once we ship. If you're ready to build
              something real, let's talk.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-800 px-5 py-3 text-sm font-medium text-white transition hover:bg-brand-900"
            >
              Start a project
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Container>
      </section>

      <CtaSection
        title="Want references and previous work?"
        description="We can share private examples and put you in touch with past clients on request. Reach out and ask."
        primaryLabel="Ask for references"
      />
    </>
  );
}
