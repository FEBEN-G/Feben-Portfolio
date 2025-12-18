import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about";
import { Experience } from "@/components/home/experience";
import { Skills } from "@/components/home/skills";
import { Projects } from "@/components/home/projects";
import { Contact } from "@/components/home/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
