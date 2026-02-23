import Link from 'next/link';

export const metadata = {
  title: 'Cookie Policy | TecnoService a.i.r & M.C. Srl',
  description: 'Informativa sull\'utilizzo dei cookie ai sensi del Regolamento UE 2016/679 (GDPR) e della Direttiva 2002/58/CE',
};

export default function CookiePolicyPage() {
  return (
    <div style={{ paddingTop: '140px', paddingBottom: '80px' }}>
      <div className="container-main" style={{ maxWidth: '800px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px', color: '#1e293b' }}>Cookie Policy</h1>
        <p style={{ color: '#64748b', marginBottom: '48px' }}>
          Informativa sull&apos;utilizzo dei cookie ai sensi del Regolamento UE 2016/679 (GDPR) e della Direttiva 2002/58/CE (ePrivacy)
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', color: '#334155', lineHeight: 1.8, fontSize: '1rem' }}>
          <section>
            <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginBottom: '12px' }}>1. Cosa sono i cookie</h2>
            <p>
              I cookie sono piccoli file di testo che i siti web visitati dall&apos;utente inviano al browser e che vengono memorizzati 
              sul dispositivo dell&apos;utente (computer, tablet, smartphone). I cookie vengono poi ritrasmessi ai siti web che li hanno 
              generati ad ogni visita successiva, oppure a siti diversi che li riconoscono.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginBottom: '12px' }}>2. Titolare del trattamento</h2>
            <p>
              Il Titolare del trattamento è <strong>TecnoService a.i.r &amp; M.C. Srl</strong> (P.IVA 07309950488), con sede legale in 
              Via Della Lama 12/M, 50052 Certaldo (FI).<br />
              Email: <a href="mailto:amministrazione.tecnoairsrl@gmail.com" style={{ color: '#0ea5e9' }}>amministrazione.tecnoairsrl@gmail.com</a>
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginBottom: '12px' }}>3. Tipologie di cookie utilizzati</h2>
            
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginBottom: '8px', marginTop: '20px' }}>3.1 Cookie tecnici (necessari)</h3>
            <p>
              Sono cookie indispensabili per il corretto funzionamento del sito. Non richiedono il consenso dell&apos;utente.
            </p>
            <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '20px', margin: '12px 0', border: '1px solid #e2e8f0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
                    <th style={{ textAlign: 'left', padding: '8px 12px', color: '#1e293b' }}>Cookie</th>
                    <th style={{ textAlign: 'left', padding: '8px 12px', color: '#1e293b' }}>Fornitore</th>
                    <th style={{ textAlign: 'left', padding: '8px 12px', color: '#1e293b' }}>Finalità</th>
                    <th style={{ textAlign: 'left', padding: '8px 12px', color: '#1e293b' }}>Durata</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '8px 12px' }}>__vercel_live_token</td>
                    <td style={{ padding: '8px 12px' }}>Vercel</td>
                    <td style={{ padding: '8px 12px' }}>Funzionamento della piattaforma di hosting</td>
                    <td style={{ padding: '8px 12px' }}>Sessione</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginBottom: '8px', marginTop: '20px' }}>3.2 Cookie di terze parti</h3>
            <p>
              Il sito incorpora contenuti di terze parti che possono installare cookie propri:
            </p>
            <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '20px', margin: '12px 0', border: '1px solid #e2e8f0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
                    <th style={{ textAlign: 'left', padding: '8px 12px', color: '#1e293b' }}>Servizio</th>
                    <th style={{ textAlign: 'left', padding: '8px 12px', color: '#1e293b' }}>Fornitore</th>
                    <th style={{ textAlign: 'left', padding: '8px 12px', color: '#1e293b' }}>Finalità</th>
                    <th style={{ textAlign: 'left', padding: '8px 12px', color: '#1e293b' }}>Privacy Policy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '8px 12px' }}>Google Maps</td>
                    <td style={{ padding: '8px 12px' }}>Google LLC</td>
                    <td style={{ padding: '8px 12px' }}>Visualizzazione mappe interattive nella pagina contatti</td>
                    <td style={{ padding: '8px 12px' }}><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#0ea5e9' }}>Link</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Google Maps può installare cookie di profilazione e tracciamento. Per maggiori dettagli sulle tipologie di cookie 
              utilizzati da Google, consultare la <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" style={{ color: '#0ea5e9' }}>pagina dedicata di Google</a>.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginBottom: '12px' }}>4. Gestione dei cookie</h2>
            <p>
              L&apos;utente può gestire le preferenze sui cookie direttamente tramite le impostazioni del proprio browser. 
              Di seguito i link alle istruzioni per i browser più comuni:
            </p>
            <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" style={{ color: '#0ea5e9' }}>Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop" target="_blank" rel="noopener noreferrer" style={{ color: '#0ea5e9' }}>Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" style={{ color: '#0ea5e9' }}>Safari</a></li>
              <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" style={{ color: '#0ea5e9' }}>Microsoft Edge</a></li>
            </ul>
            <p style={{ marginTop: '12px' }}>
              La disabilitazione dei cookie potrebbe limitare la possibilità di utilizzare alcune funzionalità del sito.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginBottom: '12px' }}>5. Diritti dell&apos;utente</h2>
            <p>
              Ai sensi degli artt. 15-22 del GDPR, l&apos;utente ha diritto di accesso, rettifica, cancellazione, limitazione, 
              opposizione e portabilità dei propri dati, nonché di proporre reclamo al <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" style={{ color: '#0ea5e9' }}>Garante per la Protezione dei Dati Personali</a>.
            </p>
            <p>
              Per maggiori informazioni sul trattamento dei dati personali, consulta la nostra <Link href="/privacy-policy" style={{ color: '#0ea5e9' }}>Privacy Policy</Link>.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginBottom: '12px' }}>6. Aggiornamenti</h2>
            <p>
              La presente Cookie Policy può essere soggetta a modifiche. Si consiglia di visitare periodicamente 
              questa pagina per essere informati su eventuali cambiamenti.
            </p>
          </section>

          <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginTop: '24px', paddingTop: '24px', borderTop: '1px solid #e2e8f0' }}>
            Ultimo aggiornamento: Febbraio 2026
          </p>
        </div>
      </div>
    </div>
  );
}
