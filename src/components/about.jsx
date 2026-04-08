import React from 'react';
import { Settings, Users, ShieldCheck, Target, Award, MapPin, Zap } from 'lucide-react';

export default function About() {
  const differentials = [
    { icon: Settings, title: "Tecnologia de Ponta", description: "Diagnóstico preciso com scanners de última geração para máxima eficiência." },
    { icon: Users, title: "Mão de Obra Especializada", description: "Mecânicos treinados constantemente nas maiores inovações automotivas." },
    { icon: ShieldCheck, title: "Transparência Total", description: "Orçamentos claros e peças originais para garantir sua total segurança." },
    { icon: Zap, title: "Cuidado Artesanal", description: "A precisão da máquina com a atenção aos detalhes de quem ama o que faz." },
  ];

  return (
    <section id="sobre" className="py-16 sm:py-24 md:py-32 bg-[#1a2b45] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-600/5 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <span className="text-red-600 text-xs sm:text-sm md:text-base uppercase tracking-[0.3em] sm:tracking-[0.4em] font-black">História de Excelência</span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mt-3 sm:mt-4 mb-4 sm:mb-6 text-white tracking-tighter italic">
            MARTINI <span className="text-red-600 not-italic">OFICINA</span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-red-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center mb-16 sm:mb-20 md:mb-24">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-red-600 to-red-900 rounded-2xl sm:rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-700" />
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1974"
                alt="Mecânico trabalhando na Martini Oficina"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2b45]/80 to-transparent opacity-60" />
            </div>
            
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 bg-red-600 p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-2xl hidden md:flex flex-col items-center justify-center border-4 border-[#1a2b45]">
              <Award size={32} className="text-white mb-1" />
              <span className="text-white font-black text-lg leading-none">PREMIUM</span>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-white tracking-tight">
              Sua Paixão, <br />
              <span className="text-red-600">Nossa Especialidade</span>
            </h3>
            
            <div className="space-y-4 sm:space-y-6">
              <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed font-medium">
                Com anos de experiência em <span className="text-white font-bold">São José dos Pinhais</span>, a Martini Oficina 
                nasceu do compromisso absoluto com a performance. Não somos apenas uma oficina; somos o centro tecnológico para o seu veículo.
              </p>
              
              <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
                Nossa missão é unir a <span className="text-red-500 font-bold italic">tecnologia de diagnóstico</span> com um 
                processo artesanal de revisão. Prezamos pela transparência total, garantindo que você tenha 
                confiança em cada quilômetro rodado.
              </p>
            </div>

            <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-white/5 rounded-2xl border border-white/10 inline-block">
              <MapPin size={20} className="text-red-600 flex-shrink-0 mt-1" />
              <div className="flex flex-col">
                <span className="text-white font-black text-xs sm:text-sm uppercase tracking-widest">Localização Privilegiada</span>
                <span className="text-gray-400 text-xs sm:text-sm md:text-base font-bold italic">R. Joaquim Ferreira das Dores, 29 - Santo Antônio</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/5 hover:border-red-600/50 transition-all duration-500 hover:bg-white/[0.08] hover:-translate-y-3 shadow-xl"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-red-600 flex items-center justify-center mb-4 sm:mb-6 shadow-[0_10px_20px_rgba(220,38,38,0.3)] group-hover:rotate-6 transition-transform">
                <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-white mb-2 sm:mb-3 tracking-tighter uppercase">{item.title}</h4>
              <p className="text-gray-400 text-sm sm:text-base font-medium leading-relaxed group-hover:text-gray-300 transition-colors">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}