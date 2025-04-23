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
        <Link
          href="https://cal.com/hextastudio/development-partner"
          target="_blank"
          className="px-4 py-2 rounded-full border  border-orange-600 w-fit text-sm shadow-[0px_3px_0px_0px_#b64409] bg-orange-600 text-white font-medium active:bg-orange-700 active:shadow-[0px_0px_0px_0px_#b64409] active:translate-y-0.5 transition-all"
        >
          Book a free call
        </Link>
        <p className="w-[6rem]">
          <svg
            viewBox="0 0 2489 1270"
            id="sign"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 1186.67C106.739 1162.33 206.612 1128.17 306.224 1086.67C617.355 957.068 902.615 782.614 1131.83 532.452C1222.33 433.685 1333.95 298.629 1352.72 157.831C1365.72 60.3823 1290.02 -0.982473 1198.5 2.1118C1119.76 4.77366 1042.04 43.7734 993.029 105.095C898.223 223.717 930.561 381.904 986.81 509.566C1047.36 646.992 1138.35 767.276 1238.8 877.72C1275.25 917.799 1319.03 950.954 1354.22 992.146C1356.05 994.289 1357.03 1000.74 1354.22 1000.6C1343.27 1000.08 1333.25 994.184 1322.87 990.653C1232.64 959.951 1144.84 934.782 1050.49 918.266C959.445 892.324 805.515 871 734.015 868C706.659 866.852 691 714 646 627C695.5 710 828.407 1269.25 843 1268C702 768 689.13 879.555 838 845C1068.49 791.5 1602.7 746.03 1899.45 657.824C2049.09 613.343 2238.49 542.479 2385.05 488.671C2390.43 486.696 2458.25 451.783 2474.6 456.085C2481.15 457.81 2485.09 473.372 2487.04 479.219"
              stroke="currentColor"
              strokeWidth="10"
              strokeLinecap="round"
            />
          </svg>
        </p>
      </header>
    </>
  );
};

export default Header;
