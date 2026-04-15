import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Car, Send, MessageSquare } from 'lucide-react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    carModel: "",
    date: "",
    time: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = 
      `*OFICINA SITE - AGENDAMENTO*%0A%0A` +
      `*Nome:* ${formData.name}%0A` +
      `*Telefone:* ${formData.phone}%0A` +
      `*Veículo:* ${formData.carModel}%0A` +
      `*Data:* ${formData.date}%0A` +
      `*Horário:* ${formData.time}%0A` +
      `*Mensagem:* ${formData.message || "Nenhuma"}%0A%0A` +
      `_Solicitação enviada via site_`;
    
    window.open(`https://wa.me/5541999999999?text=${whatsappMessage}`, "_blank");
  };

  return (
    <section id="agendamento" className="w-full py-16 sm:py-24 md:py-32 bg-[#1a2b45] scroll-mt-24 relative overflow-hidden">
      {/* Detalhe visual de fundo */}
      <div className="absolute -bottom-24 -left-24 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-red-600/10 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Cabeçalho do Formulário - Responsivo */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-red-600 text-xs sm:text-sm md:text-base uppercase tracking-[0.3em] sm:tracking-[0.4em] font-black italic">Conveniência</span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mt-3 sm:mt-4 text-white uppercase tracking-tighter">
              AGENDE SEU <span className="text-red-600 italic">HORÁRIO</span>
            </h2>
            <p className="text-gray-300 mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto px-4">
              Preencha os dados abaixo e confirmaremos seu atendimento via WhatsApp em instantes.
            </p>
          </div>

          {/* Card do Formulário - Responsivo */}
          <form 
            onSubmit={handleSubmit} 
            className="bg-[#1e3252]/50 backdrop-blur-sm p-6 sm:p-8 md:p-12 lg:p-16 rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.4)] border border-white/10"
          >
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {/* Nome */}
              <div className="space-y-2 sm:space-y-3">
                <label className="flex items-center gap-2 text-white text-xs sm:text-sm font-black uppercase tracking-widest ml-1">
                  <User size={14} className="text-red-600 sm:w-4 sm:h-4" /> Nome Completo
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl bg-[#1a2b45] border-2 border-white/5 text-white text-base sm:text-lg font-bold placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-4 focus:ring-red-600/10 transition-all"
                  placeholder="Ex: João Martini"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              {/* WhatsApp */}
              <div className="space-y-2 sm:space-y-3">
                <label className="flex items-center gap-2 text-white text-xs sm:text-sm font-black uppercase tracking-widest ml-1">
                  <Phone size={14} className="text-red-600 sm:w-4 sm:h-4" /> WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl bg-[#1a2b45] border-2 border-white/5 text-white text-base sm:text-lg font-bold placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-4 focus:ring-red-600/10 transition-all"
                  placeholder="(41) 99999-9999"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            {/* Veículo */}
            <div className="mt-6 sm:mt-8 space-y-2 sm:space-y-3">
              <label className="flex items-center gap-2 text-white text-xs sm:text-sm font-black uppercase tracking-widest ml-1">
                <Car size={14} className="text-red-600 sm:w-4 sm:h-4" /> Modelo do Veículo
              </label>
              <input
                type="text"
                required
                className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl bg-[#1a2b45] border-2 border-white/5 text-white text-base sm:text-lg font-bold placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-4 focus:ring-red-600/10 transition-all"
                placeholder="Ex: Honda Civic Sport 2023"
                value={formData.carModel}
                onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8">
              {/* Data */}
              <div className="space-y-2 sm:space-y-3">
                <label className="flex items-center gap-2 text-white text-xs sm:text-sm font-black uppercase tracking-widest ml-1">
                  <Calendar size={14} className="text-red-600 sm:w-4 sm:h-4" /> Data Preferencial
                </label>
                <input
                  type="date"
                  required
                  className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl bg-[#1a2b45] border-2 border-white/5 text-white text-base sm:text-lg font-bold focus:outline-none focus:border-red-600 transition-all appearance-none cursor-pointer"
                  style={{ colorScheme: 'dark' }}
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
              </div>

              {/* Horário */}
              <div className="space-y-2 sm:space-y-3">
                <label className="flex items-center gap-2 text-white text-xs sm:text-sm font-black uppercase tracking-widest ml-1">
                  <Clock size={14} className="text-red-600 sm:w-4 sm:h-4" /> Horário
                </label>
                <div className="relative">
                  <select
                    required
                    className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl bg-[#1a2b45] border-2 border-white/5 text-white text-base sm:text-lg font-bold focus:outline-none focus:border-red-600 transition-all appearance-none cursor-pointer"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  >
                    <option value="" className="bg-[#1a2b45]">Selecione</option>
                    {["08:00", "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"].map(t => (
                      <option key={t} value={t} className="bg-[#1a2b45]">{t}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                    <div className="border-t-2 border-r-2 border-red-600 w-2 h-2 rotate-[135deg]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Mensagem */}
            <div className="mt-6 sm:mt-8 space-y-2 sm:space-y-3">
              <label className="flex items-center gap-2 text-white text-xs sm:text-sm font-black uppercase tracking-widest ml-1">
                <MessageSquare size={14} className="text-red-600 sm:w-4 sm:h-4" /> Observações (Opcional)
              </label>
              <textarea
                rows={4}
                className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl bg-[#1a2b45] border-2 border-white/5 text-white text-base sm:text-lg font-bold placeholder-gray-500 focus:outline-none focus:border-red-600 transition-all resize-none"
                placeholder="Descreva brevemente o serviço ou sintoma do veículo..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            {/* Botão de Envio - Responsivo */}
            <button
              type="submit"
              className="w-full mt-8 sm:mt-10 md:mt-12 bg-red-600 hover:bg-red-700 text-white py-4 sm:py-5 md:py-6 rounded-xl sm:rounded-2xl text-base sm:text-lg md:text-xl font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] flex items-center justify-center gap-3 sm:gap-4 transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-[0_20px_40px_rgba(220,38,38,0.3)] group"
            >
              <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-300 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              Solicitar Agendamento
            </button>
            
            <p className="text-center text-gray-500 text-xs mt-4 sm:mt-6 font-bold uppercase tracking-widest">
              Ao clicar, você será redirecionado para o nosso WhatsApp oficial.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}