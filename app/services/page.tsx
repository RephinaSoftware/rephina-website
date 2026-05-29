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

      <section className="relative py-20 sm:py-24">
        <Container className="relative">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 80}>
                <article
                  id={s.slug}
                  className="group relative flex h-full scroll-mt-28 flex-col overflow-hidden rounded-2xl glass-light shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/[0.06]"
                >
                  {/* dark header — service icon + category badge */}
                  <div className="relative flex h-36 items-center justify-center overflow-hidden bg-brand-950">
                    <div className="absolute inset-0 bg-grid-dark opacity-50" aria-hidden="true" />
                    <div
                      aria-hidden="true"
                      className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-accent-500/25 blur-3xl"
                    />
                    <span className="absolute left-5 top-5 inline-flex items-center rounded-full glass-dark px-3 py-1 text-[11px] font-medium text-white/80">
                      {s.tag}
                    </span>
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-accent-400 ring-1 ring-white/10 transition group-hover:bg-accent-500 group-hover:text-brand-950 group-hover:ring-accent-300">
                      <ServiceIcon name={s.icon} className="h-7 w-7" />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="text-lg font-semibold text-ink-900">{s.title}</h2>
                    <p className="mt-2 text-sm text-ink-600">{s.short}</p>

                    <ul className="mt-4 space-y-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm text-ink-700">
                          <CheckIcon />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/contact?service=${s.slug}`}
                      className="group/btn mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand-800 transition hover:text-brand-900"
                    >
                      Get a quote
                      <span aria-hidden="true" className="transition-transform group-hover/btn:translate-x-0.5">→</span>
                    </Link>
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
