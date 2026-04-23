interface MetricCardProps {
  label: string;
  value: string;
  sub?: string;
  subColor?: string;
  accent?: boolean;
}

export default function MetricCard({ label, value, sub, subColor, accent }: MetricCardProps) {
  return (
    <div style={{
      background: accent ? "var(--emerald)" : "var(--surface)",
      border: `1px solid ${accent ? "transparent" : "var(--border-2)"}`,
      borderRadius: "var(--radius)",
      padding: "20px 22px",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      boxShadow: accent ? "0 4px 20px rgba(26,122,90,0.2)" : "var(--shadow-sm)",
    }}>
      <span style={{ fontSize: 11, fontWeight: 600, color: accent ? "rgba(255,255,255,0.7)" : "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.07em" }}>{label}</span>
      <span style={{ fontFamily: "var(--font-serif)", fontSize: 30, color: accent ? "#fff" : "var(--text)", letterSpacing: "-0.02em", lineHeight: 1.1 }}>{value}</span>
      {sub && <span style={{ fontSize: 12, color: accent ? "rgba(255,255,255,0.65)" : (subColor || "var(--text-3)") }}>{sub}</span>}
    </div>
  );
}
