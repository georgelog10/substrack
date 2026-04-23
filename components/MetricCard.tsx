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
      background: accent ? "linear-gradient(135deg, rgba(201,168,76,0.12), rgba(201,168,76,0.04))" : "var(--surface)",
      border: `1px solid ${accent ? "var(--gold-border)" : "var(--border-2)"}`,
      borderRadius: "var(--radius)",
      padding: "20px 22px",
      display: "flex",
      flexDirection: "column",
      gap: 6,
    }}>
      <span style={{ fontSize: 12, fontWeight: 500, color: "var(--text-2)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</span>
      <span style={{ fontFamily: "var(--font-serif)", fontSize: 30, color: accent ? "var(--gold-2)" : "var(--text)", letterSpacing: "-0.02em", lineHeight: 1.1 }}>{value}</span>
      {sub && <span style={{ fontSize: 12, color: subColor || "var(--text-3)" }}>{sub}</span>}
    </div>
  );
}
