import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // TRAVAR O SCROLL DA PÁGINA QUANDO O MENU ESTIVER ABERTO
  useEffect(() => {
    if (isMenuOpen) {
      // Guarda a posição atual do scroll
      const scrollY = window.scrollY;
      // Trava o scroll
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Restaura o scroll
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      // Volta para a posição guardada
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
  }, [isMenuOpen]);

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#galeria", label: "Galeria" },
    { href: "#agendamento", label: "Agendamento" },
  ];

  const handleLinkClick = (href) => {
    // Fecha o menu
    setIsMenuOpen(false);
    // Pequeno delay para garantir que o menu fechou
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-3 sm:py-4 bg-[#1a2b45]/95 backdrop-blur-md shadow-2xl border-b border-white/10' 
          : 'py-4 sm:py-6 md:py-8 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          
          {/* LOGO - RESPONSIVA */}
          <a 
            href="#inicio" 
            className="group flex items-center gap-2 sm:gap-3 md:gap-4 outline-none"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#inicio");
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-red-600 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-full" />
              <img 
                src="https://i.ibb.co/5C56DmW/Sem-nome-1080-x-1920-px-1920-x-1080-px.png" 
                alt="Martini Oficina Logo" 
                className={`transition-all duration-500 object-contain ${
                  scrolled ? 'h-10 sm:h-12 md:h-14' : 'h-12 sm:h-16 md:h-20'
                }`}
              />
            </div>
            
            <div className="flex flex-col border-l-2 border-red-600/30 pl-2 sm:pl-3 md:pl-4">
              <span className="text-white font-black text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-tighter leading-none">
                MARTINI<span className="text-red-600">OFICINA</span>
              </span>
              <span className="text-[8px] sm:text-[10px] md:text-xs text-gray-400 uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold mt-0.5 sm:mt-1 group-hover:text-red-500 transition-colors">
                Performance & Estética
              </span>
            </div>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="relative px-3 xl:px-5 py-2 text-xs xl:text-sm font-black uppercase tracking-widest text-gray-200 hover:text-white transition-colors group cursor-pointer"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </a>
            ))}
            
            <a
              href="https://wa.me/5541998972311"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 xl:ml-8 px-5 xl:px-8 py-3 xl:py-4 bg-red-600 hover:bg-red-700 text-white text-xs xl:text-sm font-black uppercase tracking-widest rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_10px_20px_rgba(220,38,38,0.4)] flex items-center gap-2 xl:gap-3 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
              <Phone size={16} fill="currentColor" />
              <span className="hidden xl:inline">Agendar via WhatsApp</span>
              <span className="inline xl:hidden">WhatsApp</span>
            </a>
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative z-50 text-white p-2 sm:p-3 bg-white/5 rounded-xl transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU - FULLSCREEN COM SCROLL TRAVADO */}
        <div 
          className={`lg:hidden fixed inset-0 z-40 bg-[#1a2b45] transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-6 sm:gap-8 md:gap-10 px-6 overflow-y-auto">
            <img 
              src="https://i.ibb.co/5C56DmW/Sem-nome-1080-x-1920-px-1920-x-1080-px.png" 
              alt="Logo" 
              className="h-24 sm:h-28 md:h-32 w-auto mb-4 cursor-pointer"
              onClick={() => handleLinkClick("#inicio")}
            />
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter text-white hover:text-red-600 transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5541998972311"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 sm:mt-6 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 bg-red-600 text-white rounded-2xl text-base sm:text-lg md:text-xl font-black uppercase tracking-widest flex items-center gap-3 sm:gap-4 shadow-2xl hover:bg-red-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone size={22} />
              (41) 99897-2311
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}