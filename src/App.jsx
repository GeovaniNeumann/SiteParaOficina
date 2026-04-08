import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton'; // 1. Importação do componente

export default function App() {
  return (
    /* O bg-[#1a2b45] garante que o fundo seja azul em toda a aplicação */
    <div className="min-h-screen bg-[#1a2b45]">
      <Header />
      <Hero />
      <About />
      <Services />
      
      {/* Testimonials removido conforme solicitado */}
      
      <Gallery />
      
      {/* O BookingForm já deve conter internamente a <section> com id="agendamento" */}
      <BookingForm />
      
      <Footer />

      {/* 2. Botão Flutuante adicionado ao final */}
      <WhatsAppButton />
    </div>
  );
}