import ReviewsSection from "./ReviewsSection";

import Footer from "./footer";
import Navbar from "./navbar";
import Layout from "./Layout";
import Link from "next/link";
import EyeFollowingMouse from "./EyeFollowingMouse";

import VanillaTilt from "vanilla-tilt";

import { motion } from "framer-motion";

import { gsap } from "gsap";

import { useEffect } from "react";

const Showcase = () => {
  useEffect(() => {
    const tiltContainer = document.querySelectorAll(".review-card");
    VanillaTilt.init(tiltContainer, {
      max: 8,
      speed: 200,
      easing: "ease",
      transition: true,
      glare: true,
      "max-glare": 0.1,
    });
  }, []);

  useEffect(() => {
    const showcasePara = document.querySelectorAll(".showcase-contact-text");

    showcasePara.forEach((para) => {
      const el = para.querySelectorAll("p");

      gsap.from(el, {
        opacity: 0,
        y: 500,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: para,
          markers: false,
          start: "top 100%",
          end: "center 60%",
          scrub: 3,
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
    >
      <Layout>
        <Navbar />
        <main>
          <section className="showcase">
            <div className="showcase-header">
              <div className="showcase-header-hero">
                <div className="showcase-header-title">
                  <div className="showcase-section-1">
                    <div className="showcase-header-name">
                      <div>
                        <h1>Preet</h1>
                        <p className="font-effect">Suthar</p>
                      </div>
                    </div>
                    <div className="styled-hr"></div>
                    <div className="showcase-header-subtitle">
                      <p className="showcase-header-about">
                        A Front-end web developer. creating beautiful websites.
                        I will help you to create websites with the most{" "}
                        <span
                          style={{
                            color: "#AC9180",
                          }}
                        >
                          appealing designs
                        </span>
                        .
                      </p>
                    </div>
                    <div className="showcase-btn">
                      <Link
                        className="primary-btn-main"
                        style={{
                          width: "fit-content",
                        }}
                        href="mailto:preetsutharxd@gmail.com"
                      >
                        <span>
                          <em>Contact me</em>
                        </span>
                      </Link>
                      <Link
                        className="primary-btn-secondary"
                        style={{
                          width: "fit-content",
                        }}
                        href="/about"
                      >
                        <span>
                          <em>About me</em>
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="showcase-section-2">
                    <EyeFollowingMouse />
                  </div>
                </div>
              </div>
            </div>
            <div className="scrolling_text">
              <div className="text">
                <span className="text-only-outline">front-end developer •</span>
                <span className="text-only-outline">front-end developer •</span>
                <span className="text-only-outline">front-end developer •</span>
                <span className="text-only-outline">front-end developer •</span>
                <span className="text-only-outline">front-end developer •</span>
              </div>
              <div className="text">
                <span className="text-only-outline">front-end developer •</span>
                <span className="text-only-outline">front-end developer •</span>
                <span className="text-only-outline">front-end developer •</span>
                <span className="text-only-outline">front-end developer •</span>
                <span className="text-only-outline">front-end developer •</span>
              </div>
            </div>

            <div className="showcase-go-down-arr">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ccc"
                  d="M11 4h2v12l5.5-5.5l1.42 1.42L12 19.84l-7.92-7.92L5.5 10.5L11 16V4Z"
                />
              </svg>
            </div>
            <ReviewsSection />

            <div
              className="showcase-contact-text"
              style={{
                flexDirection: "column",
              }}
            >
              <p>
                Come on! Don't be stranger.{" "}
                <span className="contact-lets-connect-span">Let's connect</span>
              </p>
              <div
                className="showcase-contact-text-2 showcase-contact-text-links"
                style={{ overflow: "hidden" }}
              >
                <p>
                  <Link
                    className="twitterLink"
                    target="_blank"
                    href="https://www.linkedin.com/in/preet-suthar-41b460243/"
                  >
                    LinkedIn?
                  </Link>
                  <span
                    style={{
                      color: "rgba(255, 255, 255, 0.167",
                    }}
                  >
                    {" "}
                    or{" "}
                  </span>
                  <Link
                    className="githubLink"
                    target="_blank"
                    href="https://github.com/preetsuthar17"
                  >
                    GitHub?
                  </Link>
                  <span
                    style={{
                      color: "rgba(255, 255, 255, 0.167",
                    }}
                  >
                    {" "}
                    or{" "}
                  </span>
                  <Link
                    className="emailLink color-mailred"
                    target="_blank"
                    href="mailto:preetsutharxd@gmail.com"
                  >
                    Mail me?
                  </Link>
                </p>
              </div>
            </div>
          </section>
          <Footer />
        </main>
      </Layout>
    </motion.div>
  );
};

export default Showcase;
