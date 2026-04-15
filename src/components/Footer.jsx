import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook, Wrench, ShieldCheck, Code, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0f1a2a] border-t-4 border-red-600 py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Sutil brilho de fundo */}
      <div className="absolute top-0 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-red-600/5 blur-[150px] rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
          
          {/* Logo e Branding */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                <Wrench size={20} className="text-white sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-white font-black text-xl sm:text-2xl tracking-tighter leading-none italic">
                  OFICINA SITE<span className="text-red-600 not-italic">OFICINA</span>
                </h3>
                <p className="text-[8px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-gray-500 font-black mt-1">Performance & Estética</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-medium">
              Excelência técnica, transparência absoluta e tecnologia de ponta. O cuidado que seu veículo merece em <span className="text-white">Sua cidade</span>.
            </p>
            <div className="flex items-center gap-2 text-red-600 font-black text-[10px] sm:text-xs uppercase tracking-widest bg-red-600/5 p-2 sm:p-3 rounded-lg border border-red-600/10 inline-flex">
              <ShieldCheck size={14} className="sm:w-4 sm:h-4" />
              <span>Padrão de Qualidade Premium</span>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-black text-base sm:text-lg uppercase tracking-tighter mb-6 sm:mb-8 flex items-center gap-3">
              <span className="w-6 sm:w-8 h-1 bg-red-600 rounded-full" />
              CONTATO
            </h3>
            <ul className="space-y-4 sm:space-y-6 text-gray-300">
              <li className="flex items-start gap-3 sm:gap-4 group">
                <MapPin size={18} className="text-red-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base font-bold leading-tight">
                  R. da oficina, 29<br />
                  <span className="text-gray-500 font-medium">cidade — PR</span>
                </span>
              </li>
              <li className="flex items-center gap-3 sm:gap-4 group">
                <Phone size={18} className="text-red-600 group-hover:scale-110 transition-transform sm:w-5 sm:h-5" />
                <span className="text-lg sm:text-xl font-black text-white">(41) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3 sm:gap-4 group">
                <Clock size={18} className="text-red-600 group-hover:scale-110 transition-transform sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base font-bold">Segunda a Sexta: 8h às 18h</span>
              </li>
            </ul>
          </div>

          {/* Horários Detalhados */}
          <div>
            <h3 className="text-white font-black text-base sm:text-lg uppercase tracking-tighter mb-6 sm:mb-8 flex items-center gap-3">
              <span className="w-6 sm:w-8 h-1 bg-red-600 rounded-full" />
              ATENDIMENTO
            </h3>
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-400">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>Seg - Sex:</span>
                <span className="text-white italic">08h - 18h</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>Sábado:</span>
                <span className="text-white italic">08h - 12h</span>
              </div>
              <div className="flex justify-between text-red-600/50">
                <span>Domingo:</span>
                <span className="text-[10px] sm:text-xs font-black bg-red-600/10 px-2 py-1 rounded">Fechado</span>
              </div>
            </div>
          </div>

          {/* Social e Emergência */}
          <div>
            <h3 className="text-white font-black text-base sm:text-lg uppercase tracking-tighter mb-6 sm:mb-8 flex items-center gap-3">
              <span className="w-6 sm:w-8 h-1 bg-red-600 rounded-full" />
              CONECTE-SE
            </h3>
            <div className="flex gap-3 sm:gap-4 mb-6 sm:mb-10">
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-500 group shadow-lg">
                <Instagram size={18} className="text-gray-400 group-hover:text-white sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-500 group shadow-lg">
                <Facebook size={18} className="text-gray-400 group-hover:text-white sm:w-5 sm:h-5" />
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-[#1e3252] to-[#1a2b45] p-4 sm:p-6 rounded-xl sm:rounded-2xl border-l-4 sm:border-l-8 border-red-600 shadow-2xl">
              <h4 className="text-white text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 opacity-70">Emergência / Guincho:</h4>
              <p className="text-red-500 font-black text-xl sm:text-2xl tracking-tighter italic break-words">
                (41) 99999-9999
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar - COM LINK DO PORTFÓLIO */}
        <div className="border-t border-white/5 mt-12 sm:mt-16 md:mt-20 pt-6 sm:pt-8 md:pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 text-gray-500 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] sm:tracking-[0.3em]">
            <p className="text-center">&copy; 2026  Oficina — Excelência Automotiva</p>
            <div className="flex gap-4 sm:gap-8 flex-wrap justify-center items-center">
              <span className="hover:text-white cursor-pointer transition-colors">Privacidade</span>
              <span className="hover:text-white cursor-pointer transition-colors">Termos</span>
              <a 
                href="https://portifolio-geovani.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-600 italic flex items-center gap-2 hover:text-red-500 transition-all duration-300 hover:scale-105 group"
              >
                <Code size={12} className="group-hover:rotate-6 transition-transform" />
                Desenvolvido por Geovani Neumann
                <ExternalLink size={10} className="opacity-70 group-hover:opacity-100" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}