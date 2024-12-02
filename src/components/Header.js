import Link from "next/link";
import { FaTwitter, FaGithub, FaDiscord } from "react-icons/fa";
import { TooltipComponent } from "./hexta-ui/Tooltip";

export const Header = () => {
  return (
    <>
      <header className="flex flex-wrap items-center justify-between mt-[2rem] rounded-xl  gap-5">
        <div className="flex flex-wrap grow items-center justify-between p-4  rounded-xl  gap-2">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold tracking-tight">Preet Suthar</h1>
            <div>
              <div className="absolute flex size-4 mt-[2px]">
                <span className="absolute top-[4.5px] size-2 animate-ping rounded-full bg-green-500 opacity-75"></span>
                <span className="relative top-[4.5px] size-2 rounded-full bg-green-500"></span>
              </div>
              <p className="text-sm ml-4 text-zinc-300 flex items-center gap-4">
                available for work
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Link
              href="https://twitter.com/nott_preett"
              target="_blank"
              className="p-2 transition-all rounded hover:bg-zinc-900 duration-[0.2s] flex items-center h-fit m-auto"
            >
              <TooltipComponent direction="bottom" text="Twitter (x)">
                <FaTwitter size={20} className="text-gray-300" />
              </TooltipComponent>
            </Link>
            <Link
              href="https://github.com/preetsuthar17"
              target="_blank"
              className="p-2 transition-all rounded hover:bg-zinc-900 duration-[0.2s]"
            >
              <TooltipComponent direction="bottom" text="Github">
                <FaGithub size={20} className="text-gray-300" />
              </TooltipComponent>
            </Link>
            <Link
              href="https://dsc.gg/preet"
              target="_blank"
              className="p-2 transition-all rounded hover:bg-zinc-900 duration-[0.2s]"
            >
              <TooltipComponent direction="bottom" text="Discord">
                <FaDiscord size={20} className="text-gray-300" />
              </TooltipComponent>
            </Link>
          </div>
          <div className="mt-12 text-sm ">
            <p>
              I'm a <i>Front-End Developer</i> building minimal and but
              significant things for the web. Strive for learning and improving
              myself constantly with new skills and technologies.{" "}
            </p>
          </div>
        </div>
      </header>
    </>
  );
};
