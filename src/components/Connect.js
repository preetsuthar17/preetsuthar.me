import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { FaTwitter, FaYoutube, FaGithub } from "react-icons/fa";

const Connect = () => {
  const links = [
    {
      name: "Twitter",
      icon: (
        <FaTwitter
          size={20}
          className="fill-[#00000099] hover:fill-[#1c96e9] transition-all"
        />
      ),
      link: "https://twitter.com/preetsuthar17",
    },
    {
      name: "YouTube",
      icon: (
        <FaYoutube
          size={20}
          className="fill-[#00000099] hover:fill-[#ff0033] transition-all"
        />
      ),
      link: "https://youtube.com/@preetsuthar17",
    },
    {
      name: "GitHub",
      icon: (
        <FaGithub
          size={20}
          className="fill-[#00000099] hover:fill-[#252a2f] transition-all"
        />
      ),
      link: "https://github.com/preetsuthar17",
    },
  ];

  return (
    <>
      <section className="flex flex-col gap-6">
        <h2 className="font-medium">Connect with me</h2>
        <p>
          <span className="opacity-80">Reach me at</span>{" "}
          <Link className="underline" href="https://x.com/preetsuthar17">
            @preetsuthar17
          </Link>{" "}
          <span className="opacity-80">or mail me at</span>{" "}
          <Link className="underline" href="mailto:preetsutharxd@gmail.com">
            preetsutharxd@gmail.com
          </Link>
        </p>{" "}
        <div className="flex items-center gap-4">
          {links.map((link, index) => (
            <TooltipProvider key={index} delayDuration={100}>
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    href={`${link.link}`}
                    target="_blank"
                    aria-label={`Link to ${link.name}`}
                  >
                    {link.icon}
                  </Link>
                </TooltipTrigger>
                <TooltipContent sideOffset={8}>{link.name}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>{" "}
      </section>
    </>
  );
};

export default Connect;
