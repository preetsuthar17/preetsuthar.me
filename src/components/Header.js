" use client";
import Link from "next/link";

import { motion } from "motion/react";

import { SpotifyStatus } from "./SpotifyStatus";

const Header = () => {
  return (
    <>
      <header className="flex flex-col gap-6 text-justify justify-evenly">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-medium tracking-tight">Preet Suthar</h1>
          <SpotifyStatus />
        </div>
        <p>
          <motion.em
            className="bg-[linear-gradient(110deg,#000000,35%,#ffffff10,50%,#404040,75%,#000000)] bg-[length:200%_100%] bg-clip-text text-base font-medium text-transparent [font:var(--type-italic)]"
            initial={{ backgroundPosition: "200% 0" }}
            animate={{ backgroundPosition: "-200% 0" }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "linear",
            }}
          >
            Design and dev partner for startups and founders.
          </motion.em>
        </p>
        <p>
          A freelance web developer and Indie Hacker. I specialize in creating
          fast, responsive, and interactive websites, as well as web
          applications, e-commerce platforms, and landing pages.
        </p>
        <p>
          As an Indie Hacker, I've successfully launched over 10 startups (SaaS)
          in the past 5 years, each designed to deliver secure, easy-to-use tech
          solutions.
        </p>

        <p className="w-[6rem]">
        <svg
            viewBox="0 0 2489 1189"
            fill="none"
            id="sign"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.55469 1186.85C106.294 1162.5 206.166 1128.34 305.779 1086.85C616.91 957.244 902.169 782.789 1131.39 532.627C1221.89 433.861 1333.51 298.805 1352.28 158.007C1365.27 60.5581 1289.58 -0.806691 1198.05 2.28758C1119.32 4.94944 1041.59 43.9492 992.584 105.271C897.778 223.893 930.115 382.08 986.365 509.742C1046.92 647.168 1137.91 767.452 1238.35 877.896C1274.8 917.975 1318.58 951.13 1353.77 992.322C1355.6 994.465 1356.59 1000.91 1353.77 1000.78C1342.82 1000.26 1332.81 994.36 1322.43 990.829C1232.2 960.127 1144.39 934.957 1050.05 918.442C959 892.5 846.5 861.5 775 858.5C747.644 857.352 637 497 592 410C641.5 493 833.907 1080.25 848.5 1079C776.173 895.5 678 854.5 781.667 837.394C983.073 804.161 1602.26 746.206 1899 658C2048.64 613.519 2238.04 542.654 2384.6 488.847C2389.98 486.872 2457.81 451.959 2474.15 456.261C2480.71 457.986 2484.64 473.548 2486.59 479.394"
              stroke="currentColor"
              stroke-width="10"
              stroke-linecap="round"
            />
          </svg>
        </p>
      </header>
    </>
  );
};

export default Header;
