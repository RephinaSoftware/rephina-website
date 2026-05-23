import Link from "next/link";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import CtaSection from "@/components/CtaSection";
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
        eyebrow="Services"
        title="Full-stack capability — sized for your business."
        description="From a marketing site to a multi-tenant SaaS product, we deliver software that pays itself back. Built and supported in South Africa."
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-16">
            {services.map((s, idx) => (
              <article
                key={s.slug}
                id={s.slug}
                className="grid scroll-mt-24 gap-8 md:grid-cols-[240px_1fr] md:gap-12"
              >
                <div>
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-800 text-white shadow-sm shadow-brand-800/30">
                    <ServiceIcon name={s.icon} className="h-7 w-7" />
                  </span>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">
                    {String(idx + 1).padStart(2, "0")} · Service
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
                    {s.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-ink-600">{s.short}</p>

                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 rounded-xl border border-ink-100 bg-white p-4"
                      >
                        <CheckIcon />
                        <span className="text-sm text-ink-700">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href={`/contact?service=${s.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-brand-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-900"
                    >
                      Get a quote
                      <span aria-hidden="true">→</span>
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
      className="mt-0.5 h-5 w-5 shrink-0 text-accent-600"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m4 10 4 4 8-9" />
    </svg>
  );
}
