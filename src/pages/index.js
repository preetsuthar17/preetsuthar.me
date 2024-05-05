import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { IntroCurtains } from "@/components/IntroCurtains";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <IntroCurtains />
      <Hero />
      <About />
      <Projects />
      <Services />
    </>
  );
}
