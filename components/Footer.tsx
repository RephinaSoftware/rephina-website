import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import { company, services } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-ink-200/60 mt-16">
      <Container className="relative py-14">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand + contact */}
          <div className="md:col-span-6">
            <Logo showImage />
            <p className="mt-6 max-w-xs text-sm text-ink-600">
              Accessible, high-quality software for South African SMEs,
              startups and freelancers.
            </p>
            <div className="mt-6 flex flex-col gap-1.5 text-sm">
              <a
                href={`mailto:${company.email}`}
                className="text-ink-700 transition hover:text-brand-800 break-all"
              >
                {company.email}
              </a>
              <a
                href={`tel:${company.phoneE164}`}
                className="font-mono text-ink-700 transition hover:text-brand-800"
              >
                {company.phone}
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-500">
              Services
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {services.map((s) => (
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

          {/* Company */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-500">
              Company
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about" className="text-ink-700 transition hover:text-brand-800">About</Link></li>
              <li><Link href="/contact" className="text-ink-700 transition hover:text-brand-800">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-ink-200/70 pt-6 font-mono text-[11px] text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {company.legalName}. All rights reserved.</p>
          <p>Reg No.: {company.registration}</p>
        </div>
      </Container>
    </footer>
  );
}
