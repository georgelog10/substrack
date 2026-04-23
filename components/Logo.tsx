import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
}

export default function Logo({ size = "md" }: LogoProps) {
  const fontSize = size === "sm" ? 16 : size === "lg" ? 28 : 20;
  const trackSize = size === "sm" ? 10 : size === "lg" ? 16 : 13;
  const dotSize = size === "sm" ? 5 : size === "lg" ? 8 : 6;

  return (
    <Link href="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "baseline", gap: 1, userSelect: "none" }}>
      {/* "SUBS" in serif italic */}
      <span style={{
        fontFamily: "var(--font-serif)",
        fontStyle: "italic",
        fontWeight: 300,
        fontSize,
        color: "var(--text)",
        letterSpacing: "-0.03em",
        lineHeight: 1,
      }}>
        subs
      </span>

      {/* accent dot */}
      <span style={{
        display: "inline-block",
        width: dotSize,
        height: dotSize,
        borderRadius: "50%",
        background: "var(--gold)",
        marginBottom: size === "lg" ? 4 : 2,
        marginLeft: 1,
        marginRight: 1,
        flexShrink: 0,
        alignSelf: "center",
        position: "relative",
        top: size === "lg" ? -2 : -1,
      }} />

      {/* "track" in sans, uppercase, tracked */}
      <span style={{
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: trackSize,
        color: "var(--text-2)",
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        lineHeight: 1,
        paddingBottom: size === "lg" ? 2 : 1,
      }}>
        track
      </span>
    </Link>
  );
}
