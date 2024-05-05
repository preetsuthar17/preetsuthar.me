import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

import MagneticLink from "@/utils/MagneticLink";

gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
  const date = new Date();
  const CTADivRef = useRef(null);
  useEffect(() => {
    gsap.to(CTADivRef.current, {
      right: "0",
      scrollTrigger: {
        trigger: ".services",
        start: "center",
        end: "bottom",
        scrub: 0.9,
      },
    });
  }, []);
  const localtime = date.toLocaleTimeString("en-US", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <footer
        className="flex flex-col justify-between p-5 border-t"
        style={{
          height: "calc(100vh - 10rem)",
        }}
      >
        <div className="flex flex-col  gap-[5rem] max-w-[60rem] mx-auto mt-[4rem]">
          <div>
            <p className="text-6xl tracking-tighter">Let's work together</p>
          </div>
          <div className="relative">
            <hr />
            <div className="absolute top-[-4.5rem] right-20" ref={CTADivRef}>
              <MagneticLink>
                <Link
                  className="m-4 w-[7rem] h-[7rem] bg-[#ff7b00] text-white flex items-center justify-center rounded-full font-bold -rotate-6 "
                  href="https://x.com/preetsuthar17"
                >
                  <span className="text-xl leading-5 text-center bricolage-fonts">
                    Let's Talk
                  </span>
                </Link>
              </MagneticLink>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Link
              className="primary-button"
              href="mailto:preetsutharxd@gmail.com"
            >
              preetsutharxd@gmail.com
            </Link>
            <Link
              className="secondary-button"
              href="https://x.com/preetsuthar17"
            >
              Twitter (x)
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div className="flex flex-col">
            <p className="font-bold tracking-tighter uppercase">LOCAL TIME</p>
            <small>{localtime}</small>
          </div>
          <div className="flex flex-col">
            <p className="font-bold tracking-tighter uppercase">SOCIALS</p>
            <ul className="flex gap-4 text-sm">
              <li>
                <Link href="https://github.com/preetsuthar17">Github</Link>
              </li>
              <li>
                <Link href="https://twitter.com/preetsuthar17">
                  Twitter (x)
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com/in/preetsuthar17">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="https://dsc.gg/preet">Discord</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
