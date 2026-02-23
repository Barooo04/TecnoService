import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contatti - Preventivo Gratuito | TecnoService Fucecchio',
  description: 'Contatta TecnoService a.i.r & M.C. Srl per preventivi gratuiti su compressori, caldaie, condizionatori e impianti idrici. Sede a Fucecchio (FI). Tel: +39 391 100 3135.',
  keywords: 'contatti TecnoService, preventivo compressori, preventivo caldaie Fucecchio, assistenza condizionatori Empoli, numero telefono TecnoService',
  openGraph: {
    title: 'Contattaci per un Preventivo Gratuito | TecnoService',
    description: 'Richiedi un preventivo gratuito per compressori, caldaie, condizionatori e impianti idrici. Sede a Fucecchio (FI).',
    type: 'website',
    locale: 'it_IT',
    url: 'https://tecnoserviceairsrl.it/contatti',
  },
  alternates: {
    canonical: 'https://tecnoserviceairsrl.it/contatti',
  },
};

export default function ContattiLayout({ children }: { children: React.ReactNode }) {
  return children;
}
