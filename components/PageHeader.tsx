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
    <section className="relative overflow-hidden border-b border-ink-100 bg-gradient-to-b from-brand-50/60 via-white to-white">
      <div className="absolute inset-0 bg-circuit opacity-70" aria-hidden="true" />
      <Container className="relative py-20 sm:py-24">
        <div className="max-w-3xl">
          {eyebrow && (
            <span className="inline-flex items-center rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-800">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg text-ink-600 sm:text-xl">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
