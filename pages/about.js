import { useEffect } from "react";
import Head from "next/head";
import GitHubCalendar from "react-github-calendar";
import React from "react";
import VanillaTilt from "vanilla-tilt";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

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
import gsap_logo from "../src/utils/icons/techs/gsap.svg";
import LinkedIn from "../src/utils/icons/LinkedIn.svg";
import github_logo from "../src/utils/icons/github.svg";
import email from "../src/utils/icons/email.svg";
import twitter from "../src/utils/icons/twitter.svg";
import discord from "../src/utils/icons/discord.svg";

import preetSutharImage from "../src/utils/images/preetsuthar.png";

import CustomTooltip from "@/src/components/CustomTooltip";
import CustomTooltip2 from "@/src/components/CustomTooltip2";

import { motion } from "framer-motion";

const Navbar = dynamic(() => import("@/src/components/navbar"));
const Footer = dynamic(() => import("@/src/components/footer"));

gsap.registerPlugin(ScrollTrigger);

import AutomaticAge from "@/src/utils/functions/AutomaticAge";

const About = () => {
  useEffect(() => {
    const tiltContainer = document.querySelectorAll(".about-PreetProfileImage");
    VanillaTilt.init(tiltContainer, {
      max: 15,
      speed: 200,
      scale: 1.01,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      transition: true,
      glare: true,
      "max-glare": 0.2,
    });
  }, []);
  useEffect(() => {
    const contentItems = document.querySelectorAll(".about-my-tools-icon");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contentItems,
        start: "top 65%",
        end: "bottom center",
        scrub: 1,
      },
    });

    contentItems.forEach((item, index) => {
      tl.fromTo(
        item,
        { opacity: 0, y: "-40px" },
        { opacity: 1, y: 0, duration: 1, ease: "power1.inOut" },
        index * 0.2
      );
    });
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".cd-timeline-block");
    elements.forEach((element, index) => {
      const direction = index % 2 === 0 ? -1 : 1;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          end: "bottom center",
          scrub: 1,
        },
      });

      tl.from(element, {
        opacity: 0,
        x: 100 * direction,
        duration: 1,
        ease: "Power1.out",
      });
    });
  }, []);

  useEffect(() => {
    const contentItems = document.querySelectorAll(".about-contact-link");
    const tl = gsap.timeline();

    tl.to({}, 1.6, {});

    contentItems.forEach((item, index) => {
      tl.fromTo(
        item,
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 0.2,
          delay: index * 0.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "center",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    });
  }, []);

  const current_year = new Date().getFullYear();

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
            content="Preet Suthar, front-end development, Portfolio, Blog, web development, preet, front end development, front-end developer"
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
                        className="primary-btn-main"
                      >
                        <span>
                          <em>Hire me</em>
                        </span>
                        <span>
                          <em>Hire me</em>
                        </span>
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
                          Hello! I'm Preet Suthar, a self-taught web developer
                          in India with more than two years of experience. I'm{" "}
                          <AutomaticAge birthdate={birthdate} />
                          years old and I am very passionate about front-end
                          development.
                        </p>
                        <p>
                          My expertise lies in creating beautiful websites with
                          a very appealing design. I can help you create a
                          website with the most appealing design.
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
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="about-github-contribution-chart">
                <Link
                  style={{
                    textAlign: "center",
                    fontSize: "0.8rem",
                    width: "fit-content",
                    textAlign: "center",
                  }}
                  href="https://github.com/preetsuthar17"
                  className="no-decoration p-color"
                  target="_blank"
                >
                  <p>@preetsuthar17 on GitHub - {current_year}</p>
                </Link>
                <div className="about-github-contribution">
                  <div
                    className="contribute-div"
                    style={{
                      marginTop: "1rem",
                    }}
                  >
                    <GitHubCalendar
                      colorScheme="dark"
                      style={{ marginBottom: "0.6rem" }}
                      username="preetsuthar17"
                    />
                  </div>
                </div>
                <p
                  style={{
                    fontSize: "0.8rem",
                    marginTop: "0.2rem",
                    fontStyle: "italic",
                  }}
                  className="p-color"
                >
                  Scroll horizontally{" "}
                  <span style={{ fontStyle: "normal" }}>❯</span>
                </p>
              </div>
            </div>
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
                        description="For advanced scripting."
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
                      <CustomTooltip
                        text="HTML"
                        description="Creating websites."
                      >
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
                        description="My favorite code editor."
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
                      <CustomTooltip
                        text="Firefox"
                        description="Debugging CSS."
                      >
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
                        description=" For Open-Source management."
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
                      <CustomTooltip
                        text="GSAP"
                        description="For animations in website."
                      >
                        <Image
                          loading="lazy"
                          className="about-my-tools-icon"
                          alt="GSAP"
                          width={55}
                          height={55}
                          src={gsap_logo}
                        />
                      </CustomTooltip>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="floating-container">
              {Array.from({ length: 1 }, (_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                >
                  <section id="cd-timeline" className="cd-container">
                    {/* <div className="cd-timeline-block">
                      <div className="cd-timeline-img cd-picture"></div>

                      <div className="cd-timeline-content">
                        <h2>Currently</h2>

                        <p>
                          Dates in this timeline might not be the most accurate,
                          But yeah, all the dates in this are somewhere around
                          the actual dates.
                        </p>
                        <ul className="content-skills">
                          <li>HTML</li>
                          <li>CSS</li>
                          <li>JavaScript</li>
                          <li>Next.js</li>
                          <li>React.js</li>
                        </ul>
                      </div>
                    </div> */}

                    <div className="cd-timeline-block">
                      <div className="cd-timeline-img cd-movie"></div>

                      <div className="cd-timeline-content">
                        <h2>Working at Assistify Labs</h2>
                        <p>
                          As per current moment I'm working at Assistify Labs as
                          Front-End developer and also pursuing my studies.
                        </p>
                        <div
                          style={{
                            margin: "1em",
                          }}
                          className="chip_component"
                        >
                          <CustomTooltip2 text="more information">
                            <div className="chip_content">
                              <Link
                                href="https://www.youtube.com/watch?v=itHctPXzwnM"
                                target="_blank"
                              >
                                Assistify AI beta release
                              </Link>
                            </div>
                          </CustomTooltip2>
                        </div>
                        <span className="cd-date">Present</span>
                      </div>
                    </div>
                    <div className="cd-timeline-block">
                      <div className="cd-timeline-img cd-movie"></div>

                      <div className="cd-timeline-content">
                        <h2>Gave lecture about DB @ECT</h2>
                        <p>
                          I gave my first lecture in college which went
                          fantastic. The lecture was about database systems and
                          relation database management system using MySQL.
                        </p>
                        <span className="cd-date">Sep 4, 2023</span>
                      </div>
                    </div>

                    <div className="cd-timeline-block">
                      <div className="cd-timeline-img cd-movie"></div>

                      <div className="cd-timeline-content">
                        <h2>Learned React & Its Frameworks</h2>
                        <p>
                          I learned React Js and also almost finished Gatsby Js.
                          Later I heard that Next Js is lighting fast for SSR
                          websites. I started to research about it and found
                          Interesting to I started to learn Next Js via YouTube.
                        </p>
                        <span className="cd-date">Feb 7, 2023</span>
                      </div>
                    </div>

                    {/* <div className="cd-timeline-block">
                      <div className="cd-timeline-img cd-picture"></div>

                      <div className="cd-timeline-content">
                        <h2>React Js ⚛️</h2>
                        <p>
                          I had pretty much mastered HTML, CSS, and Javascript.
                          Later I heard about React Js so I started to learn
                          more about that. I was still learning Front-End only
                          because I knew nothing about Back-end systems.
                        </p>
                        <span className="cd-date">May 9, 2021</span>
                      </div>
                    </div> */}

                    <div className="cd-timeline-block">
                      <div className="cd-timeline-img cd-location"></div>

                      <div className="cd-timeline-content">
                        <h2>Learning @ home</h2>
                        <p>
                          Fast-forward to 2021, Pretty much mastered HTML & CSS.
                          Then I heard about JavaScript. Started to Learn
                          JavaScript via YouTube
                        </p>
                        <span className="cd-date">Feb 14, 2021</span>
                      </div>
                    </div>

                    {/* <div className="cd-timeline-block">
                      <div className="cd-timeline-img cd-location"></div>

                      <div className="cd-timeline-content">
                        <h2>It's so cool! 🤩</h2>
                        <p>
                          I found web development pretty cool and awesome. I was
                          having fun creating websites and all so I continued my
                          journey by learning HTML and CSS.
                        </p>
                        <span className="cd-date">Sep 1, 2020</span>
                      </div>
                    </div> */}

                    <div className="cd-timeline-block">
                      <div className="cd-timeline-img cd-movie"></div>

                      <div className="cd-timeline-content">
                        <h2>Learning @ JJIS</h2>

                        <p>
                          Wrote my first lines of HTML and CSS using Chrome!
                          Fell in love with web development. Started to learn
                          more about HTML & CSS.
                        </p>
                        <span className="cd-date">Aug 21, 2020</span>
                      </div>
                    </div>
                  </section>
                </motion.div>
              ))}
            </div>
          </>
        </div>
        <Footer />
      </motion.div>
    </>
  );
};
export default About;
