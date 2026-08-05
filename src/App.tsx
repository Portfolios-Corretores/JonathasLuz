import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import NewPalace from "./components/NewPalace";
import Imoveis from "./components/Imoveis";
import Diferenciais from "./components/Diferenciais";
import Depoimentos from "./components/Depoimentos";
import Cta from "./components/Cta";
import Localizacao from "./components/Localizacao";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import PageAtmosphere from "./components/PageAtmosphere";

function App() {
  return (
    <>
      <PageAtmosphere />
      <div className="relative z-10">
        <ScrollReveal />
        <Nav />
        <Hero />
        <About />
        <NewPalace />
        <Imoveis />
        <Diferenciais />
        <Depoimentos />
        <Cta />
        <Localizacao />
        <Footer />
      </div>
    </>
  );
}

export default App;
