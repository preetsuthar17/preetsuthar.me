import Link from "next/link";
import React from "react";
import { Parallax } from "react-scroll-parallax";

export const Footer = React.forwardRef((props, ref) => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <footer className="footer" ref={ref}>
        <section className="section-1">
          <Parallax translateY={[100, -30]}>
            <p>Got a project?</p>
            <h3>
              LET'S GET IN TOUCH<span className="orange-color">.</span>
            </h3>
          </Parallax>
        </section>
        <section className="section-2">
          <div className="link_section link_section_1">
            <p>EXPLORE</p>
            <ul>
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Projects</Link>
              </li>
              <li>
                <Link href="#">Services</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="link_section link_section_2">
            <p>SOCIAL</p>
            <ul>
              <li>
                <Link href="#" target="_blank">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank">
                  Email
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank">
                  Twitter (X)
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <section className="section-3">
          <p>Made with 💖 by Preet Suthar - {year} </p>
        </section>
      </footer>
    </>
  );
});
