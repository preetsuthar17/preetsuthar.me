"use client";

import Link from "next/link";

import { FiArrowUpRight } from "react-icons/fi";

import saas from "@/data/saas";

export default function work({ posts }) {
  return (
    <>
      <article className="flex justify-between flex-col flex-wrap text-left font-medium">
        <div className="flex justify-between flex-col gap-24  text-left">
          <div className="flex flex-col items-center w-full justify-between text-left gap-6">
            <ul className="flex flex-col gap-5 w-full">
              {posts?.map((post) => (
                <li
                  key={post.slug}
                  className="flex items-center text-left gap-2 w-full justify-between max-[590px]:flex-col max-[590px]:items-start"
                >
                  <Link
                    className="flex items-center gap-1 font-medium justify-between text-[var(--blue-color)] max-[590px]:w-full"
                    href={`/writing/${post.slug}`}
                  >
                    {post.title}
                    <span>
                      <FiArrowUpRight size={18} />
                    </span>
                  </Link>
                  <p className="opacity-80 text-left">{post.date}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center w-full justify-between text-left gap-6">
            <ul className="flex flex-col gap-5 w-full">
              {saas.map((saas, index) => (
                <li
                  key={index}
                  className="flex items-center text-left gap-2 w-full justify-between  max-[590px]:flex-col max-[590px]:items-start"
                >
                  <Link
                    className="flex items-center gap-1 font-medium justify-between text-[var(--blue-color)]  max-[590px]:w-full"
                    target="_blank"
                    href={saas.link}
                  >
                    {saas.title}
                    <FiArrowUpRight size={18} />
                  </Link>
                  <p className="opacity-80">{saas.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>{" "}
      </article>
    </>
  );
}
