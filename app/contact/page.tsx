import { Suspense } from "react";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { company } from "@/lib/content";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact — Book a free 30-minute consultation",
  description:
    "Talk to a developer, not a salesperson. We respond within one business day. Based in South Africa.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="contact"
        title="Let's talk about your project."
        description="Free 30-minute consultation. No pitch — we'll listen, give you a preliminary recommendation, and tell you honestly whether we're the right fit."
      />

      <section className="relative py-20">
        <Container className="relative">
          <div className="grid gap-10 md:grid-cols-[1fr_1.5fr]">
            <Reveal>
              <aside className="space-y-5">
                <ContactCard
                  label="email"
                  value={
                    <a
                      href={`mailto:${company.email}`}
                      className="font-mono text-brand-800 hover:text-brand-900 break-all"
                    >
                      {company.email}
                    </a>
                  }
                  hint="replies within 1 business day"
                />
                <ContactCard
                  label="phone · whatsapp"
                  value={
                    <a
                      href={`tel:${company.phoneE164}`}
                      className="font-mono text-ink-900 hover:text-brand-800"
                    >
                      {company.phone}
                    </a>
                  }
                  hint="weekdays 08:00 – 17:00 SAST"
                />
                <ContactCard
                  label="based in"
                  value={<span className="text-ink-900">South Africa</span>}
                  hint="remote-first, nationwide delivery"
                />

                <div className="relative overflow-hidden rounded-2xl bg-brand-950 p-6 text-white">
                  <div className="absolute inset-0 bg-grid-dark opacity-50" aria-hidden="true" />
                  <div
                    aria-hidden="true"
                    className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent-500/25 blur-3xl"
                  />
                  <h3 className="relative font-mono text-[11px] uppercase tracking-[0.18em] text-accent-400">
                    // what happens next
                  </h3>
                  <ol className="relative mt-4 space-y-3 font-mono text-[13px] text-ink-100">
                    <li className="flex gap-3">
                      <span className="text-accent-400">01</span>
                      <span className="text-white/90">we confirm receipt the same day</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent-400">02</span>
                      <span className="text-white/90">you pick a 30-min slot</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent-400">03</span>
                      <span className="text-white/90">written summary + next steps</span>
                    </li>
                  </ol>
                </div>
              </aside>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-2xl glass-light p-7 shadow-sm sm:p-9">
                <Suspense fallback={<div className="text-sm text-ink-500">Loading form…</div>}>
                  <ContactForm />
                </Suspense>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: React.ReactNode;
  hint?: string;
}) {
  return (
    <div className="rounded-2xl glass-light p-5 shadow-sm transition hover:-translate-y-0.5">
      <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
        {label}
      </h3>
      <div className="mt-2 text-base">{value}</div>
      {hint && <p className="mt-1 font-mono text-[11px] text-ink-500">{hint}</p>}
    </div>
  );
}
