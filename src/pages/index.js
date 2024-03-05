import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const aboutRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      aboutRef.current,

      { y: "0%" },
      {
        y: "-180%",
        boxShadow: "0px -68px 129px -88px rgba(0,0,0,5.75)",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      <Hero />
      <About ref={aboutRef} />
    </>
  );
};

export default Home;
