'use client';

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-end flex-col gap-2">
      {/* Speech Bubble / Tooltip */}
      {showTooltip && (
        <div className="bg-[#0e1728] border border-white/10 rounded-2xl p-3 shadow-2xl backdrop-blur-xl max-w-xs flex items-start gap-2.5 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 mt-1.5 animate-pulse" />
          <div className="text-xs text-slate-200">
            <span className="font-bold text-white block">¿Tienes una duda o proyecto?</span>
            <span className="text-slate-400 text-[11px]">Escríbeme por WhatsApp, te respondo rápido.</span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Cerrar aviso de WhatsApp"
            className="text-slate-400 hover:text-white p-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href="https://wa.me/573025239575?text=Hola%20Eliana,%20deseo%20hacerte%20una%20consulta%20sobre%20tus%20servicios"
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        aria-label="Hablar por WhatsApp con Eliana"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-[#090d16] shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current" />
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 group-hover:opacity-50 animate-ping -z-10" />
      </a>
    </div>
  );
}
