import Educations from "@/components/Educations";
import Experiences from "@/components/Experiences";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <Experiences />
      <Projects />
      <Educations />
    </div>
  );
}
