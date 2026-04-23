"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Settings, BarChart3, CreditCard, LayoutDashboard } from "lucide-react";
import { useState } from "react";
import Logo from "@/components/Logo";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/subscriptions", label: "Subscripții", icon: CreditCard },
  { href: "/analytics", label: "Analize", icon: BarChart3 },
  { href: "/settings", label: "Setări", icon: Settings },
];

export default function Navbar() {
  const pathname = usePathname();
  const isApp = ["/dashboard", "/subscriptions", "/analytics", "/settings"].some(p => pathname.startsWith(p));
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: "rgba(10,10,11,0.85)", backdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      height: 60
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 1.5rem" }}>
        {/* Logo */}
        <Logo />

        {/* Nav links */}
        {isApp ? (
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {navItems.map(item => {
              const Icon = item.icon;
              const active = pathname === item.href;
              return (
                <Link key={item.href} href={item.href} style={{
                  display: "flex", alignItems: "center", gap: 6,
                  padding: "6px 12px", borderRadius: "var(--radius-sm)",
                  textDecoration: "none", fontSize: 14, fontWeight: 500,
                  color: active ? "var(--text)" : "var(--text-2)",
                  background: active ? "var(--surface-2)" : "transparent",
                  border: active ? "1px solid var(--border-2)" : "1px solid transparent",
                  transition: "all 0.15s",
                }}>
                  <Icon size={15} />
                  <span className="hidden md:inline">{item.label}</span>
                </Link>
              );
            })}
          </div>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {[
              { href: "/features", label: "Funcționalități" },
              { href: "/pricing", label: "Prețuri" },
              { href: "/about", label: "Despre noi" },
            ].map(item => (
              <Link key={item.href} href={item.href} style={{
                padding: "6px 14px", borderRadius: "var(--radius-sm)",
                textDecoration: "none", fontSize: 14, fontWeight: 400,
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
              <button style={{ width: 34, height: 34, borderRadius: "var(--radius-sm)", background: "var(--surface)", border: "1px solid var(--border-2)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", position: "relative" }}>
                <Bell size={15} color="var(--text-2)" />
                <span style={{ position: "absolute", top: 7, right: 7, width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", border: "1.5px solid var(--bg)" }}></span>
              </button>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #C9A84C, #8B6914)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 600, color: "#fff", cursor: "pointer" }}>A</div>
            </>
          ) : (
            <>
              <Link href="/dashboard" style={{ padding: "7px 16px", fontSize: 14, color: "var(--text-2)", textDecoration: "none", fontWeight: 500 }}>Intră în cont</Link>
              <Link href="/dashboard" style={{ padding: "8px 18px", fontSize: 14, fontWeight: 500, background: "var(--gold)", color: "#0A0A0B", borderRadius: "var(--radius-sm)", textDecoration: "none", transition: "background 0.15s" }}>
                Încearcă gratuit
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
