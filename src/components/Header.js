import Link from "next/link";
import { FaGit, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

export const Header = () => {
  return (
    <>
      <header className="flex flex-wrap items-center justify-between px-4 py-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Preet Suthar</h1>
          <p className="text-sm text-zinc-300">Creative Front-end developer</p>
        </div>
        <div className="flex gap-2">
          <Link
            href="#"
            className="p-2 transition-all rounded hover:bg-zinc-950 duration-[0.2s]"
          >
            <FaTwitter size={20} className="text-gray-300" />
          </Link>
          <Link
            href="#"
            className="p-2 transition-all rounded hover:bg-zinc-900 duration-[0.2s]"
          >
            <FaGithub size={20} className="text-gray-300" />
          </Link>
          <Link
            href="#"
            className="p-2 transition-all rounded hover:bg-zinc-900 duration-[0.2s]"
          >
            <FaDiscord size={20} className="text-gray-300" />
          </Link>
        </div>
      </header>
    </>
  );
};
