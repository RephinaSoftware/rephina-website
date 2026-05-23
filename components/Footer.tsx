import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import { company, services } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-ink-100 bg-ink-50/40 mt-16">
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
      <Container className="relative py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-sm text-ink-600">
              Accessible, high-quality software for South African SMEs,
              startups and freelancers.
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-brand-800">
              {company.tagline}
            </p>
            <p className="mt-6 font-mono text-[11px] text-ink-500">
              {company.legalName} · reg {company.registration}
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-500">
              Services
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-ink-700 transition hover:text-brand-800"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-500">
              Company
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about" className="text-ink-700 hover:text-brand-800">About</Link></li>
              <li><Link href="/work" className="text-ink-700 hover:text-brand-800">Work</Link></li>
              <li><Link href="/contact" className="text-ink-700 hover:text-brand-800">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-500">
              Reach us
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="text-ink-700 hover:text-brand-800 break-all"
                >
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${company.phoneE164}`}
                  className="font-mono text-ink-700 hover:text-brand-800"
                >
                  {company.phone}
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 font-medium text-brand-800 hover:text-brand-900"
                >
                  Free consult <span aria-hidden="true">→</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ink-200/70 pt-6 font-mono text-[11px] text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {company.legalName}. all rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="dot-live" />
            built in south africa · popia-aware
          </p>
        </div>
      </Container>
    </footer>
  );
}
