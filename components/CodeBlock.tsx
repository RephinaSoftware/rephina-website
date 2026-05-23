/**
 * Terminal-styled glass card for the hero — pure CSS, no JS animation libs.
 * The blinking caret is the only "live" element and it respects reduced motion.
 */
export default function CodeBlock() {
  const lines: Array<{
    kind: "prompt" | "ok" | "wip" | "queue" | "comment" | "blank";
    text?: string;
    meta?: string;
  }> = [
    { kind: "prompt", text: "rephina init  ./your-project" },
    { kind: "blank" },
    { kind: "ok",    text: "discovery",     meta: "1–2 weeks  ·  scoped" },
    { kind: "ok",    text: "design system", meta: "figma → tokens" },
    { kind: "wip",   text: "sprint 01",     meta: "weekly demos" },
    { kind: "queue", text: "launch",        meta: "training + go-live" },
    { kind: "queue", text: "partnership",   meta: "monthly support" },
    { kind: "blank" },
    { kind: "comment", text: "// ready when you are" },
  ];

  return (
    <div className="relative w-full max-w-md">
      {/* outer glass frame */}
      <div className="relative overflow-hidden rounded-2xl glass-dark shadow-2xl shadow-brand-950/40">
        {/* window chrome */}
        <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
            rephina ─ shell
          </span>
          <span className="font-mono text-[10px] text-white/30">v1.0</span>
        </div>

        {/* body */}
        <pre className="font-mono text-[13px] leading-relaxed text-ink-100 px-5 py-5 overflow-x-auto scroll-quiet">
          {lines.map((l, i) => {
            if (l.kind === "blank") return <div key={i}>&nbsp;</div>;
            if (l.kind === "prompt") {
              return (
                <div key={i} className="flex items-center gap-2 text-white">
                  <span className="text-accent-400">$</span>
                  <span>{l.text}</span>
                </div>
              );
            }
            if (l.kind === "comment") {
              return (
                <div key={i} className="text-white/35">
                  {l.text}
                  <span className="caret bg-accent-400" />
                </div>
              );
            }
            const marker =
              l.kind === "ok"
                ? { sym: "✓", color: "text-accent-400" }
                : l.kind === "wip"
                  ? { sym: "▸", color: "text-sky-300" }
                  : { sym: "○", color: "text-white/30" };
            return (
              <div key={i} className="flex items-baseline gap-2">
                <span className={`${marker.color} w-3`}>{marker.sym}</span>
                <span className="w-32 truncate text-white/90">{l.text}</span>
                <span className="text-white/40">{l.meta}</span>
              </div>
            );
          })}
        </pre>
      </div>

      {/* corner glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent-500/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-12 -bottom-12 h-40 w-40 rounded-full bg-sky-400/25 blur-3xl"
      />
    </div>
  );
}
