import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'A.I.R - Compressori e Impianti Industriali in Toscana | TecnoService',
  description: 'Vendita, installazione e manutenzione di compressori industriali, impianti ad aria compressa, chiller e gruppi frigoriferi nelle province di Firenze, Pisa e Livorno. Assistenza H24.',
  keywords: 'compressori industriali Toscana, impianti aria compressa Firenze, chiller industriali Pisa, trattamento aria compressa Livorno, compressori a vite, gruppi frigoriferi Empoli',
  openGraph: {
    title: 'A.I.R - Compressori e Impianti Industriali | TecnoService',
    description: 'Divisione Aziende: compressori, impianti industriali, trattamento aria compressa e chiller nelle province di Firenze, Pisa e Livorno.',
    type: 'website',
    locale: 'it_IT',
    url: 'https://tecnoserviceairsrl.it/air',
  },
  alternates: {
    canonical: 'https://tecnoserviceairsrl.it/air',
  },
};

export default function AirLayout({ children }: { children: React.ReactNode }) {
  return children;
}
