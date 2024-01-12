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
      // Prevent scrolling for arrow keys
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.preventDefault();
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("keydown", handleKeyDown);

    // Remove the event listener when the component unmounts
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
        transition={{ duration: 1.2 }}
      >
        <Head>
          <title>Oops!</title>
          <meta name="robots" content="noindex" />
        </Head>
        <Navbar />
        <div className="notFoundDiv">
          <div>
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
