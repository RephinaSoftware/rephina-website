"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Container from "./Container";
import Logo from "./Logo";
import { navLinks } from "@/lib/content";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-[border,background] duration-300 glass-nav ${
        scrolled ? "border-b border-ink-200/60" : "border-b border-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Logo />

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-brand-900"
                    : "text-ink-600 hover:text-ink-900"
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                {active && (
                  <span className="absolute inset-0 -z-0 rounded-full bg-ink-100" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="btn-glow inline-flex items-center gap-1.5 rounded-full bg-brand-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-brand-800"
          >
            Start a project
            <ArrowRight />
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink-700 hover:bg-ink-100 lg:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </Container>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden border-t border-ink-100 glass-nav transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Container className="flex flex-col gap-1 py-4">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-3 py-3 text-base font-medium transition ${
                  active
                    ? "bg-ink-100 text-brand-900"
                    : "text-ink-700 hover:bg-ink-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="btn-glow mt-3 inline-flex items-center justify-center gap-1.5 rounded-full bg-brand-900 px-4 py-3 text-sm font-medium text-white"
          >
            Start a project
            <ArrowRight />
          </Link>
        </Container>
      </div>
    </header>
  );
}

function ArrowRight() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-3.5 w-3.5"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10h12" />
      <path d="M11 5l5 5-5 5" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
