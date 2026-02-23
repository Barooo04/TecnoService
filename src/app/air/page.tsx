'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Factory, Wind, Snowflake, Wrench, ArrowRight, CheckCircle, Phone, Shield, Clock, Award, Gauge } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const airServices = [
  { icon: Factory, title: 'Compressori', description: 'Vendita, installazione e manutenzione di compressori a vite, a pistoni e scroll per ogni settore industriale.', features: ['Compressori a vite e pistoni', 'Dimensionamento su misura', 'Contratti di manutenzione'] },
  { icon: Gauge, title: 'Impianti Industriali', description: 'Progettazione e realizzazione di impianti industriali completi per aria compressa, raffreddamento e automazione.', features: ['Progettazione chiavi in mano', 'Tubazioni e distribuzione', 'Automazione e controllo'] },
  { icon: Wind, title: 'Trattamento Aria Compressa', description: 'Sistemi di filtrazione, essiccazione e purificazione dell\'aria compressa per garantire qualità e conformità alle normative.', features: ['Essiccatori a ciclo frigorifero', 'Filtri e separatori', 'Analisi qualità aria'] },
  { icon: Snowflake, title: 'Chiller Industriali', description: 'Installazione e assistenza di gruppi frigoriferi e chiller per il raffreddamento di processi produttivi e macchinari.', features: ['Chiller aria e acqua', 'Manutenzione programmata', 'Pronto intervento H24'] }
];

export default function AirPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero" style={{ minHeight: '80vh' }}>
        <Image src="/images/hero-air.png" alt="TecnoService AIR - Compressori industriali e impianti aria compressa per aziende Fucecchio Firenze" fill className="hero-video" style={{ objectFit: 'cover' }} priority />
        <div className="hero-overlay" style={{ background: 'linear-gradient(to right, rgba(2, 132, 199, 0.95), rgba(2, 132, 199, 0.7), transparent)' }} />
        <motion.div className="hero-content" style={{ textAlign: 'left', maxWidth: '650px', marginRight: 'auto' }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="hero-badge">Divisione Aziende</span>
          <h1 className="hero-title">Compressori e Impianti Industriali a Fucecchio<span style={{ display: 'block', fontSize: '1.5rem', fontWeight: 500, color: '#7dd3fc', marginTop: '16px' }}>A.I.R — Aria • Impianti • Refrigerazione</span></h1>
          <p className="hero-description" style={{ marginLeft: 0 }}>Partner affidabile per il settore industriale. Compressori, impianti ad aria compressa, chiller e soluzioni su misura per ottimizzare la produttività della tua azienda.</p>
          <div className="hero-buttons" style={{ justifyContent: 'flex-start' }}>
            <a href="#contatti" className="btn btn-primary">Richiedi Preventivo <ArrowRight size={20} /></a>
            <a href="tel:+393911003135" className="btn btn-secondary"><Phone size={20} /> Chiama Ora</a>
          </div>
        </motion.div>
      </section>

      {/* Cosa Facciamo */}
      <section className="section bg-white">
        <div className="container-main">
          <div className="grid-2">
            <motion.div className="content-block" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ order: 2 }}>
              <span className="content-label">La Nostra Specializzazione</span>
              <h2 className="content-title">Vendita e Assistenza Compressori Industriali in Provincia di Firenze</h2>
              <p className="content-text">A.I.R è la divisione di TecnoService dedicata alle aziende. Progettiamo, installiamo e manuteniamo impianti ad aria compressa, compressori e sistemi di raffreddamento industriale per ogni tipo di attività produttiva.</p>
              <p className="content-text">Dalla consulenza tecnica alla progettazione, dall&apos;installazione chiavi in mano all&apos;assistenza programmata: accompagniamo la tua azienda in ogni fase con competenza e affidabilità.</p>
              <div className="feature-grid">
                {[{ icon: Shield, text: 'Garanzia e Conformità' }, { icon: Clock, text: 'Assistenza H24' }, { icon: Award, text: 'Tecnici Specializzati' }, { icon: Gauge, text: 'Efficienza Produttiva' }].map((item) => (
                  <div key={item.text} className="feature-item"><item.icon size={22} /><span className="feature-text">{item.text}</span></div>
                ))}
              </div>
              <Link href="/contatti" className="btn btn-primary">Scopri di Più <ArrowRight size={18} /></Link>
            </motion.div>
            <motion.div className="image-container" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ order: 1 }}>
              <Image src="/images/hero.jpg" alt="Tecnico TecnoService AIR durante manutenzione compressore industriale a Fucecchio" width={600} height={550} className="image-main" />
              <div className="image-badge"><div className="image-badge-number">500+</div><div className="image-badge-text">Aziende Servite</div></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Servizi */}
      <section className="section bg-gray-50">
        <div className="container-main">
          <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-label">I Nostri Servizi</span>
            <h2 className="section-title">Aria Compressa, Chiller e Impianti per Aziende Toscane</h2>
            <p className="section-subtitle">Una gamma completa di servizi industriali: dalla fornitura di compressori al trattamento dell&apos;aria compressa, fino ai chiller per il raffreddamento di processo.</p>
          </motion.div>
          <div className="grid-2">
            {airServices.map((service, index) => (
              <motion.div key={service.title} className="card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <div className="card-icon card-icon-sky"><service.icon size={28} /></div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-description" style={{ marginBottom: '24px' }}>{service.description}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {service.features.map((feature) => (
                    <li key={feature} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0', color: '#64748b' }}>
                      <CheckCircle size={18} style={{ color: '#22c55e', flexShrink: 0 }} />{feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Contatto */}
      <section id="contatti" className="section" style={{ background: 'linear-gradient(135deg, #0284c7, #0891b2)' }}>
        <div className="container-main">
          <div className="grid-form">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ color: 'white' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#bae6fd', marginBottom: '16px', display: 'block' }}>Contattaci</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'white', marginBottom: '24px' }}>Richiedi un Preventivo Gratuito</h2>
              <p style={{ fontSize: '1.125rem', color: '#e0f2fe', lineHeight: 1.8, marginBottom: '48px' }}>Compila il form e un nostro tecnico specializzato ti contatterà entro 24 ore per un sopralluogo e un preventivo su misura per la tua azienda.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{ width: '56px', height: '56px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Phone size={24} /></div>
                  <div><div style={{ fontSize: '0.875rem', color: '#bae6fd' }}>Telefono</div><a href="tel:+393911003135" style={{ fontSize: '1.25rem', fontWeight: 600, color: 'white' }}>+39 391 100 3135</a></div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{ width: '56px', height: '56px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Clock size={24} /></div>
                  <div><div style={{ fontSize: '0.875rem', color: '#bae6fd' }}>Orari</div><div style={{ fontSize: '1.25rem', fontWeight: 600 }}>Lun-Ven 8:00-18:00</div></div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
