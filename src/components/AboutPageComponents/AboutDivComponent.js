import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import preetSutharImage from "@/src/utils/images/preetsuthar.png";
import { playClickSound } from "../../utils/functions/ClickAudioPlayer";
import AutomaticAge from "../../utils/functions/AutomaticAge";
import CustomTooltip2 from "../CustomTooltip2";

import LinkedIn from "@/src/utils/icons/LinkedIn.svg";
import github_logo from "@/src/utils/icons/github.svg";
import email from "@/src/utils/icons/email.svg";
import twitter from "@/src/utils/icons/twitter.svg";
import discord from "@/src/utils/icons/discord.svg";
import GithubActivityCalendar from "./GithubActivityCalendar";

const AboutDivComponent = () => {
  const birthdate = "2006-08-28";

  return (
    <div className="about-div">
      <motion.div
        initial={{ opacity: 1, translateX: -100 }}
        animate={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="about-header">
          <h1>&#47;about</h1>
          <p>Uh.. Um.. About me maybe, lol</p>
        </div>
      </motion.div>
      <div className="styled-hr"></div>
      <div className="about-wrapper">
        <motion.div
          initial={{ opacity: 0, translateX: -100 }}
          animate={{ opacity: 1, translateX: 0 }}
          exit={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="about-image">
            <Image
              className="about-PreetProfileImage"
              src={preetSutharImage}
              width={240}
              height={240}
              alt="Preet Suthar"
              loading="lazy"
              placeholder="blur"
              quality={100}
            />

            <p style={{ margin: "1rem", padding: "2rem " }}>
              <Link
                href="mailto:preetsutharxd@gmail.com"
                onClick={playClickSound}
                className="primary-btn-secondary"
              >
                Hire me
              </Link>
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 80 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="about-container">
            <div className="about-text-img">
              <div className="about-text">
                <p>
                  Hello! I'm Preet Suthar, a self-taught web developer in India
                  with more than two years of experience. I'm{" "}
                  <AutomaticAge birthdate={birthdate} />
                  years old and I am very passionate about front-end
                  development.
                </p>
                <p>
                  My expertise lies in creating beautiful websites with a very
                  appealing design. I can help you create a website with the
                  most appealing design.
                </p>

                <div className="about-contact-links">
                  <ul
                    style={{
                      marginTop: "1rem",
                    }}
                  >
                    <Link
                      className="link-color about-contact-link no-decoration"
                      href="https://github.com/preetsuthar17"
                      onClick={playClickSound}
                      target="_blank"
                      style={{
                        filter: "grayscale(100%)",
                      }}
                    >
                      <CustomTooltip2 text="GitHub">
                        <li>
                          <Image
                            src={github_logo}
                            width={30}
                            height={30}
                            alt="github"
                            loading="lazy"
                          />
                        </li>
                      </CustomTooltip2>
                    </Link>
                    <Link
                      className="link-color about-contact-link no-decoration"
                      href="mailto:preetsutharxd@gmail.com"
                      onClick={playClickSound}
                      target="_blank"
                      style={{
                        filter: "grayscale(100%)",
                      }}
                    >
                      <CustomTooltip2 text="Email">
                        <li>
                          <Image
                            src={email}
                            width={30}
                            height={30}
                            alt="email"
                            loading="lazy"
                          />
                        </li>
                      </CustomTooltip2>
                    </Link>
                    <Link
                      className="link-color about-contact-link no-decoration"
                      href="https://discord.gg/XeQ95WzGq9"
                      onClick={playClickSound}
                      target="_blank"
                      style={{
                        filter: "grayscale(100%)",
                      }}
                    >
                      <CustomTooltip2 text="Discord">
                        <li>
                          <Image
                            src={discord}
                            width={30}
                            height={30}
                            alt="discord"
                            loading="lazy"
                          />
                        </li>
                      </CustomTooltip2>
                    </Link>
                    <Link
                      className="link-color about-contact-link no-decoration"
                      href="https://twitter.com/preetsuthar17"
                      onClick={playClickSound}
                      target="_blank"
                      style={{
                        filter: "grayscale(100%)",
                      }}
                    >
                      <CustomTooltip2 text="X">
                        <li>
                          <Image
                            src={twitter}
                            width={30}
                            height={30}
                            alt="twitter"
                            loading="lazy"
                          />
                        </li>
                      </CustomTooltip2>
                    </Link>
                    <Link
                      className="link-color about-contact-link no-decoration"
                      href="https://www.linkedin.com/in/preet-suthar-41b460243/"
                      onClick={playClickSound}
                      target="_blank"
                    >
                      <CustomTooltip2 text="LinkedIn">
                        <li>
                          <Image
                            src={LinkedIn}
                            width={30}
                            height={30}
                            alt="LinkedIn"
                            loading="lazy"
                          />
                        </li>
                      </CustomTooltip2>
                    </Link>
                  </ul>
                </div>
                <div className="chip_component">
                  <CustomTooltip2 text="Learn programming">
                    <div className="chip_content">
                      <Link
                        href="https://dracodemy.tech"
                        onClick={playClickSound}
                        target="_blank"
                      >
                        Dracodemy
                      </Link>
                    </div>
                  </CustomTooltip2>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <GithubActivityCalendar />
    </div>
  );
};

export default AboutDivComponent;
