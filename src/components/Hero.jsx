import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-end items-center overflow-hidden bg-[#1a2b45]">
      
      {/* IMAGEM USANDO TAG <IMG> - POSIÇÃO RESPONSIVA */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <img 
          src="https://i.ibb.co/tp8wXRVr/Design-sem-nome-30-removebg-preview.png" 
          alt="Martini Oficina Background"
          className="w-full h-full object-contain md:object-cover object-[center_30%] md:object-center"
        />
        
        {/* GRADIENTE ESTRATÉGICO - MAIS FORTE NA BASE */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a2b45] via-[#1a2b45]/40 to-transparent z-10" />
      </div>

      {/* CONTEÚDO - SUBINDO APENAS NO MOBILE */}
      <div className="relative z-20 w-full container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* mt-0 no desktop, mt-8 no mobile para subir */}
          <div className="flex flex-col gap-8 sm:gap-10 md:gap-14 items-center mt-8 md:mt-0">
            
            {/* BOTÕES */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full justify-center px-4 sm:px-0">
              <a 
                href="#agendamento" 
                className="px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 bg-red-600 hover:bg-red-700 text-white text-base sm:text-lg md:text-xl font-black uppercase tracking-[0.2em] sm:tracking-[0.25em] rounded-2xl transition-all shadow-[0_20px_50px_rgba(220,38,38,0.5)] hover:scale-105 active:scale-95 text-center"
              >
                Agendar Agora
              </a>
              <a 
                href="#servicos" 
                className="px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 border-2 border-white/40 hover:bg-white/10 text-white text-base sm:text-lg md:text-xl font-black uppercase tracking-[0.2em] sm:tracking-[0.25em] rounded-2xl backdrop-blur-md transition-all hover:border-white shadow-2xl text-center"
              >
                Nossos Serviços
              </a>
            </div>

            {/* INFORMAÇÕES - padding ajustado apenas no mobile */}
            <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-8 md:gap-x-12 gap-y-4 sm:gap-y-6 pt-6 sm:pt-8 md:pt-10 border-t border-white/10 w-full max-w-6xl mt-4 md:mt-0">
              
              <div className="flex items-center gap-2 sm:gap-3 group cursor-default">
                <MapPin size={18} className="text-red-600 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                <div className="flex flex-col items-start">
                  <span className="text-[8px] sm:text-[10px] text-gray-500 font-black uppercase tracking-widest leading-none mb-1">Localização</span>
                  <span className="text-xs sm:text-sm md:text-base font-black text-white uppercase tracking-wider">S.J. dos Pinhais - PR</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-3 group cursor-default">
                <Clock size={18} className="text-red-600 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                <div className="flex flex-col items-start">
                  <span className="text-[8px] sm:text-[10px] text-gray-500 font-black uppercase tracking-widest leading-none mb-1">Horário</span>
                  <span className="text-xs sm:text-sm md:text-base font-black text-white uppercase tracking-wider">Seg-Sex: 8h às 18h</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-3 group cursor-default">
                <Phone size={18} className="text-red-600 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                <div className="flex flex-col items-start">
                  <span className="text-[8px] sm:text-[10px] text-gray-500 font-black uppercase tracking-widest leading-none mb-1">WhatsApp</span>
                  <span className="text-xs sm:text-sm md:text-base font-black text-white uppercase tracking-wider">(41) 99897-2311</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}