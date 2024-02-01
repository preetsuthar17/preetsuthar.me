import vscode from "@/src/utils/icons/brands/vs-code.svg";
import chrome from "@/src/utils/icons/brands/chrome.svg";
import brave from "@/src/utils/icons/brands/brave.svg";
import github from "@/src/utils/icons/brands/github.svg";
import nextjs from "@/src/utils/icons/brands/nextjs.svg";
import firefox from "@/src/utils/icons/brands/firefox.svg";
import vercel from "@/src/utils/icons/brands/vercel.svg";
import git from "@/src/utils/icons/brands/git.svg";
import sass from "@/src/utils/icons/brands/sass.svg";
import html from "@/src/utils/icons/techs/html.svg";
import css from "@/src/utils/icons/techs/css.svg";
import javascript from "@/src/utils/icons/techs/javascript.svg";
import python from "@/src/utils/icons/techs/python.svg";
import react from "@/src/utils/icons/techs/react.svg";
import mysql from "@/src/utils/icons/techs/mysql.svg";
import gsap_logo from "@/src/utils/icons/techs/gsap.svg";
import LinkedIn from "@/src/utils/icons/LinkedIn.svg";
import github_logo from "@/src/utils/icons/github.svg";
import email from "@/src/utils/icons/email.svg";
import twitter from "@/src/utils/icons/twitter.svg";
import discord from "@/src/utils/icons/discord.svg";

