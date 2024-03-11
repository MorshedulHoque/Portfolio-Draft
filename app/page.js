import Educations from "@/components/Educations";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="space-y-20">
      <Navbar />
      <Hero />
      <Experiences />
      <Projects />
      <Educations />
      <Skills />
      <Footer />
    </div>
  );
}
