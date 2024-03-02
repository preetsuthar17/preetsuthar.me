import ReviewsSection from "./ReviewsComponent";
import Footer from "../footer";
import Navbar from "../navbar";
import Layout from "../Layout";
import Link from "next/link";
import EyeFollowingMouse from "../EyeFollowingMouse";

import { playClickSound } from "../../utils/functions/ClickAudioPlayer";
import { motion } from "framer-motion";
import ContactComponent from "./ContactComponent";
import ScrollingText from "./ScrollingText";
import ShowcaseProjects from "./ShowcaseProjects";

const Showcase = () => {
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
                        href="/preet_suthar_resume.pdf"
                      >
                        My Resume
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
            <ScrollingText baseVelocity={-1}>
              FRONT END DEVELOPER ◦
            </ScrollingText>
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
            <ShowcaseProjects />
            <ContactComponent />
          </section>
          <Footer />
        </main>
      </Layout>
    </motion.div>
  );
};

export default Showcase;
