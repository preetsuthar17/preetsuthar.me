const Navbar = dynamic(() => import("@/src/components/navbar"));
const Footer = dynamic(() => import("@/src/components/footer"));
const Layout = dynamic(() => import("@/src/components/Layout"));
const ReviewForm = dynamic(() => import("@/src/components/ReviewForm"));

import { motion } from "framer-motion";

import dynamic from "next/dynamic";

import Head from "next/head";

const reviewPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Layout>
        <Head>
          <title>Review | Preet Suthar 🚀</title>
          <meta name="robots" content="all" />
          <meta name="description" content="Review page" />
          <meta name="theme-color" content="#1c9cfc" />
          <meta httpEquiv="content-language" content="en" />
          <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
          <meta property="og:title" content="Review | Preet Suthar 🚀" />
          <meta property="og:description" content="Review page" />
          <meta property="og:url" content="https://preetsuthar.me/reviews" />
          <meta property="og:type" content="website" />
          <meta
            name="keywords"
            content="Preet Suthar, front end development, Portfolio, Blog, web development, preet, front end development, front-end developemtn"
          />
          <meta name="author" content="Preet Suthar" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="twitter:title" content="Review | Preet Suthar 🚀 " />
          <meta name="twitter:description" content="Review page" />{" "}
          <meta name="subject" content="web development" />
        </Head>
        <Navbar />
        <ReviewForm />
        <Footer />
      </Layout>
    </motion.div>
  );
};

export default reviewPage;
