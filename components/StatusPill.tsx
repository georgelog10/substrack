import { SubscriptionStatus } from "@/lib/data";

const CONFIG = {
  active:    { label: "Activ",          color: "#1A7A5A", bg: "rgba(26,122,90,0.08)",   border: "rgba(26,122,90,0.2)",   dot: true },
  trial:     { label: "Perioadă trial", color: "#A0620A", bg: "rgba(160,98,10,0.08)",   border: "rgba(160,98,10,0.2)",   dot: true },
  paused:    { label: "Pausat",         color: "#2563EB", bg: "rgba(37,99,235,0.07)",   border: "rgba(37,99,235,0.18)",  dot: false },
  cancelled: { label: "Anulat",         color: "#C0392B", bg: "rgba(192,57,43,0.07)",   border: "rgba(192,57,43,0.18)",  dot: false },
};

export default function StatusPill({ status }: { status: SubscriptionStatus }) {
  const c = CONFIG[status];
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "3px 10px", borderRadius: 100, fontSize: 12, fontWeight: 500, background: c.bg, color: c.color, border: `1px solid ${c.border}` }}>
      {c.dot && <span style={{ width: 5, height: 5, borderRadius: "50%", background: c.color, animation: "pulse-dot 2s infinite" }}></span>}
      {c.label}
    </span>
  );
}
