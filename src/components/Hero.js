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
        ></Parallax>
      </div>
      <div className="section-1">
        <p className="hero-main-heading">
          <span className="text-only-outline">HEY THERE</span>
          <span className="orange-color">,</span>
        </p>
        <h1 className="hero-main-heading"> I'M PREET</h1>
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
