import Head from "next/head";
import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Navbar = dynamic(() => import("@/src/components/navbar"));
const Footer = dynamic(() => import("@/src/components/footer"));

import SkillsIcons from "@/src/components/AboutPageComponents/SkillsIcons";
import TimelineComponent from "@/src/components/AboutPageComponents/TimelineComponent";
import AboutDivComponent from "@/src/components/AboutPageComponents/AboutDivComponent";

const About = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Head>
          <title>About | Preet Suthar 🚀</title>
          <meta name="robots" content="all" />

          <meta
            name="description"
            content="My personal portfolio website with informative web development blogs free of cost ✨."
          />
          <meta name="theme-color" content="#1c9cfc" />
          <meta httpEquiv="content-language" content="en" />
          <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
          <meta property="og:title" content="About | Preet Suthar 🚀" />
          <meta
            property="og:description"
            content="My personal portfolio website with informative web development blogs free of cost ✨."
          />
          <meta property="og:url" content="https://preetsuthar.me/about" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://preetsuthar.me/website-icon.png"
          />
          <meta
            name="keywords"
            content="Preet Suthar, front-end development, Portfolio, Blog, web development, preet, front end development, front-end developer"
          />
          <meta name="author" content="Preet Suthar" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="twitter:title" content="About | Preet Suthar 🚀" />
          <meta
            name="twitter:description"
            content="My personal portfolio website with informative web development blogs free of cost ✨."
          />
          <meta name="subject" content="web development" />
        </Head>
        <Navbar />
        <div
          style={{
            overflowX: "hidden",
          }}
        >
          <AboutDivComponent />
          <SkillsIcons />
          <TimelineComponent />
        </div>
        <Footer />
      </motion.div>
    </>
  );
};
export default About;
