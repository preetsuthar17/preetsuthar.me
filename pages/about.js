import { useState, useEffect, useCallback } from "react";
import Head from "next/head";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import vscode from "../src/utils/icons/brands/vs-code.svg";
import chrome from "../src/utils/icons/brands/chrome.svg";
import brave from "../src/utils/icons/brands/brave.svg";
import github from "../src/utils/icons/brands/github.svg";
import nextjs from "../src/utils/icons/brands/nextjs.svg";
import firefox from "../src/utils/icons/brands/firefox.svg";
import vercel from "../src/utils/icons/brands/vercel.svg";
import git from "../src/utils/icons/brands/git.svg";
import sass from "../src/utils/icons/brands/sass.svg";
import html from "../src/utils/icons/techs/html.svg";
import css from "../src/utils/icons/techs/css.svg";
import javascript from "../src/utils/icons/techs/javascript.svg";
import python from "../src/utils/icons/techs/python.svg";
import react from "../src/utils/icons/techs/react.svg";
import mysql from "../src/utils/icons/techs/mysql.svg";

import preetSutharImage from "../src/utils/images/preetsuthar.png";

import CustomTooltip from "@/src/components/CustomTooltip";

import { motion } from "framer-motion";

const Navbar = dynamic(() => import("@/src/components/navbar"));
const Footer = dynamic(() => import("@/src/components/footer"));

function AutomaticAge({ birthdate }) {
  const calculateAge = useCallback(() => {
    const birthDate = new Date(birthdate);
    const currentDate = new Date();
    const age = Math.floor(
      (currentDate - birthDate) / (365.25 * 24 * 60 * 60 * 1000)
    );
    return age;
  }, [birthdate]);

  const [age, setAge] = useState(calculateAge());

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(calculateAge());
    }, 24 * 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, [calculateAge]);

  return <span> {age} </span>;
}