import Image from "next/image";
import CustomTooltip from "@/src/components/CustomTooltip";
import CustomTooltip2 from "@/src/components/CustomTooltip2";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const SkillsIcons = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <div className="aboutToolsFloating-container">
      {Array.from({ length: 1 }, (_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1,
          }}
        >
          <div className="about-my-tools" id="my-skills-about">
            <p
              className="p-color sub-heading"
              style={{
                fontWeight: "800",
              }}
            >
              Technologies
            </p>
            <div className="about-my-tools-icons">
              <CustomTooltip
                text="NextJs"
                description="One of the best React Framework."
              >
                <motion.div
                  ref={ref}
                  variants={variants}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  className="about-my-tools-icon"
                >
                  <Image
                    loading="lazy"
                    className="about-my-tools-icon"
                    alt="nextjs"
                    width={55}
                    height={55}
                    src={nextjs}
                  />
                </motion.div>
              </CustomTooltip>
              <CustomTooltip
                text="Python"
                description="For advanced scripting."
              >
                <motion.div
                  ref={ref}
                  variants={variants}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  className="about-my-tools-icon"
                >
                  <Image
                    loading="lazy"
                    className="about-my-tools-icon"
                    alt="Python"
                    width={55}
                    height={55}
                    src={python}
                  />
                </motion.div>
              </CustomTooltip>
              <CustomTooltip text="HTML" description="Creating websites.">
                <motion.div
                  ref={ref}
                  variants={variants}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  className="about-my-tools-icon"
                >
                  <Image
                    loading="lazy"
                    className="about-my-tools-icon"
                    alt="HTML"
                    width={55}
                    height={55}
                    src={html}
                  />
                </motion.div>
              </CustomTooltip>
              <CustomTooltip text="CSS" description="Styling websites.">
                <motion.div
                  ref={ref}
                  variants={variants}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  className="about-my-tools-icon"
                >
                  <Image
                    loading="lazy"
                    className="about-my-tools-icon"
                    alt="CSS"
                    width={55}
                    height={55}
                    src={css}
                  />
                </motion.div>
              </CustomTooltip>
              <CustomTooltip text="SASS" description="Because it's SASS :)">
                <motion.div
                  ref={ref}
                  variants={variants}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  className="about-my-tools-icon"
                >
                  <Image
                    loading="lazy"
                    className="about-my-tools-icon"
                    alt="SASS"
                    width={55}
                    height={55}
                    src={sass}
                  />
                </motion.div>
              </CustomTooltip>{" "}
              <CustomTooltip
                text="Javascript"
                description="Making things functional."
              >
                <motion.div
                  ref={ref}
                  variants={variants}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  className="about-my-tools-icon"
                >
                  <Image
                    loading="lazy"
                    className="about-my-tools-icon"
                    alt="Javascript"
                    width={55}
                    height={55}
                    src={javascript}
                  />
                </motion.div>
              </CustomTooltip>
              <CustomTooltip text="React" description="Because React, duh!">
                <motion.div
                  ref={ref}
                  variants={variants}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  className="about-my-tools-icon"
                >
                  <Image
                    loading="lazy"
                    className="about-my-tools-icon"
                    alt="React"
                    width={55}
                    height={55}
                    src={react}
                  />
                </motion.div>
              </CustomTooltip>
              <CustomTooltip text="MySQL" description="Database management.">
                <motion.div
                  ref={ref}
                  variants={variants}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  className="about-my-tools-icon"
                >
                  <Image
                    loading="lazy"
                    className="about-my-tools-icon"
                    alt="MySQL"
                    width={55}
                    height={55}
                    src={mysql}
                  />
                </motion.div>
              </CustomTooltip>
              <CustomTooltip
                text="VS code"
                description="My favorite code editor."
              >
                <motion.div
                  ref={ref}
                  variants={variants}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  className="about-my-tools-icon"
                >
                  <Image
                    loading="lazy"
                    className="about-my-tools-icon"
                    alt="vscode"
                    width={55}
                    height={55}
                    src={vscode}
                  />
                </motion.div>
              </CustomTooltip>
              <CustomTooltip text="Brave" description="Debugging security.">
                <motion.div
                  ref={ref}
                  variants={variants}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  className="about-my-tools-icon"
                >
                  <Image
                    loading="lazy"
                    className="about-my-tools-icon"
                    alt="brave"
                    width={55}
                    height={55}
                    src={brave}
                  />
                </motion.div>
              </CustomTooltip>
              <CustomTooltip text="Firefox" description="Debugging CSS.">
                <motion.div
                  ref={ref}
                  variants={variants}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  className="about-my-tools-icon"
                >
                  <Image
                    loading="lazy"
                    className="about-my-tools-icon"
                    alt="firefox"
                    width={55}
                    height={55}
                    src={firefox}
                  />
                </motion.div>
              </CustomTooltip>
              <CustomTooltip text="Chrome" description="Debugging Javascript.">
                <motion.div
                  ref={ref}
                  variants={variants}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  className="about-my-tools-icon"
                >
                  <Image
                    loading="lazy"
                    className="about-my-tools-icon"
                    alt="chrome"
                    width={55}
                    height={55}
                    src={chrome}
                  />
                </motion.div>
              </CustomTooltip>
              <CustomTooltip
                text="Github"
                description="For publishing projects."
              >
                <motion.div
                  ref={ref}
                  variants={variants}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  className="about-my-tools-icon"
                >
                  <Image
                    loading="lazy"
                    className="about-my-tools-icon"
                    alt="github"
                    width={55}
                    height={55}
                    src={github}
                  />
                </motion.div>
              </CustomTooltip>
              <CustomTooltip
                text="Vercel"
                description="For hosting my projects."
              >
                <motion.div
                  ref={ref}
                  variants={variants}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  className="about-my-tools-icon"
                >
                  <Image
                    loading="lazy"
                    className="about-my-tools-icon"
                    alt="vercel"
                    width={55}
                    height={55}
                    src={vercel}
                  />
                </motion.div>
              </CustomTooltip>
              <CustomTooltip
                text="Git"
                description=" For Open-Source management."
              >
                <motion.div
                  ref={ref}
                  variants={variants}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  className="about-my-tools-icon"
                >
                  <Image
                    loading="lazy"
                    className="about-my-tools-icon"
                    alt="git"
                    width={55}
                    height={55}
                    src={git}
                  />
                </motion.div>
              </CustomTooltip>
              <CustomTooltip
                text="GSAP"
                description="For animations in website."
              >
                <motion.div
                  ref={ref}
                  variants={variants}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  className="about-my-tools-icon"
                >
                  <Image
                    loading="lazy"
                    className="about-my-tools-icon"
                    alt="GSAP"
                    width={55}
                    height={55}
                    src={gsap_logo}
                  />
                </motion.div>
              </CustomTooltip>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsIcons;
