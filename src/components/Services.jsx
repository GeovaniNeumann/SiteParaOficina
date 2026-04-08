import React from 'react';
import { Wrench, Shield, Zap, Car, Settings, Activity } from 'lucide-react';

const services = [
  { icon: <Activity size={28} />, title: "Diagnóstico Avançado", description: "Utilizamos equipamentos de última geração para identificar qualquer problema no seu veículo com precisão e rapidez." },
  { icon: <Shield size={28} />, title: "Manutenção Preventiva", description: "Revisões completas para manter seu carro sempre em dia, evitando problemas futuros e garantindo segurança." },
  { icon: <Zap size={28} />, title: "Motores de Performance", description: "Preparação e modificação de motores para quem busca mais potência, torque e desempenho nas pistas." },
  { icon: <Car size={28} />, title: "Estética Automotiva", description: "Polimento, vitrificação, lavagem detalhada e outros serviços para deixar seu carro impecável por dentro e por fora." },
  { icon: <Settings size={28} />, title: "Sistema de Freios", description: "Revisão completa do sistema de frenagem, troca de pastilhas, discos e fluido para máxima segurança." },
  { icon: <Wrench size={28} />, title: "Suspensão Especializada", description: "Alinhamento, balanceamento e reparo de suspensão para um carro mais estável, confortável e seguro." },
];

export default function Services() {
  return (
    <section id="servicos" className="py-16 sm:py-24 md:py-32 bg-[#1a2b45] overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 mb-4 sm:mb-6 border-2 border-red-600/20 bg-red-600/5 rounded-full">
            <span className="text-red-500 text-xs sm:text-sm font-black uppercase tracking-[0.3em] sm:tracking-[0.4em]">Soluções Automotivas</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter italic">
            TIPOS DE <span className="text-red-600 not-italic">SERVIÇOS</span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-red-600 mx-auto mt-4 sm:mt-6 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 shadow-2xl transition-all duration-700 hover:-translate-y-3 hover:border-red-600/40 hover:bg-white/10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-2xl shadow-red-600/30 text-white transition-transform duration-500 group-hover:rotate-[-6deg] group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-white font-black uppercase tracking-tighter text-xl sm:text-2xl leading-none mb-3 sm:mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{service.description}</p>
              <div className="mt-4 sm:mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <div className="w-6 sm:w-8 h-0.5 bg-red-600" />
                <span className="text-red-500 text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em]">Martini Oficina</span>
              </div>
              <div className="absolute -bottom-10 -right-10 w-32 sm:w-40 h-32 sm:h-40 bg-red-600/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}