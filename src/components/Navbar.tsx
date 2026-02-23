'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/air', label: 'A.I.R' },
    { href: '/mc', label: 'M.C.' },
    { href: '/contatti', label: 'Contatti' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar-solid' : ''}`}>
        <div className="navbar-content">
          <div className="navbar-logo-wrapper">
            <Link href="/">
              <Image
                src={isScrolled ? '/images/logoBlu.png' : '/images/logoTecnoService.png'}
                alt="TecnoService"
                width={240}
                height={68}
                className={`navbar-logo ${isScrolled ? '' : 'navbar-logo-white'}`}
                priority
              />
            </Link>
          </div>

          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`navbar-link ${isActive(link.href) ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="navbar-right">
            <Link
              href="/contatti"
              className={`navbar-cta ${isScrolled ? 'navbar-cta-solid' : 'navbar-cta-default'}`}
            >
              Preventivo Gratuito
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="navbar-hamburger"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-backdrop" onClick={() => setIsMobileMenuOpen(false)} />
        <div className="mobile-menu-content">
          <ul className="mobile-menu-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`mobile-menu-link ${isActive(link.href) ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contatti"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mobile-menu-cta"
          >
            Preventivo Gratuito
          </Link>
        </div>
      </div>
    </>
  );
}
