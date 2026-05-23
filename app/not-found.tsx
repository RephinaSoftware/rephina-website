import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-800">
        404
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
        We couldn't find that page.
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-ink-600">
        The link may be old or the page has moved. Try one of these instead:
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-brand-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-900"
        >
          Back to home
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-5 py-2.5 text-sm font-medium text-ink-800 hover:border-ink-300 hover:bg-ink-50"
        >
          Browse services
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-5 py-2.5 text-sm font-medium text-ink-800 hover:border-ink-300 hover:bg-ink-50"
        >
          Contact us
        </Link>
      </div>
    </Container>
  );
}
