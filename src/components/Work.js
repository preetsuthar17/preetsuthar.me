"use client";

import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import webDesignDev from "@/data/web-design-dev";
import saas from "@/data/saas";

import Image from "next/image";

export default function work({ posts }) {
  return (
    <>
      <article className="flex justify-between flex-col flex-wrap gap-12 text-left">
        <div className="flex-1 flex flex-col items-start justify-start gap-6">
          <h2 className="font-medium opacity-80 mb-4">
            Web Design & Development
          </h2>
          <ul className="flex flex-col gap-12">
            {webDesignDev.map((project, index) => (
              <li
                key={index}
                className="flex flex-col items-start text-left rounded-xl transition-all gap-3 cursor-pointer"
                onClick={() => window.open(project.link, "_blank")}
              >
                <div className="relative rounded-xl">
                  <Image
                    src={project.image}
                    width={1920}
                    height={1080}
                    layout="responsive"
                    alt={project.title}
                    className="rounded-xl"
                  />
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-col items-start gap-3">
                    <Link
                      className="flex items-start gap-1 font-medium  justify-between w-full"
                      target="_blank"
                      href={project.link}
                    >
                      {project.title}
                    </Link>
                    <p className="text-sm opacity-80">{project.description}</p>
                  </div>
                  <FiArrowUpRight size={18} />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div className="flex justify-between flex-wrap gap-12 text-left">
          <div className="flex-1 flex flex-col items-start justify-start text-left gap-6">
            <h2 className="font-medium opacity-80 mb-4">SaaS Projects</h2>
            <ul className="flex flex-col gap-4">
              {saas.slice(0, 5).map((saas, index) => (
                <li key={index} className="flex flex-col items-start  gap-2">
                  <Link
                    className="flex items-start gap-1 font-medium  justify-start w-full"
                    target="_blank"
                    href={saas.link}
                  >
                    {saas.title}
                    <FiArrowUpRight size={18} />
                  </Link>
                  <p className="text-sm opacity-80">{saas.description}</p>
                </li>
              ))}
            </ul>
            <Link href="/saas" className="font-medium  text-sm underline">
              View All SaaS Projects
            </Link>
          </div>
          <div className="flex-1 flex flex-col items-start justify-between gap-6">
            <h2 className="font-medium opacity-80 mb-4">Writing</h2>
            <ul className="flex flex-col gap-4">
              {posts?.slice(0, 5).map((post) => (
                <li
                  key={post.slug}
                  className="flex flex-col items-start text-left gap-2"
                >
                  <Link
                    className="flex items-start gap-1 font-medium justify-between w-full"
                    href={`/writing/${post.slug}`}
                  >
                    {post.title}
                    <span>
                      <FiArrowUpRight size={18} />
                    </span>
                  </Link>
                  <p className="text-sm opacity-80 text-left">{post.excerpt}</p>
                </li>
              ))}
            </ul>
            <Link href="/writings" className="font-medium  text-sm underline">
              View All Posts
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
