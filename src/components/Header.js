import Link from "next/link";
import { FaTwitter, FaGithub, FaDiscord } from "react-icons/fa";

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
            className="p-2 transition-all rounded hover:bg-zinc-900 duration-[0.2s]"
          >
            <FaTwitter size={20} className="text-gray-300" />
          </Link>
          <Link
            href="https://github.com/preetsuthar17"
            target="_blank"
            className="p-2 transition-all rounded hover:bg-zinc-900 duration-[0.2s]"
          >
            <FaGithub size={20} className="text-gray-300" />
          </Link>
          <Link
            href="https://dsc.gg/preet"
            target="_blank"
            className="p-2 transition-all rounded hover:bg-zinc-900 duration-[0.2s]"
          >
            <FaDiscord size={20} className="text-gray-300" />
          </Link>
        </div>
      </header>
    </>
  );
};
