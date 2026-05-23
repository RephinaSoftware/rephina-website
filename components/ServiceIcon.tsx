type IconName =
  | "code"
  | "spark"
  | "platform"
  | "globe"
  | "compass"
  | "shield"
  | "briefcase"
  | "shopping"
  | "utensils"
  | "heart"
  | "palette"
  | "book"
  | "rocket"
  | "store";

export default function ServiceIcon({
  name,
  className = "h-6 w-6",
}: {
  name: string;
  className?: string;
}) {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
  };

  switch (name as IconName) {
    case "code":
      return (
        <svg {...props}>
          <path d="m8 8-4 4 4 4" />
          <path d="m16 8 4 4-4 4" />
          <path d="m14 4-4 16" />
        </svg>
      );
    case "spark":
      return (
        <svg {...props}>
          <path d="M12 3v3M12 18v3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M3 12h3M18 12h3M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "platform":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
        </svg>
      );
    case "globe":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        </svg>
      );
    case "compass":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="m15 9-2 6-4 1 2-6 4-1z" />
        </svg>
      );
    case "shield":
      return (
        <svg {...props}>
          <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...props}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      );
    case "shopping":
      return (
        <svg {...props}>
          <path d="M5 7h14l-1.5 11a2 2 0 0 1-2 1.8h-7A2 2 0 0 1 6.5 18L5 7z" />
          <path d="M9 11V6a3 3 0 0 1 6 0v5" />
        </svg>
      );
    case "utensils":
      return (
        <svg {...props}>
          <path d="M7 3v8a2 2 0 0 0 2 2v8M11 3v6M7 3v6M15 13c0-4 2-6 4-6v14" />
        </svg>
      );
    case "heart":
      return (
        <svg {...props}>
          <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.7A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
        </svg>
      );
    case "palette":
      return (
        <svg {...props}>
          <path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 2-2 0-1.5-1-2-1-3s1-1.5 2-1.5h1a4 4 0 0 0 4-4 9 9 0 0 0-8-7.5z" />
          <circle cx="7.5" cy="11" r="1" />
          <circle cx="11" cy="7" r="1" />
          <circle cx="15" cy="8" r="1" />
        </svg>
      );
    case "book":
      return (
        <svg {...props}>
          <path d="M4 5a2 2 0 0 1 2-2h12v17H6a2 2 0 0 0-2 2V5z" />
          <path d="M8 7h7M8 11h7" />
        </svg>
      );
    case "rocket":
      return (
        <svg {...props}>
          <path d="M5 19c1-3 3-4 6-4l-2-2c0-3 1-7 8-9-2 7-6 8-9 8l-2-2c-1 3 0 5-1 6-1 1-2 2-2 2 1-1 2 1 2 1z" />
          <circle cx="14" cy="10" r="1" />
        </svg>
      );
    case "store":
      return (
        <svg {...props}>
          <path d="M3 9 5 4h14l2 5" />
          <path d="M4 9v11h16V9" />
          <path d="M9 20v-5h6v5" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}
