import Image from "next/image";
import preetsuthar_image from "../../public/preetsuthar.webp";
import React, { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

  useEffect(() => {
    gsap.to(".about", {
      borderRadius: "20px",
      scrollTrigger: {
        trigger: ".about",
        start: "top 90%",
        end: "bottom center",
        scrub: true,
      },
    });
    gsap.to(".preet-suthar-image", {
      borderRadius: "10px",
      scrollTrigger: {
        trigger: ".about",
        start: "top 90%",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const parallaxValues = isMobile ? [10, -10] : [50, -50];

  return (
    <Parallax className="about" id="about">
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
            className="preet-suthar-image"
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
    </Parallax>
  );
});
