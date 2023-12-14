import Link from "next/link";
import Image from "next/image";

import navbarIcon from "../../public/favicon.ico";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import CustomTooltip from "./CustomTooltip";
import CustomTooltip2 from "./CustomTooltip2";

const Navbar = () => {
  return (
    <>
      <div className="navbar-div" id="topPage">
        <nav className="navbar">
          <div className="nav-header">
            <Link href="/">
              <Image
                src={navbarIcon}
                width={40}
                height={40}
                loading="lazy"
                alt="PreetSuthar"
                placeholder="blur"
                blurDataURL="../../public/favicon.ico"
              />
            </Link>
          </div>
          <nav className="nav-items">
            <ul>
              <Link href="/">
                <ul>
                  <li>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      viewBox="0 0 576 512"
                      aria-hidden="true"
                      focusable="false"
                      height="1.28em"
                      width="1.28em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                    </svg>
                  </li>
                </ul>
                <span className="hidden">Home</span>
              </Link>
              <Link href="/projects">
                <ul>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.47em"
                      height="1.47em"
                      viewBox="0 0 24 24"
                    >
                      <g fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M9.25 18.709c0-.42.336-.76.75-.76h4c.414 0 .75.34.75.76s-.336.76-.75.76h-4a.755.755 0 0 1-.75-.76Zm.667 2.532c0-.42.335-.76.75-.76h2.666c.415 0 .75.34.75.76a.754.754 0 0 1-.75.759h-2.666a.755.755 0 0 1-.75-.76Z"
                          clipRule="evenodd"
                        />
                        <path d="m7.41 13.828l1.105 1.053c.31.295.485.707.485 1.137c0 .647.518 1.172 1.157 1.172h3.686c.639 0 1.157-.525 1.157-1.172c0-.43.176-.842.485-1.137l1.104-1.053c1.542-1.48 2.402-3.425 2.41-5.446L19 8.297C19 4.842 15.866 2 12 2S5 4.842 5 8.297v.085c.009 2.021.87 3.966 2.41 5.446Z" />
                      </g>
                    </svg>
                  </li>
                </ul>
                <span className="hidden">Projects</span>
              </Link>
              <Link href="/posts">
                <ul>
                  <li>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      aria-hidden="true"
                      focusable="false"
                      height="1.28em"
                      width="1.28em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M512 0C460.22 3.56 96.44 38.2 71.01 287.61c-3.09 26.66-4.84 53.44-5.99 80.24l178.87-178.69c6.25-6.25 16.4-6.25 22.65 0s6.25 16.38 0 22.63L7.04 471.03c-9.38 9.37-9.38 24.57 0 33.94 9.38 9.37 24.59 9.37 33.98 0l57.13-57.07c42.09-.14 84.15-2.53 125.96-7.36 53.48-5.44 97.02-26.47 132.58-56.54H255.74l146.79-48.88c11.25-14.89 21.37-30.71 30.45-47.12h-81.14l106.54-53.21C500.29 132.86 510.19 26.26 512 0z"></path>
                    </svg>
                  </li>
                </ul>
                <span className="hidden">posts</span>
              </Link>
              <Link href="/about">
                <ul>
                  <li>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                      aria-hidden="true"
                      focusable="false"
                      height="1.28em"
                      width="1.28em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                    </svg>
                  </li>
                </ul>
                <span className="hidden">About</span>
              </Link>
            </ul>
          </nav>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
