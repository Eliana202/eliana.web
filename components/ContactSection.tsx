'use client';

import React, { useState } from 'react';
import { 
  MessageSquare, 
  Mail, 
  Phone, 
  Instagram, 
  Send, 
  CheckCircle2, 
  Clock, 
  Sparkles,
  ArrowRight,
  ShieldAlert,
  MessageCircle
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: 'Landing Page Profesional',
    mensaje: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    // Simulate sending and trigger WhatsApp link option
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 600);
  };

  const getEncodedWhatsAppMessage = () => {
    const text = `Hola Eliana! Mi nombre es ${formData.nombre || 'un cliente interesado'}.\n\n- Servicio de interés: ${formData.servicio}\n- Mi correo: ${formData.email || 'No especificado'}\n- Mi teléfono: ${formData.telefono || 'No especificado'}\n- Mensaje: ${formData.mensaje || 'Deseo más información sobre tus servicios'}`;
    return `https://wa.me/573025239575?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-[#090d16] relative">
      {/* Background radial accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#00dce5]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00dce5]/10 border border-[#00dce5]/20 text-xs text-[#00dce5] font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Contacto Directo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Hablemos de tu Proyecto
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            ¿Tienes dudas, una idea en mente o necesitas soporte para tus equipos? Cuéntame qué necesitas y te responderé con una propuesta clara y sin rodeos.
          </p>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0e1728] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
              
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#00dce5] font-semibold block mb-1">
                  Atención Inmediata
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Canales de Comunicación
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2">
                  Atiendo cada mensaje de forma personalizada para entender a fondo la necesidad de tu negocio.
                </p>
              </div>

              <div className="space-y-4">
                
                {/* WhatsApp */}
                <a
                  href="https://wa.me/573025239575?text=Hola%20Eliana,%20quiero%20hacerte%20una%20consulta%20sobre%20tus%20servicios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#121f35]/60 hover:bg-[#121f35] border border-white/5 hover:border-[#25D366]/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">
                      WhatsApp (Respuesta Rápida)
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#25D366] transition-colors">
                      +57 302 523 9575
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#25D366] transition-colors" />
                </a>

                {/* Email */}
                <a
                  href="mailto:elianaarenas972@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#121f35]/60 hover:bg-[#121f35] border border-white/5 hover:border-[#00dce5]/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#00dce5]/15 text-[#00dce5] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex-1 truncate">
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">
                      Correo Electrónico
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#00dce5] transition-colors truncate block">
                      elianaarenas972@gmail.com
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#00dce5] transition-colors shrink-0" />
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#121f35]/60 hover:bg-[#121f35] border border-white/5 hover:border-pink-500/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-pink-500/15 text-pink-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">
                      Instagram Profesional
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-pink-400 transition-colors">
                      @Soluciones Técnologicas
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-pink-400 transition-colors" />
                </a>

              </div>

              {/* Working Hours / Guarantees */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Clock className="w-4 h-4 text-[#00dce5] shrink-0" />
                  <span>Horario de atención: Lunes a Sábado</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Diagnóstico inicial y asesoría sin compromiso</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0e1728] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl">
              
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  Cuéntame qué necesitas
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Completa los datos y te enviaré una propuesta adaptada a tu presupuesto.
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-2xl p-6 sm:p-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h4 className="text-xl font-bold text-white">
                    ¡Gracias por tu mensaje, {formData.nombre || 'amigo(a)'}!
                  </h4>

                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    He recibido tu consulta sobre <strong className="text-white">{formData.servicio}</strong>. Me pondré en contacto contigo a la brevedad.
                  </p>

                  <div className="pt-2">
                    <a
                      href={getEncodedWhatsAppMessage()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-[#090d16] font-bold text-sm px-6 py-3 rounded-xl shadow-lg transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Abrir y enviar también por WhatsApp para respuesta más rápida</span>
                    </a>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        nombre: '',
                        email: '',
                        telefono: '',
                        servicio: 'Landing Page Profesional',
                        mensaje: '',
                      });
                    }}
                    className="text-xs text-slate-400 hover:text-white underline block mx-auto pt-2"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Nombre */}
                    <div>
                      <label className="text-xs font-mono uppercase text-slate-300 font-semibold block mb-1.5">
                        Tu Nombre o Negocio *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Juan Pérez / Consultoría SAS"
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        className="w-full bg-[#080d17] border border-white/10 focus:border-[#00dce5] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* WhatsApp */}
                    <div>
                      <label className="text-xs font-mono uppercase text-slate-300 font-semibold block mb-1.5">
                        Número de WhatsApp / Teléfono *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Ej. +57 300 000 0000"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        className="w-full bg-[#080d17] border border-white/10 focus:border-[#00dce5] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Email */}
                    <div>
                      <label className="text-xs font-mono uppercase text-slate-300 font-semibold block mb-1.5">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="juan@tuempresa.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#080d17] border border-white/10 focus:border-[#00dce5] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Servicio de Interés */}
                    <div>
                      <label className="text-xs font-mono uppercase text-slate-300 font-semibold block mb-1.5">
                        Servicio de Interés
                      </label>
                      <select
                        value={formData.servicio}
                        onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                        className="w-full bg-[#080d17] border border-white/10 focus:border-[#00dce5] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                      >
                        <option value="Landing Page Profesional">Landing Page Profesional</option>
                        <option value="Desarrollo Web Completo">Desarrollo Web Completo</option>
                        <option value="Automatización de Procesos">Automatización de Procesos</option>
                        <option value="Sistema de Citas y Agendamiento">Sistema de Citas y Agendamiento</option>
                        <option value="Soporte Técnico de Computadores">Soporte Técnico de Computadores</option>
                        <option value="Proyecto Personalizado / Varios">Proyecto Personalizado / Varios</option>
                      </select>
                    </div>

                  </div>

                  {/* Mensaje */}
                  <div>
                    <label className="text-xs font-mono uppercase text-slate-300 font-semibold block mb-1.5">
                      Detalles de tu Necesidad o Proyecto
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Cuéntame brevemente qué te gustaría lograr, si ya tienes un sitio web o qué problemas estás experimentando..."
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      className="w-full bg-[#080d17] border border-white/10 focus:border-[#00dce5] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full sm:w-auto flex-1 inline-flex justify-center items-center gap-2 bg-[#00dce5] hover:bg-[#63f7ff] text-[#090d16] font-bold text-sm py-3.5 px-6 rounded-xl shadow-[0_0_20px_rgba(0,220,229,0.3)] transition-all disabled:opacity-50"
                    >
                      {sending ? (
                        <span>Enviando información...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Solicitar Propuesta Personalizada</span>
                        </>
                      )}
                    </button>

                    <a
                      href={getEncodedWhatsAppMessage()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex justify-center items-center gap-2 py-3.5 px-5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/30 text-sm font-semibold transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Cotizar vía WhatsApp</span>
                    </a>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center pt-2">
                    Tus datos son 100% privados y no se comparten con terceros.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
