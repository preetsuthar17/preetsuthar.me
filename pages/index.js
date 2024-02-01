import dynamic from "next/dynamic";
import Head from "next/head";

import { motion } from "framer-motion";

import Showcase from "@/src/components/MainPageComponents/ShowcaseComponent";
const Layout = dynamic(() => import("@/src/components/Layout"));

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Layout style={{ backgroundColor: "#080809" }}>
        <Head>
          <title>Preet Suthar 🚀 | Front-end developer</title>
          <meta name="robots" content="all" />
          <meta
            name="description"
            content="Check out My cool website for simple web development blogs. Learn easy tricks and tips that make building websites a piece of cake!"
          />
          <meta name="theme-color" content="#1c9cfc" />
          <meta httpEquiv="content-language" content="en" />
          <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
          <meta
            property="og:title"
            content="Preet Suthar 🚀 | Front-end developer"
          />
          <meta
            property="og:description"
            content="Check out My cool website for simple web development blogs. Learn easy tricks and tips that make building websites a piece of cake!"
          />
          <meta property="og:url" content="https://preetsuthar.me" />
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
          <meta
            name="twitter:title"
            content="Preet Suthar 🚀 | Front-end developer"
          />
          <meta
            name="twitter:description"
            content="Check out My cool website for simple web development blogs. Learn easy tricks and tips that make building websites a piece of cake!"
          />{" "}
          <meta name="subject" content="web development" />
        </Head>
        <Showcase />
      </Layout>
    </motion.div>
  );
}
