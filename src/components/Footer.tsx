'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top-line" />

      <div className="footer-main">
        <div className="footer-grid">
          {/* Col 1: Logo e descrizione */}
          <div className="footer-col footer-col-brand">
            <Image
              src="/images/logoTecnoService.png"
              alt="TecnoService a.i.r & M.C. Srl - Logo footer"
              width={220}
              height={62}
              className="footer-logo"
            />
            <p className="footer-description">
              Soluzioni professionali per la climatizzazione e il riscaldamento. 
              Affidabilità, competenza e innovazione al tuo servizio.
            </p>
          </div>

          {/* Col 2: Link rapidi */}
          <div className="footer-col footer-col-links">
            <h4 className="footer-title">Link Rapidi</h4>
            <ul className="footer-links">
              {[
                { label: 'Home', href: '/' },
                { label: 'A.I.R', href: '/air' },
                { label: 'M.C.', href: '/mc' },
                { label: 'Contatti', href: '/contatti' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Servizi */}
          <div className="footer-col footer-col-services">
            <h4 className="footer-title">I Nostri Servizi</h4>
            <ul className="footer-links">
              {['Compressori', 'Impianti Industriali', 'Chiller', 'Caldaie', 'Condizionatori', 'Impianti Idrici'].map((service) => (
                <li key={service}>
                  <span className="footer-link">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contatti */}
          <div className="footer-col footer-col-contact">
            <h4 className="footer-title">Contattaci</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <Phone size={16} />
                <a href="tel:+393911003135">+39 391 100 3135</a>
              </div>
              <div className="footer-contact-item">
                <Mail size={16} />
                <a href="mailto:amministrazione.tecnoairsrl@gmail.com">amministrazione.tecnoairsrl@gmail.com</a>
              </div>
              <div className="footer-contact-item">
                <MapPin size={16} />
                <span>Via di Stieta 1, 50054 Fucecchio (FI)</span>
              </div>
              <div className="footer-contact-item">
                <Clock size={16} />
                <span>Lun-Ven: 8:00-18:00</span>
              </div>
            </div>
          </div>

          {/* Social - solo mobile */}
          <div className="footer-col footer-col-social">
            <div className="footer-social">
              <a href="#" className="footer-social-link" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com/tecnoservicemc" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="footer-social-link" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="footer-copyright">
            © {currentYear} TecnoService. Tutti i diritti riservati.
          </p>
          <div className="footer-legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
            <span>P.IVA 07309950488</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
