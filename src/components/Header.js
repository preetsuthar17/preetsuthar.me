"use client";

import Link from "next/link";

import { SpotifyStatus } from "./SpotifyStatus";

const Header = () => {
  return (
    <>
      <header className="flex flex-col gap-24 text-justify justify-evenly ">
        <div className="flex gap-4">
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
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h1 className="tracking-tight text-lg">Preet Suthar</h1>
          </div>
          <div className="grayscale-100">
            <SpotifyStatus />
          </div>
          <p>Design and dev partner for startups and founders.</p>
          <div className="flex gap-2">
            <Link
              href="https://cal.com/hextastudio/development-partner"
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
