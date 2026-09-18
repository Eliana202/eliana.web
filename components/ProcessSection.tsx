'use client';

import React from 'react';
import { 
  Compass, 
  Palette, 
  Code2, 
  Rocket, 
  HeartHandshake, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Conocemos tu necesidad',
      subtitle: 'Diagnóstico & Estrategia',
      icon: Compass,
      desc: 'Conversamos sobre tu negocio, tus objetivos, a quién te diriges y qué proceso necesitas resolver o automatizar.',
      deliverable: 'Alcance claro y sin sorpresas',
    },
    {
      number: '02',
      title: 'Diseñamos la solución',
      subtitle: 'Estructura & Propuesta',
      icon: Palette,
      desc: 'Organizamos la arquitectura de tu página, los llamados a la acción y el flujo exacto por donde pasarán tus clientes.',
      deliverable: 'Prototipo visual y esquema técnico',
    },
    {
      number: '03',
      title: 'Desarrollamos',
      subtitle: 'Construcción con Código Limpio',
      icon: Code2,
      desc: 'Construyo tu solución con tecnologías modernas, asegurando alta velocidad de carga, diseño responsive y seguridad.',
      deliverable: 'Sitio funcional y optimizado',
    },
    {
      number: '04',
      title: 'Implementamos',
      subtitle: 'Conexión & Pruebas en Vivo',
      icon: Rocket,
      desc: 'Conectamos WhatsApp, formularios, hojas de cálculo, correo o calendarios y hacemos pruebas reales para que todo opere impecable.',
      deliverable: 'Lanzamiento oficial en tu dominio',
    },
    {
      number: '05',
      title: 'Te acompañamos',
      subtitle: 'Capacitación & Soporte Continuo',
      icon: HeartHandshake,
      desc: 'Te enseño cómo usar tus nuevas herramientas y permanezco disponible para asistirte, resolver dudas y dar soporte técnico.',
      deliverable: 'Tranquilidad y respaldo continuo',
    },
  ];

  return (
    <section id="proceso" className="py-20 lg:py-28 bg-[#090d16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00dce5]/10 border border-[#00dce5]/20 text-xs text-[#00dce5] font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Metodología de Trabajo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Un Proceso Simple, Transparente y Sin Fricción
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            De la idea a la realidad en 5 pasos claros. Siempre sabes en qué fase está tu proyecto y qué estamos logrando juntos.
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative">
          {steps.map((step, idx) => {
            const IconC = step.icon;
            return (
              <div
                key={idx}
                className="bg-[#0e1728] border border-white/10 hover:border-[#00dce5]/30 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 relative"
              >
                {/* Step Number Top */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-bold text-[#00dce5]/40 group-hover:text-[#00dce5] transition-colors">
                    {step.number}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#00dce5] group-hover:scale-110 transition-transform">
                    <IconC className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#00dce5] transition-colors">
                    {step.title}
                  </h3>
                  <span className="text-[11px] font-mono text-[#00dce5] block mb-2 font-medium">
                    {step.subtitle}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5">
                  <span className="text-[10px] text-slate-400 block font-mono uppercase tracking-wider">
                    Entregable:
                  </span>
                  <span className="text-xs text-slate-200 font-medium">
                    {step.deliverable}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Banner */}
        <div className="mt-14 text-center">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-[#00dce5] hover:bg-[#63f7ff] text-[#090d16] font-bold text-sm px-7 py-3.5 rounded-xl shadow-[0_0_25px_rgba(0,220,229,0.3)] transition-all hover:-translate-y-0.5"
          >
            <span>Dar el primer paso: Hablemos de tu necesidad</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
