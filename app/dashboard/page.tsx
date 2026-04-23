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

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 28 }}>
          <div className="stagger">
            <div style={{ fontSize: 13, color: "var(--text-3)", marginBottom: 4 }}>Bună ziua, Andrei 👋</div>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px,3vw,34px)", fontWeight: 500 }}>Dashboard</h1>
          </div>
          <button onClick={() => setAddOpen(true)} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 18px", background: "var(--emerald)", color: "#fff", borderRadius: "var(--radius-sm)", fontWeight: 600, fontSize: 14, border: "none", cursor: "pointer", boxShadow: "0 2px 8px rgba(26,122,90,0.25)" }}>
            <Plus size={15} /> Adaugă abonament
          </button>
        </div>

        {expiringAlerts.length > 0 && (
          <div style={{ marginBottom: 22, padding: "13px 18px", background: "rgba(160,98,10,0.06)", border: "1px solid rgba(160,98,10,0.2)", borderRadius: "var(--radius)", display: "flex", alignItems: "center", gap: 12 }}>
            <AlertTriangle size={15} color="var(--amber)" />
            <span style={{ fontSize: 14, color: "var(--amber)", flex: 1 }}>
              <strong>{expiringAlerts[0].name}</strong> expiră în curând — {formatDate(expiringAlerts[0].nextRenewal)}
            </span>
            <Link href="/subscriptions" style={{ fontSize: 13, color: "var(--amber)", fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
              Gestionează <ChevronRight size={14} />
            </Link>
          </div>
        )}

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, marginBottom: 24 }} className="stagger">
          <MetricCard label="Total lunar" value={`€${totalMonthly.toFixed(2)}`} sub="↓ €12 față de luna trecută" subColor="var(--green)" accent />
          <MetricCard label="Total anual" value={`€${(totalMonthly * 12).toFixed(0)}`} sub="↑ €48 față de anul trecut" subColor="var(--red)" />
          <MetricCard label="Abonamente active" value={`${active.length}`} sub={`${expiringAlerts.length} expiră în 7 zile`} subColor="var(--amber)" />
          <MetricCard label="Economii estimate" value="€156" sub="↑ Față de media similară" subColor="var(--green)" />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 18 }}>
          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
            <div style={{ padding: "18px 22px", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontWeight: 600, fontSize: 14 }}>Abonamentele tale</span>
              <Link href="/subscriptions" style={{ fontSize: 13, color: "var(--emerald)", textDecoration: "none", display: "flex", alignItems: "center", gap: 4, fontWeight: 500 }}>
                Vezi toate <ChevronRight size={13} />
              </Link>
            </div>
            {subscriptions.slice(0, 7).map((sub, i) => (
              <div key={sub.id} style={{ display: "grid", gridTemplateColumns: "36px 1fr auto auto", gap: 13, alignItems: "center", padding: "13px 22px", borderBottom: i < 6 ? "1px solid var(--border)" : "none", cursor: "pointer", transition: "background 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--bg)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                <SubIcon name={sub.name} color={sub.color} size={36} />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 500 }}>{sub.name}</div>
                  <div style={{ fontSize: 12, color: "var(--text-3)" }}>Reînnoire {formatDate(sub.nextRenewal)}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>€{sub.amount.toFixed(2)}</div>
                  <div style={{ fontSize: 11, color: "var(--text-3)" }}>{CYCLE_LABELS[sub.cycle].toLowerCase()}</div>
                </div>
                <StatusPill status={sub.status} />
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: 20, boxShadow: "var(--shadow-sm)" }}>
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 16 }}>Upcoming reînnoire</div>
              {upcoming.map((sub, i) => {
                const d = new Date(sub.nextRenewal);
                return (
                  <div key={sub.id} style={{ display: "flex", alignItems: "center", gap: 11, paddingBottom: i < upcoming.length - 1 ? 12 : 0, marginBottom: i < upcoming.length - 1 ? 12 : 0, borderBottom: i < upcoming.length - 1 ? "1px solid var(--border)" : "none" }}>
                    <div style={{ width: 40, height: 40, borderRadius: "var(--radius-sm)", background: "var(--bg)", border: "1px solid var(--border)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ fontSize: 15, fontWeight: 700, lineHeight: 1 }}>{d.getDate()}</span>
                      <span style={{ fontSize: 10, color: "var(--text-3)", textTransform: "uppercase" }}>{d.toLocaleString("ro-RO", { month: "short" })}</span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 500 }}>{sub.name}</div>
                      <div style={{ fontSize: 11, color: "var(--text-3)" }}>{CYCLE_LABELS[sub.cycle]}</div>
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "var(--emerald)" }}>€{sub.amount.toFixed(2)}</span>
                  </div>
                );
              })}
            </div>

            <div style={{ background: "var(--emerald-bg)", border: "1px solid var(--emerald-border)", borderRadius: "var(--radius-lg)", padding: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 10 }}>
                <TrendingDown size={15} color="var(--emerald)" />
                <span style={{ fontSize: 13, fontWeight: 700, color: "var(--emerald)" }}>Recomandare</span>
              </div>
              <p style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.6 }}>
                Figma este în pauză de 2 luni. Consideră anularea pentru <strong style={{ color: "var(--text)" }}>€15/lun</strong> economisiți.
              </p>
            </div>
          </div>
        </div>
      </div>

      {addOpen && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.3)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)" }} onClick={() => setAddOpen(false)}>
          <div style={{ background: "var(--surface)", border: "1px solid var(--border-2)", borderRadius: "var(--radius-lg)", padding: 32, width: 480, maxWidth: "90vw", boxShadow: "var(--shadow-lg)" }} onClick={e => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 26 }}>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 22, fontWeight: 500 }}>Adaugă abonament</h2>
              <button onClick={() => setAddOpen(false)} style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", color: "var(--text-3)", lineHeight: 1 }}>×</button>
            </div>
            {[{ label: "Serviciu", ph: "ex: Netflix, Spotify..." }, { label: "Cost (EUR)", ph: "0.00", type: "number" }].map(f => (
              <div key={f.label} style={{ marginBottom: 14 }}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--text-2)", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.05em" }}>{f.label}</label>
                <input type={f.type || "text"} placeholder={f.ph} style={{ width: "100%", padding: "10px 13px", fontSize: 14 }} />
              </div>
            ))}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
              {[{ label: "Ciclu", opts: ["Lunar","Anual","Trimestrial"] }, { label: "Categorie", opts: ["Productivitate","Divertisment","Stocare","Altele"] }].map(f => (
                <div key={f.label}>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--text-2)", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.05em" }}>{f.label}</label>
                  <select style={{ width: "100%", padding: "10px 13px", fontSize: 14 }}>{f.opts.map(o => <option key={o}>{o}</option>)}</select>
                </div>
              ))}
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--text-2)", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.05em" }}>Prima factură</label>
              <input type="date" style={{ width: "100%", padding: "10px 13px", fontSize: 14 }} />
            </div>
            <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
              <button onClick={() => setAddOpen(false)} style={{ padding: "9px 20px", background: "transparent", border: "1px solid var(--border-2)", borderRadius: "var(--radius-sm)", color: "var(--text-2)", cursor: "pointer", fontSize: 14, fontFamily: "var(--font-sans)" }}>Anulează</button>
              <button onClick={() => setAddOpen(false)} style={{ padding: "9px 20px", background: "var(--emerald)", border: "none", borderRadius: "var(--radius-sm)", color: "#fff", cursor: "pointer", fontSize: 14, fontWeight: 600, fontFamily: "var(--font-sans)" }}>Salvează</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
