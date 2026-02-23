'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Flame, Droplets, Snowflake, Wrench, ArrowRight, CheckCircle, Phone, Shield, Clock, Award, Home } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const mcServices = [
  { icon: Flame, title: 'Caldaie', description: 'Vendita, installazione e assistenza su caldaie a condensazione, tradizionali e a pompa di calore per il massimo comfort domestico.', features: ['Caldaie a condensazione', 'Controllo fumi e manutenzione', 'Sostituzione e ammodernamento'] },
  { icon: Snowflake, title: 'Condizionatori', description: 'Climatizzatori split, multi-split e canalizzati delle migliori marche. Installazione certificata e manutenzione programmata.', features: ['Installazione certificata F-GAS', 'Manutenzione e sanificazione', 'Ricarica gas refrigerante'] },
  { icon: Droplets, title: 'Impianti Idrici', description: 'Progettazione e realizzazione di impianti di irrigazione, riscaldamento a pavimento, rilevazione e riparazione perdite acqua.', features: ['Irrigazione giardini', 'Riscaldamento a pavimento', 'Ricerca e riparazione perdite'] },
  { icon: Wrench, title: 'Assistenza e Manutenzione', description: 'Servizio di assistenza post-vendita dedicato, con interventi rapidi e manutenzione programmata per tutti i tuoi impianti domestici.', features: ['Interventi rapidi', 'Ricambi originali', 'Contratti di manutenzione'] }
];

export default function McPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero" style={{ minHeight: '80vh' }}>
        <Image src="/images/hero-mc.jpg" alt="TecnoService MC - Assistenza caldaie condizionatori e impianti idrici per privati in Toscana" fill className="hero-video" style={{ objectFit: 'cover' }} priority />
        <div className="hero-overlay" style={{ background: 'linear-gradient(to right, rgba(234, 88, 12, 0.95), rgba(234, 88, 12, 0.7), transparent)' }} />
        <motion.div className="hero-content" style={{ textAlign: 'left', maxWidth: '650px', marginRight: 'auto' }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="hero-badge" style={{ background: 'rgba(255,255,255,0.1)', color: '#fed7aa' }}>Divisione Privati</span>
          <h1 className="hero-title">Caldaie, Condizionatori e Impianti Idrici in Toscana<span style={{ display: 'block', fontSize: '1.5rem', fontWeight: 500, color: '#fed7aa', marginTop: '16px' }}>M.C. — Manutenzione • Casa</span></h1>
          <p className="hero-description" style={{ marginLeft: 0 }}>Il tuo punto di riferimento per il comfort domestico. Vendita e assistenza su caldaie, condizionatori e impianti idrici, con tecnici qualificati e un servizio sempre trasparente.</p>
          <div className="hero-buttons" style={{ justifyContent: 'flex-start' }}>
            <a href="#contatti" className="btn btn-orange">Richiedi Preventivo <ArrowRight size={20} /></a>
            <a href="tel:+393911003135" className="btn btn-secondary"><Phone size={20} /> Chiama Ora</a>
          </div>
        </motion.div>
      </section>

      {/* Cosa Facciamo */}
      <section className="section bg-white">
        <div className="container-main">
          <div className="grid-2">
            <motion.div className="image-container" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Image src="/images/hero.jpg" alt="Tecnico TecnoService MC durante installazione caldaia a condensazione" width={600} height={550} className="image-main" />
              <div className="image-badge image-badge-orange"><div className="image-badge-number">1000+</div><div className="image-badge-text">Famiglie Soddisfatte</div></div>
            </motion.div>
            <motion.div className="content-block" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="content-label" style={{ color: '#f97316' }}>La Nostra Specializzazione</span>
              <h2 className="content-title">Installazione e Assistenza Caldaie e Climatizzatori nelle Province di Firenze, Pisa e Livorno</h2>
              <p className="content-text">M.C. è la divisione di TecnoService dedicata ai privati. Ci occupiamo di vendita, installazione e assistenza su caldaie, condizionatori e impianti idrici, con un servizio completo e senza pensieri.</p>
              <p className="content-text">Dall&apos;impianto di irrigazione del giardino al riscaldamento a pavimento, dalla caldaia al climatizzatore: un unico interlocutore per tutte le esigenze della tua abitazione.</p>
              <div className="feature-grid">
                {[{ icon: Home, text: 'Soluzioni Residenziali' }, { icon: Shield, text: 'Garanzia e Qualità' }, { icon: Clock, text: 'Interventi Rapidi' }, { icon: Award, text: 'Tecnici Certificati' }].map((item) => (
                  <div key={item.text} className="feature-item feature-item-orange"><item.icon size={22} /><span className="feature-text">{item.text}</span></div>
                ))}
              </div>
              <Link href="/contatti" className="btn btn-orange">Scopri di Più <ArrowRight size={18} /></Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Servizi */}
      <section className="section bg-gray-50">
        <div className="container-main">
          <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-label" style={{ color: '#f97316' }}>I Nostri Servizi</span>
            <h2 className="section-title">Servizi per Privati: Riscaldamento, Climatizzazione e Idraulica</h2>
            <p className="section-subtitle">Vendita, installazione e assistenza su caldaie, condizionatori e impianti idrici. Un servizio completo e dedicato per il comfort della tua abitazione.</p>
          </motion.div>
          <div className="grid-2">
            {mcServices.map((service, index) => (
              <motion.div key={service.title} className="card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <div className="card-icon card-icon-orange"><service.icon size={28} /></div>
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
      <section id="contatti" className="section" style={{ background: 'linear-gradient(135deg, #f97316, #ea580c)' }}>
        <div className="container-main">
          <div className="grid-form">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ color: 'white' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#fed7aa', marginBottom: '16px', display: 'block' }}>Contattaci</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'white', marginBottom: '24px' }}>Richiedi un Preventivo Gratuito</h2>
              <p style={{ fontSize: '1.125rem', color: '#ffedd5', lineHeight: 1.8, marginBottom: '48px' }}>Hai bisogno di una nuova caldaia, di installare un condizionatore o di risolvere un problema idrico? Compila il form e ti ricontatteremo entro 24 ore.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{ width: '56px', height: '56px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Phone size={24} /></div>
                  <div><div style={{ fontSize: '0.875rem', color: '#fed7aa' }}>Telefono</div><a href="tel:+393911003135" style={{ fontSize: '1.25rem', fontWeight: 600, color: 'white' }}>+39 391 100 3135</a></div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{ width: '56px', height: '56px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Clock size={24} /></div>
                  <div><div style={{ fontSize: '0.875rem', color: '#fed7aa' }}>Orari</div><div style={{ fontSize: '1.25rem', fontWeight: 600 }}>Lun-Ven 8:00-18:00</div></div>
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
