import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Beneficios from "@/components/Beneficios";
import Funcionalidades from "@/components/Funcionalidades";
import PreviaDeschboard from "@/components/PreviaDeschboard";
import FormContato from "@/components/FormContato";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Beneficios />
        <Funcionalidades />
        <PreviaDeschboard />
        <FormContato />
      </main>

      <Footer />
    </>
  );
}