import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";
import { playClickSound } from "@/src/utils/functions/ClickAudioPlayer";

const ContactComponent = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { y: 80 },
    visible: { y: 0 },
  };

  return (
    <>
      <div
        className="showcase-contact-text"
        style={{
          flexDirection: "column",
        }}
      >
        {" "}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          transition={{ duration: 0.7 }}
        >
          <p>
            Come on! Don't be stranger.{" "}
            <span className="contact-lets-connect-span">Let's connect</span>
          </p>
        </motion.div>
        <div
          className="showcase-contact-text-2 showcase-contact-text-links"
          style={{ overflow: "hidden" }}
        >
          <motion.div
            initial="hidden"
            animate={controls}
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p>
              <Link
                className="twitterLink"
                onClick={playClickSound}
                target="_blank"
                href="https://www.linkedin.com/in/preet-suthar-41b460243/"
              >
                LinkedIn?
              </Link>
              <span
                style={{
                  color: "rgba(255, 255, 255, 0.167",
                }}
              >
                {" "}
                or{" "}
              </span>
              <Link
                className="githubLink"
                onClick={playClickSound}
                target="_blank"
                href="https://github.com/preetsuthar17"
              >
                GitHub?
              </Link>
              <span
                style={{
                  color: "rgba(255, 255, 255, 0.167",
                }}
              >
                {" "}
                or{" "}
              </span>
              <Link
                className="emailLink color-mailred"
                onClick={playClickSound}
                target="_blank"
                href="mailto:preetsutharxd@gmail.com"
              >
                Mail me?
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ContactComponent;
