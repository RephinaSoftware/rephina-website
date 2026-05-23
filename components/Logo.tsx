import Image from "next/image";
import Link from "next/link";

export default function Logo({
  className = "",
  size = "default",
}: {
  className?: string;
  size?: "default" | "large";
}) {
  const dims =
    size === "large"
      ? { h: "h-20 sm:h-24", w: 200, hpx: 200 }
      : { h: "h-12", w: 120, hpx: 120 };

  return (
    <Link
      href="/"
      aria-label="Rephina Software Solutions home"
      className={`group inline-flex items-center ${className}`}
    >
      <Image
        src="/logo.png"
        alt="Rephina Software Solutions"
        width={dims.w}
        height={dims.hpx}
        priority={size === "default"}
        className={`${dims.h} w-auto transition-transform group-hover:-translate-y-px`}
      />
    </Link>
  );
}
