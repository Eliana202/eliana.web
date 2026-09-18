'use client';

import React, { useState } from 'react';
import { 
  Workflow, 
  Clock, 
  CheckCircle2, 
  MessageSquare, 
  FileSpreadsheet, 
  Mail, 
  Calendar, 
  ArrowRight, 
  Sparkles,
  Zap,
  TrendingUp,
  ShieldCheck,
  Play
} from 'lucide-react';

export default function AutomationSection() {
  const [activeScenario, setActiveScenario] = useState<number>(0);

  const scenarios = [
    {
      title: 'Captación y Respuesta a Prospectos',
      subtitle: 'Nunca más un cliente esperando horas por respuesta',
      steps: [
        {
          icon: MessageSquare,
          name: '1. Formulario Web',
          desc: 'El usuario deja sus datos en tu landing page.',
          color: 'from-blue-500/20 to-cyan-500/20 text-cyan-400',
        },
        {
          icon: Zap,
          name: '2. Alerta Inmediata a WhatsApp',
          desc: 'Tú o tu equipo reciben los datos en segundos.',
          color: 'from-emerald-500/20 to-teal-500/20 text-emerald-400',
        },
        {
          icon: FileSpreadsheet,
          name: '3. Registro en Google Sheets',
          desc: 'Base de datos organizada y respaldada al instante.',
          color: 'from-green-500/20 to-emerald-500/20 text-green-400',
        },
        {
          icon: Mail,
          name: '4. Correo de Bienvenida',
          desc: 'Envío automático de catálogo o confirmación.',
          color: 'from-indigo-500/20 to-purple-500/20 text-indigo-400',
        },
      ],
      result: 'El prospecto es atendido en menos de 1 minuto, multiplicando por 3 la probabilidad de cierre.',
    },
    {
      title: 'Agendamiento Automático de Citas',
      subtitle: 'Cero llamadas o chats para coordinar un horario',
      steps: [
        {
          icon: Calendar,
          name: '1. Selección de Fecha',
          desc: 'El cliente escoge hora en tu calendario web.',
          color: 'from-purple-500/20 to-pink-500/20 text-purple-400',
        },
        {
          icon: ShieldCheck,
          name: '2. Bloqueo en Calendario',
          desc: 'Se sincroniza en tiempo real sin cruces de horario.',
          color: 'from-blue-500/20 to-indigo-500/20 text-blue-400',
        },
        {
          icon: MessageSquare,
          name: '3. Recordatorio WhatsApp',
          desc: 'Envío automático 24h y 2h antes de la cita.',
          color: 'from-emerald-500/20 to-teal-500/20 text-emerald-400',
        },
        {
          icon: FileSpreadsheet,
          name: '4. Reporte Semanal',
          desc: 'Consolidado de pacientes o clientes atendidos.',
          color: 'from-amber-500/20 to-orange-500/20 text-amber-400',
        },
      ],
      result: 'Reducción de hasta un 80% en citas canceladas o inasistencias por olvido.',
    },
    {
      title: 'Sincronización de Pedidos y Notificaciones',
      subtitle: 'Control total de tu negocio sin estar pegado a la pantalla',
      steps: [
        {
          icon: Sparkles,
          name: '1. Solicitud de Pedido',
          desc: 'El cliente realiza una orden desde tu catálogo.',
          color: 'from-cyan-500/20 to-blue-500/20 text-cyan-400',
        },
        {
          icon: FileSpreadsheet,
          name: '2. Actualización de Inventario',
          desc: 'Registro en tu hoja de cálculo centralizada.',
          color: 'from-emerald-500/20 to-green-500/20 text-emerald-400',
        },
        {
          icon: MessageSquare,
          name: '3. Mensaje al Cliente',
          desc: 'Confirmación con resumen y estado de la orden.',
          color: 'from-teal-500/20 to-cyan-500/20 text-teal-400',
        },
        {
          icon: Zap,
          name: '4. Alerta a Despacho',
          desc: 'Tu equipo de logística se pone en marcha sin demoras.',
          color: 'from-amber-500/20 to-rose-500/20 text-amber-400',
        },
      ],
      result: 'Operación fluida, clientes informados y menos errores humanos en digitación.',
    },
  ];

  return (
    <section id="automatizacion" className="py-20 lg:py-28 bg-[#0c1220] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#00dce5]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00dce5]/10 border border-[#00dce5]/20 text-xs text-[#00dce5] font-semibold mb-4">
            <Workflow className="w-3.5 h-3.5" />
            <span>Automatización Inteligente</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Menos tareas repetitivas.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00dce5] to-[#38bdf8]">
              Más tiempo para hacer crecer tu negocio.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Te ayudo a conectar tus <strong className="text-white">formularios web, correo electrónico, Google Sheets, calendarios, WhatsApp</strong> y otras herramientas digitales para que la información fluya sola, sin errores humanos ni horas perdidas.
          </p>
        </div>

        {/* 3 Core Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#111c2e] border border-white/10 rounded-2xl p-6 relative">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Ahorro de Tiempo Real</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Elimina horas copiando datos a mano de un chat a una tabla. Tus sistemas hacen el trabajo pesado mientras tú te enfocas en atender y vender.
            </p>
          </div>

          <div className="bg-[#111c2e] border border-[#00dce5]/30 rounded-2xl p-6 relative shadow-[0_0_25px_rgba(0,220,229,0.06)]">
            <div className="w-12 h-12 rounded-xl bg-[#00dce5]/10 border border-[#00dce5]/20 flex items-center justify-center text-[#00dce5] mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Atención Inmediata</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Un cliente interesado que recibe respuesta en segundos tiene 5 veces más probabilidades de comprarte que uno que espera hasta el día siguiente.
            </p>
          </div>

          <div className="bg-[#111c2e] border border-white/10 rounded-2xl p-6 relative">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Orden y Cero Olvidos</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Cada contacto, pedido o cita queda respaldado en tu base de datos centralizada. Cero citas traspapeladas ni clientes olvidados.
            </p>
          </div>
        </div>

        {/* Interactive Flow Visualizer (Demonstrates How Tools Connect) */}
        <div className="bg-[#0e1726] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#00dce5] font-semibold block mb-1">
                Demostración Interactiva
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Mira cómo se conecta tu negocio en la práctica
              </h3>
            </div>

            {/* Scenario Buttons */}
            <div className="flex flex-wrap gap-2">
              {scenarios.map((sc, sidx) => (
                <button
                  key={sidx}
                  onClick={() => setActiveScenario(sidx)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    activeScenario === sidx
                      ? 'bg-[#00dce5] text-[#090d16] shadow-[0_0_15px_rgba(0,220,229,0.3)]'
                      : 'bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  <Play className={`w-3 h-3 ${activeScenario === sidx ? 'fill-current' : ''}`} />
                  <span>Caso {sidx + 1}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Current Scenario Info */}
          <div className="mb-6">
            <h4 className="text-lg sm:text-xl font-bold text-white">
              {scenarios[activeScenario].title}
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              {scenarios[activeScenario].subtitle}
            </p>
          </div>

          {/* Connected Flow Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {scenarios[activeScenario].steps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#121c2e] border border-white/10 hover:border-[#00dce5]/30 rounded-2xl p-5 flex flex-col justify-between relative transition-all group"
                >
                  {/* Step Connector Arrow on Desktop */}
                  {idx < 3 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-slate-500">
                      <ArrowRight className="w-5 h-5 text-[#00dce5]" />
                    </div>
                  )}

                  <div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} border border-white/10 flex items-center justify-center mb-4 shadow-sm`}>
                      <StepIcon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-white block mb-1">
                      {step.name}
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Paso Automatizado</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Result Highlight Banner */}
          <div className="mt-8 bg-[#132238] border border-[#00dce5]/30 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-full bg-[#00dce5]/20 text-[#00dce5] flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-[#00dce5] font-semibold block">
                  Impacto Final del Flujo
                </span>
                <p className="text-sm text-white font-medium">
                  {scenarios[activeScenario].result}
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/573025239575?text=Hola%20Eliana,%20quiero%20automatizar%20un%20flujo%20similar%20en%20mi%20negocio"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 bg-[#00dce5] hover:bg-[#63f7ff] text-[#090d16] font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(0,220,229,0.3)]"
            >
              <span>Quiero automatizar mi negocio</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
