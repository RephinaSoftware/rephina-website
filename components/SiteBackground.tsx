/**
 * Fixed decorative canvas behind the whole site: the isometric tech
 * illustration in /public/background_1.png on a light base.
 *
 * The image is never modified. Instead two overlay layers shape where it reads
 * strongest, so the artwork frames the edges while the content zones stay clean
 * and text stays perfectly legible:
 *   1. a large radial, biased slightly left/up, that lifts the central content
 *      column (where headings, body copy and left-aligned page headers sit)
 *   2. a bottom fade that keeps the footer and lower sections crisp
 * Beyond ~70% radius the overlays fall to zero, so the framed edges (the blue
 * corner, the right-hand blocks) keep their detail.
 *
 * aria-hidden + pointer-events-none so it never interferes with content.
 */
export default function SiteBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 bg-ink-50"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.65]"
        style={{ backgroundImage: "url('/background_1.png')" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgb(248 250 252 / 0) 56%, rgb(248 250 252 / 0.55) 100%), " +
            "radial-gradient(125% 115% at 40% 30%, rgb(248 250 252 / 0.9) 0%, rgb(248 250 252 / 0.62) 38%, rgb(248 250 252 / 0) 72%)",
        }}
      />
    </div>
  );
}
