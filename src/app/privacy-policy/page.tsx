import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | TecnoService a.i.r & M.C. Srl',
  description: 'Informativa sulla privacy ai sensi del Regolamento UE 2016/679 (GDPR)',
};

export default function PrivacyPolicyPage() {
  return (
    <div style={{ paddingTop: '140px', paddingBottom: '80px' }}>
      <div className="container-main" style={{ maxWidth: '800px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px', color: '#1e293b' }}>Privacy Policy</h1>
        <p style={{ color: '#64748b', marginBottom: '48px' }}>
          Informativa sul trattamento dei dati personali ai sensi dell&apos;art. 13 del Regolamento UE 2016/679 (GDPR)
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', color: '#334155', lineHeight: 1.8, fontSize: '1rem' }}>
          <section>
            <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginBottom: '12px' }}>1. Titolare del trattamento</h2>
            <p>
              Il Titolare del trattamento dei dati personali è <strong>TecnoService a.i.r &amp; M.C. Srl</strong> (P.IVA 07309950488), con sede legale in 
              Via Della Lama 12/M, 50052 Certaldo (FI) e sede operativa in Via di Stieta 1, 50054 Fucecchio (FI).
            </p>
            <p>
              Email di contatto: <a href="mailto:amministrazione.tecnoairsrl@gmail.com" style={{ color: '#0ea5e9' }}>amministrazione.tecnoairsrl@gmail.com</a><br />
              Telefono: <a href="tel:+393911003135" style={{ color: '#0ea5e9' }}>+39 391 100 3135</a>
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginBottom: '12px' }}>2. Dati raccolti</h2>
            <p>Attraverso il presente sito web, raccogliamo le seguenti categorie di dati personali:</p>
            <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><strong>Dati di contatto forniti volontariamente:</strong> nome e cognome, indirizzo email, numero di telefono, tipologia di servizio richiesto e messaggio, inseriti tramite il modulo di contatto presente sul sito.</li>
              <li><strong>Dati di navigazione:</strong> dati tecnici raccolti automaticamente durante la navigazione, come indirizzo IP, tipo di browser, sistema operativo, pagine visitate e durata della visita.</li>
              <li><strong>Cookie:</strong> il sito utilizza cookie tecnici e di terze parti. Per maggiori informazioni, consulta la nostra <Link href="/cookie-policy" style={{ color: '#0ea5e9' }}>Cookie Policy</Link>.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginBottom: '12px' }}>3. Finalità del trattamento</h2>
            <p>I dati personali sono trattati per le seguenti finalità:</p>
            <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><strong>Rispondere alle richieste di contatto:</strong> i dati inseriti nel modulo di contatto vengono utilizzati esclusivamente per rispondere alla richiesta dell&apos;utente, fornire preventivi e informazioni sui servizi offerti.</li>
              <li><strong>Adempimenti di legge:</strong> adempiere ad obblighi previsti dalla legge, da regolamenti o dalla normativa comunitaria.</li>
              <li><strong>Miglioramento del servizio:</strong> analizzare i dati di navigazione in forma aggregata e anonima per migliorare il funzionamento del sito.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginBottom: '12px' }}>4. Base giuridica del trattamento</h2>
            <p>Il trattamento dei dati personali si basa su:</p>
            <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><strong>Consenso dell&apos;interessato</strong> (art. 6, par. 1, lett. a del GDPR): per l&apos;invio del modulo di contatto.</li>
              <li><strong>Legittimo interesse del Titolare</strong> (art. 6, par. 1, lett. f del GDPR): per la gestione tecnica del sito web e l&apos;analisi dei dati di navigazione in forma anonima.</li>
              <li><strong>Obbligo legale</strong> (art. 6, par. 1, lett. c del GDPR): per adempiere a obblighi normativi.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginBottom: '12px' }}>5. Modalità di trattamento e conservazione</h2>
            <p>
              I dati personali sono trattati con strumenti elettronici e/o manuali, con logiche strettamente correlate alle finalità sopra indicate 
              e comunque in modo da garantire la sicurezza e la riservatezza dei dati stessi.
            </p>
            <p>
              I dati forniti tramite il modulo di contatto saranno conservati per il tempo strettamente necessario a gestire la richiesta e, 
              successivamente, per un periodo massimo di <strong>24 mesi</strong> dalla raccolta, salvo obblighi di legge che ne impongano una conservazione più lunga.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginBottom: '12px' }}>6. Comunicazione e diffusione dei dati</h2>
            <p>
              I dati personali non saranno diffusi a terzi. Potranno essere comunicati a:
            </p>
            <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Soggetti che forniscono servizi di hosting e manutenzione del sito (Vercel Inc.).</li>
              <li>Soggetti, enti o autorità a cui la comunicazione sia obbligatoria in forza di disposizioni di legge o di ordini delle autorità.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginBottom: '12px' }}>7. Trasferimento dati extra UE</h2>
            <p>
              I dati personali potrebbero essere trasferiti verso Paesi al di fuori dell&apos;Unione Europea (in particolare negli Stati Uniti) 
              in quanto il sito è ospitato su infrastrutture di Vercel Inc. Tali trasferimenti avvengono nel rispetto delle garanzie previste 
              dal GDPR, incluse le Clausole Contrattuali Standard approvate dalla Commissione Europea.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginBottom: '12px' }}>8. Diritti dell&apos;interessato</h2>
            <p>Ai sensi degli artt. 15-22 del GDPR, l&apos;utente ha diritto di:</p>
            <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Accedere ai propri dati personali e ottenerne copia.</li>
              <li>Richiedere la rettifica o la cancellazione dei dati.</li>
              <li>Richiedere la limitazione del trattamento.</li>
              <li>Opporsi al trattamento.</li>
              <li>Richiedere la portabilità dei dati.</li>
              <li>Revocare il consenso in qualsiasi momento, senza pregiudicare la liceità del trattamento basata sul consenso prima della revoca.</li>
              <li>Proporre reclamo al Garante per la Protezione dei Dati Personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" style={{ color: '#0ea5e9' }}>www.garanteprivacy.it</a>).</li>
            </ul>
            <p style={{ marginTop: '12px' }}>
              Per esercitare i propri diritti, è possibile inviare una richiesta scritta a: <a href="mailto:amministrazione.tecnoairsrl@gmail.com" style={{ color: '#0ea5e9' }}>amministrazione.tecnoairsrl@gmail.com</a>
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginBottom: '12px' }}>9. Modifiche alla presente informativa</h2>
            <p>
              Il Titolare si riserva il diritto di apportare modifiche alla presente informativa in qualsiasi momento, dandone pubblicità 
              sul sito web. Si prega di consultare regolarmente questa pagina per prendere visione dell&apos;ultima versione aggiornata.
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
