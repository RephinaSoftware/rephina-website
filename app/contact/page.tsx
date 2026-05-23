import { Suspense } from "react";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
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
        eyebrow="Contact"
        title="Let's talk about your project."
        description="Free 30-minute consultation. No pitch — we'll listen, give you a preliminary recommendation, and tell you honestly whether we're the right fit."
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
            <aside className="space-y-8">
              <ContactBlock
                title="Email"
                content={
                  <a
                    href={`mailto:${company.email}`}
                    className="text-brand-800 hover:text-brand-900 break-all"
                  >
                    {company.email}
                  </a>
                }
                hint="Replies within 1 business day."
              />
              <ContactBlock
                title="Phone & WhatsApp"
                content={
                  <a
                    href={`tel:${company.phoneE164}`}
                    className="text-ink-900 hover:text-brand-800"
                  >
                    {company.phone}
                  </a>
                }
                hint="Weekdays 08:00–17:00 SAST."
              />
              <ContactBlock
                title="Based in"
                content={<span className="text-ink-900">South Africa</span>}
                hint="Remote delivery nationwide. In-person sessions arranged for larger engagements."
              />

              <div className="rounded-2xl border border-ink-100 bg-brand-50/60 p-6">
                <h3 className="text-sm font-semibold text-ink-900">
                  What happens after you send this?
                </h3>
                <ol className="mt-4 space-y-3 text-sm text-ink-700">
                  <li className="flex gap-3">
                    <span className="font-semibold text-brand-800">1.</span>
                    We confirm receipt the same business day.
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-brand-800">2.</span>
                    You pick a 30-min slot — Google Meet, Teams or WhatsApp.
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-brand-800">3.</span>
                    We follow up with a written summary and next-step options.
                  </li>
                </ol>
              </div>
            </aside>

            <div className="rounded-2xl border border-ink-100 bg-white p-7 sm:p-9">
              <Suspense fallback={<div className="text-sm text-ink-500">Loading form…</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactBlock({
  title,
  content,
  hint,
}: {
  title: string;
  content: React.ReactNode;
  hint?: string;
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">
        {title}
      </h3>
      <div className="mt-2 text-base">{content}</div>
      {hint && <p className="mt-1 text-xs text-ink-500">{hint}</p>}
    </div>
  );
}
