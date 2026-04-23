import Link from "next/link";
import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";
import { ArrowRight, Bell, BarChart3, Shield, Users, Zap, Star, CheckCircle2 } from "lucide-react";

const features = [
  { icon: BarChart3, title: "Dashboard centralizat", desc: "Vizualizează toate abonamentele, costurile și datele de reînnoire dintr-o singură privire.", color: "#1A7A5A" },
  { icon: Bell, title: "Alerte inteligente", desc: "Primești notificări cu 3, 7 sau 14 zile înainte de orice reînnoire automată.", color: "#2563EB" },
  { icon: Zap, title: "Import automat", desc: "Sincronizare cu Gmail sau extrasele bancare pentru detectarea abonamentelor.", color: "#A0620A" },
  { icon: BarChart3, title: "Rapoarte detaliate", desc: "Grafice cu tendințe lunare, distribuție pe categorii și economii estimate.", color: "#1A7A5A" },
  { icon: Users, title: "Conturi partajate", desc: "Gestionează abonamentele cu familia sau echipa, cu permisiuni configurabile.", color: "#7C3AED" },
  { icon: Shield, title: "Securitate maximă", desc: "Date criptate end-to-end. Conform GDPR. Nicio informație bancară nu este stocată.", color: "#C0392B" },
];

const testimonials = [
  { name: "Andrei Moldovan", role: "Designer freelancer, Cluj", text: "Am descoperit că plăteam €34/lună pentru un serviciu pe care nu îl foloseam de 8 luni. Am economisit peste €400 în primul an.", initials: "AM", color: "#1A7A5A" },
  { name: "Ioana Popa", role: "CFO, startup tech, București", text: "Gestionam abonamentele firmei pe foi Excel. Acum totul e centralizat, am alerte automate și știu exact cât cheltuim pe SaaS.", initials: "IP", color: "#2563EB" },
  { name: "Radu Stoica", role: "Medic, Timișoara", text: "Interfața este extrem de clară și intuitivă. Mi-a luat 10 minute să configurez totul și acum am liniștea că nu mă prinde nicio reînnoire.", initials: "RS", color: "#7C3AED" },
];

