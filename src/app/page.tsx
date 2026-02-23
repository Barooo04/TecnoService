'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Snowflake, 
  Flame, 
  Droplets, 
  Wind, 
  Wrench, 
  Shield,
  ArrowRight,
  Star,
  Building2,
  User,
  CheckCircle,
  Phone,
  Factory,
  Gauge
} from 'lucide-react';

// Dati servizi
const services = [
  { icon: Factory, title: 'Compressori', description: 'Vendita, installazione e manutenzione di compressori industriali per ogni esigenza produttiva.', color: 'sky' },
  { icon: Wind, title: 'Trattamento Aria Compressa', description: 'Sistemi di filtrazione, essiccazione e trattamento dell\'aria compressa per garantire qualità e prestazioni.', color: 'cyan' },
  { icon: Snowflake, title: 'Chiller Industriali', description: 'Installazione e assistenza di gruppi frigoriferi industriali per il raffreddamento di processi produttivi.', color: 'green' },
  { icon: Flame, title: 'Caldaie', description: 'Vendita, installazione e assistenza caldaie a condensazione, tradizionali e a pompa di calore per la tua casa.', color: 'orange' },
  { icon: Gauge, title: 'Condizionatori', description: 'Climatizzatori split, multi-split e canalizzati delle migliori marche con installazione certificata.', color: 'purple' },
  { icon: Droplets, title: 'Impianti Idrici', description: 'Impianti di irrigazione, riscaldamento a pavimento, rilevazione e riparazione perdite acqua.', color: 'red' }
];

