"use client";
import Navbar from "@/components/Navbar";
import SubIcon from "@/components/SubIcon";
import StatusPill from "@/components/StatusPill";
import { subscriptions, CATEGORY_LABELS, CYCLE_LABELS } from "@/lib/data";
import { useState } from "react";
import { Plus, Search } from "lucide-react";

const filters = [
  { key: "all", label: "Toate" },
  { key: "active", label: "Active" },
  { key: "trial", label: "Trial" },
  { key: "paused", label: "Pausate" },
  { key: "cancelled", label: "Anulate" },
];

export default function SubscriptionsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = subscriptions.filter(s => {
    const matchStatus = activeFilter === "all" || s.status === activeFilter;
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  const selectedSub = subscriptions.find(s => s.id === selected);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar />
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 1.5rem 48px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 28 }}>
          <div>
            <div style={{ fontSize: 13, color: "var(--text-3)", marginBottom: 4 }}>Gestionare</div>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px,3vw,34px)", fontWeight: 500 }}>Abonamentele mele</h1>
          </div>
          <button style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 18px", background: "var(--emerald)", color: "#fff", borderRadius: "var(--radius-sm)", fontWeight: 600, fontSize: 14, border: "none", cursor: "pointer", boxShadow: "0 2px 8px rgba(26,122,90,0.25)" }}>
            <Plus size={15} /> Adaugă
          </button>
        </div>

        <div style={{ display: "flex", gap: 10, marginBottom: 20, flexWrap: "wrap", alignItems: "center" }}>
          <div style={{ display: "flex", gap: 6, flex: 1, flexWrap: "wrap" }}>
            {filters.map(f => (
              <button key={f.key} onClick={() => setActiveFilter(f.key)} style={{ padding: "6px 16px", borderRadius: 100, fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "var(--font-sans)", transition: "all 0.15s", background: activeFilter === f.key ? "var(--emerald)" : "var(--surface)", color: activeFilter === f.key ? "#fff" : "var(--text-2)", border: `1px solid ${activeFilter === f.key ? "var(--emerald)" : "var(--border-2)"}`, boxShadow: activeFilter === f.key ? "0 2px 8px rgba(26,122,90,0.2)" : "var(--shadow-sm)" }}>
                {f.label}
              </button>
            ))}
          </div>
          <div style={{ position: "relative" }}>
            <Search size={13} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "var(--text-3)" }} />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Caută..." style={{ padding: "8px 13px 8px 32px", fontSize: 14, width: 200 }} />
          </div>
        </div>

        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2.5fr 1fr 1fr 1fr 110px", gap: 16, padding: "11px 22px", borderBottom: "1px solid var(--border)", background: "var(--bg-2)" }}>
            {["Serviciu", "Categorie", "Ciclu", "Cost", "Status"].map(h => (
              <span key={h} style={{ fontSize: 11, fontWeight: 700, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.07em" }}>{h}</span>
            ))}
          </div>
          {filtered.map((sub, i) => (
            <div key={sub.id} onClick={() => setSelected(sub.id === selected ? null : sub.id)}
              style={{ display: "grid", gridTemplateColumns: "2.5fr 1fr 1fr 1fr 110px", gap: 16, alignItems: "center", padding: "14px 22px", borderBottom: i < filtered.length - 1 ? "1px solid var(--border)" : "none", cursor: "pointer", transition: "background 0.15s", background: selected === sub.id ? "var(--emerald-bg)" : "transparent" }}
              onMouseEnter={e => { if (selected !== sub.id) e.currentTarget.style.background = "var(--bg)"; }}
              onMouseLeave={e => { if (selected !== sub.id) e.currentTarget.style.background = "transparent"; }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
                <SubIcon name={sub.name} color={sub.color} size={34} />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 500 }}>{sub.name}</div>
                  <div style={{ fontSize: 12, color: sub.status === "trial" ? "var(--amber)" : "var(--text-3)" }}>
                    {sub.status === "trial" ? `⚠ Expiră ${new Date(sub.nextRenewal).toLocaleDateString("ro-RO", { day: "numeric", month: "short" })}`
                      : `Reînnoire ${new Date(sub.nextRenewal).toLocaleDateString("ro-RO", { day: "numeric", month: "short" })}`}
                  </div>
                </div>
              </div>
              <span style={{ fontSize: 13, color: "var(--text-2)" }}>{CATEGORY_LABELS[sub.category]}</span>
              <span style={{ fontSize: 13, color: "var(--text-2)" }}>{CYCLE_LABELS[sub.cycle]}</span>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>€{sub.amount.toFixed(2)}</div>
                <div style={{ fontSize: 11, color: "var(--text-3)" }}>€{(sub.amount * 12).toFixed(0)}/an</div>
              </div>
              <StatusPill status={sub.status} />
            </div>
          ))}
          {filtered.length === 0 && (
            <div style={{ padding: "48px", textAlign: "center", color: "var(--text-3)" }}>Niciun abonament găsit</div>
          )}
        </div>

        {selectedSub && (
          <div style={{ marginTop: 18, background: "var(--surface)", border: "1px solid var(--emerald-border)", borderRadius: "var(--radius-lg)", padding: 26, boxShadow: "var(--shadow-sm)" }} className="animate-fade-up">
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 22 }}>
              <SubIcon name={selectedSub.name} color={selectedSub.color} size={52} />
              <div>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 22, fontWeight: 500 }}>{selectedSub.name}</h2>
                <div style={{ fontSize: 13, color: "var(--text-3)", marginTop: 2 }}>{CATEGORY_LABELS[selectedSub.category]} · {CYCLE_LABELS[selectedSub.cycle]}</div>
              </div>
              <div style={{ marginLeft: "auto", display: "flex", gap: 10 }}>
                <button style={{ padding: "8px 18px", background: "rgba(192,57,43,0.07)", border: "1px solid rgba(192,57,43,0.2)", borderRadius: "var(--radius-sm)", color: "var(--red)", cursor: "pointer", fontSize: 13, fontWeight: 500, fontFamily: "var(--font-sans)" }}>Anulează abonamentul</button>
                <button style={{ padding: "8px 18px", background: "var(--emerald)", border: "none", borderRadius: "var(--radius-sm)", color: "#fff", cursor: "pointer", fontSize: 13, fontWeight: 600, fontFamily: "var(--font-sans)" }}>Editează</button>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
              {[
                ["Cost lunar", `€${selectedSub.amount.toFixed(2)}`],
                ["Cost anual", `€${(selectedSub.amount * 12).toFixed(2)}`],
                ["Activ din", new Date(selectedSub.startedAt).toLocaleDateString("ro-RO", { month: "short", year: "numeric" })],
                ["Următoarea reînnoire", new Date(selectedSub.nextRenewal).toLocaleDateString("ro-RO", { day: "numeric", month: "long" })],
              ].map(([l, v]) => (
                <div key={l} style={{ background: "var(--bg)", borderRadius: "var(--radius-sm)", padding: "13px 15px", border: "1px solid var(--border)" }}>
                  <div style={{ fontSize: 11, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 5 }}>{l}</div>
                  <div style={{ fontSize: 17, fontFamily: "var(--font-serif)", color: "var(--text)" }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
