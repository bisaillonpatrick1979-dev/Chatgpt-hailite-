import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hailite Manager",
  description: "Construction management app for exterior contractors",
  manifest: "/manifest.json"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
