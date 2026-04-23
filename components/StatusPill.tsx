import { SubscriptionStatus } from "@/lib/data";

const CONFIG = {
  active: { label: "Activ", color: "var(--green)", bg: "var(--green-bg)", border: "rgba(61,201,138,0.2)", dot: true },
  trial: { label: "Perioadă trial", color: "var(--amber)", bg: "var(--amber-bg)", border: "rgba(232,154,60,0.2)", dot: true },
  paused: { label: "Pausat", color: "var(--blue)", bg: "var(--blue-bg)", border: "rgba(91,141,239,0.2)", dot: false },
  cancelled: { label: "Anulat", color: "var(--red)", bg: "var(--red-bg)", border: "rgba(224,82,82,0.2)", dot: false },
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
