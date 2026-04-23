"use client";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const tabs = ["Profil", "Notificări", "Facturare", "Securitate"];

function Toggle({ on = false }: { on?: boolean }) {
  const [active, setActive] = useState(on);
  return (
    <div onClick={() => setActive(!active)} style={{ width: 42, height: 24, borderRadius: 12, background: active ? "var(--gold)" : "var(--surface-3)", cursor: "pointer", position: "relative", transition: "background 0.2s", flexShrink: 0 }}>
      <div style={{ position: "absolute", width: 18, height: 18, borderRadius: "50%", background: "#fff", top: 3, left: active ? 21 : 3, transition: "left 0.2s", boxShadow: "0 1px 3px rgba(0,0,0,0.3)" }}></div>
    </div>
  );
}

function Input({ label, value, type = "text" }: { label: string; value?: string; type?: string }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{ display: "block", fontSize: 12, fontWeight: 500, color: "var(--text-2)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</label>
      <input type={type} defaultValue={value} style={{ width: "100%", padding: "10px 14px", fontSize: 14, background: "var(--bg-3)", border: "1px solid var(--border-2)", borderRadius: "var(--radius-sm)", color: "var(--text)" }} />
    </div>
  );
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar />
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "80px 1.5rem 48px" }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontSize: 13, color: "var(--text-3)", marginBottom: 4 }}>Cont</div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,3vw,36px)", fontWeight: 500, letterSpacing: "-0.02em" }}>Setări</h1>
        </div>

        {/* Tab nav */}
        <div style={{ display: "flex", gap: 4, borderBottom: "1px solid var(--border)", marginBottom: 36 }}>
          {tabs.map((t, i) => (
            <button key={t} onClick={() => setActiveTab(i)} style={{ padding: "10px 20px", fontSize: 14, cursor: "pointer", border: "none", borderBottom: `2px solid ${activeTab === i ? "var(--gold)" : "transparent"}`, background: "none", color: activeTab === i ? "var(--text)" : "var(--text-2)", fontFamily: "var(--font-sans)", fontWeight: activeTab === i ? 500 : 400, transition: "all 0.15s", marginBottom: -1 }}>
              {t}
            </button>
          ))}
        </div>

        {/* Profile */}
        {activeTab === 0 && (
          <div className="stagger">
            <div style={{ background: "var(--surface)", border: "1px solid var(--border-2)", borderRadius: "var(--radius-lg)", padding: 28, marginBottom: 20 }}>
              <h3 style={{ fontSize: 15, fontWeight: 500, marginBottom: 4 }}>Informații personale</h3>
              <p style={{ fontSize: 13, color: "var(--text-3)", marginBottom: 24 }}>Actualizează datele profilului tău</p>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "linear-gradient(135deg, #C9A84C, #8B6914)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, fontWeight: 600, color: "#fff" }}>A</div>
                <button style={{ padding: "7px 16px", background: "var(--surface-2)", border: "1px solid var(--border-2)", borderRadius: "var(--radius-sm)", color: "var(--text-2)", cursor: "pointer", fontSize: 13, fontFamily: "var(--font-sans)" }}>Schimbă fotografia</button>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <Input label="Prenume" value="Andrei" />
                <Input label="Nume" value="Moldovan" />
              </div>
              <Input label="Email" value="andrei@exemplu.ro" type="email" />
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 500, color: "var(--text-2)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>Monedă preferată</label>
                <select style={{ width: "100%", padding: "10px 14px", fontSize: 14, background: "var(--bg-3)", border: "1px solid var(--border-2)", borderRadius: "var(--radius-sm)", color: "var(--text)" }}>
                  <option>EUR (€)</option><option>RON (lei)</option><option>USD ($)</option>
                </select>
              </div>
              <button style={{ padding: "9px 20px", background: "var(--gold)", border: "none", borderRadius: "var(--radius-sm)", color: "#0A0A0B", cursor: "pointer", fontSize: 14, fontWeight: 600, fontFamily: "var(--font-sans)" }}>Salvează modificările</button>
            </div>
          </div>
        )}

        {/* Notifications */}
        {activeTab === 1 && (
          <div className="stagger">
            <div style={{ background: "var(--surface)", border: "1px solid var(--border-2)", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
              {[
                { title: "Email la reînnoire", desc: "Primești email cu 7 zile înainte de reînnoire", on: true },
                { title: "Notificări push", desc: "Alerte pe browser sau telefon", on: true },
                { title: "SMS la expirare", desc: "Notificare prin SMS cu 3 zile înainte", on: false },
                { title: "Alertă depășire buget", desc: "Notificare când totalul depășește limita setată", on: false },
                { title: "Raport lunar", desc: "Sumar lunar al cheltuielilor prin email", on: true },
                { title: "Tips & recomandări", desc: "Sfaturi pentru optimizarea cheltuielilor", on: true },
              ].map((item, i, arr) => (
                <div key={item.title} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 24px", borderBottom: i < arr.length - 1 ? "1px solid var(--border)" : "none" }}>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 2 }}>{item.title}</div>
                    <div style={{ fontSize: 13, color: "var(--text-3)" }}>{item.desc}</div>
                  </div>
                  <Toggle on={item.on} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Billing */}
        {activeTab === 2 && (
          <div className="stagger">
            <div style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.1), rgba(201,168,76,0.03))", border: "1px solid var(--gold-border)", borderRadius: "var(--radius-lg)", padding: 24, marginBottom: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontSize: 16, fontWeight: 600, color: "var(--gold)", marginBottom: 4 }}>Plan Pro</div>
                <div style={{ fontSize: 13, color: "var(--text-3)" }}>Următoarea factură: €4.99 pe 1 iun 2025</div>
              </div>
              <button style={{ padding: "8px 18px", background: "var(--surface)", border: "1px solid var(--border-2)", borderRadius: "var(--radius-sm)", color: "var(--text-2)", cursor: "pointer", fontSize: 13, fontFamily: "var(--font-sans)" }}>Schimbă planul</button>
            </div>
            <div style={{ background: "var(--surface)", border: "1px solid var(--border-2)", borderRadius: "var(--radius-lg)", padding: 24, marginBottom: 20 }}>
              <h3 style={{ fontSize: 14, fontWeight: 500, marginBottom: 16 }}>Metodă de plată</h3>
              <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 16px", background: "var(--bg-3)", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-2)", marginBottom: 12 }}>
                <span style={{ fontSize: 22 }}>💳</span>
                <span style={{ fontSize: 14, flex: 1 }}>Visa •••• 4242</span>
                <span style={{ fontSize: 13, color: "var(--text-3)" }}>Expiră 12/27</span>
                <span style={{ fontSize: 11, padding: "2px 8px", background: "var(--green-bg)", color: "var(--green)", borderRadius: 100, fontWeight: 500 }}>Principală</span>
              </div>
              <button style={{ padding: "8px 16px", background: "transparent", border: "1px solid var(--border-2)", borderRadius: "var(--radius-sm)", color: "var(--text-2)", cursor: "pointer", fontSize: 13, fontFamily: "var(--font-sans)" }}>+ Adaugă metodă de plată</button>
            </div>
          </div>
        )}

        {/* Security */}
        {activeTab === 3 && (
          <div className="stagger">
            <div style={{ background: "var(--surface)", border: "1px solid var(--border-2)", borderRadius: "var(--radius-lg)", padding: 28, marginBottom: 20 }}>
              <h3 style={{ fontSize: 15, fontWeight: 500, marginBottom: 4 }}>Schimbare parolă</h3>
              <p style={{ fontSize: 13, color: "var(--text-3)", marginBottom: 24 }}>Actualizează parola contului tău</p>
              <Input label="Parola curentă" type="password" />
              <Input label="Parolă nouă" type="password" />
              <Input label="Confirmă parola nouă" type="password" />
              <button style={{ padding: "9px 20px", background: "var(--gold)", border: "none", borderRadius: "var(--radius-sm)", color: "#0A0A0B", cursor: "pointer", fontSize: 14, fontWeight: 600, fontFamily: "var(--font-sans)", marginTop: 4 }}>Actualizează parola</button>
            </div>
            <div style={{ background: "rgba(224,82,82,0.05)", border: "1px solid rgba(224,82,82,0.15)", borderRadius: "var(--radius-lg)", padding: 28 }}>
              <h3 style={{ fontSize: 15, fontWeight: 500, color: "var(--red)", marginBottom: 4 }}>Zona de pericol</h3>
              <p style={{ fontSize: 13, color: "var(--text-3)", marginBottom: 20 }}>Acțiuni permanente și ireversibile</p>
              <button style={{ padding: "9px 20px", background: "var(--red-bg)", border: "1px solid rgba(224,82,82,0.2)", borderRadius: "var(--radius-sm)", color: "var(--red)", cursor: "pointer", fontSize: 14, fontWeight: 500, fontFamily: "var(--font-sans)" }}>Șterge contul definitiv</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
