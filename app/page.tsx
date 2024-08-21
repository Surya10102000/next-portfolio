import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Skill from "@/components/Skill";
import Projects from "@/components/ui/Projects";

export default function Home() {

  return (
    <>
    <Hero />
    <About/>
    <Skill/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  );
}
