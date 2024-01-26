import Link from "next/link";
import Image from "next/image";

import github from "../utils/icons/github.svg";
import email from "../utils/icons/email.svg";
import discord from "../utils/icons/discord.svg";
import twitter from "../utils/icons/twitter.svg";
import rss from "../utils/icons/rss_logo.svg";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <footer className="footer-div">
        <div className="footer-text">
          <p>
            Created by{" "}
            <Link href="https://github.com/preetsuthar17" target="_blank">
              Preet Suthar
            </Link>{" "}
            with ❤️
          </p>
          <p>
            Built with{" "}
            <Link href="https://nextjs.org/" target="_blank">
              Next.js
            </Link>
          </p>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <Link href="https://github.com/preetsuthar17" target="_blank">
                Github
              </Link>
            </li>
            <li>
              <Link href="mailto:preetsutharxd@gmail.com" target="_blank">
                Email
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/preet-suthar-41b460243/"
                target="_blank"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link href="https://discord.gg/XeQ95WzGq9" target="_blank">
                Discord
              </Link>
            </li>

            <li>
              <Link href="/rss.xml" target="_blank">
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
