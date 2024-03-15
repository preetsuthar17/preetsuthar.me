import React from "react";
import { Parallax } from "react-scroll-parallax";

import shape1 from "../assets/shape-1.svg";
import Image from "next/image";
import SmoothScrollLink from "./other/SmoothLinkScroll";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const Hero = React.forwardRef((props, ref) => {
  const imageRef = useRef(null);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      gsap.to(imageRef.current, {
        x: (e.clientX - window.innerWidth / 2) / 40,
        y: (e.clientY - window.innerHeight / 2) / 40,
        ease: "Power1.easeOut",
        duration: 1.3,
      });
    });
  }, []);

  return (
    <section className="hero" ref={ref}>
      <div className="floating-blocks-1">
        <Parallax
          translateY={[-100, 50]}
          rotate={[180, 360]}
          scale={[0, 3]}
          className="shape-1"
        >
          <Image src={shape1} ref={imageRef} alt="Parallax Shape" />
        </Parallax>
      </div>
      <div className="section-1">
        <div className="heading-div">
          <SmoothScrollLink href="#contact" className="available-for-work ">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 56 56"
              >
                <path
                  fill="#fd7b01"
                  d="M26.688 12.66c.28 0 .421-.164.492-.422c.726-3.914.68-4.008 4.758-4.781c.28-.047.445-.21.445-.492c0-.281-.164-.445-.446-.492c-4.054-.82-3.937-.914-4.757-4.782c-.07-.257-.211-.421-.492-.421c-.282 0-.422.164-.493.421c-.82 3.868-.68 3.961-4.757 4.782c-.258.046-.446.21-.446.492c0 .281.188.445.445.492c4.079.82 4.032.867 4.758 4.781c.07.258.211.422.492.422M15.344 28.785c.445 0 .75-.281.797-.703c.843-6.258 1.054-6.258 7.523-7.5c.422-.07.727-.352.727-.797c0-.422-.305-.726-.727-.797c-6.469-.89-6.703-1.101-7.523-7.476c-.047-.422-.352-.727-.797-.727c-.422 0-.727.305-.774.75c-.773 6.281-1.101 6.258-7.523 7.453c-.422.094-.727.375-.727.797c0 .469.305.727.82.797c6.376 1.031 6.657 1.195 7.43 7.453c.047.469.352.75.774.75m15.89 25.946c.61 0 1.055-.446 1.172-1.079c1.664-12.843 3.469-14.789 16.172-16.195c.656-.07 1.102-.562 1.102-1.172c0-.61-.446-1.078-1.102-1.172c-12.703-1.406-14.508-3.351-16.172-16.195c-.117-.633-.562-1.055-1.172-1.055c-.609 0-1.054.422-1.148 1.055c-1.664 12.844-3.492 14.789-16.172 16.195c-.68.094-1.125.563-1.125 1.172c0 .61.445 1.102 1.125 1.172c12.656 1.664 14.414 3.375 16.172 16.195c.094.633.539 1.078 1.148 1.078"
                />
              </svg>{" "}
              AVAILABLE FOR NEW PROJECT
            </p>
          </SmoothScrollLink>
          <p className="hero-main-heading  hero-main-heading-1">
            <span className="text-only-outline">HEY THERE</span>
            <span className="orange-color">,</span>
          </p>
        </div>
        <div className="heading-div">
          <h1 className="hero-main-heading hero-main-heading-2"> I'M PREET</h1>
        </div>
      </div>
      <div className="section-2">
        <p>
          A Freelance Front-end Developer & Designer, crafting experiences that
          exceed expectations.
        </p>
      </div>
    </section>
  );
});
