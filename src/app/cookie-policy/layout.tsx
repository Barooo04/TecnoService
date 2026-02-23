import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | TecnoService a.i.r & M.C. Srl',
  description: 'Informativa sull\'uso dei cookie sul sito di TecnoService a.i.r & M.C. Srl. Cookies tecnici e di terze parti.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://tecnoserviceairsrl.it/cookie-policy',
  },
};

export default function CookieLayout({ children }: { children: React.ReactNode }) {
  return children;
}
