import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";

const team = [
  { name: "Mihai Andrei", role: "Co-fondator & CEO", initials: "MA", color: "#1A7A5A" },
  { name: "Diana Pop", role: "Co-fondatoare & CTO", initials: "DP", color: "#2563EB" },
  { name: "Rareș Stan", role: "Head of Design", initials: "RS", color: "#7C3AED" },
  { name: "Elena Micu", role: "Head of Growth", initials: "EM", color: "#A0620A" },
  { name: "Alexandru Bota", role: "Lead Engineer", initials: "AB", color: "#1A7A5A" },
  { name: "Cristina Dinu", role: "Customer Success", initials: "CD", color: "#C0392B" },
];

export default function AboutPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar />
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "120px 2rem 80px" }}>
        <div style={{ marginBottom: 60 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "var(--emerald)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Despre noi</div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(36px,5vw,58px)", fontWeight: 500, letterSpacing: "-0.03em", marginBottom: 26 }}>
            Construim instrumente<br />pentru claritate financiară
          </h1>
          <p style={{ fontSize: 18, color: "var(--text-2)", lineHeight: 1.8, marginBottom: 20, maxWidth: 620 }}>
            Abonat a pornit în 2023 dintr-o frustrare simplă: nu existau instrumente intuitive în limba română pentru gestionarea abonamentelor digitale, care au explodat ca număr și cost în ultimii ani.
          </p>
          <p style={{ fontSize: 16, color: "var(--text-2)", lineHeight: 1.8, maxWidth: 620, marginBottom: 20 }}>
            Suntem o echipă mică dar pasionată din Cluj-Napoca. Construim produse pe care le folosim noi înșine și credem că fiecare persoană merită control complet asupra cheltuielilor recurente.
          </p>
          <p style={{ fontSize: 16, color: "var(--text-2)", lineHeight: 1.8, maxWidth: 620 }}>
            <strong style={{ color: "var(--emerald)" }}>Abonat este și va rămâne 100% gratuit.</strong> Nu vindem date, nu avem planuri premium ascunse. Modelul nostru de business este sponsorizarea voluntară.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, marginBottom: 64 }} className="stagger">
          {[["2023","Fondată în Cluj"],["8","Membri în echipă"],["47k+","Utilizatori activi"],["€2.3M","Economii generate"],["4.9/5","Rating mediu"],["Gratuit","Pentru totdeauna"]].map(([v,l]) => (
            <div key={l} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "22px 26px", textAlign: "center", boxShadow: "var(--shadow-sm)" }}>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: 34, color: "var(--emerald)", letterSpacing: "-0.02em", marginBottom: 4 }}>{v}</div>
              <div style={{ fontSize: 13, color: "var(--text-3)" }}>{l}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 34, fontWeight: 500, marginBottom: 28 }}>Echipa noastră</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }} className="stagger">
          {team.map(m => (
            <div key={m.name} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: 22, display: "flex", alignItems: "center", gap: 14, boxShadow: "var(--shadow-sm)" }}>
              <div style={{ width: 50, height: 50, borderRadius: "50%", background: m.color+"12", border: `1px solid ${m.color}22`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 600, color: m.color, flexShrink: 0 }}>{m.initials}</div>
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
