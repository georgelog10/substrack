import Link from "next/link";
import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";
import { ArrowRight, Check, Zap, Bell, BarChart3, Shield, Users, RefreshCw, Star } from "lucide-react";

const features = [
  { icon: BarChart3, title: "Dashboard centralizat", desc: "Vizualizează toate subscripțiile, costurile și datele de reînnoire dintr-o singură privire.", color: "var(--gold)" },
  { icon: Bell, title: "Alerte inteligente", desc: "Primești notificări cu 3, 7 sau 14 zile înainte de orice reînnoire automată.", color: "var(--blue)" },
  { icon: Zap, title: "Import automat", desc: "Sincronizare cu Gmail sau extrasele bancare pentru detectarea subscripțiilor.", color: "var(--amber)" },
  { icon: BarChart3, title: "Rapoarte detaliate", desc: "Grafice cu tendințe lunare, distribuție pe categorii și economii estimate.", color: "var(--green)" },
  { icon: Users, title: "Conturi partajate", desc: "Gestionează subscripțiile cu familia sau echipa, cu permisiuni configurabile.", color: "#9B6BEF" },
  { icon: Shield, title: "Securitate maximă", desc: "Date criptate end-to-end. Nicio informație bancară nu este stocată.", color: "var(--red)" },
];

const testimonials = [
  { name: "Andrei Moldovan", role: "Designer freelancer, Cluj", text: "Am descoperit că plăteam €34/lună pentru un serviciu pe care nu îl foloseam de 8 luni. Am economisit peste €400 în primul an.", initials: "AM", color: "#C9A84C" },
  { name: "Ioana Popa", role: "CFO, startup tech, București", text: "Gestionam subscripțiile firmei pe foi Excel. Acum totul e centralizat, am alerte automate și știu exact cât cheltuim pe SaaS.", initials: "IP", color: "#3DC98A" },
  { name: "Radu Stoica", role: "Medic, Timișoara", text: "Interfața este extrem de clară. Mi-a luat 10 minute să configurez totul și acum am liniștea că nu mă prinde nicio reînnoire nesperată.", initials: "RS", color: "#5B8DEF" },
];

