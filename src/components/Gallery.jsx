import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const galleryImages = [
  { url: "https://i.ibb.co/kTjTXQy/Gemini-Generated-Image-hwlg9mhwlg9mhwlg.png", title: "Diagnóstico Avançado" },
  { url: "https://i.ibb.co/kTjTXQy/Gemini-Generated-Image-hwlg9mhwlg9mhwlg.png", title: "Manutenção Preventiva" },
  { url: "https://i.ibb.co/fVm9TyLV/Gemini-Generated-Image-et5g4get5g4get5g.png", title: "Motores de Performance" },
  { url: "https://i.ibb.co/yFMBjz8N/Gemini-Generated-Image-tvmdlotvmdlotvmd.png", title: "Estética Automotiva" },
  { url: "https://i.ibb.co/FbpQgSb8/Gemini-Generated-Image-dfuibcdfuibcdfui.png", title: "Sistema de Freios" },
  { url: "https://i.ibb.co/TD9pdGTX/Gemini-Generated-Image-jp6jjqjp6jjqjp6j.png", title: "Suspensão Especializada" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') closeModal(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedImage(galleryImages[index].url);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex].url);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex].url);
  };

  return (
    <section id="galeria" className="py-16 sm:py-24 md:py-32 bg-[#1a2b45] overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 mb-4 sm:mb-6 border-2 border-red-600/20 bg-red-600/5 rounded-full">
            <span className="text-red-500 text-xs sm:text-sm font-black uppercase tracking-[0.3em] sm:tracking-[0.4em]">Portfólio de Excelência</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter italic">
            NOSSO <span className="text-red-600 not-italic">TRABALHO</span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-red-600 mx-auto mt-4 sm:mt-6 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {galleryImages.map((img, index) => (
            <div key={index} onClick={() => openModal(index)} className="group relative cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl aspect-[4/3] bg-black shadow-2xl transition-all duration-700 hover:-translate-y-3 border border-white/10">
              <img src={img.url} alt={img.title} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2b45] via-[#1a2b45]/20 to-transparent opacity-80 group-hover:opacity-40 transition-all duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 p-6 sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-2xl shadow-red-600/50 rotate-[-10deg] group-hover:rotate-0 transition-transform duration-500">
                  <Maximize2 className="text-white" size={22} />
                </div>
                <h3 className="text-white font-black uppercase tracking-tighter text-xl sm:text-2xl text-center leading-none">{img.title}</h3>
                <div className="mt-3 sm:mt-4 flex items-center gap-2">
                  <div className="w-6 sm:w-8 h-0.5 bg-red-600" />
                  <span className="text-white text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em]">Ver Detalhes</span>
                  <div className="w-6 sm:w-8 h-0.5 bg-red-600" />
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-red-600/0 group-hover:border-red-600/50 rounded-2xl sm:rounded-3xl transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-8" onClick={closeModal}>
            <button onClick={(e) => { e.stopPropagation(); closeModal(); }} className="absolute top-4 right-4 sm:top-8 sm:right-8 w-10 h-10 sm:w-14 sm:h-14 bg-white/10 hover:bg-red-600 text-white rounded-xl sm:rounded-2xl flex items-center justify-center transition-all z-[110] border border-white/10">
              <X size={24} strokeWidth={2.5} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-2 sm:left-6 w-12 h-12 sm:w-16 sm:h-16 bg-white/5 hover:bg-red-600 text-white rounded-xl sm:rounded-2xl hidden md:flex items-center justify-center transition-all z-[110] border border-white/10">
              <ChevronLeft size={32} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-2 sm:right-6 w-12 h-12 sm:w-16 sm:h-16 bg-white/5 hover:bg-red-600 text-white rounded-xl sm:rounded-2xl hidden md:flex items-center justify-center transition-all z-[110] border border-white/10">
              <ChevronRight size={32} />
            </button>
            <div className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
              <img src={selectedImage} alt={galleryImages[currentIndex].title} className="max-w-full max-h-[60vh] sm:max-h-[70vh] md:max-h-[75vh] object-contain rounded-2xl sm:rounded-3xl shadow-[0_0_80px_rgba(220,38,38,0.3)] border-4 border-white/10" />
              <div className="mt-6 sm:mt-10 text-center px-4">
                <h4 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter italic">{galleryImages[currentIndex].title}</h4>
                <p className="text-red-500 font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-xs sm:text-sm mt-2 sm:mt-4">SiteOficina</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}