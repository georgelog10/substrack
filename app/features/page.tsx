import Navbar from "@/components/Navbar";
import Link from "next/link";
import { BarChart3, Bell, Zap, Shield, Users, RefreshCw, Smartphone, DollarSign, Tag, ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  { icon: BarChart3, title: "Dashboard inteligent", desc: "Panoul de control îți arată tot ce trebuie: cheltuieli lunare, anuale, abonamente active și expirări apropiate.", color: "#1A7A5A" },
  { icon: Bell, title: "Sistem de notificări", desc: "Configurează alerte prin email sau push. Niciodată nu vei mai fi prins de o reînnoire automată.", color: "#2563EB" },
  { icon: BarChart3, title: "Rapoarte și analize", desc: "Grafice cu evoluția cheltuielilor, comparații lunare și distribuție pe categorii.", color: "#7C3AED" },
  { icon: Zap, title: "Import automat Gmail", desc: "Conectează Gmail și Abonat va detecta automat confirmările de plată și abonamentele active.", color: "#A0620A" },
  { icon: DollarSign, title: "Sincronizare bancară", desc: "Integrare cu principalele bănci din România pentru detectarea automată a plăților recurente.", color: "#1A7A5A" },
  { icon: Users, title: "Conturi partajate", desc: "Adaugă membrii familiei sau colegii de echipă cu permisiuni configurabile.", color: "#2563EB" },
  { icon: DollarSign, title: "Buget și limite", desc: "Setează un buget lunar și primești alerte când ești pe punctul de a-l depăși.", color: "#A0620A" },
  { icon: Tag, title: "Categorii personalizate", desc: "Organizează abonamentele pe categorii: Divertisment, Productivitate, Sănătate și altele.", color: "#7C3AED" },
  { icon: Smartphone, title: "Aplicație mobilă", desc: "Disponibil pe iOS și Android. Adaugă abonamente din mers, oriunde te-ai afla.", color: "#1A7A5A" },
  { icon: Shield, title: "Securitate maximă", desc: "Date criptate end-to-end. Conform GDPR. Nicio informație bancară nu este stocată.", color: "#C0392B" },
  { icon: RefreshCw, title: "Sincronizare în timp real", desc: "Toate datele se sincronizează instantaneu pe desktop, tabletă și telefon.", color: "#2563EB" },
  { icon: BarChart3, title: "Export rapoarte", desc: "Exportă datele în format CSV sau PDF pentru contabilitate sau analize financiare.", color: "#A0620A" },
];

export default function FeaturesPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "120px 2rem 80px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "var(--emerald-bg)", border: "1px solid var(--emerald-border)", borderRadius: 100, padding: "5px 14px", marginBottom: 24 }}>
          <CheckCircle2 size={13} color="var(--emerald)" />
          <span style={{ fontSize: 12, fontWeight: 600, color: "var(--emerald)" }}>Toate funcționalitățile sunt gratuite</span>
        </div>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(36px,5vw,60px)", fontWeight: 500, letterSpacing: "-0.03em", maxWidth: 580, marginBottom: 20 }}>
          Toate instrumentele de care ai nevoie
        </h1>
        <p style={{ fontSize: 18, color: "var(--text-2)", lineHeight: 1.7, maxWidth: 520, marginBottom: 64 }}>
          Abonat îți oferă o imagine completă a cheltuielilor recurente. Complet gratuit, fără limitări ascunse.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18, marginBottom: 72 }} className="stagger">
          {features.map(f => {
            const Icon = f.icon;
            return (
              <div key={f.title} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: 26, boxShadow: "var(--shadow-sm)" }}>
                <div style={{ width: 44, height: 44, borderRadius: "var(--radius-sm)", background: f.color+"10", border: `1px solid ${f.color}20`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                  <Icon size={20} color={f.color} />
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            );
          })}
        </div>

        <div style={{ background: "var(--emerald)", borderRadius: "var(--radius-xl)", padding: "64px", textAlign: "center", boxShadow: "0 16px 48px rgba(26,122,90,0.2)" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#fff", marginBottom: 14 }}>Convins? Înregistrează-te gratuit</h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.75)", marginBottom: 30 }}>Fără card bancar. Fără perioadă de probă. Toate funcționalitățile din prima zi.</p>
          <Link href="/dashboard" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 26px", background: "#fff", color: "var(--emerald)", borderRadius: "var(--radius-sm)", fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
            Creează cont acum <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
