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
    <section className="relative border-b border-ink-200/50">
      <Container className="relative py-20 sm:py-28">
        <div className="max-w-3xl">
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full glass-light px-3 py-1.5 text-xs font-mono uppercase tracking-[0.18em] text-brand-800 shadow-sm">
              <span className="" />
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
