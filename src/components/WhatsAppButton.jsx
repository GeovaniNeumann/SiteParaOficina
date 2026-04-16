import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, [isDismissed]);

  const handleCloseTooltip = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowTooltip(false);
    setIsDismissed(true);
  };

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-[999] flex flex-col items-end gap-2 sm:gap-3 pointer-events-none">
      
      {/* Balão de Mensagem - Responsivo */}
      <div className={`
        pointer-events-auto transition-all duration-500 transform
        ${showTooltip ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'}
      `}>
        <div className="relative bg-white text-[#1a2b45] px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-3 sm:gap-4 max-w-[220px] sm:max-w-none">
          <button 
            onClick={handleCloseTooltip}
            className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 bg-red-600 text-white rounded-full p-1 hover:bg-red-700 transition-colors shadow-lg"
          >
            <X size={8} strokeWidth={3} className="sm:w-2.5 sm:h-2.5" />
          </button>
          
          <div className="flex flex-col pr-1 sm:pr-2">
            <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-red-600">Online</span>
            <p className="text-[10px] sm:text-xs font-bold text-slate-700 leading-tight">
              Dúvidas? Fale com a Oficina!
            </p>
          </div>
          <div className="absolute -bottom-1 right-4 sm:right-6 w-2 h-2 sm:w-3 sm:h-3 bg-white rotate-45 border-r border-b border-gray-100" />
        </div>
      </div>

      {/* Botão WhatsApp - Responsivo com toque otimizado */}
      <a
        href="https://wa.me/5541998972311"
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {/* Ondas de Radar */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 group-hover:opacity-40" />
        
        {/* SVG ORIGINAL DO WHATSAPP - Responsivo */}
        <svg 
          viewBox="0 0 24 24" 
          width="28" 
          height="28" 
          className="sm:w-8 sm:h-8 md:w-9 md:h-9 relative z-10 drop-shadow-sm transition-transform group-hover:rotate-6"
          fill="white" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>

        {/* Badge de "Notificação" - Responsivo */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4 sm:h-5 sm:w-5 z-20">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 sm:h-5 sm:w-5 bg-red-600 border-2 border-white items-center justify-center text-[8px] sm:text-[10px] font-bold text-white">
            1
          </span>
        </span>
      </a>
    </div>
  );
}