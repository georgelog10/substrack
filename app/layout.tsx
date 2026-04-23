import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abonat — Gestionează-ți abonamentele",
  description: "Platforma gratuită pentru managementul abonamentelor digitale. 100% gratuit, fără card bancar.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  );
}
