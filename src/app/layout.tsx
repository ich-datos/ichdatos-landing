import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const nunito = Inter({
  subsets: ["latin"],
  weight: ['300', '800'], // o los pesos que necesites,
});


export const metadata: Metadata = {
  title: "ICH",
  description: "Powered by ICH",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={nunito.className}>
      <body>{children}</body>
    </html>
  );
}