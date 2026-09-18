'use client';

import React from 'react';
import { 
  Code2, 
  Cpu, 
  CalendarCheck, 
  Workflow, 
  Wrench, 
  Headphones, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  UserCheck,
  CheckCircle2,
  HardDrive
} from 'lucide-react';

export default function Bio() {
  const capabilities = [
    {
      icon: Code2,
      title: 'Desarrollo de Páginas Web',
      desc: 'Sitios web modernos, seguros, rápidos y adaptados a cualquier dispositivo móvil o de escritorio.',
    },
    {
      icon: Sparkles,
      title: 'Landing Pages Profesionales',
      desc: 'Páginas enfocadas 100% en captar clientes, transmitir confianza y maximizar tus conversiones.',
    },
    {
      icon: Workflow,
      title: 'Automatizaciones & Flujos',
      desc: 'Conexión de herramientas y eliminación de tareas manuales repetitivas que consumen tu tiempo.',
    },
    {
      icon: CalendarCheck,
      title: 'Agendamiento y Citas Online',
      desc: 'Sistemas automáticos para que tus clientes elijan fecha y hora sin intercambiar decenas de mensajes.',
    },
    {
      icon: Cpu,
      title: 'Integración de Formularios & Herramientas',
      desc: 'Sincronización directa con WhatsApp, correo electrónico, Google Sheets, CRM y pasarelas.',
    },
    {
      icon: Wrench,
      title: 'Soporte Técnico Especializado',
      desc: 'Diagnóstico rápido, solución de problemas y mantenimiento preventivo para que nada se detenga.',
    },
    {
      icon: HardDrive,
      title: 'Instalación & Configuración de Equipos',
      desc: 'Puesta a punto de computadores, periféricos, impresoras, software y conectividad confiable.',
    },
    {
      icon: Headphones,
      title: 'Atención al Usuario & Acompañamiento',
      desc: 'Asistencia técnica cercana, paciente y sin lenguaje técnico confuso, pensada para ayudarte.',
    },
  ];

  return (
    <section id="sobre-mi" className="py-20 lg:py-28 bg-[#0c1220] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00dce5]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Header / Bio Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
          
          {/* Profile Visual Badge & Summary Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#00dce5]/30 to-blue-500/20 blur-lg opacity-70" />
              
              <div className="relative bg-[#111b2d] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl text-center">
                
                {/* Avatar Icon / Tech Initials */}
                <div className="relative mx-auto w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-[#00dce5] via-[#38bdf8] to-[#60a5fa] p-1 shadow-[0_0_30px_rgba(0,220,229,0.3)] mb-5">
                  <div className="w-full h-full rounded-[14px] bg-[#0c1424] flex flex-col items-center justify-center text-white">
                    <span className="font-mono text-3xl font-extrabold text-[#00dce5] tracking-tight">ST</span>
                    <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest mt-0.5">Solución Técnologica</span>
                  </div>
                  {/* Status Indicator */}
                  <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-[#10b981] border-2 border-[#0c1424] shadow-sm" title="Disponible para nuevos proyectos" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  Desarrollo y Soluciones
                </h3>
                
                {/* Specific Role Requested */}
                <p className="text-xs sm:text-sm font-medium text-[#00dce5] leading-relaxed mb-4">
                  Servicios <br className="hidden sm:block" />
                  <span className="text-slate-300">| Soporte TI | Atención al Usuario | Automatización | Desarrollo Web | Workflow</span>
                </p>

                <div className="border-t border-white/10 pt-4 mt-2 space-y-2 text-left">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <UserCheck className="w-4 h-4 text-[#00dce5] shrink-0" />
                    <span>Trato directo y personalizado (sin intermediarios)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#00dce5] shrink-0" />
                    <span>Enfocada en resolver problemas reales de tu negocio</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-[#00dce5] shrink-0" />
                    <span>Compromiso, transparencia y soporte continuo</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <a
                    href="https://wa.me/573025239575?text=Hola%20Eliana,%20le%C3%AD%20tu%20perfil%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20mi%20proyecto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex justify-center items-center gap-2 py-2.5 px-4 rounded-xl bg-white/[0.05] hover:bg-[#00dce5]/10 border border-white/10 hover:border-[#00dce5]/40 text-xs sm:text-sm font-semibold text-white hover:text-[#00dce5] transition-all"
                  >
                    <span>Conectar directamente conmigo</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Story & Mission */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00dce5]/10 border border-[#00dce5]/20 text-xs text-[#00dce5] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Presentación Profesional</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Tecnología clara, accesible y <span className="text-[#00dce5]">orientada al crecimiento</span> de tu negocio.
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Detrás de cada proyecto digital exitoso no hay fórmulas mágicas ni tecnicismos confusos: hay una <strong className="text-white">estrategia bien pensada</strong>, código confiable y un acompañamiento cercano.
              </p>
              <p>
                Como <strong className="text-white font-medium">Brindo Soluciones en Soporte TI</strong>, combino la solidez técnica con una profunda vocación de servicio al cliente. Mi objetivo principal es <strong className="text-[#00dce5] font-medium">ayudar a pequeños y medianos negocios, profesionales independientes y emprendedores</strong> a tener una presencia digital profesional que genere confianza y a optimizar sus procesos diarios mediante tecnología y automatización.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm italic border-l-2 border-[#00dce5] pl-4 py-1">
                &ldquo;No solo construyo sitios web; creo herramientas digitales que te ahorran horas de trabajo repetitivo, conectan con tus clientes y hacen que tu operación diaria funcione sin dolores de cabeza.&rdquo;
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 bg-[#00dce5] hover:bg-[#63f7ff] text-[#090d16] font-bold text-sm px-6 py-3 rounded-xl shadow-[0_0_20px_rgba(0,220,229,0.3)] transition-all"
              >
                <span>Hablemos de tu proyecto</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#portafolio"
                className="inline-flex items-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 text-sm font-medium px-5 py-3 rounded-xl transition-all"
              >
                <span>Ver proyectos realizados</span>
              </a>
            </div>
          </div>
        </div>

        {/* Specialized Areas Grid (Required List in Prompt) */}
        <div className="mt-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Mis Áreas de Especialidad Técnica
            </h3>
            <p className="text-sm text-slate-400">
              Servicios integrados para cubrir desde la captación de clientes en internet hasta el soporte de tus equipos de trabajo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#0e1726]/80 hover:bg-[#121f35] border border-white/10 hover:border-[#00dce5]/30 rounded-xl p-5 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-sm"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#00dce5]/10 border border-[#00dce5]/20 flex items-center justify-center text-[#00dce5] group-hover:scale-110 transition-transform duration-300 mb-3.5">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white mb-1.5 group-hover:text-[#00dce5] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center text-[11px] text-[#00dce5] font-medium opacity-80 group-hover:opacity-100">
                    <span>Solución a tu medida</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
