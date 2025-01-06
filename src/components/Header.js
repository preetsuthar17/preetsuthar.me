import Link from "next/link";

import { SpotifyStatus } from "./SpotifyStatus";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { FaInstagram, FaTwitter, FaYoutube, FaGithub } from "react-icons/fa";

const Header = () => {
  const links = [
    {
      name: "Twitter",
      icon: <FaTwitter size={20} className=" fill-[#1c96e9] transition-all" />,
      link: "https://twitter.com/preetsuthar17",
    },
    {
      name: "YouTube",
      icon: <FaYoutube size={20} className=" fill-[#ff0033] transition-all" />,
      link: "https://youtube.com/@preetsuthar17",
    },
    {
      name: "GitHub",
      icon: <FaGithub size={20} className=" fill-[#252a2f] transition-all" />,
      link: "https://github.com/preetsuthar17",
    },
    {
      name: "Instagram",
      icon: (
        <FaInstagram
          size={20}
          className=" bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] fill-white rounded-md transition-all "
        />
      ),
      link: "https://instagram.com/preetsuthar17",
    },
  ];

  return (
    <>
      <header className="flex flex-col gap-6 text-justify text-pretty">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-medium tracking-tight">Preet Suthar</h1>
          <SpotifyStatus />
        </div>
        <p>
          <em className="[font:var(--type-italic)]">
            I build & ship SaaS products.
          </em>
        </p>
        <p>
          I am an Indie Hacker or a SaaS Creator. I've launched over 10 startups{" "}
          <em className="[font:var(--type-italic)]">(SaaS)</em>  in the last 5
          years, each focusing on easy-to-use and secure tech solutions.
        </p>
        <div className="flex items-center gap-4">
          {links.map((link, index) => (
            <TooltipProvider key={index} delayDuration={100}>
              <Tooltip>
                <TooltipTrigger>
                  <Link href={`${link.link}`} target="_blank">
                    {link.icon}
                  </Link>
                </TooltipTrigger>
                <TooltipContent sideOffset={8}>{link.name}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </header>
    </>
  );
};

export default Header;
