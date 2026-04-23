"use client";
import Navbar from "@/components/Navbar";
import MetricCard from "@/components/MetricCard";
import SubIcon from "@/components/SubIcon";
import StatusPill from "@/components/StatusPill";
import { subscriptions, CYCLE_LABELS } from "@/lib/data";
import { Plus, AlertTriangle, ChevronRight, TrendingDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const upcoming = subscriptions
  .filter(s => s.status !== "cancelled")
  .sort((a, b) => new Date(a.nextRenewal).getTime() - new Date(b.nextRenewal).getTime())
  .slice(0, 5);

const active = subscriptions.filter(s => s.status === "active" || s.status === "trial");
const totalMonthly = active.reduce((sum, s) => sum + (s.cycle === "monthly" ? s.amount : s.amount / 12), 0);

function formatDate(str: string) {
  return new Date(str).toLocaleDateString("ro-RO", { day: "numeric", month: "short" });
}

export default function DashboardPage() {
  const [addOpen, setAddOpen] = useState(false);
  const expiringAlerts = subscriptions.filter(s => s.status === "trial");

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar />
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 1.5rem 48px" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32 }}>
          <div className="stagger">
            <div style={{ fontSize: 13, color: "var(--text-3)", marginBottom: 4 }}>Bună ziua, Andrei 👋</div>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,3vw,36px)", fontWeight: 500, letterSpacing: "-0.02em" }}>Dashboard</h1>
          </div>
          <button onClick={() => setAddOpen(true)} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 18px", background: "var(--gold)", color: "#0A0A0B", borderRadius: "var(--radius-sm)", fontWeight: 600, fontSize: 14, border: "none", cursor: "pointer" }}>
            <Plus size={15} /> Adaugă subscripție
          </button>
        </div>

        {/* Alert */}
        {expiringAlerts.length > 0 && (
          <div style={{ marginBottom: 24, padding: "14px 18px", background: "var(--amber-bg)", border: "1px solid rgba(232,154,60,0.2)", borderRadius: "var(--radius)", display: "flex", alignItems: "center", gap: 12 }}>
            <AlertTriangle size={16} color="var(--amber)" />
            <span style={{ fontSize: 14, color: "var(--amber)", flex: 1 }}>
              <strong>{expiringAlerts[0].name}</strong> expiră în curând — {formatDate(expiringAlerts[0].nextRenewal)}
            </span>
            <Link href="/subscriptions" style={{ fontSize: 13, color: "var(--amber)", fontWeight: 500, textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
              Gestionează <ChevronRight size={14} />
            </Link>
          </div>
        )}

        {/* Metrics */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginBottom: 28 }} className="stagger">
          <MetricCard label="Total lunar" value={`€${totalMonthly.toFixed(2)}`} sub="↓ €12 față de luna trecută" subColor="var(--green)" accent />
          <MetricCard label="Total anual" value={`€${(totalMonthly * 12).toFixed(0)}`} sub="↑ €48 față de anul trecut" subColor="var(--red)" />
          <MetricCard label="Subscripții active" value={`${active.length}`} sub={`${expiringAlerts.length} expiră în 7 zile`} subColor="var(--amber)" />
          <MetricCard label="Economii estimate" value="€156" sub="↑ Față de media similară" subColor="var(--green)" />
        </div>

        {/* Main grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 20 }}>
          {/* Subscriptions list */}
          <div style={{ background: "var(--surface)", border: "1px solid var(--border-2)", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
            <div style={{ padding: "20px 24px", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontWeight: 500, fontSize: 15 }}>Subscripțiile tale</span>
              <Link href="/subscriptions" style={{ fontSize: 13, color: "var(--text-2)", textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                Vezi toate <ChevronRight size={14} />
              </Link>
            </div>
            <div>
              {subscriptions.slice(0, 7).map((sub, i) => (
                <div key={sub.id} style={{ display: "grid", gridTemplateColumns: "36px 1fr auto auto", gap: 14, alignItems: "center", padding: "14px 24px", borderBottom: i < 6 ? "1px solid var(--border)" : "none", transition: "background 0.15s", cursor: "pointer" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "var(--bg-3)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >
                  <SubIcon name={sub.name} color={sub.color} size={36} />
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 2 }}>{sub.name}</div>
                    <div style={{ fontSize: 12, color: "var(--text-3)" }}>Reînnoire {formatDate(sub.nextRenewal)}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 14, fontWeight: 500 }}>€{sub.amount.toFixed(2)}</div>
                    <div style={{ fontSize: 11, color: "var(--text-3)" }}>{CYCLE_LABELS[sub.cycle].toLowerCase()}</div>
                  </div>
                  <StatusPill status={sub.status} />
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Upcoming */}
            <div style={{ background: "var(--surface)", border: "1px solid var(--border-2)", borderRadius: "var(--radius-lg)", padding: 22 }}>
              <div style={{ fontWeight: 500, fontSize: 14, marginBottom: 16 }}>Upcoming reînnoire</div>
              {upcoming.map((sub, i) => {
                const d = new Date(sub.nextRenewal);
                return (
                  <div key={sub.id} style={{ display: "flex", alignItems: "center", gap: 12, paddingBottom: i < upcoming.length - 1 ? 12 : 0, marginBottom: i < upcoming.length - 1 ? 12 : 0, borderBottom: i < upcoming.length - 1 ? "1px solid var(--border)" : "none" }}>
                    <div style={{ width: 40, height: 40, borderRadius: "var(--radius-sm)", background: "var(--surface-2)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ fontSize: 16, fontWeight: 700, lineHeight: 1, color: "var(--text)" }}>{d.getDate()}</span>
                      <span style={{ fontSize: 10, color: "var(--text-3)", textTransform: "uppercase" }}>{d.toLocaleString("ro-RO", { month: "short" })}</span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 500 }}>{sub.name}</div>
                      <div style={{ fontSize: 11, color: "var(--text-3)" }}>{CYCLE_LABELS[sub.cycle]}</div>
                    </div>
                    <span style={{ fontSize: 14, fontWeight: 500, color: "var(--gold)" }}>€{sub.amount.toFixed(2)}</span>
                  </div>
                );
              })}
            </div>

            {/* Insight */}
            <div style={{ background: "linear-gradient(135deg, rgba(61,201,138,0.08), rgba(61,201,138,0.03))", border: "1px solid rgba(61,201,138,0.15)", borderRadius: "var(--radius-lg)", padding: 22 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <TrendingDown size={16} color="var(--green)" />
                <span style={{ fontSize: 13, fontWeight: 600, color: "var(--green)" }}>Recomandare</span>
              </div>
              <p style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.6 }}>
                Figma este în pauză de 2 luni. Consideră anularea pentru <strong style={{ color: "var(--text)" }}>€15/lun</strong> economisiți.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Add Modal */}
      {addOpen && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)" }} onClick={() => setAddOpen(false)}>
          <div style={{ background: "var(--surface)", border: "1px solid var(--border-2)", borderRadius: "var(--radius-lg)", padding: 32, width: 480, maxWidth: "90vw" }} onClick={e => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 22, fontWeight: 500 }}>Adaugă subscripție</h2>
              <button onClick={() => setAddOpen(false)} style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", color: "var(--text-3)", lineHeight: 1 }}>×</button>
            </div>
            {[
              { label: "Serviciu", placeholder: "ex: Netflix, Spotify..." },
              { label: "Cost (EUR)", placeholder: "0.00", type: "number" },
            ].map(f => (
              <div key={f.label} style={{ marginBottom: 16 }}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 500, color: "var(--text-2)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{f.label}</label>
                <input type={f.type || "text"} placeholder={f.placeholder} style={{ width: "100%", padding: "10px 14px", fontSize: 14, background: "var(--bg-3)", border: "1px solid var(--border-2)", borderRadius: "var(--radius-sm)", color: "var(--text)" }} />
              </div>
            ))}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              {[
                { label: "Ciclu", options: ["Lunar","Anual","Trimestrial"] },
                { label: "Categorie", options: ["Productivitate","Divertisment","Stocare","Altele"] },
              ].map(f => (
                <div key={f.label}>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 500, color: "var(--text-2)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{f.label}</label>
                  <select style={{ width: "100%", padding: "10px 14px", fontSize: 14, background: "var(--bg-3)", border: "1px solid var(--border-2)", borderRadius: "var(--radius-sm)", color: "var(--text)" }}>
                    {f.options.map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
              ))}
            </div>
            <div style={{ marginBottom: 28 }}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 500, color: "var(--text-2)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>Prima factură</label>
              <input type="date" style={{ width: "100%", padding: "10px 14px", fontSize: 14, background: "var(--bg-3)", border: "1px solid var(--border-2)", borderRadius: "var(--radius-sm)", color: "var(--text)" }} />
            </div>
            <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
              <button onClick={() => setAddOpen(false)} style={{ padding: "9px 20px", background: "transparent", border: "1px solid var(--border-2)", borderRadius: "var(--radius-sm)", color: "var(--text-2)", cursor: "pointer", fontSize: 14, fontFamily: "var(--font-sans)" }}>Anulează</button>
              <button onClick={() => setAddOpen(false)} style={{ padding: "9px 20px", background: "var(--gold)", border: "none", borderRadius: "var(--radius-sm)", color: "#0A0A0B", cursor: "pointer", fontSize: 14, fontWeight: 600, fontFamily: "var(--font-sans)" }}>Salvează</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
