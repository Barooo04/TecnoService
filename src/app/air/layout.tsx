import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'A.I.R - Compressori e Impianti Industriali Fucecchio | TecnoService',
  description: 'Vendita, installazione e manutenzione di compressori industriali, impianti ad aria compressa, chiller e gruppi frigoriferi a Fucecchio, Empoli e provincia di Firenze. Assistenza H24.',
  keywords: 'compressori industriali Fucecchio, impianti aria compressa Firenze, chiller industriali Empoli, trattamento aria compressa Toscana, compressori a vite, gruppi frigoriferi',
  openGraph: {
    title: 'A.I.R - Compressori e Impianti Industriali | TecnoService',
    description: 'Divisione Aziende: compressori, impianti industriali, trattamento aria compressa e chiller a Fucecchio e provincia di Firenze.',
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
