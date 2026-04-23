"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Settings, BarChart3, CreditCard, LayoutDashboard } from "lucide-react";
import Logo from "@/components/Logo";

const appNavItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/subscriptions", label: "Abonamente", icon: CreditCard },
  { href: "/analytics", label: "Analize", icon: BarChart3 },
  { href: "/settings", label: "Setări", icon: Settings },
];

const publicNavItems = [
  { href: "/features", label: "Funcționalități" },
  { href: "/about", label: "Despre noi" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isApp = ["/dashboard", "/subscriptions", "/analytics", "/settings"].some(p => pathname.startsWith(p));

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: "rgba(247,245,240,0.92)",
      backdropFilter: "blur(16px)",
      borderBottom: "1px solid var(--border-2)",
      height: 60,
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 1.5rem" }}>
        <Logo />

        {/* Nav links */}
        {isApp ? (
          <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
            {appNavItems.map(item => {
              const Icon = item.icon;
              const active = pathname === item.href;
              return (
                <Link key={item.href} href={item.href} style={{
                  display: "flex", alignItems: "center", gap: 6,
                  padding: "6px 13px", borderRadius: "var(--radius-sm)",
                  textDecoration: "none", fontSize: 14, fontWeight: 500,
                  color: active ? "var(--emerald)" : "var(--text-2)",
                  background: active ? "var(--emerald-bg)" : "transparent",
                  border: `1px solid ${active ? "var(--emerald-border)" : "transparent"}`,
                  transition: "all 0.15s",
                }}>
                  <Icon size={15} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {publicNavItems.map(item => (
              <Link key={item.href} href={item.href} style={{
                padding: "6px 14px", borderRadius: "var(--radius-sm)",
                textDecoration: "none", fontSize: 14,
                color: pathname === item.href ? "var(--text)" : "var(--text-2)",
                transition: "color 0.15s",
              }}>{item.label}</Link>
            ))}
          </div>
        )}

        {/* Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {isApp ? (
            <>
              <button style={{
                width: 34, height: 34, borderRadius: "var(--radius-sm)",
                background: "var(--surface)", border: "1px solid var(--border-2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", position: "relative", boxShadow: "var(--shadow-sm)",
              }}>
                <Bell size={15} color="var(--text-2)" />
                <span style={{ position: "absolute", top: 7, right: 7, width: 6, height: 6, borderRadius: "50%", background: "var(--emerald)", border: "1.5px solid var(--bg)" }}></span>
              </button>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #1A7A5A, #0D5040)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 600, color: "#fff", cursor: "pointer" }}>A</div>
            </>
          ) : (
            <>
              <Link href="/dashboard" style={{ padding: "7px 16px", fontSize: 14, color: "var(--text-2)", textDecoration: "none", fontWeight: 500 }}>Intră în cont</Link>
              <Link href="/dashboard" style={{
                padding: "8px 18px", fontSize: 14, fontWeight: 600,
                background: "var(--emerald)", color: "#fff",
                borderRadius: "var(--radius-sm)", textDecoration: "none",
                boxShadow: "0 2px 8px rgba(26,122,90,0.25)",
              }}>
                Înregistrare gratuită
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
