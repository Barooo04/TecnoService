import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'M.C. - Caldaie, Condizionatori e Impianti Idrici Fucecchio | TecnoService',
  description: 'Vendita, installazione e assistenza caldaie, condizionatori e impianti idrici a Fucecchio, Empoli e provincia di Firenze. Riscaldamento a pavimento, irrigazione, riparazione perdite acqua.',
  keywords: 'caldaie Fucecchio, condizionatori Empoli, impianti idrici Firenze, riscaldamento pavimento, installazione climatizzatori, riparazione perdite acqua Toscana',
  openGraph: {
    title: 'M.C. - Caldaie, Condizionatori e Impianti Idrici | TecnoService',
    description: 'Divisione Privati: vendita e assistenza caldaie, condizionatori e impianti idrici a Fucecchio e provincia di Firenze.',
    type: 'website',
    locale: 'it_IT',
    url: 'https://tecnoserviceairsrl.it/mc',
  },
  alternates: {
    canonical: 'https://tecnoserviceairsrl.it/mc',
  },
};

export default function McLayout({ children }: { children: React.ReactNode }) {
  return children;
}
