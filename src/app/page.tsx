import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LeBirre from "@/components/LeBirre";
import IlBirrificio from "@/components/IlBirrificio";
import Birrografia from "@/components/Birrografia";
import ComeSiFaLaBirra from "@/components/ComeSiFaLaBirra";
import Contatti from "@/components/Contatti";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LeBirre />
        <IlBirrificio />
        <Birrografia />
        <ComeSiFaLaBirra />
        <Contatti />
      </main>
      <Footer />
    </>
  );
}
