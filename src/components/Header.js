import Link from "next/link";
import { FaTwitter, FaGithub, FaDiscord } from "react-icons/fa";
import { TooltipComponent } from "./hexta-ui/Tooltip";

export const Header = () => {
  return (
    <>
      <header className="flex flex-wrap items-center justify-between p-4 bg-zinc-950 mt-[2rem] rounded-xl border border-zinc-900 gap-2">
        <div className="flex flex-col justify-center ">
          <h1 className="text-3xl font-bold tracking-tight">Preet Suthar</h1>
          <p className="text-sm text-zinc-300">Creative Front-end developer</p>
        </div>
        <div className="flex gap-2">
          <Link
            href="https://twitter.com/preetsuthar17"
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
      </header>
    </>
  );
};
