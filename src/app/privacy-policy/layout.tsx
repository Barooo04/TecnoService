import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | TecnoService a.i.r & M.C. Srl',
  description: 'Informativa sulla privacy di TecnoService a.i.r & M.C. Srl. Scopri come trattiamo i tuoi dati personali in conformità al GDPR.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://tecnoserviceairsrl.it/privacy-policy',
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
