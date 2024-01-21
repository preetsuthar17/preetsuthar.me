import { useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Footer = dynamic(() => import("@/src/components/footer"));
const Navbar = dynamic(() => import("@/src/components/navbar"));
import Layout from "@/src/components/Layout";

import ProjectCard from "@/src/components/ProjectCard";

const Projects = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  });

  useEffect(() => {
    const cardContainers = document.querySelectorAll(".project-card");

    cardContainers.forEach((container, index) => {
      gsap.to({}, 0.6, {});
      gsap.fromTo(
        container,
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 0.2,
          delay: index * 0.01,
          ease: "power1.in",
          scrollTrigger: {
            trigger: container,
            start: "top 60%",
            end: "center 100%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  useEffect(() => {
    const handleMousemove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
      e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
    };
    document.querySelectorAll(".project-card").forEach((card) => {
      card.addEventListener("mousemove", handleMousemove);
      return () => {
        card.removeEventListener("mousemove", handleMousemove);
      };
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
            content="Preet Suthar, Front-end Developer, Portfolio, Blog, web development, preet, front end development, front-end developer"
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
            <div className="project-headers">
              <div className="featured-section">
                <h2>Featured</h2>
                <ProjectCard
                  projectName="preetsuthar.me"
                  projectLink="https://preetsuthar.me"
                  projectStack="NextJs"
                  projectAbout=" This is my open-source personal portfolio website and blog website built running on next.js and react.js and using Vercel."
                />
                <ProjectCard
                  projectName="Dracodemy"
                  projectLink="https://Dracodemy.tech"
                  projectStack="NextJs"
                  projectAbout="Dracodemy is online learning website with a lot of resource to learn the most basic to advance content related to programming."
                />
              </div>
            </div>
            <div className="styled-hr"></div>

            <div className="project-container">
              <ProjectCard
                projectName="preetsuthar.me"
                projectLink="https://preetsuthar.me"
                projectStack="NextJs"
                projectAbout=" This is my open-source personal portfolio website and blog website built running on next.js and react.js and using Vercel."
              />
              <ProjectCard
                projectName="TodoZenith"
                projectLink="https://todozenith.vercel.app/"
                projectStack="JavaScript"
                projectAbout="Simplified JavaScript CRUD to-do manager with advanced features for effortless task management. Get things done with ease!"
              />
              <ProjectCard
                projectName="Dracodemy"
                projectLink="https://Dracodemy.tech"
                projectStack="NextJs"
                projectAbout="Dracodemy is online learning website with a lot of resource to learn the most basic to advance content related to programming."
              />
              <ProjectCard
                projectName="Advance blog template"
                projectLink="https://gatsby-blog-temp.netlify.app"
                projectStack="GatsbyJs"
                projectAbout="Gatsby Blog Template - Open Source and Welcoming Contributions."
              />
              <ProjectCard
                projectName="Advance portfolio template"
                projectLink="https://gatsby-portfolio-temp.netlify.app"
                projectStack="GatsbyJs"
                projectAbout=" Portfolio Website Template - Open Source and Welcoming Contributions."
              />
              <ProjectCard
                projectName="Discord bot website template"
                projectLink="https://discord-bot-webpage-template.vercel.app/"
                projectStack="NextJs"
                projectAbout="Minimal and awesome discord bot website created with love using NextJS."
              />

              <ProjectCard
                projectName="ShadowedNight"
                projectLink="https://marketplace.visualstudio.com/items?itemName=Pritudev.shadowednight"
                projectStack="JavaScript"
                projectAbout="Embrace the mystery of the night with an elegant and immersive dark theme for a captivating coding experience."
              />
              <ProjectCard
                projectName="Vinlybot"
                projectLink="https://github.com/preetsuthar17/Vinlybot"
                projectStack="DiscordJs"
                projectAbout="Vinlybot is a open-source discord bot with 100+ command where you can contribute!"
              />
              <ProjectCard
                projectName="Zakbot"
                projectLink="https://github.com/preetsuthar17/Zakbot"
                projectStack="DiscordJs"
                projectAbout="Zak is a multipurpose discord bot made with discord js v13, Created Using discord.js"
              />
            </div>
          </div>
        </>
        <Footer />
      </Layout>
    </motion.div>
  );
};

export default Projects;
