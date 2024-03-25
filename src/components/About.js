import Image from "next/image";
import preetsuthar_image from "../../public/preetsuthar.webp";
import React, { useEffect, useState, useRef } from "react";
import { Parallax } from "react-scroll-parallax";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export const About = React.forwardRef((props, ref) => {
  const [isMobile, setIsMobile] = useState(false);
  const imageRef = useRef(null);

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
    gsap.fromTo(
      imageRef.current,
      { y: "-10%" },
      {
        y: "1%",
        scrollTrigger: {
          trigger: imageRef.current,
          scrub: 1,
        },
      }
    );

    gsap.to(".preet-suthar-image", {
      filter: "blur(0px)",
      scrollTrigger: {
        trigger: ".about",
        start: "top 100%",
        end: "center 40%",
        scrub: true,
        // markers: true,
      },
    });
    gsap.to(".about-text", {
      filter: "blur(0px)",
      opacity: 1,
      scrollTrigger: {
        trigger: ".about",
        start: "top 100%",
        end: "center 40%",
        scrub: true,
        // markers: true,
      },
    });
  });

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      gsap.to(imageRef?.current, {
        x: (e.clientX - window.innerWidth / 2) / 40,
        y: (e.clientY - window.innerHeight / 2) / 40,
        ease: "Power1.easeOut",
        duration: 1.3,
      });
    });
  }, []);

  const parallaxValues = isMobile ? [10, -10] : [50, -50];

  return (
    <Parallax className="about" id="about">
      <div className="about-heading">
        <h2>
          ABOUT ME <span className="orange-color">.</span>
        </h2>
      </div>
      <div className="about-content">
        <div className="about-image">
          <Image
            src={preetsuthar_image}
            width={360}
            height={360}
            priority={true}
            quality={100}
            placeholder="blur"
            className="preet-suthar-image"
            alt="Preet Suthar"
            ref={imageRef}
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
          <Link href="/templates" className="primary-button">
            Buy Website Templates
          </Link>
        </div>
      </div>
    </Parallax>
  );
});
