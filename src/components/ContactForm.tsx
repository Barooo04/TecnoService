'use client';

import { useState } from 'react';
import { User, Mail, Phone, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="form-container">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            style={{ textAlign: 'center', padding: '40px 0' }}
          >
            <div style={{ width: '80px', height: '80px', background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
              <CheckCircle size={40} style={{ color: '#22c55e' }} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e293b', marginBottom: '12px' }}>Messaggio Inviato!</h3>
            <p style={{ color: '#64748b', lineHeight: 1.7 }}>Grazie per averci contattato. Ti risponderemo entro 24 ore.</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
          >
            <h3 className="form-title">Richiedi Informazioni</h3>
            <p className="form-subtitle">Compila il form e ti ricontatteremo entro 24 ore</p>

            <div className="form-grid">
              <div className="form-group">
                <User size={18} className="form-icon" />
                <input
                  type="text"
                  name="name"
                  placeholder="Nome e Cognome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <Mail size={18} className="form-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <Phone size={18} className="form-icon" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefono"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="">Seleziona servizio...</option>
                  <optgroup label="A.I.R — Aziende">
                    <option value="compressori">Compressori</option>
                    <option value="impianti-industriali">Impianti Industriali</option>
                    <option value="trattamento-aria">Trattamento Aria Compressa</option>
                    <option value="chiller">Chiller Industriali</option>
                  </optgroup>
                  <optgroup label="M.C. — Privati">
                    <option value="caldaie">Caldaie</option>
                    <option value="condizionatori">Condizionatori</option>
                    <option value="impianti-idrici">Impianti Idrici</option>
                  </optgroup>
                  <option value="altro">Altro</option>
                </select>
              </div>
            </div>

            <div className="form-group" style={{ position: 'relative' }}>
              <MessageSquare size={18} className="form-textarea-icon" />
              <textarea
                name="message"
                placeholder="Il tuo messaggio..."
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="form-textarea"
              />
            </div>

            <button type="submit" className="form-submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <span>Invio in corso...</span>
              ) : (
                <>
                  Invia Messaggio <Send size={18} />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
