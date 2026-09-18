'use client';

import React from 'react';
import { 
  Sparkles, 
  Globe, 
  Workflow, 
  Calendar, 
  Wrench, 
  ArrowRight, 
  CheckCircle2, 
  MessageCircle 
} from 'lucide-react';

export default function Services() {
  const serviceList = [
    {
      id: 'landing-pages',
      priority: 1,
      badge: 'Más Solicitado',
      title: 'Landing Pages Profesionales',
      icon: Sparkles,
      desc: 'Páginas web de una sola página meticulosamente diseñadas para presentar tu oferta de forma contundente y convertir visitantes en clientes reales.',
      benefit: 'Aumenta tus consultas comerciales y proyecta una imagen 100% profesional que genera confianza inmediata.',
      features: [
        'Diseño moderno adaptado a móviles y tablets',
        'Velocidad de carga ultrarrápida',
        'Botones de llamado a la acción estratégicos',
        'Conexión directa con WhatsApp y llamadas',
      ],
      ctaText: 'Cotizar Landing Page',
      whatsappMessage: 'Hola Eliana, me interesa cotizar una Landing Page Profesional para mi negocio.',
    },
    {
      id: 'desarrollo-web',
      priority: 2,
      badge: 'Solución Completa',
      title: 'Desarrollo Web a Medida',
      icon: Globe,
      desc: 'Sitios web multipágina estructurados para empresas, catálogos digitales y marcas que necesitan presentar servicios complejos y contenidos dinámicos.',
      benefit: 'Posiciona tu negocio con autoridad, comunica toda tu propuesta de valor y escala sin limitaciones técnicas.',
      features: [
        'Estructura web personalizada y escalable',
        'Optimización para motores de búsqueda (SEO básico)',
        'Formularios seguros y formularios de contacto',
        'Panel de administración y gestión sencilla',
      ],
      ctaText: 'Cotizar Sitio Web',
      whatsappMessage: 'Hola Eliana, quiero información sobre el Desarrollo Web a Medida para mi empresa.',
    },
    {
      id: 'automatizaciones',
      priority: 3,
      badge: 'Alto Impacto',
      title: 'Automatizaciones de Procesos',
      icon: Workflow,
      desc: 'Conexión inteligente entre tus formularios, correos, hojas de cálculo, calendarios y WhatsApp para que tu negocio opere en piloto automático.',
      benefit: 'Ahorra entre 10 y 20 horas semanales de trabajo manual repetitivo y atiende a tus prospectos en segundos.',
      features: [
        'Flujos automáticos personalizados y webhooks',
        'Alertas instantáneas a WhatsApp al recibir un cliente',
        'Sincronización automática con Google Sheets o CRM',
        'Correos de confirmación y bienvenida automáticos',
      ],
      ctaText: 'Automatizar Procesos',
      whatsappMessage: 'Hola Eliana, me gustaría saber cómo automatizar tareas repetitivas en mi negocio.',
    },
    {
      id: 'agendamiento-online',
      priority: 4,
      badge: 'Crecimiento',
      title: 'Sistemas de Agendamiento & Citas Online',
      icon: Calendar,
      desc: 'Plataforma intuitiva donde tus pacientes, alumnos o clientes reservan sus citas según tu disponibilidad real en tiempo real.',
      benefit: 'Elimina el ir y venir de mensajes para coordinar horas y reduce drásticamente las inasistencias con recordatorios automáticos.',
      features: [
        'Sincronización con Google Calendar o Outlook',
        'Recordatorios automáticos por WhatsApp y correo',
        'Control total de horarios disponibles y bloqueos',
        'Integración dentro de tu página web o link bio',
      ],
      ctaText: 'Implementar Agendamiento',
      whatsappMessage: 'Hola Eliana, me interesa implementar un Sistema de Citas y Agendamiento Online.',
    },
    {
      id: 'soporte-tecnico',
      priority: 5,
      badge: 'Tranquilidad TI',
      title: 'Soporte Técnico de Computadores & TI',
      icon: Wrench,
      desc: 'Mantenimiento preventivo, correctivo y configuración de equipos, software, redes y periféricos para que tu operación nunca se detenga.',
      benefit: 'Tus herramientas de trabajo siempre rápidas, seguras y libres de fallos, con asistencia paciente y oportuna.',
      features: [
        'Diagnóstico preciso de lentitud y fallos',
        'Instalación y optimización de software y sistemas operativos',
        'Configuración de impresoras, escáneres y periféricos',
        'Mantenimiento preventivo para alargar la vida útil',
      ],
      ctaText: 'Solicitar Asistencia Técnica',
      whatsappMessage: 'Hola Eliana, necesito Soporte Técnico o Mantenimiento para mis computadores y equipos.',
    },
  ];

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-[#090d16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00dce5]/10 border border-[#00dce5]/20 text-xs text-[#00dce5] font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Servicios Especializados</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Soluciones Diseñadas para Generar Resultados
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Cada servicio está enfocado en resolver una necesidad puntual de tu negocio: captar clientes, ahorrar tiempo u operar sin contratiempos tecnológicos.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {serviceList.map((service, index) => {
            const IconComp = service.icon;
            const isFeatured = index === 0 || index === 2; // Highlight top requested

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`relative bg-[#0d1627] rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 ${
                  isFeatured
                    ? 'border-[#00dce5]/40 shadow-[0_10px_30px_rgba(0,220,229,0.08)]'
                    : 'border-white/10 hover:border-white/25 shadow-lg'
                }`}
              >
                <div>
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#00dce5]/10 border border-[#00dce5]/20 flex items-center justify-center text-[#00dce5] group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-slate-300 group-hover:border-[#00dce5]/30 group-hover:text-[#00dce5] transition-colors">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-[#00dce5] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {service.desc}
                  </p>

                  {/* Highlighted Client Benefit */}
                  <div className="bg-[#121f35]/70 border-l-2 border-[#00dce5] p-3 rounded-r-lg mb-5">
                    <span className="text-[11px] font-mono text-[#00dce5] block font-semibold uppercase mb-0.5">
                      Beneficio para tu negocio:
                    </span>
                    <p className="text-xs text-slate-200 font-medium">
                      {service.benefit}
                    </p>
                  </div>

                  {/* Key Features Checkmarks */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feat, fidx) => (
                      <div key={fidx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00dce5] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-2.5">
                  <a
                    href={`https://wa.me/573025239575?text=${encodeURIComponent(service.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex justify-center items-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#00dce5] hover:bg-[#63f7ff] text-[#090d16] font-bold text-xs shadow-md transition-all"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="#contacto"
                    className="inline-flex justify-center items-center gap-1 py-2.5 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 text-xs transition-colors"
                  >
                    <span>Detalles</span>
                  </a>
                </div>
              </div>
            );
          })}

          {/* Additional Banner Box for Custom Projects */}
          <div className="bg-gradient-to-br from-[#0e1a2f] to-[#122442] rounded-2xl p-6 sm:p-7 border border-[#00dce5]/20 flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] mb-5">
                <MessageCircle className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#00dce5]/15 text-[#00dce5] mb-3 inline-block">
                Proyecto a Medida
              </span>
              <h3 className="text-xl font-bold text-white mb-2">
                ¿Necesitas una combinación específica?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Si tu negocio requiere una landing con agendamiento, base de datos personalizada o soporte recurrente, diseñamos una propuesta exacta a tu medida.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <a
                href="https://wa.me/573025239575?text=Hola%20Eliana,%20tengo%20un%20proyecto%20personalizado%20y%20quiero%20cotizarlo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex justify-center items-center gap-2 py-3 px-4 rounded-xl bg-white/[0.06] hover:bg-[#00dce5] text-white hover:text-[#090d16] border border-white/15 hover:border-transparent font-bold text-xs sm:text-sm transition-all duration-300"
              >
                <span>Hablemos de tu caso específico</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
