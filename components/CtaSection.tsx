import Link from "next/link";
import Container from "./Container";

export default function CtaSection({
  title = "Ready to put technology to work?",
  description = "Book a free 30-minute consultation. No sales pitch — we'll listen, then point you at the smartest next step, whether you hire us or not.",
  primaryLabel = "Book a free consultation",
  primaryHref = "/contact",
  secondaryLabel = "Browse services",
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
    <section className="py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-brand-950 text-white">
          <div className="absolute inset-0 bg-grid-dark opacity-60" aria-hidden="true" />
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -left-24 -bottom-24 h-80 w-80 rounded-full bg-sky-400/20 blur-3xl"
          />
          <div className="relative grid gap-10 px-8 py-16 sm:px-14 sm:py-20 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1.5 text-xs font-mono uppercase tracking-[0.18em] text-white/80">
                <span className="" />
                next step
              </span>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                {title}
              </h2>
              <p className="mt-5 text-base text-ink-300 sm:text-lg">
                {description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={primaryHref}
                  className="btn-glow group inline-flex items-center gap-2 rounded-full bg-accent-500 px-5 py-3 text-sm font-semibold text-brand-950 transition hover:bg-accent-400"
                >
                  {primaryLabel}
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/5"
                >
                  {secondaryLabel}
                </Link>
              </div>
            </div>

            {/* "shell" sidebar — visually anchors the section */}
            <aside className="hidden md:block">
              <div className="rounded-2xl glass-dark p-5 font-mono text-[12px] leading-relaxed text-ink-100">
                <div className="text-white/40">// what happens next</div>
                <div className="mt-3 space-y-1.5">
                  <div><span className="text-accent-400">01</span> <span className="text-white/80">you send a brief</span></div>
                  <div><span className="text-accent-400">02</span> <span className="text-white/80">we reply &lt; 24h</span></div>
                  <div><span className="text-accent-400">03</span> <span className="text-white/80">30-min scoping call</span></div>
                  <div><span className="text-accent-400">04</span> <span className="text-white/80">written recommendation</span></div>
                </div>
                <div className="mt-4 text-white/35">// no pitch deck. ever.</div>
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}
