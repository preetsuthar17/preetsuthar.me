import ReviewsSection from "./ReviewsSection";
import Footer from "./footer";
import Navbar from "./navbar";
import Layout from "./Layout";
import Link from "next/link";
import EyeFollowingMouse from "./EyeFollowingMouse";
import VanillaTilt from "vanilla-tilt";
import { useEffect } from "react";
import { playClickSound } from "../utils/functions/ClickAudioPlayer";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

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

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { y: 80 },
    visible: { y: 0 },
  };

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
                        onClick={playClickSound}
                        style={{
                          width: "fit-content",
                        }}
                        href="mailto:preetsutharxd@gmail.com"
                      >
                        Contact me
                      </Link>
                      <Link
                        className="primary-btn-secondary"
                        onClick={playClickSound}
                        style={{
                          width: "fit-content",
                        }}
                        href="/about"
                      >
                        About me
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
              {" "}
              <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={fadeInUp}
                transition={{ duration: 0.7 }}
              >
                <p>
                  Come on! Don't be stranger.{" "}
                  <span className="contact-lets-connect-span">
                    Let's connect
                  </span>
                </p>
              </motion.div>
              <div
                className="showcase-contact-text-2 showcase-contact-text-links"
                style={{ overflow: "hidden" }}
              >
                <motion.div
                  initial="hidden"
                  animate={controls}
                  variants={fadeInUp}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <p>
                    <Link
                      className="twitterLink"
                      onClick={playClickSound}
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
                      onClick={playClickSound}
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
                      onClick={playClickSound}
                      target="_blank"
                      href="mailto:preetsutharxd@gmail.com"
                    >
                      Mail me?
                    </Link>
                  </p>
                </motion.div>
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
