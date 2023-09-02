import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/src/components/navbar"));
const Footer = dynamic(() => import("@/src/components/footer"));

import { motion } from "framer-motion";

import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Head>
          <title>Oops!</title>
          <meta name="robots" content="noindex" />
        </Head>
        <Navbar />
        <div className="notFoundDiv">
          <h2>404</h2>
          <p className="p-color">You&apos;re on wrong path!</p>
        </div>
        <Footer />
      </motion.div>
    </>
  );
}
