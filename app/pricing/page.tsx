import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Personal",
    price: "0",
    period: "/ lună, pentru totdeauna",
    desc: "Perfect pentru uz personal",
    features: [
      { label: "Până la 10 subscripții", ok: true },
      { label: "Alerte prin email", ok: true },
      { label: "Dashboard de bază", ok: true },
      { label: "Import automat", ok: false },
      { label: "Rapoarte avansate", ok: false },
      { label: "Conturi multiple", ok: false },
    ],
    cta: "Începe gratuit",
    featured: false,
  },
  {
    name: "Pro",
    price: "4.99",
    period: "/ lună",
    desc: "Pentru utilizatori avansați",
    features: [
      { label: "Subscripții nelimitate", ok: true },
      { label: "Alerte email + push + SMS", ok: true },
      { label: "Dashboard complet", ok: true },
      { label: "Import din Gmail", ok: true },
      { label: "Rapoarte avansate", ok: true },
      { label: "Conturi echipă", ok: false },
    ],
    cta: "14 zile gratuit",
    featured: true,
  },
  {
    name: "Business",
    price: "14.99",
    period: "/ lună",
    desc: "Pentru echipe și companii",
    features: [
      { label: "Subscripții nelimitate", ok: true },
      { label: "Toate tipurile de alerte", ok: true },
      { label: "Dashboard + export CSV", ok: true },
      { label: "Import automat + bancă", ok: true },
      { label: "Rapoarte + analytics", ok: true },
      { label: "Până la 10 utilizatori", ok: true },
    ],
    cta: "Contactează-ne",
    featured: false,
  },
];

const faqs = [
  { q: "Pot anula oricând?", a: "Da, absolut. Poți anula abonamentul tău Pro sau Business oricând, direct din setările contului. Nu există penalități sau perioade minime." },
  { q: "Cum funcționează perioada de probă?", a: "Perioada de probă de 14 zile este complet gratuită și nu necesită card bancar. La finalul ei, dacă nu dorești să continui, contul tău revine automat la planul Personal." },
  { q: "Datele mele bancare sunt în siguranță?", a: "SubsTrack nu stochează nicio dată bancară. Sincronizarea cu banca se face prin intermediul unui provider certificat PSD2, în mod read-only." },
  { q: "Există reducere pentru plata anuală?", a: "Da! La planul Pro, plata anuală costă €39.99/an (2 luni gratuite). La Business, plata anuală este €139.99/an." },
];

export default function PricingPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "120px 2rem 80px" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ fontSize: 12, fontWeight: 500, color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Prețuri</div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(36px,5vw,56px)", fontWeight: 500, letterSpacing: "-0.03em", marginBottom: 16 }}>Simplu și transparent</h1>
          <p style={{ fontSize: 18, color: "var(--text-2)" }}>Nicio surpriză, niciun cost ascuns. Schimbă sau anulează oricând.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginBottom: 80 }} className="stagger">
          {plans.map(plan => (
            <div key={plan.name} style={{ background: plan.featured ? "linear-gradient(145deg, rgba(201,168,76,0.1), rgba(201,168,76,0.03))" : "var(--surface)", border: `${plan.featured ? "2px" : "1px"} solid ${plan.featured ? "var(--gold-border)" : "var(--border-2)"}`, borderRadius: "var(--radius-lg)", padding: 32, position: "relative" }}>
              {plan.featured && (
                <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "var(--gold)", color: "#0A0A0B", fontSize: 12, fontWeight: 600, padding: "4px 16px", borderRadius: 100, whiteSpace: "nowrap" }}>
                  Cel mai popular
                </div>
              )}
              <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 4 }}>{plan.name}</div>
              <div style={{ fontSize: 13, color: "var(--text-3)", marginBottom: 20 }}>{plan.desc}</div>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: 48, fontWeight: 500, letterSpacing: "-0.03em", marginBottom: 4, color: plan.featured ? "var(--gold-2)" : "var(--text)" }}>
                <span style={{ fontSize: 22, fontFamily: "var(--font-sans)" }}>€</span>{plan.price}
              </div>
              <div style={{ fontSize: 13, color: "var(--text-3)", marginBottom: 28 }}>{plan.period}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
                {plan.features.map(f => (
                  <div key={f.label} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: f.ok ? "var(--text-2)" : "var(--text-3)" }}>
                    {f.ok ? <Check size={15} color="var(--green)" /> : <X size={15} color="var(--surface-3)" />}
                    {f.label}
                  </div>
                ))}
              </div>
              <Link href="/dashboard" style={{ display: "block", textAlign: "center", padding: "11px 20px", background: plan.featured ? "var(--gold)" : "var(--surface-2)", color: plan.featured ? "#0A0A0B" : "var(--text)", border: plan.featured ? "none" : "1px solid var(--border-2)", borderRadius: "var(--radius-sm)", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 36, fontWeight: 500, letterSpacing: "-0.02em", textAlign: "center", marginBottom: 40 }}>Întrebări frecvente</h2>
          {faqs.map((f, i) => (
            <div key={f.q} style={{ borderBottom: "1px solid var(--border)", padding: "20px 0" }}>
              <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 10 }}>{f.q}</div>
              <p style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.7 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
