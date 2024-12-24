import Link from "next/link";

import {
  FaTwitter,
  FaGithub,
  FaDiscord,
  FaLocationArrow,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaMoneyBill } from "react-icons/fa";

import { TooltipComponent } from "./hexta-ui/Tooltip";

import { SpotifyStatus } from "./SpotifyStatus";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  return (
    <>
      <header className="flex flex-wrap items-center justify-between rounded-xl  gap-5">
        <div className="flex flex-wrap grow items-center justify-between p-4  rounded-xl  gap-2">
          <div className="flex flex-col justify-center gap-1">
            <h1 className="text-3xl flex gap-3 old-standard-fonts font-medium tracking-tight ">
              Preet Suthar
            </h1>
            <SpotifyStatus />
          </div>
          <div className="flex gap-1">
            <ThemeToggle />
            <Link
              href="https://twitter.com/nott_preett"
              target="_blank"
              aria-label="Visit Twitter profile"
              className="transition-all rounded hover:bg-gray-100 dark:hover:bg-zinc-800 duration-[0.2s] flex items-center h-fit m-auto"
            >
              <TooltipComponent
                direction="bottom"
                className="border-none bg-gray-100 mt-4"
                text="Twitter (x)"
              >
                <FaTwitter size={35} className="text-zinc-500 p-2" />
              </TooltipComponent>
            </Link>
            <Link
              href="https://github.com/preetsuthar17"
              target="_blank"
              aria-label="Visit GitHub profile"
              className="transition-all rounded hover:bg-gray-100 dark:hover:bg-zinc-800 duration-[0.2s]"
            >
              <TooltipComponent
                direction="bottom"
                className="border-none bg-gray-100 mt-4"
                text="Github"
              >
                <FaGithub size={35} className="text-zinc-500 p-2" />
              </TooltipComponent>
            </Link>
            <Link
              href="https://discord.com/users/741549223127941170"
              target="_blank"
              aria-label="Connect on Discord"
              className="transition-all rounded hover:bg-gray-100 dark:hover:bg-zinc-800 duration-[0.2s]"
            >
              <TooltipComponent
                direction="bottom"
                className="border-none bg-gray-100 mt-4"
                text="Discord"
              >
                <FaDiscord size={35} className="text-zinc-500 p-2" />
              </TooltipComponent>
            </Link>
          </div>
          <div className="mt-5 text-sm flex flex-col gap-5">
            <p>
              Hi, I'm Preet Suthar, a full-time SaaS creator. I've started more
              than 10 businesses, focusing on easy-to-use and secure tech
              solutions.
            </p>
            <p>
              I'm looking for new projects and partners. Let's chat and see how
              we can create something great together. Book a call with me now!
            </p>
            <div className="flex gap-4 opacity-80 items-center">
              <p className="flex items-center gap-1 text-sm ">
                <FaLocationDot size={17} /> India
              </p>
              <p className="flex items-center gap-1 text-sm ">
                <FaMoneyBill size={17} /> $40/month
              </p>
            </div>
            <Link
              className="primary-button"
              href="https://cal.com/preetsuthar/20min"
              target="_blank"
            >
              Book a call
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};
