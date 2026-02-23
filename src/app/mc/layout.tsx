import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'M.C. - Caldaie, Condizionatori e Impianti Idrici in Toscana | TecnoService',
  description: 'Vendita, installazione e assistenza caldaie, condizionatori e impianti idrici nelle province di Firenze, Pisa e Livorno. Riscaldamento a pavimento, irrigazione, riparazione perdite acqua.',
  keywords: 'caldaie Firenze, condizionatori Pisa, impianti idrici Livorno, riscaldamento pavimento Toscana, installazione climatizzatori Empoli, riparazione perdite acqua',
  openGraph: {
    title: 'M.C. - Caldaie, Condizionatori e Impianti Idrici | TecnoService',
    description: 'Divisione Privati: vendita e assistenza caldaie, condizionatori e impianti idrici nelle province di Firenze, Pisa e Livorno.',
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
