import Navbar from "@/components/Navbar";

const team = [
  { name: "Mihai Andrei", role: "Co-fondator & CEO", initials: "MA", color: "#C9A84C" },
  { name: "Diana Pop", role: "Co-fondatoare & CTO", initials: "DP", color: "#3DC98A" },
  { name: "Rareș Stan", role: "Head of Design", initials: "RS", color: "#5B8DEF" },
  { name: "Elena Micu", role: "Head of Growth", initials: "EM", color: "#E89A3C" },
  { name: "Alexandru Bota", role: "Lead Engineer", initials: "AB", color: "#9B6BEF" },
  { name: "Cristina Dinu", role: "Customer Success", initials: "CD", color: "#E05252" },
];

export default function AboutPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar />
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "120px 2rem 80px" }}>
        <div style={{ marginBottom: 64 }}>
          <div style={{ fontSize: 12, fontWeight: 500, color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Despre noi</div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(36px,5vw,60px)", fontWeight: 500, letterSpacing: "-0.03em", marginBottom: 28 }}>
            Construim instrumente<br />pentru claritate financiară
          </h1>
          <p style={{ fontSize: 18, color: "var(--text-2)", lineHeight: 1.8, marginBottom: 24, maxWidth: 640 }}>
            SubsTrack a pornit în 2023 dintr-o frustrare simplă: nu existau instrumente intuitive în limba română pentru gestionarea subscripțiilor digitale, care au explodat ca număr și cost în ultimii ani.
          </p>
          <p style={{ fontSize: 16, color: "var(--text-2)", lineHeight: 1.8, maxWidth: 640 }}>
            Suntem o echipă mică dar pasionată din Cluj-Napoca. Construim produse pe care le folosim noi înșine și credem că fiecare persoană merită control complet asupra cheltuielilor recurente.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginBottom: 72 }} className="stagger">
          {[["2023","Fondată în Cluj"],["8","Membri în echipă"],["47k+","Utilizatori activi"],["€2.3M","Economii generate"],["4.9/5","Rating mediu"],["99.9%","Uptime garantat"]].map(([v,l]) => (
            <div key={l} style={{ background: "var(--surface)", border: "1px solid var(--border-2)", borderRadius: "var(--radius-lg)", padding: "24px 28px", textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: 36, color: "var(--gold-2)", letterSpacing: "-0.02em", marginBottom: 4 }}>{v}</div>
              <div style={{ fontSize: 13, color: "var(--text-3)" }}>{l}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 36, fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 32 }}>Echipa noastră</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }} className="stagger">
          {team.map(m => (
            <div key={m.name} style={{ background: "var(--surface)", border: "1px solid var(--border-2)", borderRadius: "var(--radius-lg)", padding: 24, display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 52, height: 52, borderRadius: "50%", background: m.color+"20", border: `1px solid ${m.color}35`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, fontWeight: 600, color: m.color, flexShrink: 0 }}>{m.initials}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{m.name}</div>
                <div style={{ fontSize: 12, color: "var(--text-3)", marginTop: 2 }}>{m.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
