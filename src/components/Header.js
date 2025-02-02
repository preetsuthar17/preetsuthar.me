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
            viewBox="0 0 2491 1191"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M759.703 489.172C793.887 716.669 839.56 942.568 876.119 1169.76M3 1187.67C107.739 1163.33 207.612 1129.17 307.224 1087.67C446.298 1029.74 580.202 962.846 706.243 884.236M706.243 884.236C710.674 881.472 715.095 878.694 719.507 875.901M706.243 884.236C727.593 886.659 782.406 886.01 805.724 888.172C896.223 896.565 960.912 903.411 1051.49 919.266C1145.84 935.782 1233.64 960.951 1323.87 991.653C1334.25 995.184 1344.27 1001.08 1355.22 1001.6C1358.03 1001.74 1357.05 995.289 1355.22 993.146C1320.03 951.954 1276.25 918.799 1239.8 878.72C1222.06 859.22 1204.62 839.413 1187.59 819.259M706.243 884.236C696.534 883.134 693.744 881.397 703.984 878.471C709.05 877.024 714.248 876.297 719.507 875.901M719.507 875.901C835.751 802.313 945.165 718.587 1045.61 622.532M719.507 875.901C728.867 875.197 738.421 875.542 747.764 874.74C860.125 865.089 917.653 861.452 1036.32 843.895C1086.87 836.415 1137.29 828.185 1187.59 819.259M1045.61 622.532C1075.5 593.949 1104.59 564.275 1132.83 533.452C1223.33 434.685 1334.95 299.629 1353.72 158.831C1366.72 61.3823 1291.02 0.0175275 1199.5 3.1118C1120.76 5.77366 1043.04 44.7734 994.029 106.095C899.223 224.717 931.561 382.904 987.81 510.566C1004.83 549.188 1024.25 586.456 1045.61 622.532ZM1045.61 622.532C1086.83 692.159 1135.28 757.346 1187.59 819.259M1187.59 819.259C1442.18 774.081 1693.49 711.085 1941.28 637.43C2090.92 592.949 2239.49 543.479 2386.05 489.671C2391.43 487.696 2459.25 452.783 2475.6 457.085C2482.15 458.81 2486.09 474.372 2488.04 480.219"
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
