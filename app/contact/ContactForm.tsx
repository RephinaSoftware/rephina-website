"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import { services, company } from "@/lib/content";

type Status = "idle" | "submitting" | "sent" | "error";

export default function ContactForm() {
  const params = useSearchParams();
  const preselectedService = params.get("service") ?? "";
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    // Until a real backend / form service is connected, build a mailto fallback.
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(
      `Rephina enquiry — ${data.get("name") ?? "Website lead"}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${data.get("name")}`,
        `Email: ${data.get("email")}`,
        `Phone: ${data.get("phone") || "—"}`,
        `Company: ${data.get("company") || "—"}`,
        `Interest: ${data.get("interest") || "—"}`,
        `Budget: ${data.get("budget") || "—"}`,
        "",
        "Message:",
        `${data.get("message") || "(no message)"}`,
      ].join("\n")
    );

    try {
      window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Your name"
          name="name"
          autoComplete="name"
          required
        />
        <Field
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone (optional)" name="phone" autoComplete="tel" />
        <Field
          label="Company / project name"
          name="company"
          autoComplete="organization"
        />
      </div>

      <Select
        label="What are you interested in?"
        name="interest"
        defaultValue={preselectedService}
      >
        <option value="">Pick a starting point…</option>
        {services.map((s) => (
          <option key={s.slug} value={s.slug}>
            {s.title}
          </option>
        ))}
        <option value="other">Not sure yet — I want to talk</option>
      </Select>

      <Select label="Approximate budget (optional)" name="budget" defaultValue="">
        <option value="">Prefer not to say</option>
        <option value="under-25k">Under R25,000</option>
        <option value="25-75k">R25,000 – R75,000</option>
        <option value="75-150k">R75,000 – R150,000</option>
        <option value="150-300k">R150,000 – R300,000</option>
        <option value="300k+">R300,000+</option>
        <option value="unsure">Not sure — need guidance</option>
      </Select>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink-500"
        >
          Tell us about your business and what you'd like to build
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 shadow-sm transition placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
          placeholder="A few sentences about the problem, your customers, and any deadlines we should know about."
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        <p className="text-xs text-ink-500">
          By submitting you agree we may contact you about your enquiry. We
          don't share your details (POPIA-aware).
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2 rounded-full bg-brand-800 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-brand-900 disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send enquiry"}
          <span aria-hidden="true">→</span>
        </button>
      </div>

      {status === "sent" && (
        <p className="text-sm text-accent-700">
          Thanks — your mail client should have opened with the message
          pre-filled. If it didn't, email us directly at{" "}
          <a href={`mailto:${company.email}`} className="font-medium underline">
            {company.email}
          </a>
          .
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-700">
          Something went wrong. Please email{" "}
          <a href={`mailto:${company.email}`} className="font-medium underline">
            {company.email}
          </a>{" "}
          directly.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink-500"
      >
        {label}
        {required && <span className="text-accent-600"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 shadow-sm transition placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
      />
    </div>
  );
}

function Select({
  label,
  name,
  defaultValue,
  children,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink-500"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue={defaultValue}
        className="mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 shadow-sm transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
      >
        {children}
      </select>
    </div>
  );
}
