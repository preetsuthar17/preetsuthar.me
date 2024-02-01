import Head from "next/head";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Footer = dynamic(() => import("@/src/components/footer"));
const Navbar = dynamic(() => import("@/src/components/navbar"));
import Layout from "@/src/components/Layout";

import ProjectDivComponent from "@/src/components/ProjectPageComponents/ProjectsDivComponent";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Layout>
        <Head>
          <title>Projects | Preet Suthar 🚀</title>
          <meta name="robots" content="all" />
          <meta
            name="description"
            content="Check out My cool website for simple web development blogs. Learn easy tricks and tips that make building websites a piece of cake!w"
          />
          <meta name="theme-color" content="#1c9cfc" />
          <meta httpEquiv="content-language" content="en" />
          <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
          <meta property="og:title" content="Projects | Preet Suthar 🚀" />
          <meta
            property="og:description"
            content="Check out My cool website for simple web development blogs. Learn easy tricks and tips that make building websites a piece of cake!w"
          />
          <meta property="og:url" content="https://preetsuthar.me/projects" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://preetsuthar.me/website-icon.png"
          />
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
          <meta
            name="twitter:description"
            content="Check out My cool website for simple web development blogs. Learn easy tricks and tips that make building websites a piece of cake!w"
          />{" "}
          <meta name="subject" content="web development" />
        </Head>
        <Navbar />
        <ProjectDivComponent />
        <Footer />
      </Layout>
    </motion.div>
  );
};

export default Projects;
