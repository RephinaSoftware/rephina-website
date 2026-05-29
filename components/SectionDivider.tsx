/**
 * Coloured separator between page sections — a thin gradient line that fades in
 * from both edges with a small glowing diamond node at the centre.
 *
 * Colour classes are written out as full literal strings (not interpolated) so
 * Tailwind can see and generate them.
 */
const VARIANTS = {
  blue: { line: "via-sky-500", node: "bg-sky-500" },
  lightblue: { line: "via-sky-300", node: "bg-sky-300" },
  yellow: { line: "via-[#f4b740]", node: "bg-[#f4b740]" },
  lime: { line: "via-accent-500", node: "bg-accent-500" },
} as const;

export default function SectionDivider({
  color = "blue",
}: {
  color?: keyof typeof VARIANTS;
}) {
  const v = VARIANTS[color];
  return (
    <div aria-hidden="true" className="relative">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="relative flex items-center justify-center">
          <span
            className={`h-px w-full bg-gradient-to-r from-transparent ${v.line} to-transparent`}
          />
          <span className="absolute inline-flex items-center justify-center">
            <span className={`absolute h-4 w-4 rounded-full ${v.node} opacity-30 blur-[6px]`} />
            <span className={`relative h-2 w-2 rotate-45 ${v.node}`} />
          </span>
        </div>
      </div>
    </div>
  );
}
