import Container from "./Container";

export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink-100 bg-ink-50/40">
      <div className="absolute inset-0 bg-grid" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-accent-500/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 left-1/4 h-72 w-72 rounded-full bg-sky-400/15 blur-3xl"
      />
      <Container className="relative py-20 sm:py-28">
        <div className="max-w-3xl">
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full glass-light px-3 py-1.5 text-xs font-mono uppercase tracking-[0.18em] text-brand-800">
              <span className="dot-live" />
              {eyebrow}
            </span>
          )}
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-lg text-ink-600 sm:text-xl">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
