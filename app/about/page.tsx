import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import CtaSection from "@/components/CtaSection";
import { company, faqs } from "@/lib/content";

export const metadata = {
  title: "About — South African software for South African businesses",
  description:
    "Rephina Software Solutions is a South African development partner for SMEs, startups and freelancers. Our mission, vision and values.",
};

const values = [
  {
    title: "Accessibility first",
    body: "Every business deserves access to professional software — regardless of budget. We structure pricing, terms and engagement models to remove the barriers that exclude small businesses from quality technology.",
  },
  {
    title: "Practical over fancy",
    body: "We avoid over-engineering. Solutions are scoped to solve real business problems with measurable ROI, not to showcase tech for its own sake.",
  },
  {
    title: "Partnership & education",
    body: "We don't just deliver software — we train teams, demystify technology and build internal capacity so clients can make smart decisions long after we ship.",
  },
  {
    title: "Local understanding",
    body: "South African business reality drives every decision — POPIA, load-shedding contingencies, local payment gateways, Rand pricing and the cultural fluency that comes from being in this market every day.",
  },
  {
    title: "Quality without compromise",
    body: "Affordable doesn't mean cheap. Code review, automated tests, security best practice and production-grade infrastructure are non-negotiable.",
  },
  {
    title: "Transparent communication",
    body: "Plain language. Honest assessments. Complete clarity on cost, timeline and status. Trust is earned weekly, not at the end of a contract.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Rephina"
        title="Built to fill the gap big consulting firms ignore."
        description="98% of South African businesses are SMEs. Large IT firms chase corporates. Overseas outsourcing misses the context. Rephina exists for the middle — professional software at SME scale, made in South Africa."
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="rounded-2xl border border-ink-100 bg-white p-8 sm:p-10">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-800">
                Mission
              </span>
              <p className="mt-4 text-lg text-ink-800 leading-relaxed">
                {company.mission}
              </p>
            </div>
            <div className="rounded-2xl border border-ink-100 bg-brand-900 p-8 text-white sm:p-10">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-400">
                Vision
              </span>
              <p className="mt-4 text-lg leading-relaxed text-ink-100">
                {company.vision}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ink-50/60 py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-800">
              Our values
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
              The principles behind every project.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="rounded-2xl border border-ink-100 bg-white p-6"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-xs font-semibold text-brand-800">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
            <div>
              <span className="inline-flex items-center rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent-800">
                Who we are
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
                A South African team that's worked in enterprise — and chose
                to build for SMEs instead.
              </h2>
              <div className="mt-6 space-y-4 text-ink-700">
                <p>
                  Rephina was founded to address a clear gap. While Dimension
                  Data, BCX and EOH focus on enterprise, and template-driven
                  freelancers flood the bottom of the market, very few teams
                  are delivering enterprise-grade software at SME-appropriate
                  scale and cost. We're closing that gap on purpose.
                </p>
                <p>
                  Our team has worked across both worlds — large corporates
                  and bootstrapped startups. That experience shows up in how
                  we scope work, how we communicate, and how we make
                  technology choices that age well instead of creating
                  technical debt your future self will pay for.
                </p>
                <p>
                  We're based in South Africa and serve clients nationally —
                  remote-first, with in-person sessions arranged for larger
                  engagements.
                </p>
              </div>
            </div>

            <aside className="self-start rounded-2xl border border-ink-100 bg-white p-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">
                Company details
              </h3>
              <dl className="mt-4 grid gap-3 text-sm">
                <div>
                  <dt className="text-ink-500">Legal entity</dt>
                  <dd className="font-medium text-ink-900">
                    {company.legalName}
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-500">Registration</dt>
                  <dd className="font-medium text-ink-900">
                    {company.registration}
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-500">Service area</dt>
                  <dd className="font-medium text-ink-900">
                    South Africa (remote-first)
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-500">Compliance</dt>
                  <dd className="font-medium text-ink-900">POPIA-aware</dd>
                </div>
                <div>
                  <dt className="text-ink-500">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${company.email}`}
                      className="font-medium text-brand-800 hover:text-brand-900 break-all"
                    >
                      {company.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-500">Phone</dt>
                  <dd>
                    <a
                      href={`tel:${company.phoneE164}`}
                      className="font-medium text-brand-800 hover:text-brand-900"
                    >
                      {company.phone}
                    </a>
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </Container>
      </section>

      <section className="bg-ink-50/60 py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-800">
              FAQ
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
              Questions we hear most often.
            </h2>

            <div className="mt-10 divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white">
              {faqs.map((f) => (
                <details key={f.q} className="group p-6">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-ink-900">
                    {f.q}
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink-100 text-ink-600 transition group-open:rotate-45 group-open:bg-brand-800 group-open:text-white">
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="h-3.5 w-3.5"
                        strokeLinecap="round"
                      >
                        <path d="M10 4v12M4 10h12" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaSection
        title="Want to work with us?"
        description="Whether you're a startup with a napkin sketch or an established SME drowning in spreadsheets, the first conversation is free."
      />
    </>
  );
}
