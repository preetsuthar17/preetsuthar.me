import React from "react";
import { Parallax } from "react-scroll-parallax";

export const Hero = React.forwardRef((props, ref) => {
  return (
    <section className="hero" ref={ref}>
      <div className="floating-blocks-1">
        <Parallax
          translateY={[-100, 50]}
          rotateZ={[0, 360]}
          className="square-1"
        ></Parallax>
        <Parallax
          translateY={[50, -100]}
          rotateZ={[0, 360]}
          className="circle-1"
        >
          <span></span>
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
          I'm a freelance front-end developer and designer, crafting experiences
          that exceed expectations.
        </p>
      </div>
    </section>
  );
});
