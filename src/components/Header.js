"use client";

import Link from "next/link";

import { SpotifyStatus } from "./SpotifyStatus";

const Header = () => {
  return (
    <>
      <header className="flex flex-col gap-12  text-pretty justify-evenly">
        <div className="flex gap-4 flex-wrap  px-10 ">
          <Link
            className="underline text-blue underline-offset-4"
            href="/twitter"
            target="_blank"
          >
            twitter
          </Link>
          //
          <Link
            className="underline text-blue underline-offset-4"
            href="/github"
            target="_blank"
          >
            github
          </Link>
          //
          <Link
            className="underline text-blue underline-offset-4"
            href="/youtube"
            target="_blank"
          >
            youtube
          </Link>
          //
          <Link
            rel="alternate"
            title="my story"
            className="underline text-blue underline-offset-4"
            href="/story"
          >
            my story
          </Link>
          //
          <Link
            rel="alternate"
            type="application/rss+xml"
            title="rss Feed"
            className="underline text-blue underline-offset-4"
            href="/api/rss.xml"
          >
            rss feed
          </Link>
          //
          <Link
            className="underline text-blue underline-offset-4"
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
            <h1 className="tracking-tight text-xl">Preet Suthar</h1>
          </div>
          <div className="grayscale-100">
            <SpotifyStatus />
          </div>
          <p className="text-left">
             design engineer
          </p>
          <div className="flex gap-2 flex-wrap">
            <Link
              href="/sponsor"
              target="_blank"
              className="px-4 py-2 bg-blue text-white w-fit border border-blue hover:brightness-90"
            >
              Sponsor my work
            </Link>
            <Link
              href="/#contact"
              className="px-4 py-2 bg-transparent text-blue w-fit border border-blue hover:bg-blue hover:text-white"
            >
              Hire me
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