// Dati recensioni
const reviews = [
  { stars: 5, text: 'Servizio impeccabile, puntuali e professionali. Il mio impianto ora funziona perfettamente!', name: 'Marco R.', location: 'Fucecchio' },
  { stars: 5, text: 'Tecnici gentili e disponibili, hanno risolto il problema in pochissimo tempo. Consigliatissimi!', name: 'Laura B.', location: 'Certaldo' },
  { stars: 5, text: 'Ho apprezzato la trasparenza e la chiarezza nel preventivo. Lavoro svolto a regola d\'arte.', name: 'Giulia S.', location: 'Empoli' },
  { stars: 5, text: 'Assistenza clienti sempre disponibile, mi hanno seguito passo passo anche dopo l\'installazione.', name: 'Davide F.', location: 'San Miniato' },
  { stars: 5, text: 'Consiglio TecnoService a chi cerca affidabilità e qualità. Prezzi onesti e personale qualificato.', name: 'Serena L.', location: 'Castelfiorentino' },
  { stars: 5, text: 'Intervento rapido e risolutivo. Finalmente ho trovato un\'azienda seria su cui contare.', name: 'Andrea M.', location: 'Montopoli' }
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="/images/videoHero.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-badge">
            Certificati F-GAS • Due divisioni specializzate
          </span>
          <h1 className="hero-title">
            Soluzioni per Aziende e Privati
            <span className="hero-title-gradient">Impianti Industriali e Residenziali</span>
          </h1>
          <p className="hero-description">
            TecnoService a.i.r &amp; M.C: due anime, un unico obiettivo. Compressori e impianti industriali 
            per le aziende, caldaie, condizionatori e impianti idrici per la tua casa.
          </p>
          <div className="hero-buttons">
            <Link href="/contatti" className="btn btn-primary">
              Richiedi Preventivo <ArrowRight size={20} />
            </Link>
            <a href="tel:+393911003135" className="btn btn-secondary">
              <Phone size={20} /> Chiama Ora
            </a>
          </div>
        </motion.div>
      </section>

      {/* Strip Servizi */}
      <section className="strip">
        <div className="strip-content">
          {[
            { icon: Factory, label: 'Compressori' },
            { icon: Wind, label: 'Aria Compressa' },
            { icon: Snowflake, label: 'Chiller' },
            { icon: Flame, label: 'Caldaie' },
            { icon: Gauge, label: 'Condizionatori' },
            { icon: Droplets, label: 'Impianti Idrici' }
          ].map((item) => (
            <div key={item.label} className="strip-item">
              <item.icon size={24} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Chi Siamo */}
      <section className="section bg-white">
        <div className="container-main">
          <div className="grid-2">
            <motion.div 
              className="image-container"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/team.jpg"
                alt="Il nostro team"
                width={600}
                height={550}
                className="image-main"
              />
              <div className="image-badge">
                <div className="image-badge-number">15+</div>
                <div className="image-badge-text">Anni di Esperienza</div>
              </div>
            </motion.div>

            <motion.div 
              className="content-block"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="content-label">Chi Siamo</span>
              <h2 className="content-title">Due Divisioni, Un&apos;Unica Eccellenza</h2>
              <p className="content-text">
                TecnoService nasce dall&apos;unione di due competenze complementari: il mondo industriale 
                e quello residenziale. Ogni giorno affianchiamo aziende e famiglie con soluzioni 
                su misura, tecnici qualificati e un servizio trasparente.
              </p>
              <p className="content-text">
                <strong>A.I.R</strong> è la divisione dedicata alle aziende: compressori, impianti industriali, 
                trattamento aria compressa e chiller. <strong>M.C.</strong> si occupa dei privati con vendita 
                e assistenza su caldaie, condizionatori e impianti idrici.
              </p>
              
              <ul className="content-list">
                {['Interventi rapidi e puntuali', 'Tecnici certificati e aggiornati', 'Ricambi originali garantiti', 'Trasparenza su prezzi e preventivi'].map((item) => (
                  <li key={item} className="content-list-item">
                    <CheckCircle size={22} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contatti" className="btn btn-primary">
                Scopri di Più <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certificazione F-GAS */}
      <section className="section bg-gray-50">
        <div className="container-main">
          <motion.div 
            className="cert-box"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/logo-certificazione-fgas.jpg"
              alt="Certificazione F-GAS"
              width={180}
              height={90}
              className="cert-logo"
            />
            <div>
              <h3 className="cert-title">
                Azienda Certificata <span>F-GAS</span>
              </h3>
              <p className="cert-text">
                TecnoService è azienda certificata F-GAS: sicurezza, qualità e rispetto delle 
                normative europee per la gestione dei gas fluorurati. La tua garanzia di un 
                lavoro a regola d&apos;arte.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Servizi */}
      <section className="section bg-white">
        <div className="container-main">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">I Nostri Servizi</span>
            <h2 className="section-title">Soluzioni Complete per Aziende e Privati</h2>
            <p className="section-subtitle">
              Dall&apos;industria alla tua casa: compressori, chiller e aria compressa per le aziende, 
              caldaie, condizionatori e impianti idrici per i privati.
            </p>
          </motion.div>

          <div className="grid-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`card-icon card-icon-${service.color}`}>
                  <service.icon size={28} />
                </div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-description">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sei Privato o Azienda */}
      <section className="split-section">
        <motion.div 
          className="split-item split-item-sky"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="split-content">
            <div className="split-icon">
              <Building2 size={40} />
            </div>
            <h3 className="split-title">Sei un&apos;Azienda?</h3>
            <p className="split-text">
              Compressori, impianti industriali, trattamento aria compressa e chiller. 
              Soluzioni professionali per la tua attività produttiva.
            </p>
            <Link href="/air" className="split-btn split-btn-sky">
              Scopri A.I.R <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>

        <motion.div 
          className="split-item split-item-orange"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="split-content">
            <div className="split-icon">
              <User size={40} />
            </div>
            <h3 className="split-title">Sei un Privato?</h3>
            <p className="split-text">
              Vendita e assistenza su caldaie, condizionatori e impianti idrici. 
              Tutto ciò di cui la tua casa ha bisogno, con un servizio dedicato.
            </p>
            <Link href="/mc" className="split-btn split-btn-orange">
              Scopri M.C. <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Recensioni */}
      <section className="section bg-gray-50 reviews-section">
        <div className="container-main">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Testimonianze</span>
            <h2 className="section-title">Cosa Dicono di Noi</h2>
            <p className="section-subtitle">
              La soddisfazione dei nostri clienti è la nostra migliore referenza
            </p>
          </motion.div>
        </div>

        <div className="reviews-container">
          {[...reviews, ...reviews].map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-stars">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={20} />
                ))}
              </div>
              <p className="review-text">&quot;{review.text}&quot;</p>
              <div className="review-author">
                <div className="review-avatar">{review.name.charAt(0)}</div>
                <div>
                  <div className="review-name">{review.name}</div>
                  <div className="review-location">{review.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="cta-title">Hai bisogno di un professionista?</h2>
          <p className="cta-text">
            Che tu sia un&apos;azienda o un privato, contattaci per un preventivo gratuito 
            e senza impegno. I nostri tecnici sono pronti ad aiutarti.
          </p>
          <div className="cta-buttons">
            <Link href="/contatti" className="btn btn-primary">
              Richiedi Preventivo Gratuito <ArrowRight size={20} />
            </Link>
            <a href="tel:+393911003135" className="btn btn-white">
              <Phone size={20} /> +39 391 100 3135
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
