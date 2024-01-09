import ReviewsSection from "./ReviewsSection";

import Footer from "./footer";
import Navbar from "./navbar";
import Layout from "./Layout";
import Link from "next/link";

import CustomTooltip2 from "./CustomTooltip2";

import VanillaTilt from "vanilla-tilt";

import { motion } from "framer-motion";

import { gsap } from "gsap";

import { useState, useEffect, useRef, useCallback } from "react";

const Showcase = () => {
  useEffect(() => {
    const tiltContainer = document.querySelectorAll(".review-card");
    VanillaTilt.init(tiltContainer, {
      max: 8,
      speed: 200,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      transition: true,
      glare: true,
      "max-glare": 0.2,
    });
  }, []);

  useEffect(() => {
    const tiltContainer = document.querySelectorAll(
      ".showcase-header-image > img"
    );
    VanillaTilt.init(tiltContainer, {
      max: 10,
      speed: 200,
      scale: 1.01,
      easing: "ease",
      duration: 10,
      transition: true,
      glare: true,
      "max-glare": 0.2,
    });
  }, []);

  useEffect(() => {
    const showcasePara = document.querySelectorAll(".showcase-p");

    showcasePara.forEach((para) => {
      const el = para.querySelectorAll("p");

      gsap.from(el, {
        opacity: 0,
        y: 500,
        duration: 1,
        scrollTrigger: {
          markers: true,
          trigger: para,
          markers: false,
          start: "top 30%",
          end: "center 60%",
          scrub: 2,
          toggleActions: "play none none none",
        },
      });
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
      transition={{ duration: 1.2 }}
    >
      <Layout>
        <Navbar />
        <main>
          <section className="showcase">
            <div className="showcase-header">
              <div className="showcase-header-hero">
                <div className="showcase-header-title">
                  <p>Namaste(); I'm</p>
                  <h1>Preet Suthar.</h1>
                  <div className="styled-hr"></div>
                  <div className="showcase-header-subtitle">
                    <p className="showcase-header-about">
                      A Front-end web developer. creating beautiful websites. I
                      can help you to create website with the most{" "}
                      <span className="color-mediumslateblue ">
                        appealing designs
                      </span>
                      .
                    </p>
                  </div>
                  <div className="showcase-header-buttons">
                    <Link className="primary-btn-main" href="/about">
                      <span>
                        <em>Contact me</em>
                      </span>
                      <span>
                        <em>Contact me</em>
                      </span>
                    </Link>
                  </div>
                  <div className="chip_component">
                    <CustomTooltip2 text="more information">
                      <div className="chip_content">
                        <Link
                          href="https://www.youtube.com/watch?v=itHctPXzwnM"
                          target="_blank"
                        >
                          Assistify AI beta release
                        </Link>
                      </div>
                    </CustomTooltip2>
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
                <span className="color-mediumslateblue text-underline">
                  Let's connect
                </span>
              </p>
              <div
                className="showcase-contact-text-2 showcase-contact-text-links"
                style={{ overflow: "hidden" }}
              >
                <p>
                  <Link
                    className="twitterLink"
                    target="_blank"
                    href="https://x.com/preetsuthar17"
                  >
                    Twitter?
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
