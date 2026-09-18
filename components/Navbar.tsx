'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = [
        'inicio',
        'sobre-mi',
        'servicios',
        'automatizacion',
        'soporte',
        'portafolio',
        'proceso',
        'precios',
        'contacto',
      ];

      const scrollPosition = window.scrollY + 120;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio', id: 'inicio' },
    { label: 'Sobre mí', href: '#sobre-mi', id: 'sobre-mi' },
    { label: 'Servicios', href: '#servicios', id: 'servicios' },
    { label: 'Automatización', href: '#automatizacion', id: 'automatizacion' },
    { label: 'Soporte TI', href: '#soporte', id: 'soporte' },
    { label: 'Portafolio', href: '#portafolio', id: 'portafolio' },
    { label: 'Planes', href: '#precios', id: 'precios' },
    { label: 'Contacto', href: '#contacto', id: 'contacto' },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090d16]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20 py-3.5'
          : 'bg-[#090d16]/40 backdrop-blur-md border-b border-white/5 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#inicio"
          id="nav-logo"
          className="group flex items-center gap-2.5 focus:outline-none"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#00dce5] to-[#38bdf8] flex items-center justify-center text-[#090d16] font-mono font-bold text-base shadow-[0_0_15px_rgba(0,220,229,0.35)] group-hover:scale-105 transition-transform duration-300">
            &lt;/&gt;
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg sm:text-xl tracking-tight text-white group-hover:text-[#00dce5] transition-colors">
              ELIANA<span className="text-[#00dce5]">.WEB</span>
            </span>
            <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase -mt-1 hidden sm:block">
              Desarrollo & Automatización TI
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-[#0e1726]/60 border border-white/10 px-3 py-1.5 rounded-full">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-[#00dce5]/15 text-[#00dce5] shadow-[0_0_12px_rgba(0,220,229,0.15)] font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* CTA Buttons Header */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://wa.me/573025239575?text=Hola%20Eliana,%20deseo%20cotizar%20un%20proyecto%20para%20mi%20negocio"
            target="_blank"
            rel="noopener noreferrer"
            id="nav-cta-whatsapp"
            className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-[#00dce5] px-3 py-2 rounded-lg border border-white/10 hover:border-[#00dce5]/30 bg-white/[0.02] hover:bg-white/[0.06] transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>WhatsApp</span>
          </a>

          <a
            href="#contacto"
            id="nav-cta-quote"
            className="flex items-center gap-1.5 bg-[#00dce5] hover:bg-[#63f7ff] text-[#090d16] font-semibold text-xs sm:text-sm px-4 py-2 rounded-lg shadow-[0_0_20px_rgba(0,220,229,0.25)] hover:shadow-[0_0_25px_rgba(0,220,229,0.4)] transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>Cotizar Proyecto</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          id="mobile-menu-toggle"
          aria-label="Abrir menú de navegación"
          className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6 text-[#00dce5]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          id="mobile-drawer"
          className="lg:hidden bg-[#090d16]/98 backdrop-blur-2xl border-b border-white/10 px-5 pt-4 pb-6 mt-3 shadow-2xl transition-all animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                id={`mobile-link-${link.id}`}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#00dce5]/15 text-[#00dce5] font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href="https://wa.me/573025239575?text=Hola%20Eliana,%20deseo%20cotizar%20un%20proyecto%20para%20mi%20negocio"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30 text-sm font-medium"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chatear por WhatsApp (+57 302 523 9575)</span>
            </a>

            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#00dce5] text-[#090d16] font-semibold text-sm shadow-[0_0_20px_rgba(0,220,229,0.3)]"
            >
              <span>Solicitar Propuesta Personalizada</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
