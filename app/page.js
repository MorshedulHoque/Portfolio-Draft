import Educations from "@/components/Educations";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div className="space-y-20">
      <Navbar />
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
