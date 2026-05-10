import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TeklifJet | Ajans ve freelancerlar için para kazandıran teklif takip sistemi",
  description:
    "TeklifJet, Türk ajans ve freelancerların 10 dakikada profesyonel teklif çıkarıp müşteri takibi yapmasına yardım eden mikro-SaaS MVP'sidir.",
  openGraph: {
    title: "TeklifJet",
    description: "Teklif PDF + müşteri takip + kapanış scripti. İlk pilot hedefi: ₺499.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
