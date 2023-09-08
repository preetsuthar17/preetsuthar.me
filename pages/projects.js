import Link from "next/link";
import { useState, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import { motion } from "framer-motion";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Footer = dynamic(() => import("@/src/components/footer"));
const Navbar = dynamic(() => import("@/src/components/navbar"));
import Layout from "@/src/components/Layout";

const Projects = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  });

  useEffect(() => {
    const contentItems = document.querySelectorAll(".project-card");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contentItems,
        start: "center 100%",
        end: "center",
        scrub: 2,
      },
    });

    contentItems.forEach((item, index) => {
      tl.fromTo(
        item,
        { opacity: 0, x: "70px" },
        { opacity: 1, x: 0, duration: 0.5, ease: "bounce.in" }
      ),
        index * 0.8;
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
        <Head>
          <title>Projects | Preet Suthar 🚀</title>
          <meta name="robots" content="all" />
          <meta name="description" content="Portfolio page" />
          <meta name="theme-color" content="#1c9cfc" />
          <meta httpEquiv="content-language" content="en" />
          <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
          <meta property="og:title" content="Projects | Preet Suthar 🚀" />
          <meta property="og:description" content="Portfolio page" />
          <meta property="og:url" content="https://preetsuthar.me/projects" />
          <meta property="og:type" content="website" />
          <meta
            name="keywords"
            content="Preet Suthar, Front-end Developer, Portfolio, Blog, web development, preet, front end development, front-end developemtn"
          />
          <meta name="author" content="Preet Suthar" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="twitter:title" content="Projects | Preet Suthar 🚀" />
          <meta name="twitter:description" content="Portfolio page" />{" "}
          <meta name="subject" content="web development" />
        </Head>
        <Navbar />
        <>
          <div className="project-div">
            <motion.div
              initial={{ opacity: 1, translateX: -100 }}
              animate={{ opacity: 1, translateX: 0 }}
              exit={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="project-headers">
                <div className="project-title">
                  <h1>&#47;projects</h1>
                </div>
                <div className="project-header-text">
                  <p>You can view more on my github.</p>
                </div>
              </div>
            </motion.div>
            <div className="styled-hr"></div>
            <div className="project-container">
              {/* Project 1 */}
              <div className="project-card">
                <Link target="_blank" href="https://preetsuthar.me">
                  <div className="project-header">
                    <span>preetsuthar.me</span>
                  </div>

                  <p className="project-text">
                    This is my open-source personal portfolio website and blog
                    website built running on next.js and react.js and deployed
                    using Vercel.
                  </p>
                </Link>
                <Link target="_blank" href="https://preetsuthar.me">
                  ⭐ Live Demo
                </Link>
              </div>
              {/* Project 2 */}
              <div className="project-card ">
                <Link href="https://todozenith.vercel.app/">
                  <div className="project-header">
                    <span>TodoZenith</span>
                  </div>

                  <p className="project-text">
                    Simplified JavaScript to-do manager with advanced features
                    for effortless task management. Get things done with ease!
                  </p>
                </Link>
                <Link target="_blank" href="https://todozenith.vercel.app/">
                  ⭐ Live Demo
                </Link>
              </div>
              {/* Project 3 */}

              <div className="project-card ">
                <Link
                  target="_blank"
                  href="https://discord-bot-webpage-template.vercel.app/"
                >
                  <div className="project-header">
                    <span>Discord bot website template</span>
                  </div>

                  <p className="project-text">
                    Minimal and awesome discord bot website created with love
                    using NextJS.
                  </p>
                </Link>
                <Link
                  target="_blank"
                  href="https://discord-bot-webpage-template.vercel.app/"
                >
                  ⭐ Live Demo
                </Link>
              </div>
              {/* Project 4 */}

              <div className="project-card ">
                <Link
                  target="_blank"
                  href="https://marketplace.visualstudio.com/items?itemName=Pritudev.shadowednight"
                >
                  <div className="project-header">
                    <span>ShadowedNight</span>
                  </div>

                  <p className="project-text">
                    Embrace the mystery of the night with an elegant and
                    immersive dark theme for a captivating coding experience.
                  </p>
                </Link>
                <Link
                  target="_blank"
                  href="https://marketplace.visualstudio.com/items?itemName=Pritudev.shadowednight"
                >
                  ⭐ Live Demo
                </Link>
              </div>
              {/* Project 5 */}
              <div className="project-card ">
                <Link
                  target="_blank"
                  href="https://gatsby-blog-temp.netlify.app"
                >
                  <div className="project-header">
                    <span>Advance blog template</span>
                  </div>

                  <p className="project-text">
                    Gatsby Blog Template - Open Source and Welcoming
                    Contributions.
                  </p>
                </Link>
                <Link
                  target="_blank"
                  href="https://gatsby-blog-temp.netlify.app"
                >
                  ⭐ Live Demo
                </Link>
              </div>

              {/* Project 6*/}
              <div className="project-card ">
                <Link
                  target="_blank"
                  href="https://gatsby-portfolio-temp.netlify.app"
                >
                  <div className="project-header">
                    <span>Advance portfolio template</span>
                  </div>

                  <p className="project-text">
                    Portfolio Website Template - Open Source and Welcoming
                    Contributions.
                  </p>
                </Link>
                <Link
                  target="_blank"
                  href="https://gatsby-portfolio-temp.netlify.app"
                >
                  ⭐ Live Demo
                </Link>
              </div>
              {/* Project 7*/}
              <div className="project-card ">
                <Link
                  target="_blank"
                  href="https://github.com/preetsuthar17/Vinlybot"
                >
                  <div className="project-header">
                    <span>Vinlybot</span>
                  </div>

                  <p className="project-text">
                    🐇 Vinlybot is a open-source discord bot with 100+ command
                    where you can contribute!
                  </p>
                </Link>
                <Link
                  target="_blank"
                  href="https://github.com/preetsuthar17/Vinlybot"
                >
                  ⭐ Live Demo
                </Link>
              </div>
              {/* Project 8*/}
              <div className="project-card ">
                <Link
                  target="_blank"
                  href="https://github.com/preetsuthar17/Zakbot"
                >
                  <div className="project-header">
                    <span>Zakbot</span>
                  </div>

                  <p className="project-text">
                    Zak is a multipurpose discord bot made with discord.js v13,
                    Created Using discord.js
                  </p>
                </Link>
                <Link
                  target="_blank"
                  href="https://github.com/preetsuthar17/Zakbot"
                >
                  ⭐ Live Demo
                </Link>
              </div>
            </div>
          </div>
        </>
        <Footer />
      </Layout>
    </motion.div>
  );
};

export default Projects;
