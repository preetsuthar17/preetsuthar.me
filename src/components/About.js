import Image from "next/image";
import preetsuthar_image from "../../public/preetsuthar.webp";
import React from "react";

export const About = React.forwardRef((props, ref) => {
  return (
    <section className="about">
      <div className="about-heading">
        <h2>
          ABOUT ME <span className="orange-color">.</span>
        </h2>
      </div>
      <div className="about-content">
        <div className="about-image">
          <Image
            src={preetsuthar_image}
            width={450}
            height={450}
            priority={true}
            quality={100}
            placeholder="blur"
          />
        </div>
        <div className="about-text">
          <p>
            Hello! I'm Preet Suthar, a self-taught web developer in India with
            more than two years of experience. I'm 17 years old and I am very
            passionate about front-end development.
          </p>
          <p>
            My expertise lies in creating beautiful websites with a very
            appealing design. I can help you create a website with the most
            appealing design.
          </p>
        </div>
      </div>
    </section>
  );
});
