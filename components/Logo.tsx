import Image from "next/image";
import Link from "next/link";

/**
 * Brand lockup.
 *
 * Default (`wordmark`) — a small isometric-cube mark + the company name set as
 * crisp text ("Rephina" / "Software Solutions"). The supplied logo.png is a
 * full square lockup (illustration + name + tagline), which turns to mush at
 * nav size — so the nav uses readable text instead.
 *
 * `showImage` — renders the actual logo.png at a generous, legible size for
 * places with room to breathe (the footer brand sign-off).
 */
export default function Logo({
  className = "",
  showImage = false,
}: {
  className?: string;
  showImage?: boolean;
}) {
  if (showImage) {
    return (
      <Link
        href="/"
        aria-label="Rephina Software Solutions — home"
        className={`inline-block ${className}`}
      >
        <Image
          src="/logo.png"
          alt="Rephina Software Solutions"
          width={1254}
          height={1254}
          className="h-auto w-44"
        />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      aria-label="Rephina Software Solutions — home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      {/* isometric-cube brand mark, echoing the logo */}
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-950 shadow-sm shadow-brand-900/25 transition-transform group-hover:-translate-y-px">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <path d="M12 2.5 20.5 7 12 11.5 3.5 7Z" fill="#a4c84a" />
          <path d="M3.5 7 12 11.5V21L3.5 16.5Z" fill="#5fa3cd" fillOpacity="0.95" />
          <path d="M20.5 7 12 11.5V21l8.5-4.5Z" fill="#ffffff" fillOpacity="0.85" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[17px] font-bold tracking-tight text-ink-900">
          Rephina
        </span>
        <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-500">
          Software&nbsp;Solutions
        </span>
      </span>
    </Link>
  );
}
