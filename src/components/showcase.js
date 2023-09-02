import ReviewsSection from "./ReviewsSection";
import ShowBlogs from "./showBlogs";

import goDown from "../utils/icons/go-down.svg";

import Footer from "./footer";
import Navbar from "./navbar";
import Layout from "./Layout";
import CustomTooltip from "./CustomTooltip";

import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";

const Showcase = () => {
  const elementRef = useRef(null);

  function AutomaticAge({ birthdate }) {
    const calculateAge = useCallback(() => {
      const birthDate = new Date(birthdate);
      const currentDate = new Date();
      const age = Math.floor(
        (currentDate - birthDate) / (365.25 * 24 * 60 * 60 * 1000)
      );
      return age;
    }, [birthdate]);

    const [age, setAge] = useState(calculateAge());

    useEffect(() => {
      const interval = setInterval(() => {
        setAge(calculateAge());
      }, 24 * 60 * 60 * 1000);

      return () => clearInterval(interval);
    }, [calculateAge]);

    return <span> {age} </span>;
  }

  const birthdate = "2006-08-28";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Layout>
        <Navbar />
        <main>
          <section className="showcase">
            <div className="showcase-header ">
              <div className="styled-hr"></div>

              <h1 className="showcase-h1">preet.</h1>
              <div className="styled-hr"></div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <div className="showcase-about">
                <p className="showcase-p">
                  Hello! I&apos;m Preet Suthar,{" "}
                  <AutomaticAge birthdate={birthdate} /> years old self-taught
                  web developer with more than two years of experience.
                  <br />
                  Passionate about Front-End web development, soon going for
                  Full-Stack web development.
                </p>
                <div style={{ marginTop: "0.5rem" }}>
                  <CustomTooltip
                    text="note!"
                    description="Dynamic Imports may affect loading on some devices."
                  >
                    <p
                      style={{
                        color: "#ff4f4f",
                        fontSize: "1rem",
                        cursor: "pointer",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        fill="currentColor"
                        class="bi bi-exclamation-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
                      </svg>
                    </p>
                  </CustomTooltip>
                </div>
                <div>
                  <Link href="#showcaseBlogs">
                    <Image
                      loading="lazy"
                      className="showcase-scroll-down"
                      alt="scroll-down"
                      src={goDown}
                    />
                  </Link>
                </div>

                <ShowBlogs />
                <div className="styled-hr"></div>

                <ReviewsSection />
              </div>
            </motion.div>
          </section>
          <Footer />
        </main>
      </Layout>
    </motion.div>
  );
};

export default Showcase;
