import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <div className="relative">
      <Container className="relative py-32 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-800">
          404 · not found
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink-900 sm:text-6xl">
          That page is in another sprint.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-ink-600">
          The link may be old or the page has moved. Try one of these instead:
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-glow inline-flex items-center gap-2 rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-brand-950 transition hover:bg-accent-400">
            Back to home
          </Link>
          <Link href="/services" className="inline-flex items-center gap-2 rounded-full glass-light px-5 py-2.5 text-sm font-medium text-ink-800 shadow-sm transition hover:text-brand-900">
            Browse services
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full glass-light px-5 py-2.5 text-sm font-medium text-ink-800 shadow-sm transition hover:text-brand-900">
            Contact us
          </Link>
        </div>
      </Container>
    </div>
  );
}