const steps = [
  { num: "01", title: "Creează cont", desc: "Înregistrare în 30 de secunde, fără card bancar" },
  { num: "02", title: "Adaugă abonamente", desc: "Manual sau import automat din Gmail" },
  { num: "03", title: "Primește alerte", desc: "Notificări înainte de orice reînnoire" },
  { num: "04", title: "Economisești", desc: "Analizează și elimină ce nu folosești" },
];

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar />

      {/* Hero */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "130px 2rem 100px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px", alignItems: "center" }}>
        <div className="stagger">
          {/* Free badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--emerald-bg)", border: "1px solid var(--emerald-border)", borderRadius: 100, padding: "6px 16px", marginBottom: 28 }}>
            <CheckCircle2 size={14} color="var(--emerald)" />
            <span style={{ fontSize: 13, fontWeight: 600, color: "var(--emerald)" }}>100% Gratuit — fără abonament, fără surprize</span>
          </div>

          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(40px,5vw,60px)", fontWeight: 500, lineHeight: 1.08, letterSpacing: "-0.03em", marginBottom: 22 }}>
            Controlul total al<br />
            <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>abonamentelor</em> tale
          </h1>
          <p style={{ fontSize: 18, color: "var(--text-2)", lineHeight: 1.7, marginBottom: 40, maxWidth: 460 }}>
            Urmărește toate abonamentele digitale, primește alerte înainte de reînnoire și economisește eliminând costurile ascunse. Complet gratuit.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/dashboard" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", background: "var(--emerald)", color: "#fff", borderRadius: "var(--radius-sm)", fontWeight: 600, fontSize: 15, textDecoration: "none", boxShadow: "0 4px 14px rgba(26,122,90,0.3)" }}>
              Înregistrare gratuită <ArrowRight size={16} />
            </Link>
            <Link href="/features" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", background: "var(--surface)", border: "1px solid var(--border-2)", color: "var(--text)", borderRadius: "var(--radius-sm)", fontWeight: 500, fontSize: 15, textDecoration: "none", boxShadow: "var(--shadow-sm)" }}>
              Cum funcționează
            </Link>
          </div>

          <div style={{ display: "flex", gap: 32, marginTop: 52, paddingTop: 36, borderTop: "1px solid var(--border-2)" }}>
            {[["47k+","Utilizatori activi"],["€2.3M","Economii generate"],["Gratuit","Pentru totdeauna"]].map(([v,l]) => (
              <div key={l}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: 26, color: "var(--text)", letterSpacing: "-0.02em" }}>{v}</div>
                <div style={{ fontSize: 12, color: "var(--text-3)", marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero card visual */}
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", inset: -30, background: "radial-gradient(ellipse at center, rgba(26,122,90,0.06) 0%, transparent 70%)", pointerEvents: "none" }}></div>
          <div style={{ background: "var(--surface)", border: "1px solid var(--border-2)", borderRadius: "var(--radius-lg)", padding: 28, boxShadow: "var(--shadow-lg)" }} className="animate-fade-up">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 22 }}>
              <span style={{ fontSize: 14, fontWeight: 600 }}>Abonamentele mele</span>
              <span style={{ fontSize: 12, color: "var(--text-3)" }}>Mai 2025</span>
            </div>
            {[
              { name: "Netflix", price: "€15.99", color: "#E50914", status: "Activ" },
              { name: "Spotify Family", price: "€15.99", color: "#1DB954", status: "Activ" },
              { name: "Adobe CC", price: "€54.99", color: "#FF4400", status: "Expiră" },
              { name: "Google One", price: "€2.99", color: "#4285F4", status: "Activ" },
              { name: "Linear", price: "€8.00", color: "#5E6AD2", status: "Activ" },
            ].map((s, i) => (
              <div key={s.name} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 12px", borderRadius: "var(--radius-sm)", background: "var(--bg)", marginBottom: 7, border: "1px solid var(--border)", opacity: 0, animation: `fadeUp 0.4s ease ${0.15 + i*0.07}s forwards` }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: s.color+"15", border: `1px solid ${s.color}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: s.color, flexShrink: 0 }}>{s.name[0]}</div>
                <span style={{ fontSize: 13, fontWeight: 500, flex: 1 }}>{s.name}</span>
                <span style={{ fontSize: 13, color: "var(--text-2)" }}>{s.price}</span>
                <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 100, background: s.status === "Activ" ? "rgba(26,122,90,0.08)" : "rgba(160,98,10,0.08)", color: s.status === "Activ" ? "#1A7A5A" : "#A0620A", fontWeight: 500, border: `1px solid ${s.status === "Activ" ? "rgba(26,122,90,0.2)" : "rgba(160,98,10,0.2)"}` }}>{s.status}</span>
              </div>
            ))}
            <div style={{ marginTop: 14, padding: "14px 16px", background: "var(--emerald-bg)", border: "1px solid var(--emerald-border)", borderRadius: "var(--radius-sm)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 13, color: "var(--emerald)", fontWeight: 500 }}>Total lunar</span>
              <span style={{ fontFamily: "var(--font-serif)", fontSize: 26, color: "var(--emerald)", letterSpacing: "-0.02em" }}>€97.97</span>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "80px 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "var(--emerald)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Cum funcționează</div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(30px,4vw,44px)" }}>Simplu. Rapid. Gratuit.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, position: "relative" }} className="stagger">
            <div style={{ position: "absolute", top: 30, left: "12%", right: "12%", height: 1, background: "var(--border-2)" }}></div>
            {steps.map(s => (
              <div key={s.num} style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                <div style={{ width: 58, height: 58, borderRadius: "50%", background: "var(--surface)", border: "2px solid var(--emerald-border)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", fontFamily: "var(--font-serif)", fontSize: 20, color: "var(--emerald)", boxShadow: "var(--shadow-sm)" }}>{s.num}</div>
                <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 6 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: "var(--text-3)", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: "96px 2rem", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 56 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "var(--emerald)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Funcționalități</div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(30px,4vw,48px)", maxWidth: 520 }}>Tot ce ai nevoie, complet gratuit</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }} className="stagger">
          {features.map(f => {
            const Icon = f.icon;
            return (
              <div key={f.title} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: 26, boxShadow: "var(--shadow-sm)", transition: "box-shadow 0.2s, transform 0.2s" }}>
                <div style={{ width: 44, height: 44, borderRadius: "var(--radius-sm)", background: f.color+"10", border: `1px solid ${f.color}20`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
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
      <section style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", padding: "96px 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "var(--emerald)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Testimoniale</div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(30px,4vw,44px)" }}>Ce spun utilizatorii noștri</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }} className="stagger">
            {testimonials.map(t => (
              <div key={t.name} style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: 26 }}>
                <div style={{ display: "flex", gap: 2, marginBottom: 14 }}>
                  {[...Array(5)].map((_,i) => <Star key={i} size={13} color="#A0620A" fill="#A0620A" />)}
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: "var(--text-2)", fontStyle: "italic", marginBottom: 22 }}>"{t.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 38, height: 38, borderRadius: "50%", background: t.color+"15", border: `1px solid ${t.color}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 600, color: t.color, flexShrink: 0 }}>{t.initials}</div>
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
          <div style={{ background: "var(--emerald)", borderRadius: "var(--radius-xl)", padding: "72px 64px", textAlign: "center", position: "relative", overflow: "hidden", boxShadow: "0 16px 48px rgba(26,122,90,0.25)" }}>
            <div style={{ position: "absolute", top: -80, right: -80, width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.05)", pointerEvents: "none" }}></div>
            <div style={{ position: "absolute", bottom: -60, left: -60, width: 240, height: 240, borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }}></div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.15)", borderRadius: 100, padding: "5px 14px", marginBottom: 20 }}>
              <CheckCircle2 size={13} color="#fff" />
              <span style={{ fontSize: 12, fontWeight: 600, color: "#fff" }}>Gratuit pentru totdeauna</span>
            </div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(30px,4vw,50px)", color: "#fff", marginBottom: 14, position: "relative" }}>Începe să economisești astăzi</h2>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.75)", marginBottom: 34, position: "relative" }}>Fără card bancar. Fără perioadă de probă. Fără costuri ascunse. Vreodată.</p>
            <Link href="/dashboard" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", background: "#fff", color: "var(--emerald)", borderRadius: "var(--radius-sm)", fontWeight: 700, fontSize: 15, textDecoration: "none", boxShadow: "0 4px 16px rgba(0,0,0,0.15)", position: "relative" }}>
              Creează cont gratuit <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", padding: "56px 2rem 36px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 44 }}>
            <div>
              <Logo size="lg" />
              <p style={{ fontSize: 14, color: "var(--text-3)", lineHeight: 1.7, maxWidth: 280, marginTop: 14 }}>Platforma gratuită pentru gestionarea abonamentelor digitale personale și de business, construită în România.</p>
            </div>
            {[
              { title: "Produs", links: ["Funcționalități", "Cum funcționează", "Securitate", "API"] },
              { title: "Companie", links: ["Despre noi", "Blog", "Contact", "Cariere"] },
              { title: "Legal", links: ["Termeni", "Confidențialitate", "Cookies", "GDPR"] },
            ].map(col => (
              <div key={col.title}>
                <h4 style={{ fontSize: 11, fontWeight: 700, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>{col.title}</h4>
                {col.links.map(l => <div key={l} style={{ fontSize: 14, color: "var(--text-2)", marginBottom: 10, cursor: "pointer" }}>{l}</div>)}
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid var(--border)", paddingTop: 22, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 13, color: "var(--text-3)" }}>© 2025 Abonat — Gratuit pentru totdeauna.</span>
            <span style={{ fontSize: 13, color: "var(--text-3)" }}>Construit cu ♥ în România</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
