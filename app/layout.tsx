import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SubsTrack — Gestionează-ți subscripțiile",
  description: "Platforma premium pentru managementul subscripțiilor personale și de business.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  );
}
