'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, MessageCircle, Sparkles, Zap, Laptop, ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'preview' | 'flow'>('preview');

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#090d16]"
    >
      {/* Background Ambient Glows & Subtle Grid */}
      <div className="absolute inset-0 tech-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#00dce5]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#3b82f6]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Impactful Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Pill / Badge */}
            <div
              id="hero-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#00dce5]/30 text-xs sm:text-sm text-[#00dce5] mb-6 shadow-[0_0_15px_rgba(0,220,229,0.1)]"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#00dce5] animate-ping" />
              <span className="font-semibold tracking-wide">Desarrollo Web &bull; Automatización &bull; Soporte TI</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-main-heading"
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] mb-6"
            >
              Haz que tu negocio se vea profesional,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00dce5] via-[#38bdf8] to-[#93c5fd]">
                funcione mejor
              </span>{' '}
              y trabaje de forma más inteligente.
            </h1>

            {/* Subtitle / Description */}
            <p
              id="hero-subtitle"
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8"
            >
              Desarrollo <strong className="text-white font-medium">landing pages de alta conversión</strong>,{' '}
              <strong className="text-white font-medium">automatizaciones</strong> que eliminan tareas repetitivas y{' '}
              <strong className="text-white font-medium">soporte tecnológico integral</strong> adaptado a las necesidades reales de pequeños y medianos negocios.
            </p>

            {/* Value Highlights Pill Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-8">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 bg-white/[0.03] border border-white/5 px-3 py-2 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-[#00dce5] shrink-0" />
                <span>Sitios ultrarrápidos y móviles</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 bg-white/[0.03] border border-white/5 px-3 py-2 rounded-lg">
                <Zap className="w-4 h-4 text-[#38bdf8] shrink-0" />
                <span>Flujos automáticos con WhatsApp</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 bg-white/[0.03] border border-white/5 px-3 py-2 rounded-lg">
                <ShieldCheck className="w-4 h-4 text-[#a78bfa] shrink-0" />
                <span>Soporte cercano y confiable</span>
              </div>
            </div>

            {/* CTAs Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#contacto"
                id="hero-cta-primary"
                className="inline-flex justify-center items-center gap-2 bg-[#00dce5] hover:bg-[#63f7ff] text-[#090d16] font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-[0_0_25px_rgba(0,220,229,0.35)] hover:shadow-[0_0_35px_rgba(0,220,229,0.5)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Quiero impulsar mi negocio</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#servicios"
                id="hero-cta-services"
                className="inline-flex justify-center items-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/15 hover:border-white/30 font-medium text-sm sm:text-base px-6 py-3.5 rounded-xl transition-all duration-300"
              >
                <span>Conocer mis servicios</span>
              </a>

              <a
                href="https://wa.me/573025239575?text=Hola%20Eliana,%20quiero%20impulsar%20mi%20negocio%20con%20una%20soluci%C3%B3n%20digital"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-whatsapp"
                className="inline-flex justify-center items-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 font-medium text-sm sm:text-base px-5 py-3.5 rounded-xl transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Directo</span>
              </a>
            </div>

            {/* Social Proof / Guarantee line */}
            <p className="text-xs text-slate-400 mt-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
              Respuesta en menos de 24 horas &bull; Asesoría y diagnóstico inicial sin costo
            </p>
          </div>

          {/* Right Column: High-Tech Interactive Showcase Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative halo */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#00dce5]/25 via-blue-500/20 to-[#00dce5]/10 blur-xl opacity-75" />

              {/* Main Terminal/Card Container */}
              <div
                id="hero-interactive-card"
                className="relative bg-[#0d1525]/90 border border-white/15 rounded-2xl p-5 sm:p-6 shadow-2xl backdrop-blur-xl"
              >
                {/* Window Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-400">Soluciones Técnologicas / preview</span>
                  </div>

                  {/* Switcher Tab */}
                  <div className="flex items-center bg-black/40 p-0.5 rounded-lg border border-white/10 text-xs">
                    <button
                      onClick={() => setActiveTab('preview')}
                      className={`px-2.5 py-1 rounded-md transition-colors ${
                        activeTab === 'preview'
                          ? 'bg-[#00dce5] text-[#090d16] font-bold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Landing Web
                    </button>
                    <button
                      onClick={() => setActiveTab('flow')}
                      className={`px-2.5 py-1 rounded-md transition-colors ${
                        activeTab === 'flow'
                          ? 'bg-[#00dce5] text-[#090d16] font-bold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Automatización
                    </button>
                  </div>
                </div>

                {/* Tab 1: High Converting Landing Mockup */}
                {activeTab === 'preview' ? (
                  <div className="space-y-4">
                    {/* Simulated Hero of client */}
                    <div className="bg-[#121c2e] p-4 rounded-xl border border-white/10 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#00dce5] bg-[#00dce5]/10 px-2 py-0.5 rounded">
                          Negocio del Cliente
                        </span>
                        <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>99/100 Velocidad</span>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <div className="text-sm sm:text-base font-bold text-white">
                          Atrae Más Clientes Calificados Todos los Días
                        </div>
                        <p className="text-xs text-slate-400 leading-snug">
                          Landing optimizada para carga rápida, diseño visual moderno y conexión directa a WhatsApp.
                        </p>
                      </div>

                      {/* Mock CTA inside */}
                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center gap-2 bg-[#25D366] text-[#090d16] font-bold text-xs px-3 py-1.5 rounded-lg shadow-sm">
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>¡Agendar por WhatsApp!</span>
                        </div>
                        <span className="text-[10px] text-slate-500">Cero fricción</span>
                      </div>
                    </div>

                    {/* Live Metric Badges */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-[#10192a] p-3 rounded-xl border border-white/5">
                        <span className="text-[11px] text-slate-400 block mb-1">Tasa de Conversión</span>
                        <span className="text-xl font-bold text-white">+38%</span>
                        <span className="text-[10px] text-[#00dce5] block mt-0.5">vs. sitios tradicionales</span>
                      </div>
                      <div className="bg-[#10192a] p-3 rounded-xl border border-white/5">
                        <span className="text-[11px] text-slate-400 block mb-1">Tiempo de Respuesta</span>
                        <span className="text-xl font-bold text-emerald-400">&lt; 3 seg</span>
                        <span className="text-[10px] text-slate-400 block mt-0.5">notificación directa</span>
                      </div>
                    </div>

                    {/* Simulated Recent Event */}
                    <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 p-2.5 rounded-xl">
                      <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <Sparkles className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-xs">
                        <span className="text-white font-medium block">Nuevo prospecto recibido</span>
                        <span className="text-slate-400 text-[11px]">Enviado automáticamente al WhatsApp del dueño</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Tab 2: Automation Flow Mockup */
                  <div className="space-y-3.5">
                    <div className="text-xs text-slate-300 font-medium flex items-center justify-between">
                      <span>Flujo inteligente sin intervención manual:</span>
                      <span className="text-[10px] text-[#00dce5] bg-[#00dce5]/10 px-2 py-0.5 rounded">100% Automático</span>
                    </div>

                    {/* Flow Steps */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 bg-[#111c2e] p-2.5 rounded-lg border border-white/10">
                        <div className="w-6 h-6 rounded-md bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-mono font-bold">
                          1
                        </div>
                        <div className="text-xs flex-1">
                          <span className="text-white font-medium">Cliente llena formulario / botón</span>
                          <span className="text-slate-400 block text-[10px]">En la landing page optimizada</span>
                        </div>
                        <span className="text-xs text-blue-400 font-mono">0.0s</span>
                      </div>

                      <div className="flex items-center gap-3 bg-[#111c2e] p-2.5 rounded-lg border border-[#00dce5]/30 shadow-[0_0_10px_rgba(0,220,229,0.1)]">
                        <div className="w-6 h-6 rounded-md bg-[#00dce5]/20 text-[#00dce5] flex items-center justify-center text-xs font-mono font-bold">
                          2
                        </div>
                        <div className="text-xs flex-1">
                          <span className="text-white font-medium">Alerta instantánea a WhatsApp</span>
                          <span className="text-slate-400 block text-[10px]">Tú recibes el nombre, teléfono y necesidad</span>
                        </div>
                        <span className="text-xs text-[#00dce5] font-mono">0.8s</span>
                      </div>

                      <div className="flex items-center gap-3 bg-[#111c2e] p-2.5 rounded-lg border border-white/10">
                        <div className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-mono font-bold">
                          3
                        </div>
                        <div className="text-xs flex-1">
                          <span className="text-white font-medium">Registro en Google Sheets / CRM</span>
                          <span className="text-slate-400 block text-[10px]">Cero datos perdidos o desordenados</span>
                        </div>
                        <span className="text-xs text-emerald-400 font-mono">1.2s</span>
                      </div>

                      <div className="flex items-center gap-3 bg-[#111c2e] p-2.5 rounded-lg border border-white/10">
                        <div className="w-6 h-6 rounded-md bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-mono font-bold">
                          4
                        </div>
                        <div className="text-xs flex-1">
                          <span className="text-white font-medium">Cita agregada a Calendario</span>
                          <span className="text-slate-400 block text-[10px]">Con recordatorio automático al cliente</span>
                        </div>
                        <span className="text-xs text-amber-400 font-mono">2.0s</span>
                      </div>
                    </div>

                    <div className="pt-2 text-center">
                      <a
                        href="#automatizacion"
                        className="text-xs text-[#00dce5] hover:underline inline-flex items-center gap-1 font-medium"
                      >
                        Ver cómo implementar este flujo en tu negocio <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                )}

                {/* Bottom Bar Info */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Laptop className="w-3.5 h-3.5 text-[#00dce5]" />
                    Desarrollado con estándares web modernos
                  </span>
                  <span className="text-slate-300 font-medium">Solución Tec</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
