'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, ArrowRight, Send } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const contactInfo = [
  { icon: Phone, label: 'Telefono', value: '+39 391 100 3135', href: 'tel:+393911003135', description: 'Chiamaci per informazioni e preventivi' },
  { icon: Mail, label: 'Email', value: 'amministrazione.tecnoairsrl@gmail.com', href: 'mailto:amministrazione.tecnoairsrl@gmail.com', description: 'Scrivici per richieste dettagliate' },
  { icon: MapPin, label: 'Ufficio', value: 'Via di Stieta 1, 50054 Fucecchio (FI)', href: 'https://maps.google.com/?q=Via+di+Stieta+1+Fucecchio+FI', description: 'Vieni a trovarci in sede' },
  { icon: Clock, label: 'Orari', value: 'Lun-Ven: 8:00-18:00', href: '#', description: 'Sabato: 9:00-13:00' }
];

export default function ContattiPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero" style={{ minHeight: '60vh', background: 'linear-gradient(135deg, #0f172a, #1e293b)' }}>
        <div className="hero-overlay" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(14,165,233,0.2), transparent 60%)' }} />
        <motion.div className="hero-content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="hero-badge">Assistenza Dedicata</span>
          <h1 className="hero-title">Contatta TecnoService — Preventivo Gratuito in Toscana</h1>
          <p className="hero-description">Siamo a tua disposizione per qualsiasi informazione, preventivo o richiesta di assistenza. Il nostro team risponde entro 24 ore.</p>
        </motion.div>
      </section>

      {/* Info Cards */}
      <section className="section bg-white">
        <div className="container-main">
          <div className="grid-4">
            {contactInfo.map((item, index) => (
              <motion.a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} className="card text-center" style={{ textAlign: 'center' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <div className="card-icon card-icon-sky" style={{ margin: '0 auto 24px' }}><item.icon size={28} /></div>
                <h3 className="card-title" style={{ fontSize: '1.125rem' }}>{item.label}</h3>
                <p style={{ color: '#0ea5e9', fontWeight: 600, fontSize: '1rem', marginBottom: '8px' }}>{item.value}</p>
                <p className="card-description" style={{ fontSize: '0.875rem' }}>{item.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section bg-gray-50">
        <div className="container-main">
          <div className="grid-form">
            <motion.div className="content-block" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="content-label">Parliamone</span>
              <h2 className="content-title">Richiedi Informazioni su Compressori, Caldaie e Impianti</h2>
              <p className="content-text">Che tu sia un privato alla ricerca di soluzioni per la climatizzazione o un&apos;azienda con esigenze di riscaldamento industriale, il nostro team è pronto ad assisterti.</p>
              <p className="content-text">Compila il form con i tuoi dati e la tua richiesta. Un nostro consulente ti contatterà entro 24 ore lavorative per discutere le tue esigenze e fornirti un preventivo personalizzato e gratuito.</p>
              
              <div style={{ background: 'white', borderRadius: '20px', padding: '32px', marginTop: '32px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
                <h4 style={{ fontWeight: 700, color: '#1e293b', marginBottom: '20px', fontSize: '1.125rem' }}>Link Utili</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <Link href="/air" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#64748b', padding: '12px 0', borderBottom: '1px solid #e2e8f0', transition: 'color 0.3s' }}><Send size={18} style={{ color: '#0ea5e9' }} /><span>Scopri i servizi A.I.R per aziende</span></Link>
                  <Link href="/mc" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#64748b', padding: '12px 0', borderBottom: '1px solid #e2e8f0', transition: 'color 0.3s' }}><Send size={18} style={{ color: '#f97316' }} /><span>Scopri i servizi M.C. per privati</span></Link>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mappa */}
      <section style={{ height: '450px', width: '100%' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.5!2d10.8089!3d43.7267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a5630b2c6f8e7%3A0x0!2sVia+di+Stieta+1%2C+50054+Fucecchio+FI!5e0!3m2!1sit!2sit!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="TecnoService - Via di Stieta 1, Fucecchio (FI)"
        />
      </section>

      {/* CTA */}
      <section className="cta-section">
        <motion.div className="cta-content" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="cta-title">Parla con un Tecnico Specializzato — Chiamaci Ora</h2>
          <p className="cta-text">Chiamaci direttamente per una consulenza immediata. I nostri tecnici sono a tua disposizione per rispondere a tutte le tue domande.</p>
          <div className="cta-buttons">
            <a href="tel:+393911003135" className="btn btn-primary"><Phone size={20} /> Chiama Ora</a>
            <a href="mailto:amministrazione.tecnoairsrl@gmail.com" className="btn btn-white"><Mail size={20} /> Invia Email</a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
