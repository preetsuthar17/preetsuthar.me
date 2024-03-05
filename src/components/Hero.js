import React from "react";

export const Hero = React.forwardRef((props, ref) => {
  return (
    <section className="hero" ref={ref}>
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
