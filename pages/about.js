import { useState, useEffect, useCallback } from "react";
import Head from "next/head";

import Image from "next/image";
import Link from "next/link";

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

import Navbar from "@/src/components/navbar";
import Footer from "@/src/components/footer";
import CustomTooltip from "@/src/components/CustomTooltip";

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
      <Head>
        <title>About | Preet Suthar 🚀</title>
        <meta name="robots" content="all" />

        <meta name="description" content="About page" />
        <meta name="theme-color" content="#1c9cfc" />
        <meta httpEquiv="content-language" content="en" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta property="og:title" content="About | Preet Suthar 🚀" />
        <meta property="og:description" content="Contact page" />
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
              <h2>&#47;about</h2>
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
              <div className="about-container">
                <div className="about-text-img">
                  <div className="about-text">
                    <p>
                      Hello! I&apos;m Preet Suthar , a self-taught web developer
                      in india with more than two years of experience. I&apos;m{" "}
                      <AutomaticAge birthdate={birthdate} /> years old and I
                      started this web development journey back in 2020, a
                      clumsy kid creating webpages and all with HTML.
                    </p>
                    <p>
                      Currently at the age of{" "}
                      <AutomaticAge birthdate={birthdate} />I am very much
                      passionate about Web development. I am constantly learning
                      and trying to keep up with new technologies about
                      front-end developement. Not to mention I am also learning
                      full-stack development This website is just Front-End or
                      maybe Back-End because I have used database implementation
                      in reviews section.
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
                    <ul
                      style={{
                        marginTop: "1rem",
                        marginLeft: "2rem",
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
                <CustomTooltip text="SASS" description="Because it's SASS :)">
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
                <CustomTooltip text="React" description="Because React, duh!">
                  <Image
                    loading="lazy"
                    className="about-my-tools-icon"
                    alt="React"
                    width={55}
                    height={55}
                    src={react}
                  />
                </CustomTooltip>
                <CustomTooltip text="MySQL" description="Database management.">
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
                <CustomTooltip text="Brave" description="Debugging security.">
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
                </CustomTooltip>{" "}
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
                </CustomTooltip>{" "}
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
                </CustomTooltip>{" "}
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
                </CustomTooltip>{" "}
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
                </CustomTooltip>{" "}
              </div>
            </div>
          </div>
        </>
      </div>
      <Footer />
    </>
  );
};
export default Contact;
