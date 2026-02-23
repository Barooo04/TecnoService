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
  metadataBase: new URL("https://tecnoserviceairsrl.it"),
  title: {
    default: "TecnoService a.i.r & M.C. Srl | Impianti Industriali e Residenziali Fucecchio",
    template: "%s | TecnoService a.i.r & M.C. Srl",
  },
  description: "Compressori, impianti industriali, aria compressa e chiller per aziende. Caldaie, condizionatori e impianti idrici per privati. Vendita, installazione e assistenza a Fucecchio, Empoli e provincia di Firenze.",
  keywords: "compressori industriali, impianti aria compressa, chiller, caldaie, condizionatori, impianti idrici, Fucecchio, Empoli, Firenze, Toscana, assistenza, manutenzione, TecnoService",
  authors: [{ name: "TecnoService a.i.r & M.C. Srl" }],
  openGraph: {
    title: "TecnoService a.i.r & M.C. Srl | Impianti Industriali e Residenziali",
    description: "Divisione AIR per aziende: compressori e impianti industriali. Divisione MC per privati: caldaie, condizionatori e impianti idrici. Fucecchio (FI).",
    type: "website",
    locale: "it_IT",
    url: "https://tecnoserviceairsrl.it",
    siteName: "TecnoService a.i.r & M.C. Srl",
    images: [
      {
        url: "/images/logoBlu.png",
        width: 600,
        height: 200,
        alt: "TecnoService a.i.r & M.C. Srl - Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TecnoService a.i.r & M.C. Srl | Impianti Industriali e Residenziali",
    description: "Compressori e impianti industriali per aziende. Caldaie, condizionatori e impianti idrici per privati. Fucecchio (FI).",
    images: ["/images/logoBlu.png"],
  },
  alternates: {
    canonical: "https://tecnoserviceairsrl.it",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://tecnoserviceairsrl.it/#organization",
        name: "TecnoService a.i.r & M.C. Srl",
        url: "https://tecnoserviceairsrl.it",
        logo: "https://tecnoserviceairsrl.it/images/logoBlu.png",
        email: "amministrazione.tecnoairsrl@gmail.com",
        telephone: ["+39 391 100 3135", "+39 346 800 8602"],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Via di Stieta 1",
          addressLocality: "Fucecchio",
          addressRegion: "FI",
          postalCode: "50054",
          addressCountry: "IT",
        },
        vatID: "IT07309950488",
        sameAs: [],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://tecnoserviceairsrl.it/#localbusiness",
        name: "TecnoService a.i.r & M.C. Srl",
        image: "https://tecnoserviceairsrl.it/images/logoBlu.png",
        url: "https://tecnoserviceairsrl.it",
        telephone: "+39 391 100 3135",
        email: "amministrazione.tecnoairsrl@gmail.com",
        priceRange: "€€",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Via di Stieta 1",
          addressLocality: "Fucecchio",
          addressRegion: "FI",
          postalCode: "50054",
          addressCountry: "IT",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 43.7264,
          longitude: 10.8128,
        },
        areaServed: [
          { "@type": "City", name: "Fucecchio" },
          { "@type": "City", name: "Empoli" },
          { "@type": "City", name: "Certaldo" },
          { "@type": "AdministrativeArea", name: "Provincia di Firenze" },
          { "@type": "AdministrativeArea", name: "Toscana" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servizi TecnoService",
          itemListElement: [
            {
              "@type": "OfferCatalog",
              name: "AIR - Divisione Aziende",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Compressori Industriali", description: "Vendita, installazione e manutenzione compressori a vite e pistoni" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Impianti Industriali", description: "Progettazione e realizzazione impianti industriali ad aria compressa" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Trattamento Aria Compressa", description: "Essiccatori, filtri e sistemi di trattamento aria compressa" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Chiller Industriali", description: "Gruppi frigoriferi e chiller per raffreddamento industriale" } },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "MC - Divisione Privati",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Caldaie", description: "Vendita, installazione e manutenzione caldaie a condensazione e tradizionali" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Condizionatori", description: "Installazione e assistenza climatizzatori e condizionatori" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Impianti Idrici", description: "Irrigazione, riparazione perdite acqua, riscaldamento a pavimento" } },
              ],
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://tecnoserviceairsrl.it/#website",
        url: "https://tecnoserviceairsrl.it",
        name: "TecnoService a.i.r & M.C. Srl",
        publisher: { "@id": "https://tecnoserviceairsrl.it/#organization" },
        inLanguage: "it-IT",
      },
    ],
  };

  return (
    <html lang="it" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
