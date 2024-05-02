import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

import MagneticLink from "@/utils/MagneticLink";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const CTADivRef = useRef(null);
  useEffect(() => {
    gsap.to(CTADivRef.current, {
      gap: "1rem",
      ease: "circ.inOut",
      scrollTrigger: {
        trigger: ".hero",
        start: "center",
        end: "bottom",
        scrub: 0.9,
      },
    });
  }, []);
  return (
    <>
      <section className="my-[10rem] py-[2rem] max-w-[65rem]  w-full mx-auto">
        <div className="flex flex-wrap justify-between max-[770px]:flex-col">
          <p className="text-4xl max-w-[60%]  leading-tight tracking-tighter p-4 max-[770px]:max-w-full">
            Helping brands to stand out in digital era. As a dedicated
            developer, I create standout digital experiences. Let's elevate your
            personal brand or project beyond the digital noise.
          </p>
          <div
            className="max-w-[30%]  max-[770px]:max-w-full flex flex-col justify-between items-center gap-[15rem]  max-[770px]:flex-row max-[770px]:ml-auto "
            ref={CTADivRef}
          >
            <p className="p-4 text-2xl leading-tight tracking-tighter  max-[770px]:max-w-[60%] ">
              Don't waste your precious money on massive agencies, Let's build
              something today!
            </p>
            <MagneticLink>
              <Link
                className="m-4 w-[8rem] h-[8rem] bg-[#ff7b00] text-white flex items-center justify-center rounded-full font-bold -rotate-6 "
                href="#contact"
              >
                <span className="text-xl leading-5 text-center bricolage-fonts">
                  Let's Talk
                </span>
              </Link>
            </MagneticLink>
          </div>
        </div>
      </section>
    </>
  );
};
