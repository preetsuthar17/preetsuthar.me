import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/src/components/navbar"));
const Footer = dynamic(() => import("@/src/components/footer"));

import { SnakeGame } from "@/src/components/SnakeGame";
import { useEffect } from "react";
import { motion } from "framer-motion";

import Head from "next/head";

export default function Custom404() {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Head>
          <title>Oops!</title>
          <meta
            property="og:image"
            content="https://preetsuthar.me/website-icon.png"
          />
          <meta name="robots" content="noindex" />
        </Head>
        <Navbar />
        <div className="notFoundDiv">
          <div className="main_div">
            <h2>404</h2>
            <p className="p-color">You&apos;re on wrong path!</p>
          </div>
          <div className="snakeGame">
            <SnakeGame
              snakeHeadColor="darkgreen"
              snakeBodyColor="green"
              blueFruitColor="purple"
            ></SnakeGame>
          </div>
        </div>
        <Footer />
      </motion.div>
    </>
  );
}
