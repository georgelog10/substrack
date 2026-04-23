"use client";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const tabs = ["Profil", "Notificări", "Securitate"];

function Toggle({ on = false }: { on?: boolean }) {
  const [active, setActive] = useState(on);
  return (
    <div onClick={() => setActive(!active)} style={{ width: 42, height: 24, borderRadius: 12, background: active ? "var(--emerald)" : "var(--bg-3)", cursor: "pointer", position: "relative", transition: "background 0.2s", flexShrink: 0, border: `1px solid ${active ? "var(--emerald)" : "var(--border-2)"}` }}>
      <div style={{ position: "absolute", width: 18, height: 18, borderRadius: "50%", background: "#fff", top: 2, left: active ? 20 : 2, transition: "left 0.2s", boxShadow: "0 1px 3px rgba(0,0,0,0.15)" }}></div>
    </div>
  );
}

function Field({ label, value, type = "text" }: { label: string; value?: string; type?: string }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--text-2)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</label>
      <input type={type} defaultValue={value} style={{ width: "100%", padding: "10px 13px", fontSize: 14 }} />
    </div>
  );
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar />
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "80px 1.5rem 48px" }}>
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontSize: 13, color: "var(--text-3)", marginBottom: 4 }}>Cont</div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px,3vw,34px)", fontWeight: 500 }}>Setări</h1>
        </div>

        <div style={{ display: "flex", gap: 2, borderBottom: "1px solid var(--border-2)", marginBottom: 32 }}>
          {tabs.map((t, i) => (
            <button key={t} onClick={() => setActiveTab(i)} style={{ padding: "10px 20px", fontSize: 14, cursor: "pointer", border: "none", borderBottom: `2px solid ${activeTab === i ? "var(--emerald)" : "transparent"}`, background: "none", color: activeTab === i ? "var(--emerald)" : "var(--text-2)", fontFamily: "var(--font-sans)", fontWeight: activeTab === i ? 600 : 400, transition: "all 0.15s", marginBottom: -1 }}>
              {t}
            </button>
          ))}
        </div>

        {activeTab === 0 && (
          <div className="stagger">
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: 28, boxShadow: "var(--shadow-sm)" }}>
              <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>Informații personale</h3>
              <p style={{ fontSize: 13, color: "var(--text-3)", marginBottom: 24 }}>Actualizează datele profilului tău</p>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "linear-gradient(135deg, #1A7A5A, #0D5040)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, fontWeight: 600, color: "#fff" }}>A</div>
                <button style={{ padding: "7px 16px", background: "var(--surface)", border: "1px solid var(--border-2)", borderRadius: "var(--radius-sm)", color: "var(--text-2)", cursor: "pointer", fontSize: 13, fontFamily: "var(--font-sans)", boxShadow: "var(--shadow-sm)" }}>Schimbă fotografia</button>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <Field label="Prenume" value="Andrei" />
                <Field label="Nume" value="Moldovan" />
              </div>
              <Field label="Email" value="andrei@exemplu.ro" type="email" />
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--text-2)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>Monedă preferată</label>
                <select style={{ width: "100%", padding: "10px 13px", fontSize: 14 }}>
                  <option>EUR (€)</option><option>RON (lei)</option><option>USD ($)</option>
                </select>
              </div>
              <button style={{ padding: "9px 20px", background: "var(--emerald)", border: "none", borderRadius: "var(--radius-sm)", color: "#fff", cursor: "pointer", fontSize: 14, fontWeight: 600, fontFamily: "var(--font-sans)", boxShadow: "0 2px 8px rgba(26,122,90,0.2)" }}>Salvează modificările</button>
            </div>
          </div>
        )}

        {activeTab === 1 && (
          <div className="stagger">
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
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

        {activeTab === 2 && (
          <div className="stagger">
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: 28, marginBottom: 18, boxShadow: "var(--shadow-sm)" }}>
              <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>Schimbare parolă</h3>
              <p style={{ fontSize: 13, color: "var(--text-3)", marginBottom: 22 }}>Actualizează parola contului tău</p>
              <Field label="Parola curentă" type="password" />
              <Field label="Parolă nouă" type="password" />
              <Field label="Confirmă parola nouă" type="password" />
              <button style={{ padding: "9px 20px", background: "var(--emerald)", border: "none", borderRadius: "var(--radius-sm)", color: "#fff", cursor: "pointer", fontSize: 14, fontWeight: 600, fontFamily: "var(--font-sans)", marginTop: 4 }}>Actualizează parola</button>
            </div>
            <div style={{ background: "rgba(192,57,43,0.04)", border: "1px solid rgba(192,57,43,0.15)", borderRadius: "var(--radius-lg)", padding: 28 }}>
              <h3 style={{ fontSize: 15, fontWeight: 600, color: "var(--red)", marginBottom: 4 }}>Zona de pericol</h3>
              <p style={{ fontSize: 13, color: "var(--text-3)", marginBottom: 18 }}>Acțiuni permanente și ireversibile</p>
              <button style={{ padding: "9px 20px", background: "rgba(192,57,43,0.07)", border: "1px solid rgba(192,57,43,0.2)", borderRadius: "var(--radius-sm)", color: "var(--red)", cursor: "pointer", fontSize: 14, fontWeight: 500, fontFamily: "var(--font-sans)" }}>Șterge contul definitiv</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
