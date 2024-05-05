import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import MagneticLink from "@/utils/MagneticLink";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const About = () => {
  const CTADivRef = useRef(null);

  useGSAP(() => {
    gsap.to(CTADivRef.current, {
      bottom: "-3rem",
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
      <section className="  max-w-[65rem]  w-full mx-auto relative">
        <div className="flex flex-wrap justify-between max-[770px]:flex-col">
          <p className="text-4xl max-w-[60%]  leading-tight tracking-tighter p-4 max-[770px]:max-w-full relative max-[770px]:text-3xl">
            Helping brands to stand out in digital era. As a dedicated
            developer, I create standout digital experiences. Let's elevate your
            personal brand or project beyond the digital noise.
          </p>
          <div className="max-w-[30%]  max-[770px]:max-w-full flex flex-col justify-between items-center gap-[15rem]  max-[770px]:flex-row max-[770px]:ml-auto ">
            <p className="p-4 text-2xl leading-tight tracking-tighter  max-[770px]:max-w-[60%] relative">
              Don't waste your precious money on massive agencies, Let's build
              something today!
            </p>
            <div
              className="absolute bottom-[-9rem] max-[770px]:right-[1rem]"
              ref={CTADivRef}
            >
              <MagneticLink>
                <Link
                  className="m-4 w-[8rem] h-[8rem] bg-[#ff7b00] text-black flex items-center justify-center rounded-full font-bold -rotate-6 "
                  href="https://x.com/preetsuthar17"
                >
                  <span className="text-xl leading-5 text-center bricolage-fonts">
                    Let's Talk
                  </span>
                </Link>
              </MagneticLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
