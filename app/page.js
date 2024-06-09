import Educations from "@/components/Educations";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div className="lg:space-y-20 space-y-20">
      <Hero />
      {/* <Experiences /> */}
      <Work />
      <Projects />
      <Educations />
      <Skills />
      <Footer />
    </div>
  );
}
