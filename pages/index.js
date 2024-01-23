import dynamic from "next/dynamic";
import Head from "next/head";

import { motion } from "framer-motion";

const Showcase = dynamic(() => import("@/src/components/showcase"));
const Layout = dynamic(() => import("@/src/components/Layout"));

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <Layout style={{ backgroundColor: "#080809" }}>
        <Head>
          <title>Preet Suthar 🚀 | Front-end developer</title>
          <meta name="robots" content="all" />
          <meta
            name="description"
            content="Preet's personal portfolio and blog website."
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
            content="Preet's personal portfolio and blog website."
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
            content="Preet's personal portfolio and blog website."
          />{" "}
          <meta name="subject" content="web development" />
        </Head>

        <>
          <Showcase />
        </>
      </Layout>
    </motion.div>
  );
}
