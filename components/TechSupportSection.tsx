'use client';

import React, { useState } from 'react';
import { 
  Wrench, 
  Cpu, 
  Printer, 
  Wifi, 
  ShieldCheck, 
  Headphones, 
  CheckCircle2, 
  ArrowRight,
  HardDrive,
  Activity,
  AlertCircle
} from 'lucide-react';

export default function TechSupportSection() {
  const [selectedIssue, setSelectedIssue] = useState<string>('computador-lento');

  const supportPillars = [
    {
      icon: Activity,
      title: 'Diagnóstico de Problemas',
      desc: 'Evaluación rápida y precisa de fallas en hardware o lentitud del sistema operativo para encontrar la causa raíz sin rodeos.',
    },
    {
      icon: Cpu,
      title: 'Instalación & Configuración de Software',
      desc: 'Instalación de sistemas operativos, paquetes de oficina, programas de gestión, antivirus y utilidades esenciales con licencias oficiales.',
    },
    {
      icon: HardDrive,
      title: 'Configuración de Equipos y Periféricos',
      desc: 'Puesta en marcha de computadores portátiles y de mesa, monitores, memorias, almacenamiento SSD y periféricos para un rendimiento óptimo.',
    },
    {
      icon: Printer,
      title: 'Impresoras y Escáneres',
      desc: 'Instalación de controladores, configuración en red Wi-Fi o cableada y solución de atascos o problemas de comunicación entre equipos.',
    },
    {
      icon: Wifi,
      title: 'Conectividad Básica & Redes',
      desc: 'Configuración segura de routers, redes Wi-Fi empresariales o domésticas, switches y solución de caídas o intermitencias en la conexión.',
    },
    {
      icon: ShieldCheck,
      title: 'Mantenimiento Preventivo',
      desc: 'Limpieza de software, eliminación de archivos basura y optimización térmica para alargar la vida útil de tus equipos de trabajo.',
    },
    {
      icon: AlertCircle,
      title: 'Solución de Incidentes Inmediatos',
      desc: 'Respuesta ante pantallas azules, virus, bloqueos imprevistos o programas que no responden cuando más los necesitas.',
    },
    {
      icon: Headphones,
      title: 'Asistencia y Capacitación al Usuario',
      desc: 'Acompañamiento paciente y pedagógico en lenguaje humano para que cualquier miembro de tu equipo use la tecnología con total soltura.',
    },
  ];

  const commonIssues = [
    { id: 'computador-lento', label: 'Mi computador está muy lento o se traba', message: 'Hola Eliana, mi computador está muy lento y necesito un diagnóstico o mantenimiento preventivo.' },
    { id: 'impresora-error', label: 'Problemas con impresora o escáner', message: 'Hola Eliana, tengo problemas configurando una impresora/escáner en mi oficina.' },
    { id: 'instalacion-programas', label: 'Instalación o actualización de software', message: 'Hola Eliana, requiero apoyo instalando y configurando programas de trabajo en mis equipos.' },
    { id: 'red-internet', label: 'Fallas de conexión o Wi-Fi inestable', message: 'Hola Eliana, tengo problemas de conectividad Wi-Fi o red en mis equipos de trabajo.' },
  ];

  const activeIssue = commonIssues.find(i => i.id === selectedIssue) || commonIssues[0];

  return (
    <section id="soporte" className="py-20 lg:py-28 bg-[#090d16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00dce5]/10 border border-[#00dce5]/20 text-xs text-[#00dce5] font-semibold mb-4">
            <Wrench className="w-3.5 h-3.5" />
            <span>Soporte Técnico de Confianza</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Tus Herramientas de Trabajo Siempre Listas y en Óptimo Rendimiento
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Resuelvo problemas tecnológicos de forma clara, metódica y eficiente. Sin explicaciones confusas ni pérdidas de tiempo: solo soluciones que te devuelven la tranquilidad operativa.
          </p>
        </div>

        {/* Support Grid (8 items from prompt) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {supportPillars.map((item, idx) => {
            const IconC = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#0e1728] border border-white/10 hover:border-[#00dce5]/30 rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-[#00dce5]/30 flex items-center justify-center text-[#00dce5] mb-4 group-hover:scale-105 transition-all">
                    <IconC className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#00dce5] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Atención Profesional</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Issue Helper / Fast CTA Card */}
        <div className="bg-gradient-to-r from-[#0d182b] via-[#111f38] to-[#0d182b] border border-[#00dce5]/25 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-xs font-mono uppercase tracking-wider text-[#00dce5] font-semibold block mb-2">
                Asistencia Rápida
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                ¿Tienes una urgencia o un equipo fallando ahora mismo?
              </h3>
              <p className="text-sm text-slate-300 mb-6">
                Selecciona la situación que estás experimentando y te asesoraré directamente para brindarte la solución más rápida.
              </p>

              {/* Quick Select Buttons */}
              <div className="flex flex-wrap gap-2 mb-4">
                {commonIssues.map((issue) => (
                  <button
                    key={issue.id}
                    onClick={() => setSelectedIssue(issue.id)}
                    className={`text-xs px-3 py-2 rounded-xl border transition-all text-left ${
                      selectedIssue === issue.id
                        ? 'bg-[#00dce5] text-[#090d16] font-bold border-[#00dce5]'
                        : 'bg-white/[0.04] text-slate-300 border-white/10 hover:border-white/25 hover:text-white'
                    }`}
                  >
                    {issue.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Action Box */}
            <div className="lg:col-span-5 bg-[#090f1d] border border-white/10 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[#00dce5]/10 text-[#00dce5] flex items-center justify-center mx-auto mb-3">
                <Headphones className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white mb-1">
                Atención Directa &bull; Eliana
              </h4>
              <p className="text-xs text-slate-400 mb-5">
                Diagnóstico inicial para orientarte sobre la mejor alternativa técnica.
              </p>

              <a
                href={`https://wa.me/573025239575?text=${encodeURIComponent(activeIssue.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex justify-center items-center gap-2 bg-[#00dce5] hover:bg-[#63f7ff] text-[#090d16] font-bold text-sm py-3 px-5 rounded-xl shadow-[0_0_20px_rgba(0,220,229,0.3)] transition-all"
              >
                <span>Solicitar Asistencia Técnica</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <span className="text-[11px] text-slate-400 block mt-3">
                Modalidad remota o presencial según disponibilidad
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
