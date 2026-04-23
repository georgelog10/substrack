import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
}

export default function Logo({ size = "md" }: LogoProps) {
  const fontSize = size === "sm" ? 17 : size === "lg" ? 30 : 21;
  const tagSize  = size === "sm" ? 9  : size === "lg" ? 13 : 11;

  return (
    <Link href="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, userSelect: "none" }}>
      {/* Leaf/check icon mark */}
      <svg
        width={size === "lg" ? 30 : size === "sm" ? 20 : 24}
        height={size === "lg" ? 30 : size === "sm" ? 20 : 24}
        viewBox="0 0 24 24" fill="none"
      >
        <rect width="24" height="24" rx="7" fill="#1A7A5A"/>
        <path d="M7 12.5l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
        {/* Main wordmark */}
        <span style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontWeight: 400,
          fontSize,
          color: "var(--text)",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
        }}>
          Abonat
        </span>
        {/* Tagline pill */}
        <span style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: tagSize,
          color: "var(--emerald)",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          lineHeight: 1,
          marginTop: 2,
        }}>
          100% gratuit
        </span>
      </div>
    </Link>
  );
}
