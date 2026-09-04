import { useEffect } from "react";
import BigWord from "./components/BigWord";
import Cta from "./components/Cta";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Social from "./components/Social";
import WhyUs from "./components/WhyUs";

function App() {
  // Só ativa os estados iniciais "invisíveis" do CSS depois que o React
  // realmente montou — se o JS falhar antes disso, o conteúdo já nasce
  // visível (ver .reveal-item em index.css).
  useEffect(() => {
    document.documentElement.classList.add("js-motion");
  }, []);

  return (
    <>
      <a
        href="#topo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Pular para o conteúdo
      </a>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <BigWord />
        <Location />
        <Social />
        <Cta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