const steps = [
  { num: "01", title: "Creează cont", desc: "Înregistrare în 30 de secunde, fără card bancar" },
  { num: "02", title: "Adaugă subscripții", desc: "Manual sau import automat din Gmail sau bancă" },
  { num: "03", title: "Primește alerte", desc: "Notificări înainte de orice reînnoire sau expirare" },
  { num: "04", title: "Optimizează", desc: "Analizează cheltuielile și elimină ce nu folosești" },
];

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar />

      {/* Hero */}
      <section style={{ paddingTop: "140px", paddingBottom: "100px", maxWidth: 1200, margin: "0 auto", padding: "140px 2rem 100px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
        <div className="stagger">
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--gold-bg)", border: "1px solid var(--gold-border)", borderRadius: 100, padding: "5px 14px", marginBottom: 28 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", display: "inline-block" }}></span>
            <span style={{ fontSize: 12, fontWeight: 500, color: "var(--gold)" }}>Import automat din Gmail — Nou</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(44px,5vw,64px)", fontWeight: 500, lineHeight: 1.08, letterSpacing: "-0.03em", marginBottom: 24 }}>
            Controlul total al<br />
            <em style={{ fontStyle: "italic", background: "linear-gradient(135deg, #C9A84C, #E8C96A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>subscripțiilor</em> tale
          </h1>
          <p style={{ fontSize: 18, color: "var(--text-2)", lineHeight: 1.7, marginBottom: 40, maxWidth: 460 }}>
            Urmărește toate abonamentele, primește alerte înainte de reînnoire și economisește bani eliminând costurile ascunse.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/dashboard" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", background: "var(--gold)", color: "#0A0A0B", borderRadius: "var(--radius-sm)", fontWeight: 600, fontSize: 15, textDecoration: "none", transition: "all 0.15s" }}>
              Începe gratuit <ArrowRight size={16} />
            </Link>
            <Link href="/features" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", background: "var(--surface)", border: "1px solid var(--border-2)", color: "var(--text)", borderRadius: "var(--radius-sm)", fontWeight: 500, fontSize: 15, textDecoration: "none" }}>
              Cum funcționează
            </Link>
          </div>
          <div style={{ display: "flex", gap: 36, marginTop: 56, paddingTop: 40, borderTop: "1px solid var(--border)" }}>
            {[["47k+","Utilizatori activi"],["€2.3M","Economii generate"],["4.9★","Rating utilizatori"]].map(([v,l]) => (
              <div key={l}><div style={{ fontFamily: "var(--font-serif)", fontSize: 28, color: "var(--text)", letterSpacing: "-0.02em" }}>{v}</div><div style={{ fontSize: 12, color: "var(--text-3)", marginTop: 2 }}>{l}</div></div>
            ))}
          </div>
        </div>

        {/* Hero visual */}
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", inset: -40, background: "radial-gradient(ellipse at center, rgba(201,168,76,0.08) 0%, transparent 70%)", pointerEvents: "none" }}></div>
          <div style={{ background: "var(--surface)", border: "1px solid var(--border-2)", borderRadius: "var(--radius-lg)", padding: 28, position: "relative", boxShadow: "0 24px 64px rgba(0,0,0,0.5)" }} className="animate-fade-up">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <span style={{ fontSize: 14, fontWeight: 500 }}>Subscripțiile mele</span>
              <span style={{ fontSize: 12, color: "var(--text-3)" }}>Mai 2025</span>
            </div>
            {[
              { name: "Netflix", price: "€15.99", color: "#E50914", status: "Activ" },
              { name: "Spotify Family", price: "€15.99", color: "#1DB954", status: "Activ" },
              { name: "Adobe CC", price: "€54.99", color: "#FF4400", status: "Expiră" },
              { name: "Google One", price: "€2.99", color: "#4285F4", status: "Activ" },
              { name: "Linear", price: "€8.00", color: "#5E6AD2", status: "Activ" },
            ].map((s, i) => (
              <div key={s.name} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 12px", borderRadius: "var(--radius-sm)", background: "var(--bg-3)", marginBottom: 8, opacity: 0, animation: `fadeUp 0.4s ease ${0.2 + i*0.08}s forwards` }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: s.color+"20", border: `1px solid ${s.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: s.color, flexShrink: 0 }}>{s.name[0]}</div>
                <span style={{ fontSize: 13, fontWeight: 500, flex: 1 }}>{s.name}</span>
                <span style={{ fontSize: 13, color: "var(--text-2)" }}>{s.price}</span>
                <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 100, background: s.status === "Activ" ? "var(--green-bg)" : "var(--amber-bg)", color: s.status === "Activ" ? "var(--green)" : "var(--amber)", fontWeight: 500 }}>{s.status}</span>
              </div>
            ))}
            <div style={{ marginTop: 16, padding: "14px 16px", background: "linear-gradient(135deg, rgba(201,168,76,0.12), rgba(201,168,76,0.04))", border: "1px solid var(--gold-border)", borderRadius: "var(--radius-sm)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 13, color: "var(--text-2)" }}>Total lunar</span>
              <span style={{ fontFamily: "var(--font-serif)", fontSize: 26, color: "var(--gold-2)", letterSpacing: "-0.02em" }}>€97.97</span>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "80px 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 12, fontWeight: 500, color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Cum funcționează</div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px,4vw,44px)", fontWeight: 500, letterSpacing: "-0.02em" }}>Simplu. Rapid. Eficient.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, position: "relative" }} className="stagger">
            <div style={{ position: "absolute", top: 30, left: "12%", right: "12%", height: 1, background: "linear-gradient(90deg, transparent, var(--border-3), transparent)" }}></div>
            {steps.map((s) => (
              <div key={s.num} style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                <div style={{ width: 58, height: 58, borderRadius: "50%", background: "var(--surface)", border: "1px solid var(--border-2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontFamily: "var(--font-serif)", fontSize: 22, color: "var(--gold)" }}>{s.num}</div>
                <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: "var(--text-3)", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: "100px 2rem", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 60 }}>
          <div style={{ fontSize: 12, fontWeight: 500, color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Funcționalități</div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px,4vw,48px)", fontWeight: 500, letterSpacing: "-0.02em", maxWidth: 520 }}>Tot ce ai nevoie într-un singur loc</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="stagger">
          {features.map(f => {
            const Icon = f.icon;
            return (
              <div key={f.title} style={{ background: "var(--surface)", border: "1px solid var(--border-2)", borderRadius: "var(--radius-lg)", padding: 28, transition: "border-color 0.2s, transform 0.2s" }}>
                <div style={{ width: 44, height: 44, borderRadius: "var(--radius-sm)", background: f.color+"15", border: `1px solid ${f.color}25`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  <Icon size={20} color={f.color} />
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)", padding: "100px 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ fontSize: 12, fontWeight: 500, color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Testimoniale</div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px,4vw,44px)", fontWeight: 500, letterSpacing: "-0.02em" }}>Ce spun utilizatorii noștri</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="stagger">
            {testimonials.map(t => (
              <div key={t.name} style={{ background: "var(--surface)", border: "1px solid var(--border-2)", borderRadius: "var(--radius-lg)", padding: 28 }}>
                <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
                  {[...Array(5)].map((_,i) => <Star key={i} size={14} color="var(--gold)" fill="var(--gold)" />)}
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: "var(--text-2)", fontStyle: "italic", marginBottom: 24 }}>"{t.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 38, height: 38, borderRadius: "50%", background: t.color+"25", border: `1px solid ${t.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 600, color: t.color, flexShrink: 0 }}>{t.initials}</div>
                  <div><div style={{ fontSize: 14, fontWeight: 500 }}>{t.name}</div><div style={{ fontSize: 12, color: "var(--text-3)" }}>{t.role}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ background: "linear-gradient(135deg, var(--surface), var(--surface-2))", border: "1px solid var(--border-2)", borderRadius: "var(--radius-xl)", padding: "72px 64px", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.1) 0%, transparent 60%)", pointerEvents: "none" }}></div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px,4vw,52px)", fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 16, position: "relative" }}>Începe să economisești astăzi</h2>
            <p style={{ fontSize: 17, color: "var(--text-2)", marginBottom: 36, position: "relative" }}>Gratuit pentru totdeauna pentru uz personal. Fără card bancar necesar.</p>
            <Link href="/dashboard" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", background: "var(--gold)", color: "#0A0A0B", borderRadius: "var(--radius-sm)", fontWeight: 600, fontSize: 15, textDecoration: "none", position: "relative" }}>
              Creează cont gratuit <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)", padding: "60px 2rem 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
            <div>
              <Logo size="lg" />
              <p style={{ fontSize: 14, color: "var(--text-3)", lineHeight: 1.7, maxWidth: 280 }}>Platforma premium pentru gestionarea subscripțiilor digitale personale și de business.</p>
            </div>
            {[
              { title: "Produs", links: ["Funcționalități", "Prețuri", "Actualizări", "API"] },
              { title: "Companie", links: ["Despre noi", "Blog", "Contact", "Cariere"] },
              { title: "Legal", links: ["Termeni", "Confidențialitate", "Cookies", "GDPR"] },
            ].map(col => (
              <div key={col.title}>
                <h4 style={{ fontSize: 11, fontWeight: 600, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>{col.title}</h4>
                {col.links.map(l => <div key={l} style={{ fontSize: 14, color: "var(--text-2)", marginBottom: 10, cursor: "pointer" }}>{l}</div>)}
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid var(--border)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 13, color: "var(--text-3)" }}>© 2025 SubsTrack SRL. Toate drepturile rezervate.</span>
            <span style={{ fontSize: 13, color: "var(--text-3)" }}>Made with ♥ în România</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
