"use client";
import Navbar from "@/components/Navbar";
import MetricCard from "@/components/MetricCard";
import { monthlyData, categoryData, subscriptions } from "@/lib/data";

const maxAmount = Math.max(...monthlyData.map(d => d.amount));

export default function AnalyticsPage() {
  const active = subscriptions.filter(s => s.status === "active" || s.status === "trial");
  const totalMonthly = active.reduce((s, sub) => s + (sub.cycle === "monthly" ? sub.amount : sub.amount / 12), 0);
  const sortedByAmount = [...active].sort((a, b) => b.amount - a.amount);
  const totalCat = categoryData.reduce((s, c) => s + c.value, 0);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar />
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 1.5rem 48px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32 }}>
          <div>
            <div style={{ fontSize: 13, color: "var(--text-3)", marginBottom: 4 }}>Rapoarte</div>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,3vw,36px)", fontWeight: 500, letterSpacing: "-0.02em" }}>Analize</h1>
          </div>
          <button style={{ padding: "8px 18px", background: "var(--surface)", border: "1px solid var(--border-2)", borderRadius: "var(--radius-sm)", color: "var(--text-2)", cursor: "pointer", fontSize: 14, fontFamily: "var(--font-sans)" }}>
            Exportă CSV
          </button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginBottom: 24 }} className="stagger">
          <MetricCard label="Medie lunară" value={`€${totalMonthly.toFixed(2)}`} accent />
          <MetricCard label="Total anual" value={`€${(totalMonthly * 12).toFixed(0)}`} />
          <MetricCard label="Cea mai costisitoare" value="Adobe CC" sub="€54.99/lun" subColor="var(--amber)" />
          <MetricCard label="Categorie top" value="Productivitate" sub={`€${categoryData[0].value}/lun`} subColor="var(--gold)" />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
          {/* Bar chart */}
          <div style={{ background: "var(--surface)", border: "1px solid var(--border-2)", borderRadius: "var(--radius-lg)", padding: 28 }}>
            <div style={{ marginBottom: 24 }}>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 18, fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 4 }}>Cheltuieli lunare</h3>
              <span style={{ fontSize: 12, color: "var(--text-3)" }}>Ultimele 8 luni</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {monthlyData.map(d => {
                const pct = (d.amount / maxAmount) * 100;
                const isLatest = d.month === "Mai";
                return (
                  <div key={d.month} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <span style={{ fontSize: 12, color: "var(--text-3)", width: 28, textAlign: "right", flexShrink: 0 }}>{d.month}</span>
                    <div style={{ flex: 1, height: 28, background: "var(--bg-3)", borderRadius: 6, overflow: "hidden", position: "relative" }}>
                      <div style={{ height: "100%", width: `${pct}%`, background: isLatest ? "linear-gradient(90deg, var(--gold), var(--gold-2))" : "var(--surface-3)", borderRadius: 6, transition: "width 1s ease", display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: 10 }}>
                        <span style={{ fontSize: 12, fontWeight: 500, color: isLatest ? "#0A0A0B" : "var(--text-2)" }}>€{d.amount}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Donut chart */}
          <div style={{ background: "var(--surface)", border: "1px solid var(--border-2)", borderRadius: "var(--radius-lg)", padding: 28 }}>
            <div style={{ marginBottom: 24 }}>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 18, fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 4 }}>Distribuție pe categorii</h3>
              <span style={{ fontSize: 12, color: "var(--text-3)" }}>Luna curentă</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
              <svg width="140" height="140" viewBox="0 0 140 140">
                {(() => {
                  let offset = 0;
                  const r = 50, cx = 70, cy = 70;
                  const circ = 2 * Math.PI * r;
                  return categoryData.map(c => {
                    const pct = c.value / totalCat;
                    const dash = pct * circ;
                    const el = (
                      <circle key={c.name} cx={cx} cy={cy} r={r} fill="none" stroke={c.color} strokeWidth="20"
                        strokeDasharray={`${dash} ${circ - dash}`}
                        strokeDashoffset={-(offset * circ)}
                        transform={`rotate(-90 ${cx} ${cy})`}
                      />
                    );
                    offset += pct;
                    return el;
                  });
                })()}
                <text x="70" y="65" textAnchor="middle" fontSize="18" fontWeight="500" fill="#F2F0EB" fontFamily="var(--font-serif)">
                  {active.length}
                </text>
                <text x="70" y="79" textAnchor="middle" fontSize="10" fill="#5C5A57">servicii</text>
              </svg>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
                {categoryData.map(c => (
                  <div key={c.name} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: c.color, flexShrink: 0 }}></div>
                    <span style={{ fontSize: 13, color: "var(--text-2)", flex: 1 }}>{c.name}</span>
                    <span style={{ fontSize: 13, fontWeight: 500 }}>€{c.value}</span>
                    <span style={{ fontSize: 11, color: "var(--text-3)", width: 36, textAlign: "right" }}>{((c.value / totalCat) * 100).toFixed(0)}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Top subscriptions */}
        <div style={{ background: "var(--surface)", border: "1px solid var(--border-2)", borderRadius: "var(--radius-lg)", padding: 28 }}>
          <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 18, fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 20 }}>Top subscripții după cost</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {sortedByAmount.slice(0, 6).map((sub, i) => {
              const pct = (sub.amount / sortedByAmount[0].amount) * 100;
              return (
                <div key={sub.id} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <span style={{ fontSize: 12, color: "var(--text-3)", width: 16, flexShrink: 0 }}>#{i+1}</span>
                  <div style={{ width: 28, height: 28, borderRadius: 6, background: sub.color+"20", border: `1px solid ${sub.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: sub.color, flexShrink: 0 }}>{sub.name[0]}</div>
                  <span style={{ fontSize: 14, fontWeight: 500, width: 140, flexShrink: 0 }}>{sub.name}</span>
                  <div style={{ flex: 1, height: 6, background: "var(--bg-3)", borderRadius: 3, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${pct}%`, background: i === 0 ? "var(--gold)" : "var(--surface-3)", borderRadius: 3 }}></div>
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 500, width: 70, textAlign: "right", color: i === 0 ? "var(--gold)" : "var(--text)" }}>€{sub.amount.toFixed(2)}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
