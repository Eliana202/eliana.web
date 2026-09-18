'use client';

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  Sliders, 
  Send,
  Zap,
  HelpCircle
} from 'lucide-react';

export default function PricingSection() {
  // Interactive Project Customizer / Quote Generator
  const [projectType, setProjectType] = useState<'esencial' | 'profesional' | 'automatizada' | 'soporte'>('profesional');
  const [includeDomain, setIncludeDomain] = useState<boolean>(true);
  const [includeAppointments, setIncludeAppointments] = useState<boolean>(false);
  const [includeSheets, setIncludeSheets] = useState<boolean>(false);
  const [includeSupport, setIncludeSupport] = useState<boolean>(false);

  const plans = [
    {
      id: 'landing-esencial',
      name: 'Landing Esencial',
      badge: 'Inicio Rápido',
      subtitle: 'Presencia digital inmediata para emprendedores',
      commercialPitch: 'Solución ágil para validar y captar',
      highlightPhrase: 'Cotiza tu solución inicial',
      description: 'Ideal para profesionales o negocios que desean una carta de presentación digital limpia, moderna y con contacto directo a WhatsApp.',
      features: [
        'Diseño visual exclusivo a la medida de tu marca',
        '100% adaptable a teléfonos celulares y tablets',
        'Botón directo y flotante a tu WhatsApp',
        'Hosting optimizado y configuración inicial',
        'Certificado de seguridad SSL incluido',
        'Entrega ágil y sin complicaciones',
      ],
      recommended: false,
      ctaText: 'Cotizar Landing Esencial',
      message: 'Hola Eliana, me interesa cotizar una Landing Esencial para mi negocio.',
    },
    {
      id: 'landing-profesional',
      name: 'Landing Profesional',
      badge: 'Más Solicitada',
      subtitle: 'La opción recomendada para captar clientes',
      commercialPitch: 'Diseñada según las metas de tu negocio',
      highlightPhrase: 'Solicita tu propuesta personalizada',
      description: 'Para negocios que buscan proyectar máxima autoridad, captar prospectos mediante formularios y posicionarse con dominio propio.',
      features: [
        'Todo lo incluido en la Landing Esencial',
        'Formulario de contacto seguro y validado',
        'Gestión y configuración de dominio personalizado',
        'Optimización SEO básica para motores de búsqueda',
        'Secciones ampliadas (servicios, testimonios, FAQs)',
        'Diseño de alta conversión con pruebas de usabilidad',
      ],
      recommended: true,
      ctaText: 'Solicitar Propuesta Personalizada',
      message: 'Hola Eliana, deseo solicitar una propuesta personalizada para una Landing Profesional.',
    },
    {
      id: 'landing-automatizada',
      name: 'Landing + Automatización',
      badge: 'Máximo Rendimiento',
      subtitle: 'Captación y flujos automáticos sin trabajo manual',
      commercialPitch: 'Escala tu operación en piloto automático',
      highlightPhrase: 'Diseñamos tu solución a medida',
      description: 'La solución definitiva para negocios que reciben consultas constantes y necesitan ordenar datos, alertar a su equipo y responder de inmediato.',
      features: [
        'Todo lo de la Landing Profesional',
        'Integración con Google Sheets o CRM para ordenar prospectos',
        'Alertas instantáneas a WhatsApp de tu equipo comercial',
        'Respuestas automáticas por correo electrónico',
        'Sistemas opcionales de agendamiento de citas en vivo',
        'Capacitación y soporte para tu equipo',
      ],
      recommended: false,
      ctaText: 'Cotizar Solución Automatizada',
      message: 'Hola Eliana, me interesa una Landing con Automatizaciones (Google Sheets / WhatsApp / Correo).',
    },
  ];

  // Helper to build custom WhatsApp link from builder
  const getCustomQuoteUrl = () => {
    const typeNames = {
      esencial: 'Landing Esencial',
      profesional: 'Landing Profesional',
      automatizada: 'Landing + Automatizaciones',
      soporte: 'Soporte Técnico Especializado',
    };

    const extras = [];
    if (includeDomain) extras.push('Dominio y Hosting');
    if (includeAppointments) extras.push('Sistema de Citas Online');
    if (includeSheets) extras.push('Conexión con Google Sheets / CRM');
    if (includeSupport) extras.push('Mantenimiento y Soporte Continuo');

    const text = `Hola Eliana! Estuve configurando mi proyecto en tu web:\n\n- Tipo: ${typeNames[projectType]}\n- Complementos: ${extras.length > 0 ? extras.join(', ') : 'Básicos'}\n\n¿Podrías enviarme una propuesta personalizada?`;
    return `https://wa.me/573025239575?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="precios" className="py-20 lg:py-28 bg-[#0c1220] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#00dce5]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00dce5]/10 border border-[#00dce5]/20 text-xs text-[#00dce5] font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Propuestas Transparentes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Soluciones Adaptadas al Tamaño y Metas de tu Negocio
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Cada proyecto es único. En lugar de imponerte tarifas genéricas que no se ajustan a tu realidad, evaluamos tus requerimientos para ofrecerte la <strong className="text-white">mejor relación costo-beneficio</strong>.
          </p>
        </div>

        {/* 3 Main Commercial Solution Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
          {plans.map((plan) => (
            <div
              key={plan.id}
              id={`plan-card-${plan.id}`}
              className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.recommended
                  ? 'bg-[#111d33] border-2 border-[#00dce5] shadow-[0_15px_40px_rgba(0,220,229,0.15)] lg:-translate-y-3'
                  : 'bg-[#0e1728] border border-white/10 hover:border-white/20 shadow-xl'
              }`}
            >
              {/* Recommended Top Badge */}
              {plan.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#00dce5] text-[#090d16] font-bold text-xs px-4 py-1 rounded-full shadow-md tracking-wider uppercase">
                  {plan.badge}
                </div>
              )}

              <div>
                {/* Header of Plan */}
                <div className="mb-6">
                  {!plan.recommended && (
                    <span className="text-[11px] font-mono text-[#00dce5] uppercase tracking-wider block mb-1">
                      {plan.badge}
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-snug">
                    {plan.subtitle}
                  </p>
                </div>

                {/* Commercial Value Box instead of raw number */}
                <div className="bg-[#09101c]/80 border border-white/10 rounded-2xl p-4 mb-6 text-center">
                  <span className="text-[11px] font-mono text-slate-400 block mb-1">
                    Inversión del Proyecto
                  </span>
                  <div className="text-base sm:text-lg font-bold text-[#00dce5]">
                    {plan.highlightPhrase}
                  </div>
                  <span className="text-[11px] text-slate-400 block mt-1">
                    {plan.commercialPitch}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {plan.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                    ¿Qué incluye tu solución?
                  </span>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#00dce5] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="pt-6 border-t border-white/10 space-y-2">
                <a
                  href={`https://wa.me/573025239575?text=${encodeURIComponent(plan.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex justify-center items-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 shadow-md ${
                    plan.recommended
                      ? 'bg-[#00dce5] hover:bg-[#63f7ff] text-[#090d16] shadow-[0_0_20px_rgba(0,220,229,0.3)]'
                      : 'bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/15'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{plan.ctaText}</span>
                </a>

                <a
                  href="#contacto"
                  className="w-full text-center text-xs text-slate-400 hover:text-white transition-colors block py-1"
                >
                  O enviar formulario con detalles
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Solution Estimator / Custom Project Builder */}
        <div className="bg-[#101a2c] border border-[#00dce5]/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          <div className="max-w-3xl mx-auto">
            
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00dce5]/10 text-xs text-[#00dce5] font-semibold mb-2">
                <Sliders className="w-3.5 h-3.5" />
                <span>Configurador Rápido</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                ¿Prefieres armar tu solución a medida en 30 segundos?
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Selecciona lo que tu negocio necesita hoy y te enviaré una propuesta personalizada y transparente sin ningún compromiso.
              </p>
            </div>

            {/* Step 1: Base Project Type */}
            <div className="mb-6">
              <label className="text-xs font-mono uppercase text-slate-300 font-semibold block mb-3">
                1. Selecciona el servicio base principal:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'esencial', name: 'Landing Esencial' },
                  { id: 'profesional', name: 'Landing Pro' },
                  { id: 'automatizada', name: 'Web + Flujos' },
                  { id: 'soporte', name: 'Soporte TI' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setProjectType(item.id as any)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold transition-all border ${
                      projectType === item.id
                        ? 'bg-[#00dce5] text-[#090d16] border-[#00dce5] font-bold shadow-md'
                        : 'bg-[#090e19] text-slate-300 border-white/10 hover:border-white/20'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Extras / Functionalities */}
            <div className="mb-8">
              <label className="text-xs font-mono uppercase text-slate-300 font-semibold block mb-3">
                2. Añade funcionalidades opcionales según tu caso:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                <label className="flex items-center gap-3 p-3 rounded-xl bg-[#090e19] border border-white/10 cursor-pointer hover:border-white/20 transition-colors">
                  <input
                    type="checkbox"
                    checked={includeDomain}
                    onChange={(e) => setIncludeDomain(e.target.checked)}
                    className="w-4 h-4 rounded text-[#00dce5] focus:ring-[#00dce5] accent-[#00dce5]"
                  />
                  <div className="text-xs">
                    <span className="text-white font-medium block">Dominio y Hosting Configurado</span>
                    <span className="text-slate-400 text-[11px]">Tu dirección .com y servidor seguro</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl bg-[#090e19] border border-white/10 cursor-pointer hover:border-white/20 transition-colors">
                  <input
                    type="checkbox"
                    checked={includeAppointments}
                    onChange={(e) => setIncludeAppointments(e.target.checked)}
                    className="w-4 h-4 rounded text-[#00dce5] focus:ring-[#00dce5] accent-[#00dce5]"
                  />
                  <div className="text-xs">
                    <span className="text-white font-medium block">Agendamiento y Citas Online</span>
                    <span className="text-slate-400 text-[11px]">Calendario automático para tus clientes</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl bg-[#090e19] border border-white/10 cursor-pointer hover:border-white/20 transition-colors">
                  <input
                    type="checkbox"
                    checked={includeSheets}
                    onChange={(e) => setIncludeSheets(e.target.checked)}
                    className="w-4 h-4 rounded text-[#00dce5] focus:ring-[#00dce5] accent-[#00dce5]"
                  />
                  <div className="text-xs">
                    <span className="text-white font-medium block">Conexión Google Sheets / Alerta WhatsApp</span>
                    <span className="text-slate-400 text-[11px]">Tus datos organizados en tiempo real</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl bg-[#090e19] border border-white/10 cursor-pointer hover:border-white/20 transition-colors">
                  <input
                    type="checkbox"
                    checked={includeSupport}
                    onChange={(e) => setIncludeSupport(e.target.checked)}
                    className="w-4 h-4 rounded text-[#00dce5] focus:ring-[#00dce5] accent-[#00dce5]"
                  />
                  <div className="text-xs">
                    <span className="text-white font-medium block">Soporte Continuo & Mantenimiento</span>
                    <span className="text-slate-400 text-[11px]">Asistencia técnica y actualizaciones</span>
                  </div>
                </label>

              </div>
            </div>

            {/* Direct CTA with Custom Message */}
            <div className="bg-[#090e19] border border-white/10 rounded-2xl p-5 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <span className="text-xs text-[#00dce5] font-semibold block">Configuración Lista</span>
                <span className="text-sm text-white font-bold">Solicita el presupuesto exacto para este paquete</span>
              </div>

              <a
                href={getCustomQuoteUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#00dce5] hover:bg-[#63f7ff] text-[#090d16] font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-[0_0_20px_rgba(0,220,229,0.3)] transition-all hover:scale-105 shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pedir Propuesta por WhatsApp</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
