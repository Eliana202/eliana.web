'use client';

import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  MessageCircle, 
  ArrowUpRight, 
  CheckCircle2, 
  Globe, 
  Zap, 
  Wrench,
  Smartphone,
  Eye
} from 'lucide-react';

export default function PortfolioSection() {
  const [filter, setFilter] = useState<'todos' | 'landing' | 'automatizacion' | 'soporte'>('todos');

  const projects = [
    {
      id: 'odontosalud',
      title: 'OdontoSalud - Centro Odontológico',
      category: 'landing',
      categoryLabel: 'Landing Page + Citas',
      tagline: 'Captación de pacientes y reserva online',
      desc: 'Landing page médica de alta conversión con formulario de reserva sincronizado, botón flotante de WhatsApp y tiempo de carga inferior a 1 segundo.',
      tech: ['Next.js', 'Tailwind CSS', 'WhatsApp API', 'Google Calendar'],
      stats: '+45% en citas confirmadas',
      mockupStyle: 'bg-gradient-to-tr from-cyan-900/60 to-slate-900',
      badgeColor: 'border-cyan-500/40 text-cyan-400 bg-cyan-950/40',
      demoUrl: '#contacto',
    },
    {
      id: 'inmo-leads',
      title: 'InmoLead Express - Inmobiliaria',
      category: 'automatizacion',
      categoryLabel: 'Landing + Automatización',
      tagline: 'Flujo de leads a Google Sheets y WhatsApp',
      desc: 'Página de presentación para proyectos de vivienda donde cada interesado activa una alerta inmediata al asesor comercial y se registra ordenadamente en la base de datos.',
      tech: ['Formularios Web', ' Workflows', 'Google Sheets', 'WhatsApp Webhook'],
      stats: 'Notificación en < 2 segundos',
      mockupStyle: 'bg-gradient-to-tr from-emerald-900/60 to-slate-900',
      badgeColor: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/40',
      demoUrl: '#contacto',
    },
    {
      id: 'consultoria-legal',
      title: 'Firma-Alianza Justa Jurídica & Patrimonial',
      category: 'landing',
      categoryLabel: 'Web Corporativa',
      tagline: 'Presencia digital sobria y profesional',
      desc: 'Sitio corporativo estructurado para firma de abogados y consultores tributarios con catálogo de servicios, perfil de socios y cotizador preliminar de casos.',
      tech: ['Desarrollo Web', 'Diseño UI/UX', 'SEO On-Page', 'Formulario Seguro', 'Redes Sociales', 'Widget de WhatsApp'],
      stats: '100% Calificación en Movilidad',
      mockupStyle: 'bg-gradient-to-tr from-indigo-900/60 to-slate-900',
      badgeColor: 'border-indigo-500/40 text-indigo-400 bg-indigo-950/40',
      demoUrl: '#contacto',
    },
    {
      id: 'soporte-estudio-contable',
      title: 'Estudio Contable Delta - Soporte TI',
      category: 'soporte',
      categoryLabel: 'Soporte TI & Mantenimiento',
      tagline: 'Infraestructura de 10 equipos y red segura',
      desc: 'Optimización de hardware, mantenimiento preventivo de computadores portátiles y de escritorio, configuración de red cableada, impresoras compartidas y copias de seguridad.',
      tech: ['Mantenimiento Preventivo', 'Redes LAN/Wi-Fi', 'Impresoras en Red', 'Backups'],
      stats: '0 horas de parada técnica',
      mockupStyle: 'bg-gradient-to-tr from-amber-900/60 to-slate-900',
      badgeColor: 'border-amber-500/40 text-amber-400 bg-amber-950/40',
      demoUrl: '#contacto',
    },
  ];

  const filteredProjects = filter === 'todos' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portafolio" className="py-20 lg:py-28 bg-[#0c1220] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00dce5]/10 border border-[#00dce5]/20 text-xs text-[#00dce5] font-semibold mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Casos & Proyectos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Proyectos que Impulsan Negocios Reales
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Ejemplos de soluciones implementadas con enfoque en calidad visual, rendimiento técnico y retorno práctico para el cliente.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <button
              onClick={() => setFilter('todos')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === 'todos'
                  ? 'bg-[#00dce5] text-[#090d16] shadow-[0_0_15px_rgba(0,220,229,0.3)]'
                  : 'bg-white/[0.04] text-slate-300 hover:text-white border border-white/10'
              }`}
            >
              Todos los Proyectos
            </button>
            <button
              onClick={() => setFilter('landing')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === 'landing'
                  ? 'bg-[#00dce5] text-[#090d16] shadow-[0_0_15px_rgba(0,220,229,0.3)]'
                  : 'bg-white/[0.04] text-slate-300 hover:text-white border border-white/10'
              }`}
            >
              Landing Pages & Web
            </button>
            <button
              onClick={() => setFilter('automatizacion')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === 'automatizacion'
                  ? 'bg-[#00dce5] text-[#090d16] shadow-[0_0_15px_rgba(0,220,229,0.3)]'
                  : 'bg-white/[0.04] text-slate-300 hover:text-white border border-white/10'
              }`}
            >
              Automatizaciones
            </button>
            <button
              onClick={() => setFilter('soporte')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === 'soporte'
                  ? 'bg-[#00dce5] text-[#090d16] shadow-[0_0_15px_rgba(0,220,229,0.3)]'
                  : 'bg-white/[0.04] text-slate-300 hover:text-white border border-white/10'
              }`}
            >
              Soporte TI
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#10192a] border border-white/10 hover:border-[#00dce5]/30 rounded-2xl overflow-hidden transition-all duration-300 group hover:-translate-y-1.5 shadow-xl flex flex-col justify-between"
            >
              {/* Mockup Preview Area */}
              <div className={`h-48 sm:h-56 ${project.mockupStyle} p-6 relative flex flex-col justify-between border-b border-white/10 overflow-hidden`}>
                
                {/* Tech UI Header Mockup */}
                <div className="flex items-center justify-between z-10">
                  <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-[11px] font-mono text-slate-200">{project.stats}</span>
                  </div>
                  <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${project.badgeColor}`}>
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Conceptual Mockup Device Representation */}
                <div className="bg-[#090e1a]/85 border border-white/15 rounded-xl p-4 shadow-2xl backdrop-blur-md max-w-sm mx-auto w-full z-10 transform group-hover:scale-[1.02] transition-transform duration-300">
                  <div className="flex items-center gap-1.5 mb-2.5 pb-2 border-b border-white/10">
                    <div className="w-2 h-2 rounded-full bg-rose-500/80" />
                    <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
                    <span className="text-[10px] text-slate-400 font-mono ml-2 truncate">
                      {project.title.toLowerCase().replace(/[^a-z0-9]/g, '')}.online
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-3 bg-white/20 rounded w-3/4" />
                    <div className="h-2 bg-white/10 rounded w-1/2" />
                  </div>
                </div>

                {/* Decorative Grid Lines */}
                <div className="absolute inset-0 tech-grid-pattern opacity-30 pointer-events-none" />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00dce5] transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs text-[#00dce5] font-semibold uppercase tracking-wider mb-3">
                    {project.tagline}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    {project.desc}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono text-slate-300 bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/573025239575?text=${encodeURIComponent(`Hola Eliana, vi el proyecto ${project.title} y me gustaría una solución similar para mi negocio.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex justify-center items-center gap-2 py-2.5 px-4 rounded-xl bg-[#00dce5] hover:bg-[#63f7ff] text-[#090d16] font-bold text-xs sm:text-sm shadow-md transition-all"
                  >
                    <span>Quiero una solución similar</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <a
                    href="#contacto"
                    className="inline-flex justify-center items-center gap-1.5 py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 text-xs sm:text-sm font-medium transition-colors"
                  >
                    <span>Consultar detalles</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
          <h4 className="text-lg font-bold text-white mb-2">
            ¿Quieres ver cómo luciría tu proyecto?
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 mb-4">
            Cuéntame tu idea y te preparo una propuesta visual y técnica estructurada especialmente para tu sector.
          </p>
          <a
            href="https://wa.me/573025239575?text=Hola%20Eliana,%20quiero%20conversar%20sobre%20la%20idea%20de%20mi%20proyecto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#00dce5] hover:text-[#63f7ff] underline"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Escríbeme por WhatsApp para evaluar tu idea</span>
          </a>
        </div>

      </div>
    </section>
  );
}
