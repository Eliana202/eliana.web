'use client';

import React from 'react';
import { ArrowUp, Mail, MessageCircle, Instagram, Code2, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060a12] border-t border-white/10 relative text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#00dce5] to-[#38bdf8] flex items-center justify-center text-[#090d16] font-mono font-bold text-sm shadow-[0_0_12px_rgba(0,220,229,0.3)]">
                &lt;/&gt;
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                ELIANA<span className="text-[#00dce5]">.WEB</span>
              </span>
            </div>

            <p className="text-slate-300 text-sm max-w-sm leading-relaxed">
              Soluciones tecnológicas de alta precisión, landing pages de alta conversión, automatización de procesos y soporte TI especializado para pequeños y medianos negocios.
            </p>

            <div className="text-xs text-slate-400 font-mono">
              Servicios &bull; Soporte TI &bull; Atención al Usuario | Automatización &bull; Desarrollo Web &bull; Workflow
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/573025239575"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-[#25D366]/20 border border-white/10 hover:border-[#25D366]/40 flex items-center justify-center text-slate-300 hover:text-[#25D366] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href="mailto:elianaarenas972@gmail.com"
                aria-label="Email"
                className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-[#00dce5]/20 border border-white/10 hover:border-[#00dce5]/40 flex items-center justify-center text-slate-300 hover:text-[#00dce5] transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-pink-500/20 border border-white/10 hover:border-pink-500/40 flex items-center justify-center text-slate-300 hover:text-pink-400 transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#inicio" className="hover:text-[#00dce5] transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#sobre-mi" className="hover:text-[#00dce5] transition-colors">Sobre mí / Bio</a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#00dce5] transition-colors">Servicios Profesionales</a>
              </li>
              <li>
                <a href="#automatizacion" className="hover:text-[#00dce5] transition-colors">Automatizaciones</a>
              </li>
              <li>
                <a href="#soporte" className="hover:text-[#00dce5] transition-colors">Soporte Técnico TI</a>
              </li>
            </ul>
          </div>

          {/* Solutions & Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Soluciones & Cotización
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#portafolio" className="hover:text-[#00dce5] transition-colors">Proyectos & Casos</a>
              </li>
              <li>
                <a href="#proceso" className="hover:text-[#00dce5] transition-colors">Proceso de Trabajo (5 pasos)</a>
              </li>
              <li>
                <a href="#precios" className="hover:text-[#00dce5] transition-colors">Planes & Propuestas a Medida</a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[#00dce5] transition-colors">Formulario de Contacto</a>
              </li>
              <li className="pt-2 text-xs text-[#00dce5] font-mono">
                WhatsApp: +57 302 523 9575
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 <strong className="text-slate-400 font-semibold">SOLUCIONES TÉCNOLOGICAS</strong>. Soluciones tecnológicas de alta precisión. Todos los derechos reservados.
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Volver al inicio"
            className="flex items-center gap-1.5 text-slate-400 hover:text-[#00dce5] transition-colors bg-white/[0.03] hover:bg-white/[0.08] px-3 py-1.5 rounded-lg border border-white/10"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
