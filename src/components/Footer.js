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
                <Link
                  href="#home"
                  style={{
                    cursor: "pointer",
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  style={{
                    cursor: "pointer",
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  style={{
                    cursor: "pointer",
                  }}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  style={{
                    cursor: "pointer",
                  }}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  style={{
                    cursor: "pointer",
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="link_section link_section_2">
            <p>LET'S CONNECT</p>
            <ul>
              <li>
                <Link href="https://github.com/preetsuthar17" target="_blank">
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com/in/preetsuthar17"
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="mailto:preetsutharxd@gmail.com" target="_blank">
                  Email
                </Link>
              </li>
              <li>
                <Link href="https://dsc.gg/preet" target="_blank">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="https://x.com/preetsuthar17" target="_blank">
                  Twitter (X)
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <section className="section-3">
          <p>Made with 💖 by Preet Suthar - {year} </p>
        </section>
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
