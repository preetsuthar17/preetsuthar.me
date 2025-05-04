"use client";

import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import webDesignDev from "@/data/web-design-dev";
import saas from "@/data/saas";

import { OptimizedImage } from "./OptimizedImage";

export default function work({ posts }) {
  return (
    <>
      <article className="flex justify-between flex-col flex-wrap gap-20 text-left">
        <div className="flex justify-between max-[480px]:flex-col gap-12 text-left">
          <div className="flex-1 flex flex-col items-start justify-start text-left gap-6">
            <h2 className="font-medium opacity-80 mb-4">SaaS Projects</h2>
            <ul className="flex flex-col gap-6 w-full">
              {saas.slice(0, 5).map((saas, index) => (
                <li
                  key={index}
                  className="flex flex-col items-start text-left gap-2 w-full"
                >
                  <Link
                    className="flex items-start gap-1 font-medium justify-between w-full"
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
            <Link href="/saas" className="font-medium text-sm underline">
              View All SaaS Projects
            </Link>
          </div>
          <div className="flex-1 flex flex-col  justify-between gap-6 w-full">
            <h2 className="font-medium opacity-80 mb-4">Writing</h2>
            <ul className="flex flex-col gap-6">
              {posts?.slice(0, 4).map((post) => (
                <li
                  key={post.slug}
                  className="flex flex-col items-start text-left gap-2 w-full"
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
            <Link href="/writings" className="font-medium text-sm underline">
              View All Posts
            </Link>
          </div>
        </div>{" "}
        <hr />
        <div className="flex-1 flex flex-col items-start justify-start gap-6">
          <h2 className="font-medium opacity-80 mb-6">
            Web Design & Development
          </h2>{" "}
          <ul className="flex flex-col gap-6 w-full grow">
            {webDesignDev.map((project, index) => (
              <li
                key={index}
                className="relative flex flex-col items-start text-left rounded-xl transition-all gap-3 cursor-pointer w-full group"
                onClick={() => window.open(project.link, "_blank")}
              >
                <div className="relative rounded-xl overflow-hidden border">
                  <OptimizedImage
                    src={project.image}
                    width={1920}
                    height={1080}
                    alt={project.title}
                    className="rounded-xl grow max-w-full w-full h-auto"
                    loading="eager"
                    priority={index < 2}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl backdrop-blur-xl text-center p-4 duration-300">
                    <div className="text-white text-center p-4">
                      <h3 className="font-medium">{project.title}</h3>
                      <p className="text-sm opacity-80">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <Link
            href="/web-design-dev"
            className="font-medium text-sm underline mt-4"
          >
            View All Web Work
          </Link>
        </div>
      </article>
    </>
  );
}
