import Link from "next/link";
import Container from "./Container";

export default function CtaSection({
  title = "Ready to put technology to work?",
  description = "Book a free 30-minute consultation. No sales pitch — we'll listen, then point you at the smartest next step, whether you hire us or not.",
  primaryLabel = "Book a free consultation",
  primaryHref = "/contact",
  secondaryLabel = "See our services",
  secondaryHref = "/services",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-brand-900 px-8 py-16 sm:px-14 sm:py-20">
          <div
            aria-hidden="true"
            className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky-400/25 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -left-24 -bottom-24 h-80 w-80 rounded-full bg-accent-500/20 blur-3xl"
          />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-5 text-base text-ink-300 sm:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={primaryHref}
                className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-5 py-3 text-sm font-semibold text-brand-900 transition hover:bg-accent-400"
              >
                {primaryLabel}
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href={secondaryHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
