import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import CtaSection from "@/components/CtaSection";
import Reveal from "@/components/Reveal";
import { company, faqs } from "@/lib/content";

export const metadata = {
  title: "About — South African software for South African businesses",
  description:
    "Rephina Software Solutions is a South African development partner for SMEs, startups and freelancers. Our mission, vision and values.",
};

const values = [
  { title: "Accessibility first", body: "Every business deserves access to professional software — regardless of budget. We structure pricing, terms and engagement models to remove the barriers that exclude small businesses from quality technology." },
  { title: "Practical over fancy", body: "We avoid over-engineering. Solutions are scoped to solve real business problems with measurable ROI, not to showcase tech for its own sake." },
  { title: "Partnership & education", body: "We don't just deliver software — we train teams, demystify technology and build internal capacity so clients can make smart decisions long after we ship." },
  { title: "Local context", body: "South African business reality drives every decision — POPIA, load-shedding contingencies, local payment gateways and Rand pricing." },
  { title: "Quality without compromise", body: "Affordable doesn't mean cheap. Code review, automated tests, security best practice and production-grade infrastructure are non-negotiable." },
  { title: "Transparent communication", body: "Plain language. Honest assessments. Complete clarity on cost, timeline and status. Trust is earned weekly, not at the end of a contract." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="about"
        title="Built to fill the gap big firms ignore."
        description="98% of South African businesses are SMEs. Large IT firms chase corporates. Overseas outsourcing misses the context. Rephina exists for the middle — professional software at SME scale, made in South Africa."
      />

      {/* Mission / Vision split */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-ink-100 bg-white/80 p-8 backdrop-blur sm:p-10">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-800">
                  // mission
                </span>
                <p className="mt-4 text-lg leading-relaxed text-ink-800">
                  {company.mission}
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative h-full overflow-hidden rounded-2xl bg-brand-950 p-8 text-white sm:p-10">
                <div className="absolute inset-0 bg-grid-dark opacity-50" aria-hidden="true" />
                <div
                  aria-hidden="true"
                  className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent-500/25 blur-3xl"
                />
                <div className="relative">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-400">
                    // vision
                  </span>
                  <p className="mt-4 text-lg leading-relaxed text-ink-100">
                    {company.vision}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden bg-ink-50/50 py-24">
        <div className="absolute inset-0 bg-grid opacity-50" aria-hidden="true" />
        <Container className="relative">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full glass-light px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-800">
                values
              </span>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
                The principles behind every project.
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 60}>
                <div className="group h-full rounded-2xl border border-ink-100 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-900/[0.04]">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-700">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-1 w-12 rounded-full bg-ink-100 transition group-hover:bg-accent-400" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-ink-900">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Story + Company card */}
      <section className="py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full glass-light px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-800">
                  who we are
                </span>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
                  Enterprise experience, applied to SME problems.
                </h2>
                <div className="mt-6 space-y-4 text-ink-700">
                  <p>
                    Rephina was founded to close a clear gap. Large firms
                    (Dimension Data, BCX, EOH) focus on enterprise.
                    Template-driven freelancers flood the bottom of the
                    market. Very few teams deliver enterprise-grade quality
                    at SME-appropriate scale and cost.
                  </p>
                  <p>
                    Our team has worked across both worlds — large corporates
                    and bootstrapped startups. That experience shows up in
                    how we scope work, communicate, and choose technology
                    that ages well instead of becoming tomorrow&apos;s tech debt.
                  </p>
                  <p>
                    We&apos;re based in South Africa and serve clients
                    nationally — remote-first, with in-person sessions
                    arranged for larger engagements.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <aside className="relative overflow-hidden rounded-2xl border border-ink-100 bg-white/80 p-6 backdrop-blur lg:sticky lg:top-28">
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent-500/10 blur-3xl"
                />
                <h3 className="relative font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500">
                  // company.json
                </h3>
                <dl className="relative mt-5 grid gap-3 font-mono text-[13px]">
                  <Row k="entity"   v={company.legalName} />
                  <Row k="reg"      v={company.registration} />
                  <Row k="status"   v={<span className="inline-flex items-center gap-1.5"><span className="dot-live" />in business</span>} />
                  <Row k="area"     v="South Africa (remote-first)" />
                  <Row k="compliance" v="POPIA-aware" />
                  <Row k="email"    v={<a href={`mailto:${company.email}`} className="text-brand-800 hover:text-brand-900 break-all">{company.email}</a>} />
                  <Row k="phone"    v={<a href={`tel:${company.phoneE164}`} className="text-brand-800 hover:text-brand-900">{company.phone}</a>} />
                </dl>
              </aside>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="relative bg-ink-50/50 py-24">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full glass-light px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-800">
                faq
              </span>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
                Questions we hear most often.
              </h2>
            </div>
          </Reveal>

          <div className="mx-auto mt-10 max-w-3xl divide-y divide-ink-100 overflow-hidden rounded-2xl border border-ink-100 bg-white/80 backdrop-blur">
            {faqs.map((f, i) => (
              <details key={f.q} className="group p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-start justify-between gap-4 text-base font-semibold text-ink-900">
                  <span className="flex items-baseline gap-3">
                    <span className="font-mono text-[11px] text-ink-400">{String(i + 1).padStart(2, "0")}</span>
                    {f.q}
                  </span>
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink-100 text-ink-600 transition group-open:rotate-45 group-open:bg-brand-900 group-open:text-white">
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5" strokeLinecap="round">
                      <path d="M10 4v12M4 10h12" />
                    </svg>
                  </span>
                </summary>
                <p className="ml-7 mt-3 text-sm leading-relaxed text-ink-600">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        title="Want to work with us?"
        description="Whether you're a startup with a napkin sketch or an SME drowning in spreadsheets, the first conversation is free."
      />
    </>
  );
}

function Row({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-ink-100 pb-2 last:border-0 last:pb-0">
      <dt className="text-ink-500">{k}</dt>
      <dd className="text-right text-ink-900">{v}</dd>
    </div>
  );
}
