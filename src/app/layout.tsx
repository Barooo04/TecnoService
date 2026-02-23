import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TecnoService a.i.r & M.C | Impianti Industriali e Residenziali",
  description: "Compressori, impianti industriali, aria compressa e chiller per aziende. Caldaie, condizionatori e impianti idrici per privati. Vendita, installazione e assistenza a Fucecchio e provincia di Firenze.",
  keywords: "compressori, impianti industriali, aria compressa, chiller, caldaie, condizionatori, impianti idrici, Fucecchio, Firenze, assistenza",
  openGraph: {
    title: "TecnoService a.i.r & M.C | Impianti Industriali e Residenziali",
    description: "Compressori e impianti industriali per aziende. Caldaie, condizionatori e impianti idrici per privati.",
    type: "website",
    locale: "it_IT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
