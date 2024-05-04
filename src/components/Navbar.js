import Image from "next/legacy/image";
import Link from "next/link";
import logo from "../../public/portfolio-logo.svg";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MenuBar = ({ isOpen, ref }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          ref={ref}
          initial={{ scaleY: 0, translateY: "-150px" }}
          animate={{ scaleY: 1, translateY: 0 }}
          exit={{ scaleY: 0, translateY: "-150px" }}
          transition={{ duration: 0.3, ease: "circInOut" }}
          className="absolute top-[7rem] right-[1rem] bg-black p-8 text-white rounded-2xl z-[1]"
        >
          <ul className="flex flex-col gap-4">
            <li className="transforming-link">
              <Link
                data-link="Projects"
                href="#projects"
                className="text-[1.5rem] font-[700]  tracking-tight animated-underline"
              >
                Projects
              </Link>
            </li>
            <li className="transforming-link">
              <Link
                data-link="Services"
                href="#services"
                className="text-[1.5rem] font-[700]  tracking-tight animated-underline"
              >
                Services
              </Link>
            </li>
            <li className="transforming-link">
              <Link
                data-link="About"
                href="#about"
                className="text-[1.5rem] font-[700]  tracking-tight animated-underline"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-[1.3rem] font-[700]  tracking-tight  flex gap-1 items-center px-[15px] py-[10px] bg-white text-black rounded-xl hover:brightness-95 transition-all"
              >
                Let's Talk{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6z"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export const Navbar = () => {
  const [menuBar, setMenuBar] = useState(false);
  const menuBarRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const navbarRef = useRef(null);

  const toggleMenuBar = () => {
    setMenuBar(!menuBar);
  };

  useEffect(() => {
    gsap.to(navbarRef.current, {
      width: "90%",
      marginTop: "1rem",
      borderRadius: "10rem",
      padding: "1rem 2rem",

      scrollTrigger: {
        scrub: 0.9,
        trigger: ".hero",
        start: "bottom 70%",
        onUpdate: (self) => {
          if (self?.progress > 0) {
            navbarRef?.current?.classList.add("navbar-shadow");
          } else {
            navbarRef?.current?.classList.remove("navbar-shadow");
          }
        },
      },
    });
    const handleClickOutside = (event) => {
      if (
        menuBarRef.current &&
        !menuBarRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setMenuBar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <nav
        ref={navbarRef}
        className="flex fixed w-full items-center justify-between px-10 py-7  mx-auto left-[50%] translate-x-[-50%] bg-white z-[999]"
      >
        <div className="flex items-center">
          <Image
            src={logo}
            width={35}
            height={35}
            alt="Preet Suthar"
            priority={true}
            className="rounded object-fit"
          />
        </div>
        <div className="flex items-center gap-[3rem] max-[580px]:gap-5">
          <ul className="flex gap-[3rem] max-[663px]:hidden">
            <li className="transforming-link max-[550px]:hidden">
              <Link
                data-link="Projects"
                href="#projects"
                className="text-[14px] font-[500] opacity-80 hover:opacity-100 tracking-tight"
              >
                Projects
              </Link>
            </li>
            <li className="transforming-link max-[450px]:hidden">
              <Link
                data-link="Services"
                href="#services"
                className="text-[14px] font-[500] opacity-80 hover:opacity-100 tracking-tight"
              >
                Services
              </Link>
            </li>
            <li className="transforming-link max-[350px]:hidden">
              <Link
                href="#about"
                data-link="About"
                className="text-[14px] font-[500] opacity-80 hover:opacity-100 tracking-tight"
              >
                About
              </Link>
            </li>
          </ul>
          <div
            className="cursor-pointer max-[663px]:flex hidden items-center justify-center"
            onClick={toggleMenuBar}
            ref={toggleButtonRef}
          >
            {menuBar ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
                />
              </svg>
            ) : (
              <svg
                className="opacity-80"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M14 5H2V3h12zm0 4H2V7h12zM2 13h12v-2H2z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            <div ref={menuBarRef}>
              <MenuBar isOpen={menuBar}></MenuBar>
            </div>
          </div>
          <div className="max-[663px]:hidden">
            <Link href="#contact" className="primary-button">
              Let's Work Together{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
