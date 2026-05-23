import Link from "next/link";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import CtaSection from "@/components/CtaSection";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import { services } from "@/lib/content";

export const metadata = {
  title: "Services — Custom Software, AI, Power Platform & Web",
  description:
    "Custom software development, AI integration, Microsoft Power Platform, e-commerce, consulting and ongoing support — built for South African SMEs.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="services"
        title="Full-stack capability — sized for your business."
        description="From a marketing site to a multi-tenant SaaS product. Built and supported in South Africa."
      />

      {/* Quick-jump index */}
      <section className="border-b border-ink-100 bg-white">
        <Container className="py-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
              jump
            </span>
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={`#${s.slug}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-white px-3 py-1 font-mono text-[11px] text-ink-700 transition hover:border-brand-300 hover:text-brand-800"
              >
                <span className="text-ink-400">{String(i + 1).padStart(2, "0")}</span>
                {s.title}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative py-20 sm:py-24">
        <div className="absolute inset-0 bg-grid opacity-50" aria-hidden="true" />
        <Container className="relative">
          <div className="grid gap-12">
            {services.map((s, idx) => (
              <Reveal key={s.slug}>
                <article
                  id={s.slug}
                  className="grid scroll-mt-28 gap-8 rounded-3xl border border-ink-100 bg-white/80 p-8 backdrop-blur md:grid-cols-[260px_1fr] md:gap-12 md:p-10"
                >
                  <div className="border-b border-ink-100 pb-6 md:border-b-0 md:border-r md:pb-0 md:pr-8">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-950 text-accent-400 shadow-sm shadow-brand-900/20">
                      <ServiceIcon name={s.icon} className="h-7 w-7" />
                    </span>
                    <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500">
                      service · {String(idx + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink-900">
                      {s.title}
                    </h2>
                  </div>

                  <div>
                    <p className="text-ink-700">{s.short}</p>

                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {s.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-3 rounded-xl border border-ink-100 bg-ink-50/60 p-3.5"
                        >
                          <CheckIcon />
                          <span className="text-sm text-ink-700">{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link
                        href={`/contact?service=${s.slug}`}
                        className="group inline-flex items-center gap-2 rounded-full bg-brand-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-800"
                      >
                        Get a quote
                        <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-4 py-2 text-sm font-medium text-ink-800 transition hover:border-ink-300 hover:bg-ink-50"
                      >
                        Book a free consult
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        title="Not sure which service fits?"
        description="A 30-minute free consultation usually clears it up. We'll listen, recommend the right scope, and tell you honestly if it's not us you need."
      />
    </>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="mt-0.5 h-4 w-4 shrink-0 text-accent-600"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m4 10 4 4 8-9" />
    </svg>
  );
}
