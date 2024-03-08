import React from "react";
import { Parallax } from "react-scroll-parallax";

import shape1 from "../assets/shape-1.svg";
import Image from "next/image";

export const Hero = React.forwardRef((props, ref) => {
  return (
    <section className="hero" ref={ref}>
      <div className="floating-blocks-1">
        <Parallax
          translateY={[-100, 50]}
          rotate={[180, 360]}
          scale={[0, 3]}
          className="shape-1"
        >
          <Image src={shape1} />
        </Parallax>
      </div>
      <div className="section-1">
        <div className="heading-div">
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
