import Link from "next/link";

import { motion } from "framer-motion";
import { playClickSound } from "../utils/functions/ClickAudioPlayer";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <footer className="footer-div">
        <div className="footer-text">
          <p>
            Created by{" "}
            <Link
              href="https://github.com/preetsuthar17"
              onClick={playClickSound}
              target="_blank"
            >
              Preet Suthar
            </Link>{" "}
            with ❤️
          </p>
          <p>
            Built with{" "}
            <Link
              href="https://nextjs.org/"
              onClick={playClickSound}
              target="_blank"
            >
              Next.js
            </Link>
          </p>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <Link
                href="https://github.com/preetsuthar17"
                onClick={playClickSound}
                target="_blank"
              >
                Github
              </Link>
            </li>
            <li>
              <Link
                href="mailto:preetsutharxd@gmail.com"
                onClick={playClickSound}
                target="_blank"
              >
                Email
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/preet-suthar-41b460243/"
                onClick={playClickSound}
                target="_blank"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="https://discord.gg/XeQ95WzGq9"
                onClick={playClickSound}
                target="_blank"
              >
                Discord
              </Link>
            </li>

            <li>
              <Link href="/rss.xml" onClick={playClickSound} target="_blank">
                RSS
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </motion.div>
  );
};

export default Footer;
