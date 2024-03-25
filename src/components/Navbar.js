import website_logo from "../../public/website_logo.svg";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

import SmoothScrollLink from "./other/SmoothLinkScroll";

import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [dropdown, toggleDropdown] = useState(true);
  const [time, setTime] = useState("");
  const dropdownRef = useRef(null);

  const handleToggleDropdown = () => {
    toggleDropdown(!dropdown);
  };

  useEffect(() => {
    const dropdownElement = dropdownRef?.current;
    if (dropdownElement) {
      gsap.to(dropdownElement, {
        height: dropdown ? "0px" : "35  2px",
        filter: `blur(${dropdown ? "10px" : "0"})`,
        duration: 0.1,
        ease: "expo",
      });
    }
  }, [dropdown]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const options = { hour: "2-digit", minute: "2-digit" };
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        ...options,
      });
      setTime(formatter.format(date));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <nav className="navbar">
        <Link href="/" className="navbar_icon section-1">
          <Image src={website_logo} width={45} height={45} alt="Preet Suthar" />
        </Link>
        <section className="section-2">
          <div className="navbar_links">
            <ul>
              <li>
                <motion.button onClick={handleToggleDropdown}>
                  <AnimatePresence mode="wait">
                    {dropdown ? (
                      <motion.span
                        key="menu"
                        transition={{ duration: 0.8 }}
                        initial={{ filter: "blur(4px)" }}
                        animate={{ filter: "blur(0px)" }}
                        exit={{ filter: "blur(0px)" }}
                      >
                        Menu
                      </motion.span>
                    ) : (
                      <motion.span
                        key="close"
                        transition={{ duration: 0.8 }}
                        initial={{ filter: "blur(4px)" }}
                        animate={{ filter: "blur(0px)" }}
                        exit={{ filter: "blur(0px)" }}
                      >
                        Close
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </li>
              <li>
                <SmoothScrollLink
                  href="#contact"
                  className="custom-button-black"
                  dataLink="Let's talk"
                >
                  Let's talk
                </SmoothScrollLink>
              </li>
            </ul>
          </div>
        </section>
      </nav>
      <div className="dropdown-menu" ref={dropdownRef}>
        <div className="dropdown-links">
          <ul>
            <li>
              <SmoothScrollLink
                dataLink="Home"
                className="transforming-link"
                href="/"
              >
                Home
              </SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink
                dataLink="About"
                className="transforming-link"
                href="#about"
              >
                About
              </SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink
                dataLink="Works"
                className="transforming-link"
                href="#projects"
              >
                Works
              </SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink
                dataLink="Services"
                className="transforming-link"
                href="#services"
              >
                Services
              </SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink
                dataLink="Contact"
                className="transforming-link"
                href="#contact"
              >
                Contact
              </SmoothScrollLink>
            </li>
          </ul>
        </div>
        <div className="dropdown-extra">
          <div className="section-1">
            <div>
              <small>LOCATION</small>
              <p>Gujarat, India</p>
            </div>
            <div>
              <small>TIME</small>
              <p>{time}</p>
            </div>
          </div>
          <div className="section-2">
            <ul>
              <li>
                <Link target="_blank" href="https://twitter.com/preetsuthar17">
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://linkedin.com/in/preetsuthar17"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link target="_blank" href="https://dsc.gg/preet">
                  Discord
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
