import Image from "next/image";
import preetsuthar_image from "../../public/preetsuthar.webp";
import React, { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";

export const About = React.forwardRef((props, ref) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 920);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const parallaxValues = isMobile ? [10, -10] : [50, -50];

  return (
    <section className="about">
      <div className="about-heading">
        <h2>
          ABOUT ME <span className="orange-color">.</span>
        </h2>
      </div>
      <div className="about-content">
        <Parallax
          translateY={parallaxValues}
          rotateZ={[10, -10]}
          speed={4}
          className="about-image"
        >
          <Image
            src={preetsuthar_image}
            width={360}
            height={360}
            priority={true}
            quality={100}
            placeholder="blur"
            alt="Preet Suthar"
          />
        </Parallax>
        <Parallax translateY={parallaxValues} className="about-text">
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
        </Parallax>
      </div>
    </section>
  );
});