const Contact = () => {
  const birthdate = "2006-08-28";
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Head>
          <title>About | Preet Suthar 🚀</title>
          <meta name="robots" content="all" />

          <meta name="description" content="About page" />
          <meta name="theme-color" content="#1c9cfc" />
          <meta httpEquiv="content-language" content="en" />
          <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
          <meta property="og:title" content="About | Preet Suthar 🚀" />
          <meta property="og:description" content="About page" />
          <meta property="og:url" content="https://preetsuthar.me/about" />
          <meta property="og:type" content="website" />
          <meta
            name="keywords"
            content="Preet Suthar, front-end development, Portfolio, Blog, web development, preet, front end development, front-end developemtn"
          />
          <meta name="author" content="Preet Suthar" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="twitter:title" content="About | Preet Suthar 🚀" />
          <meta name="twitter:description" content="About page" />
          <meta name="subject" content="web development" />
        </Head>
        <Navbar />
        <div>
          <>
            <div className="about-div">
              <div className="about-header">
                <h1>&#47;about</h1>
                <p>Uh.. Um.. About me maybe, lol</p>
              </div>
              <div className="styled-hr"></div>
              <div className="about-wrapper">
                <div className="about-image">
                  <Image
                    className="about-PreetProfileImage"
                    src={preetSutharImage}
                    width={240}
                    height={240}
                    alt="Preet Suthar"
                    loading="lazy"
                    placeholder="blur"
                  />

                  <p style={{ margin: "1rem", padding: "2rem " }}>
                    <Link href="mailto:preetsuthar.me" className="primary-btn">
                      Hire me!
                    </Link>
                  </p>
                </div>
                <motion.div
                  initial={{ opacity: 0, translateY: -50 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  exit={{ opacity: 0, translateY: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className="about-container">
                    <div className="about-text-img">
                      <div className="about-text">
                        <p>
                          Hello! I&apos;m Preet Suthar , a self-taught web
                          developer in india with more than two years of
                          experience. I&apos;m{" "}
                          <AutomaticAge birthdate={birthdate} /> years old and I
                          started this web development journey back in 2020, a
                          clumsy kid creating webpages and all with HTML.
                        </p>
                        <p>
                          Currently at the age of{" "}
                          <AutomaticAge birthdate={birthdate} />I am very much
                          passionate about Web development. I am constantly
                          learning and trying to keep up with new technologies
                          about front-end developement. Not to mention I am also
                          learning full-stack development This website is just
                          Front-End or maybe Back-End because I have used
                          database implementation in reviews section.
                        </p>

                        <p style={{ fontSize: "0.9rem" }}>
                          &#91; This website was part of Portfolio Fest 2023
                          By&nbsp;
                          <Link
                            style={{
                              color: "#bbb",
                            }}
                            target="_blank"
                            href="https://www.youtube.com/@tanishgargcodes"
                          >
                            Tanish Garg{" "}
                          </Link>
                          &#93;{" "}
                        </p>

                        <p style={{ paddingTop: "1rem" }}>
                          I&apos;m also a freelancer,&nbsp;
                          <Link
                            href="#my-skills-about"
                            style={{
                              color: "#bbb",
                            }}
                          >
                            Skills
                          </Link>
                        </p>

                        <div
                          className="sub-heading"
                          style={{
                            fontSize: "1.7rem",
                            marginTop: "1rem",
                          }}
                        >
                          #links
                        </div>
                        <div className="about-contact-links">
                          <ul
                            style={{
                              marginTop: "1rem",
                            }}
                          >
                            <Link
                              className="link-color no-decoration"
                              href="https://github.com/preetsuthar17"
                              target="_blank"
                            >
                              <li> GitHub</li>
                            </Link>
                            <Link
                              className="link-color no-decoration"
                              href="mailto:preetsutharxd@gmail.com"
                              target="_blank"
                            >
                              <li>Email</li>
                            </Link>
                            <Link
                              className="link-color no-decoration"
                              href="https://discord.gg/XeQ95WzGq9"
                              target="_blank"
                            >
                              <li>Discord Server</li>
                            </Link>
                            <Link
                              className="link-color no-decoration"
                              href="https://twitter.com/preetsuthar17"
                              target="_blank"
                            >
                              <li>Twitter</li>
                            </Link>
                            <Link
                              className="link-color no-decoration"
                              href="https://instagram.com/nottpreet28"
                              target="_blank"
                            >
                              <li>Instagram</li>
                            </Link>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 1,
                }}
              >
                <div className="about-my-tools" id="my-skills-about">
                  <p className="p-color sub-heading">#technologies</p>
                  <div className="about-my-tools-icons">
                    <CustomTooltip
                      text="NextJs"
                      description="One of the best React Framework."
                    >
                      <Image
                        loading="lazy"
                        className="about-my-tools-icon"
                        alt="nextjs"
                        width={55}
                        height={55}
                        src={nextjs}
                      />
                    </CustomTooltip>
                    <CustomTooltip
                      text="Python"
                      description="For advance scripting."
                    >
                      <Image
                        loading="lazy"
                        className="about-my-tools-icon"
                        alt="Python"
                        width={55}
                        height={55}
                        src={python}
                      />
                    </CustomTooltip>
                    <CustomTooltip text="HTML" description="Creating websites.">
                      <Image
                        loading="lazy"
                        className="about-my-tools-icon"
                        alt="HTML"
                        width={55}
                        height={55}
                        src={html}
                      />
                    </CustomTooltip>
                    <CustomTooltip text="CSS" description="Styling websites.">
                      <Image
                        loading="lazy"
                        className="about-my-tools-icon"
                        alt="CSS"
                        width={55}
                        height={55}
                        src={css}
                      />
                    </CustomTooltip>
                    <CustomTooltip
                      text="SASS"
                      description="Because it's SASS :)"
                    >
                      <Image
                        loading="lazy"
                        className="about-my-tools-icon"
                        alt="SASS"
                        width={55}
                        height={55}
                        src={sass}
                      />
                    </CustomTooltip>{" "}
                    <CustomTooltip
                      text="Javascript"
                      description="Making things functional."
                    >
                      <Image
                        loading="lazy"
                        className="about-my-tools-icon"
                        alt="Javascript"
                        width={55}
                        height={55}
                        src={javascript}
                      />
                    </CustomTooltip>
                    <CustomTooltip
                      text="React"
                      description="Because React, duh!"
                    >
                      <Image
                        loading="lazy"
                        className="about-my-tools-icon"
                        alt="React"
                        width={55}
                        height={55}
                        src={react}
                      />
                    </CustomTooltip>
                    <CustomTooltip
                      text="MySQL"
                      description="Database management."
                    >
                      <Image
                        loading="lazy"
                        className="about-my-tools-icon"
                        alt="MySQL"
                        width={55}
                        height={55}
                        src={mysql}
                      />
                    </CustomTooltip>
                    <CustomTooltip
                      text="VS code"
                      description="My favourite code editor."
                    >
                      <Image
                        loading="lazy"
                        className="about-my-tools-icon"
                        alt="vscode"
                        width={55}
                        height={55}
                        src={vscode}
                      />
                    </CustomTooltip>
                    <CustomTooltip
                      text="Brave"
                      description="Debugging security."
                    >
                      <Image
                        loading="lazy"
                        className="about-my-tools-icon"
                        alt="brave"
                        width={55}
                        height={55}
                        src={brave}
                      />
                    </CustomTooltip>
                    <CustomTooltip text="Firefox" description="Debugging CSS.">
                      <Image
                        loading="lazy"
                        className="about-my-tools-icon"
                        alt="firefox"
                        width={55}
                        height={55}
                        src={firefox}
                      />
                    </CustomTooltip>
                    <CustomTooltip
                      text="Chrome"
                      description="Debugging Javascript."
                    >
                      <Image
                        loading="lazy"
                        className="about-my-tools-icon"
                        alt="chrome"
                        width={55}
                        height={55}
                        src={chrome}
                      />
                    </CustomTooltip>
                    <CustomTooltip
                      text="Github"
                      description="For publishing projects."
                    >
                      <Image
                        loading="lazy"
                        className="about-my-tools-icon"
                        alt="github"
                        width={55}
                        height={55}
                        src={github}
                      />
                    </CustomTooltip>
                    <CustomTooltip
                      text="Vercel"
                      description="For hosting my projects."
                    >
                      <Image
                        loading="lazy"
                        className="about-my-tools-icon"
                        alt="vercel"
                        width={55}
                        height={55}
                        src={vercel}
                      />
                    </CustomTooltip>
                    <CustomTooltip
                      text="Git"
                      description="For Open-Source management."
                    >
                      <Image
                        loading="lazy"
                        className="about-my-tools-icon"
                        alt="git"
                        width={55}
                        height={55}
                        src={git}
                      />
                    </CustomTooltip>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <section id="cd-timeline" class="cd-container">
                <div class="cd-timeline-block">
                  <div class="cd-timeline-img cd-picture"></div>

                  <div class="cd-timeline-content">
                    <h2>Preet Suthar ⭐</h2>
                    <div class="timeline-content-info">
                      <span class="timeline-content-info-title">
                        <i class="fa fa-certificate" aria-hidden="true"></i>
                        Front-End Developer
                      </span>
                    </div>
                    <p>
                      Dates in this timeline might not be the most accurate, but
                      yeah, all the dates in this are somewhere around the
                      actual dates.
                    </p>
                    <ul class="content-skills">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>Next.js</li>
                      <li>React.js</li>
                    </ul>
                  </div>
                </div>

                <div class="cd-timeline-block">
                  <div class="cd-timeline-img cd-movie"></div>

                  <div class="cd-timeline-content">
                    <h2>Gave my first lecture 🎓</h2>
                    <p>
                      I gave first lecture in college which went fantastic. The
                      lecture was about database and relation database
                      management system using MySQL.
                    </p>
                    <span class="cd-date">Sep 4, 2023</span>
                  </div>
                </div>
                <div class="cd-timeline-block">
                  <div class="cd-timeline-img cd-movie"></div>

                  <div class="cd-timeline-content">
                    <h2>My first online competition 💻</h2>
                    <p>
                      I participated in the first online competition called
                      Portfolio Fest 2023, organized by Tanish Garg. The vision
                      was to learn, not necessarily to win. I actually learned
                      about back-end development by participating in this
                      competition and worked with back-end using Supabase and
                      Next.js.
                    </p>
                    <span class="cd-date">Aug 31, 2023</span>
                  </div>
                </div>

                <div class="cd-timeline-block">
                  <div class="cd-timeline-img cd-movie"></div>

                  <div class="cd-timeline-content">
                    <h2>
                      my decision of switching framework, was it right? 🤔
                    </h2>
                    <p>
                      Coming right to the point switching to Next js was one of
                      the best decision I took. I learned so many new things
                      when I switched frameworks and everything.
                    </p>
                    <span class="cd-date">Aug 7 , 2023</span>
                  </div>
                </div>

                <div class="cd-timeline-block">
                  <div class="cd-timeline-img cd-movie"></div>

                  <div class="cd-timeline-content">
                    <h2>Next Js ⚡</h2>
                    <p>
                      When I was learning Gatsby Js I heard about Next Js 13
                      which was pretty fast compared to Gatsby Js. That's when I
                      researched more about Next js and I found that pretty
                      interesting so soon after finishing Gatsby Js I switched
                      Next js [yeah, don't judge me].
                    </p>
                    <span class="cd-date">Feb 7 , 2023</span>
                  </div>
                </div>

                <div class="cd-timeline-block">
                  <div class="cd-timeline-img cd-movie"></div>

                  <div class="cd-timeline-content">
                    <h2>Gatsby Js 👻</h2>
                    <p>
                      I learned about react frameworks and I also found Gatsby
                      js to get started. so tried to make websites and templates
                      using Gatsby Js.
                    </p>
                    <span class="cd-date">Dec 7 , 2022</span>
                  </div>
                </div>

                <div class="cd-timeline-block">
                  <div class="cd-timeline-img cd-picture"></div>

                  <div class="cd-timeline-content">
                    <h2>React Js ⚛️</h2>
                    <p>
                      I pretty much mastered HTML, CSS and Javascript. Later I
                      heard about React Js so I started to learn more about
                      that. I was still learning Front-End only because I knew
                      nothing about Back-end systems.
                    </p>
                    <span class="cd-date">May 9, 2021</span>
                  </div>
                </div>

                <div class="cd-timeline-block">
                  <div class="cd-timeline-img cd-location"></div>

                  <div class="cd-timeline-content">
                    <h2>Magic 🪄</h2>
                    <p>
                      Fast-forward to 2021, I was still creating websites using
                      only HTML and CSS. But then I heard about Javascript. So I
                      started to do more research about that.
                    </p>
                    <span class="cd-date">Feb 14, 2021</span>
                  </div>
                </div>

                <div class="cd-timeline-block">
                  <div class="cd-timeline-img cd-location"></div>

                  <div class="cd-timeline-content">
                    <h2>It's so cool! 🤩</h2>
                    <p>
                      I found web development pretty cool and awesome. I was
                      having fun creating websites and all so I continued my
                      journey by learning HTML and CSS.
                    </p>
                    <span class="cd-date">Sep 1, 2020</span>
                  </div>
                </div>

                <div class="cd-timeline-block">
                  <div class="cd-timeline-img cd-movie"></div>

                  <div class="cd-timeline-content">
                    <h2>Beginning 🐢</h2>

                    <p>
                      Created my first website using HTML. It was pretty bad lol
                      I found this image from my old computer system's
                      hard-drive.
                    </p>
                    <span class="cd-date">Aug 21, 2020</span>
                  </div>
                </div>
              </section>
            </motion.div>
          </>
        </div>
        <Footer />
      </motion.div>
    </>
  );
};
export default Contact;
