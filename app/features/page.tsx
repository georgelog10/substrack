import Navbar from "@/components/Navbar";
import Link from "next/link";
import { BarChart3, Bell, Zap, Shield, Users, RefreshCw, Smartphone, DollarSign, Tag, ArrowRight } from "lucide-react";

const features = [
  { icon: BarChart3, title: "Dashboard inteligent", desc: "Panoul de control îți arată tot ce trebuie: cheltuieli lunare, anuale, subscripții active, expirări apropiate și tendințe de cheltuieli.", color: "var(--gold)" },
  { icon: Bell, title: "Sistem de notificări", desc: "Configurează alerte personalizate prin email, notificări push sau SMS. Niciodată nu vei fi prins nesigur de o reînnoire automată.", color: "var(--blue)" },
  { icon: BarChart3, title: "Rapoarte și analize", desc: "Grafice interactive cu evoluția cheltuielilor, comparații lunare, distribuție pe categorii și proiecții pentru cheltuielile viitoare.", color: "var(--green)" },
  { icon: Zap, title: "Import automat Gmail", desc: "Conectează-ți contul Gmail și SubsTrack va detecta automat confirmările de plată și subscripțiile active din emailurile tale.", color: "var(--amber)" },
  { icon: DollarSign, title: "Sincronizare bancară", desc: "Integrare cu principalele bănci din România pentru detectarea automată a plăților recurente din extrasul de cont.", color: "#9B6BEF" },
  { icon: Users, title: "Conturi partajate", desc: "Adaugă membrii familiei sau colegii de echipă. Fiecare are propriul acces cu permisiuni configurabile.", color: "var(--red)" },
  { icon: DollarSign, title: "Buget și limite", desc: "Setează un buget lunar pentru subscripții și primești alerte atunci când ești pe punctul de a-l depăși.", color: "var(--green)" },
  { icon: Tag, title: "Categorii personalizate", desc: "Organizează subscripțiile pe categorii: Divertisment, Productivitate, Sănătate, Business și orice altă categorie.", color: "var(--gold)" },
  { icon: Smartphone, title: "Aplicație mobilă", desc: "Disponibil pe iOS și Android. Adaugă subscripții din mers, verifică statusul și primește notificări oriunde.", color: "var(--blue)" },
  { icon: Shield, title: "Securitate maximă", desc: "Date criptate end-to-end. Conform GDPR. Certificare ISO 27001. Nicio informație bancară nu este stocată.", color: "var(--amber)" },
  { icon: RefreshCw, title: "Sincronizare în timp real", desc: "Toate datele se sincronizează instantaneu pe toate dispozitivele tale — desktop, tabletă, telefon.", color: "#9B6BEF" },
  { icon: BarChart3, title: "Export și rapoarte", desc: "Exportă datele în format CSV sau PDF pentru contabilitate, taxe sau analize financiare proprii.", color: "var(--red)" },
];

export default function FeaturesPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "120px 2rem 80px" }}>
        <div style={{ marginBottom: 72 }}>
          <div style={{ fontSize: 12, fontWeight: 500, color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Funcționalități</div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(36px,5vw,60px)", fontWeight: 500, letterSpacing: "-0.03em", maxWidth: 580, marginBottom: 20 }}>
            Toate instrumentele de care ai nevoie
          </h1>
          <p style={{ fontSize: 18, color: "var(--text-2)", lineHeight: 1.7, maxWidth: 520 }}>
            SubsTrack îți oferă o imagine completă și clară a tuturor cheltuielilor recurente, indiferent că ești o persoană sau o companie.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginBottom: 80 }} className="stagger">
          {features.map(f => {
            const Icon = f.icon;
            return (
              <div key={f.title} style={{ background: "var(--surface)", border: "1px solid var(--border-2)", borderRadius: "var(--radius-lg)", padding: 28 }}>
                <div style={{ width: 46, height: 46, borderRadius: "var(--radius-sm)", background: f.color+"12", border: `1px solid ${f.color}22`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  <Icon size={20} color={f.color} />
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            );
          })}
        </div>

        <div style={{ background: "linear-gradient(135deg, var(--surface), var(--surface-2))", border: "1px solid var(--border-2)", borderRadius: "var(--radius-xl)", padding: "64px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 60%)", pointerEvents: "none" }}></div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 16, position: "relative" }}>Convins? Încearcă gratuit</h2>
          <p style={{ fontSize: 16, color: "var(--text-2)", marginBottom: 32, position: "relative" }}>Fără card bancar. Planul Personal este gratuit pentru totdeauna.</p>
          <Link href="/dashboard" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 26px", background: "var(--gold)", color: "#0A0A0B", borderRadius: "var(--radius-sm)", fontWeight: 600, fontSize: 15, textDecoration: "none", position: "relative" }}>
            Creează cont acum <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
