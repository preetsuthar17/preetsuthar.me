"use client";

import Link from "next/link";

import { SpotifyStatus } from "./SpotifyStatus";

const Header = () => {
  return (
    <>
      <header className="flex flex-col gap-24  text-justify justify-evenly">
        <div className="flex gap-4 flex-wrap  px-10 ">
          <Link
            className="underline text-[var(--blue-color)] underline-offset-4"
            href="https://x.com/preetsuthar17"
            target="_blank"
          >
            twitter/x
          </Link>
          //
          <Link
            className="underline text-[var(--blue-color)] underline-offset-4"
            href="https://github.com/preetsuthar17"
            target="_blank"
          >
            github
          </Link>
          //
          <Link
            className="underline text-[var(--blue-color)] underline-offset-4"
            href="https://youtube.com/@preetsuthar17"
            target="_blank"
          >
            youtube
          </Link>
          //
          <Link
            rel="alternate"
            type="application/rss+xml"
            title="RSS Feed"
            className="underline text-[var(--blue-color)] underline-offset-4"
            href="/api/rss.xml"
          >
            RSS
          </Link>
          //
          <Link
            className="underline text-[var(--blue-color)] underline-offset-4"
            href="/llms.txt"
            target="_blank"
          >
            llms.txt
          </Link>
        </div>

        {/* divider */}
        <div className="h-6 border-y relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-45deg, #e4e4e7 0 1px, transparent 1px 10px)",
              opacity: 1,
            }}
          />
        </div>
        {/* divider */}

        <div className="flex flex-col gap-6  px-10  ">
          <div>
            <h1 className="tracking-tight text-lg">Preet Suthar</h1>
          </div>
          <div className="grayscale-100">
            <SpotifyStatus />
          </div>
          <p className="text-left">
            I'm software engineer and I build open-source projects
          </p>
          <div className="flex gap-2 flex-wrap">
            <Link
              href="https://github.com/sponsors/preetsuthar17"
              target="_blank"
              className="px-5 py-3 bg-primary hover:bg-[var(--blue-color)] text-white w-fit border border-primary hover:border-[var(--blue-color)]"
            >
              Sponsor My Work
            </Link>
            <Link
              href="https://cal.com/hextastudio/development-partner"
              target="_blank"
              className="px-5 py-3 border border-primary text-primary w-fit hover:bg-secondary"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
