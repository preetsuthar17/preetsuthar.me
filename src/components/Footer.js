import SmoothScrollLink from "./other/SmoothLinkScroll";
import Link from "next/link";
import React from "react";
import { Parallax } from "react-scroll-parallax";

import { useEffect, useRef } from "react";
import { ScrollToTopButton } from "./other/ScrollToTopButton";

import gsap from "gsap";

import shape from "../assets/shape-1.svg";
import Image from "next/image";

export const Footer = React.forwardRef((props, ref) => {
  const date = new Date();
  const year = date.getFullYear();
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
    <>
      <footer className="footer" ref={ref}>
        <Parallax scale={[0, 10]} className="shape">
          <Image ref={imageRef} src={shape} alt="Parallax Shape" />
        </Parallax>
        <section className="section-1">
          <p>Got a project?</p>
          <h3>
            LET'S GET IN TOUCH<span className="orange-color">.</span>
          </h3>
        </section>

        <section className="section-2">
          <div className="link_section link_section_1">
            <p>EXPLORE</p>
            <ul>
              <li>
                <SmoothScrollLink className="transforming-link" href="#home">
                  <span>Home</span>
                  <span>Home</span>
                </SmoothScrollLink>
              </li>
              <li>
                <SmoothScrollLink className="transforming-link" href="#about">
                  <span>About</span>
                  <span>About</span>
                </SmoothScrollLink>
              </li>
              <li>
                <SmoothScrollLink
                  className="transforming-link"
                  href="#projects"
                >
                  <span>Projects</span>
                  <span>Projects</span>
                </SmoothScrollLink>
              </li>
              <li>
                <SmoothScrollLink
                  className="transforming-link"
                  href="#services"
                >
                  <span>Services</span>
                  <span>Services</span>
                </SmoothScrollLink>
              </li>
              <li>
                <SmoothScrollLink className="transforming-link" href="#contact">
                  <span>Contact</span>
                  <span>Contact</span>
                </SmoothScrollLink>
              </li>
            </ul>
          </div>
          <div className="link_section link_section_2">
            <p>LET'S CONNECT</p>
            <ul>
              <li>
                <Link
                  className="transforming-link"
                  href="https://github.com/preetsuthar17"
                  target="_blank"
                >
                  <span>GitHub</span>
                  <span>GitHub</span>
                </Link>
              </li>
              <li>
                <Link
                  className="transforming-link"
                  href="https://linkedin.com/in/preetsuthar17"
                  target="_blank"
                >
                  <span>LinkedIn</span>
                  <span>LinkedIn</span>
                </Link>
              </li>
              <li>
                <Link
                  className="transforming-link"
                  href="mailto:preetsutharxd@gmail.com"
                  target="_blank"
                >
                  <span>Email</span>
                  <span>Email</span>
                </Link>
              </li>
              <li>
                <Link
                  className="transforming-link"
                  href="https://dsc.gg/preet"
                  target="_blank"
                >
                  <span>Discord</span>
                  <span>Discord</span>
                </Link>
              </li>
              <li>
                <Link
                  className="transforming-link"
                  href="https://x.com/preetsuthar17"
                  target="_blank"
                >
                  <span>Twitter (X)</span>
                  <span>Twitter (X)</span>
                </Link>
              </li>
            </ul>
          </div>
        </section>
        // <section className="section-3">
        //   <p>Made with 💖 by Preet Suthar - {year} </p>
        // </section>
        <section className="section-4">
          <Parallax translateY={[50, -70]}>
            <span className="text-only-outline">PREET</span>
            <span className="orange-color">.</span>
          </Parallax>
        </section>

        <ScrollToTopButton />
      </footer>
    </>
  );
});
